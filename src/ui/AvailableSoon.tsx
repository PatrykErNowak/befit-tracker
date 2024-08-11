import styled from 'styled-components';
import Container from './Container';
const ContainerExt = styled(Container)`
  height: 100%;
  text-align: center;
`;

function AvailableSoon() {
  return (
    <ContainerExt>
      <h1>
        Available Soon! <br /> Be Patient 😊
      </h1>
    </ContainerExt>
  );
}

export default AvailableSoon;
