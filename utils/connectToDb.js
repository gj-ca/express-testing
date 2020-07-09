const mongoose = require('mongoose')


function connectToDB() {
    let db;
    if (process.env.ENV == "prod") {
        db = "productionDB"
    } else if (process.env.ENV == "dev") {
        db = "devDB"
    } else {
        db = "testDB"
    }
    mongoose.connect(
        // #1, the url string which can be found on the mongodb online portal
        // the database is included in the connection string so we don't need to declare it
        `mongodb+srv://glen-demo:TId7r1FphLDWMT5X@cluster0.xzezc.mongodb.net/${db}?retryWrites=true&w=majority`,
        // #2 optional options. some depreciated methods require these extras 
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }, 
        // #3 the callback, what to do after connection
        error => {
            if (error) {
                console.log("There was an error")
                throw error
            } else {
                console.log("We are connected")
            }
        }
    )
}

module.exports = connectToDB