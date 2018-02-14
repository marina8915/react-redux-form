import React, {Component} from 'react'
import update from 'immutability-helper'

const CHECK_EMAIL = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
const CHECK_EMPTY = / /g

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
                emailError: '',
                phoneError: '',
                postcodeError: '',
                requiredError: ''
            }
        }
        this.changeInfo = this.changeInfo.bind(this)
        this.saveInfo = this.saveInfo.bind(this)
    }


    changeInfo({target: {value, name, className}}) {
        var errorName = [name] + 'Error'
        if (className === 'required' && !value.replace(CHECK_EMPTY, '')) {
            this.setState({
                errors: update(this.state.errors, {
                    requiredError: {$set: 'Fill in required fields'}
                })
            })
        } else if (className === 'required') {
            this.setState({
                errors: update(this.state.errors, {
                    requiredError: {$set: ''}
                })
            })
        }
        if ((name === 'phone' || name === 'postcode') && isNaN(value)) {
            this.setState({
                errors: update(this.state.errors, {
                    [errorName]: {$set: [name] + ' - must be a number'}
                })
            })
        } else if (name === 'phone' || name === 'postcode') {
            this.setState({
                errors: update(this.state.errors, {
                    [errorName]: {$set: ''}
                })
            })
        }
        if (name === 'email' && !CHECK_EMAIL.test(value)) {
            this.setState({
                errors: update(this.state.errors, {
                    [errorName]: {$set: 'Not valid email'}
                })
            })
        } else if (name === 'email') {
            this.setState({
                errors: update(this.state.errors, {
                    [errorName]: {$set: ''}
                })
            })
        }
        this.setState({
            user: update(this.state.user, {
                [name]: {$set: value}
            })
        })
    }

    saveInfo(event) {
        event.preventDefault()
        this.setState({
            user: {
                name: this.state.user.name,
                email: this.state.user.email,
                phone: this.state.user.phone,
                address: this.state.user.address,
                postcode: this.state.user.postcode,
                dateBirth: this.state.user.dateBirth
            },
            errors: {
                emailError: this.state.errors.emailError,
                phoneError: this.state.errors.phoneError,
                postcodeError: this.state.errors.postcodeError,
                requiredError: this.state.errors.requiredError
            }
        })

        //check empty if in input not event onchange
        var empty = true
        if (!this.state.user.name.replace(CHECK_EMPTY, '')) {
            empty = false
        }
        else if (!this.state.user.email.replace(CHECK_EMPTY, '')) {
            empty = false
        }
        else if (!this.state.user.postcode.replace(CHECK_EMPTY, '')) {
            empty = false
        }
        else if (!this.state.user.dateBirth.replace(CHECK_EMPTY, '')) {
            empty = false
        }
        if (!empty) {
            this.state.errors.requiredError = 'Fill in required fields'
        }

        this.props.changeStateProps('user', this.state.user)
        this.props.changeStateProps('errors', this.state.errors)
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
                    type='email'
                    placeholder='Email'
                    onChange={this.changeInfo}
                />
                <input
                    name='phone'
                    type='text'
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
                    type='text'
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
