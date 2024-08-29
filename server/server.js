const express = require('express');
const app = express();
const port =  process.env.PORT || 3001;

const mongoose = require('mongoose');
const url = "mongodb://localhost:27017/";


mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected successfully!'))
.catch(err => console.error('MongoDB connection error:', err));


app.use(express.json());

app.listen(port, () =>{
    console.log(`Server is running on the port ${port}`)
});

