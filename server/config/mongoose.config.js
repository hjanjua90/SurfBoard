const mongoose = require("mongoose");

const agendaDB = "agendaDB";

// mongoose connect for some users if they're having problems:
// .connect("mongodb://127.0.0.1:27017/

//If a DB by this name does NOT exist before running the first time, then this will create it!

mongoose.connect(`mongodb://127.0.0.1:27017/${agendaDB}`,{
    // Note: The useNewUrlParser and useUnifiedTopology are options we pass to handle deprecation warnings in our terminal.
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=>{
        //This message let's us know we're connected to our db
        console.log(`You are connected to the database called ${agendaDB}`)
    })
    .catch((err)=>{
        console.log(`you had a problem connectiing the ${dbName}. Here is your error:`, err)
    })