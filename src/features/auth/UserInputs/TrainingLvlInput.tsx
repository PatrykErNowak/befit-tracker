import { UseFormRegisterReturn } from 'react-hook-form';
import FormRadioRow from '../../../ui/Form/FormRadioRow';
import Radio from '../../../ui/Form/Radio';
import { forwardRef } from 'react';

type TrainingLvlInputProps = {
  inputRegister?: UseFormRegisterReturn<'trainingLvl'>;
} & React.ComponentProps<'input'>;

const TrainingLvlInput = forwardRef<HTMLInputElement, TrainingLvlInputProps>(function ({ inputRegister, ...props }, ref) {
  return (
    <FormRadioRow label="Level of training activity">
      <Radio id="trainVerylow" label="Very low" labelDesc="No training" value={0} ref={ref} {...props} {...inputRegister} />
      <Radio id="trainLow" label="Low" labelDesc="Trainings 1-3 days a week" value={1} ref={ref} {...props} {...inputRegister} />
      <Radio id="trainAverage" label="Average" labelDesc="Trainings 4-5 days a week" value={2} ref={ref} {...props} {...inputRegister} />
      <Radio id="trainHigh" label="High" labelDesc="Daily training" value={3} ref={ref} {...props} {...inputRegister} />
    </FormRadioRow>
  );
});

export default TrainingLvlInput;
