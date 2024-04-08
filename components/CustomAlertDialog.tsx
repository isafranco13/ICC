import React, { useRef } from 'react';
import { ChakraProvider, Button, AlertDialog, AlertDialogBody, AlertDialogFooter, AlertDialogHeader, AlertDialogContent, AlertDialogOverlay } from '@chakra-ui/react';

interface CustomAlertDialogProps {
    isOpen: boolean;
    headerText: string;
    bodyText: string;
    cancelText: string;
    confirmText: string;
    colorScheme: string;
    onConfirm: () => void;
    onClose: () => void;
}

const CustomAlertDialog: React.FC<CustomAlertDialogProps> = ({ isOpen, headerText, bodyText, cancelText, confirmText, colorScheme, onConfirm, onClose }) => {
    const cancelRef = useRef<HTMLButtonElement>(null);

    return (
        <>
                <ChakraProvider>
                    <AlertDialog
                        isOpen={isOpen}
                        leastDestructiveRef={cancelRef}
                        onClose={onClose}
                        isCentered
                    >
                        <AlertDialogOverlay>
                            <AlertDialogContent>
                            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                                {headerText}
                            </AlertDialogHeader>
                            <AlertDialogBody>
                                {bodyText}
                            </AlertDialogBody>
                            <AlertDialogFooter>
                                <Button ref={cancelRef} onClick={onClose}>
                                {cancelText}
                                </Button>
                                <Button colorScheme={colorScheme} onClick={onConfirm} ml={3}>
                                {confirmText}
                                </Button>
                            </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialogOverlay>
                    </AlertDialog>
                </ChakraProvider>
        </>
    );
};

export default CustomAlertDialog;
