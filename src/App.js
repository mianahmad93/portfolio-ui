import "./App.css";
import Appbar from "./components/Appbar/appbar";
import Home from "./components/home/home";
import Sample from "./components/sample/sample";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Appbar />
      <Home />
      <Sample />
      <ToastContainer/>
    </>
  );
}

export default App;
