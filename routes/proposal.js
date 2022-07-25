const express = require('express')
const router = express.Router();

const {createProposal, storeSign, getAllProposals, proposalById} = require('../controller/proposals')


router.post('/proposal', createProposal);
router.post('/sign', storeSign);
router.get('/proposals', getAllProposals);
router.get('/id', proposalById);

module.exports = router;

