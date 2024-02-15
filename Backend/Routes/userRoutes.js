const express = require('express')
const router = express.Router()
const { getAllUsers, getOneUser, AddNewUSer, updateAllUsers, updateOneUser, deleteOneUser
} = require('../Controllers/userController')

router.get('/',getAllUsers)

router.get('/:id',getOneUser)

router.post('/', AddNewUSer)

router.put('/:id', updateAllUsers)

router.patch('/:id',updateOneUser)

router.delete('/:id', deleteOneUser)

module.exports = router