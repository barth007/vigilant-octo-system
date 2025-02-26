const express = require('express');
const app = express();
let dbConnect = require('./dbConnect');
let userRoutes = require('./routes/userRoutes');
require('dotenv').config();


app.use(express.json());
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
    res.json({message: "Welcome to MongoDB application"});
}
);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}
);