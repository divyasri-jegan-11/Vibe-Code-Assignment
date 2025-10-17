# UPI Payment Demo — Frontend Web App

##  Overview
This project is a **UPI Payment Demo Web App** built using **HTML**, **CSS**, and **JavaScript**.  
It allows users to simulate a UPI payment request by entering payment details such as **Payee UPI ID**, **Payee Name**, and **Transaction Note**. The app then generates a **UPI payment URI** that can be used to open and process payments in any UPI-compatible mobile application.

This project demonstrates basic web development, form handling, and UPI integration concepts for learning and experimentation purposes.

---

##  Project Structure
```
assigment-a/
│
├── index.html      # Main UI for payment demo
├── style.css       # Styling for the interface
├── script.js       # Logic for generating UPI payment links
└── .git/           # Git version control data
```

---

##  Features
✅ Simple and interactive UI for UPI payment simulation  
✅ Automatically generates unique transaction references  
✅ Live form validation and feedback messages  
✅ Responsive and clean card-based layout  
✅ Built with pure HTML, CSS, and vanilla JS (no frameworks)

---

##  How It Works
1. User enters:
   - Payee UPI ID (e.g., `merchant@bank`)  
   - Payee Name  
   - Transaction Note  
   - Amount (default ₹1.00)
2. On clicking **“Pay via UPI”**, the app dynamically creates a UPI deep link in this format:
   ```
   upi://pay?pa=<VPA>&pn=<PayeeName>&am=<Amount>&tn=<Note>&tr=<RandomRef>
   ```
3. The app then displays a status message confirming that the payment link is ready.

>  Note: This app does **not actually process payments** — it’s a frontend demonstration meant for UI/UX and logic practice.

---

##  Run the Project
1. **Clone this repository**
   ```bash
   git clone https://github.com/<your-username>/assigment-a.git
   ```
2. **Navigate to the folder**
   ```bash
   cd assigment-a
   ```
3. **Open the app in your browser**
   ```bash
   start index.html     # on Windows
   open index.html      # on macOS
   xdg-open index.html  # on Linux
   ```

---

##  Technologies Used
- **HTML5** — structure and layout  
- **CSS3** — styling and responsiveness  
- **JavaScript (ES6)** — logic and UPI link generation  

---

##  UI Preview
(Add a screenshot here — e.g., drag an image of your running app into this README once uploaded to GitHub.)

---

##  Learning Takeaways
- Working with UPI URI schemes  
- DOM manipulation and dynamic content updates  
- Basic form handling and input validation  
- Minimalistic design with HTML/CSS  
- Git-based project setup for version control

---

