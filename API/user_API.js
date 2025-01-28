import express from 'express';

import { 
    getAllUser,
    createUser,
    deleteUser
} from '../controller/user_controller.js';

const router = express.Router()


router.route('/')
    .get(getAllUser)
    .post(createUser)

router.route('/:id')
    .delete(deleteUser)

export default router;
