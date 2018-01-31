import React, {Component} from 'react'
import update from 'immutability-helper'

export default class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: this.props.user
        }
        this.changeInfo = this.changeInfo.bind(this)
    }

    componentDidMount() {

    }

    changeInfo({target: {value, label}}) {
        this.setState({
            user: update(this.state.user, {
                [label]: {$set: value}
            })
        })
    }

    saveInfo() {
        this.props.changeStateProps('user', this.state.user)
        this.setState({
            user: {
                name: '',
                email: '',
                phone: '',
                address: '',
                postcode: '',
                dateBirth: '',
            }
        })
    }

    render() {
        return (
            <form>
                <input name='name' type='text' placeholder='Name' onChange={this.changeInfo}/>
                <input name='email' type='text' placeholder='Email' onChange={this.changeInfo}/>
                <input name='phone' type='text' placeholder='Phone' onChange={this.changeInfo}/>
                <input name='address' type='text' placeholder='Address' onChange={this.changeInfo}/>
                <input name='postcode' type='text' placeholder='Postcode' onChange={this.changeInfo}/>
                <input name='dateBirth' type='text' placeholder='dateBirth' onChange={this.changeInfo}/><br/>
                <input type='submit' value='Save' onClick={this.saveInfo}/>
            </form>
        )
    }
}
