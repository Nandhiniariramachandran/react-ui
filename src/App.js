import './App.css';
import BookingPage from './bookingPage';
import Homepage from './homepage.js';
import Confirmation from './confirmation';
import Final from './final';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/home" element={<Homepage />}/>
      <Route path="/bookingPage" element={<BookingPage />}/>
      <Route path="/confirmation" element={<Confirmation/>}/>    
      <Route path="/final" element={<Final/>}></Route>
      </Routes>
   </BrowserRouter>
    
  );
}

export default App;
