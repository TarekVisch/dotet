import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Invoice = () => {
    const { id } = useParams();
    const [invoice, setInvoice] = useState({});

    useEffect(() => {
        const fetchAll = async () => {
            const invoiceResponse = await fetch(`api/invoice/${id}`);
            const invoiceData = await invoiceResponse.json();

            const floorCoverResponse = await fetch(`api/floorCover/${invoiceData.floorId}`)
            const floorCoverData = await floorCoverResponse.json();

            const obj = {
                id: invoiceData.id,
                clientName: "Tarek",
                floorCoverName: floorCoverData.name,
                floorCoverPrice: floorCoverData.pricePerSquareMeter,
                floorCoverInstallation: floorCoverData.installationPerSquareMeter,
                width: invoiceData.width,
                height: invoiceData.height,
            }

            setInvoice(obj)
        }

        fetchAll();
    }, [id]);

    const surfaceArea = invoice.width * invoice.height;
    const subTotal = surfaceArea * invoice.floorCoverPrice + surfaceArea * invoice.floorCoverInstallation;
    const tax = 0.15 * subTotal;
    const total = subTotal + tax;

    return (
        <div className="card">
            <div className="card-body">
                <div className="container mb-5 mt-3">
                    <div className="row d-flex align-items-baseline">
                        <div className="col-xl-9">
                            <p style={{ color: "#7e8d9f", fontSize: "20px" }}>Invoice {">"}{">"} <strong>ID: #{invoice.id}</strong></p>
                        </div>
                        <hr />
                    </div>

                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8">
                                <ul className="list-unstyled">
                                    <li className="text-muted">To: <span style={{ color: "#5d9fc5" }}>Tarek Chentouf</span></li>
                                    <li className="text-muted">Street, City</li>
                                    <li className="text-muted">State, Country</li>
                                    <li className="text-muted"><i className="fas fa-phone"></i> 123-456-789</li>
                                </ul>
                            </div>
                            <div className="col-xl-4">
                                <p className="text-muted">Invoice</p>
                                <ul className="list-unstyled">
                                    <li className="text-muted"><i className="fas fa-circle" style={{ color: "#84B0CA" }}></i> <span
                                        className="fw-bold">ID:</span>#123-456</li>
                                    <li className="text-muted"><i className="fas fa-circle" style={{ color: "#84B0CA" }}></i> <span
                                        className="fw-bold">Creation Date: </span>Jun 23,2021</li>
                                    <li className="text-muted"><i className="fas fa-circle" style={{ color: "#84B0CA" }}></i> <span
                                        className="me-1 fw-bold">Status:</span><span className="badge bg-warning text-black fw-bold">
                                            Unpaid</span></li>
                                </ul>
                            </div>
                        </div>

                        <div className="row my-2 mx-1 justify-content-center">
                            <table className="table table-striped table-borderless">
                                <thead style={{ backgroundColor: "#84B0CA" }} className="text-white">
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Client</th>
                                        <th scope="col">Floor Cover</th>
                                        <th scope="col">Width</th>
                                        <th scope="col">Height</th>
                                        <th scope="col">Sufrace Area</th>
                                        <th scope="col">Price (per m<sup>2</sup>)</th>
                                        <th scope="col">Installation (per m<sup>2</sup>)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>{invoice.clientName}</td>
                                        <td>{invoice.floorCoverName}</td>
                                        <td>{invoice.width}</td>
                                        <td>{invoice.height}</td>
                                        <td>{isNaN(surfaceArea) ? "..." : surfaceArea}</td>
                                        <td>${invoice.floorCoverPrice}</td>
                                        <td>${invoice.floorCoverInstallation}</td>
                                    </tr>
                                </tbody>

                            </table>
                        </div>
                        <div className="row">
                            <div className="col-xl-8">
                                <p className="ms-3">PlancherExpert</p>
                            </div>
                            <div className="col-xl-3">
                                <ul className="list-unstyled">
                                    <li className="text-muted ms-3"><span className="text-black me-4">SubTotal</span>${isNaN(subTotal) ? "..." : subTotal.toFixed(2)}</li>
                                    <li className="text-muted ms-3 mt-2"><span className="text-black me-4">Tax(15%)</span>${isNaN(tax) ? "..." : tax.toFixed(2)}</li>
                                </ul>
                                <p className="text-black float-start"><span className="text-black me-3"> Total Amount</span><span
                                    style={{ fontSize: "25px" }}>${isNaN(total) ? "..." : total.toFixed(2)}</span></p>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-xl-10">
                                <p>Thank you for your purchase</p>
                            </div>
                            <div className="col-xl-2">
                                <button type="button" className="btn btn-primary text-capitalize"
                                    style={{ backgroundColor: "#f03c02", color: "#ffffff" }}>Pay Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Invoice;