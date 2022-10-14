# Philippine Standard Geographic Code (PSGC)

Provides PSGC (Philippine Standard Geographic Code) data for your applications and API's.

## Installation

> `npm install --save @efdiaz/psgc`

# Usage

| Method         | Param       | Type   | Description                                    | Example  |
| -------------- | ----------- | ------ | ---------------------------------------------- | -------- |
| `getRegions`   |             |        | Get all the regions                            |
| `getProvinces` | regCode     | string | Get all province by region code                | "04"     |
| `getCityMuns`  | provCode    | string | Get all cities/municipalities by province code | "0434"   |
| `getBarangays` | citymunCode | string | Get all barangays by city/municipality         | '043424' |

### Sample

```typescript
import {
  IRegion,
  getRegions,
  IProvince,
  getProvinces,
  ICityMun,
  getCityMuns,
  IBarangay,
  getBarangays,
} from '@efdiaz/psgc';

// Get all regions
const regions: IRegion[] = getRegions();

// Get all the province of the selected region
const REGIN_IV_PROVINCES: IProvince[] = getProvinces('04');

// Get all the cities/municipalities of the selected province
const LAGUNA_MUNICIPALITIES_CITIES: ICityMun[] = getCityMuns('0434');

// Get all the barangays of the selected city/municipality
const SAN_PABLO_CITY_BARANGAYS: IBarangay[] = getBarangays('043424');
```

## Building

To build the library.

> `npx nx build psgc`

## Running unit tests

To execute the unit tests via [Jest](https://jestjs.io).

> `nx test psgc`

## Maintainers

- [Edmar Diaz](https://github.com/efd1006)

## Credits

- [Arnel Clave](https://github.com/clavearnel) - for providing the JSON data

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request
