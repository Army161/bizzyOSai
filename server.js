const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
require("dotenv").config();

const authRoutes = require("./backend/routes/auth");
const agentRoutes = require("./backend/routes/agents");
const integrationRoutes = require("./backend/routes/integrations");
const leadsRoutes = require("./backend/routes/leads");
const paymentRoutes = require("./backend/routes/payments");
const integrationsAdvancedRoutes = require("./backend/routes/integrations-advanced");

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

app.get("/health", (req, res) => {
  res.json({ status: "OK", timestamp: new Date().toISOString() });
});

app.use("/api/auth", authRoutes);
app.use("/api/agents", agentRoutes);
app.use("/api/integrations", integrationRoutes);
app.use("/api/leads", leadsRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/integrations-advanced", integrationsAdvancedRoutes);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({ error: err.message || "Internal Server Error" });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 bizzyOSai API running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV}`);
});

module.exports = app;
