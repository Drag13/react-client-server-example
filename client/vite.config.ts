import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslintPlugin from 'vite-plugin-eslint';

/**
 * Expose environmental variables from process.env to React
 * @param config Default values
 * @returns Global configuration
 */
function getEnvConfig(config: Record<string, string>): Record<string, string> {
  return Object.keys(config).reduce((acc, key) => {
    const rawValue = process.env[key] ?? config[key];
    acc[`process.env.${key}`] = JSON.stringify(rawValue);
    return acc;
  }, {} as Record<string, string>);
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslintPlugin({})],
  // Jest doesn't support direct import of the variables, like import.meta.env.MODE
  // This is a workaround
  define: getEnvConfig({ API_BASE_PATH: 'http://localhost:5000/api' }),
});
