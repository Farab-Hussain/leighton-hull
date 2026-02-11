import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class DbService extends PrismaClient {
  constructor(configService: ConfigService) {
    const databaseUrl = configService.get<string>("DATABASE_URL");

    if (databaseUrl) {
      super({
        datasources: {
          db: {
            url: databaseUrl
          }
        },
        log: ["info"]
      });
    } else {
      // Initialize without database connection
      super({
        datasources: {
          db: {
            url: "file:./dev.db"
          }
        },
        log: []
      });
    }
  }
}
