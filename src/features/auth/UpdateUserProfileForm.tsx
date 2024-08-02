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
    <FormExt>
      <FormRow label="Profile picture" id="avatar" vertical>
        <UserAvatar size="medium" />
        <Text>Upload Your avatar image</Text>
        <InputFile accept="image/*" />
      </FormRow>

      <NicknameInput inputRegister={register('nickname')} />
      <GenderInput inputRegister={register('gender')} />
      <BirthdayInput inputRegister={register('birthdate')} />
      <HeightInput inputRegister={register('height.value')} radioRegister={register('height.unit')} />
    </FormExt>
  );
}

export default UpdateUserProfileForm;
