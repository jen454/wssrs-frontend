import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import MainPage from './pages/user/MainPage';
import PostDetailPage from './pages/user/PostDetailPage';
import ApplyPage from './pages/user/ApplyPage';
import SignUpPage from './pages/user/SignUpPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <RecoilRoot>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/post-detail" element={<PostDetailPage />} />
            <Route path="/apply" element={<ApplyPage />} />
            <Route path="/signup" element={<SignUpPage />} />
          </Routes>
        </RecoilRoot>
      </BrowserRouter>
    </div>
  );
}

export default App;
