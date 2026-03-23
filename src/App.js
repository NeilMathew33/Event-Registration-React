import logo from './logo.svg';
import './App.css';
import AddParticipant from './container/AddParticipant';
import DeleteParticipant from './container/DeleteParticipant';
import SearchParticipant from './container/SearchParticipant';
import ViewAllParticipants from './container/ViewAllParticipants';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AddParticipant />} />
      <Route path="/search" element={<SearchParticipant />} />
      <Route path="/delete" element={<DeleteParticipant />} />
      <Route path="/ViewAll" element={<ViewAllParticipants />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
