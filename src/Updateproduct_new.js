import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'

const UpdateProduct = () => {
    const [name, setName] = React.useState('');
    const [file, setFile] = React.useState('');
    const [company, setCompnay] = React.useState('');
    const [price, setPrice] = React.useState('');
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getProductDetails();
    }, [])

    const getProductDetails = async () => {
        console.warn(params)
        let result = await fetch(`http://localhost:8000/product/${params.id}`);
        result = await result.json();
        setName(result.name);
        setPrice(result.price);
        setFile(result.file);
        setCompnay(result.company)
    }

    const updateProduct = async () => {
        console.warn(name, price, file, company)
        let result = await fetch(`http://localhost:8000/product/${params.id}`, {
            method: 'Put',
            body: JSON.stringify({ name, price, file, company }),
            headers: {
                'Content-Type': 'Application/json'
            }
        });
        result = await result.json();
        if (result) {
            navigate('/')
        }

    }

    return (
        <div className='ol-sm-6 offset-sm-3'>
            <h1>Update Product</h1>
            <input type="text" placeholder='Enter product name' className='inputBox'
                value={name} onChange={(e) => { setName(e.target.value) }}
            />
            <br></br>
            <input type="text" placeholder='Enter product price' className='inputBox'
                value={price} onChange={(e) => { setPrice(e.target.value) }}
            />
            <br></br>
            <input type="text" placeholder='Enter product file' className='inputBox'
                value={file} onChange={(e) => { setFile(e.target.value) }}
            />
            <br></br>
            <input type="text" placeholder='Enter product company' className='inputBox'
                value={company} onChange={(e) => { setCompnay(e.target.value) }}
            />

            <br></br>
            <button onClick={updateProduct} className='btn btn-primary'>Update Product</button>
        </div>
    )
}

export default UpdateProduct;