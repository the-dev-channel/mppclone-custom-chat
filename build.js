import * as esbuild from 'esbuild';
import { readFileSync, writeFileSync } from 'node:fs';

esbuild.build({
	entryPoints: ['src/app.tsx'],
	outfile: 'build/build.js',
	bundle: true,
	minify: true,
	target: ['chrome58', 'firefox57', 'safari11', 'edge16']
}).catch(err => console.error).then(() => {
	// apply userscript header
	const header = readFileSync('header.js').toString();
	const build = readFileSync('build/build.js').toString();

	const userscript = header + build;
	writeFileSync('build/mppclone-custom-chat.user.js', userscript);
});
