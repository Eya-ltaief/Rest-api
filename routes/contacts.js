// require express
const express = require('express')

// require Router
const router = express.Router()

// require model contact
const Contact = require('../models/Contact')

// require controllers
const { postContact,
    getAllContacts,
    getContact,
    deleteContact,
    editContact
} = require('../controllers/contact.controllers')




// ************** All routes **********************

/**
 * @desc : test route
 * @method : GET
 * @path : http://localhost:7000/api/contacts/test
 * @data : nothing
 * @acess : public
 */
router.get('/test', (req, res) => {
    res.status(200).send('Hello test')
})


/**
 * @desc : add contact
 * @method : POST
 * @path : http://localhost:7000/api/contacts
 * @data : req.body
 * @acess : public
 */
router.post('/', postContact)


/**
 * @desc : get all contacts
 * @method : GET
 * @path : http://localhost:7000/api/contacts
 * @data : no data
 * @acess : public
 */
router.get('/', getAllContacts)

/**
 * @desc : get one contact
 * @method : GET
 * @path : http://localhost:7000/api/contacts/:_id
 * @data : req.params
 * @acess : public
 */
router.get('/:_id', getContact)

/**
 * @desc : delete contact
 * @method : DELETE
 * @path : http://localhost:7000/api/contacts/:_id
 * @data : req.params
 * @acess : public
 */
router.delete('/:_id', deleteContact)


/**
 * @desc : edit contact
 * @method : PUT
 * @path : http://localhost:7000/api/contacts/:_id
 * @data : req.params & req.body
 * @acess : public
 */
router.put('/:_id', editContact)


module.exports = router