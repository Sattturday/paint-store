import { Header } from './components/Header';
import { Promo } from './components/Promo';
import { Footer } from './components/Footer';
import { About } from './components/About';
import { Popular } from './components/Popular';
import { Discounts } from './components/Discounts';

function App() {
  return (
    <>
      <Header />
      <main>
        <Promo />
        <About />
        <Popular />
        <Discounts />
        {/* <Advice />*/}
      </main>
      <Footer />
    </>
  );
}

export default App;
