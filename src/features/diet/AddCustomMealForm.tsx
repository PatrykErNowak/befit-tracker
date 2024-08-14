import styled from 'styled-components';
import ComponentAppWrapper from '../../ui/ComponentAppWrapper';
import Form from '../../ui/Form/Form';
import FormRow from '../../ui/Form/FormRow';
import Input from '../../ui/Form/Input';

const MultiRow = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  gap: 2rem;
`;

function AddCustomMealForm() {
  return (
    <ComponentAppWrapper>
      <Form>
        <FormRow label="Title" id="dish-name">
          <Input type="text" id="dish-name" name="dish-name" />
        </FormRow>
        <FormRow label="Description" id="dish-desc">
          <Input type="text" id="dish-desc" name="dish-desc" />
        </FormRow>
        <MultiRow>
          <FormRow label="Calories" id="dish-kcal">
            <Input type="number" id="dish-kcal" name="dish-kcal" />
          </FormRow>
          <FormRow label="Weight" id="dish-weight">
            <Input type="number" id="dish-weight" name="dish-weight" />
          </FormRow>
        </MultiRow>
        <MultiRow>
          <FormRow label="Protein" id="dish-protein">
            <Input type="number" id="dish-protein" name="dish-protein" />
          </FormRow>
          <FormRow label="Carbohydrates" id="dish-carbs">
            <Input type="number" id="dish-carbs" name="dish-carbs" />
          </FormRow>
          <FormRow label="Fat" id="dish-fat">
            <Input type="number" id="dish-fat" name="dish-fat" />
          </FormRow>
        </MultiRow>
      </Form>
    </ComponentAppWrapper>
  );
}

export default AddCustomMealForm;
