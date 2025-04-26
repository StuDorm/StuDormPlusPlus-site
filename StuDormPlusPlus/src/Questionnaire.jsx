// src/components/Questionnaire.jsx
import React, { useState } from 'react';
import './questionnaire.css';
import Header from "./header.jsx";
import Footer from "./footer.jsx";

function Questionnaire() {
    return (
        <div className="questionnaire">
            <title>StuDorm++</title>
            <Header />

            <Footer />
        </div>
    )
}

export default Questionnaire;
