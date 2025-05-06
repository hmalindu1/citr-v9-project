// vite.config.js
import { defineConfig } from "file:///E:/complete%20intro%20react%20v9/citr-v9-project/01-no-frills-react/node_modules/vite/dist/node/index.js";
import react from "file:///E:/complete%20intro%20react%20v9/citr-v9-project/01-no-frills-react/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { TanStackRouterVite } from "file:///E:/complete%20intro%20react%20v9/citr-v9-project/01-no-frills-react/node_modules/@tanstack/router-plugin/dist/esm/vite.js";
var vite_config_default = defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true
      },
      "/public": {
        target: "http://localhost:3000",
        changeOrigin: true
      }
    }
  },
  plugins: [TanStackRouterVite(), react()]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxjb21wbGV0ZSBpbnRybyByZWFjdCB2OVxcXFxjaXRyLXY5LXByb2plY3RcXFxcMDEtbm8tZnJpbGxzLXJlYWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJFOlxcXFxjb21wbGV0ZSBpbnRybyByZWFjdCB2OVxcXFxjaXRyLXY5LXByb2plY3RcXFxcMDEtbm8tZnJpbGxzLXJlYWN0XFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9FOi9jb21wbGV0ZSUyMGludHJvJTIwcmVhY3QlMjB2OS9jaXRyLXY5LXByb2plY3QvMDEtbm8tZnJpbGxzLXJlYWN0L3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xyXG5pbXBvcnQgeyBUYW5TdGFja1JvdXRlclZpdGV9IGZyb20gXCJAdGFuc3RhY2svcm91dGVyLXBsdWdpbi92aXRlXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgc2VydmVyOiB7XHJcbiAgICBwcm94eToge1xyXG4gICAgICBcIi9hcGlcIjoge1xyXG4gICAgICAgIHRhcmdldDogXCJodHRwOi8vbG9jYWxob3N0OjMwMDBcIixcclxuICAgICAgICBjaGFuZ2VPcmlnaW46IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIFwiL3B1YmxpY1wiOiB7XHJcbiAgICAgICAgdGFyZ2V0OiBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiLFxyXG4gICAgICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBwbHVnaW5zOiBbVGFuU3RhY2tSb3V0ZXJWaXRlKCksIHJlYWN0KCldLFxyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF1WCxTQUFTLG9CQUFvQjtBQUNwWixPQUFPLFdBQVc7QUFDbEIsU0FBUywwQkFBeUI7QUFFbEMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsUUFBUTtBQUFBLElBQ04sT0FBTztBQUFBLE1BQ0wsUUFBUTtBQUFBLFFBQ04sUUFBUTtBQUFBLFFBQ1IsY0FBYztBQUFBLE1BQ2hCO0FBQUEsTUFDQSxXQUFXO0FBQUEsUUFDVCxRQUFRO0FBQUEsUUFDUixjQUFjO0FBQUEsTUFDaEI7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUyxDQUFDLG1CQUFtQixHQUFHLE1BQU0sQ0FBQztBQUN6QyxDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
