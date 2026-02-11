/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { google } from "googleapis";

@Injectable()
export class GoogleSheets {
  constructor(private readonly configService: ConfigService) {}

  private readonly SPREADSHEET_ID = this.configService.get<string>("SPREADSHEET_ID");

  private async getAuthSheets(spreadsheetId: string) {
    const auth = new google.auth.GoogleAuth({
      keyFile: "./secrets/credentials.json",
      scopes: "https://www.googleapis.com/auth/spreadsheets"
    });

    const client = await auth.getClient();

    const googleSheets = google.sheets({
      version: "v4",
      auth: client as any as typeof auth
    });

    return {
      auth,
      client,
      googleSheets,
      spreadsheetId: spreadsheetId
    };
  }

  async saveUserToGoogleSheet(values: (string | number | null)[] | (string | number | null)[][], sheetName: string) {
    const spreadsheet = this.SPREADSHEET_ID;

    // Skip Google Sheets if not configured
    if (!spreadsheet) {
      console.log("Google Sheets not configured - skipping spreadsheet save");
      return;
    }

    return await this.getAuthSheets(spreadsheet).then(({ googleSheets, spreadsheetId }) =>
      googleSheets.spreadsheets.values.append({
        spreadsheetId,
        range: `${sheetName}!A2`,
        valueInputOption: "USER_ENTERED",
        requestBody: {
          values: Array.isArray(values[0]) ? (values as (string | number | null)[][]) : [values]
        }
      })
    );
  }
}
