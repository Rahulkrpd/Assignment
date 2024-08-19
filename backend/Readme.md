# Backend - Card Management API

This is the backend API for the Card Management system. It provides endpoints to create, read, and search for card records.

## Technologies Used

- Node.js
- Express
- MongoDB (Mongoose)
- Axios (for HTTP requests)

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Rahulkrpd/Assignment.git
cd your-repo-name/backend

npm install


MONGO_URI=<Your MongoDB Connection URI>
PORT=<Port you want the server to run on, e.g., 3000>

npm start


 API Endpoints
1. Create a Card
URL: /api/card-create
Method: POST
Description: Create a new card record.
Request Body:

 Get All Cards
URL: /api/cards
Method: GET
Description: Retrieve all card records.
3. Get Card by Title
URL: /api/cards/:title
Method: GET
Description: Retrieve a specific card by its title.