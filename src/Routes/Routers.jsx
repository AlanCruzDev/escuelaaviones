import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {RouterHome} from '../Routes/RouterHome';



export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<RouterHome/>}/>
      </Routes>
    </BrowserRouter>
  )
}
