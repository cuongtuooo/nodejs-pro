import getConnection from "../config/database"

const handleCreateUser = (
    fullName: string,
    email: string,
    address: string
) => {
    // insert into  database
    //return result
    console.log(">>> insert  a new usser")
}

const getAllUser = async () => {
    const connection = await getConnection();
    return "cường đẹp trai"
}
export { handleCreateUser, getAllUser };