import { Module } from "@nestjs/common";
import { DBModule } from "@/db/db.module";
import { ResendService } from "@/features/resend/resend.service";

@Module({
  providers: [ResendService],
  exports: [ResendService],
  imports: [DBModule]
})
export class ResendModule {}
