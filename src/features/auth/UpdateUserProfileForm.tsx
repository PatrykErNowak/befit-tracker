import { useForm } from 'react-hook-form';
import { UserMetaData } from '../../services/types';
import Form from '../../ui/Form/Form';

import FormRow from '../../ui/Form/FormRow';

import UserAvatar from './UserAvatar';
import BirthdayInput from './UserInputs/BirthdayInput';
import GenderInput from './UserInputs/GenderInput';
import HeightInput from './UserInputs/HeightInput';
import useUser from './useUser';
import NicknameInput from './UserInputs/NicknameInput';
import InputFile from '../../ui/Form/InputFile';
import Text from '../../ui/Text';
import styled from 'styled-components';
import { breakpoint } from '../../styles/configStyles';
import Heading from '../../ui/Heading';

const Header = styled.header`
  position: relative;
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: var(--color-grey-200);
  }
`;

const BreakLine = styled.div`
  margin-bottom: 1rem;
  width: 100%;
  height: 2px;
  background-color: var(--color-grey-200);
`;

const FormExt = styled(Form)`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${breakpoint.laptop}) {
    gap: 1rem;
    max-width: 80rem;
  }
`;

function UpdateUserProfileForm() {
  const { user } = useUser();
  const { nickname, gender, birthdate, height } = user?.user_metadata as UserMetaData;
  const { register } = useForm({
    defaultValues: {
      nickname,
      gender,
      birthdate,
      height,
    },
  });

  return (
    <>
      <Header>
        <Heading as="h2" $opacity={1}>
          Profile Details
        </Heading>
        <Text $opacity={0.8}>You can change your profile details here seamlessly.</Text>
      </Header>
      <FormExt>
        <FormRow label="Profile picture" id="avatar" vertical>
          <UserAvatar size="medium" />
          <Text $small $opacity={0.9}>
            Upload Your avatar image
          </Text>
          <InputFile accept="image/*" />
        </FormRow>
        <BreakLine />

        <NicknameInput inputRegister={register('nickname')} />
        <BreakLine />
        <GenderInput inputRegister={register('gender')} />
        <BreakLine />
        <BirthdayInput inputRegister={register('birthdate')} />
        <BreakLine />
        <HeightInput inputRegister={register('height.value')} radioRegister={register('height.unit')} />
      </FormExt>
    </>
  );
}

export default UpdateUserProfileForm;
