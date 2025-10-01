// vite.config.ts
import { defineConfig } from "file:///home/project/node_modules/vite/dist/node/index.js";
import react from "file:///home/project/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [react()],
  server: {
    historyApiFallback: true,
    headers: {
      "Cache-Control": "public, max-age=31536000"
    }
  },
  build: {
    rollupOptions: {
      external: [],
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          helmet: ["react-helmet-async"]
        }
      }
    }
  },
  resolve: {
    dedupe: ["react", "react-dom"]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9wcm9qZWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9wcm9qZWN0L3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3Byb2plY3Qvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtyZWFjdCgpXSxcbiAgc2VydmVyOiB7XG4gICAgaGlzdG9yeUFwaUZhbGxiYWNrOiB0cnVlLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDYWNoZS1Db250cm9sJzogJ3B1YmxpYywgbWF4LWFnZT0zMTUzNjAwMCdcbiAgICB9XG4gIH0sXG4gIGJ1aWxkOiB7XG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgZXh0ZXJuYWw6IFtdLFxuICAgICAgb3V0cHV0OiB7XG4gICAgICAgIG1hbnVhbENodW5rczoge1xuICAgICAgICAgIHZlbmRvcjogWydyZWFjdCcsICdyZWFjdC1kb20nXSxcbiAgICAgICAgICBoZWxtZXQ6IFsncmVhY3QtaGVsbWV0LWFzeW5jJ11cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgcmVzb2x2ZToge1xuICAgIGRlZHVwZTogWydyZWFjdCcsICdyZWFjdC1kb20nXVxuICB9XG59KTsiXSwKICAibWFwcGluZ3MiOiAiO0FBQXlOLFNBQVMsb0JBQW9CO0FBQ3RQLE9BQU8sV0FBVztBQUVsQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsTUFBTSxDQUFDO0FBQUEsRUFDakIsUUFBUTtBQUFBLElBQ04sb0JBQW9CO0FBQUEsSUFDcEIsU0FBUztBQUFBLE1BQ1AsaUJBQWlCO0FBQUEsSUFDbkI7QUFBQSxFQUNGO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxlQUFlO0FBQUEsTUFDYixVQUFVLENBQUM7QUFBQSxNQUNYLFFBQVE7QUFBQSxRQUNOLGNBQWM7QUFBQSxVQUNaLFFBQVEsQ0FBQyxTQUFTLFdBQVc7QUFBQSxVQUM3QixRQUFRLENBQUMsb0JBQW9CO0FBQUEsUUFDL0I7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLFFBQVEsQ0FBQyxTQUFTLFdBQVc7QUFBQSxFQUMvQjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
