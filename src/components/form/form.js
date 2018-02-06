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
            dateBirth: ''
        }
        this.changeInfo = this.changeInfo.bind(this)
        this.saveInfo = this.saveInfo.bind(this)
    }

    changeInfo({target: {value, name, className}}) {
        this.setState({
            [name]: value
        })
        if (className === 'required' && !value) {
            console.log([name] + ' is required')
        }
    }

    saveInfo() {
        this.props.changeStateProps('name', this.state.name)
        this.props.changeStateProps('email', this.state.email)
        this.props.changeStateProps('phone', this.state.phone)
        this.props.changeStateProps('address', this.state.address)
        this.props.changeStateProps('postcode', this.state.postcode)
        this.props.changeStateProps('dateBirth', this.state.dateBirth)
        this.setState({
            name: '',
            email: '',
            phone: '',
            address: '',
            postcode: '',
            dateBirth: ''
        })
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
