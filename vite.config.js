import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      // Use polling to detect file changes in Docker
      usePolling: true,
    },
    // Optional: Increase the polling interval (in ms) if necessary
    // watch: {
    //   usePolling: true,
    //   interval: 1000,
    // },
    host: true,  // Make the server accessible externally
    port: 5173,  // Ensure the port matches your Docker run command
  },
})
