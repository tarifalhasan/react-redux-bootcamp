
import { Provider } from 'react-redux';
import './App.css';
import Counter from './Counter';
import store from './redux/store';



function App() {


  return (
    <Provider store={store}>
      
      <h1>React Redux Learnig</h1>
     <Counter/>


    </Provider>
  )
}

export default App
