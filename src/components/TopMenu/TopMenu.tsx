import { Box, HStack } from '@chakra-ui/react';
import { TopMenuItemsComponent } from './TopMenuItemsComponent';
import { SearchComponent } from './SearchComponent';
import { UserComponent  } from './UserComponent';
import { CartComponent } from './CartComponent';

export function TopMenu() {
    return (
        <Box className='n-way-header' bgColor='red.900' color='white'>
            <HStack spacing='24px'>
                <h1>NWay</h1>

                <TopMenuItemsComponent />
                <SearchComponent />
                <UserComponent />
                <CartComponent />

            </HStack>
        </Box>
    )
}