import Joi from 'Joi';
import { ServerRoute } from '@hapi/hapi';
import { Unit, getUnits, UnitType } from '../bll/unit';
import { CORS } from '../constants';

const handler = async (): Promise<Unit[]> => {
  try {
    return getUnits();
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const unitGet: ServerRoute = {
  method: 'GET',
  path: '/unit',
  handler,
  options: {
    cors: CORS,
    tags: ['api'],
    response: {
      schema: Joi.array()
        .items(
          Joi.object<Unit>({
            destroyed: Joi.number(),
            type: Joi.number().valid(...Object.values(UnitType)),
          }).label('Unit')
        )
        .label('Units'),
    },
  },
};
