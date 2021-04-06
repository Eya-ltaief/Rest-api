import {
    GET_CONTACTS_LOAD, GET_CONTACTS_SUCCESS, GET_CONTACTS_FAIL,
    GET_CONTACT,
    TOGGLE_FALSE,
    TOGGLE_TRUE
} from '../actionsTypes/actionsTypes'

const initState = {
    contacts: [],
    loadContacts: false,
    errors: [],
    isEdit: false,
    user: {}
}

const contactReducer = (state = initState, { type, payload }) => {

    switch (type) {
        case GET_CONTACTS_LOAD: return {
            ...state,
            loadContacts: true
        }
        case GET_CONTACTS_SUCCESS: return {
            ...state,
            contacts: payload,
            loadContacts: false
        }
        case GET_CONTACTS_FAIL: return {
            ...state,
            errors: payload,
            loadContacts: false
        }
        case TOGGLE_TRUE: return {
            ...state,
            isEdit: true
        }
        case TOGGLE_FALSE: return {
            ...state,
            isEdit: false
        }
        case GET_CONTACT: return {
            ...state,
            user: payload
        }

        default: return state
    }

}

export default contactReducer