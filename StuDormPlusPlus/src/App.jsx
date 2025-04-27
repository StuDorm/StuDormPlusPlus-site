import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './Main.jsx';
import Auth from './Auth.jsx';
import Login from './Login.jsx'
import FindNeighbor from "./FindNeighbor.jsx";
import SecretSection from "./SecretSection.jsx";
import Profile from "./Profile.jsx"
import NotFound from "./NotFound.jsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/findneighhor" element={<FindNeighbor />} />
                <Route path="/secretsection" element={<SecretSection />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default App;

//by Mirik9724