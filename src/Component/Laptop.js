import React, { Component } from 'react'
import { connect } from 'react-redux';
import  './style.css';
import { buyLaptop, buyMobile, fetchUsers } from '../Redux/Actions';

export class Laptop extends Component {
   /*state={
        numOfLaptops: 100
    }
    buyLaptop=()=>{
        this.setState({numOfLaptops:this.state.numOfLaptops-1});
    }
    */
  render() {
    return (

      <div>
        <h1 className='title'>Welcome to VLaptop</h1>
        <div className='items'>
        <div className='item'>
            <p>Dell Inspiration Laptop</p>
            <p>Availble laptops:{this.props.numOfLaptops}</p>
            <button onClick={this.props.buyLaptop}>BUY</button>
        </div>
        
        </div>
      </div>
    )
  }
}
  const mapStateToProps = (state)=>{
    return{
        numOfLaptops:state.laptops.numOfLaptops,
        numOfMobiles:state.mobiles.numOfMobiles,
        users:state.users.users
    }
}
const mapDispatchToProps = (dispatch) =>
{
    return{
        buyLaptop:()=>dispatch(buyLaptop()),
        buyMobile:()=>dispatch(buyMobile()),
        fetchUser:()=>dispatch(fetchUsers())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Laptop) 