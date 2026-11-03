
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const basePath =
    env.VITE_BASE_PATH ||
    process.env.VITE_BASE_PATH ||
    '/alveeishraque-2-portfolio/'

  return {
    plugins: [react()],
    base: basePath.endsWith('/') ? basePath : `${basePath}/`,
    server: {
      port: 3000,
      open: false,
    },
  }
})
