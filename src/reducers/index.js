import {ADD_REMINDER} from '../types'
const reminder = (state=[],action) =>{
    let reminders =null;
    if(action.type=== ADD_REMINDER ){
        reminders=[...state ,{text:action.text,date:action.date,id: Math.random()}]
        console.log("from reducers",reminders)
        return reminders
    }else{
        return state
    }
}

export default reminder;