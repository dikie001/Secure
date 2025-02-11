
import { createRoot } from 'react-dom/client'
import './index.css'
import './styles.css'
import App from './App.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactPage from './routes/ContactPage.jsx';
import CloudPage from './routes/CloudPage.jsx';
import RecoveryPage from './routes/RecoveryPage.jsx';

createRoot(document.getElementById('root')).render(
 <Router>
  <Routes>
   
    <Route path="/" element={<App/>}/>
    <Route path="/contact" element={<ContactPage/>}/>
    <Route path="/cloud" element={<CloudPage/>}/>
    <Route path="/recovery" element={<RecoveryPage/>}/>


  </Routes>
 </Router>
)
