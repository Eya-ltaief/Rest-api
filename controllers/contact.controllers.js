const postContact = async (req, res) => {
  try {
    const { name, email, phone } = req.body
    // handling errors : email & name are required
    if (!email || !name) {
      res.status(400).send({ msg: 'Email and Name are required !!!' })
      return;
    }

    // handling errors : test if contact already exist with email
    const contact = await Contact.findOne({ email })
    if (contact) {
      res.status(400).send({ msg: 'Contact already exist ( email is unique ) !!!' })
      return;
    }

    // create and save the new contact
    const newContact = new Contact({ name, email, phone })
    await newContact.save()
    res.status(200).send({ msg: 'Contact added successfully ...', newContact })

  } catch (error) {
    res.status(500).send({ msg: "impossible to add new contact", error })
  }
}


/**
 * GET all
 *  */
const getAllContacts = async (req, res) => {
  try {
    const listContacts = await Contact.find()
    res.status(200).send({ msg: 'This is the list of contacts ...', listContacts })
  } catch (error) {
    res.status(400).send({ msg: 'Can not get all contacts !!', error })
  }
}


/**
 * GET one contact
 *  */
const getContact = async (req, res) => {
  try {
    const { _id } = req.params
    const contactToFind = await Contact.findOne({ _id })
    console.log(contactToFind)
    res.status(200).send({ msg: 'I find the contact ...', contactToFind })
  } catch (error) {
    res.status(400).send({ msg: 'Can not get contact with this id !!', error })
  }
}


/**
 * delete contact
 *  */
const deleteContact = async (req, res) => {
  const { _id } = req.params
  try {
    const contactToDelete = await Contact.findOneAndRemove({ _id })
    // console.log(contactToDelete)
    if (!contactToDelete) {
      res.status(200).send({ msg: 'Contact already deleted ...' })
      return
    }
    res.status(200).send({ msg: 'Contact deleted ...', contactToDelete })
  } catch (error) {
    res.status(400).send({ msg: 'Can not delete contact with this id !!', error })
  }
}


/**
 * edit contact
 *  */
const editContact = async (req, res) => {
  // const { name, email, phone } = req.body
  const { _id } = req.params
  try {
    const contactToEdit = await Contact.updateOne({ _id }, { $set: { ...req.body } })
    // console.log(contactToEdit)
    if (!contactToEdit.nModified) {
      res.status(400).send({ msg: 'Contact already updated ..', contactToEdit })
      return
    }
    res.status(200).send({ msg: 'Contact updated ..', contactToEdit })
  } catch (error) {
    res.status(400).send({ msg: 'Can not edit contact with this id !!', error })
  }
}


module.exports = { postContact, getAllContacts, getContact, deleteContact, editContact }