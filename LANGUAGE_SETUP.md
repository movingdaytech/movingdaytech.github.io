# MovingDay Language Switching Setup

This guide explains how to set up URL-based language switching for the MovingDay website.

## Overview

The language switching system now uses URL paths instead of JavaScript state:
- `/tc` - Traditional Chinese (繁體中文)
- `/sc` - Simplified Chinese (简体中文) - same as Traditional for now
- `/en` - English
- `/kr` - Korean (한국어)
- `/jp` - Japanese (日本語)

## Server Configuration

### Apache (.htaccess)
The `.htaccess` file is already configured to handle language routing. Make sure your Apache server has `mod_rewrite` enabled.

### Nginx
Add this to your Nginx configuration:

```nginx
location / {
    try_files $uri $uri/ /index.html;
}

# Language routing
location ~ ^/(tc|sc|en|kr|jp) {
    try_files $uri $uri/ /index.html;
}
```

### Netlify
Create a `_redirects` file in your root directory:

```
/tc    /index.html   200
/sc    /index.html   200
/en    /index.html   200
/kr    /index.html   200
/jp    /index.html   200
```

### Vercel
Create a `vercel.json` file:

```json
{
  "rewrites": [
    { "source": "/tc", "destination": "/index.html" },
    { "source": "/sc", "destination": "/index.html" },
    { "source": "/en", "destination": "/index.html" },
    { "source": "/kr", "destination": "/index.html" },
    { "source": "/jp", "destination": "/index.html" }
  ]
}
```

## How It Works

1. **URL Detection**: The `LanguageRouter` class detects the language from the URL path
2. **Content Update**: All text content with `data-*` attributes is updated based on the selected language
3. **Image Switching**: Language-specific images are automatically loaded
4. **Meta Updates**: Page title and description are updated for SEO
5. **Browser History**: Users can use browser back/forward buttons to navigate between languages

## Benefits

- **SEO Friendly**: Each language has its own URL
- **Shareable Links**: Users can share direct links to specific language versions
- **Browser Navigation**: Back/forward buttons work correctly
- **Bookmarkable**: Users can bookmark specific language versions
- **Server-Side Ready**: Can be easily extended for server-side rendering

## Testing

1. Navigate to `/tc` - should show Traditional Chinese
2. Navigate to `/en` - should show English
3. Navigate to `/kr` - should show Korean
4. Navigate to `/jp` - should show Japanese
5. Use browser back/forward buttons to test navigation
6. Test direct URL access to each language path

## Troubleshooting

- **404 Errors**: Ensure your server is configured to handle the language routes
- **Images Not Loading**: Check that language-specific image files exist in the assets folder
- **Content Not Updating**: Verify that HTML elements have the correct `data-*` attributes
- **Browser Cache**: Clear browser cache if changes don't appear immediately
