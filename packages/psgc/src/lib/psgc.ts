/**
 * Load the JSON data
 */
import * as regJSON from './data/refregion.json';
import * as provJSON from './data/refprovince.json';
import * as citymunJSON from './data/refcitymun.json';
import * as brgyJSON from './data/refbrgy.json';
import { IBarangay, ICityMun, IProvince, IRegion } from './interfaces';

const regions: IRegion[] = regJSON as IRegion[];
const provinces: IProvince[] = provJSON as IProvince[];
const citymuns: ICityMun[] = citymunJSON as ICityMun[];
const barangays: IBarangay[] = brgyJSON as IBarangay[];

/**
 *
 * @returns Lists of Regions
 */
export function getRegions(): IRegion[] {
  return regions;
}

/**
 *
 * @param regCode Region Code
 * @returns Lists of Provinces by Region
 */
export function getProvinces(regCode: string): IProvince[] {
  return provinces.filter((province) => province.regCode === regCode);
}

/**
 *
 * @param provCode Province Code
 * @returns Lists of Cities/Municipalities by Province
 */
export function getCityMuns(provCode: string): ICityMun[] {
  return citymuns.filter((citymuns) => citymuns.provCode === provCode);
}

/**
 *
 * @param citymunCode City/Municipality Code
 * @returns Lists of Barangays by City/Municipality
 */
export function getBarangays(citymunCode: string): IBarangay[] {
  return barangays.filter((brgy) => brgy.citymunCode === citymunCode);
}
