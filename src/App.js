import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import MainPage from './pages/user/MainPage';
import PostDetailPage from './pages/user/PostDetailPage';
import ApplyPage from './pages/user/ApplyPage';
import SignUpPage from './pages/user/SignUpPage';
import PasswordFindPage from './pages/user/PasswordFindPage';
import ResetPasswordPage from './pages/user/ResetPasswordPage';
import SignInPage from './pages/user/SignInPage';
import RecruitManagePage from './pages/admin/RecruitManagePage';
import RecruitDetailPage from './pages/admin/RecruitDetailPage';
import RecruitAddPage from './pages/admin/RecruitAddPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <RecoilRoot>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/post-detail" element={<PostDetailPage />} />
            <Route path="/apply" element={<ApplyPage />} />
            <Route path="sign-in" element={<SignInPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/find-password" element={<PasswordFindPage />} />
            <Route path="/reset-password" element={<ResetPasswordPage />} />
            <Route path="/recruit-manage" element={<RecruitManagePage />} />
            <Route path="/recruit-detail" element={<RecruitDetailPage />} />
            <Route path="/recruit-add" element={<RecruitAddPage />} />
          </Routes>
        </RecoilRoot>
      </BrowserRouter>
    </div>
  );
}

export default App;
