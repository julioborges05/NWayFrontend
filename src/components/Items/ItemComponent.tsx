import { Box, Image, Badge, Button, Grid, GridItem } from '@chakra-ui/react';
import { faShoppingCart, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Item = {
    imageUrl: string;
    imageAlt?: string;
    itemTitle: string;
    itemPrice: string;
    itemStock: number;
}

export function ItemComponent(props: Item) {
    return (
        <Box>
            <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                <Image src={props.imageUrl} alt={props.imageAlt} />
                <Box p='6'>
                    <Box display='flex' alignItems='baseline'>
                        <Badge borderRadius='full' px='2' colorScheme='teal'>
                            New
                        </Badge>
                        <Box
                            color='gray.500'
                            fontWeight='semibold'
                            letterSpacing='wide'
                            fontSize='xs'
                            textTransform='uppercase'
                            ml='2'
                        >
                            {props.itemStock} Em estoque
                        </Box>
                    </Box>
                    <Box
                        mt='1'
                        fontWeight='semibold'
                        as='h4'
                        lineHeight='tight'
                        isTruncated
                    >
                        {props.itemTitle}
                    </Box>

                    <Box>
                        {props.itemPrice}
                        <Box as='span' color='gray.600' fontSize='sm'>
                        </Box>
                    </Box>

                    <Grid templateColumns='repeat(3, 1fr)' gap={4}>
                        <GridItem colStart={2}>
                            <Button
                                rightIcon={<FontAwesomeIcon icon={faShoppingCart} />}
                                colorScheme='blackAlpha'
                                variant='outline'
                                width='100%'
                            >
                                Adicionar
                            </Button>
                        </GridItem>
                        <GridItem>
                            <Button
                                rightIcon={<FontAwesomeIcon icon={faShoppingBag} />}
                                colorScheme='red'
                                variant='outline'
                                width='100%'
                            >
                                Comprar
                            </Button>
                        </GridItem>
                    </Grid>
                </Box>
            </Box>
        </Box>
    )
}