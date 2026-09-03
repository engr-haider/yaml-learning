import { mkdir, writeFile } from 'node:fs/promises';

const version = process.env.GITHUB_SHA || 'local-development';

await mkdir('dist', { recursive: true });

await writeFile(
    'dist/version.json',
    JSON.stringify(
        {
            application: 'employee-leave-api',
            version,
            environment: 'staging'
        },
        null,
        2
    )
);

console.log('Build completed.');
console.log(`Version: ${version}`);