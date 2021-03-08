import styled from 'styled-components'
import Display from '../Display';
import Button from '../Button';
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
    MINUS,
    PLUS,
    EQUALS,
} from '../../utils/enums';

const TheCalculator = styled.div`
  ${calculator}
`
const Row = styled.div`
  ${buttonRow}
`

const Calculator = () => {

    return  <TheCalculator>
                <Row><Display /></Row>
                <Row>
                    <Button id={CLEAR} />
                    <Button id={PLUSMINUS}/>
                    <Button id={PERCENTAGE} />
                    <Button id={DIVIDE}/>
                </Row>
                <Row>
                    <Button id={SEVEN}/>
                    <Button id={EIGHT}/>
                    <Button id={NINE}/>
                    <Button id={MULTIPLY}/>
                </Row>
                <Row>
                    <Button id={FOUR}/>
                    <Button id={FIVE}/>
                    <Button id={SIX}/>
                    <Button id={MINUS}/>
                </Row>
                <Row>
                    <Button id={ONE} />
                    <Button id={TWO} />
                    <Button id={THREE} />
                    <Button id={PLUS} />
                </Row>
                <Row>
                    <Button id={ZERO} />
                    <Button id={COMMA} />
                    <Button id={EQUALS} size="big" />
                </Row>
            </TheCalculator>
};
export default Calculator;