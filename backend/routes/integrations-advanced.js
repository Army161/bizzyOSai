const express = require('express');
const router = express.Router();
const integrationManager = require('../services/IntegrationManager');

// List all available integrations
router.get('/', (req, res) => {
  try {
    const integrations = integrationManager.getIntegrations();
    res.json({ success: true, integrations });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Get a specific integration
router.get('/:integrationId', (req, res) => {
  try {
    const integration = integrationManager.getIntegration(req.params.integrationId);
    res.json({
      success: true,
      integration: {
        id: req.params.integrationId,
        name: integration.name,
        description: integration.description,
        actions: integration.actions,
      },
    });
  } catch (error) {
    res.status(404).json({ success: false, error: error.message });
  }
});

// Execute an integration action
router.post('/:integrationId/execute', async (req, res) => {
  try {
    const { action, params } = req.body;
    if (!action) {
      return res.status(400).json({ success: false, error: 'action is required' });
    }
    const result = await integrationManager.executeAction(
      req.params.integrationId,
      action,
      params || {}
    );
    res.json(result);
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;

