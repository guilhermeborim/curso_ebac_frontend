const alunos = [
    {nome: 'Guilherme', nota: '10'},
    {nome: 'Fernanda', nota: '8'},
    {nome: 'Simba', nota: '4'},
    {nome: 'Iris', nota: '3'},
]

function filtrarAlunosAprovados(arrayDeAlunos) {
    return arrayDeAlunos.filter(aluno => aluno.nota >= 6);
}
const alunosAprovados = filtrarAlunosAprovados(alunos);

const nomesAlunosAprovados = alunosAprovados.map(aluno => aluno.nome);
console.log(`Alunos aprovados: ${nomesAlunosAprovados}`);