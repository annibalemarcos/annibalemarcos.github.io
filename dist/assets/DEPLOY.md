# 🚀 Deploy no GitHub Pages

## 📋 Pré-requisitos

1. Repositório no GitHub
2. Node.js e pnpm instalados localmente

## ⚙️ Configuração Inicial

### 1. Configurar o `vite.config.ts`

No arquivo `vite.config.ts`, ajuste a propriedade `base`:

```typescript
// Se o repositório for: https://github.com/usuario/meu-site
base: '/meu-site/',

// Se for seu site principal (usuario.github.io), use:
base: '/',
```

### 2. Adicionar arquivos PDFs

Certifique-se de que seus currículos estão na pasta `public/`:
- `public/Marcos_Annibale_CV_PT.pdf`
- `public/Marcos_Annibale_CV_EN.pdf`

---

## 🎯 Opção 1: Deploy Manual

### Passo 1: Build e Deploy
```bash
pnpm deploy
```

Esse comando irá:
1. Fazer build do projeto (`pnpm build`)
2. Publicar a pasta `dist/` no branch `gh-pages`

### Passo 2: Configurar GitHub Pages

1. Vá em **Settings** > **Pages** no seu repositório
2. Em **Source**, selecione **Deploy from a branch**
3. Em **Branch**, escolha `gh-pages` e pasta `/ (root)`
4. Clique em **Save**

✅ Pronto! Seu site estará disponível em: `https://seu-usuario.github.io/nome-do-repo/`

---

## 🤖 Opção 2: Deploy Automático com GitHub Actions (Recomendado)

### Passo 1: Configurar GitHub Pages

1. Vá em **Settings** > **Pages** no seu repositório
2. Em **Source**, selecione **GitHub Actions**

### Passo 2: Push para o GitHub

```bash
git add .
git commit -m "Configuração inicial para GitHub Pages"
git push origin main
```

### Passo 3: Verificar Deploy

1. Vá em **Actions** no seu repositório
2. Aguarde o workflow "Deploy to GitHub Pages" completar
3. Seu site estará disponível em: `https://seu-usuario.github.io/nome-do-repo/`

---

## 🔄 Atualizações Futuras

Com GitHub Actions configurado, **toda vez que você fizer push** para a branch `main`, o site será automaticamente atualizado!

```bash
# Faça suas alterações
git add .
git commit -m "Atualização do site"
git push

# O deploy acontece automaticamente! 🎉
```

---

## 🐛 Troubleshooting

### Problema: Site não carrega (erro 404)

**Solução:** Verifique se o `base` no `vite.config.ts` está correto:
- Para `usuario.github.io` → `base: '/'`
- Para `usuario.github.io/repo` → `base: '/repo/'`

### Problema: PDFs não encontrados

**Solução:** Certifique-se de que os PDFs estão na pasta `public/` antes de fazer build.

### Problema: Workflow do GitHub Actions falhando

**Solução:** 
1. Vá em **Settings** > **Actions** > **General**
2. Em **Workflow permissions**, selecione **Read and write permissions**
3. Salve e execute o workflow novamente

---

## 📝 Comandos Úteis

```bash
# Build local para testar
pnpm build

# Preview do build local
pnpm preview

# Deploy manual
pnpm deploy
```

---

## 🎨 Customização

Para alterar o nome do site, edite o arquivo `package.json`:

```json
{
  "name": "meu-portfolio",
  "version": "1.0.0"
}
```

---

Feito com ❤️ usando React + Vite + Tailwind CSS
