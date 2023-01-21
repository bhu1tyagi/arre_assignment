const express = require("express");
const mongoose = require("mongoose");
const GroupMessage = require("./models/GroupMessage");
const groupRoutes = require("./routes/group");

const app = express();

async function connect() {
    try {
        const url = 'mongodb+srv://bhu1tyagi:bhu1tyagi@whatsappapp.trmrsr7.mongodb.net/?retryWrites=true&w=majority' || 'mongodb://127.0.0.1:27017/whatsappApp';
        await mongoose.connect(url, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        console.log('Connected to \x1b[32mDatabase\x1b[0m');
    } catch (err) {
        console.log('ERROR: Could not connect to database: ', err);
        process.exit(1);
    }
}

connect()

app.use(express.json());
app.use("/api", groupRoutes);

app.listen(3000, () => {
    console.log("Server started on port 3000");
});
