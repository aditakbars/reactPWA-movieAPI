import React from "react";
import "./index.css";

export default function Card({ data, onClick }) {
    // Tambahkan pengecekan untuk data, data.i, dan data.i.imageUrl
    if (!data || !data.i || !data.i.imageUrl) {
        const imageUrl = `https://source.unsplash.com/720x720?${data.l}`;
        
        return (
            <div className="card" onClick={onClick}>
                <figure>
                <img src={imageUrl} alt={data.l} />
                </figure>
                <div className="card-info">
                    <h3>{data.l}</h3>
                    <p>{data.q}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="card" onClick={onClick}>
            <figure>
                <img src={data.i.imageUrl} alt={data.l} />
            </figure>
            <div className="card-info">
                <h3>{data.l}</h3>
                <p>{data.q}</p>
            </div>
        </div>
    );
}
