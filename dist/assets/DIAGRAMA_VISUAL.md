# 📊 Diagrama Visual: Como Funciona

## 🎯 Resposta Direta à Sua Pergunta:

### ❌ VOCÊ **NÃO** ESCOLHE WORKFLOW NO GITHUB

### ✅ O WORKFLOW JÁ EXISTE NO SEU CÓDIGO

```
Seu Projeto/
├── .github/
│   └── workflows/
│       └── deploy.yml  ← JÁ ESTÁ AQUI! Eu criei para você!
├── src/
├── public/
└── ...
```

Quando você faz `git push`, o GitHub **automaticamente** encontra este arquivo e executa!

---

## 🔄 Fluxo Completo Ilustrado

```
┌─────────────────────────────────────────────────────────────┐
│  SEU COMPUTADOR                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  1. Você edita vite.config.ts                              │
│     base: '/portfolio/'                                     │
│                                                             │
│  2. Você adiciona PDFs em public/                          │
│                                                             │
│  3. Você executa:                                           │
│     $ git add .                                             │
│     $ git commit -m "Deploy"                                │
│     $ git push                                              │
│                                                             │
└──────────────────┬──────────────────────────────────────────┘
                   │
                   │  Código sobe para o GitHub
                   ▼
┌─────────────────────────────────────────────────────────────┐
│  GITHUB (Servidor)                                          │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  4. GitHub recebe seu código                                │
│                                                             │
│  5. GitHub DETECTA automaticamente:                         │
│     .github/workflows/deploy.yml  ← Este arquivo!          │
│                                                             │
│  6. GitHub Actions EXECUTA o workflow:                      │
│     ┌──────────────────────────────┐                       │
│     │  ⚙️  Install dependencies    │                       │
│     │  🔨 Build (pnpm build)       │                       │
│     │  📦 Upload dist/             │                       │
│     │  🚀 Deploy to Pages          │                       │
│     └──────────────────────────────┘                       │
│                                                             │
│  7. Site publicado! ✅                                      │
│                                                             │
└──────────────────┬──────────────────────────────────────────┘
                   │
                   │  Site fica disponível
                   ▼
┌─────────────────────────────────────────────────────────────┐
│  SEU SITE ONLINE                                            │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  https://seu-usuario.github.io/portfolio/                   │
│                                                             │
│  ✅ Funciona!                                               │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## 🎬 Onde Você Configura o Que?

### NO SEU CÓDIGO (Antes do Push):

```
✏️  vite.config.ts (linha 9)
    base: '/portfolio/',
    
📁  public/
    ├── Marcos_Annibale_CV_PT.pdf
    └── Marcos_Annibale_CV_EN.pdf

❌ NÃO PRECISA TOCAR:
    .github/workflows/deploy.yml  (já está pronto!)
```

---

### NO GITHUB (Depois do Push):

```
🌐 Settings > Pages
   Source: GitHub Actions  ← ESCOLHER AQUI (só uma vez)
   
🔐 Settings > Actions > General
   Workflow permissions: Read and write  ← MARCAR AQUI (só uma vez)
   
✅ Actions (aba)
   Verificar se workflow executou  ← OLHAR AQUI
```

---

## 📍 Onde Está Cada Coisa?

### Estrutura do seu Projeto:

```
meu-site/
│
├── .github/                    ← Pasta do GitHub Actions
│   └── workflows/
│       └── deploy.yml          ← WORKFLOW (já existe!)
│
├── public/                     ← Arquivos públicos
│   ├── Marcos_Annibale_CV_PT.pdf  ← VOCÊ ADICIONA
│   └── Marcos_Annibale_CV_EN.pdf  ← VOCÊ ADICIONA
│
├── src/
│   ├── app/
│   │   └── App.tsx
│   └── styles/
│
├── vite.config.ts              ← VOCÊ EDITA (linha 9)
├── package.json
└── ...
```

---

## 🤔 Perguntas e Respostas

### P: "Onde eu escolho o workflow?"
**R:** Você **não escolhe**! O arquivo `.github/workflows/deploy.yml` já existe no seu código.

### P: "Preciso criar o workflow?"
**R:** **NÃO!** Eu já criei para você!

### P: "Como o GitHub sabe qual workflow usar?"
**R:** Quando você faz `git push`, o GitHub **automaticamente** procura por arquivos em `.github/workflows/` e executa!

### P: "Preciso configurar algo no Actions?"
**R:** Só as **permissões** (Read and write). O resto é automático!

### P: "E se eu quiser mudar o workflow?"
**R:** Edite `.github/workflows/deploy.yml` no seu código e faça push!

---

## 🎯 Ordem EXATA dos Passos

```
[1] Criar repositório no GitHub
      ↓
[2] Editar vite.config.ts (base: '/portfolio/')
      ↓
[3] Adicionar PDFs em public/
      ↓
[4] git push (enviar código)
      ↓
[5] GitHub.com → Settings → Pages → Source: GitHub Actions
      ↓
[6] GitHub.com → Settings → Actions → Read and write
      ↓
[7] GitHub.com → Actions (verificar execução)
      ↓
[8] Acessar: https://usuario.github.io/portfolio/
```

---

## 💡 Analogia para Entender

Imagine que o workflow é uma **receita de bolo**:

```
📄 .github/workflows/deploy.yml = RECEITA DO BOLO
                                   (instruções escritas)

🏗️  GitHub Actions = ROBÔ COZINHEIRO
                     (executa a receita automaticamente)

🎂 Site publicado = BOLO PRONTO
                    (resultado final)
```

**Você:**
- ✅ Escreve a receita (já fiz isso pra você!)
- ✅ Envia para o GitHub (git push)
- ✅ Liga o robô (Settings > Pages > GitHub Actions)

**GitHub:**
- ✅ Lê a receita automaticamente
- ✅ Faz o bolo (build e deploy)
- ✅ Serve o bolo (site online)

---

## ✅ Resumo Final

### O que o workflow faz (deploy.yml):

```yaml
1. Quando você faz push...
2. GitHub instala pnpm
3. GitHub roda: pnpm install
4. GitHub roda: pnpm build
5. GitHub publica pasta dist/
6. Site fica online!
```

### O que VOCÊ faz:

```bash
1. Editar vite.config.ts
2. Adicionar PDFs
3. git push
4. Configurar Pages (uma vez)
5. Configurar permissões (uma vez)
```

### O que você NÃO faz:

```
❌ Escolher workflow no GitHub
❌ Criar arquivo de workflow
❌ Fazer build manualmente
❌ Fazer upload de arquivos
```

---

## 🎊 Agora Ficou Claro?

O workflow **já existe** no seu código!

Você só precisa:
1. Fazer push
2. Ativar GitHub Pages (Settings)
3. Pronto!

O GitHub Actions faz todo o resto automaticamente! 🚀
