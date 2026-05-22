import JSONbig from "json-bigint";
const JSONBigStringParser = JSONbig({ storeAsString: true });
export function parseJsonPreservingLargeIntegers(text) {
    return JSONBigStringParser.parse(text);
}
