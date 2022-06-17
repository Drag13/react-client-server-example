import Joi from 'joi';
import { ServerRoute } from '@hapi/hapi';
import { UnitDto, UnitType } from 'rcs-shared';
import { getUnits } from '../../bll/unit';
import { mapUnit } from './mapper';
import { CORS } from '../../constants';

const handler = async (): Promise<UnitDto[]> => {
  try {
    const units = await getUnits();
    return units.map(mapUnit);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const unitGet: ServerRoute = {
  method: 'GET',
  path: '/api/unit',
  handler,
  options: {
    cors: CORS,
    tags: ['api'],
    response: {
      schema: Joi.array()
        .items(
          Joi.object<UnitDto>({
            destroyed: Joi.number(),
            type: Joi.number().valid(...Object.values(UnitType)),
          }).label('Unit')
        )
        .label('Units'),
    },
  },
};
