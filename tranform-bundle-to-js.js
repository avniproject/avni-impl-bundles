const fs = require('fs');
const glob = require('glob');
const path = require('path');

function isLikelyJavaScript(str) {
    const jsPatterns = [
        /function\s*\(/,
        /=>\s*{/,
        /return\s+/,
        /if\s*\(/,
        /for\s*\(/,
        /while\s*\(/,
        /var\s+|let\s+|const\s+/,
        /\$\{.*?\}/,
        /\.forEach\(/,
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

function processPaths(jsonObj, targetPaths) {
    if (!jsonObj || typeof obj !== 'object') return jsonObj;

    targetPaths.forEach(path => {
        const value = getValueByPath(jsonObj, path);
        if (typeof value === 'string') {
            console.log(`old value: ${value}`);
            const processedValue = value.replace(/^"(.*)"$/, '$1');
            console.log(`new processed value: ${processedValue}`);
            setValueByPath(jsonObj, path, processedValue);
        }
    });

    return jsonObj;
}

function findAndReplaceJSStrings(jsonString, jsPaths) {
    const jsKeys = jsPaths.map(p => p.path.split('.').pop());
    console.log('Keys to process:', jsKeys);
    
    let processed = jsonString;
    jsKeys.forEach(key => {
        const pattern = `"${key}" : "'use strict';`;
        console.log(`replacing pattern: ${pattern}`);
        processed = processed.replace("//SAMPLE RULE EXAMPLE", "");
        processed = processed.replace(/};\\n"/g, '}\n');
        processed = processed.replace(pattern, `"${key}" : `);
        processed = processed.replace(/\\n/g, '\n');
        processed = processed.replace(/\\"/g, '"');
    });
    
    return processed;
}

function renameJsonToJs(file) {
    try {
        const newFileName = file.replace(/\.json$/, '.js');
        fs.renameSync(file, newFileName);
        console.log(`Renamed: ${file} -> ${newFileName}`);
        return newFileName;
    } catch (err) {
        console.error(`Error renaming file ${file}:`, err.message);
        return null;
    }
}

function replaceJsonNodesHavingJSCode(directory) {
    const results = {};
    
    try {
        let files = glob.sync(`${directory}/**/*.json`);
        
        if (files.length === 0) {
            console.log(`No JSON files found in: ${directory}`);
            return results;
        }

        files.forEach(file => {
            try {
                console.log(`\nProcessing file: ${file}`);
                const content = fs.readFileSync(file, 'utf8');
                const jsonContent = JSON.parse(content);
                const jsPaths = findJavaScriptPaths(jsonContent);
                
                if (jsPaths.length > 0) {
                    console.log(`Found ${jsPaths.length} JavaScript paths in ${file}:`);
                    
                    const processedContent = findAndReplaceJSStrings(content, jsPaths);
                    fs.writeFileSync(file, processedContent);
                    console.log(`Successfully processed file: ${file}`);
                    
                    const newFileName = renameJsonToJs(file);
                    if (!newFileName) {
                        console.error(`Error renaming file ${file}`);
                        return;
                    }
                    
                    results[path.relative(directory, newFileName)] = jsPaths.map(p => p.path);
                } else {
                    console.log(`No JavaScript paths found in ${file}`);
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

const directory = 'csj-uat';
console.log('Processing JSON files...');
const results = replaceJsonNodesHavingJSCode(directory);

console.log('\nSummary of processed files:');
Object.entries(results).forEach(([file, paths]) => {
    console.log(`\nFile: ${file}`);
    console.log('Processed paths:');
    paths.forEach(path => console.log(`  ${path}`));
});