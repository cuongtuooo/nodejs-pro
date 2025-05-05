import express, { Express } from 'express';

const routes = express.Router();

const webRoutes = (app: Express) => {
    routes.get("/", (req, res) => {
        res.render("home.ejs")
    });

    routes.get("/cuong", (req, res) => {
        res.send("Hello cuong")
    });

    app.use("/", routes);
}

export default webRoutes;

