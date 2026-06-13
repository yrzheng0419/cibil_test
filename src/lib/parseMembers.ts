import type { Member, Domain, Group, Status, DegreeType } from '../types/index';
import { fetchSheetCSV, rowToObject } from './fetchSheets';

export async function fetchMembers(url: string): Promise<Member[]> {
  const { headers, rows } = await fetchSheetCSV(url);
  return rows
    .map((row) => rowToObject(headers, row))
    .filter((r) => r['name_en'])
    .map((r): Member => ({
      name_en: r['name_en'] ?? '',
      name_zh: r['name_zh'] ?? '',
      group: (r['group'] as Group) ?? 'ai',
      status: (r['status'] as Status) ?? 'current',
      degree_type: (r['degree_type'] as DegreeType) ?? 'ms',
      year_joined: parseInt(r['year_joined']) || 0,
      year_grad: r['year_grad'] ? parseInt(r['year_grad']) : null,
      domain: (r['domain'] as Domain) ?? 'NA',
      research_title_en: r['research_title_en'] ?? '',
      research_title_zh: r['research_title_zh'] ?? '',
      thesis_url: r['thesis_url'] && r['thesis_url'] !== 'NA' ? r['thesis_url'] : null,
      email: r['email'] || null,
      photo_filename: r['photo_filename'] || null,
    }));
}
