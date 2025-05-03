import { axiosInstance } from "./instance"
async function getSlider() {
    const res = await  axiosInstance.get('/slider')
    return res.data
}

async function getAllCategory() {
    const res = await  axiosInstance.get('/categories')
    return res.data
}

async function getProdByPopular() {
    const res = await  axiosInstance.get('/products/populyar')
    return res.data
}

async function getProdByDiscounted() {
    const res = await  axiosInstance.get('/products/discounted')
    return res.data
}

async function getProductsById(id) {
    const res = await  axiosInstance.get(`/products/${id}`)
    return res.data
}

async function getAllProducts() {
    const res = await  axiosInstance.get('/products')
    return res.data
}

async function getProductsBySubID(id, limit, page) {
    const res = await  axiosInstance.get(`/products/subcategory/${id}?limit=${limit}&page=${page}`)
    return res.data
}
async function getProductsBySearch(name) {
    const res = await  axiosInstance.get(`/products/search?name=${name}`)
    return res.data
}
async function getProdByCategory(id) {
    const res = await  axiosInstance.get('/products/category/' + id)
    return res.data
}

export {
    getSlider, getAllCategory, getProductsBySubID,
    getProdByPopular, getProdByDiscounted,
    getAllProducts, getProdByCategory,
    getProductsBySearch, getProductsById
}