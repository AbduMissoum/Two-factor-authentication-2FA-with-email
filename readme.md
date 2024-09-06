# Two-Factor Authentication (2FA) System

## Overview
This 2FA system enhances security by requiring users to authenticate themselves through a verification process after registering with their email and password. The system ensures that only verified users can gain access to their accounts.

## Features
- User registration with password and email.
- Email verification via a unique code sent to the user's email.
- Authentication through verification code.
- Verification process for users who are registered but not yet verified.
##APi doc
  to open Api doc   localhost:3000/api-doc
## Workflow

### 1. Registration
- The user registers by providing an email and password.
- An email with a unique verification code is sent to the user's email address.
- The user needs to enter the verification code to complete the authentication process.

### 2. Email Verification
- If a user is registered but has not yet verified their email, they need to authenticate by entering the verification code sent to their email.
- Upon successful verification, the user's account is fully activated and authenticated.

### 3. Re-sending Verification Code
- If the user has not received the verification code or the code has expired, a new code can be sent upon request.

## Technologies Used
- **Backend**:Nodejs ,express
- **Database**:MySql
- **Email Service**: NodeMailer
- **ORM**: sequalize
- **APi doc** :swagger

## Installation


1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
2. install dependencies 
   ```bash
     npm install 
3.create .env file like example.env
4.add the appropriate attributes
5. install dependencies 
   ```bash
     npm start


   
