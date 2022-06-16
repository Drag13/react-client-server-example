import { getUnits, UnitType } from './unit';

test('all kind of units should be present in getAllUnits', async () => {
  const allUnits = await getUnits();
  const unitTypes = Object.values(UnitType).filter((x) => typeof x === 'number');

  const isAllUnitsPresent = unitTypes.every((type) => !!allUnits.some((u) => u.type === type));

  expect(isAllUnitsPresent).toBe(true);
});
