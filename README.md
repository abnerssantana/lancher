# Lancher - Cantina Digital para Escolas

Sistema de pedidos online para cantinas escolares. Pais fazem pedidos pelo celular, pagam via Pix e os filhos só retiram na cantina!

## 🚀 Tecnologias

- **HTML5** - Estrutura semântica
- **Bootstrap 5.3** - Framework CSS responsivo (via NPM)
- **Font Awesome 6.5** - Biblioteca de ícones (via NPM)
- **Google Fonts** - Nunito + Poppins

## 📁 Estrutura do Projeto

```
lancher/
├── public/
│   ├── index.html          # Página principal
│   ├── css/
│   │   └── styles.css      # Estilos customizados
│   ├── js/
│   │   └── main.js         # JavaScript customizado
│   └── vendor/             # Bibliotecas (gerado pelo build)
│       ├── bootstrap/
│       └── fontawesome/
├── package.json            # Dependências NPM
├── vercel.json             # Configuração Vercel
├── .gitignore              # Arquivos ignorados
└── README.md               # Documentação
```

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Build - copia Bootstrap e Font Awesome para public/vendor
npm run build

# Executar localmente
npm start
```

O servidor iniciará em `http://localhost:3000`

## 🔧 Scripts Disponíveis

| Script | Descrição |
|--------|-----------|
| `npm run build` | Copia Bootstrap e Font Awesome para pasta vendor |
| `npm start` | Executa build e inicia servidor local |
| `npm run dev` | Inicia servidor sem build (requer build prévio) |

## 🌐 Deploy na Vercel

### Opção 1: Via CLI

```bash
# Instalar Vercel CLI
npm install -g vercel

# Build local
npm run build

# Deploy
vercel
```

### Opção 2: Via GitHub

1. Faça push do projeto para GitHub
2. Acesse [vercel.com](https://vercel.com)
3. Importe o repositório
4. Configure o Build Command: `npm run build`
5. Configure o Output Directory: `public`
6. Clique em Deploy

## 🎨 Componentes

### CSS (`public/css/styles.css`)
- Variáveis CSS customizadas
- Estilos da navbar
- Hero section com animações
- Cards de features
- Seções de conteúdo
- Footer responsivo
- Media queries

### JavaScript (`public/js/main.js`)
- Efeito de scroll na navbar
- Smooth scroll para âncoras
- Animações de scroll (Intersection Observer)
- Utilitários (debounce, formatação de moeda)

## 📄 Licença

MIT License - sinta-se livre para usar e modificar.
