import * as SC from "./AppStyled";
import AvatarsComp from "./components/AvatarsComp/AvatarsComp";
import Contacts from "./components/Contacts/Contacts";
import FooterContent from "./components/FooterContent/FooterContent";
import Hero from "./components/Hero/Hero";
import Journey from "./components/Journey/Journey";
import Logo from "./components/Logo/Logo";
import MembershipList from "./components/MembershipList/MembershipList";
import NotAverage from "./components/NotAverage/NotAverage";
import ReadTogether from "./components/ReadTogether/ReadTogether";
import Testimonial from "./components/Testimonial/Testimonial";
import { useScreenSize } from "./hooks/useScreenSize";
import Footer from "./layouts/Footer/Footer";
import Header from "./layouts/Header/Header";
import SharedLayout from "./layouts/SharedLayout/SharedLayout";

const App: React.FC = () => {

const {isDesktop} = useScreenSize()

  return (
    <SC.AppCon>
      <Header>
        <Logo />
      </Header>
      <SharedLayout>
        <Hero />
        <ReadTogether />
        <NotAverage />
        {isDesktop && <Journey/>}
        <MembershipList />
        <Testimonial />
      </SharedLayout>
      <Footer>
        <FooterContent/>
        <AvatarsComp/>
        <Contacts/>
      </Footer>
    </SC.AppCon>
  );
};

export default App;
