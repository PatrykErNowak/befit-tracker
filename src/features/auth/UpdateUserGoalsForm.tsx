import styled from 'styled-components';
import Form from '../../ui/Form/Form';
import { breakpoint } from '../../styles/configStyles';
import { UserMetaData } from '../../services/types';
import useUser from './useUser';

const FormExt = styled(Form)`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${breakpoint.laptop}) {
    gap: 1rem;
    max-width: 80rem;
  }
`;

function UpdateUserGoalsForm() {
  const { user } = useUser();
  const {} = user?.user_metadata as UserMetaData;

  return <FormExt>goals</FormExt>;
}

export default UpdateUserGoalsForm;
