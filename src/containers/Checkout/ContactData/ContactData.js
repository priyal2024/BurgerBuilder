import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import axios from '../../../axios';
import Spinner from '../../../components/UI/Spinner/Spinner';


class ContactData extends Component{
    state = {
        name:"",
        email:"",
        address:{
            street:'',
            postalCode:''
        },
    loading:false
    }
    orderHandler = (event) => {
        event.preventDefault();
        this.setState({loading:true});
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Max Schwarzmüller',
                address: {
                    street: 'Teststreet 1',
                    zipCode: '41351',
                    country: 'Germany'
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'fastest'
        }
        axios.post( '/orders.json', order )
            .then( response => {
                this.setState( { loading: false } );
                this.props.history.push('/');
            } )
            .catch( error => {
                this.setState( { loading: false } );
            } );
    }
    render(){
        let form = (
            <form>
                <input className={classes.Input} type="text" name="name" placeholder="Enter Your Nanme"/>
                <input className={classes.Input} type="email" name="mail" placeholder="Enter Your Email"/>
                <input className={classes.Input} type="text" name="street" placeholder="Enter Your Strert Nanme"/>
                <input className={classes.Input} type="text" name="postalcode" placeholder="Enter Your Postalcode"/>
                <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
             </form>
        );
        if(this.state.loading){
            form = <Spinner />
        }
        return(
            <div className={classes.ContactData}>
                <h4>Enter Your Contact Data</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;