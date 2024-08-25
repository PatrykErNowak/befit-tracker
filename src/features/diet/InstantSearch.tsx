import styled from 'styled-components';
import Form from '../../ui/Form/Form';
import Input from '../../ui/Form/Input';
import { CiSearch } from 'react-icons/ci';
import { ChangeEventHandler, SyntheticEvent, useState } from 'react';
import { getInstantFoods } from '../../services/apiNutritionix';
import { InstantSearchType } from '../../services/types';

const testData: InstantSearchType = {
  common: [
    {
      food_name: 'hamburger',
      serving_unit: 'sandwich',
      tag_name: 'hamburger',
      serving_qty: 1,
      common_type: null,
      tag_id: '608',
      photo: {
        thumb: 'https://nix-tag-images.s3.amazonaws.com/608_thumb.jpg',
      },
      locale: 'en_US',
    },
  ],
  branded: [],
};

function InstantSearch() {
  const [query, setQuery] = useState('');
  // const [data, setData] = useState<InstantSearchType | null>(null);
  const [data, setData] = useState<InstantSearchType | null>(testData);

  async function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();

    if (!query || query.length < 3) return;

    const data = await getInstantFoods(query);
    setData(data);
    console.log(data);
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <SearchBar
          value={query}
          onChange={(e) => setQuery(e.currentTarget.value)}
        />
      </Form>
      {data && (
        <ul>
          {data.common.map((food) => (
            <li>{food.food_name}</li>
          ))}
        </ul>
      )}
    </>
  );
}

export default InstantSearch;

// -------------------------------------------------------------

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

function SearchBar({ value, onChange }: SearchBarProps) {
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
