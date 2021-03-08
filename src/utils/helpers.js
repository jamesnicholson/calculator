import { 
    COMMA,
    PLUS,
    MINUS,
    MULTIPLY,
    DIVIDE,
  } from '../utils/enums'

export function mathOperators(operator){
    switch(operator){
      case PLUS:
        return "+";
      case MINUS:
        return "-";
      case MULTIPLY:
        return "*";
      case DIVIDE:
        return "/";
      case COMMA:
        return ".";
      default : 
        return operator;
    }
  }
