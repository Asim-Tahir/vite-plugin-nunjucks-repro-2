# [vite-plugin-nunjucks #2 Issue Repro](https://github.com/Jax-p/vite-plugin-nunjucks/issues/2)

## Installation Instruction

1. Install dependencies

   ```bash
   yarn
   ```

   ```bash
   npm i
   ```

2. Running the Project

   ```
   yarn dev
   npm run dev
   ```

3. See error on browser console:

   - Go to [http://localhost:3000](http://localhost:3000) in browser.
   - See error in editor console

```log
10:49:01 [vite] Internal server error: Cannot read properties of undefined (reading '*')
      at handleTransformHtml (<project-directory>\node_modules\vite-plugin-nunjucks\dist\index.js:88:46)
      at applyHtmlTransforms (<project-directory>\node_modules\vite\dist\node\chunks\dep-be032392.js:21536:27)
      at Object.transformIndexHtml (<project-directory>\node_modules\vite\dist\node\chunks\dep-be032392.js:56916:16)
      at viteIndexHtmlMiddleware (<project-directory>\node_modules\vite\dist\node\chunks\dep-be032392.js:57024:41)
      at call (<project-directory>\node_modules\vite\dist\node\chunks\dep-be032392.js:45584:7)
      at next (<project-directory>\node_modules\vite\dist\node\chunks\dep-be032392.js:45528:5)
      at <project-directory>\node_modules\vite\dist\node\chunks\dep-be032392.js:55392:16
      at viteSpaFallbackMiddleware (<project-directory>\node_modules\vite\dist\node\chunks\dep-be032392.js:55472:16)
      at call (<project-directory>\node_modules\vite\dist\node\chunks\dep-be032392.js:45584:7)
      at next (<project-directory>\node_modules\vite\dist\node\chunks\dep-be032392.js:45528:5)
```
