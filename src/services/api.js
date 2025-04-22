import axios from "axios";

async function getSlider() {
    const res = await axios.get('https://neptunbk.vercel.app/slider')
    return res.data
}

async function getAllCategory() {
    const res = await axios.get('https://neptunbk.vercel.app/categories')
    return res.data
}

async function getProdByPopular() {
    const res = await axios.get('https://neptunbk.vercel.app/products/populyar')
    return res.data
}

async function getProdByDiscounted() {
    const res = await axios.get('https://neptunbk.vercel.app/products/discounted')
    return res.data
}

async function getProductsById(id) {
    const res = await axios.get(`https://neptunbk.vercel.app/products/${id}`)
    return res.data
}

async function getAllProducts() {
    const res = await axios.get('https://neptunbk.vercel.app/products')
    return res.data
}

async function getProductsBySubID(id, limit, page) {
    const res = await axios.get(`https://neptunbk.vercel.app/products/subcategory/${id}?limit=${limit}&page=${page}`)
    return res.data
}
async function getProductsBySearch(name) {
    const res = await axios.get(`https://neptunbk.vercel.app/products/search?name=${name}`)
    return res.data
}
async function getProdByCategory(id) {
    const res = await axios.get('https://neptunbk.vercel.app/products/category/' + id)
    return res.data
}

export {
    getSlider, getAllCategory, getProductsBySubID,
    getProdByPopular, getProdByDiscounted,
    getAllProducts, getProdByCategory,
    getProductsBySearch, getProductsById
}