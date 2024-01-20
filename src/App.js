import { Header } from './components/Header';
import { Promo } from './components/Promo';
import { Footer } from './components/Footer';
import { About } from './components/About';
import { Popular } from './components/Popular';
import { Discounts } from './components/Discounts';
import { Advice } from './components/Advice';
import InfoTooltip from './components/InfoToolTip/InfoToolTip';
import { useState } from 'react';

function App() {
  const [infoMessage, setInfoMessage] = useState('');

  function closePopup() {
    setInfoMessage('');
  }

  return (
    <>
      <Header />
      {/* <main>
      <Promo />
      <About />
      <Popular />
      <Discounts />
      <Advice setInfoMessage={setInfoMessage} />
    </main>
    <Footer /> */}
      <InfoTooltip message={infoMessage} onClose={closePopup} />
    </>
  );
}

export default App;
