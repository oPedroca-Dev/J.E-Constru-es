import Header from "../components/cabecalho";
import Banner from "../components/banner";
import Services from "../components/servicos";
import Sobre from "../components/sobre";
import Contato from "../components/contato";
import Footer from "../components/rodape";
import WhatsAppFlutuante from "../components/watts";
import ScrollToTop from "../components/scroll";
import "./home.scss";


export default function Home() {
  return (
    <div>
        <Header />
        <Banner />
        <Services />         
        <Sobre />
        <Contato />
        <Footer />
        <WhatsAppFlutuante />
        <ScrollToTop />
    </div>
  );
}