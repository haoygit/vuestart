import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const app = express()

const PORT = process.env.PORT || 3000

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Serve the static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist')))

console.log(1111)
// Handle SPA
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})
console.log(2222)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})