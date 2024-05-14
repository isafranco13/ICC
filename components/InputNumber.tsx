import {ChakraProvider} from "@chakra-ui/react";
import {
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
  } from '@chakra-ui/react'

const InputNumber = () => {
    return (
       <ChakraProvider>
        <NumberInput 
        value={value}
        onChange={onChange}
        defaultValue={0} 
        min={0} 
        max={15}
        keepWithinRange={true}
        clampValueOnBlur={true}
        size='md' 
        maxW={24}>
        <NumberInputField bg='white.100'/>
        <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
        </NumberInputStepper>
        </NumberInput>
        </ChakraProvider> 
    )

}
  export default InputNumber;