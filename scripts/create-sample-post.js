const { PrismaClient } = require('../lib/generated/prisma')

const prisma = new PrismaClient()

async function createSamplePost() {
  try {
    const samplePost = {
      title: 'Getting Started with Markdown Blogging',
      slug: 'getting-started-with-markdown-blogging',
      content: `# Getting Started with Markdown Blogging

Welcome to our beautiful blog platform! This post demonstrates all the markdown features available in our Medium-style blog.

## What is Markdown?

**Markdown** is a lightweight markup language that you can use to add formatting elements to plaintext text documents. Created by John Gruber in 2004, Markdown is now one of the world's most popular markup languages.

### Key Benefits

- **Easy to learn** - Simple syntax that's intuitive
- **Portable** - Works across different platforms
- **Future-proof** - Plain text format that won't become obsolete
- **Platform independent** - Can be converted to HTML, PDF, and more

## Text Formatting

You can make text **bold** or *italic* easily. You can also use ~~strikethrough~~ for corrections.

### Emphasis Examples

- **Bold text** for important information
- *Italic text* for emphasis or foreign words
- ***Bold and italic*** for strong emphasis
- ~~Strikethrough~~ for corrections or removed content

## Lists

### Unordered Lists

- First item
- Second item
  - Nested item
  - Another nested item
- Third item

### Ordered Lists

1. First step
2. Second step
3. Third step
   1. Sub-step A
   2. Sub-step B
4. Fourth step

## Blockquotes

> This is a blockquote. It's perfect for highlighting important information, quotes, or callouts.

> You can also have multiple paragraphs in a blockquote.
> 
> Just add more lines with the > symbol.

## Code Examples

### Inline Code

Use \`console.log('Hello World')\` to print to the console.

### Code Blocks

\`\`\`javascript
function greet(name) {
  return \`Hello, \${name}!\`;
}

const message = greet('World');
console.log(message); // Output: Hello, World!
\`\`\`

\`\`\`python
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

# Print first 10 Fibonacci numbers
for i in range(10):
    print(fibonacci(i))
\`\`\`

\`\`\`css
.prose {
  max-width: 65ch;
  color: #374151;
  line-height: 1.75;
}

.prose h1 {
  font-size: 2.25rem;
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 1.5rem;
}
\`\`\`

## Links and References

- [Markdown Guide](https://www.markdownguide.org/) - Comprehensive markdown reference
- [GitHub Flavored Markdown](https://github.github.com/gfm/) - Extended markdown features
- [React Markdown](https://github.com/remarkjs/react-markdown) - React component for markdown

## Horizontal Rules

Use three dashes to create a horizontal rule:

---

This creates a nice visual separation between sections.

## Tables

| Feature | Support | Notes |
|---------|---------|-------|
| Headers | ✅ | Full support |
| Bold/Italic | ✅ | Inline formatting |
| Code blocks | ✅ | Syntax highlighting |
| Lists | ✅ | Nested support |
| Links | ✅ | External links work |

## Best Practices

1. **Use descriptive headings** - Make your content scannable
2. **Keep paragraphs short** - Improve readability
3. **Use lists for multiple items** - Better than long paragraphs
4. **Include code examples** - When relevant to your topic
5. **Add links to resources** - Help readers learn more

---

## Conclusion

Markdown makes writing beautiful blog posts easy and enjoyable. With our Medium-style rendering, your content will look professional and be easy to read.

Happy blogging! 🚀

---

*This post was created to demonstrate the markdown features available in our blog platform.*`,
      tags: ['markdown', 'blogging', 'tutorial', 'writing'],
      published: true,
    }

    const existingPost = await prisma.post.findUnique({
      where: { slug: samplePost.slug },
    })

    if (existingPost) {
      console.log('Sample post already exists, updating...')
      await prisma.post.update({
        where: { slug: samplePost.slug },
        data: samplePost,
      })
    } else {
      console.log('Creating sample post...')
      await prisma.post.create({
        data: samplePost,
      })
    }

    console.log('✅ Sample post created/updated successfully!')
    console.log('📝 Visit: http://localhost:3000/blog/getting-started-with-markdown-blogging')
  } catch (error) {
    console.error('❌ Error creating sample post:', error)
  } finally {
    await prisma.$disconnect()
  }
}

createSamplePost() 