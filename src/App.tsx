import * as SC from "./AppStyled";
import Hero from "./components/Hero/Hero";
import Logo from "./components/Logo/Logo";
import MembershipList from "./components/MembershipList/MembershipList";
import NotAverage from "./components/NotAverage/NotAverage";
import ReadTogether from "./components/ReadTogether/ReadTogether";
import Header from "./layouts/Header/Header";
import SharedLayout from "./layouts/SharedLayout/SharedLayout";

const App: React.FC = () => {
  return (
    <SC.AppCon>
      <Header>
        <Logo/>
      </Header>
      <SharedLayout>
        <Hero/>
        <ReadTogether/>
        <NotAverage/>
        <MembershipList/>
      </SharedLayout>
    </SC.AppCon>
  );
};

export default App;
