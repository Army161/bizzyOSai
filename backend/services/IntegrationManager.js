const pool = require('../config/database');
const integrations = require('../integrations/registry');

class IntegrationManager {
  constructor() {
    this.activeIntegrations = new Map();
    this.registry = integrations;
  }

  getAllIntegrations() {
    return Object.values(this.registry).map((integration) => ({
      ...integration,
      isConnected: this.activeIntegrations.has(integration.name),
    }));
  }

  getIntegration(name) {
    return this.registry[name];
  }

  async connectIntegration(userId, integrationName, credentials) {
    try {
      const integration = this.getIntegration(integrationName);

      if (!integration) {
        throw new Error(`Integration "${integrationName}" not found`);
      }

      const result = await pool.query(
        'INSERT INTO integrations (user_id, name, type, credentials, is_active) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        [userId, integration.name, integrationName, JSON.stringify(credentials), true]
      );

      this.activeIntegrations.set(integration.name, result.rows[0]);

      console.log(`✅ Connected to ${integration.name}`);

      return result.rows[0];
    } catch (error) {
      console.error(`❌ Failed to connect ${integrationName}:`, error.message);
      throw error;
    }
  }

  async getUserIntegrations(userId) {
    const result = await pool.query(
      'SELECT id, name, type, is_active, created_at FROM integrations WHERE user_id = $1 AND is_active = true',
      [userId]
    );

    return result.rows.map((row) => ({
      ...row,
      details: this.registry[row.type],
    }));
  }
}

module.exports = new IntegrationManager();
