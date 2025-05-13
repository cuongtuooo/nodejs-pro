import { Request, Response } from "express"
import { getAllUser, getUserById, handleCreateUser, handleDeleteUser, updateUserById } from "services/user.services";
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
    await handleDeleteUser(id);
    return res.redirect("/");
}

const getViewUser = async (req: Request, res: Response) => {
    const { id } = req.params;

    //get user by id
    const user = await getUserById(id);

    return res.render("view-user.ejs", {
        id: id,
        user: user
    });
}

const postUpdateUser = async (req: Request, res: Response) => {
    const { id, fullName, email, address } = req.body;

    //handle update
    await updateUserById(id, fullName, email, address);
    return res.redirect("/");
}

export { getHomePage, getCreateUserPage, postCreateUserPage, postDeleteUser, getViewUser, postUpdateUser };