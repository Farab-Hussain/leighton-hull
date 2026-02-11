import { Injectable } from "@nestjs/common";
import { plainToInstance, ClassConstructor } from "class-transformer";
import { validate } from "class-validator";
import type { ValidationError as CVError } from "class-validator";

@Injectable()
export class UtilsService {
  async parseAndValidate<T extends object>(data: unknown, cls: ClassConstructor<T>): Promise<T> {
    const instance = plainToInstance(cls, data, {
      enableImplicitConversion: true // e.g., "123" -> 123 when reasonable
    });

    const errors = await validate(instance, {
      whitelist: true, // strip unknowns at class-validator level too
      forbidNonWhitelisted: false,
      skipMissingProperties: false
    });

    if (errors.length) {
      const issues = this.flattenIssues(errors);
      throw new ValidationError(issues);
    }
    return instance;
  }

  flattenIssues(errors: CVError[], parentPath = ""): Array<{ path: string; message: string }> {
    const out: Array<{ path: string; message: string }> = [];
    for (const e of errors) {
      const path = parentPath ? `${parentPath}.${e.property}` : e.property;
      if (e.constraints) {
        for (const msg of Object.values(e.constraints)) out.push({ path, message: msg });
      }
      if (e.children && e.children.length) {
        out.push(...this.flattenIssues(e.children, path));
      }
    }
    return out;
  }
}

export class ValidationError extends Error {
  constructor(public issues: Array<{ path: string; message: string }>) {
    super("Validation failed");
  }
}
