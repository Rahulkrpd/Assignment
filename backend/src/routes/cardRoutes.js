import express from "express"
import { creatCard,getAllCard,getCardByTitle } from "../controller/cardController.js"


const cardRouter = express.Router();

cardRouter.post('/card-create',creatCard);
cardRouter.get('/cards',getAllCard);
cardRouter.get('/cards/:title',getCardByTitle)


export default cardRouter