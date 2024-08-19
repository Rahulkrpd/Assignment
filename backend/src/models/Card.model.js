import mongoose from "mongoose";

const cardSchema = mongoose.Schema({
    title: {
        type: String,
        require: true,
        unique: true,
       
        index: true,

    },
    description: {
        type: String,
        require: true,
        lowercase: true,

    }


})

const CardModel = mongoose.models.CardModel || mongoose.model("Card",cardSchema);


export default CardModel;