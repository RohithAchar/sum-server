const express = require('express');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    const body = req.body;
    res.json({sum: body.a + body.b});
});

app.listen(3000, console.log("on 3000"));