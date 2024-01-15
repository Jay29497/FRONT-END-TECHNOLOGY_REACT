import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import { ToastContainer } from 'react-toastify';
import Home from './components/home/Home';
import Users from './components/users/Users';
import Posts from './components/posts/Posts';
import Comments from './components/comments/Comments';
import Pnf from './components/pnf/Pnf';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ToastContainer autoClose={4000} position={"top-right"}/>
      <Routes>
        <Route path={`/`} element={<Home/>} />
        <Route path={`/users`} element={<Users/>} />
        <Route path={`/posts`} element={<Posts />} />
        <Route path={`/comments`} element={<Comments />} />
        <Route path={`/*`} element={<Pnf />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
