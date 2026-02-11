import { Module } from "@nestjs/common";
import { SpeakerRequestService } from "@/features/speaker-request/speaker-request.service";
import { SpeakerRequestController } from "@/routes/speaker-request/speaker-request.controller";
import { GoogleSheets } from "@/features/google-sheets/google-sheets.service";
import { ResendService } from "@/features/resend/resend.service";

@Module({
  controllers: [SpeakerRequestController],
  providers: [SpeakerRequestService, GoogleSheets, ResendService]
})
export class SpeakerRequestModule {}
