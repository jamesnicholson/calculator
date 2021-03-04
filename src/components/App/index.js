import styled from 'styled-components';
import { title } from '../../styles'

const Title = styled.h1`
  ${title}
`

function App() {
  return (
    <div className="App">
        <Title>Hello Calculator</Title>
    </div>
  );
}

export default App;
