const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send(`
        <body style="background-color: #282c34; color: white; font-family: Arial;">
            <h1>🚀 Real-Time DevOps Pipeline V1</h1>
            <p>Status: <span style="color: #61dafb;">Connected to Jenkins Agent</span></p>
            <p>Environment: <b>GCP VM (Master-Slave)</b></p>
        </body>
    `);
});

app.get('/health', (req, res) => {
    res.status(200).json({ status: 'UP', timestamp: new Date() });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});