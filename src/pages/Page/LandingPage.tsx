import NavPage from '../../ui/Page/NavPage';
import HeaderPage from '../../ui/Page/HeaderPage';
import FeaturesPage from '../../ui/Page/FeaturesPage';
import Wrapper from '../../ui/Wrapper';
import WorkAnywherePage from '../../ui/Page/WorkAnywherePage';

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
    </>
  );
}

export default LandingPage;
