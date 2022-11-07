import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom' 
import Home from './pages/Home';
import Favorite from './pages/Favorite';
import Detail from './pages/Detail';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
    
      <BrowserRouter>
      <Header/>
        <Routes>      
          <Route path='/' element={<Home/>}/>
          <Route path='/movie/:id' element={<Detail/>}/>
          <Route path='/favorite' element={<Favorite/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
