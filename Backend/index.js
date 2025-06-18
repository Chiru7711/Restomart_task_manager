const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const sequelize = require('./sequelize');
const taskRoutes = require('./routes/taskRoutes');
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', taskRoutes);
sequelize.authenticate()
  .then(() => {
    console.log('DB connected');
    return sequelize.sync();
  })
  .then(() => {
    app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
  })
  .catch(err => console.error('DB Connection Failed:', err))