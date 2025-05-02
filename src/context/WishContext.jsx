import { createContext, useState } from "react";

export const WISHLIST = createContext([])


function WishContext({ children }) {
    let inithal = [];
    try {
        const stored = localStorage.getItem('WishList');
        inithal = stored ? JSON.parse(stored) : [];
    } catch (error) {
        console.error("WishList parsing error:", error);
        inithal = [];
    }
    const [wish, setWish] = useState(inithal)

    function addWishList(item) {
        setWish([...wish, item])
        localStorage.setItem('WishList', JSON.stringify([...wish, item]))
    }
    function clearWishList() {
        localStorage.removeItem('WishList')
        setWish([])
    }
    function delWishList(id) {
        const yeniArr = wish.filter(item => item.id != id)
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