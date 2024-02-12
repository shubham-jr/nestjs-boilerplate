import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
} from 'class-validator';

/**
 *
 * @param ?validationOptions
 * @returns PropertyDecorator
 * @description This decorator checks whether date is in format of dd:mm:yyyy
 */

export function IsValidDateFormat(validationOptions?: ValidationOptions) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      name: 'isValidDateFormat',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
          return typeof value === 'string' && dateRegex.test(value);
        },
        defaultMessage(args: ValidationArguments) {
          return 'Invalid date format. Please use the dd/mm/yyyy format.';
        },
      },
    });
  };
}
