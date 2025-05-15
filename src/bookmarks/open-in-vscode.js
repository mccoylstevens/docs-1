/* The path to your local copy of repo */
const checkoutPath = 'REPO_PATH' // e.g. '/Users/username/Projects/vscode-docs'
/* The path to your local copy of repo */

const filepath = window.location.pathname.replace(/\/en\/([^@]+?@[^@]+?\/)?/, '/content/')
const isIndexFile = filepath.split('/').length < 5
const filename = isIndexFile ? '/index.md' : '.md'
const fullpath = 'vscode://file' + checkoutPath + filepath + filename
window.open(fullpath, '_blank')
