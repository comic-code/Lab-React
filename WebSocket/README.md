# WebSocket

É um protocolo de comunicação WEB. Ele resolve um "problema" do próprio HTTP.

## HTTP. Requisição - Resposta

Em casos de atualização real time (whatsapp), onde é necessário uma atualização mais constante, sem esperas ou 
interações do usuário, para melhor experiência.

Em casos que é necessário uma segurança a mais, ou uma resposta do servidor, é aconselhado usar HTTP.

No WebSocket em vez de temos uma chamada e uma resposta, é aberto uma conexão.

## WebSocket. conexão
****

## No Back-end (node):
- **Dependências**: express, socket.io, cors.

## No Front-end (React):
- **Dependências**: socket.io-client.

Não é costume ouvir evento no back-end, geralmente o back-end emite o evento e o front-end escuta. 