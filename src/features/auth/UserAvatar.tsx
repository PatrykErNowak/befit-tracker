import styled, { css } from 'styled-components';
import { UserMetaData } from '../../services/types';
import useUser from './useUser';

const StyledUserAvatar = styled.div<{
  $size?: 'small' | 'medium' | 'large';
}>`
  background-color: var(--color-brand-600);
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
  ${({ $size = 'small' }) => {
    if ($size === 'small')
      return css`
        width: 5rem;
        height: 5rem;
      `;
    if ($size === 'medium')
      return css`
        width: 8rem;
        height: 8rem;
      `;
    if ($size === 'large')
      return css`
        width: 10rem;
        height: 10rem;
      `;
  }}
`;

function UserAvatar({ size }: { size: 'small' | 'medium' | 'large' }) {
  const { user } = useUser();
  const { avatar, gender } = user?.user_metadata as UserMetaData;

  const imageSrc = typeof avatar === 'string' ? avatar : ``;

  return (
    <StyledUserAvatar $size={size}>
      <img src={imageSrc || `https://sukgorleigsryfzeblhv.supabase.co/storage/v1/object/public/avatars/avatar-${gender}.jpg`} alt="User Avatar" />
    </StyledUserAvatar>
  );
}

export default UserAvatar;
