import { useParams } from 'react-router-dom';
import { isMealName } from './Diet.types';

export default function useMealName() {
  const { meal } = useParams();

  const isMeal = meal && typeof meal === 'string' && isMealName(meal);

  return isMeal ? meal : null;
}
