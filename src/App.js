import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import AuthRoutes from './routes/AuthRoutes';
import UserRoutes from './routes/UserRoutes';
import AdminRoutes from './routes/AdminRoutes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <RecoilRoot>
          <UserRoutes />
          <AuthRoutes />
          <AdminRoutes />
        </RecoilRoot>
      </BrowserRouter>
    </div>
  );
}

export default App;
