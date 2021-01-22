import './App.css';
import Header from './components/layout/Header';
import { Provider } from 'react-redux'
import store from './store'
import QuestionsCount from './components/quiz/QuestionsCount';
import GetQuestions from './components/quiz/GetQuestions';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <div className="container">
        <div className="row align-items-center">
          <QuestionsCount
            heading='Total Questions'
            color='bg-dark'
            count='10'
          />
          <QuestionsCount
            heading='Question Number'
            color='bg-success'
            count='10'
          />

          <QuestionsCount
            heading='Remaining Question'
            color='bg-danger'
            count='10'
          />
        </div>
        <GetQuestions />
      </div>
    </Provider>
  );
}

export default App;
