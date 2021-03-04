import Button from '../Button';
const Calculator = () => {
 
    return  <>
                <Button size="small" title="3" handle={()=>console.log("hello")}  />
                <Button title="2" />
                <Button  handle={()=>console.log("hello Calculator")}  />
            </>
        
};
export default Calculator;