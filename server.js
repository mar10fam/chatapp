const express = require("express");
const path = require("path");


//Set static folder 
const app = express();
app.use(express.static(path.join(__dirname, "public")));
const PORT = 3000 || process.env.PORT;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));