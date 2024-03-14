const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const aboutUsRoutes = require('./src/routes/aboutUs');
const blogRoutes = require('./src/routes/blog');
const careerRoutes = require('./src/routes/career');
const contactRoutes = require('./src/routes/contact');
const infoRoutes = require('./src/routes/info');
const newsRoutes = require('./src/routes/news');
const partnershipRoutes = require('./src/routes/partnership');
const serviceRoutes = require('./src/routes/service');
const teamRoutes = require('./src/routes/team');
const profileRoutes = require('./src/routes/profile');
const accountRoutes = require('./src/routes/account');

dotenv.config();
const app = express();

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(error => {
    console.error('Error connecting to MongoDB:', error);
  });

app.use(express.json());

app.use("/api", aboutUsRoutes);
app.use("/api", blogRoutes);
app.use("/api", careerRoutes);
app.use("/api", contactRoutes);
app.use("/api", infoRoutes);
app.use("/api", newsRoutes);
app.use("/api", partnershipRoutes);
app.use("/api", serviceRoutes);
app.use("/api", teamRoutes);
app.use("/api", profileRoutes);
app.use("/api", accountRoutes);


module.exports = app;
