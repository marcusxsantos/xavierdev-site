# Xavier Dev Site

Site institucional da Xavier Dev.

## Configuração Necessária

Para que o formulário de contato envie as mensagens diretamente para o seu e-mail através do **Formspree**:

### 1. Criar o formulário no Formspree
1. Acesse [formspree.io](https://formspree.io/) e crie uma conta (se ainda não tiver).
2. Crie um novo formulário (New Form) e defina o e-mail de destino.
3. Copie o ID do formulário gerado (ex: `xpzgkqwe` ou o link `https://formspree.io/f/xpzgkqwe`).

### 2. Configuração Local (`.env`)
No arquivo `.env` na raiz do projeto:
```env
VITE_FORMSPREE_ID=seu_id_aqui
```

### 3. GitHub Secrets (Para Deploy em Produção)
Se estiver utilizando o GitHub Actions para deploy:
- `VITE_FORMSPREE_ID`: O ID do seu formulário no Formspree.
- `SFTP_SERVER`, `SFTP_PORT`, `SFTP_USERNAME`, `SFTP_PASSWORD`, `SFTP_REMOTE_PATH`: Credenciais para deploy via SFTP.

