import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
  Matches,
} from 'class-validator';

export class RegisterDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @Length(2, 50)
  @IsNotEmpty()
  firstName: string;

  @IsOptional()
  @IsString()
  @Length(2, 50)
  lastName?: string;

  @IsString()
  @IsNotEmpty()
  @Length(8, 72)
  password: string;

  @IsString()
  @Matches(/^09\d{9}$/, {
    message: 'Phone number must be a valid  mobile number (09xxxxxxxxx)',
  })
  @Length(11, 11)
  phone: string;
}
