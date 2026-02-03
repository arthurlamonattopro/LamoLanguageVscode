const vscode = require('vscode');
const path = require('path');

function activate(context) {
    let disposable = vscode.commands.registerCommand('lamo.runFile', function (uri) {
        const activeEditor = vscode.window.activeTextEditor;
        const fileUri = uri || (activeEditor ? activeEditor.document.uri : null);

        if (!fileUri) {
            vscode.window.showErrorMessage('Nenhum arquivo .lamo aberto para rodar.');
            return;
        }

        if (activeEditor && activeEditor.document.isDirty) {
            activeEditor.document.save();
        }

        const filePath = fileUri.fsPath;
        const fileName = path.basename(filePath);
        const fileDir = path.dirname(filePath);

        let terminal = vscode.window.terminals.find(t => t.name === "Lamo Run");
        if (!terminal) {
            terminal = vscode.window.createTerminal("Lamo Run");
        }
        
        terminal.show();

        const isWindows = process.platform === 'win32';
        
        // No Windows, o compilador gera 'lamo_exec.exe'
        // No Linux/macOS, gera 'lamo_exec'
        const compilerCmd = isWindows ? 'lamo.exe' : './lamo';
        const execCmd = isWindows ? '.\\lamo_exec.exe' : './lamo_exec';
        
        // Comando unificado: Compilar E Executar
        // Usamos '&&' para que a execução só ocorra se a compilação for bem-sucedida
        if (isWindows) {
            terminal.sendText(`cd "${fileDir}"`);
            // No PowerShell/CMD do Windows, o compilador 'lamo.exe' já deve rodar o código
            // Mas por garantia, forçamos a execução do binário gerado se o compilador não o fizer
            terminal.sendText(`${compilerCmd} "${fileName}"`);
        } else {
            terminal.sendText(`cd "${fileDir}" && ${compilerCmd} "${fileName}"`);
        }
    });

    context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};
