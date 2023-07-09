import express, { Router } from "express"
import setupRoutes from "./main/config/setup-routes"

export interface Env {
    SQLITE_DB_NAME: string
    SQLITE_USER_NAME: string
    SQLITE_PASSWORD: string
}

const app = express()

const router: Router = express.Router();

setupRoutes(app, router)

app.listen(3000, () => {
    console.log('Server running on port 3000.')
})
