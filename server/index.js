const express = require('express')
const app = express();
const cors = require("cors");
const db = require('./models');
app.use(express.json());
app.use(cors());
//routers
const postrouter = require("./routes/Posts");
app.use("/posts", postrouter);
db.sequelize.sync().then(() => {
    app.listen(3002, () => {
        console.log("server running on 3002");
    });
});