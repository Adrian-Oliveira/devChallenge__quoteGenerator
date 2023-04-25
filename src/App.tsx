import { } from 'react';
import { Route, Routes, HashRouter} from 'react-router-dom';

import Home from './pages/Home';
import Author from './pages/Author';

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/author' element={<Author/>}/>
      </Routes>
    </HashRouter>
    
  );
}

export default App
