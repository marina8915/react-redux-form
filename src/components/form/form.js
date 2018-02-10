import React, {Component} from 'react'

export default class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            phone: '',
            address: '',
            postcode: '',
            dateBirth: '',
            nameError: '',
            emailError: '',
            phoneError: '',
            addressError: '',
            postcodeError: '',
            dateBirthError: '',
            validation: true
        }
        this.changeInfo = this.changeInfo.bind(this)
        this.saveInfo = this.saveInfo.bind(this)
    }

    changeInfo({target: {value, name, className}}) {
        var errorName = [name] + 'Error'
        if (value || value.replace(/ /g, '')) {
            this.setState({
                [name]: value
            })
        } else {
            if (className==='required') {
                this.setState({
                    [errorName]: [name] + ' is required',
                    validation: false
                })
            }
        }
        if  ((name === 'phone' || name === 'postcode') && !value.replace (/\D/, '')) {
            this.setState({
                [errorName]: [name] + ' - must be a number',
                validation: false
            })
        }
    }

    saveInfo() {
        this.setState({
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            address: this.state.address,
            postcode: this.state.postcode,
            dateBirth: this.state.dateBirth,
            nameError: this.state.nameError,
            emailError: this.state.emailError,
            phoneError: this.state.phoneError,
            addressError: this.state.addressError,
            postcodeError: this.state.postcodeError,
            dateBirthError: this.state.dateBirthError,
            validation: this.state.validation
        })
        this.props.changeStateProps('name', this.state.name)
        this.props.changeStateProps('email', this.state.email)
        this.props.changeStateProps('phone', this.state.phone)
        this.props.changeStateProps('address', this.state.address)
        this.props.changeStateProps('postcode', this.state.postcode)
        this.props.changeStateProps('dateBirth', this.state.dateBirth)
        this.props.changeStateProps('nameError', this.state.nameError)
        this.props.changeStateProps('emailError', this.state.emailError)
        this.props.changeStateProps('phoneError', this.state.phoneError)
        this.props.changeStateProps('addressError', this.state.addressError)
        this.props.changeStateProps('postcodeError', this.state.postcodeError)
        this.props.changeStateProps('dateBirthError', this.state.dateBirthError)
        if (this.state.validation === true) {
            this.setState({
                name: '',
                email: '',
                phone: '',
                address: '',
                postcode: '',
                dateBirth: '',
                nameError: '',
                emailError: '',
                phoneError: '',
                addressError: '',
                postcodeError: '',
                dateBirthError: '',
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
                    type='text'
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
