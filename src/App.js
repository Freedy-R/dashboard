import { useEffect } from "react";
import Dashboard from "./components/Dashboard";
const App = () => {
  useEffect(() => {
    document.title = 'Dashboard';
  }, []);
  return (
    <>
      <Dashboard></Dashboard>
    </>
  );
}

export default App;
