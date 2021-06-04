import React from 'react'
import { Route, Link } from 'react-router-dom';
import EditItem from './components/EditItem';
import LandingPage from './components/LandingPage';
import CheckAdmin from './components/CheckAdmin.js';
import { UserOutlined } from '@ant-design/icons';

function App() {
  return(
    <>
      <Route exact path='/'>
        <Link to="/admin"><UserOutlined className="enterAdmin"/></Link>
        <LandingPage></LandingPage>
      </Route>
      <Route path="/admin" component={CheckAdmin} />
      <Route path="/update/:id" component={EditItem}/>
    </>  
  )
}

export default App;
