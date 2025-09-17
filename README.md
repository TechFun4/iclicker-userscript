## techfun’s iClicker Userscript

## ⚠️ **EDUCATIONAL USE ONLY**

> **WARNING**: This script is provided **for educational and testing purposes only**. I assume no responsibility for any policy violations or consequences that you may encounter.

### Features
- Auto-join clicker class session 
- Random *A* or *B* answer submission for multiple-choice polls  
- Lightweight & console-logged for easy debugging

### Installation
1. **Install Tampermonkey** (or Greasemonkey or others).  
2. Click the button below or paste the script into a new Tampermonkey script and save.

<a href="https://raw.githubusercontent.com/techfun4/iclicker-userscript/main/iclicker.user.js">
📥 Install to Tampermonkey
</a>

### ▶Usage
1. Log in at `student.iclicker.com`.  
2. Keep the tab open; the script will:
   - Click **Join** when a session opens.
   - Choose a random answer for each question.

Open your browser console to see the log messages.

### Config (edit values at top of script)
| Constant | Default | Purpose |
|----------|---------|---------|
| `SEND_ANSWER_DELAY` | `10500` ms | Wait after question appears before answering |
| `JOIN_DELAY` | `13500` ms | Interval between join-button checks |
| `MCQ_CHOICES` | `["a", "b"]` | Pool of answer options to randomize from |

Adjust numbers (milliseconds) or extend `MCQ_CHOICES` to include `"c"`, `"d"`, etc.

### Author
Written by **techfun** — v1.0 (September 2025).  
Use responsibly and at your own risk.