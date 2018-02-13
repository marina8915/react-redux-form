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
                emailError: '',
                phoneError: '',
                postcodeError: '',
                requireError: ''
            }
        }
        this.changeInfo = this.changeInfo.bind(this)
        this.saveInfo = this.saveInfo.bind(this)
    }


    changeInfo({target: {value, name}}) {
        var errorName = [name] + 'Error'
        if (value || value.replace(/ /g, '')) {
            this.setState({
                user: update(this.state.user, {
                    [name]: {$set: value}
                }),
                errors: update(this.state.errors, {
                    [errorName]: {$set: ''}
                })
            })
        }
        if ((name === 'phone' || name === 'postcode') && isNaN(value)) {
            this.setState({
                user: update(this.state.user, {
                    [name]: {$set: ''}
                }),
                errors: update(this.state.errors, {
                    [errorName]: {$set: [name] + ' - must be a number'}
                })
            })
        }
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
                requireError: this.state.errors.requireError
            }
        })
        if (this.state.user.name === '' ||
            this.state.user.email === '' ||
            this.state.user.postcode === '' ||
            this.state.user.dateBirth === '') {
            this.state.errors.requireError = 'Fill in required fields'
        } else {
            this.state.errors.requireError = ''
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
