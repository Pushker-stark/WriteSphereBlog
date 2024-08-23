import React from "react";
import { BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Home from './pages/Home';
import PostDetails from './pages/PostDetails';
import NewPost from './pages/NewPost';
import Layout from './components/Layout';

const App = ()=>{
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/posts/:id" element={<PostDetails/>}/>
          <Route path="/new" element={<NewPost/>}/>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
