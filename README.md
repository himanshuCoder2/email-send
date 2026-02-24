# 📧 Email Campaign Send Management System (Enterprise Edition)

A full-stack Email Marketing SaaS platform built using **Next.js, TypeScript, MongoDB, and Nodemailer**.

This system allows users to create and send bulk email campaigns using SMTP integration with rate limiting and secure environment management.

---

## 🚀 Features

- 🔐 JWT Authentication (optional)
- 📤 Bulk Email Sending via SMTP
- ⚡ Rate Limiting to Prevent Spam Detection
- 📊 Dashboard with Campaign Overview
- 🗄 MongoDB Atlas Integration
- 🎨 Enterprise-Level UI using Tailwind CSS
- 🔒 Environment Variable Security (.env.local + .gitignore)
- ☁️ Deployable on Vercel

---

## 🛠 Tech Stack

- **Frontend:** Next.js 14, TypeScript, Tailwind CSS  
- **Backend:** Next.js API Routes  
- **Database:** MongoDB Atlas  
- **Email Service:** Nodemailer (SMTP Integration)  
- **Version Control:** Git & GitHub  

---

## 📬 How Email Sending Works

1. User creates a campaign.
2. Campaign data is stored in MongoDB.
3. Backend API sends emails using SMTP.
4. Rate limiting prevents bulk spam detection.
5. Bounce and failure handling logic applied.

---

## 📦 Installation

Clone the repository:

