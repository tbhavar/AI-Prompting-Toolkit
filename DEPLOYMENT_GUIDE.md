# 🚀 Deployment Guide - GitHub Pages

This guide will help you deploy your Prompt Engineering Mastery platform on GitHub Pages in less than 5 minutes.

## Prerequisites

- A GitHub account (create one at https://github.com if you don't have one)
- Git installed on your computer (download from https://git-scm.com/)
- Basic command line knowledge

## Step-by-Step Deployment

### Step 1: Create a New Repository on GitHub

1. Go to https://github.com/new
2. Repository name: `prompt-engineering-mastery` (or any name you prefer)
3. Description: "Interactive gamified learning platform for prompt engineering"
4. Choose "Public" (required for free GitHub Pages)
5. **Do NOT** initialize with README, .gitignore, or license
6. Click "Create repository"

### Step 2: Prepare Your Files

Make sure you have all these files in a folder:
- `index.html`
- `styles.css`
- `script.js`
- `README.md`
- `.gitignore`

### Step 3: Initialize Git and Push

Open your terminal/command prompt in the project folder and run:

\`\`\`bash
# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit: Prompt Engineering Mastery platform"

# Add your GitHub repository as remote (replace with your username and repo name)
git remote add origin https://github.com/YOUR_USERNAME/prompt-engineering-mastery.git

# Push to GitHub
git branch -M main
git push -u origin main
\`\`\`

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" section (left sidebar)
4. Under "Source":
   - Select "Deploy from a branch"
   - Branch: `main`
   - Folder: `/ (root)`
5. Click "Save"

### Step 5: Wait for Deployment

- GitHub will build and deploy your site
- This usually takes 1-3 minutes
- You'll see a green checkmark when it's ready
- Your site will be available at: `https://YOUR_USERNAME.github.io/prompt-engineering-mastery/`

## Verification

1. Visit your GitHub Pages URL
2. You should see the welcome modal asking for your name
3. Enter your name and click "Begin Learning"
4. Explore the modules and test the quiz system

## Troubleshooting

### Issue: Page shows 404 error

**Solution:**
- Wait a few more minutes (initial deployment can take up to 10 minutes)
- Check that "GitHub Pages" is enabled in Settings → Pages
- Ensure your repository is Public
- Verify the branch is set to "main" and folder to "/ (root)"

### Issue: Welcome modal doesn't close after entering name

**Solution:**
- This issue has been fixed in the latest code
- Clear your browser cache (Ctrl+F5 or Cmd+Shift+R)
- Try in an incognito/private window

### Issue: Styles not loading

**Solution:**
- Check that `styles.css` is in the same folder as `index.html`
- Verify file names are exactly: `index.html`, `styles.css`, `script.js`
- Check browser console for errors (F12 → Console tab)

### Issue: JavaScript not working

**Solution:**
- Ensure `script.js` is in the same folder as `index.html`
- Check browser console for errors
- Verify particles.js CDN is accessible

## Updating Your Site

To make changes after deployment:

\`\`\`bash
# Make your changes to the files

# Stage changes
git add .

# Commit changes
git commit -m "Description of your changes"

# Push to GitHub
git push origin main
\`\`\`

GitHub Pages will automatically rebuild your site within 1-2 minutes.

## Custom Domain (Optional)

If you want to use a custom domain like `promptmastery.com`:

1. Buy a domain from a registrar (GoDaddy, Namecheap, etc.)
2. In GitHub repository Settings → Pages → Custom domain
3. Enter your domain name
4. In your domain registrar's DNS settings, add:
   - Type: A Record
   - Name: @ (or leave blank)
   - Value: 185.199.108.153
   - Also add: 185.199.109.153, 185.199.110.153, 185.199.111.153
5. For www subdomain:
   - Type: CNAME
   - Name: www
   - Value: YOUR_USERNAME.github.io

## Performance Optimization

### Enable HTTPS
- GitHub Pages automatically provides HTTPS
- In Settings → Pages, check "Enforce HTTPS"

### CDN Usage
The site already uses CDN for:
- Google Fonts
- Font Awesome icons
- Particles.js library

### Caching
- Browsers automatically cache CSS and JS files
- Users will have faster load times on repeat visits

## Monitoring

### GitHub Pages Status
- Check build status at: repository → Actions tab
- Green checkmark = successful deployment
- Red X = deployment failed (check error logs)

### Analytics (Optional)
To track visitors, add Google Analytics:

1. Get Google Analytics tracking ID
2. Add this before `</head>` in index.html:

\`\`\`html
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
\`\`\`

## Sharing Your Site

Once deployed, share your site URL:
- On LinkedIn
- With students/colleagues
- In learning communities
- On social media

**Example LinkedIn Post:**

> 🎓 Excited to share my new project: Prompt Engineering Mastery!
> 
> An interactive, gamified learning platform that makes learning prompt engineering fun and engaging.
> 
> ✅ 8 comprehensive modules
> ✅ Interactive quizzes
> ✅ 25 achievements to unlock
> ✅ Progress tracking
> 
> Try it here: [Your GitHub Pages URL]
> 
> #PromptEngineering #AI #EdTech #Learning

## Security Best Practices

- Never commit API keys or secrets (not applicable for this static site)
- Keep dependencies updated
- Monitor repository for security alerts
- Use HTTPS (enabled by default on GitHub Pages)

## Backup

Your code is automatically backed up on GitHub, but you can also:

1. Download repository as ZIP (Code → Download ZIP)
2. Clone to multiple locations: `git clone [your-repo-url]`
3. Keep local copies on external drives

## Support

If you encounter issues:

1. Check GitHub Status: https://www.githubstatus.com/
2. Review GitHub Pages documentation: https://docs.github.com/en/pages
3. Open an issue in your repository
4. Contact: [LinkedIn](https://www.linkedin.com/in/tbhavar)

---

**Congratulations! Your site is now live! 🎉**

Share it with the world and help others learn prompt engineering!
