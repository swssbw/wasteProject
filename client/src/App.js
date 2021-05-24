import logo from './logo.svg';
import './App.css';
import MainPage from './components/MainPage';
import ItemSearch from './components/ItemSearch';
import ItemInsert from './components/ItemInsert';

function App() {

  

  return(
  <>
    <ItemSearch></ItemSearch>
    <ItemInsert></ItemInsert>
    <MainPage />
  </>
  )

}

export default App;
