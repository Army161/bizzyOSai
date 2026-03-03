const axios = require('axios');

const vercelClient = axios.create({
  baseURL: 'https://api.vercel.com',
  headers: {
    Authorization: `Bearer ${process.env.VERCEL_API_TOKEN}`,
  },
});

class VercelHandler {
  async deployProject(projectName, gitRepository) {
    try {
      const response = await vercelClient.post('/projects', {
        name: projectName,
        gitRepository: { type: 'github', repo: gitRepository },
      });
      return {
        success: true,
        projectId: response.data.id,
        projectName: response.data.name,
        projectUrl: response.data.alias?.[0] || `${response.data.name}.vercel.app`,
      };
    } catch (error) {
      throw new Error(`Deployment failed: ${error.message}`);
    }
  }

  async execute(action, params) {
    switch (action) {
      case 'deploy':
        return this.deployProject(params.projectName, params.gitRepository);
      default:
        throw new Error(`Unknown action: ${action}`);
    }
  }
}

module.exports = new VercelHandler();
