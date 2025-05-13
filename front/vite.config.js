import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  plugins: [tailwindcss()],
  server: {
    host: true, // or use '0.0.0.0'
    port: 5173, // default Vite port
  },
});
