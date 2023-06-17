// import { useState } from 'react'

import SideNav from "./components/SideNav";
import Main from "./components/MainPage";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <SideNav />
      <Main />
      <About />
      <Projects/>
    </div>
  );
}

export default App;
