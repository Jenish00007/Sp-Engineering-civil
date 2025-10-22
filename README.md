# Canada Cartage - React Website Clone

A modern, responsive React.js website that replicates the design and functionality of the Canada Cartage transportation and logistics website. Built with modern web technologies and best practices.

## 🚀 Features

### Design & User Experience
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Fully Responsive**: Optimized for all devices (desktop, tablet, mobile)
- **Interactive Elements**: Hover effects, smooth transitions, and micro-interactions
- **Accessibility**: WCAG compliant with proper focus states and semantic HTML

### Navigation & Structure
- **Multi-level Navigation**: Dropdown menus with comprehensive service categories
- **Sticky Header**: Transparent header that becomes solid on scroll
- **Mobile Menu**: Hamburger menu with collapsible navigation
- **Breadcrumb Navigation**: Clear page hierarchy and navigation

### Content Sections
- **Hero Section**: Eye-catching landing area with call-to-action
- **Services Overview**: Detailed service categories with icons and descriptions
- **About Company**: Company history, mission, and values
- **Customer Showcase**: Grid of major client logos
- **Testimonials**: Customer feedback carousel with navigation
- **Contact Form**: Interactive contact form with validation
- **Footer**: Comprehensive footer with links and company information

### Technical Features
- **React 18**: Latest React features and hooks
- **Framer Motion**: Smooth animations and transitions
- **React Router**: Client-side routing and navigation
- **Lucide Icons**: Modern, customizable icons
- **CSS Custom Properties**: Consistent design system
- **Mobile-First Design**: Responsive breakpoints and layouts

## 🛠️ Technologies Used

- **Frontend Framework**: React 18.2.0
- **Routing**: React Router DOM 6.3.0
- **Animations**: Framer Motion 7.6.0
- **Icons**: Lucide React 0.263.1
- **Styling**: CSS3 with Custom Properties
- **Build Tool**: Create React App 5.0.1
- **Font**: Inter (Google Fonts)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Truck_Web
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the website.

## 🏗️ Project Structure

```
src/
├── components/          # React components
│   ├── Header.js       # Navigation and header
│   ├── Hero.js         # Landing section
│   ├── Services.js     # Services overview
│   ├── About.js        # Company information
│   ├── Customers.js    # Customer showcase
│   ├── Testimonials.js # Customer testimonials
│   ├── Contact.js      # Contact form
│   └── Footer.js       # Footer section
├── App.js              # Main application component
├── index.js            # Application entry point
└── index.css           # Global styles and utilities
```

## 🎨 Design System

### Color Palette
- **Primary Blue**: `#1e40af` - Main brand color
- **Secondary Blue**: `#1e3a8a` - Darker shade for hover states
- **Accent Colors**: Green, Purple, Orange, Red for service categories
- **Neutral Grays**: Various shades for text and backgrounds

### Typography
- **Font Family**: Inter (Google Fonts)
- **Font Weights**: 300, 400, 500, 600, 700
- **Responsive Sizing**: Fluid typography with proper scaling

### Spacing & Layout
- **Container**: Max-width 1200px with responsive padding
- **Grid System**: CSS Grid and Flexbox for layouts
- **Spacing Scale**: Consistent 8px base unit system

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px
- **Large Desktop**: > 1280px

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify
1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Deploy automatically on push to main branch

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts to deploy

## 🔧 Customization

### Adding New Services
1. Update the `services` array in `Services.js`
2. Add corresponding route in `App.js`
3. Update navigation in `Header.js`

### Modifying Colors
1. Update CSS custom properties in `index.css`
2. Colors are defined in the `:root` selector

### Adding New Pages
1. Create new component in `src/components/`
2. Add route in `App.js`
3. Update navigation links

## 📄 License

This project is for educational purposes. The original Canada Cartage website design and content belong to Canada Cartage Group of Companies.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For questions or support, please contact:
- Email: info@canadacartage.com
- Phone: 1-800-268-2228

## 🎯 Future Enhancements

- [ ] Add dark mode toggle
- [ ] Implement search functionality
- [ ] Add blog/news section
- [ ] Integrate with backend API
- [ ] Add multi-language support
- [ ] Implement tracking system
- [ ] Add interactive maps
- [ ] Create admin dashboard

---

**Note**: This is a frontend-only implementation. For a production environment, you would need to integrate with backend services for form handling, data management, and other dynamic features.
