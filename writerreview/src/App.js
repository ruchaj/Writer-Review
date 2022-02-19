import logo from './logo.svg';
import './App.css';
import './Login';

function App() {
  return (
    <div className="App">
      <Route exact path="/login">
        <Login />
      </Route>
    </div>
  );
}

export default App;
