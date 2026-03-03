const lovableHandler = require('./lovable/handler');
const emergentHandler = require('./emergent/handler');
const claudeHandler = require('./claude/handler');
const githubHandler = require('./github/handler');
const vercelHandler = require('./vercel/handler');
const replitHandler = require('./replit/handler');
const googleCloudHandler = require('./google-cloud/handler');
const googleSheetsHandler = require('./google-sheets/handler');
const antiGravityHandler = require('./antigravity/handler');
const openClawHandler = require('./openclaw/handler');

const registry = {
  lovable: {
    name: 'Lovable',
    description: 'AI-powered UI generation',
    handler: lovableHandler,
    actions: ['generate_ui'],
  },
  emergent: {
    name: 'Emergent',
    description: 'Autonomous AI agent creation',
    handler: emergentHandler,
    actions: ['create_agent'],
  },
  claude: {
    name: 'Claude',
    description: 'Anthropic Claude AI text generation',
    handler: claudeHandler,
    actions: ['generate_text'],
  },
  github: {
    name: 'GitHub',
    description: 'GitHub repository management',
    handler: githubHandler,
    actions: ['create_repo'],
  },
  vercel: {
    name: 'Vercel',
    description: 'Serverless deployment platform',
    handler: vercelHandler,
    actions: ['deploy'],
  },
  replit: {
    name: 'Replit',
    description: 'Online IDE and code execution',
    handler: replitHandler,
    actions: ['create_repl'],
  },
  'google-cloud': {
    name: 'Google Cloud',
    description: 'Cloud storage and Firestore database',
    handler: googleCloudHandler,
    actions: ['upload_storage', 'save_firestore'],
  },
  'google-sheets': {
    name: 'Google Sheets',
    description: 'Spreadsheet data synchronization',
    handler: googleSheetsHandler,
    actions: ['sync_data'],
  },
  antigravity: {
    name: 'AntiGravity',
    description: 'Data pipeline creation and management',
    handler: antiGravityHandler,
    actions: ['create_pipeline'],
  },
  openclaw: {
    name: 'OpenClaw',
    description: 'Autonomous task execution engine',
    handler: openClawHandler,
    actions: ['execute_task'],
  },
};

module.exports = registry;
