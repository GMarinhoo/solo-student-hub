# Guia de Configuração - Student Portal

Este guia detalha como configurar o projeto do zero.

## 1. Pré-requisitos

- Node.js 18+ e npm instalados
- Conta no Supabase (gratuita)

## 2. Configuração do Supabase

### 2.1. Criar Projeto

1. Acesse [supabase.com](https://supabase.com)
2. Crie uma nova conta ou faça login
3. Clique em "New Project"
4. Preencha:
   - **Name**: student-portal (ou nome de sua preferência)
   - **Database Password**: Escolha uma senha forte
   - **Region**: Selecione a região mais próxima
5. Aguarde a criação do projeto (1-2 minutos)

### 2.2. Executar Script SQL

1. No painel do Supabase, vá em **SQL Editor**
2. Clique em **New Query**
3. Copie todo o conteúdo do arquivo `supabase-setup.sql`
4. Cole no editor e clique em **Run**
5. Verifique se todas as queries foram executadas com sucesso

### 2.3. Obter Credenciais

1. No painel do Supabase, vá em **Settings** > **API**
2. Copie:
   - **Project URL** (ex: `https://xxxxx.supabase.co`)
   - **anon/public key** (chave longa começando com `eyJ...`)

## 3. Configuração do Projeto

### 3.1. Instalar Dependências

```bash
npm install
```

### 3.2. Configurar Variáveis de Ambiente

1. Copie o arquivo de exemplo:
   ```bash
   cp .env.local.example .env.local
   ```

2. Edite `.env.local` e preencha com suas credenciais do Supabase:
   ```
   VITE_SUPABASE_URL=https://seu-projeto.supabase.co
   VITE_SUPABASE_ANON_KEY=sua-chave-aqui
   ```

### 3.3. Iniciar o Servidor de Desenvolvimento

```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:8080`

## 4. Testando a Aplicação

### 4.1. Criar Primeira Conta

1. Acesse `http://localhost:8080/login`
2. Clique na aba "Cadastro"
3. Preencha:
   - Nome Completo
   - Curso
   - Email
   - Senha (mínimo 6 caracteres)
4. Clique em "Criar Conta"

### 4.2. Desabilitar Confirmação de Email (Opcional - Apenas para Desenvolvimento)

Por padrão, o Supabase requer confirmação de email. Para testar mais rapidamente:

1. No Supabase, vá em **Authentication** > **Providers** > **Email**
2. Desative "Confirm email"
3. Salve as alterações

**IMPORTANTE**: Reative essa opção em produção!

### 4.3. Testar Funcionalidades

Após fazer login:
- ✅ Visualizar seu perfil no dashboard
- ✅ Editar nome completo e curso
- ✅ Fazer logout
- ✅ Fazer login novamente

## 5. Estrutura do Projeto

```
src/
├── components/          # Componentes React
│   ├── ui/             # Componentes shadcn/ui
│   ├── Navbar.tsx      # Barra de navegação
│   ├── ProfileCard.tsx # Cartão de perfil
│   └── EditProfileDialog.tsx # Modal de edição
├── contexts/           # Contextos React
│   └── AuthContext.tsx # Gerenciamento de autenticação
├── lib/                # Configurações
│   └── supabase.ts     # Cliente Supabase
├── pages/              # Páginas da aplicação
│   ├── AuthPage.tsx    # Login/Cadastro
│   ├── Dashboard.tsx   # Dashboard do aluno
│   └── NotFound.tsx    # Página 404
├── types/              # Tipos TypeScript
│   └── student.ts      # Interface Student
└── App.tsx             # Componente raiz
```

## 6. Segurança

### Row Level Security (RLS)

O projeto implementa RLS no Supabase, garantindo que:
- Cada aluno vê apenas seu próprio perfil
- Cada aluno só pode editar seu próprio perfil
- Não há acesso aos dados de outros alunos

### Políticas Implementadas

- **SELECT**: `auth.uid() = user_id`
- **UPDATE**: `auth.uid() = user_id`
- **INSERT**: `auth.uid() = user_id`

## 7. Solução de Problemas

### Erro: "Missing Supabase environment variables"

- Verifique se o arquivo `.env.local` existe
- Confirme que as variáveis estão corretas
- Reinicie o servidor de desenvolvimento

### Erro ao fazer login: "Invalid credentials"

- Verifique se a senha está correta
- Confirme que o email foi confirmado (ou desabilite confirmação)

### Perfil não aparece após cadastro

- Verifique se o script SQL foi executado corretamente
- Confirme que as políticas RLS estão ativas
- Olhe o console do navegador para erros

### Erro de CORS

- Certifique-se de estar usando as credenciais corretas
- Verifique se o projeto Supabase está ativo

## 8. Próximos Passos

Após a configuração básica, você pode:
- Adicionar validação de formulários com Zod
- Implementar upload de foto de perfil
- Adicionar mais campos ao perfil (telefone, data de nascimento, etc.)
- Criar dashboard com estatísticas
- Implementar tema escuro/claro

## 9. Deploy em Produção

### 9.1. Build

```bash
npm run build
```

### 9.2. Configurar Domínio no Supabase

1. Em **Authentication** > **URL Configuration**
2. Adicione seu domínio em **Site URL**
3. Adicione redirect URLs conforme necessário

### 9.3. Reativar Confirmação de Email

Em produção, sempre mantenha "Confirm email" ativado para segurança!

## Suporte

Para dúvidas ou problemas:
- Documentação do Supabase: [supabase.com/docs](https://supabase.com/docs)
- Documentação do React: [react.dev](https://react.dev)
- Documentação do Tailwind: [tailwindcss.com](https://tailwindcss.com)
