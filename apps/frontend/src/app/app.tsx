import { Route, Routes } from 'react-router-dom';
import { AppRoutes } from './AppRoutes';
import ForgetPasswordPage from './pages/ForgetPasswordPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LogInPage';
import DashboardPage from './pages/secured/Dashboard';
import SignUpPage from './pages/SignUpPage';
import { RequireAuth } from './providers/AuthProvider';

export function App() {
  return (
    <Routes>
      <Route path={AppRoutes.home} element={<HomePage />} />
      <Route path={AppRoutes.signUp} element={<SignUpPage />} />
      <Route path={AppRoutes.login} element={<LoginPage />} />
      <Route path={AppRoutes.forgetPassword} element={<ForgetPasswordPage />} />
      <Route
        path={AppRoutes.dashboard}
        element={<RequireAuth>{<DashboardPage />}</RequireAuth>}
      />
    </Routes>
  );
}

export default App;
