import logo from './logo.svg';
import './App.css';
import MainPage from './components/MainPage/MainPage';
import ItemSearch from './components/ItemSearch/ItemSearch';
import ItemInsert from './components/ItemInsert/ItemInsert';
import Template from './components/Template/Template';

function App() {

  return(
    <Template>
      <MainPage />
      <ItemSearch />
    </Template>
  )

}

export default App;
