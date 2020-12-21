import { BrowserRouter as Router, Route} from 'react-router-dom'

import './app.scss';

import FirstScreen from '../firstScreen';
import SecondScreen from '../secondScreen';
import ThirdScreen from '../thirdScreen';

function App() {
  return (
    <Router>
      <Route path='/>' component={ FirstScreen } />
      <Route path='/ss' component={ SecondScreen } />
      <Route path='/ts' component={ ThirdScreen } />
    </Router>
  );
}

export default App;
