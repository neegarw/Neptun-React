import React, { useEffect, useState } from 'react'
import ProductsDetail from './ProductsDetail';
import { getProdByCategory } from '../../services/api';
import { useParams } from 'react-router-dom';


function Products() {
    const [data, setData] = useState([])
    const { id } = useParams();
    
    useEffect(() => {
        getProdByCategory(id).then(meh => setData(meh.products))
    }, [id]);
    
    return (
        <div>{
            data.map(item => <ProductsDetail {...item.products } />)
        }</div>
    )
}

export default Products