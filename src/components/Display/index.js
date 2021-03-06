import { useInput, useDisplay } from '../../hooks'
const Display = () => {
    const [input] = useInput();
    const [display] = useDisplay();
    return  <>
                {input}
                {display}
            </>
}
export default Display