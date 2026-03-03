const express = require('express');
const router = express.Router();
const registry = require('../integrations/registry');

const handlers = {
  lovable: require('../integrations/lovable/handler'),
  emergent: require('../integrations/emergent/handler'),
  claude: require('../integrations/claude/handler'),
  github: require('../integrations/github/handler'),
  vercel: require('../integrations/vercel/handler'),
  replit: require('../integrations/replit/handler'),
  'google-cloud': require('../integrations/google-cloud/handler'),
  'google-sheets': require('../integrations/google-sheets/handler'),
  antigravity: require('../integrations/antigravity/handler'),
  openclaw: require('../integrations/openclaw/handler'),
};

// GET /api/integrations-advanced - list all available integrations
router.get('/', (req, res) => {
  const list = Object.entries(registry).map(([key, info]) => ({
    key,
    ...info,
    hasHandler: key in handlers || key.replace(/([A-Z])/g, '-$1').toLowerCase() in handlers,
  }));
  res.json({ success: true, integrations: list });
});

// POST /api/integrations-advanced/:integration/execute - execute an action
router.post('/:integration/execute', async (req, res) => {
  const { integration } = req.params;
  const { action, params } = req.body;

  const handler = handlers[integration];
  if (!handler) {
    return res.status(404).json({ success: false, error: `Integration "${integration}" not found` });
  }

  if (!action) {
    return res.status(400).json({ success: false, error: 'action is required' });
  }

  try {
    const result = await handler.execute(action, params || {});
    res.json({ success: true, result });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// GET /api/integrations-advanced/:integration - get integration details
router.get('/:integration', (req, res) => {
  const { integration } = req.params;
  const info = registry[integration] || registry[integration.replace(/-([a-z])/g, (_, c) => c.toUpperCase())];

  if (!info) {
    return res.status(404).json({ success: false, error: `Integration "${integration}" not found` });
  }

  res.json({ success: true, integration: info });
});

module.exports = router;
