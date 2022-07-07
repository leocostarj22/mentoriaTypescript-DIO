// Resposta 1
const funcionario = {
    codigo: 20,
    nome: 'Leonardo'
};

// Resposta 2
const funcionario2: {codigo: number, nome: string} = {
    codigo: 20,
    nome: 'Andre'
}

// Respostas 3 e 4
interface Funcionario { 
    codigo: number,
    nome: string
};

const funcionarioObj = {} as Funcionario;
funcionarioObj.codigo = 20;
funcionarioObj.nome = 'Maria';

const funcionarioObj2: Funcionario = {
    codigo: 20,
    nome: 'Fernanda'
}