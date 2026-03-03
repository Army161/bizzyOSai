const axios = require('axios');

const githubClient = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Authorization: `token ${process.env.GITHUB_TOKEN}`,
    Accept: 'application/vnd.github.v3+json',
  },
});

class GitHubHandler {
  async createRepository(name, description, isPrivate = false) {
    try {
      const response = await githubClient.post('/user/repos', {
        name,
        description,
        private: isPrivate,
        auto_init: true,
      });
      return {
        success: true,
        repoId: response.data.id,
        repoName: response.data.name,
        repoUrl: response.data.html_url,
      };
    } catch (error) {
      throw new Error(`Repository creation failed: ${error.message}`);
    }
  }

  async execute(action, params) {
    switch (action) {
      case 'create_repo':
        return this.createRepository(params.name, params.description, params.isPrivate);
      default:
        throw new Error(`Unknown action: ${action}`);
    }
  }
}

module.exports = new GitHubHandler();
