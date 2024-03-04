const express = require('express')
const router = express.Router()
const { getAllUsers, getOneUser, AddNewUser, updateAllUsers, updateOneUser, deleteOneUser,LoginUser
} = require('../Controllers/userController')

router.get('/',getAllUsers)

router.post('/signup', AddNewUser)

router.post('/login',LoginUser)

router.get('/:id',getOneUser)

router.put('/:id', updateAllUsers)

router.patch('/:id',updateOneUser)

router.delete('/:id', deleteOneUser)

module.exports = router