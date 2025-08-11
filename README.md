# 🚀 Subhadeep's Portfolio Website

A modern, responsive portfolio website built with React, showcasing projects, skills, and professional experience.

## 🌟 Live Demo

**Visit:** [https://portfolio-9mbx.vercel.app](https://portfolio-9mbx.vercel.app)

## ✨ Features

- **🎨 Modern Design** - Clean, professional interface with smooth animations
- **📱 Responsive Layout** - Optimized for all devices (mobile, tablet, desktop)
- **🔥 Dynamic Content** - Projects and certificates loaded from Firebase
- **💬 Interactive Comments** - Visitors can leave messages and feedback
- **⚡ Fast Performance** - Built with Vite for optimal loading speeds
- **🎯 SEO Optimized** - Meta tags, Open Graph, and Google verification
- **🌙 Dark Theme** - Elegant dark color scheme with gradient accents

## 🛠️ Technologies Used

### Frontend
- **React 18** - Modern React with hooks and functional components
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Material-UI** - React component library
- **AOS (Animate On Scroll)** - Smooth scroll animations
- **Lucide React** - Beautiful icon library

### Backend & Database
- **Firebase Firestore** - NoSQL database for projects and certificates
- **Firebase Storage** - File storage for profile images and project assets
- **Firebase Hosting** - Backend infrastructure

### Deployment
- **Vercel** - Frontend hosting and automatic deployments
- **GitHub** - Version control and source code management

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Background.jsx   # Animated background component
│   ├── CardProject.jsx  # Project card display
│   ├── Certificate.jsx  # Certificate display
│   ├── Commentar.jsx    # Comments system
│   ├── Modal.jsx        # Modal dialogs
│   ├── Navbar.jsx       # Navigation bar
│   ├── ProjectDetail.jsx # Detailed project view
│   ├── SocialLinks.jsx  # Social media links
│   └── TechStackIcon.jsx # Technology stack icons
├── Pages/               # Main page components
│   ├── About.jsx        # About me page
│   ├── Contact.jsx      # Contact form and comments
│   ├── Home.jsx         # Landing page
│   ├── Portofolio.jsx   # Projects and certificates
│   └── WelcomeScreen.jsx # Welcome animation
├── assets/              # Static assets
├── firebase.js          # Firebase configuration
├── firebase-comment.js  # Comments system config
└── main.jsx            # App entry point
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Firebase account
- Vercel account (for deployment)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/2subhadeep/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Firebase**
   - Create a new Firebase project
   - Enable Firestore Database and Storage
   - Create collections: `projects`, `certificates`, `portfolio-comments`
   - Update `src/firebase.js` and `src/firebase-comment.js` with your config

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 🔧 Configuration

### Firebase Setup
1. **Projects Collection Structure:**
   ```json
   {
     "Title": "Project Name",
     "Description": "Project description",
     "Img": "image-url",
     "Link": "demo-url",
     "TechStack": ["React", "Firebase", "Tailwind"],
     "Features": ["Feature 1", "Feature 2"],
     "Github": "github-url"
   }
   ```

2. **Certificates Collection Structure:**
   ```json
   {
     "Title": "Certificate Name",
     "Issuer": "Issuing Organization",
     "Date": "2024-01-15",
     "Img": "certificate-image-url",
     "Link": "verification-url",
     "Description": "Certificate description"
   }
   ```

### Environment Variables
Create a `.env` file in the root directory:
```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

## 🚀 Deployment

### Vercel Deployment
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically detect the Vite configuration
4. Deploy with default settings

### Custom Domain (Optional)
1. In Vercel dashboard, go to your project settings
2. Add your custom domain
3. Update DNS records as instructed

## 📱 Features in Detail

### Home Page
- Hero section with animated text
- Smooth scroll navigation
- Call-to-action buttons

### About Page
- Personal information and photo
- Skills and experience statistics
- Downloadable CV/resume

### Portfolio Page
- **Projects Tab:** Grid layout of project cards
- **Certificates Tab:** Professional certifications
- **Tech Stack Tab:** Technology skills with icons

### Contact Page
- Contact form with validation
- Interactive comments system
- Social media links

## 🎨 Customization

### Colors and Themes
- Primary colors: Blue (`#6366f1`) to Purple (`#a855f7`)
- Background: Dark (`#030014`)
- Easily customizable in `tailwind.config.js`

### Content Updates
- **Projects:** Add/remove in Firebase Firestore
- **Certificates:** Update in Firebase Firestore
- **Personal Info:** Modify in `src/Pages/About.jsx`
- **Tech Stack:** Update in `src/Pages/Portofolio.jsx`

## 🔒 Security

### Firebase Rules
```javascript
// Firestore Rules
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /portfolio-comments/{document} {
      allow read, write: if true; // For development
    }
  }
}

// Storage Rules
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /profile-images/{allPaths=**} {
      allow read, write: if true; // For development
    }
  }
}
```

**Note:** These rules allow public access. For production, implement proper authentication.

## 📊 Performance

- **Lighthouse Score:** 90+ (Performance, Accessibility, Best Practices, SEO)
- **Bundle Size:** Optimized with Vite
- **Image Optimization:** Responsive images with proper sizing
- **Lazy Loading:** Components load as needed

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Subhadeep Paul**
- **Portfolio:** [https://portfolio-9mbx.vercel.app](https://portfolio-9mbx.vercel.app)
- **GitHub:** [@2subhadeep](https://github.com/2subhadeep)

## 🙏 Acknowledgments

- **Vercel** for hosting and deployment
- **Firebase** for backend services
- **Tailwind CSS** for styling framework
- **React community** for amazing libraries

## 📞 Support

If you have any questions or need help:
- **Email:** [your-email@example.com]
- **LinkedIn:** [Your LinkedIn Profile]
- **GitHub Issues:** [Create an issue](https://github.com/2subhadeep/Portfolio/issues)

---

⭐ **Star this repository if you found it helpful!**

