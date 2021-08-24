# Agenda

Uma aplicação para que um usuário possa gerenciar uma lista de contatos.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.1.

[Documentação](https://drive.google.com/file/d/1Clm9AU-_zqNaHgEf4Pny9tp8J4Y9vVro/view?usp=sharing)

[Diagrama ER](https://www.canva.com/design/DAEoBD5LJBE/q7vQUn1IJ5OgyZ-H7AXS3w/watch?utm_content=DAEoBD5LJBE&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton)

## Pré-Requisitos

Será necessário o docker e docker-compose instalado no computador.

## Rodando ambiente com Docker

Na raiz do projeto executar o comando 'docker-compose up' para subir a imagem do projeto:

## Criando as as migrações no banco

Execute o comando 'docker-compose exec web python manage.py migrate'


## Populando o banco de dados para os dados iniciais

Execute o comando 'docker-compose exec web python manage.py loaddata fixtures.json'


