import React,{Component} from 'react';
import Order from '../../components/Order/Order';
import axios from '../../axios';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHanlder';
class Orders extends Component{
    state = {
        order:[],
        loading:true
    }
    componentDidMount(){
        axios.get('/orders.json')
             .then(res => {
                 
                 const fetchData = [];
                 for(let key in res.data){
                     fetchData.push({
                        ...res.data[key],
                        id:key
                    });
                 }
                this.setState({loading:false,order:fetchData});
             })
             .catch(error => {
                 this.setState({loading:false});
             })
    }
    render(){
        return(
            <div>
               {this.state.order.map(orders => (
                   <Order 
                   key={orders.id}
                   ingredients={orders.ingredients}
                   price={orders.price}
                  />
               ))}
            </div>
        );
    }
}

export default withErrorHandler(Orders,axios);