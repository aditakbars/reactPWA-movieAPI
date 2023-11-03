import React, { useState, useEffect } from "react";
import axios from "axios";


// Components
import Card from "../components/card";
import Modal from "../components/modal";


export default function LandingPage() {
    const [data, setData] = useState(null);
    const [isLoaded, setisLoaded] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [query, setQuery] = useState("school");
    
    // Modal
    const [modalShow, setModalShow] = useState(false);
    const [modalItem, setModalItem] = useState(null);
    
    
    useEffect(() => {
        const fetchData = async (query) => {
        setIsLoading(true);
        try {
            const response = await axios.get(
                "https://imdb8.p.rapidapi.com/auto-complete",{
                params: { q: query },
                headers: {
                    "x-rapidapi-host": "imdb8.p.rapidapi.com",
                    "x-rapidapi-key": "1f96cb0112mshd677b47374e124fp1f6779jsn5fe1726bc599",
                },
                }
            );
            if (response.status === 200) {
                setData(response.data);
                setisLoaded(true);
                setIsLoading(false);

                // Cache gambar-gambar dari respons
                const imageCache = await caches.open('my-image-cache');
                const imageUrls = response.data.d.map(item => item.i.imageUrl);
                await imageCache.addAll(imageUrls);
            }
        } catch (err) {
        console.log(err);
        setIsLoading(false);
        }
        };
    if (!isLoaded) {
    fetchData(query);
    }
    }, [isLoaded, query]);
        const onSearch = (e) => {
        if (e.key === "Enter") {
        setisLoaded(false);
        setQuery(e.target.value);
    }
    };
    const handleClick = (item) => {
        setModalShow(!modalShow);
        setModalItem(item);
    };
    return (
        <main>
            <input
                type="text"
                placeholder="Search film by name"
                onKeyDown={(e) => onSearch(e)}
            />
            <h3 className="title">Search : {query}</h3>
            {!data || isLoading ? (
                <p>Loading...</p>
            ) : (
                <div className="card-container">
                {data.d.map((item, index) => {
                    return (
                    <Card data={item} key={index} onClick={()=>handleClick(item)} />
                    );
                })}
                </div>
            )}
            <Modal
                data={modalItem}
                isShow={modalShow}
                onCancel={() => setModalShow(false)}
            />
        </main>
    );
}
