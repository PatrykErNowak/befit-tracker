import styled from 'styled-components';
import useUser from './useUser';
import { UserMetaData } from '../../services/types';
import UserAvatar from './UserAvatar';

const StyledProfileAvatarInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem 0;
`;

const UserAvatarExt = styled(UserAvatar)`
  grid-column: 1/2;
  grid-row: 1/2;
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
  const { email, nickname } = user?.user_metadata as UserMetaData;

  return (
    <StyledProfileAvatarInfo>
      <UserAvatarExt size="small" />
      <Info>
        <p>{nickname}</p>
        <p>{email}</p>
      </Info>
    </StyledProfileAvatarInfo>
  );
}

export default ProfileAvatarInfo;
