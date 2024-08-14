import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import RecruitManagePage from '../pages/admin/RecruitManagePage/RecruitManagePage';
import RecruitDetailPage from '../pages/admin/RecruitDetailPage/RecruitDetailPage';
import RecruitAddPage from '../pages/admin/RecruitAddPage/RecruitAddPage';

function AdminRoutes() {
  return (
    <Routes>
      <Route
        path="/recruit-manage"
        element={
          <ProtectedRoute element={<RecruitManagePage />} adminOnly={true} />
        }
      />
      <Route
        path="/recruit-detail/:noticeId"
        element={
          <ProtectedRoute element={<RecruitDetailPage />} adminOnly={true} />
        }
      />
      <Route
        path="/recruit-add"
        element={
          <ProtectedRoute element={<RecruitAddPage />} adminOnly={true} />
        }
      />
    </Routes>
  );
}

export default AdminRoutes;
