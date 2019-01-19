import mongoose from 'mongoose'

export default () => new Promise( (resolve, reject) => {
  const mongoUri = process.env.MONGO_URI
  if (mongoUri) {
    mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true })
    const db = mongoose.connection
    db.on('error', (err) => reject(err))
    db.once('open', () => resolve())
  } else {
    reject('No MONGO_URI provided, mongo is not going to initialize')
  }
})