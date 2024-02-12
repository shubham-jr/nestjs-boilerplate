import { applyDecorators } from '@nestjs/common';
import { IsOptional, IsString, ValidationOptions } from 'class-validator';

/**
 *
 * @param ?validationOptions
 * @returns PropertyDecorator
 * @description This decorator is the combination of IsString and IsOptionalString decorator
 */

export const IsOptionalString = (
  validationOptions?: ValidationOptions,
): PropertyDecorator =>
  applyDecorators(IsString(validationOptions), IsOptional(validationOptions));
