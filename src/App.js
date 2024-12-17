import Body from './components/Body/Body';
import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import NotFound from './components/NotFound/NotFound';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Success from './components/Success/Success';
import Contact from './components/footer/elements/contact'
import Team from './components/footer/elements/Team';
import Useful from './components/useful/Useful';

function App() {
  return (
    <>
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Body/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
        <Route path='/Success' element={<Success/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
        <Route path='/Team' element={<Team/>}></Route>
        <Route path='/Useful' element={<Useful/>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
    </>
  );
}

export default App;
