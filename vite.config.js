import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite"; // 👈 Tailwind Vite plugin

export default defineConfig({

    plugins: [react(), reactRouter(), tailwindcss()],
});
