// import { createRequire } from "module";
const createRequire = require('module')
// const require = createRequire(import.meta.url);
const AdminJS = require("adminjs");
const path = require("path");
const ComponentLoader = AdminJS.ComponentLoader;

const componentLoader = new ComponentLoader();

const Components = {
  Dashboard: componentLoader.add(
    "MyDashboard",
    path.resolve("./Components/Dashboard/MyDashBoard.jsx")
  ),
  // other custom components
};

module.exports = { componentLoader, Components };