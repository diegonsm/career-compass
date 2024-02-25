const express = require('express');
const router = express.Router();
const { CohereClient } = require('cohere-ai');

const cohere = new CohereClient({
    token: "Nbphj8fs2o2mv3WpGm0ErBIGujqvC9FKf2MLUnMu",
});

router.post('/classification', async (req, res) => {
  try {
    const { text } = req.body;

    if (!text) {
      return res.status(400).json({ message: 'Text is required for summarization.' });
    }

    const summarizeResponse = await cohere.summarize({
        text: text,
    });

    return res.json({ summary: summarizeResponse.body.summary });
  } catch (error) {
    console.error('Error summarizing text:', error);
    return res.status(500).json({ message: 'Text could not be summarized' });
  }
});

module.exports = router;
