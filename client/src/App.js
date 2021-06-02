import React from 'react'
import MainPage from './components/MainPage';
import ItemSearch from './components/ItemSearch';
import Template from './components/Template';
import { Route, Link } from 'react-router-dom';
import Admin from './components/Admin';
import EditItem from './components/EditItem';


function App() {

  return(
    <>
    <Route exact path='/'>
      <div><Link to="/admin">어드민</Link></div>
    </Route>
    <Route path="/admin" component={Admin} />
    <Route path="/update/:id" component={EditItem}/>
    </>  
  )
}

export default App;
