import { Confirmation } from './components/Confirmation';
import { Countdown } from './components/Countdown';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Location } from './components/Location';
import { Photos } from './components/Photos';
import { Overlay } from './components/Overlay';
import './invitation.css';

function Invitation() {
  return (
    <>
      <Overlay />
      <Header />
      <Location />
      <Photos />
      <Countdown />
      <Countdown />
      <Confirmation />
      <Footer />
    </>
  );
}

export default Invitation;
