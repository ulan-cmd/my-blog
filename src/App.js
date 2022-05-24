import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Main from "./pages/Main/Main";
import TestFetch from "./pages/TestFetch/TestFetch";
import "./App.css";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/test-fetch" element={<TestFetch/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
