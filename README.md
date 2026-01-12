# Mini Blog

A modern and complete blog application built with React + Vite and Firebase, allowing users to create, edit, and share posts with a complete authentication system.

## Features

-  **User Authentication**: Complete registration and login system with Firebase Authentication
-  **Posts CRUD**: Create, read, update, and delete posts
-  **Tag System**: Organize and search posts by tags
-  **Post Search**: Search posts through tags
-  **User Dashboard**: Manage all your posts in one place
-  **Protected Routes**: Protected pages that require authentication
-  **Responsive Design**: Adaptive interface for different devices
-  **Firebase Firestore**: Real-time database

## Technologies

- **React 19.2.0** - JavaScript library for building user interfaces
- **Vite 7.2.4** - Fast and modern build tool
- **React Router DOM 7.11.0** - Navigation between pages
- **Firebase 12.7.0** - Backend as a Service (authentication and database)
- **CSS Modules** - Scoped styling
- **ESLint** - Linter to maintain consistent code

## Project Structure

```

mini-blog/
├── src/
│   ├── components/        # Reusable components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── PostDetail.jsx
│   ├── context/          # Context API
│   │   └── AuthContext.jsx
│   ├── firebase/         # Firebase configuration
│   │   └── config.js
│   ├── hooks/            # Custom Hooks
│   │   ├── useAuthentication.jsx
│   │   ├── useFetchDocuments.jsx
│   │   ├── useInsertDocument.jsx
│   │   ├── useUpdateDocument.jsx
│   │   └── useDeleteDocument.jsx
│   └── pages/            # Application pages
│       ├── Home/
│       ├── About/
│       ├── Login/
│       ├── Register/
│       ├── CreatePost/
│       ├── EditPost/
│       ├── Dashboard/
│       ├── Post/
│       └── Search/
```

## ⚙️ Setup and Installation

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn
- Firebase account

### Step by Step

1. **Clone the repository**

```bash
git clone <repository-url>
cd mini-blog
```

2. **Install dependencies**

```bash
npm install
```

3. **Configure Firebase**

Create a project in [Firebase Console](https://console.firebase.google.com/) and configure:

- Firebase Authentication (Email/Password)
- Cloud Firestore

4. **Configure environment variables**

Create the Firebase configuration file at `src/firebase/config.js`:

```javascript
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-auth-domain",
  projectId: "your-project-id",
  storageBucket: "your-storage-bucket",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
```

## License

This project is under the MIT license. See the [LICENSE](LICENSE) file for more details.
