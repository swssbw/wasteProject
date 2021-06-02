import React from 'react'
import { Route, Link } from 'react-router-dom';
import Admin from './components/Admin';
import EditItem from './components/EditItem';
import LandingPage from './components/LandingPage';

function App() {

  return(
    <>
    <Route exact path='/'>
      <Link to="/admin">관리자</Link>
      <LandingPage></LandingPage>
    </Route>
    <Route path="/admin" component={Admin} />
    <Route path="/update/:id" component={EditItem}/>
    </>  
  )
}

export default App;
