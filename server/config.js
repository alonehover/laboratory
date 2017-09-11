var config = {
    port: process.env.PORT || 3000,
    mysql: {
        "connectionLimit" : 10,
		"host"     : "localhost",
		"user"     : "root",
		"password" : "root",
        "database" : "tag"
    }
}

module.exports = config
