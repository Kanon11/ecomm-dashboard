import React, { Component, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
function Addproduct() {
    const [name, setName] = useState("");
    const [file, setFile] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();
    function AddProduct() {
        const formData = new FormData();
        formData.append('name',name);
        formData.append('file', file);
        formData.append('description', description);
        formData.append('price', price);
        // console.log(formData);
        // for (var value of formData.values()) {
        //     console.log(value);
        // }

        (async () => {
            let result = await fetch("http://127.0.0.1:8000/api/addproduct", {
                method: 'POST',
                body: formData
            })
        })();
        alert("Data saved");
    }
    return (
        <>
            <Header></Header>
            <div className='col-sm-6 offset-sm-3'>
                <h1>Addproduct Page</h1>
                <input type="text" onChange={(e) => setName(e.target.value)} placeholder='product Name' className='form-control'></input>
                <br></br>
                <input type="file" onChange={(e) => setFile(e.target.files[0])} placeholder='product image' className='form-control'></input>
                <br></br>
                <input type="text" onChange={(e) => setDescription(e.target.value)} placeholder='product description' className='form-control'></input>
                <br></br>
                <input type="text" onChange={(e) => setPrice(e.target.value)} placeholder='product price' className='form-control'></input>
                <br></br>
                <button className='btn btn-primary' onClick={AddProduct}>Add Product</button>
            </div>
        </>
    );

}
export default Addproduct;