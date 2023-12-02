import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CompanyPage from './pages/CompanyPage';
import JobsPage from './pages/JobsPage';
import LoginPage from './pages/Login';
import RegisterPage from './pages/register';
import CompanyProfile from './component/CompanyProfile';
import Userpage from './pages/UserPage';
import UserUpdatePage from './pages/UserUpdatePage';
import JobListings from './component/JobsListing';
import JobDetails from './component/JobDetailPage';
import ApplicantDetails from './component/ApplicantDetails';
import ApplicantManagement from './component/ApplicantManagement';
import JobApplicationPage from './pages/JobsAplicationPage';



function App() {
  return  <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/jobs' element={<JobsPage />} />
        <Route path="/user" element={<Userpage />} />
        <Route path="/userupdate" element={<UserUpdatePage />} />
        <Route path="/company" element={<CompanyPage />} />
        <Route path="/Jobs-Application" element={<JobApplicationPage/>} />
        <Route path="/company/profile" element={<CompanyProfile />} />
        <Route path="/company/jobs" element={<JobListings />} />
        <Route path="/company/jobs/:jobId" element={<JobDetails />} />
        <Route path="/company/applicants" element={<ApplicantManagement />} />
        <Route path="/company/applicants/:applicantId" element={<ApplicantDetails />} />
        
    
      </Routes>
   
    </div>
  
}

export default App;