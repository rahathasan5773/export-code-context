// The module 'vscode' contains the VS Code extensibility API
// The module 'fs' provides file system-related functionality
// The module 'path' provides utilities for working with file and directory paths
import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

/**
 * Recursively scans a directory, skipping specified folders.
 * @param dir The directory to scan.
 * @param baseDir The root directory of the scan, for creating relative paths.
 * @param defaultIgnore A list of folder names to ignore by default.
 * @returns An object containing lists of all found file paths and subfolder paths.
 */
function scanDirectory(
  dir: string,
  baseDir: string,
  defaultIgnore: string[]
): { files: string[]; folders: string[] } {
  let files: string[] = [];
  let folders: string[] = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });

  for (const item of items) {
    // Skip default ignored folders
    if (defaultIgnore.includes(item.name)) {
      continue;
    }

    const fullPath = path.join(dir, item.name);

    if (item.isDirectory()) {
      // Store the relative path for the user selection list
      folders.push(path.relative(baseDir, fullPath).replace(/\\/g, '/'));

      // Recurse to get nested files and folders
      const result = scanDirectory(fullPath, baseDir, defaultIgnore);
      files = files.concat(result.files);
      folders = folders.concat(result.folders);
    } else {
      files.push(fullPath);
    }
  }
  return { files, folders };
}

/**
 * This method is called when the extension is activated.
 * @param context The extension context provided by VS Code.
 */
export function activate(context: vscode.ExtensionContext) {
  // Register a single, universal command for all context menu actions
  const universalCommand = vscode.commands.registerCommand(
    'export-code-context.universalAction',
    async (uri: vscode.Uri) => {
      if (!uri) {
        vscode.window.showErrorMessage('No file or folder selected.');
        return;
      }

      const targetPath = uri.fsPath;

      try {
        const stats = fs.statSync(targetPath);

        if (stats.isDirectory()) {
          // --- FOLDER LOGIC ---
          const folderPath = targetPath;
          const basePath = path.dirname(folderPath);

          const defaultIgnoreList = [
            'node_modules',
            '.git',
            '.vscode',
            'dist',
            'build',
            'out',
            'coverage',
          ];

          const { files: allFiles, folders: allFolders } = scanDirectory(
            folderPath,
            folderPath,
            defaultIgnoreList
          );

          if (allFiles.length === 0) {
            vscode.window.showWarningMessage(
              'No eligible files found in the selected folder after ignoring default directories.'
            );
            return;
          }

          const folderPickItems = allFolders.map(folder => ({
            label: folder,
            picked: true,
          }));

          const selectedFolderItems =
            allFolders.length > 0
              ? await vscode.window.showQuickPick(folderPickItems, {
                  canPickMany: true,
                  placeHolder:
                    'Deselect any additional folders you wish to skip',
                })
              : [];

          // User cancelled the folder selection
          if (typeof selectedFolderItems === 'undefined') {
            vscode.window.showInformationMessage('Export cancelled.');
            return;
          }

          const includedFolders = new Set(
            selectedFolderItems.map(item => path.join(folderPath, item.label))
          );

          const filesAfterFolderSkip = allFiles.filter(file => {
            const fileDir = path.dirname(file);
            // Always include files from the root of the selected folder
            if (fileDir === folderPath) {
              return true;
            }
            // Include files that are within one of the user-selected subfolders
            for (const folder of includedFolders) {
              if (
                file.startsWith(folder + path.sep) ||
                file.startsWith(folder + '/')
              ) {
                return true;
              }
            }
            return false;
          });

          if (filesAfterFolderSkip.length === 0) {
            vscode.window.showWarningMessage(
              'No files remain after filtering out selected folders.'
            );
            return;
          }

          const uniqueExtensions = [
            ...new Set(filesAfterFolderSkip.map(file => path.extname(file))),
          ];
          const quickPickItems = uniqueExtensions
            .filter(ext => ext)
            .map(ext => ({ label: ext, picked: true }));

          const selectedItems = await vscode.window.showQuickPick(
            quickPickItems,
            {
              canPickMany: true,
              placeHolder: 'Select file extensions to include',
            }
          );

          if (!selectedItems || selectedItems.length === 0) {
            vscode.window.showInformationMessage('Export cancelled.');
            return;
          }

          const targetExtensions = selectedItems.map(item => item.label);
          const filesToInclude = filesAfterFolderSkip.filter(file =>
            targetExtensions.includes(path.extname(file))
          );
          let combinedContent = '';

          for (const filePath of filesToInclude) {
            const relativePath = path
              .relative(basePath, filePath)
              .replace(/\\/g, '/');
            const fileContent = fs.readFileSync(filePath, 'utf-8');
            combinedContent += `// File: ${relativePath}\n\n`;
            combinedContent += `${fileContent}\n\n`;
            combinedContent +=
              '------------------------------------------------------------\n\n';
          }

          const outputPath = path.join(folderPath, 'code_context.txt');
          fs.writeFileSync(outputPath, combinedContent);

          const openAction = 'Open File';
          const result = await vscode.window.showInformationMessage(
            `Successfully exported context of ${filesToInclude.length} files to code_context.txt`,
            openAction
          );
          if (result === openAction) {
            const doc = await vscode.workspace.openTextDocument(outputPath);
            await vscode.window.showTextDocument(doc);
          }
        } else {
          // --- FILE LOGIC (remains unchanged) ---
          const filePath = targetPath;
          const fileContent = fs.readFileSync(filePath, 'utf-8');
          const contextToCopy = `File Path: ${filePath}\n\nFile Content:\n${fileContent}`;
          await vscode.env.clipboard.writeText(contextToCopy);
          vscode.window.showInformationMessage(
            'File context copied to clipboard.'
          );
        }
      } catch (error) {
        if (error instanceof Error) {
          vscode.window.showErrorMessage(`An error occurred: ${error.message}`);
        } else {
          vscode.window.showErrorMessage('An unknown error occurred.');
        }
      }
    }
  );

  context.subscriptions.push(universalCommand);
}

/**
 * This method is called when your extension is deactivated.
 */
export function deactivate() {}