const mongoose = require("mongoose");

const SignatureSchema = new mongoose.Schema({
    userAddress: {
        type: String
    },
    Sign: {
        type: String
    },  
})

const ProposalSchema = new mongoose.Schema({
    ProposalHash: {
        type: String,
        required: true
    },
    Signature: [SignatureSchema]   
});



module.exports = mongoose.model(
    'proposalSchema',
    ProposalSchema,
    'proposalSchema'
);