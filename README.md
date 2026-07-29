# Plano casa e vida nova

Checklist da casa nova de **Argeu e Mayara** — um passo prático dentro de uma
história maior: recomeçar a vida e construir um lar juntos. Este repositório
guarda um site simples, de uma página só, pra organizar o que já têm, o que
falta comprar e quanto isso custa.

## O site

Tudo está em [`index.html`](./index.html) — um arquivo único, sem instalação
e sem servidor. Basta abrir no navegador.

O que dá pra fazer nele:

- **Marcar itens** como resolvidos e acompanhar o progresso geral (barra e %).
- **Editar o preço** de qualquer item direto na lista.
- **Adicionar itens novos** dentro de um cômodo (botão "+ Adicionar item").
- **Adicionar cômodos/categorias novas** (botão "+ Adicionar cômodo / categoria",
  logo abaixo da lista).
- **Remover** itens que não fazem sentido pra vocês (botão "×").
- **Reiniciar** a lista para os valores padrão, se quiser começar do zero.
- **Baixar a página** com os dados atuais embutidos — útil pra mandar o
  checklist pronto pra alguém ou guardar um backup.

Tudo o que vocês editam fica salvo automaticamente no navegador
(`localStorage`), então ao voltar no mesmo navegador/dispositivo o checklist
continua de onde parou.

## Como usar

Só abrir o arquivo `index.html` direto no navegador (duplo clique ou
"Abrir com..."). Não precisa de internet nem instalar nada — as únicas
chamadas externas são as fontes do Google Fonts (Fraunces/Inter).

## Como publicar como site (opcional)

Pra ter um link público e acessar de qualquer lugar/dispositivo:

1. Vá em **Settings → Pages** neste repositório no GitHub.
2. Em "Source", selecione a branch `main` e a pasta `/ (root)`.
3. Salve. O GitHub gera uma URL do tipo
   `https://<usuário>.github.io/<repositório>/`.

Como os dados ficam salvos no `localStorage` do navegador, cada
dispositivo/navegador terá seu próprio progresso — use o botão "Baixar
página" quando quiser levar os dados de um lugar pro outro.
