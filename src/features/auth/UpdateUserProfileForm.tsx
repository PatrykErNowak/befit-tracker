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
    <Form>
      <UserAvatar size="medium" />
      <FormRow label="Profile picture" id="avatar">
        {/* <input type="file" name="" id="avatar" accept="image/*" /> */}
        <InputFile />
      </FormRow>

      <NicknameInput inputRegister={register('nickname')} />
      <GenderInput inputRegister={register('gender')} />
      <BirthdayInput inputRegister={register('birthdate')} />
      <HeightInput inputRegister={register('height.value')} radioRegister={register('height.unit')} />
    </Form>
  );
}

export default UpdateUserProfileForm;
