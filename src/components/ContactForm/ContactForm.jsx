import React from "react";
import { Formik, Form, Field } from 'formik';
import { nanoid } from "nanoid";
import PropTypes from 'prop-types';
import { LabelForm, SpanForm, ButtonForm } from './ContactForm.styled';

export const ContactForm = ({onSubmit}) => {
    
    const handleSubmit = (values, { resetForm }) => {
        console.log(values);
        onSubmit(values);
        resetForm();
    };
    
    const loginInputId = nanoid();

    return (
        <Formik
            initialValues={{ name: '', number: '' }}
            onSubmit={handleSubmit}
        >
            <Form >
                <LabelForm>
                    <SpanForm>Name</SpanForm> 
                    <Field
                        type="text"
                        name="name"
                        id={loginInputId}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                </LabelForm>
                <LabelForm>
                    <SpanForm> Number</SpanForm>
                    <Field
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </LabelForm>
                <ButtonForm type="submit" >Add Contact</ButtonForm>
            </Form>
        </Formik>
        
    );
};

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}
