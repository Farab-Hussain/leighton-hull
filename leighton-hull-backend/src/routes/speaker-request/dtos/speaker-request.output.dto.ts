import { DATE_FORMAT } from "@/utils/date";
import { Transform } from "class-transformer";
import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { format } from "date-fns";

export class SpeakerRequest_APIOutputDTO {
  @IsNumber()
  @IsNotEmpty()
  id: number;

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

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) =>
    value ? (value instanceof Date ? format(value, DATE_FORMAT) : format(new Date(value), DATE_FORMAT)) : null
  )
  date: string;

  @IsString()
  @IsOptional()
  message: string | null;
}
