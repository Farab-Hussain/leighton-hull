import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class ContactRequest_APIOutputDto {
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
  typeOfInquiry: string;

  @IsString()
  @IsNotEmpty()
  message: string;
}
