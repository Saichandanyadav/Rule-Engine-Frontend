import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import RuleList from './components/RuleList/RuleList'; 
import CreateRule from './components/CreateRule/CreateRule'; 
import './App.css'; 

const App = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <div className="body-content">
                    <Routes>
                        <Route path="/" element={<RuleList />} />
                        <Route path="/create" element={<CreateRule />} /> 
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;
