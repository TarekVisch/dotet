import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <section className="not-found">
            <div className="d-flex align-items-center justify-content-center">
                <div className="text-center">
                    <h1 className="display-1 fw-bold">404</h1>
                    <p className="fs-3"> <span className="text-danger">Opps!</span> Page not found.</p>
                    <p className="lead">
                        The page you’re looking for doesn’t exist.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default NotFound;