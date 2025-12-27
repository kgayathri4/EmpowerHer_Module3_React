import { useState, Suspense, lazy } from "react";

const HeavyComponent = lazy(() => import("./components/HeavyComponent"));

function App() {
  console.log("🔁 App rendered");

  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>React.memo & Lazy Loading Demo</h1>

      <button onClick={() => setCount(count + 1)}>
        Counter: {count}
      </button>

      <Suspense fallback={<p>Loading Heavy Component...</p>}>
        <HeavyComponent />
      </Suspense>
    </div>
  );
}

export default App;
