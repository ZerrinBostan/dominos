import { BrowserRouter as Router } from 'react-router-dom';

import AppLayout from './app.styled';
import './index.css';

import Header from './components/Header';
import Routes from './utils/routers';

function App() {
  return (
    <div className="App">
      <AppLayout>
        <Router>
          <Header />
          <Routes />
        </Router>
      </AppLayout>
    </div>
  );
}

export default App;
