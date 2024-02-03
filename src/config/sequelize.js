import {Sequelize} from "sequelize"


const dbUser = process.env.DB_USER || ''
const dbPass = process.env.DB_PASS || ''
const dbHost = process.env.DB_HOST || ''
const dbPort = process.env.DB_PORT || ''
const dbName = process.env.DB_NAME || ''
const dbTz = process.env.DB_TZ || 'UTC'

export const initDb = async () => {
  const db = new Sequelize(`postgres://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}`, {
    logging: true,
    timezone: dbTz,
  })
  try {
    await db.authenticate()
    console.log(`\x1b[32mConnected to PostgreSQL ${dbName} database\x1b[0m`)
    return db
  } catch (err) {
    throw (err)
  }
}
