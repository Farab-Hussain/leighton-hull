import { IsDateString, IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class SpeakerRequest_APIInputDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  organization: string;

  @IsString()
  @IsNotEmpty()
  eventType: string;

  @IsDateString()
  @IsNotEmpty()
  date: string;

  @IsString()
  @IsOptional()
  message?: string;
}
