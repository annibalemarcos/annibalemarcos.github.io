# 🚀 Guia Completo: GitHub Actions

## 📋 Checklist Antes de Começar

- [ ] Ter uma conta no GitHub
- [ ] Ter Git instalado no computador
- [ ] Adicionar os PDFs na pasta `public/`
- [ ] Editar `vite.config.ts` com o nome correto do repositório

---

## 🎯 Passo a Passo Completo

### **PASSO 1: Criar Repositório no GitHub**

1. Acesse https://github.com/new
2. Preencha:
   - **Repository name:** `portfolio` (ou outro nome que preferir)
   - **Description:** "Meu site pessoal"
   - **Public** (deixe marcado)
   - ✅ **Add a README file** (deixe DESMARCADO)
3. Clique em **Create repository**

📝 **Anote o nome que você escolheu!** Vamos usar no próximo passo.

---

### **PASSO 2: Editar `vite.config.ts`**

1. Abra o arquivo `vite.config.ts`
2. Na linha 9, altere:

```typescript
// ANTES:
base: '/nome-do-repositorio/',

// DEPOIS (exemplo se o repo é "portfolio"):
base: '/portfolio/',

// OU, se o repo for seu-usuario.github.io:
base: '/',
```

⚠️ **Importante:** O nome deve ser exatamente igual ao nome do repositório!

---

### **PASSO 3: Adicionar PDFs**

1. Coloque seus arquivos PDF na pasta `public/`:
   - `public/Marcos_Annibale_CV_PT.pdf`
   - `public/Marcos_Annibale_CV_EN.pdf`

2. Verifique se os arquivos estão lá:
```bash
ls public/
# Deve mostrar: Marcos_Annibale_CV_PT.pdf  Marcos_Annibale_CV_EN.pdf
```

---

### **PASSO 4: Inicializar Git e Fazer Push**

Abra o terminal na pasta do projeto e execute:

```bash
# 1. Inicializar repositório Git (se ainda não foi feito)
git init

# 2. Adicionar todos os arquivos
git add .

# 3. Fazer o primeiro commit
git commit -m "Configuração inicial do site"

# 4. Adicionar repositório remoto
# SUBSTITUA "seu-usuario" e "portfolio" pelos seus dados!
git remote add origin https://github.com/seu-usuario/portfolio.git

# 5. Renomear branch para main (se necessário)
git branch -M main

# 6. Fazer push
git push -u origin main
```

💡 **Dica:** O GitHub vai pedir suas credenciais. Use um Personal Access Token se necessário.

---

### **PASSO 5: Configurar GitHub Pages**

Agora vamos ativar o GitHub Actions:

1. **Vá para seu repositório no GitHub**
   - URL: `https://github.com/seu-usuario/nome-do-repo`

2. **Clique em "Settings"** (última aba no menu superior)

3. **No menu lateral esquerdo, clique em "Pages"**

4. **Em "Build and deployment":**
   - **Source:** Selecione **"GitHub Actions"**
   - ✅ Pronto! Não precisa salvar, é automático.

---

### **PASSO 6: Configurar Permissões do Workflow**

1. Ainda em **Settings**, clique em **"Actions"** no menu esquerdo
2. Clique em **"General"**
3. Role até **"Workflow permissions"**
4. Selecione: **"Read and write permissions"**
5. ✅ Marque: **"Allow GitHub Actions to create and approve pull requests"**
6. Clique em **"Save"**

---

### **PASSO 7: Executar o Deploy**

Agora o workflow vai executar automaticamente!

1. **Vá para a aba "Actions"** no seu repositório
2. Você verá o workflow **"Deploy to GitHub Pages"** rodando
3. Aguarde finalizar (leva 1-2 minutos)
4. ✅ Quando aparecer um ✅ verde, está pronto!

---

### **PASSO 8: Acessar Seu Site**

Seu site estará disponível em:

```
https://seu-usuario.github.io/nome-do-repo/
```

**Exemplo:**
- Se seu usuário é `annibalemarcos` e repo é `portfolio`:
- URL: `https://annibalemarcos.github.io/portfolio/`

---

## 🔄 Atualizações Futuras

Agora, **toda vez que você fizer push**, o site atualiza automaticamente!

```bash
# 1. Faça suas alterações no código

# 2. Commit
git add .
git commit -m "Atualização do conteúdo"

# 3. Push
git push

# 4. Aguarde 1-2 minutos
# O GitHub Actions faz deploy automaticamente! 🎉
```

---

## 🐛 Troubleshooting

### ❌ Problema: Workflow falhou

**Solução:**
1. Vá em Settings > Actions > General
2. Em "Workflow permissions", selecione "Read and write permissions"
3. Salve e execute novamente

### ❌ Problema: Site mostra 404

**Solução:**
1. Verifique se o `base` no `vite.config.ts` está correto
2. Deve ser: `base: '/nome-exato-do-repo/'`
3. Se estiver errado, corrija, commit e push novamente

### ❌ Problema: PDFs não encontrados

**Solução:**
1. Certifique-se que os PDFs estão em `public/`
2. Commit e push novamente:
```bash
git add public/
git commit -m "Adicionar PDFs"
git push
```

### ❌ Problema: CSS não carrega

**Solução:**
1. Verifique o `base` no `vite.config.ts`
2. Deve ter `/` no início e no final: `base: '/portfolio/'`

---

## 📊 Como Ver os Logs do Deploy

1. Vá em **Actions** no GitHub
2. Clique no workflow mais recente
3. Clique em **build** ou **deploy** para ver os detalhes
4. Se houver erro, aparecerá em vermelho

---

## ✅ Checklist Final

- [ ] Repositório criado no GitHub
- [ ] `vite.config.ts` configurado com nome correto
- [ ] PDFs adicionados em `public/`
- [ ] Código enviado para GitHub (`git push`)
- [ ] GitHub Pages configurado para "GitHub Actions"
- [ ] Workflow permissions configuradas
- [ ] Deploy executado com sucesso
- [ ] Site acessível em `https://usuario.github.io/repo/`

---

## 🎉 Pronto!

Seu site está online e será atualizado automaticamente a cada push!

**Próximos passos:**
- Compartilhe o link do seu site
- Atualize seu LinkedIn com a URL
- Continue desenvolvendo e fazendo commits

---

💡 **Dica Pro:** Adicione um domínio customizado em Settings > Pages > Custom domain
