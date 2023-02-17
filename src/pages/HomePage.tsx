import { Counter } from '../features/counter/Counter';

const HomePage = () => {
  return (
    <div>
      <h1>Home</h1>
      <Counter />
      {/* <button onClick={() => methodDoesNotExist()}>Break the world</button> */}
      {/* <Text>Ala</Text>
      <Text>Ma</Text>
      <Text>Ala</Text> */}
    </div>
  );
}

export { HomePage };
