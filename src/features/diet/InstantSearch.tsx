import styled from 'styled-components';
import Form from '../../ui/Form/Form';
import { SyntheticEvent, useState } from 'react';
import { getInstantFoods } from '../../services/apiNutritionix';
import { InstantSearchType } from '../../services/types';
import { breakpoint } from '../../styles/configStyles';
import SearchBar from '../../ui/SearchBar';
import InstantFoodItem from '../../ui/FoodListItem';
import Button from '../../ui/Buttons/Button';
import Pagination from '../../ui/Pagination';
import Text from '../../ui/Text';

const itemsPerPage = 5;

const InstantList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 1fr;
  gap: 1rem;
  padding: 2rem 0;

  @media screen and (min-width: ${breakpoint.laptop}) {
    gap: 2rem;
  }
`;

const NoResultsMessage = styled.li`
  display: flex;
  justify-content: center;
  color: var(--color-grey-400);
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
  const [activePage, setActivePage] = useState(1);

  const common = data?.common.slice(
    (activePage - 1) * itemsPerPage,
    activePage * itemsPerPage
  );
  const branded = data?.branded.slice(
    (activePage - 1) * itemsPerPage,
    activePage * itemsPerPage
  );

  function onFoodTypeChange(type: 'branded' | 'common') {
    setFoodType(type);
    setActivePage(1);
  }

  async function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();

    if (!query || query.length < 3) return;

    const data = await getInstantFoods(query);
    setData(data);
    setQuery('');
  }

  return (
    <>
      <Text $bold={500} $opacity={0.9} $small>
        Search dish or ingredient and add to your meal. If you haven't found
        what you want, try to be more specific.
      </Text>
      <Form onSubmit={handleSubmit}>
        <SearchBar
          value={query}
          onChange={(e) => setQuery(e.currentTarget.value)}
        />
      </Form>
      {data && (
        <ListFiltersBox>
          <Button
            $variation={
              foodType === 'common' ? 'primaryActive' : 'primaryInactive'
            }
            onClick={() => onFoodTypeChange('common')}>
            Common
          </Button>
          <Button
            $variation={
              foodType === 'branded' ? 'primaryActive' : 'primaryInactive'
            }
            onClick={() => onFoodTypeChange('branded')}>
            Branded
          </Button>
        </ListFiltersBox>
      )}
      {data && (
        <>
          <InstantList>
            {(foodType === 'common' &&
              common &&
              common.length > 0 &&
              common.map((food) => (
                <InstantFoodItem
                  img={food.photo.thumb}
                  name={food.food_name}
                  quantityNumb={food.serving_qty}
                  quantityUnit={food.serving_unit}
                  key={food.food_name}
                />
              ))) ||
              (foodType === 'common' && (
                <NoResultsMessage>No results found </NoResultsMessage>
              ))}
            {(foodType === 'branded' &&
              branded &&
              data.branded.length > 0 &&
              branded.map((food) => (
                <InstantFoodItem
                  img={food.photo.thumb}
                  name={food.food_name}
                  quantityNumb={food.serving_qty}
                  quantityUnit={food.serving_unit}
                  kcal={food?.nf_calories}
                  key={food.food_name}
                />
              ))) ||
              (foodType === 'branded' && (
                <NoResultsMessage>No results</NoResultsMessage>
              ))}
          </InstantList>
          <Pagination
            key={foodType}
            itemsPerPage={itemsPerPage}
            numOfItems={
              foodType === 'common' ? data.common.length : data.branded.length
            }
            onPageChange={(page) => setActivePage(page)}
          />
        </>
      )}
    </>
  );
}

export default InstantSearch;
