# Deployment Guide

This guide provides step-by-step instructions for deploying your Company Profile website.

## 🚀 Quick Deploy Options

### Option 1: Vercel (Recommended)

1. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with your GitHub account
   - Click "New Project"
   - Import your GitHub repository

2. **Configure Project**
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

3. **Environment Variables** (Optional)
   - Add any environment variables if needed

4. **Deploy**
   - Click "Deploy"
   - Vercel will automatically build and deploy your site

### Option 2: Netlify

1. **Connect to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Sign up/Login with your GitHub account
   - Click "New site from Git"

2. **Configure Build Settings**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Install command: `npm install`

3. **Deploy**
   - Click "Deploy site"

### Option 3: GitHub Pages

1. **Build the Project**
   ```bash
   npm run build
   ```

2. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Build for deployment"
   git push origin main
   ```

3. **Enable GitHub Pages**
   - Go to your repository settings
   - Navigate to "Pages"
   - Select "Deploy from a branch"
   - Choose `main` branch and `/docs` folder

4. **Move Build Files**
   ```bash
   mv dist docs
   git add docs
   git commit -m "Add build files for GitHub Pages"
   git push origin main
   ```

## 🔧 Pre-Deployment Checklist

### 1. Update Company Information
- [ ] Replace WhatsApp number in all components
- [ ] Update company name and logo
- [ ] Update contact information
- [ ] Update team information
- [ ] Update service descriptions and pricing

### 2. Configure Environment Variables
Create a `.env` file with:
```env
VITE_COMPANY_NAME="Your Company Name"
VITE_WHATSAPP_NUMBER="+1234567890"
VITE_EMAIL="info@yourcompany.com"
VITE_PHONE="+1234567890"
VITE_ADDRESS="Your Address"
```

### 3. Test Locally
```bash
npm run build
npm run preview
```

### 4. SEO Optimization
- [ ] Update meta tags in `index.html`
- [ ] Add Google Analytics (if needed)
- [ ] Configure Google Search Console
- [ ] Add sitemap.xml

## 📱 Post-Deployment

### 1. Test All Features
- [ ] Navigation works correctly
- [ ] WhatsApp integration works
- [ ] Contact form submits properly
- [ ] Dark/light mode toggle works
- [ ] All pages load correctly
- [ ] Mobile responsiveness

### 2. Performance Optimization
- [ ] Run Lighthouse audit
- [ ] Optimize images if needed
- [ ] Enable compression
- [ ] Set up CDN if needed

### 3. Analytics Setup
- [ ] Google Analytics
- [ ] Google Search Console
- [ ] Facebook Pixel (if needed)

## 🔒 Security Considerations

### 1. Environment Variables
- Never commit sensitive information to Git
- Use environment variables for API keys
- Keep `.env` files in `.gitignore`

### 2. HTTPS
- Ensure your hosting provider supports HTTPS
- Set up SSL certificates
- Redirect HTTP to HTTPS

### 3. Content Security Policy
Add CSP headers to prevent XSS attacks:
```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';">
```

## 📊 Monitoring

### 1. Performance Monitoring
- Set up performance monitoring tools
- Monitor Core Web Vitals
- Track user experience metrics

### 2. Error Tracking
- Set up error tracking (Sentry, LogRocket)
- Monitor JavaScript errors
- Track API failures

### 3. Uptime Monitoring
- Set up uptime monitoring
- Configure alerts for downtime
- Monitor response times

## 🔄 Continuous Deployment

### 1. Automated Deployments
- Set up automatic deployments on push to main
- Configure staging environment
- Set up deployment notifications

### 2. Testing
- Add automated tests
- Set up CI/CD pipeline
- Configure pre-deployment checks

## 🆘 Troubleshooting

### Common Issues

1. **Build Fails**
   - Check Node.js version compatibility
   - Verify all dependencies are installed
   - Check for TypeScript errors

2. **Styling Issues**
   - Verify Tailwind CSS is configured correctly
   - Check PostCSS configuration
   - Ensure CSS is being generated

3. **Routing Issues**
   - Configure 404 redirects for SPA
   - Check React Router configuration
   - Verify base URL settings

4. **Performance Issues**
   - Optimize bundle size
   - Enable code splitting
   - Compress assets

## 📞 Support

If you encounter issues:
1. Check the browser console for errors
2. Review the build logs
3. Test locally first
4. Check the hosting provider's documentation
5. Contact support if needed

---

**Happy Deploying! 🚀**

