import NavPage from '../../ui/Page/NavPage';
import HeaderPage from '../../ui/Page/HeaderPage';
import FeaturesPage from '../../ui/Page/FeaturesPage';
import Wrapper from '../../ui/Wrapper';
import WorkAnywherePage from '../../ui/Page/WorkAnywherePage';
import FooterPage from '../../ui/Page/FooterPage';

function LandingPage() {
  return (
    <>
      <NavPage />
      <HeaderPage />
      <main>
        <Wrapper>
          <FeaturesPage />
          <WorkAnywherePage />
        </Wrapper>
      </main>
      <FooterPage />
    </>
  );
}

export default LandingPage;
