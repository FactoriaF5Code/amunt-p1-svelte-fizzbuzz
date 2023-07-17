# Cómo añadir tests

```
npm install --save-dev vitest jsdom @testing-library/jest-dom @testing-library/svelte @sveltejs/vite-plugin-svelte vite 
```

Archivo `package.json`

```json
{
  "scripts": {
    "test": "vitest run src",
    "test:watch": "vitest src"
  }
}
```

vitest.config.js
```javascript
import {defineConfig} from 'vitest/config'
import {svelte} from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
  plugins: [svelte({hot: !process.env.VITEST})],
  test: {
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    globals: true,
    environment: 'jsdom',
  },
})
```
