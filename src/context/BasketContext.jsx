import { createContext, useState } from 'react';

export const BASKET = createContext()

function BasketContext({ children }) {
    const initialBasket = JSON.parse(localStorage.getItem('basket')) || []
    const [basketArr, setBasketArr] = useState(initialBasket)

    function addToBasket(item) {
        const index = basketArr.findIndex(elem => elem.id === item.id)
        if (index != -1) {
            basketArr[index].count += item.count
            setBasketArr([...basketArr])
        } else { setBasketArr([...basketArr, item]) }
        localStorage.setItem('basket', JSON.stringify(basketArr))
    }
    function clearBasket(){
        localStorage.removeItem('basket')
        setBasketArr([])
    }
    function removeFromBasket(id){
        const newArr = basketArr.filter(item => item.id != id)
        setBasketArr(newArr)
        localStorage.setItem('basket', JSON.stringify(newArr))
    }

    return (
        <>
            <BASKET.Provider value={{ addToBasket, basketArr, removeFromBasket, clearBasket }}>
                {children}
            </BASKET.Provider>
        </>
    )
}

export default BasketContext