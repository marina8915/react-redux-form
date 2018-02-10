import React, {Component} from 'react'
import update from 'immutability-helper'

export default class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {
                name: '',
                email: '',
                phone: '',
                address: '',
                postcode: '',
                dateBirth: ''
            },
            errors: {
                nameError: '',
                emailError: '',
                phoneError: '',
                addressError: '',
                postcodeError: '',
                dateBirthError: ''
            },
            validation: true
        }
        this.changeInfo = this.changeInfo.bind(this)
        this.saveInfo = this.saveInfo.bind(this)
    }

    changeInfo({target: {value, name, className}}) {
        var errorName = [name] + 'Error'
        var errorText = [name] + ' - must be a number'
        if (value || value.replace(/ /g, '')) {
            this.setState({
                user: update(this.state.user, {
                    [name]: {$set: value}
                })
            })
        } else {
            if (className === 'required') {
                this.setState({
                    errors: update(this.state.errors, {
                        [errorName]: {$set: errorText}
                    }),
                    validation: false
                })
            }
        }
        if ((name === 'phone' || name === 'postcode') && isNaN(value)) {
            this.setState({
                [errorName]: [name] + ' - must be a number',
                validation: false
            })
        }
    }

    saveInfo() {
        this.props.changeStateProps('user', this.state.user)
        this.props.changeStateProps('errors', this.state.errors)
        if (this.state.validation !== true) {
            this.setState({
                user: {
                    name: '',
                    email: '',
                    phone: '',
                    address: '',
                    postcode: '',
                    dateBirth: '',
                },
                errors: {
                    nameError: '',
                    emailError: '',
                    phoneError: '',
                    addressError: '',
                    postcodeError: '',
                    dateBirthError: '',
                },
                validation: true
            })
        }
    }

    render() {
        return (
            <form>
                <input
                    className='required'
                    name='name'
                    type='text'
                    placeholder='Name'
                    onChange={this.changeInfo}
                />
                <input
                    className='required'
                    name='email'
                    type='text'
                    placeholder='Email'
                    onChange={this.changeInfo}
                />
                <input
                    name='phone'
                    type='number'
                    placeholder='Phone'
                    onChange={this.changeInfo}
                />
                <input
                    name='address'
                    type='text'
                    placeholder='Address'
                    onChange={this.changeInfo}
                />
                <input
                    className='required'
                    name='postcode'
                    type='number'
                    placeholder='Postcode'
                    onChange={this.changeInfo}
                />
                <input
                    className='required'
                    name='dateBirth'
                    type='date'
                    placeholder='dateBirth'
                    onChange={this.changeInfo}
                /><br/>
                <input
                    type='submit'
                    value='Save'
                    onClick={this.saveInfo}
                />
            </form>
        )
    }
}
