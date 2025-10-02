-- Script SQL para configuração do Supabase
-- Execute este script no SQL Editor do Supabase

-- 1. Criar a tabela de estudantes
CREATE TABLE IF NOT EXISTS public.students (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL UNIQUE REFERENCES auth.users(id) ON DELETE CASCADE,
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    course TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- 2. Habilitar Row Level Security (RLS)
ALTER TABLE public.students ENABLE ROW LEVEL SECURITY;

-- 3. Criar políticas de segurança

-- Permitir que usuários vejam apenas seu próprio perfil
CREATE POLICY "Users can view own profile"
ON public.students
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

-- Permitir que usuários atualizem apenas seu próprio perfil
CREATE POLICY "Users can update own profile"
ON public.students
FOR UPDATE
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

-- Permitir inserção para novos usuários (usado durante o cadastro)
CREATE POLICY "Users can insert own profile"
ON public.students
FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);

-- 4. Criar índice para melhor performance
CREATE INDEX IF NOT EXISTS students_user_id_idx ON public.students(user_id);

-- 5. Comentários para documentação
COMMENT ON TABLE public.students IS 'Tabela de perfis de estudantes';
COMMENT ON COLUMN public.students.user_id IS 'Referência ao usuário autenticado';
COMMENT ON COLUMN public.students.full_name IS 'Nome completo do estudante';
COMMENT ON COLUMN public.students.email IS 'Email do estudante (copiado do auth)';
COMMENT ON COLUMN public.students.course IS 'Curso em que o estudante está matriculado';
