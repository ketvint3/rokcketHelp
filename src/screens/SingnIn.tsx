import{useState} from 'react'
import {VStack, Heading, Icon} from 'native-base'
import{Envelope, Key} from 'phosphor-react-native'

import Logo from '../assets/logo_primary.svg';

import{Input} from '../components/Input'
import { Button } from '../components/Button';


 export function SingIn() {
    const[name,setName] = useState('ketket');
    const[password, setPassword] = useState('')

    function handleSignIn(){
        console.log(name, password)
    }
    
    
    
    return(
        <VStack flex={1} alignItems ="center" bg="gray.600" px={8} pt={24}>
            <Logo/>
            <Heading color="gray.100" fontSize="xl" mt={20} mb={6}>
                Acesse sua conta 

            </Heading>

            
            <Input
            
            mb={14}
            placeholder="E-mail"
            InputLeftElement={<Icon as ={ <Envelope/> } ml={4} />}
            onChangeText={setName}
            
            />
          
            <Input
            mb={8}
             placeholder="Senha"
            InputLeftElement={<Icon as ={<Key/>}  ml={4}/>}
            secureTextEntry
            onChangeText={setPassword}
            
            />

          
            <Button title='Entrar' w={'full'} onPress={handleSignIn}/>


        </VStack>
       
    )
}
