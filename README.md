# Trackers - Chrome Extension 🔗

## 📌 Introduction

**Trackers** is a powerful and intuitive Chrome extension designed to help users efficiently manage and save website links. Whether you're researching, bookmarking, or organizing URLs for later reference, Trackers simplifies link management with its clean, user-friendly interface.

**Key Features:**
- ✅ Manual Link Input - Save URLs manually with the "SAVE INPUT" button
- ✅ Auto-Tab Capture - Automatically fetch and save the current tab's URL
- ✅ Quick Link Access - All saved links displayed as clickable list
- ✅ Easy Deletion - Clear all saved links with double-click on "DELETE ALL"
- ✅ Persistent Storage - Links saved in browser's local storage across sessions
- ✅ Lightweight & Fast - Minimal performance impact with instant link operations

---

## 🔄 Process / Flow

**Key Steps:**
1. User opens the extension popup from Chrome toolbar
2. Choose between manual input or auto-tab capture
3. For Manual Method: Type/paste URL and click "SAVE INPUT"
4. For Auto Method: Click "SAVE TAB" to capture current tab URL
5. URL added to array and stored in local storage as JSON
6. All saved URLs displayed as clickable list items
7. Click any link to open it in new tab
8. Double-click "DELETE ALL" to clear all links

---

## 🛠️ Technology Used

| Technology | Purpose |
|-----------|---------|
| **HTML** | Structure and markup for extension UI |
| **CSS** | Styling and responsive design |
| **JavaScript** | Core extension logic and DOM manipulation |
| **Chrome Extensions API** | `chrome.tabs` API for tab information |
| **LocalStorage API** | Browser storage for persistent data |
| **JSON** | Data serialization format for storage |

---

## 🎓 Skills Gained

**Frontend Development:**
- ✅ HTML semantic markup and form handling
- ✅ CSS styling and responsive layout design
- ✅ Responsive UI design principles
- ✅ JavaScript DOM manipulation and event handling

**Browser APIs:**
- ✅ Chrome Extensions Manifest Configuration
- ✅ Chrome Tabs API for retrieving active tab information
- ✅ Browser LocalStorage API for data persistence
- ✅ Permission management in extensions

**JavaScript Programming:**
- ✅ Event-driven programming patterns
- ✅ Array operations and manipulation
- ✅ JSON serialization and deserialization
- ✅ Template literals and string interpolation
- ✅ Callback functions and asynchronous operations

**Problem-Solving:**
- ✅ Data persistence across browser sessions
- ✅ User interaction design and flow optimization
- ✅ Error handling and edge cases management
- ✅ Extension architecture and best practices

---

## 📂 Project Structure

```
Chrome-Extension/
├── manifest.json      # Extension configuration (v3)
├── index.html         # UI markup and structure
├── index.css          # Styling and layout
├── index.js           # Core extension logic
├── image.png          # Extension icon
└── README.md          # Documentation
```

---

## 📸 Demonstration

### 🎥 Video Demonstration:
https://github.com/garvita2003/Chrome-Extension/assets/102051676/74de7893-2810-481f-b0b4-bfb9044c6106

### 📷 Screenshots:

**Extension UI & Features:**
![Screenshot 2023-08-14 173914](https://github.com/garvita2003/Chrome-Extension/assets/102051676/7e6e1f72-0013-48ae-8128-b42ba8b4da4f)

**Manual Input Feature:**
![Screenshot 2023-08-14 174002](https://github.com/garvita2003/Chrome-Extension/assets/102051676/c1a79d6e-0e21-4c16-b950-a24b1e263f34)

**Saved Links Display:**
![Screenshot 2023-08-14 174042](https://github.com/garvita2003/Chrome-Extension/assets/102051676/a059c117-4605-40ee-a7b0-1b6dd93c1819)

**Auto-Tab Save Feature:**
![Screenshot 2023-08-14 174116](https://github.com/garvita2003/Chrome-Extension/assets/102051676/879c6c83-f0b0-404f-af5e-8b89866e4740)

**Active Links Functionality:**
![Screenshot 2023-08-14 174154](https://github.com/garvita2003/Chrome-Extension/assets/102051676/85b43900-8878-4bd3-8595-655f1224e949)

**Delete Feature:**
![Screenshot 2023-08-14 174204](https://github.com/garvita2003/Chrome-Extension/assets/102051676/9a50c94c-c90e-498c-89d6-8ff10b6203bf)

---

## ⚙️ Setup Instructions

### How to Install:

1. **Clone or Download:**
   - Clone this repository or download as ZIP
   - Extract the files to a folder

2. **Load Extension in Chrome:**
   - Open Chrome and navigate to `chrome://extensions/`
   - Enable "Developer mode" (toggle in top right)
   - Click "Load unpacked" button
   - Select the Chrome-Extension folder
   - The Trackers extension icon will appear in your Chrome toolbar

3. **Start Using:**
   - Click the Trackers icon in your toolbar
   - Begin saving and managing your links

### How to Use:

- **Save URL Manually:** Type or paste a URL in the input field and click "SAVE INPUT"
- **Save Current Tab:** Click "SAVE TAB" to automatically capture the current page URL
- **Access Saved Links:** Click any link in the list to open it in a new tab
- **Clear All Links:** Double-click "DELETE ALL" to remove all saved links at once
