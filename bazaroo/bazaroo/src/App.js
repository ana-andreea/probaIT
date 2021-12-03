import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import CTA from './components/CTA';
import Recenzii from './components/Recenzii';

function App() {
  return (
    <div className='container'>
      
      {/* Navigare = Logo + Butoane */}
      <Nav></Nav>

      {/* Hero */}
      <Hero></Hero>

      {/* CTA */}
      <CTA></CTA>
      {/* recenzii */}
      <Recenzii></Recenzii>

      {/* footer */}

    </div>
      
  );
}

export default App;

