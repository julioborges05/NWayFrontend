import { Menu, MenuButton, MenuList, Grid, GridItem, Input, InputGroup, Box, Button } from '@chakra-ui/react';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function UserComponent() {
    return (
        <Menu isLazy>
            <MenuButton>
                <FontAwesomeIcon icon={faUser} />
            </MenuButton>
            <MenuList color='gray.600' p='4'>
                <Grid
                    templateRows='repeat(3, 1fr)'
                    templateColumns='repeat(2, 1fr)'
                    gap={3}
                >
                    <GridItem colSpan={2} rowSpan={1}>
                        <InputGroup size='md'>
                            <Input
                                pr='4.5rem'
                                type={'email'}
                                placeholder='Enter email'
                            />
                        </InputGroup>
                    </GridItem>
                    <GridItem colSpan={2} rowSpan={1}>
                        <InputGroup size='md'>
                            <Input
                                pr='4.5rem'
                                type={'password'}
                                placeholder='Enter password'
                            />
                        </InputGroup>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <Box>
                            <Button verticalAlign="middle" colorScheme='blackAlpha' variant='link'>
                                Esqueci a senha
                            </Button>
                        </Box>
                    </GridItem>
                    <GridItem colStart={2}>
                        <Box>
                            <Button width='100%' colorScheme='blackAlpha'>Entrar</Button>
                        </Box>
                    </GridItem>
                </Grid>
            </MenuList>
        </Menu>
    )
}