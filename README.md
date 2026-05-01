# Xavier Dev Site

Site institucional da Xavier Dev.

## Configuração Necessária

Para que o formulário de contato funcione corretamente, as seguintes variáveis/secrets precisam ser configuradas:

### GitHub Secrets
Estas variáveis são necessárias no GitHub para o processo de build e deploy:
- `VITE_SUPABASE_URL`: URL do seu projeto Supabase.
- `VITE_SUPABASE_ANON_KEY`: Chave anônima (anon key) do seu projeto Supabase.
- `SFTP_SERVER`, `SFTP_PORT`, `SFTP_USERNAME`, `SFTP_PASSWORD`, `SFTP_REMOTE_PATH`: Dados para o deploy via SFTP.

### Supabase Secrets
Esta variável deve ser configurada no Supabase para o envio de e-mails:
- `RESEND_API_KEY`: Sua API Key do [Resend](https://resend.com/).

Para configurar no Supabase, use o CLI:
```bash
supabase secrets set RESEND_API_KEY=sua_chave_aqui
```
Ou através do painel do Supabase em Edge Functions -> Secrets.
