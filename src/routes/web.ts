import express, { Express } from 'express';
import { getCreateUserPage, getHomePage, postCreateUserPage, postDeleteUser } from 'controllers/user.controller';

const routes = express.Router();

const webRoutes = (app: Express) => {
    routes.get("/", getHomePage);

    routes.get("/create-user", getCreateUserPage);
    routes.post("/handle-create-user", postCreateUserPage);
    routes.post("/handle-delete-user/:id", postDeleteUser);


    app.use("/", routes);
}

export default webRoutes;

