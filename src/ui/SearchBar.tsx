import { ChangeEventHandler } from 'react';
import styled from 'styled-components';
import Input from './Form/Input';
import { CiSearch } from 'react-icons/ci';

const StyledSearchBar = styled.div`
  position: relative;
  input {
    width: 100%;
  }
`;
const Button = styled.button`
  position: absolute;
  top: 50%;
  right: 1.5rem;
  transform: translateY(-50%);
  font-size: 3rem;
  color: var(--color-brand-600);

  border: transparent;
  background: transparent;
`;

type SearchBarProps = {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <StyledSearchBar>
      <Input
        type="search"
        placeholder="Search food..."
        value={value}
        onChange={onChange}
      />
      <Button>
        <CiSearch />
      </Button>
    </StyledSearchBar>
  );
}
