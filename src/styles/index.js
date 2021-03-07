
import { css } from 'styled-components'

const style = {
  primaryColor: 'black',
  secondaryColor: 'white',
  borderColor: '#5d5d5d60',
  backgroundColor: '#607d8b',
  smallFontSize: '0.6em',
  normalFontSize: '1em',
  largeFontSize: '1.5em',
  midlargeFontSize: '2.1em',
  extraLargeFontSize: '2.6em',
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
  @media (max-width: 600px) {
    font-size: ${style.extraLargeFontSize};
  }
  @media (max-width: 330px) {
    font-size: ${style.midlargeFontSize};
  }
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
  @media (max-width: 600px) {
    flex-direction: column;
    min-width: ${props =>(props.size === "big" ? `5em` : `2em`)};
    min-height: 2em;
  }
  @media (max-width: 300px) {
    flex-direction: column;
    min-width: ${props =>(props.size === "big" ? `4.6em` : `1.8em`)};
    min-height: 1.8em;
  }
`
export const displayInput = css`
  font-size:${style.extraLargeFontSize};
  text-align: center;
  padding: 10px;
  width: 95%;
  border: white;
  margin-bottom: 5px;
  @media (max-width: 600px) {
    width: 93%;
  }
  @media (max-width: 300px) {
    font-size:${style.largeFontSize};
  }
`
export const displayEquation = css`
  width: 100%;
  font-size:${style.smallFontSize};
  font-size: 0.55em;
  padding: 5px;
  color: aliceblue;
  text-shadow: 1px 1px #0000007a;
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
  margin: 20px auto;
  @media (max-width: 600px) {
    max-width: 290px;
  }
`
export const buttonRow = css`
  display: flex;
  flex-direction: row;
  width:100%;
  font-size: ${style.largeFontSize};
  background: ${style.backgroundColor};
`
export default style