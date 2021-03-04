import { ThemeProvider } from 'styled-components'
import { style } from "../styles";
const ThemeContext = (props) => {

    return  <ThemeProvider value={style}>
                {props.children}
            </ThemeProvider>
}
export default ThemeContext;