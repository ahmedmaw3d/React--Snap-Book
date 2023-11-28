import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from './Section/Footer/Footer';
import Features from './Section/Features/Features';
import ContainerPhone from './Section/Container/ContainerPhone';
import Choose from './Section/Choose/Choose';
import Header from './Section/Header/header';
const App = () => {
  return (
    <div>
      <div className="row d-flex justify-content-center w-100">
        <div className="col-xl-8">
          <Header/>
          <Choose/>
          <Features />
          <ContainerPhone />
        </div>
      </div >
      <Footer />
    </div>
  );
}

export default App;
