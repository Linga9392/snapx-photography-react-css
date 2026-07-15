import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const PORT = 5001;

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});