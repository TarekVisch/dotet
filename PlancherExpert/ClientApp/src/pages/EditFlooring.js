import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";

const EditFlooring = () => {
    const navigate = useNavigate();
    let { id } = useParams();

    const [disabled, setDisabled] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        pricePerSquareMeter: 0,
        installationPerSquareMeter: 0
    });

    const fetchFloorCover = async () => {
        try {
            const response = await fetch(`api/floorCover/${id}`);
            const data = await response.json();
            setFormData(data);
        } catch (e) {
            console.log(e);
            navigate("/404")
        }
    }

    const handleChange = (e) => {
        setFormData(prevState => {
            return {
                ...prevState,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        setDisabled(true);

        try {
            await fetch(
                `api/floorCover/${id}`,
                {
                    method: 'PUT',
                    headers: { "Content-Type": 'application/json' },
                    body: JSON.stringify(formData)
                });
            navigate("/floor-covering");
        } catch (e) {
            console.log(e);
            setDisabled(false)
        }
    }


    useEffect(() => {
        fetchFloorCover()
    }, []);

    return (
        <section className="add-flooring">
            <div className="container">
                <h2 className="mb-4">Add Floor Cover</h2>
                <div className="add-flooring-form">
                    <form onSubmit={handleSubmit}>
                        <div className="d-flex flex-column">
                            <label htmlFor="name" className="fw-semibold mb-1">Name</label>
                            <input type="text" id="name" name="name" placeholder="Floor Cover..." value={formData.name} onChange={handleChange} />
                        </div>
                        <div className="d-flex flex-column">
                            <label htmlFor="pricePerSquareMeter" className="fw-semibold mb-1">Price (m<sup>2</sup>)</label>
                            <input type="text" id="pricePerSquareMeter" name="pricePerSquareMeter" placeholder="0" onChange={handleChange} value={formData.pricePerSquareMeter} />
                        </div>
                        <div className="d-flex flex-column">
                            <label htmlFor="installationPerSquareMeter" className="fw-semibold mb-1">Installation (m<sup>2</sup>)</label>
                            <input type="text" id="installationPerSquareMeter" name="installationPerSquareMeter" placeholder="0" onChange={handleChange} value={formData.installationPerSquareMeter} />
                        </div>
                        <button type="submit" disabled={disabled} className="btn btn-primary" style={{ backgroundColor: "#f03c02", borderColor: "#f03c02" }}>
                            Edit
                        </button>
                    </form>
                </div>
            </div>
        </section >
    )
}

export default EditFlooring;