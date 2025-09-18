const chalk = require("chalk");
import fs from "fs";
import path from "path";

export interface ProjectConfig {
  tsx: boolean;
  ts: boolean;
  paths: {
    ui: string;
    blocks: string;
    snippets: string
  };
  alwaysForce: boolean;
  iconLibrary: string;
}

export const getConfig = (cwd: string): ProjectConfig | null => {
  const configFilePath = path.join(cwd, "aura-ui.config.json");

  if (!fs.existsSync(configFilePath)) {
    console.log(chalk.red("Aura UI config file not found"));
    console.log("Aura UI is not initialized in this project");
    console.log(chalk.yellow("Run `aura-ui init` to initialize Aura UI in your project"));
    process.exit(1);
  }

  const config = fs.readFileSync(configFilePath, "utf8");

  return JSON.parse(config) as ProjectConfig;
}
