# ✅ Checklist Rápido - GitHub Actions

## 🎯 Ordem das Ações

### 1. ANTES de fazer qualquer coisa:

```bash
# Edite vite.config.ts linha 9:
base: '/seu-repositorio/',
# (substitua 'seu-repositorio' pelo nome real)
```

### 2. Adicione os PDFs:
```
public/Marcos_Annibale_CV_PT.pdf ✅
public/Marcos_Annibale_CV_EN.pdf ✅
```

---

### 3. Crie repositório no GitHub:
- [ ] Ir em https://github.com/new
- [ ] Nome: _________________ (anote aqui!)
- [ ] Public
- [ ] Create repository

---

### 4. Comandos no Terminal:

```bash
git init
git add .
git commit -m "Configuração inicial"
git remote add origin https://github.com/SEU-USUARIO/SEU-REPO.git
git branch -M main
git push -u origin main
```

---

### 5. No GitHub (site):

**Settings > Pages:**
- [ ] Source: **GitHub Actions** ✅

**Settings > Actions > General:**
- [ ] Workflow permissions: **Read and write** ✅
- [ ] Allow GitHub Actions to create PRs ✅
- [ ] Save ✅

---

### 6. Verificar:

**Actions (aba no GitHub):**
- [ ] Workflow "Deploy to GitHub Pages" rodando ⏳
- [ ] Workflow finalizado com ✅ verde
- [ ] Site online em: `https://SEU-USUARIO.github.io/SEU-REPO/`

---

## 🚨 Erros Comuns

| Erro | Solução |
|------|---------|
| Site 404 | Verificar `base` no vite.config.ts |
| PDFs não encontrados | Colocar em `public/` e dar push |
| Workflow falha | Settings > Actions > Read and write |
| CSS não carrega | Verificar `base: '/repo/'` com barras |

---

## 🔄 Próximos Deploys

```bash
# Só fazer isso:
git add .
git commit -m "Atualização"
git push

# Deploy automático! 🎉
```

---

**Dúvidas?** Veja o guia completo em `GITHUB_ACTIONS_SETUP.md`
