import './App.css';
import AddTopic from './components/AddTopic';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './components/Dashboard';
import ShowTopic from './components/ShowTopic';
import EditTopic from './components/EditTopic';
// import EditTopic from './components/EditTopic';


function App() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route element={<Dashboard />} path="/surfit/dashboard" />
        <Route element={<AddTopic />} path="/surfit/addTopic" />
        <Route element={<ShowTopic />} path="/surfit/showTopic/:id" />
        <Route element={<EditTopic />} path="/surfit/editTopic/:id" />

      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
