export type SearchIndexDocument = {
  id: string;
  platform: string;
  title: string;
  public_path: string;
  source_url: string;
  headings: string[];
  text: string;
};

export type SearchIndex = {
  version: 2;
  generated_at: string;
  platform_aliases: Record<string, string[]>;
  documents: SearchIndexDocument[];
  mini_search?: unknown;
};

export type SearchResultDocument = SearchIndexDocument & {
  score: number;
  terms: string[];
};
