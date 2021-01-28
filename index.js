const server = require('./api/v1/server')
const PORT = process.env.PORT || 5000

server.listen(PORT, () => console.log(`Server Running on port ${PORT}`))
