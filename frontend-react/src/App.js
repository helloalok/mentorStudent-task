import { BrowserRouter } from 'react-router-dom';
import Header from './components/header';
import Router from './router';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className='container'>
        <Router />
      </div>
    </BrowserRouter>
  );
}

export default App;
