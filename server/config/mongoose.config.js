const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/TeamDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=> console.log('DB connection established'))
    .catch(err=> console.log(err))