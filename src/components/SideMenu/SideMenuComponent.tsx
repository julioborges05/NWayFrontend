import { Box, Button, Heading, Stack, Center, ButtonGroup, CheckboxGroup, Checkbox } from "@chakra-ui/react";

export function SideMenuComponent() {
    return (
        <Box p='6' borderWidth='1px' borderRadius='lg' maxW='sm'>
            <Heading fontSize='md' width='300px'>
                Faixa de preço:
            </Heading>
            <ButtonGroup p='6'>
                <Stack>
                    <Checkbox size='sm' color='gray.700'>
                        Até R$50,00
                    </Checkbox>
                    <Checkbox size='sm' color='gray.700'>
                        De R$50,00 Até R$100,00
                    </Checkbox>
                    <Checkbox size='sm' color='gray.700'>
                        De R$100,00 Até R$150,00
                    </Checkbox>
                    <Checkbox size='sm' color='gray.700'>
                        De R$150,00 Até R$200,00
                    </Checkbox>
                    <Checkbox size='sm' color='gray.700'>
                        Mais de R$200,00
                    </Checkbox>
                </Stack>
            </ButtonGroup>

            <Heading fontSize='md' width='300px'>
                Tamanho disponivel:
            </Heading>
            <ButtonGroup p='6'>
                <Stack>
                    <CheckboxGroup>
                        <Checkbox size='sm' color='gray.700'>
                            Tamanho P
                        </Checkbox>
                        <Checkbox size='sm' color='gray.700'>
                            Tamanho M
                        </Checkbox>
                        <Checkbox size='sm' color='gray.700'>
                            Tamanho G
                        </Checkbox>
                        <Checkbox size='sm' color='gray.700'>
                            Tamanho GG
                        </Checkbox>
                    </CheckboxGroup>

                </Stack>
            </ButtonGroup>
        </Box>
    )
}