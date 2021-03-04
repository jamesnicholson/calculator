import { useEffect} from "react";
import styled from 'styled-components'
import Button from '../Button';
import { useInput } from '../../hooks'
import { calculator, buttonRow } from '../../styles'

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

const Calculator = () => {
    const [value, input] = useInput();
    useEffect(() => {
        console.log(value);
      },[value])
      
    return  <TheCalculator>
                <Row> {input} </Row>
                <Row>
                    <Button title={CLEAR} />
                    <Button title={PLUSMINUS} />
                    <Button title={PERCENTAGE} />
                    <Button title={DIVIDE} />
                </Row>
                <Row>
                    <Button title={SEVEN} />
                    <Button title={EIGHT} />
                    <Button title={NINE} />
                    <Button title={MULTIPLY} />
                </Row>
                <Row>
                    <Button title={FOUR} />
                    <Button title={FIVE} />
                    <Button title={SIX} />
                    <Button title={SUBTRACT} />
                </Row>
                <Row>
                    <Button title={ONE} />
                    <Button title={TWO} />
                    <Button title={THREE} />
                    <Button title={ADD} />
             
                </Row>
                <Row>
                    <Button title={ZERO} />
                    <Button title={COMMA} />
                    <Button title={EQUALS} size="big" />
                </Row>
            </TheCalculator>
};
export default Calculator;