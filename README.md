# 🚀 DMoney API Integration Testing using Postman

![Postman](https://img.shields.io/badge/Postman-API%20Testing-orange?style=for-the-badge&logo=postman)
![Newman](https://img.shields.io/badge/Newman-CLI%20Runner-brightgreen?style=for-the-badge)
![Node.js](https://img.shields.io/badge/Node.js-Environment-green?style=for-the-badge&logo=node.js)
![GitHub](https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge&logo=github)
![Status](https://img.shields.io/badge/Status-Completed-success?style=for-the-badge)

---

# 📌 Project Overview

This project demonstrates a complete **API Integration Testing workflow** using **Postman**, **Newman**, and **HTML Extra Reporter** for the **DMoney financial transaction system**.

The main goal of this assignment was to automate and validate a complete transaction flow among different user roles such as:

- Customer
- Agent
- Admin
- System Account

The project includes:

✅ API request chaining  
✅ Dynamic data handling  
✅ Authorization management  
✅ Positive & negative test cases  
✅ Automated assertions  
✅ HTML report generation using Newman  
✅ Professional API documentation  
✅ GitHub project management  

---

# 🎯 Assignment Requirements

The following workflow was implemented successfully:

1. Create 2 customers and 1 agent using API
2. Activate users using Admin API
3. Deposit 5000 TK from System account to Agent account
4. Agent deposits 2000 TK to Customer account
5. Customer sends 1000 TK to another Customer
6. Another Customer cashes out 500 TK from Agent account

---

# 🛠️ Tools & Technologies Used

| Tool | Purpose |
|------|----------|
| Postman | API Testing & Collection Management |
| Newman | Postman Collection Runner |
| HTML Extra Reporter | Advanced HTML Report Generation |
| Node.js | Newman Runtime Environment |
| VS Code | Command Execution & Development |
| Git & GitHub | Version Control & Repository Management |

---

# 📂 Project Structure

```bash
API-integration-testing-using-Postman/
│
├── node_modules/
├── Reports/
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── report.js
└── API integration testing Assignment.postman_collection.json
```

---

# 🔐 Environment & Security

Sensitive files and unnecessary folders were excluded using `.gitignore`.

### Included in `.gitignore`

```gitignore
node_modules/
Reports/
.env
```

---

# 🔄 API Testing Workflow

## ✅ Step 1: Create Users

- Created:
  - 2 Customers
  - 1 Agent

Dynamic data generation was used to avoid duplicate entries.

---

## ✅ Step 2: User Activation

- Activated all users using Admin credentials/API.

---

## ✅ Step 3: System Deposit

- Deposited **5000 TK** from System account to Agent account.

---

## ✅ Step 4: Agent Deposit

- Agent deposited **2000 TK** to Customer account.

---

## ✅ Step 5: Money Transfer

- Customer transferred **1000 TK** to another Customer.

---

## ✅ Step 6: Cash Out

- Second Customer cashed out **500 TK** using Agent account.

---

# 🧪 Test Cases Covered

## ✅ Positive Test Cases

- Valid user creation
- Successful user activation
- Successful deposit transaction
- Successful money transfer
- Successful cash out
- Proper authorization handling
- Valid response status code validation

---

## ❌ Negative Test Cases

- Invalid token
- Unauthorized access
- Invalid account number
- Invalid transaction amount
- Insufficient balance
- Missing required fields
- Invalid credentials

---

# ⚡ Features Implemented

| Feature | Status |
|---|---|
| Pre-request Script | ✅ |
| Environment Variables | ✅ |
| Random Data Generation | ✅ |
| Authorization Token Handling | ✅ |
| Chained API Requests | ✅ |
| Assertions & Validations | ✅ |
| Negative Testing | ✅ |
| Newman HTML Report | ✅ |

---

# 📘 API Documentation

### 🔗 API Documentation Link

👉 [View API Documentation](https://documenter.getpostman.com/view/54454509/2sBXqQGJ7o)

---

# 🧾 Test Case Documentation

### 🔗 Test Case Collection Link

👉 [View Postman Collection](https://rakibfr28-3673993.postman.co/workspace/68ad87a5-ecf1-417a-a5ce-28948fbd519f/collection/54454509-acfbaa05-e0fc-4793-8cca-831b7050f16c?action=share&source=copy-link&creator=54454509)

---

# 📊 Newman Report Generation

## ▶️ Newman Command

```bash
newman run "API integration testing Assignment.postman_collection.json"
```

## ▶️ Newman HTML Extra Reporter Command

```bash
newman run "API integration testing Assignment.postman_collection.json" -r htmlextra
```

---

# 📷 Newman Report Screenshot

<img width="996" height="938" alt="Screenshot 2026-05-14 204553" src="https://github.com/user-attachments/assets/cedb3bf7-c8c8-4561-84db-16eeff97b26c" />

---

# 🚀 How to Run This Project

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/faaaaahhhh/API-integration-testing-using-Postman.git
```

---

## 2️⃣ Install Dependencies

```bash
npm install
```

---

## 3️⃣ Run Newman Collection

```bash
newman run "API integration testing Assignment.postman_collection.json"
```

---

## 4️⃣ Generate HTML Report

```bash
newman run "API integration testing Assignment.postman_collection.json" -r htmlextra
```

---

# 📦 NPM Packages Used

```json
{
  "newman": "^latest",
  "newman-reporter-htmlextra": "^latest"
}
```

---

# 🔍 Validation & Assertions

The collection contains automated assertions for:

- Status code validation
- Response body validation
- Transaction success verification
- Token verification
- Balance checking
- Response time validation

---

# 🌟 Key Learning Outcomes

Through this project, the following concepts were practiced:

- API Integration Testing
- REST API Validation
- Automated Testing Workflow
- Postman Scripting
- Environment Variable Management
- Newman CLI Automation
- HTML Report Generation
- GitHub Project Documentation

---

# 👨‍💻 Author Information

| Info | Details |
|---|---|
| Name | Fahad Bin Hossain |
| Batch | 18 |
| Project | DMoney API Integration Testing |

---

# 🔗 GitHub Repository

👉 https://github.com/faaaaahhhh/API-integration-testing-using-Postman.git

---

# ✅ Project Status

✔️ Assignment Completed Successfully  
✔️ All Required Test Cases Implemented  
✔️ Documentation Generated  
✔️ Newman Report Generated  
✔️ GitHub Repository Submitted  

---

# 🙌 Conclusion

This project successfully demonstrates a complete real-world API integration testing workflow using Postman and Newman. The automated testing process validates multiple financial transactions among different user roles while ensuring proper authentication, authorization, validation, and reporting mechanisms.

The project reflects practical industry-standard API testing practices and proper documentation structure suitable for both academic and professional purposes.

---
