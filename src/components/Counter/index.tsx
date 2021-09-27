import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementSync,
  selectCount,
} from './counterSlice';
import styles from './Counter.module.css';

const Counter: React.FC<{}> = (props) => {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');
  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={e => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() =>
            dispatch(incrementByAmount(Number(incrementAmount) || 0))
          }
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
        >
          Add Async
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementSync(Number(incrementAmount) || 0))}
        >
          Add Sync
        </button>
      </div>
    </div>
  );
}

export default Counter
