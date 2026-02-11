import { DBModule } from "@/db/db.module";
import { Module } from "@nestjs/common";
import { ContactRequestService } from "@/features/contact-request/contact-request.service";

@Module({
  imports: [DBModule],
  providers: [ContactRequestService],
  exports: [ContactRequestService]
})
export class ContactRequestModule {}
