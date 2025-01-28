import { 
    findAllUser,
    insertUser,
    removeUser
 } from "../Model/user_Model.js";


export const createUser = async(req, res) => {
    const {name, email} = req.body;
    if (!name || !email) {
        return res.status(400).json({ error: "name and email are required." });
    }
    try {
        const result = await insertUser(name, email);
        res.status(201).json(result)
    } catch (error) {
        console.log("Createating user Controller Error",error.message);
        return res.status(500).json({ error: "Failed to create user." });        
    }
}
export const getAllUser = async(req, res) => {
    try {
        const result = await findAllUser();
        res.json(result)
    } catch (error) {
        console.log("geting all user Controller Error",error.message);    
        return res.status(500).json({ error: "Failed to fetch users." });  
    }
}

export const deleteUser = async(req, res) => {
    const id = req.params.id;
    if (!id) {
        return res.status(400).json({ error: "User id is required." });
    }
    try {
        const result = await removeUser(id)
        res.json(result);
    } catch (error) {
        console.log("deleting user Controller Error",error.message); 
        return res.status(500).json({ error: "Failed to delete user." });       
    }
}