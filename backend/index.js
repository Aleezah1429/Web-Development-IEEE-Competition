
const mongoose = require('mongoose');
const express = require('express')
const app = express()
const cors = require("cors");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

main().catch(err => console.log("ERROR", err));

// main function
async function main() {
    await mongoose.connect('mongodb+srv://aleezahikram1429:JahanAra414@cluster0.hkbwrsh.mongodb.net/test',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        },
    ).then(() => console.log('connected'))
        .catch(e => console.log(e));
}

// schema
const submitSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

// model
const User = mongoose.model('User', submitSchema);


// ______Function of Signup
const postData = async (req, res) => {
    const user = new User({ name: req.body.name, email: req.body.email, password: req.body.password, });
    user.save().then(() => console.log("Successfully Signup"));
}

// find
const findData = async (req, res) => {
    const userFind = await User.findOne({ name: 'Aleezah' });
    console.log(userFind);
}

// findData()

// find
const updateData = async (req, res) => {
    const userUpdate = await User.updateOne({ name: 'Aliza' });
    console.log(userUpdate);
}

updateData()

// _________APIS

app.get('/', function (req, res) {
    res.send('Hello World')
})

// For Signup
app.post("/submit", (req, res) => {
    console.log("New User", req.body);
    postData(req, res);
});


const PORT = process.env.PORT || 8001;

app.listen(PORT, () => {
    console.log(`Server started on Port ${PORT}`);
});