import express from 'express';
import { createUser, deleteUser, getUser, getUsers, updateUser } from '../controllers/users.js';

const router = express.Router();

// an array for users
let users = []

// routes in here are starting with /users
router.get('/',getUsers);


router.post('/',createUser);

// id stored  in req.params {id:2}
router.get('/:id',getUser);

router.delete('/:id',deleteUser);

router.patch('/:id',updateUser);



export default router;