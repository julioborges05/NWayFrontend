import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function CartComponent() {
    return (
        <Menu isLazy>
            <MenuButton>
                <FontAwesomeIcon icon={faShoppingCart} />
            </MenuButton>
            <MenuList color='gray.600'>
                <MenuItem>New Window</MenuItem>
                <MenuItem>Open Closed Tab</MenuItem>
                <MenuItem>Open File</MenuItem>
            </MenuList>
        </Menu>
    )
}