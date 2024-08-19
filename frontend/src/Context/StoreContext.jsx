import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const url = "http://localhost:3000"; // backend URL
    const [cardData, setCardData] = useState([]);
    const [allCards, setAllCards] = useState([]); // Store all cards

    const getAllCards = async () => {
        try {
            const response = await axios.get(`${url}/api/cards`);
            setCardData(response.data);
            setAllCards(response.data); // Keep a copy of all cards
        } catch (error) {
            console.error(error);
            alert(error.message);
        }
    };

    useEffect(() => {
        getAllCards();
    }, []);

    const contextValue = {
        cardData,
        setCardData,  // Allow updating cardData
        allCards,     // Provide all cards for filtering
        url,
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
