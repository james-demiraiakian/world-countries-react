import { checkError, client } from './client';

export async function getCountries() {
  const response = await client.from('countries').select('continent, iso2, name');
  return checkError(response);
}
