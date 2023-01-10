import React from 'react';
import { BrowserRouter ,Routes, Route } from "react-router-dom";
import Index from './components/pages/admin/dashboard/Index';


function App() {
  return (
      <BrowserRouter>
   
      <Routes>
        <Route path="/dashboard-admin" element={<Index/>}/>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
