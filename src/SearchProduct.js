import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import Header from './Header';
function SearchProduct() {
    const [data, setData] = useState([]);
    // useEffect(() => {
    //     const getData = async () => {
    //         let response = await fetch('http://127.0.0.1:8000/api/productlist')
    //         response = await response.json()
    //         setData(response)
    //     }
    //     getData();
    // }, [])
    async function search(key) {
        if (key.length > 1) {
            let result = await fetch("http://127.0.0.1:8000/api/search/" + key);
            result = await result.json();
            console.log("rr", result);
            setData(result);
        }
    }
    return (
        <>
            <Header></Header>
            <h3>SearchProduct Page</h3>
            <div className='col-sm-6 offset-sm-3' >
                <br></br>
                <input type="text" onClick={(e) => search(e.target.value)} placeholder='Search Product' className='form-control'></input>
                <br></br>
                
                {
                    data.length > 0 ?
                    <Table bordered variant="sm">
                        <thead> <tr>

                            <td>ID</td>
                            <td>Name</td>
                            <td>Price</td>
                            <td>Description</td>
                            <td>Image</td>
                        </tr>
                        </thead>
                        <tbody>                    {
                            data.map((item) =>
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>{item.description}</td>
                                    <td><img style={{ width: 100, height: 100 }} src={'http://localhost:8000/' + item.file_path} ></img></td>
                                </tr>
                            )
                        }
                        </tbody>


                    </Table>:null
                }
            </div>
        </>
    );
}
export default SearchProduct;