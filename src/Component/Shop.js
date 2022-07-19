import React, { Component } from 'react'
import { connect } from 'react-redux';
import  './style.css';
import { buyLaptop, buyMobile, fetchUsers } from '../Redux/Actions';
import LapTop from './Laptop';

export class Shop extends Component {
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
        <h1 className='title'>Welcome to Vshop</h1>
        <div className='items'>
        <div className='item'>
            <p>Dell Inspiration Laptop</p>
            <p>Availble laptops:{this.props.numOfLaptops}</p>
            <button onClick={this.props.buyLaptop}>BUY</button>
        </div>
        <div className='item'>
            <p>Mobiles</p>
            <p>Availble Mobiles:{this.props.numOfMobiles}</p>
            <button onClick={this.props.buyMobile}>BUY</button>
        </div>
        <div className='item'>
            <p>Get users data</p>
            <p>COUNT:{this.props.users.length}</p>
            <button onClick={this.props.fetchUser}>callAPI</button>
        </div>
        <LapTop/>

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
export default connect(mapStateToProps,mapDispatchToProps)(Shop) 