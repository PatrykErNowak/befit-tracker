import styled from 'styled-components';
import useUser from './useUser';
import { UserMetaData } from '../../services/types';

const StyledProfileAvatarInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem 0;
`;

const Avatar = styled.div`
  grid-column: 1/2;
  grid-row: 1/2;

  background-color: var(--color-brand-300);
  width: 5rem;
  height: 5rem;
  padding: 3px;
  border-radius: 50%;
  overflow: hidden;
  img {
    border-radius: 50%;
    width: 100%;
    display: block;
  }
`;

const Info = styled.div`
  grid-column: 2/3;
  grid-row: 1/2;

  color: var(--color-brand-50);

  :first-child {
    font-weight: 500;
  }
  :last-child {
    font-size: 0.9em;
    font-weight: 300;
    opacity: 0.8;
  }
`;

function ProfileAvatarInfo() {
  const { user } = useUser();
  const { avatar, email, nickname, gender } = user?.user_metadata as UserMetaData;

  return (
    <StyledProfileAvatarInfo>
      <Avatar>
        <img src={avatar || `https://sukgorleigsryfzeblhv.supabase.co/storage/v1/object/public/avatars/avatar-${gender}.jpg`} alt="User Avatar" />
      </Avatar>
      <Info>
        <p>{nickname}</p>
        <p>{email}</p>
      </Info>
    </StyledProfileAvatarInfo>
  );
}

export default ProfileAvatarInfo;
