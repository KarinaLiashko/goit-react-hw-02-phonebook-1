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
                            id="name"
                            name="name"
                            value={name}
                            onChange={this.OnInputChange}
                            required
                        />
                        {/* <ErrorMessage name="name" component="div" /> */}
                    </Label>
                    <Label htmlFor="number">
                        <p>Number:</p>
                        <Input
                            type="tel"
                            id="numer"
                            name="number"
                            value={number}
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
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
    onSbmit: PropTypes.func.isRequired,
};

export default InputSection;