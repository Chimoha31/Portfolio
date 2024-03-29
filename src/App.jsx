import React, { useEffect } from "react";
import "./App.css";
import Pages from "./components/pages/pages/Pages";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <Pages />
    </>
  );
};

export default App;
