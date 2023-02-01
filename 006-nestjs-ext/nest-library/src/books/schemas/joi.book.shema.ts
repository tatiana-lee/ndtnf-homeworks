import * as Joi from 'joi';

export const bookSchema = Joi.object().keys({
  title: Joi.string().min(1).required(),
  description: Joi.string().min(2).required(),
  authors: Joi.string().min(5).required(),
});
