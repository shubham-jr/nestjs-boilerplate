import * as Joi from 'joi';

export const ENV_VALIDATION_SCHEMA = Joi.object({
  DB_URL: Joi.required(),
});
