const mongoose = require('mongoose');
const Campground = require('../models/campground');
mongoose.connect('mongodb://localhost:27017/yelp-camp', {
    useNewUrlParser: true, 
    // useCreateIndex: true,
    useUnifiedTopology: true
});

const seedDB = async()=>{
    await Campground.deleteMany({});
}
seedDB().then(() => {
    mongoose.connection.close();
})