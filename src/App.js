import './App.css';
import Header from './components/layout/Header';
import { Provider } from 'react-redux'
import store from './store'
import GetQuestions from './components/quiz/GetQuestions';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Categories from './components/pages/Categories';
import NotFound from './components/pages/NotFound';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={GetQuestions} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/categories' component={Categories} />
          <Route component={NotFound} />
        </Switch>
      </Router>

    </Provider>
  );
}

export default App;
