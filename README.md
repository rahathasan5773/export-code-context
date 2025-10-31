# Export Code Context

![Visual Studio Marketplace Version](https://img.shields.io/visual-studio-marketplace/v/rahathasan.export-code-context?color=blue&label=VS%20Marketplace)![Visual Studio Marketplace Installs](https://img.shields.io/visual-studio-marketplace/i/rahathasan.export-code-context?color=green)![GitHub License](https://img.shields.io/github/license/rahathasan5773/export-code-context)

**Instantly consolidate and export code from any file or folder directly into a single, clean text file or your clipboard. Perfect for working with Large Language Models (like GPT-4, Gemini, Claude), creating documentation, or sharing code for review.**

Tired of manually copying and pasting dozens of files to provide context for your projects? "Export Code Context" streamlines this entire process into a single right-click action, saving you valuable time and effort.

---

### Demonstration

![Demonstration GIF](https://github.com/rahathasan5773/export-code-context/blob/5910961ea2a4a365aee6a20d568911ca35d9ca3c/export-code-context.gif)

---

## 🚀 Features

-   **One-Click Action**: Right-click any file or folder in the VS Code Explorer and select **"Code Context Action"**.
-   **Folder Export**:
    -   **Smart Scanning**: Recursively scans all subfolders to find every relevant file.
    -   **Auto-Ignore**: Automatically skips unnecessary directories like `node_modules`, `.git`, `dist`, and `build`.
    -   **Interactive Folder Selection**: A checklist prompt allows you to **deselect any subfolders** you wish to exclude from the export.
    -   **File Type Filtering**: After choosing folders, a second prompt lets you select exactly which file extensions (e.g., `.ts`, `.py`, `.css`) to include.
    -   **Consolidated Output**: Combines the full path and code from every selected file into a single, organized `.txt` file, saved directly in the folder you clicked on.
-   **Single File Copy**:
    -   **Instant Clipboard Access**: Copies the full file path and its complete content directly to your clipboard, formatted and ready to paste.
-   **Works Offline**: No internet connection required.

---

## 📖 How to Use

### Exporting an Entire Folder

1.  In the VS Code Explorer, **right-click on any folder**.
2.  Select **Code Context Action** from the menu.
3.  A checklist of all discovered subfolders will appear. Deselect any you wish to ignore and press `Enter`.
4.  A second checklist with all found file extensions will appear. Deselect any types you don't need and press `Enter`.
5.  A file named `code_context.txt` will be created in your selected folder, and a notification will appear with an option to open it instantly.

### Copying a Single File

1.  In the VS Code Explorer, **right-click on any file**.
2.  Select **Code Context Action** from the menu.
3.  A notification will confirm that the file's path and content have been copied to your clipboard, ready to be pasted anywhere.

---

## ✅ Requirements

No external dependencies are needed. Just install the extension and you're ready to go.

## Release Notes

### 1.0.0

-   Initial release of **Export Code Context**.
-   Universal command for handling both files and folders.
-   Automatic ignore-list for common large directories.
-   Interactive prompts for selecting subfolders and file extensions.

---

## 🤝 Contributing & Feedback

This is an open-source project. If you encounter any bugs, have feature requests, or would like to contribute, please visit our [GitHub repository](https://github.com/rahathasan/export-code-context) to open an issue or submit a pull request.

## 📄 License

This extension is licensed under the MIT License. See the [LICENSE](https://github.com/rahathasan/export-code-context/blob/main/LICENSE) file for details.

---