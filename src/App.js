// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// import Signin from './component/Signin';
// import Home from './component/Home';
// import Protected from './component/authen/Protected';
import {Outlet} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter basename="/">
        <Routes>
          <Route path='/' >
            <Route path='/' element={<Signin />}></Route>
            <Route path='/home' element={<Protected />}>
              <Route path='/home' element={<Home />}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter> */}
      {/* <Signin/>
      <Home/> */}
     
      <Outlet/>
    
    </div>
  );
}

export default App;
