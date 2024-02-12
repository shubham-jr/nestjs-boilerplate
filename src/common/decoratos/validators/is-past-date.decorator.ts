import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
} from 'class-validator';

/**
 *
 * @param ?validationOptions
 * @returns PropertyDecorator
 * @description This decorator checks whether the date of todo is correct or not i.e. date can't be in future
 */

export function IsPastDate(validationOptions?: ValidationOptions) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      name: 'IsPastDate',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          const [day, month, year] = value.split('/').map(Number);
          const inputDate = new Date(year, month - 1, day);

          const currentDate = new Date();
          return inputDate > currentDate;
        },
        defaultMessage(args: ValidationArguments) {
          return 'Cannot set task in past';
        },
      },
    });
  };
}
