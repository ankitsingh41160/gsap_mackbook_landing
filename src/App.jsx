import React from 'react'
import NavBar from "./components/NavBar.jsx";
import Hero from "./components/Hero.jsx";
import Highlights from "./components/Highlights.jsx";
import Features from "./components/Features.jsx";
import Performance from "./components/Performance.jsx";
import Showcase from "./components/Showcase.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
    return (
        <main>
            <NavBar />
            <Hero />
            <Highlights />
            <Features />
            <Performance />
            <Showcase />
            <Footer />
        </main>
    )
}

export default App