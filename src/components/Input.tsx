
import { Input as TextInput, IInputProps} from 'native-base'; //MUDA O APELIDO PARA NAO CONFUNDIR COM O INPUT DE BAIXO

  export function Input({...rest}: IInputProps) {
  return (
    <TextInput 
    bg="gray.700"
    h={14}
    size="md"
    borderWidth={0}
    fontFamily="body"
    color="white"
    placeholderTextColor="gray.300"
    _focus={{
      borderWidth:1,
      borderColor: "green.500",
      bg: "gray.700"

    }
     
    }
   
    {...rest}
 
    />
    
  );
}