import { Routes, Route } from 'react-router-dom';
import SignUpPage from '../pages/auth/SignUpPage/SignUpPage';
import PasswordFindPage from '../pages/auth/PasswordFindPage/PasswordFindPage';
import ResetPasswordPage from '../pages/auth/ResetPasswordPage/ResetPasswordPage';
import SignInPage from '../pages/auth/SignInPage/SignInPage';

function AuthRoutes() {
  return (
    <Routes>
      <Route path="/sign-in" element={<SignInPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />
      <Route path="/find-password" element={<PasswordFindPage />} />
      <Route path="/reset-password" element={<ResetPasswordPage />} />
    </Routes>
  );
}

export default AuthRoutes;
