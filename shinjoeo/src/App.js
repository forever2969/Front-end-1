import MainPage from './Pages/MainPage';
import UploadPage from './Pages/UploadPage';
import Callback from './Pages/Callback';
import SplashPage from './Pages/SplashPage';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Routes>
          <Route path="/splash" element={<SplashPage/>} />
          <Route path="/" element={<MainPage/>} />
          <Route path="/upload" element={<UploadPage/>} />
          <Route path="/callback" element={<Callback/>} />
      </Routes>
    </>
  );
}

export default App;
