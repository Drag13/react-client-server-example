import { UnitDto } from 'rcs-shared';
import { Unit } from '../../bll/unit';

export const mapUnit = (unit: Unit): UnitDto => {
  return { ...unit };
};
