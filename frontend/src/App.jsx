import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import HomePage from "./pages/HomePage";

// Keep test components for the other routes
const TestCreate = () => (
  <div style={{ padding: '20px', color: 'white' }}>
    <h1>Create Page Test</h1>
  </div>
);

const TestDetail = () => (
  <div style={{ padding: '20px', color: 'white' }}>
    <h1>Detail Page Test</h1>
  </div>
);

const App = () => {
  return (
    <div className="relative h-full w-full">
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_60%,#00FF9D40_100%)]" />
      <Routes>
        {/* Testing HomePage - if this crashes, HomePage has the issue */}
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<TestCreate />} />
        <Route path="/note/:id" element={<TestDetail />} />
      </Routes>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
        }}
      />
    </div>
  );
};

export default App;