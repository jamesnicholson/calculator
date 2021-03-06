
import { css } from 'styled-components'

const style = {
  primaryColor: 'black',
  secondaryColor: 'white',
  borderColor: '#5d5d5d60',
  backgroundColor: '#607d8b',
  smallFontSize: '0.6em',
  normalFontSize: '1em',
  largeFontSize: '1.5em',
  extraLargeFontSize: '2em',
  massiveFontSize: '4em',
  buttonColor: '#e6e6e7',
  buttonHoverBackground: '#aaaaab',
  digitButtonBackground:'#595c64',
};

export const title = css`
  font-size: ${style.massiveFontSize};
  color: ${style.primaryColor};
  text-shadow: 1px 1px ${style.secondaryColor};
  padding: 10px;
  max-width:600px;
  margin: 10px auto;
  text-align:center;
`
export const button = css`
  display: flex;
  font-size: ${style.normalFontSize};
  color:${style.buttonColor};
  padding: 10px;
  margin:1px;
  background: ${style.digitButtonBackground};
  align-items: center;
  min-width: ${props =>(props.size === "big" ? `7em` : `3em`)};
  min-height: 3em;
  justify-content: center;
  border: 1px solid #8bc34a5c;
  &:hover {
    background:${style.buttonHoverBackground};
  }
`
export const displayInput = css`
  font-size:${style.extraLargeFontSize};
  text-align: center;
  padding: 10px;
  width: 95%;
  border: white;
  margin-bottom: 5px;
  transition: margin .8s ease;
`
export const displayEquation = css`
  width: 100%;
  font-size:${style.smallFontSize};
  padding: 4px;
`
export const displayRow = css`
  width: 100%;
  min-height: 26px;
`
export const displayContainer = css`
  width: 100%;
  display:flex;
  flex-direction: column;
`
export const calculator = css`
  display: flex;
  flex-direction: column;
  font-size: ${style.normalFontSize};
  padding: 10px;
  background: ${style.backgroundColor};
  align-items: center;
  justify-content: center;
  max-width: 385px;
  margin: 0 auto;
`
export const buttonRow = css`
  display: flex;
  flex-direction: row;
  width:100%;
  font-size: ${style.largeFontSize};
  background: ${style.backgroundColor};
`
export default style