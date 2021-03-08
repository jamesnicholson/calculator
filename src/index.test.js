import {mount, configure} from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from '../src/components/App';
import GlobalProvider from '../src/context';
import { 
    ONE,
    TWO,
    PLUS,
    EQUALS,
} from './utils/enums';

configure({ adapter: new Adapter() })
describe('Calculator App Tests', () => {
    it('The app renders correctly', () => {
        mount(<GlobalProvider><App /></GlobalProvider>)
    })
    it('This will test the Calculator Component', () => {
        const wrapper = mount(<GlobalProvider><App /></GlobalProvider>)
        const testValues = [ONE, PLUS, TWO, EQUALS]
        for(let i = 0; i < testValues.length; i++) {
            wrapper.find('Button').forEach((node) => {  
                if(node.props().id === testValues[i] ){
                    node.simulate('click');
                    wrapper.update();
                    wrapper.debug();
                }
            })
        }
    })
})
/*
describe('AppTest', () => {
    it('This will test the Calculator Component', () => {
        const testValues = [ONE, PLUS, TWO, EQUALS]
        const wrapper = mount(<GlobalProvider><App /></GlobalProvider>)
        const component = wrapper.instance()
       console.log(wrapper);
        for(let i = 0; i < testValues.length; i++){
                wrapper.find('Button').forEach((node) => {  
                       
                    if(node.props().id === testValues[i] ){
                       // console.log((node.text() === testValues[i]) +"  "+ node.text() )
                        if(testValues[i] === EQUALS){
                            console.log("EXECUTE IT")
                           // wrapper.update();
                            node.prop("onClick");
                            wrapper.update();
                            wrapper.debug();
                          //  console.log(wrapper.state('computation'))   
                            console.log(wrapper.find('GlobalProvider').state('computation')) 
              
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
        const wrapper = mount(<App />)
    //    console.log("James")
        setTimeout(()=> {
          //  console.log("Jamesa")
         //   console.log(wrapper.find('Display').state())
        },1000)
    
      //  expect(wrapper.find('Display').find("input").prop('value')).toEqual("4");
    });
});
*/