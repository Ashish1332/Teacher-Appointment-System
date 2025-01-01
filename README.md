# EduAppoint: College Teacher Appointment System

EduAppoint is a robust API-based solution that streamlines the appointment scheduling process between college professors and students. This system allows professors to manage their availability and students to book appointments efficiently. Designed with scalability and cloud integration in mind, EduAppoint uses AWS DocumentDB for database management and is deployed on AWS EC2 for seamless accessibility.

---

## 🚀 Features

1. **Authentication:**
   - Students and professors can securely authenticate to access the system.

2. **Professor Availability:**
   - Professors can specify time slots when they are available for appointments.

3. **Appointment Booking:**
   - Students can view the available slots of professors and book appointments.

4. **Conflict-Free Scheduling:**
   - Ensures no overlapping of appointments for professors.

5. **Cloud-Based Deployment:**
   - APIs and database deployed on AWS EC2 and AWS DocumentDB.

---

## 🏗️ API Functionality

### **User Flow**
1. Student `A1` authenticates to access the system.
2. Professor `P1` authenticates to access the system.
3. Professor `P1` specifies the available time slots.
4. Student `A1` views the available time slots for Professor `P1`.
5. Student `A1` books an appointment with Professor `P1` for time `T1`.
6. Student `A2` authenticates to access the system.
7. Student `A2` books an appointment with Professor `P1` for time `T2`.

---

## 🛠️ Tech Stack

- **Backend Framework:** Node.js/Express.js
- **Database:** AWS DocumentDB (MongoDB-Compatible)
- **Cloud Deployment:** AWS EC2
- **Authentication:** JSON Web Tokens (JWT)
- **Version Control:** Git and GitHub

---

## 🗃️ Database Schema

### **Collections**
1. **Users:**
   - `user_id`: Unique identifier
   - `role`: `student` or `professor`
   - `name`: Full name
   - `email`: Email address
   - `password`: Hashed password

2. **Availability:**
   - `professor_id`: Linked to the user ID of the professor
   - `time_slots`: Array of available time slots

3. **Appointments:**
   - `appointment_id`: Unique identifier
   - `student_id`: Linked to the user ID of the student
   - `professor_id`: Linked to the user ID of the professor
   - `time_slot`: Booked time slot

---

## 🌐 Deployment

### **Steps to Deploy on AWS**
1. **AWS DocumentDB Setup:**
   - Create a DocumentDB cluster and configure the schema for `Users`, `Availability`, and `Appointments`.

2. **AWS EC2 Setup:**
   - Launch an EC2 instance and configure the environment (Node.js runtime, dependencies, etc.).
   - Clone this repository to the EC2 instance.
   - Run the application using a process manager like `pm2`.

3. **Environment Variables:**
   - `DB_URI`: MongoDB URI for AWS DocumentDB.
   - `JWT_SECRET`: Secret key for JSON Web Tokens.
   - `PORT`: Port number for the backend API.

4. **Access the APIs:**
   - The APIs will be accessible via the EC2 instance's public IP or domain name.

---

## 📂 Repository Structure

