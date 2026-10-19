import {Routes,Route,Navigate} from 'react-router-dom';
import Public from './pages/Public.jsx';import Login from './pages/Login.jsx';import Space from './components/Space.jsx';
export default function App(){return <Routes><Route path="/" element={<Public/>}/><Route path="/login" element={<Login/>}/><Route path="/:role" element={<Space/>}/><Route path="/:role/:page" element={<Space/>}/><Route path="*" element={<Navigate to="/"/>}/></Routes>}
