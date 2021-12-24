import { ItemsComponent } from "../Items/ItemsComponent";
import { SideMenuComponent } from "../SideMenu/SideMenuComponent";
import { Flex } from '@chakra-ui/react';

export function ContentComponent() {
    return (
        <Flex>
            <SideMenuComponent />
            <ItemsComponent />
        </Flex>
    )
}