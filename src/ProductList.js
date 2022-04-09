import React, { useEffect, useState } from 'react';
import Header from './Header';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function ProductList() {
    const [data, setData] = useState([]);
    useEffect(() => {
        const getData = async () => {
            let response = await fetch('http://127.0.0.1:8000/api/productlist')
            response = await response.json()
            setData(response)
        }
        getData();
    }, [])
    async function deleteitem(id) {
        let response = await fetch("http://127.0.0.1:8000/api/delete/" + id, { method: 'DELETE' });
        response = await response.json();
        console.warn(response);
        getData();

    }
      const getData =async()=> {
        let response = await fetch('http://127.0.0.1:8000/api/productlist')
        response = await response.json()
        setData(response)
    }
    return (
        <>
            <Header></Header>
            <h3>Product List Page</h3>
            <div className='col-sm-8 offset-sm-2' >
                <Table bordered variant="sm">
                    <thead> <tr>

                        <td>ID</td>
                        <td>Name</td>
                        <td>Price</td>
                        <td>Description</td>
                        <td>Image</td>
                        <td>Operations</td>
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
                                <td><span onClick={() => deleteitem(item.id)} className='delete'>Delete</span></td>

                                <td> <Link to={"update/"+item.id}>
                                    <span className='update'>Update</span>
                                </Link></td>
                            </tr>
                        )
                    }
                    </tbody>


                </Table>
            </div>
        </>
    );
}
export default ProductList;