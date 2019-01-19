const winston = require('winston')

const transports = [
  new winston.transports.Console({
    format: winston.format.printf(
      options => `${new Date().toISOString()} [${options.level.toUpperCase()}]: ${options.message}`
    )
  })
]

const logger = winston.createLogger({ transports });

process.on('unhandledRejection', (reason, p) => {
  logger.warn(
    `Possibly Unhandled Rejection at: Promise ${p}`,
    ` reason: ${reason}`
  );
})

export default logger