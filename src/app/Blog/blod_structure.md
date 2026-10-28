You add posts/new-post.md
        ↓
You commit and push to cdev-blog-content
        ↓
GitHub sends a webhook to cdev2.0 on Vercel
        ↓
The endpoint verifies the secret and asks Next.js to refresh blog data
        ↓
The next visit to /Blog gets the updated list
        ↓
A visit to /Blog/new-post fetches and displays the new post