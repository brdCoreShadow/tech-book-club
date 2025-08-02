import * as SC from "./AppStyled";
import Hero from "./components/Hero/Hero";
import Logo from "./components/Logo/Logo";
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
      </SharedLayout>
    </SC.AppCon>
  );
};

export default App;
