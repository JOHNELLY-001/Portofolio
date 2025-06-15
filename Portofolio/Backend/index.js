const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

const linkRoutes = require('./routes/otherRoutes');

app.use(express.json());
app.use(cors());

// Homepage
app.get('/', (req, res) => {
    res.send('Homepage backend is running!')
})

// routes
app.use('/api', linkRoutes)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`)
});