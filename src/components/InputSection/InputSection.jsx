import React, {Component} from 'react';
import PropTypes from 'prop-types';
// import { Formik } from 'formik';
import { Form, Label, Input, Button } from './InputSection.styled';

class InputSection extends Component {
    state = {
        name: '',
        number: '',
    };
    
//     resetForm = () => {
//     this.setState({ name: '', number: '' });
//   };

    handleSubmitForm = (e) => {
    e.preventDefault();
    const { name, number } = this.state;
    this.props.onSubmit({ name, number });
    this.setState({ name: '', number: '' });
    };

    OnInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
    }
    
    render() {
        const { name, number } = this.state;
        
        return (
            <>
                <h1>Phonebook</h1>
                <Form onSubmit={this.handleSubmitForm}>
                    <Label htmlFor="name">
                        <p>Name:</p>
                        <Input
                            type="text"
                            name={name}
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            onChange={this.OnInputChange}
                            required
                        />
                        {/* <ErrorMessage name="name" component="div" /> */}
                    </Label>
                    <Label htmlFor="number">
                        <p>Number:</p>
                        <Input
                            type="tel"
                            name={number}
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            onChange={this.OnInputChange}
                            required
                        />
                    </Label>
                    <Button type="submit">Add Contact</Button>
                </Form>
            </>
        );
    }
}

InputSection.propTypes = {
    handleSubmitForm: PropTypes.func,
};

export default InputSection;