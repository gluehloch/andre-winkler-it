import propertiesReader from 'properties-reader';
import * as fs from 'fs';

var properties = propertiesReader('./build.properties');

const target = properties.get('var.www.andre-winkler');

console.info("target=", target);

async function copy() {
    try {
        // Copy a single file
        // await cp('sourceFile.txt', 'destinationFile.txt');
        // console.log('sourceFile.txt was copied to destinationFile.txt');

        // Copy a directory recursively
        await fs.cp('./dist/angularapp', 'target', { recursive: true });
        console.log('sourceDir was copied to destinationDir');
    } catch (err) {
        console.error('Error:', err.message);
    }
}

await copy();
