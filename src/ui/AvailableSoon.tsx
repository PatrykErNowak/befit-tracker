import styled from 'styled-components';
import Container from './Container';
const ContainerExt = styled(Container)`
  height: 80%;
  text-align: center;
`;

function AvailableSoon() {
  return (
    <ContainerExt>
      <h2>
        Available Soon! <br /> Be Patient 😊
      </h2>
    </ContainerExt>
  );
}

export default AvailableSoon;
