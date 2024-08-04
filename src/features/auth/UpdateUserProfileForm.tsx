import styled from 'styled-components';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import { UserMetaData } from '../../services/types';
import { breakpoint } from '../../styles/configStyles';

import useUser from './useUser';
import useUpdateUser from './useUpdateUser';

import UserAvatar from './UserAvatar';
import BirthdayInput from './UserInputs/BirthdayInput';
import GenderInput from './UserInputs/GenderInput';
import HeightInput from './UserInputs/HeightInput';
import NicknameInput from './UserInputs/NicknameInput';
import InputFile from '../../ui/Form/InputFile';
import Form from '../../ui/Form/Form';
import FormRow from '../../ui/Form/FormRow';
import Text from '../../ui/Text';
import Heading from '../../ui/Heading';
import Button from '../../ui/Buttons/Button';
import BreakLine from '../../ui/BreakLine';
import HeaderApp from '../../ui/HeaderAppSection';

const FormExt = styled(Form)`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${breakpoint.laptop}) {
    gap: 1rem;
    max-width: 80rem;
  }
`;

type UpdateUserProfileForm = {
  avatar: UserMetaData['avatar'];
  nickname: UserMetaData['nickname'];
  gender: UserMetaData['gender'];
  birthdate: UserMetaData['birthdate'];
  height: UserMetaData['height'];
};

function UpdateUserProfileForm() {
  const { updateUser, isPending } = useUpdateUser();
  const { user } = useUser();
  const { avatar, nickname, gender, birthdate, height } = user?.user_metadata as UserMetaData;
  const { handleSubmit, register } = useForm({
    defaultValues: {
      avatar,
      nickname,
      gender,
      birthdate,
      height,
    },
  });

  const onSubmit: SubmitHandler<UpdateUserProfileForm> = (userData) => {
    updateUser({ ...userData }, { onSuccess: () => toast.success('Profile data successfuly updated!') });
  };

  return (
    <>
      <HeaderApp>
        <div>
          <Heading as="h2" $opacity={1}>
            Profile Details
          </Heading>
          <Text $opacity={0.8}>You can change your profile details here seamlessly.</Text>
        </div>
        <Button onClick={handleSubmit(onSubmit)} disabled={isPending}>
          Update
        </Button>
      </HeaderApp>
      <FormExt>
        <FormRow label="Profile picture" id="avatar" vertical>
          <UserAvatar size="medium" />
          <Text $small $opacity={0.9}>
            Upload Your avatar image
          </Text>
          <InputFile accept="image/*" disabled={isPending} {...register('avatar')} />
        </FormRow>
        <BreakLine />

        <NicknameInput inputRegister={register('nickname')} disabled={isPending} />
        <BreakLine />
        <GenderInput inputRegister={register('gender')} disabled={isPending} />
        <BreakLine />
        <BirthdayInput inputRegister={register('birthdate')} disabled={isPending} />
        <BreakLine />
        <HeightInput inputRegister={register('height.value')} radioRegister={register('height.unit')} disabled={isPending} />
      </FormExt>
    </>
  );
}

export default UpdateUserProfileForm;
