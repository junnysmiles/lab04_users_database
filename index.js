const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routes/UserRoutes.js')

const app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://junnysmiles:junny1234@fullstack.xy5fk.mongodb.net/gbc-winter2022?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(success => {
    console.log('Mongodb connection successful!')
}).catch(err => {
    console.log('MongoDB Connection ERROR...' + err)
})

app.use(userRouter)

app.listen(3000, () => { console.log('Server is running...') })