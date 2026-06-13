/**
 * Fetch a Google Sheets CSV URL and return rows as arrays of strings.
 * The first row is assumed to be the header row.
 */
export async function fetchSheetCSV(url: string): Promise<{ headers: string[]; rows: string[][] }> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch sheet: ${res.status} ${url}`);
  const text = await res.text();
  return parseCSV(text);
}

function parseCSV(text: string): { headers: string[]; rows: string[][] } {
  const lines = text.trim().split(/\r?\n/);
  if (lines.length === 0) return { headers: [], rows: [] };

  const headers = parseCSVRow(lines[0]);
  const rows = lines.slice(1).map(parseCSVRow);
  return { headers, rows };
}

function parseCSVRow(line: string): string[] {
  const result: string[] = [];
  let current = '';
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (ch === '"') {
      if (inQuotes && line[i + 1] === '"') {
        current += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (ch === ',' && !inQuotes) {
      result.push(current.trim());
      current = '';
    } else {
      current += ch;
    }
  }
  result.push(current.trim());
  return result;
}

export function rowToObject(headers: string[], row: string[]): Record<string, string> {
  const obj: Record<string, string> = {};
  headers.forEach((h, i) => {
    obj[h] = row[i] ?? '';
  });
  return obj;
}
