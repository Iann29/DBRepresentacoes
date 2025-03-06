export interface CatalogItem {
  name: string;
  url: string;
}

export interface CompanyData {
  name: string;
  logo: string;
  description: string;
  longDescription: string;
  slogan?: string;
  catalogUrl: string;
  website: string;
  catalogList: CatalogItem[];
}
