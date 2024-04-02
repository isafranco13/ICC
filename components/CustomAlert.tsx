import React, { useState } from 'react';
import { ChakraProvider, Alert, AlertIcon, AlertTitle, AlertDescription, Box, CloseButton } from '@chakra-ui/react';

interface CustomAlertProps {
    status: "error" | "success" | "warning" | "info";
    variant?: "subtle" | "solid" | "left-accent" | "top-accent";
    title: string;
    description: string;
}

const CustomAlert: React.FC<CustomAlertProps> = ({ status, variant, title, description }) => {
    const [isVisible, setIsVisible] = useState(true); // Estado para controlar la visibilidad de la alerta

    // Función para cerrar la alerta
    const handleClose = () => {
        setIsVisible(false);
    };

    return (
        <>
            {isVisible && (
                <ChakraProvider>
                    <Alert status={status} variant={variant} flexDirection='row' textAlign='left' marginTop={4}>
                        <AlertIcon />
                        <Box>
                            <AlertTitle mt={0} mb={1} fontSize='large' fontWeight='bold'>
                                {title}
                            </AlertTitle>
                            <AlertDescription maxWidth='100%' fontSize='medium'>
                                {description}
                            </AlertDescription>
                        </Box>
                        <CloseButton
                            alignSelf='flex-start'
                            position='absolute'
                            right={1}
                            top={1}
                            onClick={handleClose} // Llama a la función handleClose cuando se hace clic en el botón de cerrar
                        />
                    </Alert>
                </ChakraProvider>
            )}
        </>
    );
};

export default CustomAlert;
