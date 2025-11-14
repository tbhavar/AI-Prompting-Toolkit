# 🎯 Prompt Engineering Mastery

An interactive, gamified learning platform for mastering prompt engineering concepts based on the Kaggle whitepaper. Built with vanilla HTML, CSS, and JavaScript for seamless GitHub Pages deployment.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Status](https://img.shields.io/badge/status-active-success.svg)

## 🌟 Features

### 📚 Learning Modules
- **8 Comprehensive Modules** covering introduction to advanced techniques
- Interactive lessons with real-world examples
- Good vs. bad prompt comparisons
- Progressive unlocking based on user level

### 🎮 Gamification System
- **XP Points & Leveling**: Earn points for completing quizzes and modules
- **25 Unique Achievements**: From "First Steps" to "Ultimate Master"
- **Streak Tracking**: Daily login rewards and streak maintenance
- **Global Leaderboard**: Compete with other learners
- **Progress Dashboard**: Visual tracking of your learning journey

### 🧠 Quiz System
- Interactive knowledge checks after each module
- Timed quizzes (30 seconds per module)
- Instant feedback with explanations
- Visual indicators for correct/incorrect answers
- Score-based XP rewards

### 🎨 User Experience
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Dark/Light Mode**: Toggle between themes
- **Glassmorphism UI**: Modern, elegant design
- **Particle Effects**: Animated background
- **Confetti Animations**: Celebrate achievements and level-ups
- **Local Storage**: Progress persists across sessions

## 🚀 Quick Start

### Option 1: GitHub Pages (Recommended)

1. **Fork or Clone this repository**
   \`\`\`bash
   git clone https://github.com/yourusername/prompt-engineering-mastery.git
   cd prompt-engineering-mastery
   \`\`\`

2. **Push to your GitHub repository**
   \`\`\`bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   \`\`\`

3. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Under "Source", select "Deploy from branch"
   - Choose "main" branch and "/ (root)" folder
   - Click "Save"

4. **Access your site**
   - Your site will be live at: `https://yourusername.github.io/repository-name`
   - Wait 1-2 minutes for deployment

### Option 2: Local Development

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/yourusername/prompt-engineering-mastery.git
   cd prompt-engineering-mastery
   \`\`\`

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or use a local server:
   \`\`\`bash
   # Python 3
   python -m http.server 8000

   # Node.js
   npx http-server
   \`\`\`

3. **Access locally**
   - Navigate to `http://localhost:8000`

## 📁 Project Structure

\`\`\`
prompt-engineering-mastery/
│
├── index.html          # Main HTML file
├── styles.css          # All styling and animations
├── script.js           # Game logic and interactivity
└── README.md           # This file
\`\`\`

## 🎓 Learning Path

### Module Overview

| Module | Title | XP Reward | Unlock Level |
|--------|-------|-----------|--------------|
| 1 | Introduction to Prompt Engineering | 100 XP | Level 1 |
| 2 | Core Prompting Principles | 150 XP | Level 1 |
| 3 | Prompt Patterns & Techniques | 200 XP | Level 2 |
| 4 | Advanced Techniques | 250 XP | Level 3 |
| 5 | Best Practices | 200 XP | Level 4 |
| 6 | Real-World Applications | 200 XP | Level 5 |
| 7 | Common Pitfalls | 200 XP | Level 6 |
| 8 | Future of Prompting | 300 XP | Level 7 |

### Gamification Details

**XP Calculation:**
- Quiz Score (%) × Module Base XP = XP Earned
- Example: 80% on Module 1 = 0.8 × 100 = 80 XP

**Leveling System:**
- Level up every (Current Level × 100) XP
- Level 1→2: 100 XP
- Level 2→3: 200 XP
- Level 3→4: 300 XP, etc.

**Achievement Categories:**
- Module Completion
- Quiz Performance
- Streak Milestones
- XP Milestones
- Time-based Achievements

## 🛠️ Technologies Used

- **HTML5**: Semantic structure
- **CSS3**: Modern styling with animations
- **JavaScript (ES6+)**: Game logic and interactivity
- **Particles.js**: Background particle effects
- **Font Awesome**: Icon library
- **Google Fonts**: Poppins typography
- **Local Storage API**: Progress persistence

## 📱 Browser Compatibility

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 Features in Detail

### Quiz System Architecture
- **Format**: Multiple choice questions
- **Timer**: 30-second countdown per quiz
- **Feedback**: Immediate visual feedback
- **Explanations**: Detailed answers for each question
- **Scoring**: Percentage-based with XP rewards

### Progress Tracking
- **Local Storage**: All data saved in browser
- **Auto-save**: Progress saved after each action
- **Stats Dashboard**: Visual representation of progress
- **Export**: (Coming soon) Download progress as PDF

### Responsive Design Breakpoints
- Mobile: 320px - 480px
- Tablet: 481px - 768px
- Desktop: 769px+

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Ideas for Contribution
- Additional learning modules
- More quiz questions
- New achievements
- UI/UX improvements
- Bug fixes
- Translations

## 🐛 Known Issues

- Particles.js may slow down on older mobile devices (disable if needed)
- Local storage limited to ~5-10MB depending on browser

## 📝 License

This project is licensed under the MIT License - see below for details.

## 👤 Author

**CA Tanmay Rajendra Bhavar (Nashik)**
- Credentials: FCA, DISA, ICITSS/AICITSS/AURA Faculty
- LinkedIn: [Connect with me](https://www.linkedin.com/in/tbhavar)
- Passion: Technology, learning innovation, and gamified education

## ⚠️ Disclaimer

This educational platform is created for learning purposes based on publicly available information about prompt engineering. The content is designed to provide an interactive learning experience and should be used as a supplementary educational resource. While efforts have been made to ensure accuracy, users should verify critical information from official sources. This platform is not officially affiliated with Kaggle or Google. All trademarks and references belong to their respective owners.

## 🙏 Acknowledgments

- Kaggle for the prompt engineering whitepaper inspiration
- Google Fonts for typography
- Font Awesome for icons
- Particles.js for background effects
- The open-source community

## 📞 Support

If you encounter any issues or have questions:
- Open an issue on GitHub
- Connect with me on [LinkedIn](https://www.linkedin.com/in/tbhavar)

## 🔮 Future Enhancements

- [ ] Backend integration for global leaderboard
- [ ] Certificate generation on completion
- [ ] Social sharing features
- [ ] More interactive exercises
- [ ] Video tutorials integration
- [ ] Multilingual support
- [ ] Advanced analytics dashboard
- [ ] Collaborative learning features

---

**Made with ❤️ and ☕ by CA Tanmay Bhavar**

*Happy Learning! 🚀*
