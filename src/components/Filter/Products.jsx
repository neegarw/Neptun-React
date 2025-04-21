import React, { useEffect, useState } from 'react'
import ProductsDetail from './ProductsDetail';
import { getAllProducts } from '../../services/api';
// import { useParams } from 'react-router-dom';


function Products() {
    const [data, setData] = useState([])
    // const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const meh = await getAllProducts();
                console.log("Gələn data:", meh);
                setData(meh.products);
            } catch (error) {
                console.error("Data çəkməkdə xəta:", error);
            }
        }
    
        fetchData();
    }, []);
    
    return (
        <div>{
            data.map(item => <ProductsDetail {...item } />)
        }</div>
    )
}

export default Products