# Cafeteria Management System (Database Project)

## 📌 Project Overview
This project is a *Cafeteria Management System* designed using *SQL* to manage daily cafeteria operations in an educational institution.  
It handles *students, staff, menu items, stock, orders, and payments* in a structured and efficient way.

The database ensures proper relationships between entities and supports order tracking, stock management, and payment recording.

---

## 🛠️ Technologies Used
- SQL (PostgreSQL compatible)
- Relational Database Design
- ER Modeling Concepts

---

## 🗂️ Database Structure

The system consists of the following tables:

### 1. *Staff*
Stores cafeteria staff information.
- staff_id (Primary Key)
- name
- role
- phone

### 2. *Students*
Stores student information who place orders.
- student_id (Primary Key)
- name
- department
- phone

### 3. *Menu Items*
Stores available food items.
- item_id (Primary Key)
- name
- price
- available
- image_url

### 4. *Stock*
Manages item stock quantity.
- stock_id (Primary Key)
- item_id (Foreign Key)
- quantity
- last_updated

### 5. *Orders*
Stores order information.
- order_id (Primary Key)
- student_id (Foreign Key)
- staff_id (Foreign Key)
- order_date
- status
- total

### 6. *Order Details*
Stores items included in each order.
- detail_id (Primary Key)
- order_id (Foreign Key)
- item_id (Foreign Key)
- quantity
- price

### 7. *Payments*
Stores payment details.
- payment_id (Primary Key)
- order_id (Foreign Key)
- payment_method
- amount
- payment_date

---

## 🔗 Relationships
- One *student* can place multiple *orders*
- One *order* can contain multiple *menu items*
- Each *order* has one *payment*
- *Stock* is linked to *menu items*
- *Staff* members process orders

---

## 📊 Sample Data
The project includes sample data for:
- Staff
- Students
- Menu items
- Stock

This helps in testing queries and understanding system functionality.

---

## 🚀 How to Run
1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

---

## 🎯 Project Objective
- To apply *database normalization*
- To understand *foreign key relationships*
- To implement a *real-life cafeteria management scenario*
- To practice *SQL DDL and DML commands*

---

## 👩‍💻 Author
*Royaida Maksud *

---

## 📄 License
This project is for *educational purposes only*.
