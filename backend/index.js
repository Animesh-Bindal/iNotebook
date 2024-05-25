const connectToDb = require('./db');
connectToDb();

const express = require("express");
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send('hello world')
})
//AVAILABLE ROUTES
app.use(express.json());
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

// START THE SERVER
app.listen(port, () => {
    console.log(`The application started successfully at http://localhost:${port}`);
});
