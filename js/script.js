// URL da API criada no Node.js
const apiUrl = 'http://localhost:3000/clientes';

// Função para carregar os dados
async function carregarClientes() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        const tabela = document.getElementById('tabela-clientes');
        data.forEach(cliente => {
            const row = document.createElement('tr');
            row.innerHTML = `<td>${cliente.id}</td><td>${cliente.nome}</td>`;
            tabela.appendChild(row);
        });
    } catch (error) {
        console.error('Erro ao carregar dados:', error);
    }
}

// Chama a função ao carregar a página
document.addEventListener('DOMContentLoaded', carregarClientes);
