export interface DataInterface {
  title: string;
  notes: any;
  ranSuccessfully: any;
  systemName: any;
  systemLoadDate: string;
  userName: any;
  runDate: any;
  queryDescription: any;
  dimensionResults: DimensionResult[];
  measureResults: MeasureResult[];
  cube: any;
  counts: Count[];
}

interface DimensionResult {
  id: string;
  headerCodes: string;
  headerDescriptions: string;
}

interface MeasureResult {
  id: string;
  rows: string[];
  cells: any[];
}

interface Count {
  tableName: string;
  countValue: number;
}
