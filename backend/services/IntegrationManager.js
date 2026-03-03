const registry = require('../integrations/registry');

class IntegrationManager {
  getIntegrations() {
    return Object.entries(registry).map(([key, integration]) => ({
      id: key,
      name: integration.name,
      description: integration.description,
      actions: integration.actions,
    }));
  }

  getIntegration(integrationId) {
    const integration = registry[integrationId];
    if (!integration) {
      throw new Error(`Integration not found: ${integrationId}`);
    }
    return integration;
  }

  async executeAction(integrationId, action, params = {}) {
    const integration = this.getIntegration(integrationId);
    if (!integration.actions.includes(action)) {
      throw new Error(`Action '${action}' not supported by integration '${integrationId}'`);
    }
    return integration.handler.execute(action, params);
  }

  isSupported(integrationId) {
    return Object.prototype.hasOwnProperty.call(registry, integrationId);
  }
}

module.exports = new IntegrationManager();
