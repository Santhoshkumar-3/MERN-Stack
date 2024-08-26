const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const connectDB = require('./config/db')
const router = require('./routes')

const app = express()


// Middleware to handle large payloads
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));


app.use(cors({
    origin : process.env.FRONTEND_URL,
    credentials : true 
}))

app.use(express.json())
app.use(cookieParser())

app.use("/api",router)

const PORT = 8000 || process.env.PORT

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Connect to DB");
        console.log(`Server is Running ${PORT}`);
    })
})

