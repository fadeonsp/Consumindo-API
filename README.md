# ConsumindoAPI


USANDO API REST COM HttpClient no angular 8

httpClient serve para fazer comunicação entre cliente e servidor usando protocolo http

os métodos são: post, get, put, delete, patch, request, head, jsonp, options

o HttpClient usa a interface XMLHttpRequest para disponibilizar solicitações request e response interceptadas
-manipulação de erros simplificada
-suporte a api Observable
-APIs e tratamento de erros

Para simular o uso do HttpClient, precisamos de uma API REST

para isso podemos usar o json-server, que faz uma API REST fake 

criando métodos responsáveis pelas requisições http usando o httpClient, criamos arquivo service para fazer as chamadas http

o subscribe é um dos operadores do observable da lib RxJS, ele notifica que a resposta vier e for transformada em json

