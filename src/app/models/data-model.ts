interface DimensionInterface {
  headerCodes: string;
  headerDescriptions: string;
}

export interface DataInterface {
  dimensionResults: DimensionInterface[];
}
