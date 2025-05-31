# Legal Services Platform

A web-based platform connecting clients with legal professionals. Built with React, Node.js, and MongoDB.

## 🚀 Features

- **User Authentication**
  - Secure registration and login for both clients and lawyers
  - JWT-based authentication
  - Role-based access control

- **Lawyer Directory**
  - Advanced search functionality
  - Filter by location, specialization, and experience
  - Detailed lawyer profiles

- **Appointment Management**
  - Schedule consultations
  - Real-time availability
  - Appointment tracking

## 💻 Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Framer Motion
- Axios
- Context API

### Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication
- Multer for file uploads

## 🛠️ Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/legal-services-platform.git
cd legal-services-platform
```

2. **Install dependencies**

For Backend:
```bash
cd backend
npm install
```

For Frontend:
```bash
cd project
npm install
```

3. **Environment Setup**

Create `.env` file in backend directory:
```env
PORT=3030
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
NODE_ENV=development
```

4. **Start the application**

Backend:
```bash
cd backend
npm start
```

Frontend:
```bash
cd project
npm run dev
```

## 📁 Project Structure

```
legal-services-platform/
├── backend/
│   ├── src/
│   │   ├── Controllers/
│   │   ├── Models/
│   │   ├── Middleware/
│   │   └── Routes/
│   └── package.json
└── project/
    ├── src/
    │   ├── components/
    │   ├── Context/
    │   └── assets/
    └── package.json
```

## 🔑 API Endpoints

### Authentication
- `POST /api/user/register` - Register new user
- `POST /api/user/login` - User login
- `POST /api/lawyer/register` - Register new lawyer
- `POST /api/lawyer/login` - Lawyer login

### Lawyers
- `GET /api/lawyer/search/all` - Get all lawyers
- `POST /api/lawyer/search` - Search lawyers by criteria

## 👥 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

Your Name
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Name](https://linkedin.com/in/yourprofile)

## 🙏 Acknowledgments

- Mentors and contributors who helped in the development
- Open source libraries used in the project