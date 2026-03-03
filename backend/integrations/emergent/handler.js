const axios = require('axios');

const emergentClient = axios.create({
  baseURL: 'https://api.emergent.ai/v1',
  headers: {
    Authorization: `Bearer ${process.env.EMERGENT_API_KEY}`,
    'Content-Type': 'application/json',
  },
});

class EmergentHandler {
  async createAgent(name, goal, capabilities) {
    try {
      const response = await emergentClient.post('/agents/create', {
        name,
        goal,
        capabilities,
        autoExecute: true,
      });

      return {
        success: true,
        agentId: response.data.id,
        agentName: response.data.name,
        status: response.data.status,
      };
    } catch (error) {
      throw new Error(`Agent creation failed: ${error.message}`);
    }
  }

  async execute(action, params) {
    switch (action) {
      case 'create_agent':
        return this.createAgent(params.name, params.goal, params.capabilities);
      default:
        throw new Error(`Unknown action: ${action}`);
    }
  }
}

module.exports = new EmergentHandler();
