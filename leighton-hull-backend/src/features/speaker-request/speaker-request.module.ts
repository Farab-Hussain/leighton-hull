import { DBModule } from "@/db/db.module";
import { Module } from "@nestjs/common";
import { SpeakerRequestService } from "@/features/speaker-request/speaker-request.service";

@Module({
  imports: [DBModule],
  providers: [SpeakerRequestService],
  exports: [SpeakerRequestService]
})
export class SpeakerRequestModule {}
