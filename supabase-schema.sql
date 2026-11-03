create table if not exists public.resultados_exercicios (
  id bigint generated always as identity primary key,
  question_id text not null check (question_id in (
    'sistema-login-academico',
    'controle-temperatura-servidor',
    'comentarios-rede-social',
    'loja-virtual-eletronicos',
    'forca-senha',
    'luminosidade-inteligente',
    'pesquisa-filmes',
    'sistema-bancario',
    'modo-escuro',
    'controle-estoque',
    'plataforma-cursos-online',
    'sistema-avaliacao',
    'calculadora-imc',
    'upload-arquivos',
    'sistema-votacao',
    'sistema-notificacoes',
    'semaforo-inteligente',
    'sistema-agenda',
    'conversao-monetaria',
    'painel-controle-musica'
  )),
  resultado jsonb not null,
  created_at timestamptz not null default now()
);

alter table public.resultados_exercicios enable row level security;

drop policy if exists "Permitir registro anonimo de resultados"
  on public.resultados_exercicios;

create policy "Permitir registro anonimo de resultados"
  on public.resultados_exercicios
  for insert
  to anon
  with check (true);

grant insert on public.resultados_exercicios to anon;
grant usage, select on sequence public.resultados_exercicios_id_seq to anon;
