// backend/server.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const connectDB = require('./config/db');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

connectDB();

// Routes
const dashboardRoutes = require('./modules/dashboard/routes/dashboardRoutes');
const financialsRoutes = require('./modules/financials/routes/financialsRoutes');
const tenantRoutes = require('./modules/tenants/routes/tenantsRoutes');
const propertiesRoutes = require('./modules/properties/routes/propertiesRoutes');
const utilityRoutes = require('./modules/utilities/routes/utilitiesRoutes');
const maintenanceRoutes = require('./modules/maintenance/routes/maintenanceRoutes');
const propertyGroupingRoutes = require('./modules/propertyGrouping/routes/propertyGroupingRoutes'); // ✅ NEW
const unitsRoutes = require('./modules/units/routes/unitsRoutes');
const communicationRoutes = require('./modules/communication/routes/communicationRoutes');
const settingsRoutes = require('./modules/settings/routes/settingsRoutes');
const reportsRoutes = require('./modules/reports/routes/reportsRoutes');

app.use('/api/dashboard', dashboardRoutes);
app.use('/api/financials', financialsRoutes);
app.use('/api/tenants', tenantRoutes);
app.use('/api/properties', propertiesRoutes);
app.use('/api/utilities', utilityRoutes);
app.use('/api/maintenance', maintenanceRoutes);
app.use('/api/property-grouping', propertyGroupingRoutes); // ✅ NEW
app.use('/api/units', unitsRoutes);
app.use('/api/communications', communicationRoutes);
app.use('/api/settings', settingsRoutes);
app.use('/api/reports', reportsRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
