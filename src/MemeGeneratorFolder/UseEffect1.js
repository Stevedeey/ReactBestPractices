import React, { useState, useEffect } from "react";
import randomcolor from "randomcolor";

function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      // setCount(prevCount => prevCount + 1)
    }, 1000);
    return () => clearInterval(intervalId); //likeComponentWillUnmount to cleat all mess. Here we want set interva to stop as soon as we unmount this component
  }, []);

  useEffect(() => {
    setColor(randomcolor());
  }, [count]); //randomColor would run only if the count vriable changes

  useEffect(() => {
    const interva = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => {
      clearInterval(interva);
    };
  }, []);
  return (
    <div>
      <h1 style={{ color: color }}>{count}</h1>
    </div>
  );
}

export default App;
