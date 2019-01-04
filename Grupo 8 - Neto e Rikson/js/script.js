// This works on all devices/browsers, and uses IndexedDBShim as a final fallback 
var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;

// Open (or create) the database
var open = indexedDB.open("DB-ALUNOS", 1);

// Create the schema
open.onupgradeneeded = function() {
	var db = open.result;
	var store = db.createObjectStore("alunosOS", {keyPath: "id"});
	var indexNome = store.createIndex("NomeIndex", 'nome');
};

open.onsuccess = function() {
	// Start a new transaction
	var db = open.result;
	var tx = db.transaction("alunosOS", "readwrite");
	var alunosOS = tx.objectStore("alunosOS");
	var indexNome = alunosOS.index("NomeIndex");

	// Add some data
	var jsonAlunos = JSON.parse(getJSONAlunos()).alunos;

	for (var i = 0; i < jsonAlunos.length; i++) {
		alunosOS.put(jsonAlunos[i]);
	}
			
	// Query the data
	var requestGetAll = indexNome.getAll();

	requestGetAll.onsuccess = function() {
		var resultado = requestGetAll.result;
		for (var i = 0; i < resultado.length; i++) {
			adicionarAluno(resultado[i]);
		}
	};

	// Close the db when the transaction is done
	tx.oncomplete = function() {
		db.close();
	};

}

function adicionarAluno(aluno){
	var divAlunos = document.getElementById("divAlunos");

	var wrapperDiv = document.createElement('div');
	wrapperDiv.setAttribute('class','aluno');
	divAlunos.appendChild(wrapperDiv);
	
	var imgTag = document.createElement('img');
	imgTag.setAttribute('class','aluno__foto');
	imgTag.setAttribute('src', aluno.imagem);
	wrapperDiv.appendChild(imgTag);
	
	var divDetalhes = document.createElement('div');
	divDetalhes.setAttribute('class','aluno__detalhes');
	wrapperDiv.appendChild(divDetalhes);
					
	var nomeAluno = document.createElement('h2');
	nomeAluno.innerHTML = aluno.nome;
	divDetalhes.appendChild(nomeAluno);
	
	var grupoAluno = document.createElement('p');
	grupoAluno.innerHTML = aluno.grupo;
	grupoAluno.setAttribute('class','aluno__grupo');
	divDetalhes.appendChild(grupoAluno);
	
	var descAluno = document.createElement('p');
	descAluno.innerHTML = aluno.descricaoTarefa;
	descAluno.setAttribute('class','aluno__desc');
	divDetalhes.appendChild(descAluno);
}

function getJSONAlunos(){
	return '{"alunos":'+
			'[{"id":1, "nome":"Neto", "grupo":"Grupo 8", "imagem":"images/alunos/Grupo8-Neto.png",'+
			'"descricaoTarefa":"Listagem de alunos", "url":"/grupo8/listaAlunos.html"},'+

			'{"id":2, "nome":"Rikson", "grupo":"Grupo 8", "imagem":"images/alunos/Grupo8-Rikson.png",'+
			'"descricaoTarefa":"Modelo interno", "url":"/grupo8/listaAlunos.html"},'+

			'{"id":3, "nome":"Paulo", "grupo":"Grupo 10", "imagem":"images/alunos/Grupo10-Paulo.png",'+
			'"descricaoTarefa":"Modelo interno", "url":"/grupo8/listaAlunos.html"}'+
	']}';

}
