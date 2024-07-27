import { IoLogOut } from 'react-icons/io5';
import MenuButton from '../../ui/Buttons/MenuButton';
import { useLogout } from './useLogout';
import SpinnerMini from '../../ui/SpinnerMini';

function LogoutButton() {
  const { logout, isPending } = useLogout();

  return <MenuButton disabled={isPending} icon={isPending ? <SpinnerMini /> : <IoLogOut />} label="Logout" onClick={() => logout()} />;
}

export default LogoutButton;
