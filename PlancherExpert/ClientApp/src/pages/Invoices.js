import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const Invoices = () => {
    const [invoices, setInvoices] = useState([]);

    const handleDelete = async (id) => {
        try {
            await fetch(
                `api/invoice/${id}`,
                { method: "DELETE" }
            )

            setInvoices(prevState => {
                return prevState.filter(invoice => invoice.id !== id)
            });
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        const fetchInvoices = async () => {
            const response = await fetch("api/invoice");
            const data = await response.json();
            setInvoices(data);
        }

        fetchInvoices();
    }, []);

    return (
        <section className="floor-covering">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h2>Invoices</h2>
                </div>
                {
                    invoices.length > 0
                        ?
                        <table className="table align-middle mb-0 bg-white">
                            <thead className="bg-light">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Client</th>
                                    <th scope="col"># Floor ID</th>
                                    <th scope="col">Width</th>
                                    <th scope="col">Height</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {invoices.map(invoice => (
                                    <tr key={invoice.id}>
                                        <td>{invoice.id}</td>
                                        <td>
                                            <p className="fw-normal mb-1">Tarek</p>
                                        </td>
                                        <td>
                                            <p className="fw-bold mb-1">{invoice.floorId}</p>
                                        </td>
                                        <td>
                                            <p className="fw-normal mb-1">{invoice.width}</p>
                                        </td>
                                        <td>
                                            <p className="fw-normal mb-1">{invoice.height}</p>
                                        </td>
                                        <td>
                                            <Link to={`/edit-invoice/${invoice.id}`} className="btn btn-outline-primary me-2">Edit</Link>
                                            <button type="button" onClick={() => handleDelete(invoice.id)} className="btn btn-outline-danger">Delete</button>
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

export default Invoices;