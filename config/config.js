const config = {
    development: {
        PORT: 5000
        //port: process.env.PORT || 3000
    },
    production: {
        PORT: 80,
    }
};

module.exports = config[process.env.NODE_ENV.trim()];