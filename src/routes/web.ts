import express, { Express } from 'express';
import { getCreateUserPage, getHomePage } from '../controllers/user.controller';

const routes = express.Router();

const webRoutes = (app: Express) => {
    routes.get("/", getHomePage);

    routes.get("/create-user", getCreateUserPage);

    app.use("/", routes);
}

export default webRoutes;

