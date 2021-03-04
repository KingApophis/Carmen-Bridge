const mongoose = require("mongoose");
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.set('useFindAndModify', false);

class Databse {

    constructor() {
        this.connect();
    }

    connect() {
        mongoose.connect("mongodb+srv://admin:musicbox@musicbox.z5l02.mongodb.net/MusicBoxDB?retryWrites=true&w=majority")
            .then(() => {
                console.log("database connection successful!");
            })
            .catch((err) => {
                console.log("database connection error!!!" + err);
            })
    }
}

module.exports = new Databse();