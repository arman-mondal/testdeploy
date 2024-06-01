const express = require('express');
const multer = require('multer');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  
});

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.post('/submit', upload.fields([{ name: 'profileImage', maxCount: 1 }, { name: 'biometric', maxCount: 1 }]), (req, res) => {
    const clientId = req.body.clientId;
    const date = req.body.date;
    const profileImage = req.files['profileImage'] ? req.files['profileImage'][0] : null;
    const biometric = req.files['biometric'] ? req.files['biometric'][0] : null;

    // Log or store data as needed
    console.log('Client ID:', clientId);
    console.log('Date:', date);
    if (profileImage) {
        console.log('Profile Image:', profileImage);
    }
    if (biometric) {
        console.log('Biometric:', biometric);
    }

    if (!profileImage || !biometric) {
        return res.status(400).json({ message: 'Profile image and biometric file are required' });
    }

    // Here, you can save the data to a database or perform other operations
    res.json({ message: 'Data received successfully', clientId, date, profileImage, biometric });
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
