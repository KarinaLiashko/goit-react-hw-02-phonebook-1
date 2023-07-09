import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { Form, Label, Input, Button } from './InputSection.styled';

export class InputSection extends React.Component {
    state = {
        name: '',
        number: '',
    };
    
resetForm = () => {
    this.setState({ name: '', number: '' });
  };

    handleSubmitForm = (e) => {
    e.preventDefault()
    this.props.onSubmit(this.state.name, this.state.number);

    this.setState({ name: '', number: '' });
  };

    render() {
        const { name, number } = this.state;
        
        return (
            <Formik onSubmit={this.handleSubmitForm}>
                <Form>
                 <Label>
                    Name
            <Input
                type="text"
                name={name} 
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
            />
                {/* <ErrorMessage name="name" component="div" /> */}
                </Label>
                <Label>
                    Number
            <Input
                type="tel"
                name={number} 
                 pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
            />
                {/* <ErrorMessage name="number" component="div" /> */}
          </Label>
                <Button type="submit">Add Contact</Button>
            </Form>
             </Formik>
        )
    }
}

InputSection.propTypes = {
    handleSubmitForm: PropTypes.func,
};

export default InputSection;