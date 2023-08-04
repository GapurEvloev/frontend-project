import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'shared/ui/Button/Button';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

const Counter = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);
  const { t } = useTranslation();

  const increment = () => {
    dispatch(counterActions.increment());
  };

  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      <h1 data-testid="counter-value-title">
        {counterValue}
      </h1>
      <Button
        onClick={increment}
        data-testid="counter-increment-button"
      >
        {t('increment')}
      </Button>
      <Button
        onClick={decrement}
        data-testid="counter-decrement-button"
      >
        {t('decrement')}
      </Button>
    </div>
  );
};

export default Counter;
