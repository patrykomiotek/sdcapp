import { Counter } from '../features/counter/Counter';
import { LoanCase } from '../features/loan/LoanCase';

const HomePage = () => {
  return (
    <div>
      <h1>Home</h1>
      <Counter />
      <LoanCase />
      {/* <button onClick={() => methodDoesNotExist()}>Break the world</button> */}
      {/* <Text>Ala</Text>
      <Text>Ma</Text>
      <Text>Ala</Text> */}
    </div>
  );
}

export { HomePage };
