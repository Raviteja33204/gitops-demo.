const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const APP_VERSION = process.env.APP_VERSION || 'v1.0.0';

app.use(express.static('public'));

app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    version: APP_VERSION,
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} (Version:${APP_VERSION})`);
});