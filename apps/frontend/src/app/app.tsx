import { Route, Routes } from 'react-router-dom';
import { AppRoutes } from './AppRoutes';
import { RequireAuth } from './providers/AuthProvider';

function getTitle(title: string): JSX.Element {
  return (
    <div>
      <p>{title}</p>
    </div>
  );
}

export function App() {
  return (
    <Routes>
      <Route path={AppRoutes.home} element={getTitle('home')} />
      <Route path={AppRoutes.signUp} element={getTitle('signUp')} />
      <Route path={AppRoutes.login} element={getTitle('login')} />
      <Route
        path={AppRoutes.dashboard}
        element={<RequireAuth>{getTitle('dashboard')}</RequireAuth>}
      />
    </Routes>
  );
}

export default App;
