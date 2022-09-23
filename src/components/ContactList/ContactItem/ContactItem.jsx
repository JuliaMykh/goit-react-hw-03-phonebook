import React from "react";
import PropTypes from 'prop-types';
import { ButtonContact } from './ContactItem.styled';

export const ContactItem = ({ name, number, onDeleteContact, contactId}) => {

  return (
    <>
        <p>{name} : {number} </p>
        <ButtonContact
        type="button"
        onClick={() => onDeleteContact(contactId)}
          >
              Delete
        </ButtonContact>
    </>
  );
}

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  contactId: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
