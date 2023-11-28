import React, { useState } from "react"
import { useNavigate } from "react-router-dom";

const AddFlooring = () => {
    const navigate = useNavigate();
    const [disabled, setDisabled] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setDisabled(true);

        const formData = new FormData(e.target);
        const obj = {
            name: formData.get("name") ?? "",
            pricePerSquareMeter: formData.get("pricePerSquareMeter") ?? 0,
            installationPerSquareMeter: formData.get("installationPerSquareMeter") ?? 0,
        }

        try {
            await fetch(
                "api/floorCover/add",
                {
                    method: 'POST',
                    headers: { "Content-Type": 'application/json' },
                    body: JSON.stringify(obj)
                });
            navigate("/floor-covering");
        } catch (e) {
            console.log(e);
            setDisabled(false)
        }
    }

    return (
        <section className="add-flooring">
            <div className="container">
                <h2 className="mb-4">Add Floor Cover</h2>
                <div className="add-flooring-form">
                    <form onSubmit={handleSubmit}>
                        <div className="d-flex flex-column">
                            <label htmlFor="name" className="fw-semibold mb-1">Name</label>
                            <input type="text" id="name" name="name" placeholder="Floor Cover..." />
                        </div>
                        <div className="d-flex flex-column">
                            <label htmlFor="pricePerSquareMeter" className="fw-semibold mb-1">Price (m<sup>2</sup>)</label>
                            <input type="text" id="pricePerSquareMeter" name="pricePerSquareMeter" placeholder="0" />
                        </div>
                        <div className="d-flex flex-column">
                            <label htmlFor="installationPerSquareMeter" className="fw-semibold mb-1">Installation (m<sup>2</sup>)</label>
                            <input type="text" id="installationPerSquareMeter" name="installationPerSquareMeter" placeholder="0" />
                        </div>
                        <button type="submit" disabled={disabled} className="btn btn-primary" style={{ backgroundColor: "#f03c02", borderColor: "#f03c02" }}>
                            Add
                        </button>
                    </form>
                </div>
            </div>
        </section >
    )
}

export default AddFlooring;