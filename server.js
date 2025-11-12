import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = process.env.PORT || 3000;


// Statik dizin (index.html)
app.use(express.static(__dirname));


// Health check
app.get('/health', (req,res)=>res.json({ok:true}));


app.listen(PORT, ()=> console.log(`KZMail sunucusu port ${PORT} üzerinde çalışıyor`));
