import express, { Express } from 'express';
import { getCreateUserPage, getHomePage, postCreateUserPage, postDeleteUser, getViewUser, postUpdateUser } from 'controllers/user.controller';

const routes = express.Router();

const webRoutes = (app: Express) => {
    routes.get("/", getHomePage);

    routes.get("/create-user", getCreateUserPage);
    routes.post("/handle-create-user", postCreateUserPage);
    routes.post("/handle-delete-user/:id", postDeleteUser);
    routes.get("/handle-view-user/:id", getViewUser);
    routes.post("/handle-update-user", postUpdateUser);


    app.use("/", routes);
}

export default webRoutes;

