import './App.css';
import UserInterface from './components/UI/UserInterface';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='App'>
      <h1 className='headline'>Tic Tac Toe</h1>
      <UserInterface />
    </div>
  );
}

export default App;
