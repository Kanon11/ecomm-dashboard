import React, { useEffect,useState } from 'react';
import Header from './Header';
import  withRouter  from './myfun';
function Updateproduct(props) {
    const [data, setData] = useState([]);
    const [name, setName] = useState("");
    const [file, setFile] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    
    useEffect(async() => {
        let response = await fetch('http://127.0.0.1:8000/api/getproduct/' + props.router.params.id);
        response = await response.json()
        setData(response)
        setName(response.name);
        setPrice(response.price);
        setFile(response.file_path);
        setDescription(response.description)
    }, [])
    function editProduct(id) {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('file', file);
        formData.append('description', description);
        formData.append('price', price);
        (async () => {
            let result = await fetch("http://127.0.0.1:8000/api/updateproduct/"+id+"?_method=PUT", {
                method: 'POST',
                body: formData
            })
        })();
        alert("Data updated");
    }

    return (
        <>
            <Header></Header>
            <div className='col-sm-6 offset-sm-3'>
                <h1>Update product Page</h1>
                <input type="text" onChange={(e) => setName(e.target.value)} defaultValue={data.name} className='form-control'></input>
                <br></br>
                <input type="file" onChange={(e) => setFile(e.target.files[0])} defaultValue={data.file_path} className='form-control'></input>
                <img src={'http://127.0.0.1:8000/' + data.file_path} style={{ width: 100, height: 100 }}></img>
                <br></br>
                <input type="text" onChange={(e) => setDescription(e.target.value)} defaultValue={data.description} className='form-control'></input>
                <br></br>
                <input type="text" onChange={(e) => setPrice(e.target.value)} defaultValue={data.price} placeholder='product price' className='form-control'></input>
                <br></br>
                <button className='btn btn-primary' onClick={()=>editProduct(data.id)}>Update Product</button>
            </div>
        </>
    );
    
}
export default withRouter(Updateproduct);