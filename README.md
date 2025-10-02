# Student Portal - Sistema de Gestão de Perfil de Aluno

Portal moderno e seguro para gestão individual de perfil acadêmico. Cada aluno pode se cadastrar, fazer login e gerenciar suas próprias informações.

## 🚀 Funcionalidades

- ✅ **Autenticação Completa**: Cadastro e login com email/senha
- ✅ **Gestão de Perfil**: Visualização e edição de informações pessoais
- ✅ **Segurança**: Row Level Security (RLS) no Supabase
- ✅ **UI Moderna**: Interface responsiva com Tailwind CSS
- ✅ **Feedback Visual**: Notificações toast para ações do usuário

## 🛠️ Tecnologias

- **Frontend**: React 18 + TypeScript + Vite
- **Estilização**: Tailwind CSS + shadcn/ui
- **Backend**: Supabase (PostgreSQL + Auth)
- **Gerenciamento de Estado**: React Context API

## 📋 Pré-requisitos

- Node.js 18+
- Conta no Supabase (gratuita)

## ⚙️ Configuração

Siga o guia completo em **[SETUP.md](./SETUP.md)** para instruções detalhadas.

### Resumo Rápido:

1. **Clone e instale dependências**
   ```bash
   npm install
   ```

2. **Configure o Supabase**
   - Crie um projeto no [Supabase](https://supabase.com)
   - Execute o script `supabase-setup.sql` no SQL Editor
   - Copie as credenciais (URL e anon key)

3. **Configure variáveis de ambiente**
   ```bash
   cp .env.local.example .env.local
   # Edite .env.local com suas credenciais
   ```

4. **Inicie o servidor**
   ```bash
   npm run dev
   ```

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Navbar.tsx
│   ├── ProfileCard.tsx
│   └── EditProfileDialog.tsx
├── contexts/           # Contextos React
│   └── AuthContext.tsx
├── pages/              # Páginas da aplicação
│   ├── AuthPage.tsx    # Login/Cadastro
│   └── Dashboard.tsx   # Dashboard do aluno
├── types/              # Tipos TypeScript
│   └── student.ts
└── lib/                # Configurações
    └── supabase.ts
```

## 🔒 Segurança

O projeto implementa **Row Level Security (RLS)** no Supabase, garantindo que:
- Cada aluno acessa apenas seu próprio perfil
- Políticas impedem acesso não autorizado
- Senhas são gerenciadas pelo Supabase Auth

## 🎨 Design

- **Paleta**: Gradiente azul → roxo
- **Tipografia**: Inter
- **Componentes**: shadcn/ui customizados
- **Efeitos**: Glassmorphism e sombras suaves

## 📚 Documentação Adicional

- [SETUP.md](./SETUP.md) - Guia completo de configuração
- [supabase-setup.sql](./supabase-setup.sql) - Script SQL para o banco
- [.env.local.example](./.env.local.example) - Exemplo de variáveis de ambiente
