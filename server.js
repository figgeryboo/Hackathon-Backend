//dependencies
const app = require('./app.js')


//configuration
require('dotenv').config();
const PORT = process.env.PORT;

//Listen 
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});