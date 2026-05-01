const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'data');
const outputFile = path.join(__dirname, 'data.js');

function parseMarkdown(text, filename) {
    // Parse frontmatter
    const frontmatterMatch = text.match(/^---\n([\s\S]*?)\n---/);
    let metadata = { filename };
    let content = text;
    
    if (frontmatterMatch) {
        const frontmatter = frontmatterMatch[1];
        frontmatter.split('\n').forEach(line => {
            const match = line.match(/^([^:]+):\s*(.+)$/);
            if (match) {
                const key = match[1].trim();
                let value = match[2].trim();
                // Remove quotes if present
                if (value.startsWith('"') && value.endsWith('"')) {
                    value = value.slice(1, -1);
                }
                metadata[key] = value;
            }
        });
        content = text.slice(frontmatterMatch[0].length).trim();
    }

    return { metadata, content };
}

// Read all markdown files
const files = fs.readdirSync(dataDir)
    .filter(file => file.endsWith('.md'))
    .sort();

const allData = files.map(filename => {
    const filePath = path.join(dataDir, filename);
    const text = fs.readFileSync(filePath, 'utf8');
    return parseMarkdown(text, filename);
});

// Write as JavaScript module
const jsContent = `// Auto-generated from markdown files
const DATA_FILES = ${JSON.stringify(allData, null, 2)};
`;

fs.writeFileSync(outputFile, jsContent, 'utf8');

console.log(`✓ Generated data.js with ${allData.length} entries`);
