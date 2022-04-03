import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import NotFound from './Components/NotFound/NotFound';
import Products from './Components/Products/Products';
import Friends from './Components/Friends/Friends';

function App() {
  return (
    <div >
      <h1>Welcome to the today's websites of react router</h1>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/Contact' element={<Contact></Contact>}></Route>
        <Route path='/About' element={<About></About>}></Route>
        <Route path='/product' element={<Products></Products>}></Route>
        <Route path='/friends' element={<Friends></Friends>}></Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>

      </Routes>
    </div>
  );
}

export default App;
