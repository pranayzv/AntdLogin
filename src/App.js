import logo from './logo.svg';
import 'antd/dist/antd.css'; 
import "./App.css";
import { Form, Button, Checkbox, DatePicker, Input, Select, Space } from "antd";
import RegisterComponent from './components/RegisterComponent';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RegisterComponent />
      </header>
    </div>
  );
}

export default App;