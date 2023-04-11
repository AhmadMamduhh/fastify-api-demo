const fastify = require('fastify')({ logger: true })

const fastifyCors = require("@fastify/cors");
fastify.register(fastifyCors, {
  origin: "*",
  credentials: "true",
});

fastify.register(require('fastify-swagger'), {
  exposeRoute: true,
  routePrefix: '/docs',
  swagger: {
    info: { title: 'fastify-api' },
  },
})
fastify.register(require('./routes/items'))

const PORT = 5000

const start = async () => {
  try {
    await fastify.listen(PORT)

  } catch (error) {
    fastify.log.error(error)
    process.exit(1)
  }
}

start()
