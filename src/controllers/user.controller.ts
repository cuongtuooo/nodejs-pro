import { Request, Response } from "express"
import { getAllUser, handleCreateUser } from "services/user.services";
import { name } from "ejs";

const getHomePage = async (req: Request, res: Response) => {
    //get user
    const users = await getAllUser();
    return res.render("home", {
        users: users
    });
}

const getCreateUserPage = (req: Request, res: Response) => {
    return res.render("create-user");
}


const postCreateUserPage = async (req: Request, res: Response) => {
    // console.log(">>>check data : ", req.body);
    const { fullName, email, address } = req.body;
    // console.log(fullName);
    //handle create user
    await handleCreateUser(fullName, email, address);
    return res.redirect("/");
}

const postDeleteUser = async (req: Request, res: Response) => {
    // console.log(req.params.id);
    const { id } = req.params;
    return res.redirect("/");
}


export { getHomePage, getCreateUserPage, postCreateUserPage, postDeleteUser };