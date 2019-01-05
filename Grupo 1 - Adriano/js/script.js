
function insertDisciplina(codigo, nome, carga, id_professor, ementa, referencia){ 
 	 db.transaction(function (tx) 
		{ tx.executeSql('INSERT INTO DISCIPLINAS (DIS_CODIGO, DIS_NOME_DISCIPLINA, DIS_CARGA_HORARIA, DIS_PRO_CODIGO,  DIS_EMENTA, DIS_REFERENCIA) VALUES ("' + codigo + '","' + nome + '","' + carga + '","' + id_professor + '","' + ementa + '","' + referencia + '")'); });   
}

function insertInstituicoes(codigo, nome){ 
 	 db.transaction(function (tx) 
		{ tx.executeSql('INSERT INTO INSTITUICOES (INS_CODIGO, INS_NOME) VALUES ("' + codigo + '","' + nome + '")'); });   
}

function insertProfessores(codigo, nome, id_instituicao){ 
	
 	 db.transaction(function (tx) 
		{ tx.executeSql('INSERT INTO PROFESSORES (PRO_CODIGO, PRO_NOME, PRO_INS_CODIGO) VALUES ("' + codigo + '","' + nome + '","' +id_instituicao+'")'); });   
}

function insertReferencia(codigo_disciplina, conteudo){ 
	
 	 db.transaction(function (tx) 
		{ tx.executeSql('INSERT INTO DISCIPLINAS_REFERENCIAS (REF_DIS_CODIGO, REF_CONTEUDO) VALUES ("' + codigo_disciplina + '","' + conteudo +'")'); });   
}

document.querySelector('#lista').innerHTML += "Carregando dados! Aguarde..."; 

var db = openDatabase('BANCO_POS', '1.0', 'UNIPE', 2 * 1024 * 1024); 
db.transaction(function (tx) 
   { tx.executeSql('DROP TABLE DISCIPLINAS'); 
   });
db.transaction(function (tx) 
   { tx.executeSql('CREATE TABLE IF NOT EXISTS DISCIPLINAS (DIS_CODIGO unique, DIS_NOME_DISCIPLINA, DIS_CARGA_HORARIA, DIS_PRO_CODIGO, DIS_EMENTA, DIS_REFERENCIA)'); 
   });

db.transaction(function (tx) 
   { tx.executeSql('DROP TABLE PROFESSORES'); 
   });
db.transaction(function (tx) 
   { tx.executeSql('CREATE TABLE IF NOT EXISTS PROFESSORES (PRO_CODIGO unique, PRO_NOME, PRO_INS_CODIGO)'); 
   });

db.transaction(function (tx) 
   { tx.executeSql('DROP TABLE INSTITUICOES'); 
   });
db.transaction(function (tx) 
   { tx.executeSql('CREATE TABLE IF NOT EXISTS INSTITUICOES (INS_CODIGO unique, INS_NOME)'); 
   });
db.transaction(function (tx) 
   { tx.executeSql('CREATE TABLE IF NOT EXISTS DISCIPLINAS_REFERENCIAS (REF_DIS_CODIGO, REF_CONTEUDO)'); 
   });



insertInstituicoes(1,'Unipê');
insertInstituicoes(2,'TJ');
insertInstituicoes(3,'Emater');
insertInstituicoes(4,'Indra');
insertInstituicoes(5,'Vox Tecnologia');
insertInstituicoes(6,'IFPB');
insertInstituicoes(7,'Conductor');
insertInstituicoes(8,'TriadWorks - Fortaleza');
insertInstituicoes(9,'Alfa Consultoria');

insertProfessores('1', 'Jeferson Barbosa', '1');
insertProfessores('2', 'Ms. João Paulo Fechine Sette ', '2');
insertProfessores('3', 'Ms. Thyago Maia', '3');
insertProfessores('4', 'Ms. Pedro Amorin', '1');
insertProfessores('5', 'Esp. Hélio Cardoso', '1');
insertProfessores('6', 'Neto Cavalcanti', '4');
insertProfessores('7', 'Esp. Nélio Frazão', '5');
insertProfessores('8', 'MS. Ivson Santos', '5');
insertProfessores('9', 'Ms. Samara Martins', '1');
insertProfessores('10', 'Prof. Dr Rodrigo da Cruz Fujioka', '1');
insertProfessores('11', 'Ms. Lysiane Couto', '1');
insertProfessores('12', 'Rafael Ponte', '8');
insertProfessores('13', 'Esp Carlos Barbosa', '9');
insertProfessores('14', 'Humberto Junior', '7');
insertProfessores('15', 'Ms. Gustavo Sávio', '4');
insertProfessores('16', 'Ms. Pedro Amorin', '4');


insertDisciplina('1','Design Think em projetos de sistemas para Web e Startups','16', '1', 'Metodologia de Design (Design Thinking). Experiência de usuário. Pesquisa'+
'e análise de informações para identificação de oportunidades e possíveis mercados.'+
'Geração de alternativas. Prototipagem de conceitos e validação de ideias por meio de'+
'feedback de usuários. Refinamento da ideia a partir do modelo de negócios.'+
'Comunicação da ideia a clientes e usuários.', ''
);

insertReferencia('1', 'Stickdorn M. Isto É Design Thinking De Serviços : Fundamentos, Ferramentas, Casos'+
'[e-book]. Porto Alegre: Bookman; 2014. Available from: Minha Biblioteca, Ipswich,'+
'MA. Accessed December 20, 2017.');
insertReferencia('1', 'BROWN, Tim. n.d. Design Thinking. uma metodologia poderosa para decretar o fim'+
'das velhas ideias. n.p.: Rio de Janeiro Elsevier 2010, n.d. Catálogo do Centro'+
'Universitário de João Pessoa - Unipê, EBSCOhost (accessed December 20, 2017).');
insertReferencia('1', 'VIANNA ET AL. Design thinking. Disponível em: http://livrodesignthinking.com.br/'+
'Rio de Janeiro: MJV Press, 2012.');

/*insertDisciplina('2','Desenvolvimento de Interfaces Web','16', '2');
insertDisciplina('3','UX User Experience','16', '');
insertDisciplina('4','Fundamentos da Programação PHP ','16', '3');
insertDisciplina('5','Desenvolvimento de Sistemas web com PHP Frameworks','16', '3');
insertDisciplina('6','Desenvolvimento Responsivo de Aplicações Web','16', '');
insertDisciplina('7','Projeto Aplicativo ','16', '4');
insertDisciplina('8','Desenvolvimento de Sistemas web com PHP Frameworks 2 (Synfony)','16', '5');
insertDisciplina('9','Gestão de Configuração e Mudança de Software','16', '6');
insertDisciplina('10','Introdução a programação com Scripts','16', '7');
insertDisciplina('11','Desenvolvimento de aplicações com Frameworks JavaScript ','16', '');
insertDisciplina('12','Programação Multiplataforma (Android/IOS)','16', '8');
insertDisciplina('13','Banco de dados não convencionais','16', '9');
insertDisciplina('14','Fundamentos de Programação Java para Web','16', '10');
insertDisciplina('15','Teste de Software','16', '11');
insertDisciplina('16','Desenvolvimento Java Web Frameworks','16', '12');
insertDisciplina('17','Desenvolvimento Java Web Frameworks 2 ','16', '13');
insertDisciplina('18','Desenvolvimento de Micro Serviços, API e Containers','16', '10');
insertDisciplina('19','Back-End as a Service','16', '');
insertDisciplina('20','Ferramentas de Integração Contínua','16', '');
insertDisciplina('21','Segurança em Aplicações Web','16', '14');
insertDisciplina('22','DevOps, Servidores de Aplicação e Cloud Computing','16', '15');
insertDisciplina('23','Engenharia de Software Experimental','16', '16');*/

function obtemNomeProfessores(codigo){ 
            alert(codigo);
            db.transaction(function (tx) { 
            tx.executeSql('SELECT * FROM PROFESSORES WHERE PRO_CODIGO' + codigo, [], function (tx, results) { 
            	 alert(results.rows.item(0).PRO_NOME);
               return results.rows.item(0).PRO_NOME;  
            }, null); 
         });   
}




db.transaction(function (tx) { 
            tx.executeSql('SELECT * FROM DISCIPLINAS LEFT JOIN PROFESSORES ON PRO_CODIGO = DIS_PRO_CODIGO LEFT JOIN INSTITUICOES ON PRO_INS_CODIGO = INS_CODIGO', [], function (tx, results) { 
               var len = results.rows.length, i; 
               msg = "Total de <b>" + len + "</b> disciplinas."; 
               document.querySelector('#status').innerHTML +=  msg; 
               document.querySelector('#lista').innerHTML = ""; 
               var nome_professor;
               for (i = 0; i < len; i++) { 
               	if (results.rows.item(i).PRO_NOME == null) {
               		nome_professor = "Não definido";
               	}
                else
                {
                    nome_professor = results.rows.item(i).PRO_NOME + "("+results.rows.item(i).INS_NOME+")";
               	}

                msg = "<details>- Professor: "+nome_professor+ "</b></p>" +
                  "<summary>"+results.rows.item(i).DIS_CODIGO +" - <b>" + results.rows.item(i).DIS_NOME_DISCIPLINA+"</b></summary>"+
				  "<p> - Carga Horária:" +  results.rows.item(i).DIS_CARGA_HORARIA+"Hs</p>"+
				  "<p><b>Ementa</b>:<br> " + results.rows.item(i).DIS_EMENTA +
                  "<br><b>Referências Básicas:</b><br>"+results.rows.item(i).DIS_REFERENCIA + "</p>";
				
				tx1.executeSql('SELECT * FROM DISCIPLINAS_REFERENCIAS WHERE REF_DIS_CODIGO = ' + results.rows.item(i).DIS_CODIGO, [], function (tx1, results1) { 
                len = results1.rows.length; 
               }


               db.transaction(function (tx1) {  
               	  tx1.executeSql('SELECT * FROM DISCIPLINAS_REFERENCIAS WHERE REF_DIS_CODIGO = ' + results.rows.item(i).DIS_CODIGO, [], function (tx1, results1) {   
               	  	  var len = results.rows.length;   
               	  	  for (var n = 0; n < len; n++){ 
               	  	  	  var row = results1.rows.item(i); 
               	  	  	  links += "<li><a href='" + row.url + "'>" + 
               	  	  	  row.nicename + "</a><span onclick='deleteDBFav(\""+ row.nicename +"\");'>[X]</span></li>"; 
               	  	  	  document.querySelector('#favoritos').innerHTML = links;
                } }, null); });

			    
                msg += "Total de <b>" + len + "</b> disciplinas."; 

				msg += "</details>";
				document.querySelector('#lista').innerHTML +=  msg; 
               } 
  
            }, null); 
         }); 

 
