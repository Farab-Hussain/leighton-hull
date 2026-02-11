import { Module } from "@nestjs/common";
import { ContactRequestController } from "@/routes/contact-request/contact-request.controller";
import { ContactRequestService } from "@/features/contact-request/contact-request.service";
import { GoogleSheets } from "@/features/google-sheets/google-sheets.service";
import { ResendService } from "@/features/resend/resend.service";

@Module({
  controllers: [ContactRequestController],
  providers: [ContactRequestService, GoogleSheets, ResendService]
})
export class ContactRequestModule {}
