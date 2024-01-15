import { Header } from './components/Header';
import { Promo } from './components/Promo';
import { Footer } from './components/Footer';
import { About } from './components/About';

function App() {
  return (
    <>
      <Header />
      <main>
        <Promo />
        <About />
        <Popular />
        {/*  <Discounts />
        <Advice />*/}
      </main>
      <Footer />
    </>
  );
}

export default App;
