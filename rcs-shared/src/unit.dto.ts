export enum UnitType {
  soldier,
}

export type UnitDto = {
  type: UnitType;
  destroyed: number;
};
