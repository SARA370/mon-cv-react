import React from "react";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Services from "./pages/Services.jsx";
import Blog from "./pages/Blog.jsx";
import Contact from "./pages/Contact.jsx";
import GithubUser from "./pages/GithubUser.jsx";
import MentionsLegales from "./pages/MentionsLegales";

function App() {
  return (
    <section>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/github-user" element={<GithubUser />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
        </Routes>
      </main>

      <Footer />
    </section>
  );
}

export default App;