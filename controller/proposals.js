const pinata = require('../utils/pinata');
const ProposalSchema = require('../models/proposals.js');
const axios = require('axios');

const baseURL = "http://localhost:4000";

module.exports.createProposal = async (req, res) => {
    try {
        let result = pinata.pinJSON(req.body);
        const {ProposalHash, Signature}= req.body
        console.log(Signature)
        const newProposal = new ProposalSchema({
            ProposalHash,
            Signature
        })
        if(newProposal){
            await newProposal.save()
            {
                res.status(201).json({'success': true, 'data':newProposal})
                
            }
            console.log(newProposal)
        }
        else
        {
            return res.status(404).json({
                success: false,
                message: 'PROPOSAL already exists.',
              })
        }
        
        // axios.post(`${baseURL}/proposal`) //------------>
        // .then(response => console.log(response))
        // .catch(error => {
        //   console.error('There was an error!', error);
        // });
            
    } catch (error) {
        return res.status(409).json({ error: error.message })
    }

    // {
    //     "ProposalHash": "ud1",
    //     "Signature": [
    //         {
    //             "userAddress": "0x00Ab",
    //             "Sign":"0xCCAA"
    //         }
    //         ]
    // }
}


module.exports.storeSign = async (req, res) => {
    try {
        let result = await pinata.pinJSON(req.body);
        res.status(200).json({'success': true, 'data': result})
    } catch (error) {
        res.status(400).json({'success': false, 'data': error.Error})
    }
}

module.exports.getAllProposals = async (req, res) => {
    try {
        const proposals = await ProposalSchema.find({});
        res.status(200).json({'success': true, 'data': proposals})
    } catch (error) {
        res.status(400).json({'success': false, 'data': error.Error})
    }
}

module.exports.getProposal = async (req, res) => {
    try {
        let proposal = await ProposalSchema.findOne({ProposalHash});
        res.status(200).json({'success': true, 'data': proposal})
    } catch (error) {
        res.status(400).json({'success': false, 'data': error.Error})
    }
}


