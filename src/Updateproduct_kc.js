import React, { useEffect,useState } from 'react';
import Header from './Header';
import  withRouter  from './myfun';
// import { useNavigate }  from 'react-router-dom';
// const Updateproduct = (props) => {
//     console.warn("kk",props);
function Updateproduct(props) {
    const [data, setData] = useState([]);
    console.warn("id", props);
    useEffect(async() => {
        let response = await fetch('http://127.0.0.1:8000/api/getproduct/'+1);
        response = await response.json()
        setData(response)
    },[])

    // function EditProduct(id) {
    //     alert(id);
    //     // const formData = new FormData();
    //     // formData.append('id', props.router.params.id);
    //     // formData.append('name', name);
    //     // formData.append('file', file);
    //     // formData.append('description', description);
    //     // formData.append('price',price);
    //     // (async () => {
    //     //     let result = await fetch("http://127.0.0.1:8000/api/updateproduct", {
    //     //         method: 'POST',
    //     //         body: formData
    //     //     })
    //     // })();
    //     // alert("Data update");
    // }
    return (
        <>
            <Header></Header>
            <div className='col-sm-6 offset-sm-3'>
                <h1>Update product Page</h1>
                <input type="text"  defaultValue={data.name} className='form-control'></input>
                <br></br>
                <input type="file" defaultValue={data.file_path} className='form-control'></input>
                <img src={'http://127.0.0.1:8000/' + data.file_path} style={{ width: 100, height:100}}></img>
                <br></br>
                <input type="text"  defaultValue={data.description} className='form-control'></input>
                <br></br>
                <input type="text" defaultValue={data.price} placeholder='product price' className='form-control'></input>
                <br></br>
                <button className='btn btn-primary'>Update Product</button>
            </div>
        </>
    );
    
}
export default Updateproduct;