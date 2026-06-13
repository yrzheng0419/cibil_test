import type { Publication, Domain, PubType } from '../types/index';
import { fetchSheetCSV, rowToObject } from './fetchSheets';

export async function fetchPublications(url: string): Promise<Publication[]> {
  const { headers, rows } = await fetchSheetCSV(url);
  return rows
    .map((row) => rowToObject(headers, row))
    .filter((r) => r['citation'])
    .map((r): Publication => ({
      year: parseInt(r['year']) || 0,
      pub_type: (r['pub_type'] as PubType) ?? 'journal',
      domain: (r['domain'] as Domain) ?? 'Medical Image',
      citation: r['citation'] ?? '',
      doi: r['doi'] && r['doi'].startsWith('http') ? r['doi'] : null,
    }));
}
