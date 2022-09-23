import React from "react";
import PropTypes from 'prop-types';

import { ContactItem } from './ContactItem/ContactItem';

export const ContactList = ({ contacts, onDeleteContact }) => {
    return (
        <ul>
            {contacts.map(({name, number, id}) => {
                return (
                    <li key={id}>
                   <ContactItem
            name={name}
            number={number}
            onDeleteContact={onDeleteContact}
            contactId={id}
                        />
                        </li>
                );
            })}
        </ul>
    );
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
        })
    ).isRequired,
    onDeleteContact: PropTypes.func.isRequired,
};