import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header';
import Main from './main';
import Footer from './footer';

function App() {
  return (
    <div style={{ background: 'skyBlue' }}>
      <Header title="Horned Beasts Project" />
      <Main />
      <Footer author="Antoine Charette" />
    </div>
  );
}

export default App;
