# Lamo Language Support

Suporte básico para a linguagem de programação **Lamo**.

## Funcionalidades

- **Destaque de Sintaxe**: Suporte para palavras-chave, strings, números e comentários.
- **Snippets**: Atalhos para declaração de funções, variáveis e estruturas de controle.
- **Configuração de Linguagem**: Fechamento automático de chaves e suporte a comentários.
- **Botão de Execução (Play)**: Botão no canto superior direito do editor para compilar e rodar o arquivo `.lamo` instantaneamente.

## Como Instalar

1. Copie a pasta `lamo-vscode` para o diretório de extensões do VS Code:
   - **Windows**: `%USERPROFILE%\.vscode\extensions`
   - **macOS/Linux**: `~/.vscode/extensions`
3. Reinicie o VS Code.

## Como Usar o Botão Play

1. Certifique-se de que o executável `lamo` (ou `lamo.exe`) esteja na mesma pasta do seu arquivo `.lamo` ou no PATH do seu sistema.
2. Abra um arquivo `.lamo`.
3. Clique no ícone de **Play** (triângulo) no canto superior direito do editor.
4. O resultado aparecerá automaticamente no terminal integrado do VS Code.

## Snippets Disponíveis

- `fn`: Declaração de função
- `let`: Declaração de variável
- `if`: Estrutura condicional
- `while`: Laço de repetição
- `print`: Comando de impressão
