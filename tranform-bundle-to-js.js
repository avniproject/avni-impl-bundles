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
            // Remove surrounding double quotes if they exist
            const processedValue = value.replace(/^"(.*)"$/, '$1');
            setValueByPath(jsonObj, path, processedValue);
        }
    });

    return jsonObj;
}

function replaceJsonNodesHavingJSCode(directory) {
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
                console.log(`Processing file: ${file}`);
                const content = fs.readFileSync(file, 'utf8');
                const jsonContent = JSON.parse(content);
                const jsPaths = findJavaScriptPaths(jsonContent);
                
                if (jsPaths.length > 0) {
                    // Process the found JavaScript paths to remove quotes
                    const paths = jsPaths.map(item => item.path);
                    const processedJson = processJsonNodes(jsonContent, paths);
                    
                    // Write back to the file
                    fs.writeFileSync(file, JSON.stringify(processedJson, null, 2));
                    console.log(`Successfully processed ${paths.length} paths in: ${file}`);
                    
                    // Store the results
                    results[path.relative(directory, file)] = paths;
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

// First process the files to remove quotes from JavaScript paths
console.log('Processing JSON files to remove quotes from JavaScript paths...');
const results = replaceJsonNodesHavingJSCode(directory);

// Print summary of processed paths
console.log('\nSummary of processed files:');
Object.entries(results).forEach(([file, paths]) => {
    console.log(`\nFile: ${file}`);
    console.log('Processed paths:');
    paths.forEach(path => console.log(`  ${path}`));
});

// Finally rename the files
console.log('\nRenaming files...');
renameJsonToJs(directory);