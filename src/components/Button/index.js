import styled from 'styled-components';
import { button } from '../../styles'

const ButtonCard = styled.div`
  ${button}
`
function Button(props) {
  const handler = () =>{
    if(props.handle){
      props.handle();
    }
  }
  
  return  <ButtonCard onClick={()=>handler()}>
          {props.title ? props.title : "1" }
          </ButtonCard>
}

export default Button;
