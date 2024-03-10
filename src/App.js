import Dropdown from './component/dropdown/dropdown';
import './App.css';

function App() {
  return (
    <div className="App">
      <Dropdown items={['Item 1', 'Item 2', 'Item 3']} />
    </div>
  );
}

export default App;
