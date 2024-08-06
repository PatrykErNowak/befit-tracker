import NavPage from '../../ui/Page/NavPage';
import HeaderPage from '../../ui/Page/HeaderPage';
import FeaturesPage from '../../ui/Page/FeaturesPage';
import Wrapper from '../../ui/Wrapper';

function LandingPage() {
  return (
    <>
      <NavPage />
      <HeaderPage />
      <main>
        <Wrapper>
          <FeaturesPage />
        </Wrapper>
      </main>
    </>
  );
}

export default LandingPage;
