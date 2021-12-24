import {
    Input,
    InputGroup,
    InputLeftElement
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

export function SearchComponent() {
    return (
        <InputGroup>
            <InputLeftElement
                pointerEvents='none'
                children={<SearchIcon color='gray.300' />}
            />
            <Input type='text' placeholder='Pesquisar' />
        </InputGroup>
    )
}