# Plano casa e vida nova

Checklist da casa nova de **Argeu e Mayara** — um passo prático dentro de uma
história maior: recomeçar a vida e construir um lar juntos. Este repositório
guarda um site simples, de uma página só, pra organizar o que já têm, o que
falta comprar, quanto isso custa e como o dinheiro está sendo dividido e
guardado.

## O site

Tudo está em [`index.html`](./index.html) — um arquivo único, sem instalação
e sem servidor. Basta abrir no navegador. A foto de capa fica em
[`assets/capa-argeu-mayara.jpg`](./assets/capa-argeu-mayara.jpg) — pra trocar,
é só substituir esse arquivo por outra foto com o mesmo nome (ou editar o
`src` da tag `<img>` no início do `index.html`).

O que dá pra fazer nele:

- **Marcar itens** como resolvidos e acompanhar o progresso geral (barra e %).
- **Definir um orçamento teto** e ver se a estimativa está estourando ou com folga.
- **Nosso capital**: informar quanto guardam por mês e o capital atual — o
  site calcula sozinho se está em déficit ou superávit em relação a tudo que
  ainda falta comprar, e em quantos meses (no ritmo atual) dá pra fechar a conta.
- **Editar valor estimado e valor real** de cada item, e marcar **quem pagou**
  (Argeu ou Mayara) — a seção "Divisão de custos" calcula o acerto 50/50
  automaticamente.
- **Filtrar** por tudo / só o que falta / só essenciais.
- **Adicionar itens novos** dentro de um cômodo (botão "+ Adicionar item").
- **Adicionar cômodos/categorias novas** (botão "+ Adicionar cômodo / categoria").
- **Remover** itens que não fazem sentido pra vocês (botão "×").
- **Reiniciar** a lista para os valores padrão, se quiser começar do zero.
- **Baixar a página** com os dados atuais embutidos — útil pra mandar o
  checklist pronto pra alguém ou guardar um backup.

Tudo o que vocês editam fica salvo automaticamente no navegador
(`localStorage`). Se configurarem a sincronização com a nuvem (próxima seção),
os dados também aparecem automaticamente no aparelho do outro.

## Como usar

Só abrir o arquivo `index.html` direto no navegador (duplo clique ou
"Abrir com..."). Não precisa de internet nem instalar nada — as únicas
chamadas externas são as fontes do Google Fonts (Fraunces/Inter) e, se
configurada, a sincronização com a nuvem.

## Sincronização entre os dois (Firebase, opcional)

Por padrão, cada navegador/aparelho guarda seus próprios dados
(`localStorage`) — o que um edita não aparece automaticamente pro outro. Pra
isso acontecer de verdade (em tempo real, nos dois aparelhos), o site já vem
preparado pra usar o **Firebase** (gratuito, do Google). É só configurar uma
vez:

1. Acesse **https://console.firebase.google.com** e crie um projeto novo
   (gratuito, plano Spark).
2. No menu lateral, vá em **Build → Authentication** → aba "Sign-in method" →
   ative **E-mail/senha**.
3. Ainda em Authentication, aba **Users**, clique em "Add user" e cadastre
   **duas contas** (uma pro Argeu, outra pra Mayara — pode usar os e-mails de
   vocês e uma senha à escolha).
4. No menu lateral, vá em **Build → Firestore Database** → "Create database" →
   escolha uma região próxima → inicie em modo produção.
5. Na aba **Rules** do Firestore, substitua o conteúdo por:
   ```
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /{document=**} {
         allow read, write: if request.auth != null;
       }
     }
   }
   ```
   Isso garante que só quem estiver logado com uma das duas contas criadas
   no passo 3 consegue ler ou escrever os dados.
6. Volte pra tela inicial do projeto (ícone de engrenagem → "Project settings")
   → em "Your apps", clique no ícone `</>` (Web) → registre um app (não
   precisa de Firebase Hosting) → copie o objeto `firebaseConfig` que
   aparece.
7. Abra o `index.html` neste repositório e cole os valores copiados no topo
   do `<script id="mainjs">`, no bloco `FIREBASE_CONFIG` (substituindo cada
   `"COLOQUE_AQUI"`). Faça commit e push.

Depois disso, ao abrir o site aparecerá uma tela de login — cada um entra
com sua conta (criada no passo 3) e os dados passam a sincronizar sozinhos
entre os dois aparelhos. Quem preferir pode clicar em "Continuar sem
sincronizar" pra usar só localmente naquele aparelho.

## Como publicar como site (opcional)

Pra ter um link público e acessar de qualquer lugar/dispositivo:

1. Vá em **Settings → Pages** neste repositório no GitHub.
2. Em "Source", selecione **Deploy from a branch**, a branch `main` e a
   pasta `/ (root)` → **Save**.
3. Confirme que aparece a faixa verde "Your site is live at...". O primeiro
   deploy pode levar alguns minutos. A URL fica assim:
   `https://<usuário>.github.io/<repositório>/`.

Sem a sincronização via Firebase configurada, cada dispositivo/navegador
guarda seu próprio progresso — use o botão "Baixar página" pra levar os
dados de um lugar pro outro nesse caso.
