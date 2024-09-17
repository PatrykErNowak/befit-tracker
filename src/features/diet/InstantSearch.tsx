import styled from 'styled-components';
import Form from '../../ui/Form/Form';
import { useState } from 'react';
import { breakpoint } from '../../styles/configStyles';
import SearchBar from '../../ui/SearchBar';
import InstantFoodItem from '../../ui/FoodListItem';
import Pagination from '../../ui/Pagination';
import Text from '../../ui/Text';
import useInstantSearchFood from './useInstantSearchFood';
import Spinner from '../../ui/Spinner';
import FoodModal from './FoodModal';

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

function InstantSearch() {
  const [query, setQuery] = useState('');
  const searchQuery = !query || query.length < 3 ? '' : query;
  const { data, isPending, error } = useInstantSearchFood(searchQuery);
  const [activePage, setActivePage] = useState(1);
  const [foodModal, setFoodModal] = useState('');

  const branded = data?.branded.slice(
    (activePage - 1) * itemsPerPage,
    activePage * itemsPerPage
  );

  return (
    <>
      <Text $bold={500} $opacity={0.9} $small>
        Search dish or ingredient and add to your meal. If you haven't found
        what you want, try to be more specific.
      </Text>
      <Form>
        <SearchBar
          value={query}
          onChange={(e) => setQuery(e.currentTarget.value)}
        />
      </Form>
      {isPending && <Spinner />}
      {error && (
        <NoResultsMessage>Something went wrong, try again.</NoResultsMessage>
      )}
      {data && (
        <>
          <InstantList>
            {(branded &&
              data.branded.length > 0 &&
              branded.map((food) => (
                <InstantFoodItem
                  img={food.photo.thumb}
                  name={food.food_name}
                  quantityNumb={food.serving_qty}
                  quantityUnit={food.serving_unit}
                  kcal={food?.nf_calories}
                  key={food.food_name}
                  onClick={() => setFoodModal(food.nix_item_id)}
                />
              ))) || <NoResultsMessage>No results found.</NoResultsMessage>}
          </InstantList>
          <Pagination
            itemsPerPage={itemsPerPage}
            numOfItems={data.branded.length}
            onPageChange={(page) => setActivePage(page)}
          />
        </>
      )}
      {foodModal && (
        <FoodModal id={foodModal} onClose={() => setFoodModal('')} />
      )}
    </>
  );
}

export default InstantSearch;
