import JSONbig from "json-bigint";

const JSONBigStringParser = JSONbig({ storeAsString: true });

export function parseJsonPreservingLargeIntegers(text: string): unknown {
  return JSONBigStringParser.parse(text);
}
