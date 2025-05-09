import { Request, Response } from "express"
import { getAllUser, handleCreateUser } from "../services/user.services";
import { name } from "ejs";

const getHomePage = (req: Request, res: Response) => {
    //get user
    const users = getAllUser();
    console.log("check user: ", users);
    return res.render("home", {
        name: users
    });
}

const getCreateUserPage = (req: Request, res: Response) => {
    return res.render("create-user");
}


const postCreateUserPage = (req: Request, res: Response) => {
    // console.log(">>>check data : ", req.body);
    const { fullName, email, address } = req.body;
    // console.log(fullName);
    //handle create user
    handleCreateUser(fullName, email, address);
    return res.redirect("/");
}

export { getHomePage, getCreateUserPage, postCreateUserPage };