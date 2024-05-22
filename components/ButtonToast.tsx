import { useToast } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react';

function ToastExample() {
    const toast = useToast()
    return (
      <Button
        onClick={() =>
          toast({
            position: 'top',
            title: 'Historial Clinico Registrado',
            description: "Regrese a la pagina principal o actualice sus datos",
            status: 'success',
            duration: 4000,
            isClosable: true,
          })
        }
      >
        Guardar
      </Button>
    )
  }
  export default ToastExample;