export interface CatalogItem {
  name: string;
  url: string;
  external?: boolean;
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
  showCatalogs?: boolean; // Propriedade opcional para controlar a exibição da seção de catálogos
  representedSince?: number; // Ano desde quando a empresa é representada
}