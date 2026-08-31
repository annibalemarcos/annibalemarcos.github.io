# 🎯 Guia Visual: Configurar GitHub Actions (Passo a Passo)

## ⚠️ IMPORTANTE: Você NÃO escolhe workflow!

O workflow **JÁ ESTÁ CRIADO** no arquivo `.github/workflows/deploy.yml`

Quando você der push, o GitHub detecta automaticamente esse arquivo e executa!

---

## 📋 O Que Você VAI Fazer

### ANTES de começar:

**1. Edite `vite.config.ts` (linha 9):**
```typescript
base: '/nome-do-repositorio/',
```
👆 Substitua por: `base: '/portfolio/',` (ou o nome que você escolher)

**2. Adicione seus PDFs:**
- Coloque na pasta `public/`:
  - `Marcos_Annibale_CV_PT.pdf`
  - `Marcos_Annibale_CV_EN.pdf`

---

## 🚀 Passo a Passo EXATO

### PASSO 1: Criar Repositório no GitHub

1. **Abra:** https://github.com/new

2. **Preencha:**
   ```
   Repository name: portfolio
   Description: Meu site pessoal
   Public: ✅ (marcado)
   Add a README file: ❌ (DESMARCADO - importante!)
   ```

3. **Clique:** `Create repository`

4. **ANOTE o nome do repositório!** Você vai usar no `vite.config.ts`

---

### PASSO 2: Configurar Git Local

**Abra o terminal na pasta do projeto e execute:**

```bash
# 1. Inicializar Git (se ainda não fez)
git init

# 2. Adicionar todos os arquivos
git add .

# 3. Fazer commit
git commit -m "Deploy inicial para GitHub Pages"

# 4. Adicionar o repositório remoto
# SUBSTITUA "seu-usuario" e "portfolio" pelos seus dados!
git remote add origin https://github.com/seu-usuario/portfolio.git

# 5. Renomear branch para main
git branch -M main

# 6. Fazer push (enviar código)
git push -u origin main
```

**O que vai acontecer:**
- ⏳ Git vai pedir suas credenciais do GitHub
- ⏳ Código será enviado
- ✅ Pronto! Código no GitHub

---

### PASSO 3: Configurar GitHub Pages (NO SITE DO GITHUB)

**Agora você vai no navegador:**

1. **Vá para:** `https://github.com/seu-usuario/portfolio`

2. **Clique na aba:** `Settings` (última opção do menu)

   ```
   < > Code    Issues    Pull requests    Actions    Projects    Wiki    Security    Insights    Settings
                                                                                                      ↑ AQUI
   ```

3. **No menu lateral ESQUERDO, clique em:** `Pages`

   ```
   General
   Access
   Moderation options
   Code and automation
   → Pages  ← CLIQUE AQUI
   Environments
   Actions
   ```

4. **Você verá uma seção "Build and deployment"**

5. **Em "Source", clique no dropdown e selecione:**
   ```
   ┌─────────────────────────┐
   │ Deploy from a branch    │
   │ ✅ GitHub Actions       │ ← SELECIONE ESTA
   └─────────────────────────┘
   ```

6. **PRONTO!** Não precisa clicar em "Save", é automático!

---

### PASSO 4: Configurar Permissões (AINDA EM SETTINGS)

**Ainda no Settings do repositório:**

1. **No menu lateral ESQUERDO, clique em:** `Actions`

   ```
   Pages
   → Actions  ← CLIQUE AQUI
      → General  ← DEPOIS CLIQUE AQUI
      Runners
   ```

2. **Role a página até encontrar:** `Workflow permissions`

3. **Selecione:**
   ```
   ○ Read repository contents and packages permissions
   ● Read and write permissions  ← SELECIONE ESTA
   
   ✅ Allow GitHub Actions to create and approve pull requests  ← MARQUE ESTA
   ```

4. **Clique em:** `Save`

---

### PASSO 5: Verificar o Deploy

**O deploy começa AUTOMATICAMENTE!**

1. **Vá para a aba:** `Actions` (no menu superior)

   ```
   < > Code    Issues    Pull requests    Actions    Projects
                                             ↑ AQUI
   ```

2. **Você verá:**
   ```
   All workflows
   
   🟡 Deploy to GitHub Pages  ← Em andamento (bolinha amarela)
   ```

3. **Clique no workflow** para ver detalhes

4. **Aguarde finalizar** (1-2 minutos)

5. **Quando aparecer ✅ verde:**
   ```
   ✅ Deploy to GitHub Pages  ← Sucesso!
   ```

---

### PASSO 6: Acessar Seu Site! 🎉

**Seu site estará em:**
```
https://seu-usuario.github.io/nome-do-repo/
```

**Exemplo:**
- Usuário: `annibalemarcos`
- Repositório: `portfolio`
- URL: `https://annibalemarcos.github.io/portfolio/`

---

## 🔍 Como Saber se Deu Certo?

### ✅ Sinais de Sucesso:

1. **Na aba Actions:**
   - Workflow com ✅ verde

2. **Na aba Settings > Pages:**
   - Mostra: "Your site is live at https://..."

3. **Ao acessar a URL:**
   - Seu site carrega normalmente!

---

## ❌ O Que PODE Dar Errado

### Problema 1: Workflow falha (❌ vermelho)

**Causa:** Permissões não configuradas

**Solução:**
1. Settings > Actions > General
2. Workflow permissions: **Read and write**
3. Save
4. Vá em Actions > Clique no workflow falhado > "Re-run all jobs"

---

### Problema 2: Site mostra 404

**Causa:** `base` errado no `vite.config.ts`

**Solução:**
1. Abra `vite.config.ts`
2. Linha 9 deve ser: `base: '/nome-exato-do-repo/',`
3. Commit e push:
   ```bash
   git add vite.config.ts
   git commit -m "Corrigir base path"
   git push
   ```

---

### Problema 3: CSS/Imagens não carregam

**Causa:** `base` sem barras ou errado

**Solução:**
- Deve ter `/` no início E no final
- ✅ Correto: `base: '/portfolio/',`
- ❌ Errado: `base: 'portfolio'`
- ❌ Errado: `base: '/portfolio'`
- ❌ Errado: `base: 'portfolio/'`

---

### Problema 4: PDFs não encontrados

**Causa:** PDFs não estão em `public/`

**Solução:**
1. Adicione PDFs em `public/`:
   - `public/Marcos_Annibale_CV_PT.pdf`
   - `public/Marcos_Annibale_CV_EN.pdf`
2. Commit e push:
   ```bash
   git add public/
   git commit -m "Adicionar PDFs"
   git push
   ```

---

## 🎓 Entendendo o que Acontece

### Quando você dá `git push`:

1. **Código vai para GitHub** ✅
2. **GitHub detecta** `.github/workflows/deploy.yml` ✅
3. **GitHub Actions executa:**
   - Instala dependências (pnpm install)
   - Faz build (pnpm build)
   - Publica pasta `dist/` no GitHub Pages
4. **Site fica disponível!** 🎉

### Você NÃO precisa:
- ❌ Escolher workflow no GitHub
- ❌ Criar arquivo de workflow
- ❌ Configurar nada no Actions manualmente
- ❌ Fazer build local

### Você SÓ precisa:
- ✅ Editar `vite.config.ts`
- ✅ Adicionar PDFs em `public/`
- ✅ Git push
- ✅ Configurar Pages e Permissões (uma vez só)

---

## 🔄 Próximas Atualizações

Depois que está configurado, é MUITO simples:

```bash
# 1. Faça alterações no código

# 2. Commit
git add .
git commit -m "Atualizar conteúdo"

# 3. Push
git push

# 4. Aguarde 1-2 minutos
# Deploy automático! 🚀
```

---

## 📊 Verificar Status do Deploy

**Para ver o que está acontecendo:**

1. Vá em **Actions**
2. Clique no workflow mais recente
3. Veja os logs:
   - **build** - Construindo o site
   - **deploy** - Publicando no GitHub Pages

---

## ✅ Checklist Completo

**Antes do Push:**
- [ ] `vite.config.ts` editado (linha 9)
- [ ] PDFs em `public/`
- [ ] Repositório criado no GitHub

**Comandos Git:**
- [ ] `git init`
- [ ] `git add .`
- [ ] `git commit -m "..."`
- [ ] `git remote add origin ...`
- [ ] `git push -u origin main`

**No GitHub (site):**
- [ ] Settings > Pages > Source: **GitHub Actions**
- [ ] Settings > Actions > General > **Read and write**
- [ ] Actions > Workflow executando
- [ ] Workflow finalizado com ✅

**Resultado:**
- [ ] Site online em `https://usuario.github.io/repo/`

---

## 🎉 Pronto!

Seu site está configurado para deploy automático!

**Dúvidas?** Releia este guia com calma, passo por passo.
