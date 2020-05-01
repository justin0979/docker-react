import React, { useState, Suspense, lazy } from "react";
const Show = lazy(() => import("./Show"));

const App = () => {
  const [well, setWell] = useState(false);

  const showShow = () => {
    if (well) {
      return (
        <Suspense fallback="getin">
          <Show />
        </Suspense>
      );
    }

    return <h3>well = false.</h3>;
  };

  return (
    <div className="app">
      <h1>Basic React App Component</h1>
      <button onClick={() => setWell(!well)}>Show</button>
      {showShow()}
    </div>
  );
};

export default App;
