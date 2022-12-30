import { createSlice } from '@reduxjs/toolkit'
import PouchDB from 'pouchdb'

var db = new PouchDB('prod');
var remoteCouch = false;




function showTodos() {
  db.allDocs({include_docs: true, descending: true}, function(err, doc) {
    console.log("Yayyyy from pouchhhhh",doc.rows);
  });
}





function addProd(stateData) {
  console.log("what is this state data", stateData)
  var doc = {
    _id: new Date().toString(),
    title: stateData,
  };
  db.put(doc, function callback(err, result) {
    if (!err) {
      console.log('Successfully posted a todo!');
    }
    else{
      console.log('errorrrr',err)
    }
  });
}

const initialState = {
  data: {
  },
}

export const habitSLice = createSlice({
  name: 'habit',
  initialState,
  reducers: {
    addHabbit: (state, action) => {
     
        state.data = action.payload
        // addProd(action.payload)

        // console.log(showTodos())


    },
  },
})

export const { addHabbit } = habitSLice.actions
export default habitSLice.reducer

// selectors 
export const selectHabbits = state => state.habit.data
