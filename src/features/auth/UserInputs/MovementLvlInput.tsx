import { forwardRef } from 'react';
import FormRadioRow from '../../../ui/Form/FormRadioRow';
import Radio from '../../../ui/Form/Radio';
import { UseFormRegisterReturn } from 'react-hook-form';
type MovementLvlInputProps = {
  inputRegister?: UseFormRegisterReturn<'movementLvl'>;
} & React.ComponentProps<'input'>;

const MovementLvlInput = forwardRef<HTMLInputElement, MovementLvlInputProps>(function ({ inputRegister, ...props }, ref) {
  return (
    <FormRadioRow label="Level of movement during the day (without training)">
      <Radio
        id="movVerylow"
        label="Very low"
        labelDesc="Sedentary work, light housework, walking only to the bus"
        value={0}
        ref={ref}
        {...props}
        {...inputRegister}
      />
      <Radio
        id="movLow"
        label="Low"
        labelDesc="Sedentary or standing work with movement during the day, heavier housework"
        value={1}
        ref={ref}
        {...props}
        {...inputRegister}
      />
      <Radio id="movAverage" label="Average" labelDesc="Physical work, a lot of movement during the day" value={2} ref={ref} {...props} {...inputRegister} />
      <Radio
        id="movHigh"
        label="High"
        labelDesc="Many hours of hard physical work, very much movement during the day"
        value={3}
        ref={ref}
        {...props}
        {...inputRegister}
      />
    </FormRadioRow>
  );
});

export default MovementLvlInput;
