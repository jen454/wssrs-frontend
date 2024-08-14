import { Routes, Route } from 'react-router-dom';
import MainPage from '../pages/user/MainPage/MainPage';
import PostDetailPage from '../pages/user/PostDetailPage/PostDetailPage';
import ApplyPage from '../pages/user/ApplyPage/ApplyPage';

function UserRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/post-detail/:noticeId" element={<PostDetailPage />} />
      <Route path="/apply/:noticeId" element={<ApplyPage />} />
    </Routes>
  );
}

export default UserRoutes;
