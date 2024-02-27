const express = require('express')
const router = express.Router()
const { getAllUsers, getOneUser, AddNewUser, updateAllUsers, updateOneUser, deleteOneUser
} = require('../Controllers/userController')

router.get('/',getAllUsers)

router.get('/:id',getOneUser)

router.post('/', AddNewUser)

router.put('/:id', updateAllUsers)

router.patch('/:id',updateOneUser)

router.delete('/:id', deleteOneUser)

module.exports = router