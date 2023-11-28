import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const FloorCovering = () => {
    const [flooring, setFlooring] = useState([]);

    const fetchItems = async () => {
        try {
            const response = await fetch("api/floorCover");
            const data = await response.json();
            setFlooring(data);
        } catch (error) {
            console.log(error)
        }
    }

    const handleDelete = async (id) => {
        try {
            await fetch(
                `api/floorCover/${id}`,
                { method: "DELETE" }
            )

            setFlooring(prevState => {
                return prevState.filter(floor => floor.id !== id)
            });
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchItems();
    }, []);

    return (
        <section className="floor-covering">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h2>Flooring</h2>
                    <Link to="/add-flooring" className="btn btn-primary">Add Flooring</Link>
                </div>
                {
                    flooring.length > 0
                        ?
                        <table className="table align-middle mb-0 bg-white">
                            <thead className="bg-light">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Price (m<sup>2</sup>)</th>
                                    <th scope="col">Installation (m<sup>2</sup>)</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {flooring.map(floor => (
                                    <tr key={floor.id}>
                                        <td>{floor.id}</td>
                                        <td>
                                            <p className="fw-bold mb-1">{floor.name}</p>
                                        </td>
                                        <td>
                                            <p className="fw-normal mb-1">$ {floor.pricePerSquareMeter}</p>
                                        </td>
                                        <td>
                                            <p className="fw-normal mb-1">$ {floor.installationPerSquareMeter}</p>
                                        </td>
                                        <td>
                                            <Link to={`/edit-flooring/${floor.id}`} className="btn btn-outline-primary me-2">Edit</Link>
                                            <button type="button" onClick={() => handleDelete(floor.id)} className="btn btn-outline-danger">Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>

                        </table>
                        : "Loading..."
                }
            </div>
        </section>
    );
}

export default FloorCovering;