import { Module } from "@nestjs/common";
import { AuthController } from "@/routes/auth/auth.controller";

@Module({
  imports: [],
  controllers: [AuthController]
})
export class AuthModule {}
