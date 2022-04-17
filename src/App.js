
import './App.css';
import Header from './Components/Shared/Header/Header';
import useLoadData from './Components/Shared/Hooks/useLoadData';

function App() {
  const a=useLoadData("services.json")
  console.log(a)
  return (
    <div className="App">
      <Header></Header>
      
    </div>
  );
}

export default App;
