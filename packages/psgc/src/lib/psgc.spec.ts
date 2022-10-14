import { getBarangays, getCityMuns, getProvinces, getRegions } from './psgc';
import {
  REGIONS,
  REGION_IV_PROVINCES,
  LAGUNA_CITY_MUNS,
  SAN_PABLO_CITY_BARANGAYS,
} from './tests/fixtures';

describe('psgc', () => {
  it('Should get all the regions', async () => {
    expect(getRegions()).toEqual(REGIONS);
  });

  it('Should get all the province of the selected region', async () => {
    const regCode = '04'; // 04 -> Region IV
    expect(getProvinces(regCode)).toEqual(REGION_IV_PROVINCES);
  });

  it('Should get all the cities/municipalities of the selected province', async () => {
    const provCode = '0434'; // 04 -> Region IV, 34 -> Laguna
    expect(getCityMuns(provCode)).toEqual(LAGUNA_CITY_MUNS);
  });

  it('Should get all the barangays of the selected city/municipality', async () => {
    const citymunCode = '043424'; // 04 -> Region IV, 34 -> Laguna, -> 23 San Pablo City
    expect(getBarangays(citymunCode)).toEqual(SAN_PABLO_CITY_BARANGAYS);
  });
});
