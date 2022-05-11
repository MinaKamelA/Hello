import express from 'express';

const app = express();
app.use(express.json());
app.use(express.static('public'));

const PORT = process.env.PORT || 3000;
const URL = process.env.URL || 'http://localhost:3000';

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
    console.log(`Server is ready on ${URL}`);
    
});

