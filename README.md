# mppclone-custom-chat

This script is a work-in-progress. The idea is to allow developers to create parsers for custom content in chat easily.

## Building

To build, get the dependencies by running `yarn`, and then build with `node build.js`. This will output the full bundle in `build/mppclone-custom-chat.user.js`, complete with a userscript header.

## Development Setup

Because of the way browser extensions work, Tampermonkey on a Chromium-based browser is required to load files from disk correctly.

Under "Details" of Tampermonkey on Chromium's extension management page, enable "Allow access to file URLs". This will allow the script to load correctly.

After this, copy the contents of `development_header.js` into a new Tampermonkey script and modify the file URI of the `@require` tag to point to your local copy of the bundle. This will load the bundle locally from the disk so you can run the build script and reload the page without having to replace the script.
