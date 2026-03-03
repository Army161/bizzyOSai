const express = require('express');\nconst router = express.Router();\n\nrouter.get('/', (req, res) => res.json({ message: 'Route working' }));\n\nmodule.exports = router;
