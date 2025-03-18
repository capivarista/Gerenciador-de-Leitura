const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 3000;

// Configuração do banco de dados MySQL
const db = mysql.createConnection({
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: '',
    database: 'BookTracker', // Nome do banco atualizado
});

// Conexão ao banco
db.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err.message);
        return;
    }
    console.log('Conectado ao banco de dados!');
});

app.use(cors()); // Habilita CORS

// Endpoint para obter livros
app.get('/livros', (req, res) => {
    const query = 'SELECT id, titulo, autor, status FROM livros';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Erro na consulta:', err.message);
            res.status(500).send('Erro no servidor');
            return;
        }
        res.json(results);
    });
});

// Endpoint para obter sugestões
app.get('/sugestoes', (req, res) => {
    const query = 'SELECT id, titulo, autor, motivo FROM sugestoes';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Erro na consulta:', err.message);
            res.status(500).send('Erro no servidor');
            return;
        }
        res.json(results);
    });
});

// Endpoint para obter tempo de leitura
app.get('/tempo_leitura', (req, res) => {
    const query = 'SELECT livro_id, minutos, data_registro FROM tempo_leitura';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Erro na consulta:', err.message);
            res.status(500).send('Erro no servidor');
            return;
        }
        res.json(results);
    });
});


app.use(express.json()); // Para ler JSON no body

// Endpoint para cadastrar novo livro
app.post('/livros', (req, res) => {
    const { titulo, autor } = req.body;

    if (!titulo || !autor) {
        return res.status(400).json({ message: 'Título e autor são obrigatórios.' });
    }

    const query = 'INSERT INTO livros (titulo, autor) VALUES (?, ?)';
    db.query(query, [titulo, autor], (err, result) => {
        if (err) {
            console.error('Erro ao inserir livro:', err.message);
            return res.status(500).json({ message: 'Erro ao salvar livro.' });
        }

        res.status(201).json({ message: 'Livro cadastrado com sucesso!', id: result.insertId });
    });
});



// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
