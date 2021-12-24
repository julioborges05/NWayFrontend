import { Fragment } from "react";
import { ItemComponent } from "./ItemComponent";
import { Wrap } from '@chakra-ui/react';

export function ItemsComponent() {
    return (
        <Fragment>
                <Wrap spacing='30px' justify='center' p ='6'>
                    <ItemComponent
                        imageUrl="https://bit.ly/2Z4KKcF"
                        imageAlt="aaaa"
                        itemTitle="Aqui fica o titulo da camisa"
                        itemPrice="R$50,00"
                        itemStock={50}
                    />
                    <ItemComponent
                        imageUrl="https://bit.ly/2Z4KKcF"
                        imageAlt="aaaa"
                        itemTitle="Aqui fica o titulo da camisa"
                        itemPrice="R$50,00"
                        itemStock={50}
                    />
                    <ItemComponent
                        imageUrl="https://bit.ly/2Z4KKcF"
                        imageAlt="aaaa"
                        itemTitle="Aqui fica o titulo da camisa"
                        itemPrice="R$50,00"
                        itemStock={50}
                    />

                    <ItemComponent
                        imageUrl="https://bit.ly/2Z4KKcF"
                        imageAlt="aaaa"
                        itemTitle="Aqui fica o titulo da camisa"
                        itemPrice="R$50,00"
                        itemStock={50}
                    />

                    <ItemComponent
                        imageUrl="https://bit.ly/2Z4KKcF"
                        imageAlt="aaaa"
                        itemTitle="Aqui fica o titulo da camisa"
                        itemPrice="R$50,00"
                        itemStock={50}
                    />

                    <ItemComponent
                        imageUrl="https://bit.ly/2Z4KKcF"
                        imageAlt="aaaa"
                        itemTitle="Aqui fica o titulo da camisa"
                        itemPrice="R$50,00"
                        itemStock={50}
                    />

                    <ItemComponent
                        imageUrl="https://bit.ly/2Z4KKcF"
                        imageAlt="aaaa"
                        itemTitle="Aqui fica o titulo da camisa"
                        itemPrice="R$50,00"
                        itemStock={50}
                    />
                    </Wrap>
        </Fragment>
    )
}