import { IsOptional, IsString, IsBoolean } from 'class-validator';
import { Transform } from 'class-transformer';

export class GetRecursosFilterDto {
    @IsOptional()
    @IsString()
    tipo?: string;
  
    @IsOptional()
    @Transform(({ value }) => {
      if (value === 'true') return true;
      if (value === 'false') return false;
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return value;
    })
    @IsBoolean()
    isDisponible?: boolean;
  }