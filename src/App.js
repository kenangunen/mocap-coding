import './assets/style/style.scss';
import Header from './components/Header';
import MidSection from './components/mid-section';
import TopSection from './components/top-section';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Header />
      <TopSection />
      <MidSection />
      <Footer />
    </div>
  );
}

export default App;
