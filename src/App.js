import  React from "react";


import "./App.css";

import Landing from './components/LandingPage/Landing';
import PopularStyles from "./components/PopularStyles/PopularStyles";
import LatestArticles from "./components/LatestArticles/LatestArticles";
import IntroductionHome from "./components/IntroductionHome/IntroductionHome";
import ScrollTop from "./components/ScrollTop/ScrollTop";

function App() {

  return (
    <main className="App">
      <Landing />
      <PopularStyles />
      <LatestArticles />
      <IntroductionHome/>
      <ScrollTop/>
    </main>
  );
}

export default App;
