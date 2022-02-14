import knex from "knex"
import * as path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const knexConfig = {
    client: "sqlite3",
    connection: ":memory:",
    useNullAsDefault: true,
    migrations: {
        directory: path.join(__dirname, "migrations")
    },
    seeds: {
        directory: path.join(__dirname, "seeds")
    }
};

// Create the sqlite3 inmemory database
let db = knex(knexConfig);

async function start() {
    // Add users table through migration
    await db.migrate.latest()
    // Seed the users table with data
    await db.seed.run()

    // Get alla data from users table
    let users = await db.from("users").select("email")
    console.log("Users: ", users);

    // Get information on the columns in users table
    db('users').columnInfo().then(info => console.log("Users CoulmnInfo: ", info))
}

start();
