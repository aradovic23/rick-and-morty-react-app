import './App.scss';
import Header from './Header'
import Cards from './Cards'
import Card from './Card'
import React, {
  useState
} from 'react'


function App() {
  const [id, setId] = useState('')

  return ( 
  <>
    <Header /> {
      !id ? < Cards onIdChange = {setId}/> : <Card id={id} /> } 
      </>
  );
}

export default App;