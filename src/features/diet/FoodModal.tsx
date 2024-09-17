import styled from 'styled-components';
import { breakpoint } from '../../styles/configStyles';
import ButtonIcon from '../../ui/Buttons/ButtonIcon';
import useSearchFoodItem from './useSearchFoodItem';
import Form from '../../ui/Form/Form';
import Spinner from '../../ui/Spinner';
import { useState } from 'react';
import { calcFoodItemNutrient } from '../../utils/helpers';
import ShowExtraInfoOnClick from '../../ui/ShowExtraInfoOnHover';
import FormRow from '../../ui/Form/FormRow';
import Input from '../../ui/Form/Input';
import Button from '../../ui/Buttons/Button';
import { IoCloseSharp } from 'react-icons/io5';

const StyledFoodModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: grid;
  grid-auto-rows: min-content;
  gap: 2rem;
  width: 100vw;
  height: 100vh;
  padding: 2rem 2rem 6rem;
  overflow: auto;
  background-color: var(--color-brand-50);
  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-md);

  @media screen and (min-width: ${breakpoint.tablet}) {
    overflow: visible;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr auto;
    padding: 4rem;
    width: 100%;
    max-width: 80rem;
    height: min-content;
  }
`;

const ModalBg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
`;

const ButtonClose = styled(ButtonIcon)`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
`;

const InfoBox = styled.div`
  display: grid;
  grid-template-rows: auto auto auto 1fr;
  width: 100%;

  .brand-name {
    font-size: 1em;
    color: var(--color-grey-500);
  }
  .food-name {
    font-size: 1.4em;
    color: var(--color-grey-700);
    font-weight: 600;
    margin-bottom: 0.5em;
  }

  .photo {
    display: flex;
    align-items: center;
    img {
      margin: 2rem auto 0;
      display: block;
      max-height: 27vh;
    }
  }

  @media screen and (min-width: ${breakpoint.tablet}) {
    grid-column: 1/2;
    grid-row: 1/-1;
  }
`;

const NutritionTable = styled.table`
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;

  td,
  th {
    padding: 0.5em 0;
    text-align: center;
  }

  .body {
    tr {
      border-top: 1px solid var(--color-grey-300);
    }
    th {
      font-weight: 500;
      text-align: start;
    }
  }
`;

const ServingForm = styled(Form)`
  display: grid;
`;

function FoodModal({ id, onClose }: { id: string; onClose: () => void }) {
  const { data, isPending } = useSearchFoodItem(id);
  const [serving, setServing] = useState(1);

  if (isPending)
    return (
      <ModalBg>
        <Spinner />;
      </ModalBg>
    );

  if (!data) return null;

  const {
    serving_weight_grams,
    nf_calories,
    nf_total_fat,
    nf_total_carbohydrate,
    nf_protein,
    nf_ingredient_statement,
  } = data;

  const calcServing = (nutrient: number) =>
    calcFoodItemNutrient(serving_weight_grams, nutrient);

  const servingWeight = Math.floor(serving_weight_grams * serving);

  const kcal100 = calcServing(nf_calories).toFixed(0);
  const kcalServing = (nf_calories * serving).toFixed(0);

  const protein100 = calcServing(nf_protein).toFixed(1);
  const proteinServing = (nf_protein * serving).toFixed(1);

  const fat100 = calcServing(nf_total_fat).toFixed(1);
  const fatServing = (nf_total_fat * serving).toFixed(1);

  const carbs100 = calcServing(nf_total_carbohydrate).toFixed(1);
  const carbsServing = (nf_total_carbohydrate * serving).toFixed(1);

  function closeModal() {
    onClose();
  }

  console.log(data);
  return (
    <StyledFoodModal>
      <InfoBox>
        <p className="brand-name">{data?.brand_name}</p>
        <p className="food-name">{data?.food_name}</p>
        <ShowExtraInfoOnClick label="Ingredients">
          {nf_ingredient_statement}
        </ShowExtraInfoOnClick>
        <div className="photo">
          <img src={data?.photo.thumb} alt="" />
        </div>
      </InfoBox>
      <NutritionTable>
        <thead>
          <tr>
            <th></th>
            <th>100g</th>
            <th>
              Serving <br /> ({servingWeight} g)
            </th>
          </tr>
        </thead>
        <tbody className="body">
          <tr>
            <th>Energy</th>
            <td>{kcal100} kcal</td>
            <td>{kcalServing} kcal</td>
          </tr>
          <tr>
            <th>Protein</th>
            <td>{protein100} g</td>
            <td>{proteinServing} g</td>
          </tr>
          <tr>
            <th>Fat</th>
            <td>{fat100} g</td>
            <td>{fatServing} g</td>
          </tr>
          <tr>
            <th>Carbs</th>
            <td>{carbs100} g</td>
            <td>{carbsServing} g</td>
          </tr>
        </tbody>
      </NutritionTable>
      <ServingForm>
        <FormRow label="Set serving weight (g)">
          <Input
            type="number"
            list="serving"
            onChange={(e) => {
              if (e.target.value)
                setServing(Number(e.target.value) / serving_weight_grams);
            }}
          />
          <datalist id="serving">
            <option value={0.5 * serving_weight_grams}>0.5 Serving</option>
            <option value={serving_weight_grams}>1 Serving</option>
            <option value={2 * serving_weight_grams}>2 Servings</option>
            <option value={3 * serving_weight_grams}>3 Servings</option>
          </datalist>
        </FormRow>

        <Button>Add</Button>
      </ServingForm>
      <ButtonClose $errorColor $size={3} onClick={closeModal}>
        <IoCloseSharp />
      </ButtonClose>
    </StyledFoodModal>
  );
}

export default FoodModal;
