import { useInput, useDisplay } from '../../hooks'
import styled from 'styled-components'
import { displayRow, displayContainer } from '../../styles'

const DisplayRow = styled.div`
    ${displayRow}
`
const DisplayContainer = styled.div`
    ${displayContainer}
`

const Display = () => {
    const [input] = useInput();
    const [display] = useDisplay();

    return  <DisplayContainer>
                <DisplayRow>{input}</DisplayRow>
                <DisplayRow>{display}</DisplayRow>
            </DisplayContainer>
}
export default Display