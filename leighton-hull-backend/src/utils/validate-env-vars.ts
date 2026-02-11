import * as fs from "node:fs/promises";
import * as path from "node:path";

export default async function validateEnvVars(envVars: Record<string, unknown>) {
  let templateEnvVars: string[] = [];
  try {
    const templateEnv = await fs.readFile(path.join(path.resolve(), "env", ".template.env"), "utf-8");
    templateEnvVars = templateEnv
      .split("\n")
      .filter(line => line.trim().length > 0)
      .filter(line => !line.startsWith("#"));
  } catch (_) {
    return;
  }

  templateEnvVars.forEach(envVarDeclaration => {
    const envVarKey = envVarDeclaration.split("=")[0];
    const isEnvVarOptional = envVarKey.endsWith("_");
    if (isEnvVarOptional) return true;

    const envVarKeyIsPresent =
      envVarKey in envVars &&
      ["string", "number"].includes(typeof envVars[envVarKey]) &&
      ((envVars[envVarKey] as string | number) + "").length > 0;
    if (!envVarKeyIsPresent) throw new Error(`Missing required environment variable: ${envVarKey}`);
  });
}
