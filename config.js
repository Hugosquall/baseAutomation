config = {
    "environment": 'dev',
    "env": {
        "dev": {
            "baseUrl": "https://jsonplaceholder.typicode.com"
        }
    },
    "util": {
        "HTTP": {
            "OK": 200,
            "CREATED": 201,
            "BAD_REQUEST": 400
        }
    }
}

module.exports = config;