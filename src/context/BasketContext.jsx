import { createContext, useState } from 'react';

export const BASKET = createContext()

function BasketContext({children}) {
    const [basketArr, setBasketArr] = useState([])

    function addToBasket(item) {
        setBasketArr(prev => {
            const existing = prev.find(i => i.id === item.id);
            if (existing) {
                return prev.map(i =>
                    i.id === item.id ? { ...i, quantity: (i.quantity || 1) + 1 } : i
                );
            }
            return [...prev, { ...item, quantity: 1 }];
        });
    }    

    return (
        <>
            <BASKET.Provider value={{addToBasket, basketArr}}>
                {children}
            </BASKET.Provider>
        </>
    )
}

export default BasketContext