import { FaSortAmountDown, FaSortAmountUp } from 'react-icons/fa';
import {DIRECTION} from '../../constants';

const DirectionFilter = ({direction, changeDirection}) => {
  return (
    <button 
      className="border border-gray-400 ml-1 rounded w-10 text-gray-600 font-bold"
      onClick={changeDirection}
    >
      {direction === DIRECTION.SORT_DIRECTION_DESC && (
        <FaSortAmountDown
          data-testid={DIRECTION.SORT_DIRECTION_DESC}
          className="h-6 w-8 fill-current"
        />
      )}
      {direction === DIRECTION.SORT_DIRECTION_ASC && (
        <FaSortAmountUp
          data-testid={DIRECTION.SORT_DIRECTION_ASC}
          className="h-6 w-8 fill-current"
        />
      )}
    </button>
  );
};

export default DirectionFilter;