import { applyDecorators } from '@nestjs/common';
import { IsNotEmpty, IsString, ValidationOptions } from 'class-validator';

/**
 *
 * @param ?validationOptions
 * @returns PropertyDecorator
 * @description This decorator is the combination of IsString and IsNotEmpty decorator
 */

export const IsValidString = (
  validationOptions?: ValidationOptions,
): PropertyDecorator =>
  applyDecorators(IsString(validationOptions), IsNotEmpty(validationOptions));
