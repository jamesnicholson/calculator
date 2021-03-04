
import { css } from 'styled-components'

const style = {
  primaryColor: 'black',
  secondaryColor: 'white',
  borderColor: '#5d5d5d60',
  backgroundColor: 'aliceblue',
  smallFontSize: '0.8em',
  normalFontSize: '1em',
  largeFontSize: '1.5em',
  extraLargeFontSize: '2em',
  massiveFontSize: '4em',
};

export const title = css`
  font-size: ${style.massiveFontSize};
  color: ${style.primaryColor};
  text-shadow: 1px 1px ${style.secondaryColor};
  padding: 10px;
  max-width:600px;
  margin: 10px auto;
`
export const button = css`
  font-size: ${style.normalFontSize};
  padding: 10px;
  background: ${style.secondaryColor};
`

export default style