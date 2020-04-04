import React , { Component } from 'react';
import {connect}  from 'react-redux'
import {add_Reminder, remove_Reminder ,clear_Reminder} from '../actions'
import './App.css';

class App extends Component{
  state = {
    text:'',
    date: new Date()
  }
  render_Reminders =() =>{
    const {reminders} =this.props;
    return(
    <ul className="list-group">
        {
          reminders.map(reminder =>{
            return(
              <li key={reminder.id} className='list-group-item'>
                <div>{reminder.text}</div>
                <div>{reminder.date}</div>
                <div className='btn btn-danger' onClick={()=>this.props.remove_Reminder(reminder.id)}>x</div>
              </li>
            )
          })

        }
      </ul>
    )
  }
    
  render(){
  return (
    <div className="App">
      <div className='reminder-title'>
        <h2 className=''>Reminder</h2>
      </div>
        
        <input 
          className='form-control' 
          placeholder='Enter your reminder' 
          type='text'
          onChange={(e)=>this.setState({text:e.target.value})}
          value={this.state.text}
          />
        <input 
          className='form-control' 
          type='datetime-local'
          onChange={(e)=>this.setState({date:e.target.value})}  
          value={this.state.date}
        />
        <button onClick={ ()=>{
          this.props.add_Reminder(this.state.text,this.state.date)
          this.setState({text:'' ,date:''})
          }} 
          className='btn btn-primary btn-block'>
            Add
          </button>
        <button onClick={this.props.clear_Reminder} className='btn btn-danger btn-block'>Clear All</button>
        {this.render_Reminders()}
    </div>
  );
}
}
// function mapDispatshToProps (dispatch){
//   return{
//     add_Reminder : ()=>dispatch(add_Reminder())
//   }
// }
function mapStateToprops(state){
  return{
    reminders : state ,
  }
}
export default connect(mapStateToprops,{add_Reminder ,remove_Reminder ,clear_Reminder})(App);
