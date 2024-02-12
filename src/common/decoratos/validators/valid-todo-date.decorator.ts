import { applyDecorators } from '@nestjs/common';
import { ValidationOptions } from 'class-validator';
import { IsValidDateFormat } from './is-date.decorator';
import { IsPastDate } from './is-past-date.decorator';

/**
 *
 * @param ?validationOptions
 * @returns PropertyDecorator
 * @description This decorator is the combination of IsValidDateFormat and IsPastDate decorator
 */

export const IsValidTodoDate = (
  validationOptions?: ValidationOptions,
): PropertyDecorator =>
  applyDecorators(
    IsValidDateFormat(validationOptions),
    IsPastDate(validationOptions),
  );
