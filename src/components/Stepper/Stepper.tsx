import { useReducer } from 'react';
import styles from './Stepper.module.scss'

interface State {
  count: number;
}

enum ActionType {
  INCREASE = 'INCREASE',
  DECREASE = 'DECREASE',
}

interface Action {
  type: ActionType,
  // payload?: any
}

const initialState: State = {
  count: 0
};

const reducer = (state: State, action: Action) => {
  console.log(action, state);
  switch (action.type) {
    case ActionType.DECREASE:
      return {
        count: state.count - 1
      }
    case ActionType.INCREASE:
      return {
        count: state.count + 1
      }
    default:
      return state;
  }
}

const increase = () => ({ type: ActionType.INCREASE });

export const Stepper = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className={styles.stepper}>
      <button onClick={() => dispatch({ type: ActionType.DECREASE })}>-</button>
      <span>{state.count}</span>
      <button onClick={() => dispatch(increase())}>+</button>
    </div>
  );
}