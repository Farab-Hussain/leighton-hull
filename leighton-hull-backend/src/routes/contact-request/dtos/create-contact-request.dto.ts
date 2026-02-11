import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class ContactRequest_APIInputDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  typeOfInquiry: string;

  @IsString()
  @IsNotEmpty()
  message: string;
}
