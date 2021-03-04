import styled from 'styled-components'
import Button from '../Button';
import { calculator, buttonRow } from '../../styles'
const TheCalculator = styled.div`
  ${calculator}
`
const Row = styled.div`
  ${buttonRow}
`
const Calculator = () => {
    
    return  <TheCalculator>
                <Row>
                    <Button title="AS" handle={()=>console.log("hello")}  />
                    <Button title="&#177;" handle={()=>console.log("hello")}  />
                    <Button title="%" handle={()=>console.log("hello")}  />
                    <Button title="&divide;" handle={()=>console.log("hello")}  />
                </Row>
                <Row>
                    <Button title="7" handle={()=>console.log("hello")}  />
                    <Button title="8" handle={()=>console.log("hello")}  />
                    <Button title="9" handle={()=>console.log("hello")}  />
                    <Button title="&times;" handle={()=>console.log("hello")}  />
                </Row>
                <Row>
                    <Button title="4" handle={()=>console.log("hello")}  />
                    <Button title="5" handle={()=>console.log("hello")}  />
                    <Button title="6" handle={()=>console.log("hello")}  />
                    <Button title="-" handle={()=>console.log("hello")}  />
             
                </Row>
                <Row>
                    <Button title="1" handle={()=>console.log("hello")}  />
                    <Button title="2" handle={()=>console.log("hello")}  />
                    <Button title="3" handle={()=>console.log("hello")}  />
                    <Button title="+" handle={()=>console.log("hello")}  />
             
                </Row>
                <Row>
                    <Button title="0" handle={()=>console.log("hello")}  />
                    <Button title="," handle={()=>console.log("hello")}  />
                    <Button size="big" title="&#61;" handle={()=>console.log("hello")}  />
                </Row>
            </TheCalculator>
};
export default Calculator;