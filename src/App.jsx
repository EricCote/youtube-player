import { Container } from 'react-bootstrap';
import About from './About';
import Compteur from './Compteur';
import Home from './Home';
import { useEffect, useState } from 'react';
import Menu from './Menu';
import Users from './Users';
import PropDrill from './PropDrilling/L1-SimpleState';
import SimpleContext from './ContextSample/L1-SimpleContext';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState(
    window.location.hash || '#home'
  );

  console.log('test');

  function changeRoute() {
    setCurrentRoute(window.location.hash);
  }

  useEffect(() => {
    window.addEventListener('hashchange', changeRoute);
    if (!window.location.hash) {
      window.location.hash = '#home';
    }
  }, []);

  useEffect(() => {
    console.log('on arrive à ' + currentRoute);
    return () => {
      console.log('on quitte ' + currentRoute);
    };
  }, [currentRoute]);

  return (
    <>
      <Menu />
      <Container>
        <Routage route={currentRoute} />
      </Container>
    </>
  );
}

function Routage({ route }) {
  switch (route) {
    case '':
    case '#home':
      return <Home />;
    case '#about':
      return <About />;
    case '#compteur':
      return <Compteur />;
    case '#users':
      return <Users />;
    case '#props':
      return <PropDrill />;
    case '#context':
      return <SimpleContext />;
    default:
      return <Home />;
  }
}
