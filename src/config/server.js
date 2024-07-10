console.clear();
import APP from "../app.js";
import { config } from "dotenv";
config();   

const PORT = process.env.PORT || 3000;

APP.listen(PORT, (req, res) => {
    console.log(`Server is running on port ${PORT}`);
});