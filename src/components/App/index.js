import styled from 'styled-components';
import { title } from '../../styles'
import Calculator from '../Calculator'

const Title = styled.h1`
  ${title}
`

function App() {
  return (
    <div className="App">
        <Title>Hello Calculator</Title>
        <Calculator />
    </div>
  );
}

export default App;
