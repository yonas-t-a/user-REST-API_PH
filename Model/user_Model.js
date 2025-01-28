import { user } from "../config/db-config.js";


export const findAllUser = async () => {
    try {
        const allUser = await user.findAll();
        return allUser.map((user) => user.toJSON());
    } catch (error) {
        console.log("Error in findingAllUser | Model")
    }
}
export const insertUser = async (name, email) => {
    try {
        const addUser = await user.create({name: name, email:email})
        return addUser.toJSON();
    } catch (error) {
        console.log("Error in insertingUser | Model")
    }
}
export const removeUser = async (id) => {
    try {
        const thisUser = await user.findByPk(id)
        if (thisUser){
            await thisUser.destroy();
            return {
                "message": `the user with id ${id} has been deleted sucessfully`
            }
        } else {
            return {
                message: `User with id ${id} does not exist.`,
            };
        }
    } catch (error) {
        console.log("Error in removingUser | Model")
    }
}