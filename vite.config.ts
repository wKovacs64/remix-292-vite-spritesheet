import { vitePlugin as remix } from '@remix-run/dev';
import { installGlobals } from '@remix-run/node';
import { iconsSpritesheet } from 'vite-plugin-icons-spritesheet';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

installGlobals();

export default defineConfig({
  plugins: [
    iconsSpritesheet({
      inputDir: './app/assets/svg-icons',
      outputDir: './app/icons',
      fileName: 'icons-spritesheet.svg',
      withTypes: true,
    }),
    remix(),
    tsconfigPaths(),
  ],
});
