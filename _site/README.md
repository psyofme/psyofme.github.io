# [psyofme - Psychology Blog](https://anvndev.github.io/psyofme/)

A professional Jekyll-based blog focused on psychology, mental health, mindfulness, and personal growth. Built with clean design principles and optimized for readability and user experience.

## 🧠 About psyofme

**psyofme** is a personal project created by **Andrey Ng** — a space to share reflections, emotional experiences, and psychological insights.

Born out of a desire to express inner thoughts and promote self-understanding, this project aims to offer a quiet place where stories are told with honesty and empathy.

Through each written piece, I hope you'll find something meaningful — whether it's strength, clarity, or simply a sense of comfort in knowing you're not alone.

**Wishing you peace, growth, and all good things on your journey.**

## ✨ Features

- **Clean, Professional Design**: Calming color palette and typography optimized for reading
- **Responsive Layout**: Seamless experience across all devices
- **SEO Optimized**: Built-in SEO tags, sitemaps, and structured data
- **Fast Loading**: Optimized images and efficient CSS
- **Accessibility**: WCAG compliant design with proper contrast and navigation
- **Content Categories**: Organized topics including Clinical Psychology, Personal Growth, Mindfulness, and Relationships
- **Social Sharing**: Easy sharing across social platforms
- **RSS Feed**: Keep readers updated with new content

## 🚀 Quick Start

### Prerequisites
- Ruby 3.1 or higher
- Bundler gem

### Local Development

```bash
# Clone the repository
git clone https://github.com/anvndev/psyofme.git
cd psyofme

# Install dependencies
bundle install

# Start development server
bundle exec jekyll serve --livereload

# Visit http://localhost:4000
```

### GitHub Pages Deployment

This blog is configured for automatic deployment to GitHub Pages. Simply:

1. Push to the `main` branch
2. GitHub Actions will automatically build and deploy
3. Your site will be available at `https://yourusername.github.io`

## 📝 Content Management

### Creating New Posts

Create new posts in the `_posts` directory with the naming convention: `YYYY-MM-DD-title.md`

```yaml
---
layout: post
title: "Your Post Title"
description: "SEO-optimized description"
date: YYYY-MM-DD
categories: [Clinical Psychology, Personal Growth, Mindfulness, Relationships]
tags: [tag1, tag2, tag3]
image: "path/to/image.jpg"
author: "Andrey Ng"
featured: true/false
---

Your content here...
```

### Available Categories
- **Clinical Psychology**: Evidence-based approaches to mental health
- **Personal Growth**: Self-improvement and emotional intelligence
- **Mindfulness**: Meditation and contemplative practices
- **Relationships**: Interpersonal dynamics and communication

## 🎨 Customization

### Colors
The color scheme is defined in CSS variables and can be easily customized:

```css
:root {
  --primary-color: #2A4365;    /* Deep Blue */
  --secondary-color: #718096;   /* Soft Gray */
  --accent-color: #4A5568;      /* Muted Blue-Gray */
  --background-color: #F7FAFC;  /* Off-white */
}
```

### Typography
- **Headings**: Merriweather (serif)
- **Body**: Source Sans Pro (sans-serif)
- **Line Height**: 1.8 for optimal readability

### Layout Options
- Container max-width: 1200px
- Content max-width: 720px (for optimal reading)
- Responsive breakpoints: 768px, 480px

## 📱 Responsive Design

The blog is fully responsive with optimized layouts for:
- **Desktop**: Full-width layouts with sidebar navigation
- **Tablet**: Adjusted grid layouts and touch-friendly navigation
- **Mobile**: Single-column layout with hamburger menu

## 🔧 Technical Features

### Performance
- Optimized images with lazy loading
- Minified CSS and JavaScript
- Efficient font loading with preconnect
- Progressive enhancement

### SEO & Analytics
- Jekyll SEO Tag plugin
- Structured data markup
- XML sitemap generation
- RSS feed
- Social media meta tags

### Accessibility
- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images
- Keyboard navigation support
- WCAG AA contrast compliance

## 🤝 Contributing

Contributions are welcome! Please feel free to submit issues or pull requests.

### Content Guidelines
- All content should be evidence-based and professionally written
- Include proper citations for research claims
- Maintain a compassionate, non-judgmental tone
- Ensure content is accessible to a general audience

### Code Guidelines
- Follow Jekyll best practices
- Maintain responsive design principles
- Test across different browsers and devices
- Optimize for performance and accessibility

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Contact**: [avndev](https://anvndev.github.io/)
- **Twitter**: [@psyofme](https://twitter.com/psyofme)
- **GitHub**:  [anvndev](https://github.com/anvndev)

## 🙏 Acknowledgments

- Jekyll and the Jekyll community
- GitHub Pages for free hosting
- Pexels for stock photography
- The psychology and mental health community for inspiration

---

*This blog provides educational content about psychology and is not a substitute for professional mental health treatment.*
