import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
// import { Button } from '@components/Button';
import { Button } from '@components/Button';
import { Text } from '@components/Text';
import { Generator } from '@components/Generator';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Generator />
    </div>
  )
}

// export default App
export { App }
