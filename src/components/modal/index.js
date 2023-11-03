import React from "react";
import "./index.css";

export default function Modal({ isShow, data, onCancel }) {
    if (!data || !data.i || !data.i.imageUrl) {
        const imageUrl = `https://source.unsplash.com/720x1280?${data && data.l}`;
        return (
            <div className={!isShow ? "hidden" : ""} datacy="modal-delete">
                <div className="modal-bg" onClick={onCancel}></div>
                <div className="modal">
                    {data && <img src={imageUrl} alt={data.l} />}
                </div>
            </div>
        );
    }

    return (
        <div className={!isShow ? "hidden" : ""} datacy="modal-delete">
            <div className="modal-bg" onClick={onCancel}></div>
            <div className="modal">
                {data && <img src={data.i.imageUrl} alt={data.l} />}
            </div>
        </div>
    );
}
