
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
  display: flex;
  font-size: ${style.normalFontSize};
  padding: 10px;
  margin:1px;
  background: ${style.secondaryColor};
  align-items: center;
  min-width: ${props =>(props.size === "big" ? `7em` : `3em`)};
  min-height: 3em;
  justify-content: center;
  border: 1px solid #8bc34a5c;

`
export const calculator = css`
  display: flex;
  flex-direction: column;
  font-size: ${style.normalFontSize};
  padding: 10px;
  background: ${style.backgroundColor};
  align-items: center;
  justify-content: center;
`
export const buttonRow = css`
  display: flex;
  flex-direction: row;
  font-size: ${style.largeFontSize};
  background: ${style.backgroundColor};
`
export default style