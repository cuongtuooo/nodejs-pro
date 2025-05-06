import express, { Express } from 'express';
import { getCreateUserPage, getHomePage, postCreateUserPage } from '../controllers/user.controller';

const routes = express.Router();

const webRoutes = (app: Express) => {
    routes.get("/", getHomePage);

    routes.get("/create-user", getCreateUserPage);
    routes.post("/handle-create-user", postCreateUserPage);


    app.use("/", routes);
}

export default webRoutes;

