import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import List from './list';
import AddForm from './add_form';
import { Route } from 'react-router-dom'; 


const App = () => (
    <div className='container'>
        <h1 className='center'>To Do List</h1>
        <Route exact path='/' component={List}/>
        <Route exact path='/add-item' component={AddForm}/>
    </div>
);

export default App;
