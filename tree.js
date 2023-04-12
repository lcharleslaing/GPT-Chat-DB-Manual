// tree.mjs

import { readdirSync, statSync, writeFileSync } from 'fs';
import { join } from 'path';
import { createCanvas, loadImage } from 'canvas';

const directoryPath = '.';
const outputFilename = 'tree.txt';
const outputImageFilename = 'tree.png';
const ignoredDirs = ['node_modules', '.git', '.svelte-kit'];

function buildTree(dir, depth, tree = '') {
    const files = readdirSync(dir).sort();

    files.forEach((file, index) => {
        const isLastFile = index === files.length - 1;
        const filePath = join(dir, file);
        const fileStats = statSync(filePath);

        if (fileStats.isDirectory() && !ignoredDirs.includes(file)) {
            tree += `${depth}${isLastFile ? '└──' : '├──'} ${file}\n`;
            tree = buildTree(filePath, depth + (isLastFile ? '    ' : '│   '), tree);
        } else if (fileStats.isFile()) {
            tree += `${depth}${isLastFile ? '└──' : '├──'} ${file}\n`;
        }
    });

    return tree;
}

function createImageFromText(text) {
    const lines = text.split('\n');
    const lineHeight = 20;
    const canvasWidth = Math.max(...lines.map(line => line.length)) * 10;
    const canvasHeight = lines.length * lineHeight;

    const canvas = createCanvas(canvasWidth, canvasHeight);
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    ctx.fillStyle = 'black';
    ctx.font = `${lineHeight}px monospace`;

    lines.forEach((line, index) => {
        ctx.fillText(line, 0, (index + 1) * lineHeight);
    });

    return canvas.toBuffer('image/png');
}

const tree = buildTree(directoryPath, '');
writeFileSync(outputFilename, tree);

const imageBuffer = createImageFromText(tree);
writeFileSync(outputImageFilename, imageBuffer);

console.log(`Project tree has been written to ${outputFilename}`);
console.log(`Project tree image has been written to ${outputImageFilename}`);
