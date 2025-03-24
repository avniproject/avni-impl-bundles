const fs = require('fs');
const glob = require('glob');
const path = require('path');

function isLikelyJavaScript(str) {
    // Common JavaScript patterns to look for
    const jsPatterns = [
        /function\s*\(/,           // function declarations
        /=>\s*{/,                 // arrow functions
        /return\s+/,              // return statements
        /if\s*\(/,                // if statements
        /for\s*\(/,               // for loops
        /while\s*\(/,             // while loops
        /var\s+|let\s+|const\s+/, // variable declarations
        /\$\{.*?\}/,              // template literals
        /\.forEach\(/,            // common array methods
        /\.map\(/,
        /\.filter\(/
    ];

    return jsPatterns.some(pattern => pattern.test(str));
}

function findJavaScriptPaths(obj, currentPath = '', paths = []) {
    if (!obj || typeof obj !== 'object') return paths;

    for (const [key, value] of Object.entries(obj)) {
        const newPath = currentPath ? `${currentPath}.${key}` : key;
        
        if (typeof value === 'string' && isLikelyJavaScript(value)) {
            paths.push({
                path: newPath,
                value: value
            });
        } else if (typeof value === 'object' && value !== null) {
            findJavaScriptPaths(value, newPath, paths);
        }
    }
    return paths;
}

function getValueByPath(obj, path) {
    return path.split('.').reduce((current, key) => current && current[key], obj);
}

function setValueByPath(obj, path, value) {
    const keys = path.split('.');
    const lastKey = keys.pop();
    const target = keys.reduce((current, key) => current && current[key], obj);
    if (target && typeof target === 'object') {
        target[lastKey] = value;
    }
}

function processJsonNodes(jsonObj, targetPaths) {
    if (!jsonObj || typeof jsonObj !== 'object') return jsonObj;

    targetPaths.forEach(path => {
        const value = getValueByPath(jsonObj, path);
        if (typeof value === 'string') {
            const processedValue = value.replace(/^"(.*)"$/, '$1');
            setValueByPath(jsonObj, path, processedValue);
        }
    });

    return jsonObj;
}

function processJsonFiles(directory) {
    const results = {};
    
    try {
        // Find all JSON files in the directory
        const files = glob.sync(`${directory}/**/*.json`);
        
        if (files.length === 0) {
            console.log(`No JSON files found in: ${directory}`);
            return results;
        }

        files.forEach(file => {
            try {
                const content = fs.readFileSync(file, 'utf8');
                const jsonContent = JSON.parse(content);
                const jsPaths = findJavaScriptPaths(jsonContent);
                
                if (jsPaths.length > 0) {
                    results[path.relative(directory, file)] = jsPaths;
                }
            } catch (err) {
                console.error(`Error processing ${file}:`, err.message);
            }
        });
    } catch (err) {
        console.error('Error:', err.message);
    }
    
    return results;
}

function renameJsonToJs(folderPath) {
    try {
        const files = glob.sync(`${folderPath}/*.json`);
        
        if (files.length === 0) {
            console.log(`No JSON files found in: ${folderPath}`);
            return;
        }

        files.forEach(file => {
            try {
                const newFileName = file.replace(/\.json$/, '.js');
                fs.renameSync(file, newFileName);
                console.log(`Renamed: ${file} -> ${newFileName}`);
            } catch (err) {
                console.error(`Error renaming file ${file}:`, err.message);
            }
        });
        console.log('Finished renaming files');
    } catch (err) {
        console.error('Error:', err.message);
    }
}

// Main execution
const directory = 'csj-uat';
const results = processJsonFiles(directory);

// Print results in a readable format and collect all unique paths
const uniquePaths = new Set();
Object.entries(results).forEach(([file, paths]) => {
    console.log(`\nFile: ${file}`);
    paths.forEach(({path}) => {
        uniquePaths.add(path);
        console.log(`  Path: ${path}`);
    });
});

console.log('\nUnique JavaScript paths found:');
console.log(Array.from(uniquePaths).join('\n'));

// Only rename files after analysis
// renameJsonToJs(directory);