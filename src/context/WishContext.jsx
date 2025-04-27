import { createContext, useState } from "react";

export const WISHLIST = createContext([])


function WishContext({ children }) {
    const inithal = JSON.parse(localStorage.getItem('WishList')) || []
    const [wish, setWish] = useState(inithal)

    function addWishList(item) {
        setWish([...wish, item])
        localStorage.setItem('WishList', JSON.stringify([...wish, item]))
    }
    function clearWishList() {
        localStorage.removeItem('WishList')
        setWish([])
    }
    function delWishList(id){
        const yeniArr = wish.filter(item=> item.id != id)
        setWish(yeniArr)
        localStorage.setItem('WishList', JSON.stringify(yeniArr))
    }

    return (
        <>
            <WISHLIST.Provider value={{ wish, setWish, addWishList, clearWishList, delWishList }}>
                {children}
            </WISHLIST.Provider>
        </>
    )
}

export default WishContext