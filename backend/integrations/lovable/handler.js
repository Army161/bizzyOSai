const axios = require('axios');

const lovableClient = axios.create({
  baseURL: 'https://api.lovable.dev/v1',
  headers: {
    Authorization: `Bearer ${process.env.LOVABLE_API_KEY}`,
    'Content-Type': 'application/json',
  },
});

class LovableHandler {
  async generateUI(description) {
    try {
      const response = await lovableClient.post('/generate/ui', {
        description,
        framework: 'react',
        tailwind: true,
      });
      return {
        success: true,
        component: response.data.component,
        code: response.data.code,
        preview: response.data.preview,
      };
    } catch (error) {
      throw new Error(`Lovable UI generation failed: ${error.message}`);
    }
  }

  async execute(action, params) {
    switch (action) {
      case 'generate_ui':
        return this.generateUI(params.description);
      default:
        throw new Error(`Unknown action: ${action}`);
    }
  }
}

module.exports = new LovableHandler();
