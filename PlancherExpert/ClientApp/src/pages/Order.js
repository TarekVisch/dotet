import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Order = () => {
    const navigate = useNavigate();

    const [floorCovers, setFloorCovers] = useState([]);
    const [clientName, setClientName] = useState("");
    const [selectedFloorId, setSelectedFloorId] = useState(0);
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        submitData();
    }

    const fetchFloorCovers = async () => {
        try {
            const response = await fetch("api/floorCover");
            const data = await response.json();
            setFloorCovers(data);
        } catch (error) {
            console.log(error)
        }
    }

    const submitData = async () => {
        const invoiceData = { clientId: 1, floorId: parseInt(selectedFloorId), width, height };

        const response =
            await fetch(
                "api/invoice",
                {
                    method: 'POST',
                    headers: { "Content-Type": 'application/json' },
                    body: JSON.stringify(invoiceData)
                }
            );

        const data = await response.json();

        navigate(`/invoices`);
    }


    useEffect(() => {
        fetchFloorCovers();
    }, []);


    return (
        <section className="order">
            <div className="container">
                <h2>Order</h2>
                <div className="form-container">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="clientName">Name</label>
                            <input type="text" value={clientName} onChange={e => setClientName(e.target.value)} id="clientName" name="clientName" placeholder="Name..." />
                        </div>
                        <div>
                            <label htmlFor="type">Floor Cover</label>
                            <select id="type" name="type" value={selectedFloorId} onChange={e => setSelectedFloorId(e.target.value)}>
                                {
                                    floorCovers.map(floor => (
                                        <option key={floor.id} value={floor.id}>{floor.name}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div>
                            <label htmlFor="width">Width</label>
                            <input type="text" value={width} onChange={e => setWidth(e.target.value)} id="width" name="width" />
                        </div>
                        <div>
                            <label htmlFor="height">Height</label>
                            <input type="text" value={height} onChange={e => setHeight(e.target.value)} id="height" name="height" />
                        </div>
                        <div>
                            <button type="submit">Order</button>
                        </div>
                    </form>
                </div>

                <h3 className="mb-3">Info</h3>

                <div className="floors">
                    {floorCovers.length > 0
                        ? floorCovers.map(item => (<div key={item.id} className="order-card">
                            {item.imgUrl ? <img src={item.imgUrl} alt="Commercial Carpet" /> : <img src="/images/no-image.png" alt="" />}
                            <div>
                                <p>Floor type: <span>{item.name}</span></p>
                                <p>Material Price (m<sup>2</sup>): <span>$ {item.pricePerSquareMeter}</span></p>
                                <p>Installation Price (m<sup>2</sup>): <span>$ {item.installationPerSquareMeter}</span></p>
                            </div>
                        </div>))
                        : "Loading..."
                    }
                </div>
            </div>
        </section>
    )
}

export default Order;