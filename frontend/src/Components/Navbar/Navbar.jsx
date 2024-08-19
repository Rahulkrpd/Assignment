import React, { useContext, useState } from 'react';
import './Navbar.css';
import { StoreContext } from '../../Context/StoreContext';

const Navbar = () => {
    const { cardData, setCardData, allCards } = useContext(StoreContext);
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({ title: '', description: '' });

    const handleFormToggle = () => {
        setShowForm(!showForm);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Your axios post request for form submission (already implemented)
    };

    const handleClose = () => {
        setShowForm(false);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }

    const filterCards = (event) => {
        const searchTerm = event.target.value.toLowerCase();
        if (searchTerm === '') {
            setCardData(allCards); // Show all cards when input is empty
        } else {
            const filteredData = allCards.filter(card => 
                card.title.toLowerCase().includes(searchTerm)
            );
            setCardData(filteredData); // Update cardData with filtered cards
        }
    }

    return (
        <>
            <nav className='navbar'>
                <div className="left">
                    <img src="./android-chrome-192x192.png" alt="" />
                    <span>Abstract</span> |
                    <span>Help center</span>
                </div>
                <span className='right' onClick={handleFormToggle}>Submit a request</span>
            </nav>

            <div className='container'>
                <p>How can we help?</p>
                <input type="text" name='search' placeholder='Search' onChange={filterCards} />
            </div>

            {showForm && (
                <div className="form-overlay">
                    <div className="form-container">
                        <span className="close-button" onClick={handleClose}>X</span>
                        <h2>Submit a Request</h2>
                        <form onSubmit={handleSubmit}>
                            <label>
                                Title:
                                <input
                                    type="text"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                            <label>
                                Description:
                                <textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
