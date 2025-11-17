import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import PlayersSection from './components/PlayersSection';
import { VerificationProvider } from './context/VerificationContext';

function App() {
  return (
    <VerificationProvider>
      <div className="App">
        <Header />
        <Banner />
        <PlayersSection />
      </div>
    </VerificationProvider>
  );
}

export default App;
