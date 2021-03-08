import { useInput } from '../../hooks'
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
    return  <DisplayContainer>
                <DisplayRow>{input}</DisplayRow>
            </DisplayContainer>
}
export default Display