const fs = require('fs');
module.exports  = (app)=> {
    fs.readdirSync(__dirname).forEach((file) => {
        if (file !== 'index.js') {
            require(`./${file}`)(app);
        }
    });
}
