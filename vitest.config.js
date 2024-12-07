// <reference types="vitest/globals" />
import { defineConfig } from "vitest/config";

import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // Use global test functions like `describe`, `it`
    environment: "jsdom", // Set the environment to simulate the browser (useful for React/Vue)
    setupFiles: "./src/test/setup.test.js", // Optional: a file to set up global configuration
    coverage: {
      reporter: ["text", "json", "html"], // Customize the coverage output
    },
    transform: {
      "^.+\\.jsx?$": "babel-jest",
    },
  },
});
