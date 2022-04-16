import React from "react";
import Header from "./components/header/Header";
import BlogEntries from "./components/BlogEntries/BlogEntries";
import IntroductionMenu from "./components/IntroductionMenu/IntroductionMenu";
import Footer from "./components/Footer/Footer";

const App = () => {
    return (
        <>
            <div className="w3-content" style={{maxWidth: "1400px"}}>
                <Header/>
                <div className="w3-row">
                    <BlogEntries/>
                    <IntroductionMenu/>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default App;