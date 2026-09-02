import { readFile } from 'node:fs/promises';

const versionFile = await readFile(
    'dist/version.json',
    'utf8'
);

const buildInfo = JSON.parse(versionFile);

const environment = process.env.DEPLOY_ENV || 'unknown';

console.log('=================================');
console.log('STAGING DEPLOYMENT');
console.log('=================================');

console.log(`Application: ${buildInfo.application}`);
console.log(`Version: ${buildInfo.version}`);
console.log(`Environment: ${environment}`);

console.log('');
console.log('Deploying application...');

if (process.env.DEPLOY_FAIL === 'true') {
    console.error('Deployment failed!');
    process.exit(1);
}

console.log('Deployment successful.');
console.log('=================================');