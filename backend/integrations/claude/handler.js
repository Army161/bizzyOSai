const axios = require('axios');

const claudeClient = axios.create({
  baseURL: 'https://api.anthropic.com/v1',
  headers: {
    'x-api-key': process.env.CLAUDE_API_KEY,
    'content-type': 'application/json',
  },
});

class ClaudeHandler {
  async generateText(prompt, maxTokens = 2048) {
    try {
      const response = await claudeClient.post('/messages', {
        model: 'claude-3-opus-20240229',
        max_tokens: maxTokens,
        messages: [{ role: 'user', content: prompt }],
      });
      return {
        success: true,
        text: response.data.content[0].text,
        tokensUsed: response.data.usage.output_tokens,
      };
    } catch (error) {
      throw new Error(`Claude generation failed: ${error.message}`);
    }
  }

  async execute(action, params) {
    switch (action) {
      case 'generate_text':
        return this.generateText(params.prompt, params.maxTokens);
      default:
        throw new Error(`Unknown action: ${action}`);
    }
  }
}

module.exports = new ClaudeHandler();
