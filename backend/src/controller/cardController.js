import CardModel from "../models/Card.model.js";

export const creatCard = async (req, res) => {
    try {
        const { title, description } = req.body;
        const newCard = new CardModel({ title, description });
        await newCard.save();
        res.status(201).json(newCard);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const getAllCard = async(req,res)=>
{
    try {
        const cards = await CardModel.find();
        res.json(cards);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}

export const getCardByTitle = async (req, res) => {
    try {
      const card = await CardModel.findOne({ title: req.params.title });
      if (!card) {
        return res.status(404).json({ message: 'Card not found' });
      }
      res.json(card);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };