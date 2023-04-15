import logo from './logo.svg';
import './App.css'; 
import Student from './component/Props/Student';
 import CoffeeIcon from '@mui/icons-material/Coffee';

import Heading from './component/recordKeeping/heading';
import { TextField , Button, Switch} from '@mui/material';
import TestEffect from './component/useEffect/TestEffect';
import ReactEvents from './component/events/ReactEvents';
import Header from './component/useEffect/Header';
import Error from './component/useEffect/Error';
import Mail from './component/useEffect/Mail';
import Insta from './component/useEffect/Insta';
 import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import About from './component/useEffect/About';
import Contact from './component/useEffect/Contact';
import { BrowserRouter } from 'react-router-dom';
import { Home } from '@mui/icons-material';
import UserDetails from './component/useEffect/UserDetails';
import {useState, createContext} from "react";
import Comp1 from './component/contextapi/Comp1';
import Comp2 from './component/contextapi/Comp2';
import Comp3 from './component/contextapi/Comp3';
import UseRef from './component/useRef/UseRef';
import UseRed from './component/usereducer/UseRed';
import CustomHooks from './component/CustomHooks/CustomHooks';

import MemoHook from './component/memoHook/MemoHook';

import Callback from './component/useCallback/callback';
import Loader from './component/Loader/Loader';
 


const contextData=createContext();
const nameContexr= createContext();

function App() {
const [data,setData]=useState("Web3mantra")  ;
const [name, setName]=useState({name:"Shubham", age:20})
    return (
      <>
       <h1>React Redux tutorial</h1>
       <div style={{width:"100%", display:'flex',justifyContent:'center' }}>REact redux tutorial</div>
        <hr></hr>
        <button>Incement</button>
        <button>Decrement</button>
       

      </>
  //  <>
  //  <Callback />
  //  </>

    // <div>
    //   <MemoHook />
    // </div>

      // <div>
      //   <CustomHooks />

      // </div>

    //   <>
    // <UseRed/>
    //   </>
      
    
      //  <>
      // <UseRef>
      // </UseRef>
      // </>
    // <nameContexr.Provider value={name}>
    // <contextData.Provider value={{data,name}}>
    //   <div>
    //    <Comp1>
    //    </Comp1>
      
    //   </div>
    //   </contextData.Provider>
    //   </nameContexr.Provider>



      // <BrowserRouter>
      // <Header />
      //   <Routes>
         
      //     <Route  path="/"  element={<div><TestEffect /></div>} >
      //     <Route path='/home' element={<TestEffect />} > 
           
      //     </Route>
      //     </Route>
      //     <Route path='/home/:userId' element={<UserDetails />} />
      //     <Route  path="/about"  element={<div><About /></div>} />
      //     <Route  path="/home"  element={<div><TestEffect /></div>} />
      //     <Route  path="/contact"  element={<div><Contact /></div>} > 
      //     <Route index   element={<Insta/>} />
      //     <Route path='mail'  element={<Mail />} />
      //     </Route>
      //     <Route  path="*"  element={<div><Error /></div>} />
          
      //   </Routes>
      //  </BrowserRouter>
  ); 
 
}
export default App;
export {contextData}
export {nameContexr}
