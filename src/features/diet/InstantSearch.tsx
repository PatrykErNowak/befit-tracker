import styled from 'styled-components';
import Form from '../../ui/Form/Form';
import { SyntheticEvent, useState } from 'react';
import { getInstantFoods } from '../../services/apiNutritionix';
import { InstantSearchType } from '../../services/types';
import { breakpoint } from '../../styles/configStyles';
import SearchBar from '../../ui/SearchBar';
import InstantFoodItem from '../../ui/FoodListItem';
import Button from '../../ui/Buttons/Button';
import Text from '../../ui/Text';

const InstantList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 1fr;
  gap: 2rem;
  padding: 2rem 0;

  /* @media screen and (min-width: ${breakpoint.laptop}) {
    gap: 3rem;
  } */
`;

const ListFiltersBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  font-size: 0.7em;
`;

function InstantSearch() {
  const [query, setQuery] = useState('');
  const [foodType, setFoodType] = useState<'branded' | 'common'>('common');
  const [data, setData] = useState<InstantSearchType | null>(null);

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
      <ListFiltersBox>
        <Button
          $variation={
            foodType === 'common' ? 'primaryActive' : 'primaryInactive'
          }
          onClick={() => setFoodType('common')}>
          Common
        </Button>
        <Button
          $variation={
            foodType === 'branded' ? 'primaryActive' : 'primaryInactive'
          }
          onClick={() => setFoodType('branded')}>
          Branded
        </Button>
      </ListFiltersBox>
      {data && (
        <InstantList>
          {(foodType === 'common' &&
            data.common.length > 0 &&
            data.common.map((food) => (
              <InstantFoodItem
                img={food.photo.thumb}
                name={food.food_name}
                quantityNumb={food.serving_qty}
                quantityUnit={food.serving_unit}
                key={food.food_name}
              />
            ))) ||
            (foodType === 'common' && <Text>No results</Text>)}
          {(foodType === 'branded' &&
            data.branded.length > 0 &&
            data.branded.map((food) => (
              <InstantFoodItem
                img={food.photo.thumb}
                name={food.food_name}
                quantityNumb={food.serving_qty}
                quantityUnit={food.serving_unit}
                kcal={food?.nf_calories}
                key={food.food_name}
              />
            ))) ||
            (foodType === 'branded' && <Text>No results</Text>)}
        </InstantList>
      )}
    </>
  );
}

export default InstantSearch;
