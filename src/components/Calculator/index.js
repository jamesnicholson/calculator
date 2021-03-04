import styled from 'styled-components'
import Button from '../Button';
import { calculator, buttonRow, output } from '../../styles'
import { 
    ZERO,
    ONE,
    TWO,
    THREE,
    FOUR,
    FIVE,
    SIX,
    SEVEN,
    EIGHT,
    NINE,
    CLEAR,
    COMMA,
    PLUSMINUS,
    PERCENTAGE,
    DIVIDE,
    MULTIPLY,
    SUBTRACT,
    ADD,
    EQUALS,
    
     } from '../../utils/enums';

const TheCalculator = styled.div`
  ${calculator}
`
const Row = styled.div`
  ${buttonRow}
`
const Output = styled.input`
  ${output}
  `
const Calculator = () => {
    
    return  <TheCalculator>
                <Row>
                    <Output type="text" />
                </Row>
                <Row>
                    <Button title={CLEAR}  handle={()=>console.log("hello")} />
                    <Button title={PLUSMINUS} handle={()=>console.log("hello")}  />
                    <Button title={PERCENTAGE} handle={()=>console.log("hello")}  />
                    <Button title={DIVIDE} handle={()=>console.log("hello")}  />
                </Row>
                <Row>
                    <Button title={SEVEN} handle={()=>console.log("hello")}  />
                    <Button  title={EIGHT} handle={()=>console.log("hello")}  />
                    <Button title={NINE} handle={()=>console.log("hello")}  />
                    <Button title={MULTIPLY} handle={()=>console.log("hello")}  />
                </Row>
                <Row>
                    <Button title={FOUR} handle={()=>console.log("hello")}  />
                    <Button title={FIVE} handle={()=>console.log("hello")}  />
                    <Button title={SIX} handle={()=>console.log("hello")}  />
                    <Button title={SUBTRACT} handle={()=>console.log("hello")}  />
                </Row>
                <Row>
                    <Button title={ONE} handle={()=>console.log("hello")}  />
                    <Button title={TWO} handle={()=>console.log("hello")}  />
                    <Button title={THREE} handle={()=>console.log("hello")}  />
                    <Button title={ADD} handle={()=>console.log("hello")}  />
             
                </Row>
                <Row>
                    <Button title={ZERO} handle={()=>console.log("hello")}  />
                    <Button title={COMMA} handle={()=>console.log("hello")}  />
                    <Button 
                        title={EQUALS}
                        size="big"
                        handle={()=>console.log("hello")}
                    />
                </Row>
            </TheCalculator>
};
export default Calculator;