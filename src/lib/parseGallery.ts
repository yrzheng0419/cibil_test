import type { GalleryItem, ActivityType } from '../types/index';
import { fetchSheetCSV, rowToObject } from './fetchSheets';

export async function fetchGallery(url: string): Promise<GalleryItem[]> {
  const { headers, rows } = await fetchSheetCSV(url);
  return rows
    .map((row) => rowToObject(headers, row))
    .filter((r) => r['title_en'])
    .map((r): GalleryItem => ({
      date: r['date'] ?? '',
      type: (r['type'] as ActivityType) ?? 'academic',
      title_en: r['title_en'] ?? '',
      title_zh: r['title_zh'] || r['title_en'] || '',
      remark: r['remark'] && r['remark'] !== 'NA' ? r['remark'] : null,
      photo_filename: r['photo_filename'] ?? '',
    }));
}
