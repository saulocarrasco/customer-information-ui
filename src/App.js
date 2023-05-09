import logo from './logo.svg';
import './App.css';
import CustomerForm from './components/CustomerForm';
import MainHeader from './components/shared/MainHeader';

function App() {
  return (
    <div className="App">
      <MainHeader />
      <div>
        <CustomerForm />
      </div>
    </div>
  );
}

export default App;
