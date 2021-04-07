
import { useSelector, useDispatch } from 'react-redux'

import React, { useEffect, useState } from "react";

import { Button } from "react-bootstrap";

import ContactCard from "./ContactCard"

import { getContacts } from "../Redux/actions/actionsContact";
import { toggleFalse } from "../Redux/actions/actionsContact";


const ContactList = () => {

    const contacts = useSelector(state => state.contactReducer.contacts)
    const loadContacts = useSelector(state => state.contactReducer.loadContacts)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getContacts())
    }, [dispatch]);

    return (

        loadContacts ? <h1>wait a bit please !</h1>
            :
            <div className="contacts-content" style={{display:"flex", flexWrap:"wrap"}}>
                <div className="contacts-list">
                    {contacts.map(contact =>
                        <ContactCard contact={contact} key={contact._id} />
                    )}
                </div>
            </div>
  );
}
    


export default ContactList
