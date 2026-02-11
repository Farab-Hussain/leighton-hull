// features/google-sheets/google-sheets.module.ts
import { Module } from "@nestjs/common";
import { GoogleSheets } from "./google-sheets.service";
import { DBModule } from "@/db/db.module";

@Module({
  imports: [DBModule],
  providers: [GoogleSheets],
  exports: [GoogleSheets]
})
export class GoogleSheetsModule {}
