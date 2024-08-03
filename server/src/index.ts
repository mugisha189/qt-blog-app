import http from 'http'
import app from './app'
import config from './config/config'

const server = http.createServer(app)


server.listen(config.PORT, () =>
	console.log(`Running on port http://localhost:${config.PORT}`)
)
