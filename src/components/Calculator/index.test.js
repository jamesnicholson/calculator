import {mount, configure} from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Calculator from './index';
import { 
    ONE,
    TWO,
    PLUS,
    EQUALS,
} from '../../utils/enums';


configure({ adapter: new Adapter() })
describe('calculatorTest', () => {
    it('This will test the Calculator Component', () => {
        const testValues = [ONE, PLUS, TWO, EQUALS]
        const wrapper = mount(<Calculator />)
        for(let i = 0; i < testValues.length; i++){

                wrapper.find('Button').forEach((node) => {
                    
                   // console.log((node.text() === testValues[i]) +" - "+ node.text() )
                    if(node.props().id === testValues[i] ){
                        console.log(node.length)
                        console.log(node.simulate())
                        //node.find("div").onClick()
                      //  console.log(testValues[i])
                        if(testValues[i] === EQUALS){
                            console.log("JAMES")
                           // wrapper.update();
                            console.log(wrapper.find('Display').find("input").props())
                        }
                    }
                    
           

                })
            

        }
        setTimeout(()=> {
            console.log("mes")
     
            expect(wrapper.find('Display').find("input").prop('value')).toEqual("");
        },1000)
    
    });
    it('This will test the math', () => {
        const wrapper = mount(<Calculator />)
        console.log("James")
        setTimeout(()=> {
            console.log("Jamesa")
            console.log(wrapper.find('Display').state())
        },1000)
    
      //  expect(wrapper.find('Display').find("input").prop('value')).toEqual("4");
    });
});
