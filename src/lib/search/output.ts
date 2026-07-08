import type { SearchResultDocument } from "./types";

export const defaultPublicDocsBaseUrl = "https://adcli.jiangzhx.com";

export type SearchResultWithPublicUrl = SearchResultDocument & {
  public_url: string;
};

export function publicDocsUrl(publicPath: string, baseUrl: string = defaultPublicDocsBaseUrl): string {
  return new URL(publicPath, baseUrl).toString();
}

export function withPublicUrls(results: SearchResultDocument[]): SearchResultWithPublicUrl[] {
  return results.map((result) => ({
    ...result,
    public_url: publicDocsUrl(result.public_path),
  }));
}
