import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import FormTodo from './pages/formTodo/FormTodo';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header nome='Renato' sobrenome='Platz' />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/form-todo' element={<FormTodo />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
