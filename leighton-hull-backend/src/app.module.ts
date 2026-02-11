import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AppController } from "@/app.controller";
import { AppService } from "@/app.service";
import { AuthModule as Feature_AuthModule } from "@/features/auth/auth.module";
import { AuthModule as API_AuthModule } from "@/routes/auth/auth.module";
import validateEnvVars from "@/utils/validate-env-vars";
import { UtilsModule } from "@/utils/utils.module";
import { ContactRequestModule as Feature_ContactRequestModule } from "@/features/contact-request/contact-request.module";
import { ContactRequestModule as API_ContactRequestModule } from "@/routes/contact-request/contact-request.module";
import { GoogleSheetsModule } from "@/features/google-sheets/google-sheets.module";
import { SpeakerRequestModule as Feature_SpeakerRequestModule } from "@/features/speaker-request/speaker-request.module";
import { SpeakerRequestModule as API_SpeakerRequestModule } from "@/routes/speaker-request/speaker-request.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true,
      async validate(configRaw) {
        const config = configRaw as Record<string, unknown>;
        await validateEnvVars(config);

        return config;
      }
    }),
    // libs
    UtilsModule,
    // features
    Feature_AuthModule,
    Feature_ContactRequestModule,
    GoogleSheetsModule,
    Feature_SpeakerRequestModule,
    // routes
    API_AuthModule,
    API_ContactRequestModule,
    API_SpeakerRequestModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
