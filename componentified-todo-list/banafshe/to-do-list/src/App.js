import './App.css';
import TodoList from './components/todoList'
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios'

axios.defaults.baseURL = 'https://todolist.ehsan-rafee.ir/api/';
axios.defaults.headers.post['Content-Type'] = 'application/json';

function App() {
  return (
    <div className="container overflow-hidden">
      <TodoList/>
    </div>
  );
}

export default App;
