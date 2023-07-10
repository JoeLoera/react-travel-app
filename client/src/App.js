import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import Post4 from './pages/Post';

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Dashboard/>}/>
        <Route path={'/posts/:id'} element={<Post/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
