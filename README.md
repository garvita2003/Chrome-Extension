# Trackers - Chrome Extension 🔗

## 📌 Introduction

**Trackers** is a powerful and intuitive Chrome extension designed to help users efficiently manage and save website links. Whether you're researching, bookmarking, or organizing URLs for later reference, Trackers makes it effortless to collect and access important web links right from your browser.

### 🎯 Key Features:

1. **Manual Link Input** - Manually enter or paste URLs directly into the extension using the "SAVE INPUT" button
2. **Auto-Tab Capture** - Automatically fetch and save the current tab's URL with a single click using the "SAVE TAB" button
3. **Quick Link Access** - All saved links are displayed as a clickable list that opens in a new tab
4. **Easy Deletion** - Double-click the "DELETE ALL" button to clear all saved links at once
5. **Persistent Storage** - All links are saved in browser's local storage and persist across sessions
6. **Lightweight & Fast** - Minimal performance impact with instant link saving and retrieval

---

## 🔄 Process & Flow

```
User Action → Extension Popup Opens
    ↓
Choose Method:
├─ Method 1: Manual Input
│  ├─ User types or pastes URL in input field
│  ├─ Clicks "SAVE INPUT" button
│  ├─ URL is added to array
│  ├─ Stored in local storage as JSON
│  └─ Display rendered in UI
│
└─ Method 2: Auto-Tab Capture
   ├─ User clicks "SAVE TAB" button
   ├─ Extension queries active tab using Chrome API
   ├─ Current tab URL is retrieved
   ├─ URL is added to array
   ├─ Stored in local storage as JSON
   └─ Display rendered in UI

Display & Access:
├─ All saved URLs shown as clickable list items
├─ Each link opens in new tab on click
├─ Links persist on browser restart
└─ User can double-click "DELETE ALL" to clear all links
```
---

## 🛠️ Technology Used

- **HTML** - Structure and markup for extension UI
- **CSS** - Styling and responsive design
- **JavaScript** - Core extension logic and DOM manipulation
- **Chrome Extensions API** - `chrome.tabs` API for tab information
- **LocalStorage API** - Browser storage for persistent data
- **JSON** - Data serialization format for storage

---

## 🎓 Skills Gained

Through building this Chrome extension, the following technical skills were developed:

### Frontend Development:
- ✅ HTML semantic markup and form handling
- ✅ CSS styling and layout design
- ✅ Responsive UI design principles
- ✅ JavaScript DOM manipulation and events

### Browser APIs:
- ✅ Chrome Extensions Manifest Configuration
- ✅ Chrome Tabs API for retrieving active tab information
- ✅ Browser LocalStorage API for data persistence
- ✅ Permission management in extensions

### JavaScript Programming:
- ✅ Event-driven programming
- ✅ Array operations and manipulation
- ✅ JSON serialization and deserialization
- ✅ Template literals and string interpolation
- ✅ Callback functions and asynchronous operations

### Problem-Solving:
- ✅ Data persistence across browser sessions
- ✅ User interaction design and flow
- ✅ Error handling and edge cases
- ✅ Extension architecture and best practices

### Development Practices:
- ✅ Code organization and modular structure
- ✅ Browser developer tools and debugging
- ✅ Version control with Git/GitHub
- ✅ Documentation and code comments

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
1. Clone this repository or download as ZIP
2. Open Chrome and go to `chrome://extensions/`
3. Enable "Developer mode" (top right)
4. Click "Load unpacked" and select the extension folder
5. The Trackers extension icon will appear in your Chrome toolbar
