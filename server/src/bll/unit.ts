export enum UnitType {
  soldier,
}

export type Unit = {
  type: UnitType;
  destroyed: number;
};

const units: Record<UnitType, Unit> = {
  [UnitType.soldier]: {
    destroyed: 32950,
    type: UnitType.soldier,
  },
};

export const getUnits = (): Promise<Unit[]> => {
  return Promise.resolve(Object.values(units));
};
