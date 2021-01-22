import './App.css';
import Header from './components/layout/Header';
import { Provider } from 'react-redux'
import store from './store'
import GetQuestions from './components/quiz/GetQuestions';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <div className="container">
        <GetQuestions />
      </div>
    </Provider>
  );
}

export default App;
