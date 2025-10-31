# Export Code Context

![Visual Studio Marketplace Version](https://img.shields.io/visual-studio-marketplace/v/rahathasan.export-code-context?color=blue&label=VS%20Marketplace)![Visual Studio Marketplace Installs](https://img.shields.io/visual-studio-marketplace/i/rahathasan.export-code-context?color=green)![GitHub License](https://img.shields.io/github/license/rahathasan5773/export-code-context)

**Instantly consolidate and export code from any file or folder directly into a single, clean text file or your clipboard. Perfect for working with Large Language Models (like GPT-4, Gemini, Claude), creating documentation, or sharing code for review.**

Tired of manually copying and pasting dozens of files for your projects? "Export Code Context" streamlines this entire process into a single right-click action, saving you valuable time and effort.

---

### Demonstration

![Demonstration GIF](https://raw.githubusercontent.com/rahathasan5773/export-code-context/main/export-code-context.gif)

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

*(This section remains the same)*

1.  In the VS Code Explorer, **right-click on any file or folder**.
2.  Select **Code Context Action** from the menu.
3.  Follow the interactive prompts for folder exports. Single file actions are instant.

---

## 👨‍💻 Meet the Creator

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/rahathasan5773">
        <!-- Add your profile picture to an 'assets' folder and update the link -->
        <img src="https://raw.githubusercontent.com/rahathasan5773/export-code-context/refs/heads/main/assets/profile.png" width="140px;" alt="Rahat Hasan"/>
        <br />
        <sub><b>Rahat Hasan</b></sub>
      </a>
    </td>
    <td valign="top">
      <h3>Expert Web Developer</h3>
      <p>
        I'm a passionate developer with a mission to build tools that are not only powerful but also intuitive and efficient. I created "Export Code Context" to solve a real-world problem I faced daily, saving developers countless hours of manual work.
      </p>
      <div>
        <img src="https://img.shields.io/badge/Experience-4%2B%20Years-3375B5?style=for-the-badge&logo=Code" alt="4+ Years Experience Badge" />
        <img src="https://img.shields.io/badge/Projects-50%2B%20Completed-22A559?style=for-the-badge&logo=github" alt="50+ Projects Completed Badge" />
      </div>
      <br />
      <p>
        <b>Have an idea for a web application or need to scale your existing project? Let's talk!</b>
      </p>
      <div>
        <!-- Replace with your actual portfolio, LinkedIn, and email links -->
        <a href="https://rahat-hasan-dev.netlify.app/"><img src="https://img.shields.io/badge/Portfolio-WebApp?style=for-the-badge&logo=Inertia&logoColor=white&color=blue" alt="Portfolio Link"></a>
        <a href="https://www.linkedin.com/in/dev-rahathasan/"><img src="https://img.shields.io/badge/LinkedIn-Profile?style=for-the-badge&logo=linkedin&logoColor=white&color=0A66C2" alt="LinkedIn Link"></a>
        <a href="mailto:[YOUR_EMAIL@HERE.COM]"><img src="https://img.shields.io/badge/Email-Contact_Me-?style=for-the-badge&logo=gmail&logoColor=white&color=EA4335" alt="Email Link"></a>
      </div>
    </td>
  </tr>
</table>

---

## Release Notes

### 1.0.2
- Added "Meet the Creator" profile section.
- Updated documentation and links.

### 1.0.1
- Updated documentation and fixed the broken demonstration GIF link in the Marketplace listing.

### 1.0.0
- Initial release of **Export Code Context**.
- Universal command for handling both files and folders.
- Automatic ignore-list for common large directories.
- Interactive prompts for selecting subfolders and file extensions.

---

## 🤝 Contributing & Feedback

This is an open-source project. If you encounter any bugs, have feature requests, or would like to contribute, please visit our [GitHub repository](https://github.com/rahathasan5773/export-code-context) to open an issue or submit a pull request.

## 📄 License

This extension is licensed under the MIT License. See the [LICENSE](https://github.com/rahathasan5773/export-code-context/blob/main/LICENSE) file for details.

---