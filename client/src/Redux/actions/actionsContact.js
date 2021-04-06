import axios from 'axios'

import {
    GET_CONTACTS_LOAD, GET_CONTACTS_SUCCESS, GET_CONTACTS_FAIL,
    GET_CONTACT,
    TOGGLE_TRUE,
    TOGGLE_FALSE
} from '../actionsTypes/actionsTypes'


// get contacts
export const getContacts = () => async (dispatch) => {
    dispatch({ type: GET_CONTACTS_LOAD })
    try {
        const res = await axios.get("/api/contacts/")
        dispatch({
            type: GET_CONTACTS_SUCCESS,
            payload: res.data.listContacts
        })
    } catch (error) {
        dispatch({
            type: GET_CONTACTS_FAIL,
            payload: error
        })
        console.log(error)
    }
}

// delete contact
export const deleteContact = (id) => async (dispatch) => {
    try {
        await axios.delete(`/api/contacts/${id}`)
        dispatch(getContacts())
    } catch (error) {
        console.log(error)
    }
}


export const addContact = (newContact) => async (dispatch) => {
    try {
        await axios.post("/api/contacts/", newContact)
        dispatch(getContacts())
    } catch (error) {
        console.log(error)
    }
}

// edit a contact
export const editContact = (contactId, newContact) => async (dispatch) => {
    try {
        await axios.put(`/api/contacts/${contactId}`, newContact)
        dispatch(getContacts())
    } catch (error) {
        console.log(error)
    }
}

// Toggle true
export const toggleTrue = () => {
    return {
        type: TOGGLE_TRUE
    }
}

// Toggle false
export const toggleFalse = () => {
    return {
        type: TOGGLE_FALSE
    }
}

// get one contact by id
export const getContact = (contactId) => async (dispatch) => {
    try {
        const res = await axios.get(`/api/contacts/${contactId}`)
        dispatch({ type: GET_CONTACT, payload: res.data.contactToFind })
    } catch (error) {
        console.log(error)
    }
}