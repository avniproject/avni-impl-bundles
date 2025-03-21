const fs = require('fs');
const glob = require('glob');

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

function processJsonFiles(filePattern, targetPaths) {
    try {
        // Find all files matching the pattern
        const files = glob.sync(filePattern);
        
        if (files.length === 0) {
            console.log(`No files found matching pattern: ${filePattern}`);
            return;
        }

        files.forEach(file => {
            try {
                console.log(`Processing file: ${file}`);
                const jsonContent = JSON.parse(fs.readFileSync(file, 'utf8'));
                const processedJson = processJsonNodes(jsonContent, targetPaths);
                
                // Write back to the file with proper formatting
                fs.writeFileSync(file, JSON.stringify(processedJson, null, 2));
                console.log(`Successfully processed: ${file}`);
            } catch (err) {
                console.error(`Error processing file ${file}:`, err.message);
            }
        });
    } catch (err) {
        console.error('Error:', err.message);
    }
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

// Check if file pattern is provided as command line argument
const filePattern = process.argv[2];
const targetPaths = process.argv[3] ? process.argv[3].split(',') : ['description', 'nested.text'];

if (!filePattern) {
    console.log('Usage: node make-multi-line.js <file-pattern> [comma-separated-paths]');
    console.log('Example: node make-multi-line.js "*.json" "description,nested.text"');
    console.log('Note: Use dot notation for nested paths, e.g., "nested.text"');
    process.exit(1);
}

processJsonFiles(filePattern, targetPaths);