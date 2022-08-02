function obtemAlunoDoFormulario(formulario) {

    var paciente = {
        nome: formulario.nome.value,
        instrumento: formulario.instrumento.value,
        nivel: formulario.nivel.value,
    }

    return paciente;
}
function montaTr(aluno) {
    var alunoTr = document.createElement("tr");
    alunoTr.classList.add("aluno");

    alunoTr.appendChild(montaTd(aluno.nome, "info-nome"));
    alunoTr.appendChild(montaTd(aluno.instrumento, "info-instrumento"));
    alunoTr.appendChild(montaTd(aluno.nivel, "info-nivel"));
    return alunoTr;
}
function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}
function adicionaAlunoNaTabela(Aluno) {
    var AlunoTr = montaTr(Aluno);
    var tabela = document.querySelector("#tabela-alunos");
    tabela.appendChild(AlunoTr);
}
var adcionar = document.querySelector("#botao");
adcionar.addEventListener("click", function(event){
    event.preventDefault();
    var formulario = document.querySelector("#forms");
    var aluno = obtemAlunoDoFormulario(formulario);
    adicionaAlunoNaTabela(aluno);
    formulario.reset();
});