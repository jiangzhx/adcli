#!/usr/bin/env node
// @bun

// src/lib/search/cache.ts
import { mkdir, readFile, rename, writeFile } from "node:fs/promises";
import path2 from "node:path";

// node_modules/.bun/env-paths@4.0.0/node_modules/env-paths/index.js
import path from "node:path";
import os from "node:os";
import process2 from "node:process";

// node_modules/.bun/is-safe-filename@0.1.1/node_modules/is-safe-filename/index.js
var unsafeFilenameFixtures = Object.freeze([
  "",
  "   ",
  ".",
  "..",
  " .",
  ". ",
  " ..",
  ".. ",
  "../",
  "../foo",
  "foo/../bar",
  "foo/bar",
  "foo\\bar",
  "foo\x00bar"
]);
function isSafeFilename(filename) {
  if (typeof filename !== "string") {
    return false;
  }
  const trimmed = filename.trim();
  return trimmed !== "" && trimmed !== "." && trimmed !== ".." && !filename.includes("/") && !filename.includes("\\") && !filename.includes("\x00");
}
function assertSafeFilename(filename) {
  if (typeof filename !== "string") {
    throw new TypeError("Expected a string");
  }
  if (!isSafeFilename(filename)) {
    throw new Error(`Unsafe filename: ${JSON.stringify(filename)}`);
  }
}

// node_modules/.bun/env-paths@4.0.0/node_modules/env-paths/index.js
var homedir = os.homedir();
var tmpdir = os.tmpdir();
var { env } = process2;
var macos = (name) => {
  const library = path.join(homedir, "Library");
  return {
    data: path.join(library, "Application Support", name),
    config: path.join(library, "Preferences", name),
    cache: path.join(library, "Caches", name),
    log: path.join(library, "Logs", name),
    temp: path.join(tmpdir, name)
  };
};
var windows = (name) => {
  const appData = env.APPDATA || path.join(homedir, "AppData", "Roaming");
  const localAppData = env.LOCALAPPDATA || path.join(homedir, "AppData", "Local");
  return {
    data: path.join(localAppData, name, "Data"),
    config: path.join(appData, name, "Config"),
    cache: path.join(localAppData, name, "Cache"),
    log: path.join(localAppData, name, "Log"),
    temp: path.join(tmpdir, name)
  };
};
var linux = (name) => {
  const username = path.basename(homedir);
  return {
    data: path.join(env.XDG_DATA_HOME || path.join(homedir, ".local", "share"), name),
    config: path.join(env.XDG_CONFIG_HOME || path.join(homedir, ".config"), name),
    cache: path.join(env.XDG_CACHE_HOME || path.join(homedir, ".cache"), name),
    log: path.join(env.XDG_STATE_HOME || path.join(homedir, ".local", "state"), name),
    temp: path.join(tmpdir, username, name)
  };
};
function envPaths(name, { suffix = "nodejs" } = {}) {
  assertSafeFilename(name);
  if (suffix) {
    name += `-${suffix}`;
  }
  assertSafeFilename(name);
  if (process2.platform === "darwin") {
    return macos(name);
  }
  if (process2.platform === "win32") {
    return windows(name);
  }
  return linux(name);
}

// src/lib/search/cache.ts
var defaultSearchIndexUrl = "https://adcli.jiangzhx.com/search-index.json";
function getSearchIndexCacheInfo(options = {}) {
  const cacheDir = options.cacheDir ?? envPaths("adcli", { suffix: "" }).cache;
  return {
    cachePath: path2.join(cacheDir, "search-index.json"),
    indexUrl: options.indexUrl ?? defaultSearchIndexUrl
  };
}
async function loadSearchIndex(options = {}) {
  if (options.index) {
    return await loadExplicitSearchIndex(options.index, options.fetcher);
  }
  const cacheInfo = getSearchIndexCacheInfo(options);
  if (!options.refresh) {
    try {
      return JSON.parse(await readFile(cacheInfo.cachePath, "utf8"));
    } catch (error) {
      if (!isNotFoundError(error)) {
        throw error;
      }
    }
  }
  return await refreshSearchIndex(options);
}
async function refreshSearchIndex(options = {}) {
  const cacheInfo = getSearchIndexCacheInfo(options);
  const index = await fetchSearchIndex(cacheInfo.indexUrl, options.fetcher);
  await writeCachedSearchIndex(cacheInfo.cachePath, index);
  return index;
}
async function loadExplicitSearchIndex(index, fetcher = fetch) {
  if (/^https?:\/\//i.test(index)) {
    return await fetchSearchIndex(index, fetcher);
  }
  try {
    return JSON.parse(await readFile(path2.resolve(index), "utf8"));
  } catch (error) {
    if (isNotFoundError(error)) {
      throw new Error(`missing search index: ${path2.relative(process.cwd(), path2.resolve(index))}`);
    }
    throw error;
  }
}
async function fetchSearchIndex(indexUrl, fetcher = fetch) {
  const response = await fetcher(indexUrl);
  if (!response.ok) {
    throw new Error(`failed to fetch search index: ${indexUrl} (${response.status})`);
  }
  return await response.json();
}
async function writeCachedSearchIndex(cachePath, index) {
  await mkdir(path2.dirname(cachePath), { recursive: true });
  const tempPath = `${cachePath}.${process.pid}.tmp`;
  await writeFile(tempPath, `${JSON.stringify(index)}
`, "utf8");
  await rename(tempPath, cachePath);
}
function isNotFoundError(error) {
  return error instanceof Error && "code" in error && error.code === "ENOENT";
}

// node_modules/.bun/minisearch@7.2.0/node_modules/minisearch/dist/es/index.js
var ENTRIES = "ENTRIES";
var KEYS = "KEYS";
var VALUES = "VALUES";
var LEAF = "";

class TreeIterator {
  constructor(set, type) {
    const node = set._tree;
    const keys = Array.from(node.keys());
    this.set = set;
    this._type = type;
    this._path = keys.length > 0 ? [{ node, keys }] : [];
  }
  next() {
    const value = this.dive();
    this.backtrack();
    return value;
  }
  dive() {
    if (this._path.length === 0) {
      return { done: true, value: undefined };
    }
    const { node, keys } = last$1(this._path);
    if (last$1(keys) === LEAF) {
      return { done: false, value: this.result() };
    }
    const child = node.get(last$1(keys));
    this._path.push({ node: child, keys: Array.from(child.keys()) });
    return this.dive();
  }
  backtrack() {
    if (this._path.length === 0) {
      return;
    }
    const keys = last$1(this._path).keys;
    keys.pop();
    if (keys.length > 0) {
      return;
    }
    this._path.pop();
    this.backtrack();
  }
  key() {
    return this.set._prefix + this._path.map(({ keys }) => last$1(keys)).filter((key) => key !== LEAF).join("");
  }
  value() {
    return last$1(this._path).node.get(LEAF);
  }
  result() {
    switch (this._type) {
      case VALUES:
        return this.value();
      case KEYS:
        return this.key();
      default:
        return [this.key(), this.value()];
    }
  }
  [Symbol.iterator]() {
    return this;
  }
}
var last$1 = (array) => {
  return array[array.length - 1];
};
var fuzzySearch = (node, query, maxDistance) => {
  const results = new Map;
  if (query === undefined)
    return results;
  const n = query.length + 1;
  const m = n + maxDistance;
  const matrix = new Uint8Array(m * n).fill(maxDistance + 1);
  for (let j = 0;j < n; ++j)
    matrix[j] = j;
  for (let i = 1;i < m; ++i)
    matrix[i * n] = i;
  recurse(node, query, maxDistance, results, matrix, 1, n, "");
  return results;
};
var recurse = (node, query, maxDistance, results, matrix, m, n, prefix) => {
  const offset = m * n;
  key:
    for (const key of node.keys()) {
      if (key === LEAF) {
        const distance = matrix[offset - 1];
        if (distance <= maxDistance) {
          results.set(prefix, [node.get(key), distance]);
        }
      } else {
        let i = m;
        for (let pos = 0;pos < key.length; ++pos, ++i) {
          const char = key[pos];
          const thisRowOffset = n * i;
          const prevRowOffset = thisRowOffset - n;
          let minDistance = matrix[thisRowOffset];
          const jmin = Math.max(0, i - maxDistance - 1);
          const jmax = Math.min(n - 1, i + maxDistance);
          for (let j = jmin;j < jmax; ++j) {
            const different = char !== query[j];
            const rpl = matrix[prevRowOffset + j] + +different;
            const del = matrix[prevRowOffset + j + 1] + 1;
            const ins = matrix[thisRowOffset + j] + 1;
            const dist = matrix[thisRowOffset + j + 1] = Math.min(rpl, del, ins);
            if (dist < minDistance)
              minDistance = dist;
          }
          if (minDistance > maxDistance) {
            continue key;
          }
        }
        recurse(node.get(key), query, maxDistance, results, matrix, i, n, prefix + key);
      }
    }
};

class SearchableMap {
  constructor(tree = new Map, prefix = "") {
    this._size = undefined;
    this._tree = tree;
    this._prefix = prefix;
  }
  atPrefix(prefix) {
    if (!prefix.startsWith(this._prefix)) {
      throw new Error("Mismatched prefix");
    }
    const [node, path3] = trackDown(this._tree, prefix.slice(this._prefix.length));
    if (node === undefined) {
      const [parentNode, key] = last(path3);
      for (const k of parentNode.keys()) {
        if (k !== LEAF && k.startsWith(key)) {
          const node2 = new Map;
          node2.set(k.slice(key.length), parentNode.get(k));
          return new SearchableMap(node2, prefix);
        }
      }
    }
    return new SearchableMap(node, prefix);
  }
  clear() {
    this._size = undefined;
    this._tree.clear();
  }
  delete(key) {
    this._size = undefined;
    return remove(this._tree, key);
  }
  entries() {
    return new TreeIterator(this, ENTRIES);
  }
  forEach(fn) {
    for (const [key, value] of this) {
      fn(key, value, this);
    }
  }
  fuzzyGet(key, maxEditDistance) {
    return fuzzySearch(this._tree, key, maxEditDistance);
  }
  get(key) {
    const node = lookup(this._tree, key);
    return node !== undefined ? node.get(LEAF) : undefined;
  }
  has(key) {
    const node = lookup(this._tree, key);
    return node !== undefined && node.has(LEAF);
  }
  keys() {
    return new TreeIterator(this, KEYS);
  }
  set(key, value) {
    if (typeof key !== "string") {
      throw new Error("key must be a string");
    }
    this._size = undefined;
    const node = createPath(this._tree, key);
    node.set(LEAF, value);
    return this;
  }
  get size() {
    if (this._size) {
      return this._size;
    }
    this._size = 0;
    const iter = this.entries();
    while (!iter.next().done)
      this._size += 1;
    return this._size;
  }
  update(key, fn) {
    if (typeof key !== "string") {
      throw new Error("key must be a string");
    }
    this._size = undefined;
    const node = createPath(this._tree, key);
    node.set(LEAF, fn(node.get(LEAF)));
    return this;
  }
  fetch(key, initial) {
    if (typeof key !== "string") {
      throw new Error("key must be a string");
    }
    this._size = undefined;
    const node = createPath(this._tree, key);
    let value = node.get(LEAF);
    if (value === undefined) {
      node.set(LEAF, value = initial());
    }
    return value;
  }
  values() {
    return new TreeIterator(this, VALUES);
  }
  [Symbol.iterator]() {
    return this.entries();
  }
  static from(entries) {
    const tree = new SearchableMap;
    for (const [key, value] of entries) {
      tree.set(key, value);
    }
    return tree;
  }
  static fromObject(object) {
    return SearchableMap.from(Object.entries(object));
  }
}
var trackDown = (tree, key, path3 = []) => {
  if (key.length === 0 || tree == null) {
    return [tree, path3];
  }
  for (const k of tree.keys()) {
    if (k !== LEAF && key.startsWith(k)) {
      path3.push([tree, k]);
      return trackDown(tree.get(k), key.slice(k.length), path3);
    }
  }
  path3.push([tree, key]);
  return trackDown(undefined, "", path3);
};
var lookup = (tree, key) => {
  if (key.length === 0 || tree == null) {
    return tree;
  }
  for (const k of tree.keys()) {
    if (k !== LEAF && key.startsWith(k)) {
      return lookup(tree.get(k), key.slice(k.length));
    }
  }
};
var createPath = (node, key) => {
  const keyLength = key.length;
  outer:
    for (let pos = 0;node && pos < keyLength; ) {
      for (const k of node.keys()) {
        if (k !== LEAF && key[pos] === k[0]) {
          const len = Math.min(keyLength - pos, k.length);
          let offset = 1;
          while (offset < len && key[pos + offset] === k[offset])
            ++offset;
          const child2 = node.get(k);
          if (offset === k.length) {
            node = child2;
          } else {
            const intermediate = new Map;
            intermediate.set(k.slice(offset), child2);
            node.set(key.slice(pos, pos + offset), intermediate);
            node.delete(k);
            node = intermediate;
          }
          pos += offset;
          continue outer;
        }
      }
      const child = new Map;
      node.set(key.slice(pos), child);
      return child;
    }
  return node;
};
var remove = (tree, key) => {
  const [node, path3] = trackDown(tree, key);
  if (node === undefined) {
    return;
  }
  node.delete(LEAF);
  if (node.size === 0) {
    cleanup(path3);
  } else if (node.size === 1) {
    const [key2, value] = node.entries().next().value;
    merge(path3, key2, value);
  }
};
var cleanup = (path3) => {
  if (path3.length === 0) {
    return;
  }
  const [node, key] = last(path3);
  node.delete(key);
  if (node.size === 0) {
    cleanup(path3.slice(0, -1));
  } else if (node.size === 1) {
    const [key2, value] = node.entries().next().value;
    if (key2 !== LEAF) {
      merge(path3.slice(0, -1), key2, value);
    }
  }
};
var merge = (path3, key, value) => {
  if (path3.length === 0) {
    return;
  }
  const [node, nodeKey] = last(path3);
  node.set(nodeKey + key, value);
  node.delete(nodeKey);
};
var last = (array) => {
  return array[array.length - 1];
};
var OR = "or";
var AND = "and";
var AND_NOT = "and_not";

class MiniSearch {
  constructor(options) {
    if ((options === null || options === undefined ? undefined : options.fields) == null) {
      throw new Error('MiniSearch: option "fields" must be provided');
    }
    const autoVacuum = options.autoVacuum == null || options.autoVacuum === true ? defaultAutoVacuumOptions : options.autoVacuum;
    this._options = {
      ...defaultOptions,
      ...options,
      autoVacuum,
      searchOptions: { ...defaultSearchOptions, ...options.searchOptions || {} },
      autoSuggestOptions: { ...defaultAutoSuggestOptions, ...options.autoSuggestOptions || {} }
    };
    this._index = new SearchableMap;
    this._documentCount = 0;
    this._documentIds = new Map;
    this._idToShortId = new Map;
    this._fieldIds = {};
    this._fieldLength = new Map;
    this._avgFieldLength = [];
    this._nextId = 0;
    this._storedFields = new Map;
    this._dirtCount = 0;
    this._currentVacuum = null;
    this._enqueuedVacuum = null;
    this._enqueuedVacuumConditions = defaultVacuumConditions;
    this.addFields(this._options.fields);
  }
  add(document) {
    const { extractField, stringifyField, tokenize, processTerm, fields, idField } = this._options;
    const id = extractField(document, idField);
    if (id == null) {
      throw new Error(`MiniSearch: document does not have ID field "${idField}"`);
    }
    if (this._idToShortId.has(id)) {
      throw new Error(`MiniSearch: duplicate ID ${id}`);
    }
    const shortDocumentId = this.addDocumentId(id);
    this.saveStoredFields(shortDocumentId, document);
    for (const field of fields) {
      const fieldValue = extractField(document, field);
      if (fieldValue == null)
        continue;
      const tokens = tokenize(stringifyField(fieldValue, field), field);
      const fieldId = this._fieldIds[field];
      const uniqueTerms = new Set(tokens).size;
      this.addFieldLength(shortDocumentId, fieldId, this._documentCount - 1, uniqueTerms);
      for (const term of tokens) {
        const processedTerm = processTerm(term, field);
        if (Array.isArray(processedTerm)) {
          for (const t of processedTerm) {
            this.addTerm(fieldId, shortDocumentId, t);
          }
        } else if (processedTerm) {
          this.addTerm(fieldId, shortDocumentId, processedTerm);
        }
      }
    }
  }
  addAll(documents) {
    for (const document of documents)
      this.add(document);
  }
  addAllAsync(documents, options = {}) {
    const { chunkSize = 10 } = options;
    const acc = { chunk: [], promise: Promise.resolve() };
    const { chunk, promise } = documents.reduce(({ chunk: chunk2, promise: promise2 }, document, i) => {
      chunk2.push(document);
      if ((i + 1) % chunkSize === 0) {
        return {
          chunk: [],
          promise: promise2.then(() => new Promise((resolve) => setTimeout(resolve, 0))).then(() => this.addAll(chunk2))
        };
      } else {
        return { chunk: chunk2, promise: promise2 };
      }
    }, acc);
    return promise.then(() => this.addAll(chunk));
  }
  remove(document) {
    const { tokenize, processTerm, extractField, stringifyField, fields, idField } = this._options;
    const id = extractField(document, idField);
    if (id == null) {
      throw new Error(`MiniSearch: document does not have ID field "${idField}"`);
    }
    const shortId = this._idToShortId.get(id);
    if (shortId == null) {
      throw new Error(`MiniSearch: cannot remove document with ID ${id}: it is not in the index`);
    }
    for (const field of fields) {
      const fieldValue = extractField(document, field);
      if (fieldValue == null)
        continue;
      const tokens = tokenize(stringifyField(fieldValue, field), field);
      const fieldId = this._fieldIds[field];
      const uniqueTerms = new Set(tokens).size;
      this.removeFieldLength(shortId, fieldId, this._documentCount, uniqueTerms);
      for (const term of tokens) {
        const processedTerm = processTerm(term, field);
        if (Array.isArray(processedTerm)) {
          for (const t of processedTerm) {
            this.removeTerm(fieldId, shortId, t);
          }
        } else if (processedTerm) {
          this.removeTerm(fieldId, shortId, processedTerm);
        }
      }
    }
    this._storedFields.delete(shortId);
    this._documentIds.delete(shortId);
    this._idToShortId.delete(id);
    this._fieldLength.delete(shortId);
    this._documentCount -= 1;
  }
  removeAll(documents) {
    if (documents) {
      for (const document of documents)
        this.remove(document);
    } else if (arguments.length > 0) {
      throw new Error("Expected documents to be present. Omit the argument to remove all documents.");
    } else {
      this._index = new SearchableMap;
      this._documentCount = 0;
      this._documentIds = new Map;
      this._idToShortId = new Map;
      this._fieldLength = new Map;
      this._avgFieldLength = [];
      this._storedFields = new Map;
      this._nextId = 0;
    }
  }
  discard(id) {
    const shortId = this._idToShortId.get(id);
    if (shortId == null) {
      throw new Error(`MiniSearch: cannot discard document with ID ${id}: it is not in the index`);
    }
    this._idToShortId.delete(id);
    this._documentIds.delete(shortId);
    this._storedFields.delete(shortId);
    (this._fieldLength.get(shortId) || []).forEach((fieldLength, fieldId) => {
      this.removeFieldLength(shortId, fieldId, this._documentCount, fieldLength);
    });
    this._fieldLength.delete(shortId);
    this._documentCount -= 1;
    this._dirtCount += 1;
    this.maybeAutoVacuum();
  }
  maybeAutoVacuum() {
    if (this._options.autoVacuum === false) {
      return;
    }
    const { minDirtFactor, minDirtCount, batchSize, batchWait } = this._options.autoVacuum;
    this.conditionalVacuum({ batchSize, batchWait }, { minDirtCount, minDirtFactor });
  }
  discardAll(ids) {
    const autoVacuum = this._options.autoVacuum;
    try {
      this._options.autoVacuum = false;
      for (const id of ids) {
        this.discard(id);
      }
    } finally {
      this._options.autoVacuum = autoVacuum;
    }
    this.maybeAutoVacuum();
  }
  replace(updatedDocument) {
    const { idField, extractField } = this._options;
    const id = extractField(updatedDocument, idField);
    this.discard(id);
    this.add(updatedDocument);
  }
  vacuum(options = {}) {
    return this.conditionalVacuum(options);
  }
  conditionalVacuum(options, conditions) {
    if (this._currentVacuum) {
      this._enqueuedVacuumConditions = this._enqueuedVacuumConditions && conditions;
      if (this._enqueuedVacuum != null) {
        return this._enqueuedVacuum;
      }
      this._enqueuedVacuum = this._currentVacuum.then(() => {
        const conditions2 = this._enqueuedVacuumConditions;
        this._enqueuedVacuumConditions = defaultVacuumConditions;
        return this.performVacuuming(options, conditions2);
      });
      return this._enqueuedVacuum;
    }
    if (this.vacuumConditionsMet(conditions) === false) {
      return Promise.resolve();
    }
    this._currentVacuum = this.performVacuuming(options);
    return this._currentVacuum;
  }
  async performVacuuming(options, conditions) {
    const initialDirtCount = this._dirtCount;
    if (this.vacuumConditionsMet(conditions)) {
      const batchSize = options.batchSize || defaultVacuumOptions.batchSize;
      const batchWait = options.batchWait || defaultVacuumOptions.batchWait;
      let i = 1;
      for (const [term, fieldsData] of this._index) {
        for (const [fieldId, fieldIndex] of fieldsData) {
          for (const [shortId] of fieldIndex) {
            if (this._documentIds.has(shortId)) {
              continue;
            }
            if (fieldIndex.size <= 1) {
              fieldsData.delete(fieldId);
            } else {
              fieldIndex.delete(shortId);
            }
          }
        }
        if (this._index.get(term).size === 0) {
          this._index.delete(term);
        }
        if (i % batchSize === 0) {
          await new Promise((resolve) => setTimeout(resolve, batchWait));
        }
        i += 1;
      }
      this._dirtCount -= initialDirtCount;
    }
    await null;
    this._currentVacuum = this._enqueuedVacuum;
    this._enqueuedVacuum = null;
  }
  vacuumConditionsMet(conditions) {
    if (conditions == null) {
      return true;
    }
    let { minDirtCount, minDirtFactor } = conditions;
    minDirtCount = minDirtCount || defaultAutoVacuumOptions.minDirtCount;
    minDirtFactor = minDirtFactor || defaultAutoVacuumOptions.minDirtFactor;
    return this.dirtCount >= minDirtCount && this.dirtFactor >= minDirtFactor;
  }
  get isVacuuming() {
    return this._currentVacuum != null;
  }
  get dirtCount() {
    return this._dirtCount;
  }
  get dirtFactor() {
    return this._dirtCount / (1 + this._documentCount + this._dirtCount);
  }
  has(id) {
    return this._idToShortId.has(id);
  }
  getStoredFields(id) {
    const shortId = this._idToShortId.get(id);
    if (shortId == null) {
      return;
    }
    return this._storedFields.get(shortId);
  }
  search(query, searchOptions = {}) {
    const { searchOptions: globalSearchOptions } = this._options;
    const searchOptionsWithDefaults = { ...globalSearchOptions, ...searchOptions };
    const rawResults = this.executeQuery(query, searchOptions);
    const results = [];
    for (const [docId, { score, terms, match }] of rawResults) {
      const quality = terms.length || 1;
      const result = {
        id: this._documentIds.get(docId),
        score: score * quality,
        terms: Object.keys(match),
        queryTerms: terms,
        match
      };
      Object.assign(result, this._storedFields.get(docId));
      if (searchOptionsWithDefaults.filter == null || searchOptionsWithDefaults.filter(result)) {
        results.push(result);
      }
    }
    if (query === MiniSearch.wildcard && searchOptionsWithDefaults.boostDocument == null) {
      return results;
    }
    results.sort(byScore);
    return results;
  }
  autoSuggest(queryString, options = {}) {
    options = { ...this._options.autoSuggestOptions, ...options };
    const suggestions = new Map;
    for (const { score, terms } of this.search(queryString, options)) {
      const phrase = terms.join(" ");
      const suggestion = suggestions.get(phrase);
      if (suggestion != null) {
        suggestion.score += score;
        suggestion.count += 1;
      } else {
        suggestions.set(phrase, { score, terms, count: 1 });
      }
    }
    const results = [];
    for (const [suggestion, { score, terms, count }] of suggestions) {
      results.push({ suggestion, terms, score: score / count });
    }
    results.sort(byScore);
    return results;
  }
  get documentCount() {
    return this._documentCount;
  }
  get termCount() {
    return this._index.size;
  }
  static loadJSON(json, options) {
    if (options == null) {
      throw new Error("MiniSearch: loadJSON should be given the same options used when serializing the index");
    }
    return this.loadJS(JSON.parse(json), options);
  }
  static async loadJSONAsync(json, options) {
    if (options == null) {
      throw new Error("MiniSearch: loadJSON should be given the same options used when serializing the index");
    }
    return this.loadJSAsync(JSON.parse(json), options);
  }
  static getDefault(optionName) {
    if (defaultOptions.hasOwnProperty(optionName)) {
      return getOwnProperty(defaultOptions, optionName);
    } else {
      throw new Error(`MiniSearch: unknown option "${optionName}"`);
    }
  }
  static loadJS(js, options) {
    const { index, documentIds, fieldLength, storedFields, serializationVersion } = js;
    const miniSearch = this.instantiateMiniSearch(js, options);
    miniSearch._documentIds = objectToNumericMap(documentIds);
    miniSearch._fieldLength = objectToNumericMap(fieldLength);
    miniSearch._storedFields = objectToNumericMap(storedFields);
    for (const [shortId, id] of miniSearch._documentIds) {
      miniSearch._idToShortId.set(id, shortId);
    }
    for (const [term, data] of index) {
      const dataMap = new Map;
      for (const fieldId of Object.keys(data)) {
        let indexEntry = data[fieldId];
        if (serializationVersion === 1) {
          indexEntry = indexEntry.ds;
        }
        dataMap.set(parseInt(fieldId, 10), objectToNumericMap(indexEntry));
      }
      miniSearch._index.set(term, dataMap);
    }
    return miniSearch;
  }
  static async loadJSAsync(js, options) {
    const { index, documentIds, fieldLength, storedFields, serializationVersion } = js;
    const miniSearch = this.instantiateMiniSearch(js, options);
    miniSearch._documentIds = await objectToNumericMapAsync(documentIds);
    miniSearch._fieldLength = await objectToNumericMapAsync(fieldLength);
    miniSearch._storedFields = await objectToNumericMapAsync(storedFields);
    for (const [shortId, id] of miniSearch._documentIds) {
      miniSearch._idToShortId.set(id, shortId);
    }
    let count = 0;
    for (const [term, data] of index) {
      const dataMap = new Map;
      for (const fieldId of Object.keys(data)) {
        let indexEntry = data[fieldId];
        if (serializationVersion === 1) {
          indexEntry = indexEntry.ds;
        }
        dataMap.set(parseInt(fieldId, 10), await objectToNumericMapAsync(indexEntry));
      }
      if (++count % 1000 === 0)
        await wait(0);
      miniSearch._index.set(term, dataMap);
    }
    return miniSearch;
  }
  static instantiateMiniSearch(js, options) {
    const { documentCount, nextId, fieldIds, averageFieldLength, dirtCount, serializationVersion } = js;
    if (serializationVersion !== 1 && serializationVersion !== 2) {
      throw new Error("MiniSearch: cannot deserialize an index created with an incompatible version");
    }
    const miniSearch = new MiniSearch(options);
    miniSearch._documentCount = documentCount;
    miniSearch._nextId = nextId;
    miniSearch._idToShortId = new Map;
    miniSearch._fieldIds = fieldIds;
    miniSearch._avgFieldLength = averageFieldLength;
    miniSearch._dirtCount = dirtCount || 0;
    miniSearch._index = new SearchableMap;
    return miniSearch;
  }
  executeQuery(query, searchOptions = {}) {
    if (query === MiniSearch.wildcard) {
      return this.executeWildcardQuery(searchOptions);
    }
    if (typeof query !== "string") {
      const options2 = { ...searchOptions, ...query, queries: undefined };
      const results2 = query.queries.map((subquery) => this.executeQuery(subquery, options2));
      return this.combineResults(results2, options2.combineWith);
    }
    const { tokenize, processTerm, searchOptions: globalSearchOptions } = this._options;
    const options = { tokenize, processTerm, ...globalSearchOptions, ...searchOptions };
    const { tokenize: searchTokenize, processTerm: searchProcessTerm } = options;
    const terms = searchTokenize(query).flatMap((term) => searchProcessTerm(term)).filter((term) => !!term);
    const queries = terms.map(termToQuerySpec(options));
    const results = queries.map((query2) => this.executeQuerySpec(query2, options));
    return this.combineResults(results, options.combineWith);
  }
  executeQuerySpec(query, searchOptions) {
    const options = { ...this._options.searchOptions, ...searchOptions };
    const boosts = (options.fields || this._options.fields).reduce((boosts2, field) => ({ ...boosts2, [field]: getOwnProperty(options.boost, field) || 1 }), {});
    const { boostDocument, weights, maxFuzzy, bm25: bm25params } = options;
    const { fuzzy: fuzzyWeight, prefix: prefixWeight } = { ...defaultSearchOptions.weights, ...weights };
    const data = this._index.get(query.term);
    const results = this.termResults(query.term, query.term, 1, query.termBoost, data, boosts, boostDocument, bm25params);
    let prefixMatches;
    let fuzzyMatches;
    if (query.prefix) {
      prefixMatches = this._index.atPrefix(query.term);
    }
    if (query.fuzzy) {
      const fuzzy = query.fuzzy === true ? 0.2 : query.fuzzy;
      const maxDistance = fuzzy < 1 ? Math.min(maxFuzzy, Math.round(query.term.length * fuzzy)) : fuzzy;
      if (maxDistance)
        fuzzyMatches = this._index.fuzzyGet(query.term, maxDistance);
    }
    if (prefixMatches) {
      for (const [term, data2] of prefixMatches) {
        const distance = term.length - query.term.length;
        if (!distance) {
          continue;
        }
        fuzzyMatches === null || fuzzyMatches === undefined || fuzzyMatches.delete(term);
        const weight = prefixWeight * term.length / (term.length + 0.3 * distance);
        this.termResults(query.term, term, weight, query.termBoost, data2, boosts, boostDocument, bm25params, results);
      }
    }
    if (fuzzyMatches) {
      for (const term of fuzzyMatches.keys()) {
        const [data2, distance] = fuzzyMatches.get(term);
        if (!distance) {
          continue;
        }
        const weight = fuzzyWeight * term.length / (term.length + distance);
        this.termResults(query.term, term, weight, query.termBoost, data2, boosts, boostDocument, bm25params, results);
      }
    }
    return results;
  }
  executeWildcardQuery(searchOptions) {
    const results = new Map;
    const options = { ...this._options.searchOptions, ...searchOptions };
    for (const [shortId, id] of this._documentIds) {
      const score = options.boostDocument ? options.boostDocument(id, "", this._storedFields.get(shortId)) : 1;
      results.set(shortId, {
        score,
        terms: [],
        match: {}
      });
    }
    return results;
  }
  combineResults(results, combineWith = OR) {
    if (results.length === 0) {
      return new Map;
    }
    const operator = combineWith.toLowerCase();
    const combinator = combinators[operator];
    if (!combinator) {
      throw new Error(`Invalid combination operator: ${combineWith}`);
    }
    return results.reduce(combinator) || new Map;
  }
  toJSON() {
    const index = [];
    for (const [term, fieldIndex] of this._index) {
      const data = {};
      for (const [fieldId, freqs] of fieldIndex) {
        data[fieldId] = Object.fromEntries(freqs);
      }
      index.push([term, data]);
    }
    return {
      documentCount: this._documentCount,
      nextId: this._nextId,
      documentIds: Object.fromEntries(this._documentIds),
      fieldIds: this._fieldIds,
      fieldLength: Object.fromEntries(this._fieldLength),
      averageFieldLength: this._avgFieldLength,
      storedFields: Object.fromEntries(this._storedFields),
      dirtCount: this._dirtCount,
      index,
      serializationVersion: 2
    };
  }
  termResults(sourceTerm, derivedTerm, termWeight, termBoost, fieldTermData, fieldBoosts, boostDocumentFn, bm25params, results = new Map) {
    if (fieldTermData == null)
      return results;
    for (const field of Object.keys(fieldBoosts)) {
      const fieldBoost = fieldBoosts[field];
      const fieldId = this._fieldIds[field];
      const fieldTermFreqs = fieldTermData.get(fieldId);
      if (fieldTermFreqs == null)
        continue;
      let matchingFields = fieldTermFreqs.size;
      const avgFieldLength = this._avgFieldLength[fieldId];
      for (const docId of fieldTermFreqs.keys()) {
        if (!this._documentIds.has(docId)) {
          this.removeTerm(fieldId, docId, derivedTerm);
          matchingFields -= 1;
          continue;
        }
        const docBoost = boostDocumentFn ? boostDocumentFn(this._documentIds.get(docId), derivedTerm, this._storedFields.get(docId)) : 1;
        if (!docBoost)
          continue;
        const termFreq = fieldTermFreqs.get(docId);
        const fieldLength = this._fieldLength.get(docId)[fieldId];
        const rawScore = calcBM25Score(termFreq, matchingFields, this._documentCount, fieldLength, avgFieldLength, bm25params);
        const weightedScore = termWeight * termBoost * fieldBoost * docBoost * rawScore;
        const result = results.get(docId);
        if (result) {
          result.score += weightedScore;
          assignUniqueTerm(result.terms, sourceTerm);
          const match = getOwnProperty(result.match, derivedTerm);
          if (match) {
            match.push(field);
          } else {
            result.match[derivedTerm] = [field];
          }
        } else {
          results.set(docId, {
            score: weightedScore,
            terms: [sourceTerm],
            match: { [derivedTerm]: [field] }
          });
        }
      }
    }
    return results;
  }
  addTerm(fieldId, documentId, term) {
    const indexData = this._index.fetch(term, createMap);
    let fieldIndex = indexData.get(fieldId);
    if (fieldIndex == null) {
      fieldIndex = new Map;
      fieldIndex.set(documentId, 1);
      indexData.set(fieldId, fieldIndex);
    } else {
      const docs = fieldIndex.get(documentId);
      fieldIndex.set(documentId, (docs || 0) + 1);
    }
  }
  removeTerm(fieldId, documentId, term) {
    if (!this._index.has(term)) {
      this.warnDocumentChanged(documentId, fieldId, term);
      return;
    }
    const indexData = this._index.fetch(term, createMap);
    const fieldIndex = indexData.get(fieldId);
    if (fieldIndex == null || fieldIndex.get(documentId) == null) {
      this.warnDocumentChanged(documentId, fieldId, term);
    } else if (fieldIndex.get(documentId) <= 1) {
      if (fieldIndex.size <= 1) {
        indexData.delete(fieldId);
      } else {
        fieldIndex.delete(documentId);
      }
    } else {
      fieldIndex.set(documentId, fieldIndex.get(documentId) - 1);
    }
    if (this._index.get(term).size === 0) {
      this._index.delete(term);
    }
  }
  warnDocumentChanged(shortDocumentId, fieldId, term) {
    for (const fieldName of Object.keys(this._fieldIds)) {
      if (this._fieldIds[fieldName] === fieldId) {
        this._options.logger("warn", `MiniSearch: document with ID ${this._documentIds.get(shortDocumentId)} has changed before removal: term "${term}" was not present in field "${fieldName}". Removing a document after it has changed can corrupt the index!`, "version_conflict");
        return;
      }
    }
  }
  addDocumentId(documentId) {
    const shortDocumentId = this._nextId;
    this._idToShortId.set(documentId, shortDocumentId);
    this._documentIds.set(shortDocumentId, documentId);
    this._documentCount += 1;
    this._nextId += 1;
    return shortDocumentId;
  }
  addFields(fields) {
    for (let i = 0;i < fields.length; i++) {
      this._fieldIds[fields[i]] = i;
    }
  }
  addFieldLength(documentId, fieldId, count, length) {
    let fieldLengths = this._fieldLength.get(documentId);
    if (fieldLengths == null)
      this._fieldLength.set(documentId, fieldLengths = []);
    fieldLengths[fieldId] = length;
    const averageFieldLength = this._avgFieldLength[fieldId] || 0;
    const totalFieldLength = averageFieldLength * count + length;
    this._avgFieldLength[fieldId] = totalFieldLength / (count + 1);
  }
  removeFieldLength(documentId, fieldId, count, length) {
    if (count === 1) {
      this._avgFieldLength[fieldId] = 0;
      return;
    }
    const totalFieldLength = this._avgFieldLength[fieldId] * count - length;
    this._avgFieldLength[fieldId] = totalFieldLength / (count - 1);
  }
  saveStoredFields(documentId, doc) {
    const { storeFields, extractField } = this._options;
    if (storeFields == null || storeFields.length === 0) {
      return;
    }
    let documentFields = this._storedFields.get(documentId);
    if (documentFields == null)
      this._storedFields.set(documentId, documentFields = {});
    for (const fieldName of storeFields) {
      const fieldValue = extractField(doc, fieldName);
      if (fieldValue !== undefined)
        documentFields[fieldName] = fieldValue;
    }
  }
}
MiniSearch.wildcard = Symbol("*");
var getOwnProperty = (object, property) => Object.prototype.hasOwnProperty.call(object, property) ? object[property] : undefined;
var combinators = {
  [OR]: (a, b) => {
    for (const docId of b.keys()) {
      const existing = a.get(docId);
      if (existing == null) {
        a.set(docId, b.get(docId));
      } else {
        const { score, terms, match } = b.get(docId);
        existing.score = existing.score + score;
        existing.match = Object.assign(existing.match, match);
        assignUniqueTerms(existing.terms, terms);
      }
    }
    return a;
  },
  [AND]: (a, b) => {
    const combined = new Map;
    for (const docId of b.keys()) {
      const existing = a.get(docId);
      if (existing == null)
        continue;
      const { score, terms, match } = b.get(docId);
      assignUniqueTerms(existing.terms, terms);
      combined.set(docId, {
        score: existing.score + score,
        terms: existing.terms,
        match: Object.assign(existing.match, match)
      });
    }
    return combined;
  },
  [AND_NOT]: (a, b) => {
    for (const docId of b.keys())
      a.delete(docId);
    return a;
  }
};
var defaultBM25params = { k: 1.2, b: 0.7, d: 0.5 };
var calcBM25Score = (termFreq, matchingCount, totalCount, fieldLength, avgFieldLength, bm25params) => {
  const { k, b, d } = bm25params;
  const invDocFreq = Math.log(1 + (totalCount - matchingCount + 0.5) / (matchingCount + 0.5));
  return invDocFreq * (d + termFreq * (k + 1) / (termFreq + k * (1 - b + b * fieldLength / avgFieldLength)));
};
var termToQuerySpec = (options) => (term, i, terms) => {
  const fuzzy = typeof options.fuzzy === "function" ? options.fuzzy(term, i, terms) : options.fuzzy || false;
  const prefix = typeof options.prefix === "function" ? options.prefix(term, i, terms) : options.prefix === true;
  const termBoost = typeof options.boostTerm === "function" ? options.boostTerm(term, i, terms) : 1;
  return { term, fuzzy, prefix, termBoost };
};
var defaultOptions = {
  idField: "id",
  extractField: (document, fieldName) => document[fieldName],
  stringifyField: (fieldValue, fieldName) => fieldValue.toString(),
  tokenize: (text) => text.split(SPACE_OR_PUNCTUATION),
  processTerm: (term) => term.toLowerCase(),
  fields: undefined,
  searchOptions: undefined,
  storeFields: [],
  logger: (level, message) => {
    if (typeof (console === null || console === undefined ? undefined : console[level]) === "function")
      console[level](message);
  },
  autoVacuum: true
};
var defaultSearchOptions = {
  combineWith: OR,
  prefix: false,
  fuzzy: false,
  maxFuzzy: 6,
  boost: {},
  weights: { fuzzy: 0.45, prefix: 0.375 },
  bm25: defaultBM25params
};
var defaultAutoSuggestOptions = {
  combineWith: AND,
  prefix: (term, i, terms) => i === terms.length - 1
};
var defaultVacuumOptions = { batchSize: 1000, batchWait: 10 };
var defaultVacuumConditions = { minDirtFactor: 0.1, minDirtCount: 20 };
var defaultAutoVacuumOptions = { ...defaultVacuumOptions, ...defaultVacuumConditions };
var assignUniqueTerm = (target, term) => {
  if (!target.includes(term))
    target.push(term);
};
var assignUniqueTerms = (target, source) => {
  for (const term of source) {
    if (!target.includes(term))
      target.push(term);
  }
};
var byScore = ({ score: a }, { score: b }) => b - a;
var createMap = () => new Map;
var objectToNumericMap = (object) => {
  const map = new Map;
  for (const key of Object.keys(object)) {
    map.set(parseInt(key, 10), object[key]);
  }
  return map;
};
var objectToNumericMapAsync = async (object) => {
  const map = new Map;
  let count = 0;
  for (const key of Object.keys(object)) {
    map.set(parseInt(key, 10), object[key]);
    if (++count % 1000 === 0) {
      await wait(0);
    }
  }
  return map;
};
var wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
var SPACE_OR_PUNCTUATION = /[\n\r\p{Z}\p{P}]+/u;

// src/lib/search/tokenize.ts
var asciiTokenPattern = /[a-z0-9][a-z0-9_./:-]*/g;
var cjkCharPattern = /[\u3400-\u9fff]/;
function tokenize(input) {
  const tokens = [];
  const normalized = input.toLowerCase();
  let cjkRun = "";
  let asciiRun = "";
  for (const char of normalized) {
    if (cjkCharPattern.test(char)) {
      flushAscii(tokens, asciiRun);
      asciiRun = "";
      cjkRun += char;
      continue;
    }
    if (isAsciiTokenChar(char)) {
      flushCjk(tokens, cjkRun);
      cjkRun = "";
      asciiRun += char;
      continue;
    }
    flushCjk(tokens, cjkRun);
    flushAscii(tokens, asciiRun);
    cjkRun = "";
    asciiRun = "";
  }
  flushCjk(tokens, cjkRun);
  flushAscii(tokens, asciiRun);
  return tokens;
}
function flushCjk(tokens, value) {
  if (!value) {
    return;
  }
  for (const char of value) {
    tokens.push(char);
  }
  for (let size = 2;size <= 3; size += 1) {
    for (let index = 0;index <= value.length - size; index += 1) {
      tokens.push(value.slice(index, index + size));
    }
  }
}
function flushAscii(tokens, value) {
  if (!value) {
    return;
  }
  for (const match of value.matchAll(asciiTokenPattern)) {
    const token = match[0];
    tokens.push(token);
    for (const part of token.split(/[^a-z0-9]+/)) {
      if (part && part !== token) {
        tokens.push(part);
      }
    }
  }
}
function isAsciiTokenChar(char) {
  return /^[a-z0-9_./:-]$/.test(char);
}

// src/lib/search/searcher.ts
function createMiniSearch() {
  return new MiniSearch({
    fields: ["title", "platform_text", "headings_text", "id", "public_path", "source_url"],
    searchOptions: {
      boost: {
        title: 8,
        platform_text: 6,
        headings_text: 5,
        id: 3,
        public_path: 2,
        source_url: 1
      },
      prefix: true
    },
    tokenize
  });
}
function toMiniSearchDocuments(documents, platformAliases = {}) {
  return documents.map((document) => ({
    ...document,
    headings_text: document.headings.join(`
`),
    platform_text: [document.platform, ...platformAliases[document.platform] ?? []].join(" ")
  }));
}
async function searchDocuments(input) {
  const query = input.query.trim();
  if (!query) {
    return [];
  }
  const platformAliases = input.platformAliases ?? {};
  const documents = input.platform ? input.documents.filter((document) => document.platform === input.platform) : input.documents;
  const documentsById = new Map(documents.map((document) => [document.id, document]));
  const minisearch = input.miniSearch ? MiniSearch.loadJSON(JSON.stringify(input.miniSearch), {
    fields: ["title", "platform_text", "headings_text", "id", "public_path", "source_url"],
    searchOptions: {
      boost: {
        title: 8,
        platform_text: 6,
        headings_text: 5,
        id: 3,
        public_path: 2,
        source_url: 1
      },
      prefix: true
    },
    tokenize
  }) : createMiniSearch();
  if (!input.miniSearch) {
    minisearch.addAll(toMiniSearchDocuments(documents, platformAliases));
  }
  const limit = input.limit ?? 10;
  const candidates = minisearch.search(query).slice(0, Math.max(200, limit * 50)).map((result) => toSearchResult(result, documentsById, query, platformAliases)).filter((result) => result !== null);
  const seen = new Set(candidates.map((result) => result.id));
  for (const document of documents) {
    const score = rankDocument(query, document, platformAliases);
    if (score > 0 && !seen.has(document.id)) {
      candidates.push({ ...document, score, terms: tokenize(query) });
      seen.add(document.id);
    }
  }
  return candidates.sort((left, right) => right.score - left.score).slice(0, limit);
}
function toSearchResult(result, documentsById, query, platformAliases) {
  const document = documentsById.get(String(result.id));
  if (!document) {
    return null;
  }
  return {
    ...document,
    score: Math.log1p(result.score) * 30 + rankDocument(query, document, platformAliases),
    terms: result.terms
  };
}
function rankDocument(query, document, platformAliases = {}) {
  const terms = Array.from(new Set(tokenize(query).filter((term) => term.length > 1)));
  const compactQuery = compact(query);
  return scoreField(compactQuery, terms, document.title, 3000, 350) + scoreField(compactQuery, terms, [document.platform, ...platformAliases[document.platform] ?? []].join(" "), 1200, 260) + scoreField(compactQuery, terms, document.headings.join(" "), 1500, 220) + scoreField(compactQuery, terms, document.public_path, 800, 120) + scoreField(compactQuery, terms, document.source_url, 500, 80) + scoreField(compactQuery, terms, document.text, 250, 45);
}
function scoreField(compactQuery, terms, value, exactBoost, termBoost) {
  const field = compact(value);
  let score = 0;
  if (compactQuery && field.includes(compactQuery)) {
    score += exactBoost;
  }
  for (const term of terms) {
    score += Math.min(countOccurrences(field, compact(term)), 3) * termBoost * termWeight(term);
  }
  return score;
}
function termWeight(term) {
  if (importantTerms.some((importantTerm) => term.includes(importantTerm))) {
    return 1.5;
  }
  if (genericChineseTerms.has(term) || [...genericChineseTerms].some((genericTerm) => term.includes(genericTerm))) {
    return 0.05;
  }
  return 1;
}
var genericChineseTerms = new Set([
  "广告",
  "数据",
  "接口",
  "文档",
  "获取",
  "查询",
  "创建",
  "更新",
  "删除",
  "投放"
]);
var importantTerms = [
  "消耗",
  "花费",
  "报表",
  "流水",
  "余额",
  "转化",
  "账户",
  "账号",
  "广告主",
  "成本",
  "cost",
  "report",
  "balance",
  "fund",
  "statement",
  "access",
  "token"
];
function countOccurrences(value, term) {
  if (!term) {
    return 0;
  }
  let count = 0;
  let index = value.indexOf(term);
  while (index !== -1) {
    count += 1;
    index = value.indexOf(term, index + term.length);
  }
  return count;
}
function compact(value) {
  return value.toLowerCase().replace(/\s+/g, "");
}

// src/sdk/oceanengine/src/runtime/ApiException.ts
class ApiException extends Error {
  statusCode;
  responseBody;
  headers;
  constructor(message, options = {}) {
    super(message);
    this.name = "ApiException";
    this.statusCode = options.statusCode;
    this.responseBody = options.responseBody;
    this.headers = options.headers;
  }
}

// src/sdk/oceanengine/src/runtime/json.ts
var MAX_SAFE_INTEGER = BigInt(Number.MAX_SAFE_INTEGER);
function parseJsonPreservingLargeIntegers(text) {
  return JSON.parse(quoteUnsafeIntegerLiterals(text));
}
function quoteUnsafeIntegerLiterals(text) {
  let output = "";
  let index = 0;
  while (index < text.length) {
    const char = text[index];
    if (char === '"') {
      const stringEnd = findStringEnd(text, index);
      output += text.slice(index, stringEnd);
      index = stringEnd;
      continue;
    }
    if (char === "-" || isDigit(char)) {
      const token = readNumberToken(text, index);
      if (token) {
        output += shouldQuoteIntegerToken(token.value) ? `"${token.value}"` : token.value;
        index = token.end;
        continue;
      }
    }
    output += char;
    index += 1;
  }
  return output;
}
function findStringEnd(text, start) {
  let escaped = false;
  let index = start + 1;
  while (index < text.length) {
    const char = text[index];
    if (escaped) {
      escaped = false;
    } else if (char === "\\") {
      escaped = true;
    } else if (char === '"') {
      return index + 1;
    }
    index += 1;
  }
  return text.length;
}
function readNumberToken(text, start) {
  let index = start;
  if (text[index] === "-") {
    index += 1;
    if (!isDigit(text[index])) {
      return;
    }
  }
  while (isDigit(text[index])) {
    index += 1;
  }
  if (text[index] === "." || text[index] === "e" || text[index] === "E") {
    index += 1;
    while (isNumberContinuation(text[index])) {
      index += 1;
    }
  }
  return { value: text.slice(start, index), end: index };
}
function shouldQuoteIntegerToken(token) {
  if (token.includes(".") || token.includes("e") || token.includes("E")) {
    return false;
  }
  const magnitude = token.startsWith("-") ? token.slice(1) : token;
  return BigInt(magnitude) > MAX_SAFE_INTEGER;
}
function isDigit(char) {
  return char != null && char >= "0" && char <= "9";
}
function isNumberContinuation(char) {
  return isDigit(char) || char === "+" || char === "-" || char === "." || char === "e" || char === "E";
}

// src/sdk/oceanengine/src/runtime/ApiClient.ts
var SDK_VERSION = "0.0.0-phase-a";

class ApiClient {
  basePath = "https://api.oceanengine.com";
  fetchImpl;
  defaultHeaders = new Headers;
  constructor(options = {}) {
    this.fetchImpl = options.fetch ?? fetch;
    if (options.basePath) {
      this.basePath = options.basePath;
    }
    this.setUserAgent("Bytedance Ads Openapi SDK");
    this.addDefaultHeader("X-Sdk-Language", "node");
    this.addDefaultHeader("X-Sdk-Version", SDK_VERSION);
  }
  getBasePath() {
    return this.basePath;
  }
  setBasePath(basePath) {
    this.basePath = basePath;
    return this;
  }
  setUserAgent(userAgent) {
    this.addDefaultHeader("User-Agent", userAgent);
    return this;
  }
  addDefaultHeader(name, value) {
    this.defaultHeaders.set(name, value);
    return this;
  }
  setAccessToken(token) {
    this.addDefaultHeader("Access-Token", token);
    return this;
  }
  buildUrl(path3, queryParams = []) {
    const url = new URL(path3, this.basePath);
    for (const param of queryParams) {
      if (param.value == null) {
        continue;
      }
      if (Array.isArray(param.value)) {
        if (param.collectionFormat === "multi") {
          for (const value of param.value) {
            url.searchParams.append(param.name, this.parameterToString(value));
          }
          continue;
        }
        if (param.collectionFormat !== "csv") {
          throw new ApiException(`Unsupported collection format for query parameter '${param.name}'`);
        }
        url.searchParams.append(param.name, param.value.map((value) => this.parameterToString(value)).join(","));
        continue;
      }
      url.searchParams.append(param.name, this.parameterToString(param.value));
    }
    return url;
  }
  async request(options) {
    const response = await this.requestWithHttpInfo(options);
    return response.data;
  }
  async requestWithHttpInfo(options) {
    const request = this.buildRequest(options);
    const response = await this.fetchImpl(request);
    const data = await this.readResponseBody(response);
    if (!response.ok) {
      throw new ApiException(`HTTP ${response.status}`, {
        statusCode: response.status,
        responseBody: data,
        headers: response.headers
      });
    }
    return {
      data,
      statusCode: response.status,
      headers: response.headers
    };
  }
  buildRequest(options) {
    const headers = new Headers(this.defaultHeaders);
    for (const [name, value] of Object.entries(options.headers ?? {})) {
      headers.set(name, value);
    }
    let body;
    if (options.method !== "GET" && options.formParams) {
      const contentType = options.contentType ?? "application/x-www-form-urlencoded";
      headers.set("Content-Type", contentType);
      if (contentType !== "application/x-www-form-urlencoded") {
        throw new ApiException(`Unsupported form content type '${contentType}'`);
      }
      const formBody = new URLSearchParams;
      for (const [name, value] of Object.entries(options.formParams)) {
        if (value != null) {
          formBody.append(name, this.parameterToString(value));
        }
      }
      body = formBody;
    } else if (options.method !== "GET" && options.body != null) {
      const contentType = options.contentType ?? "application/json";
      headers.set("Content-Type", contentType);
      body = contentType === "application/json" ? JSON.stringify(options.body) : String(options.body);
    }
    return new Request(this.buildUrl(options.path, options.queryParams), {
      method: options.method,
      headers,
      body
    });
  }
  async readResponseBody(response) {
    const text = await response.text();
    if (!text) {
      return;
    }
    const contentType = response.headers.get("Content-Type") ?? "";
    if (contentType.includes("application/json")) {
      return parseJsonPreservingLargeIntegers(text);
    }
    return text;
  }
  parameterToString(value) {
    if (value instanceof Date) {
      return value.toISOString();
    }
    if (typeof value === "object" && value !== null) {
      return JSON.stringify(value);
    }
    return String(value);
  }
}
// src/sdk/oceanengine/src/generated/apis/Oauth2AdvertiserGetApi.ts
class Oauth2AdvertiserGetApi {
  apiClient;
  constructor(apiClient = new ApiClient) {
    this.apiClient = apiClient;
  }
  getApiClient() {
    return this.apiClient;
  }
  setApiClient(apiClient) {
    this.apiClient = apiClient;
  }
  async openApiOauth2AdvertiserGetGet(accessToken) {
    const response = await this.openApiOauth2AdvertiserGetGetWithHttpInfo(accessToken);
    return response.data;
  }
  async openApiOauth2AdvertiserGetGetWithHttpInfo(accessToken) {
    return this.apiClient.requestWithHttpInfo({
      method: "GET",
      path: "/open_api/oauth2/advertiser/get/",
      queryParams: [
        { name: "access_token", value: accessToken }
      ]
    });
  }
}

// src/sdk/oceanengine/src/generated/apis/ProjectListV30Api.ts
class ProjectListV30Api {
  apiClient;
  constructor(apiClient = new ApiClient) {
    this.apiClient = apiClient;
  }
  getApiClient() {
    return this.apiClient;
  }
  setApiClient(apiClient) {
    this.apiClient = apiClient;
  }
  async openApiV30ProjectListGet(advertiserId, fields, filtering, page, pageSize) {
    const response = await this.openApiV30ProjectListGetWithHttpInfo(advertiserId, fields, filtering, page, pageSize);
    return response.data;
  }
  async openApiV30ProjectListGetWithHttpInfo(advertiserId, fields, filtering, page, pageSize) {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30ProjectListGet");
    }
    return this.apiClient.requestWithHttpInfo({
      method: "GET",
      path: "/open_api/v3.0/project/list/",
      queryParams: [
        { name: "filtering", value: filtering },
        { name: "advertiser_id", value: advertiserId },
        { name: "page", value: page },
        { name: "page_size", value: pageSize },
        { name: "fields", value: fields, collectionFormat: "csv" }
      ]
    });
  }
}

// src/sdk/oceanengine/src/generated/apis/PromotionListV30Api.ts
class PromotionListV30Api {
  apiClient;
  constructor(apiClient = new ApiClient) {
    this.apiClient = apiClient;
  }
  getApiClient() {
    return this.apiClient;
  }
  setApiClient(apiClient) {
    this.apiClient = apiClient;
  }
  async openApiV30PromotionListGet(advertiserId, filtering, fields, includingMaterialAtrributes, page, pageSize, cursor, count) {
    const response = await this.openApiV30PromotionListGetWithHttpInfo(advertiserId, filtering, fields, includingMaterialAtrributes, page, pageSize, cursor, count);
    return response.data;
  }
  async openApiV30PromotionListGetWithHttpInfo(advertiserId, filtering, fields, includingMaterialAtrributes, page, pageSize, cursor, count) {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30PromotionListGet");
    }
    return this.apiClient.requestWithHttpInfo({
      method: "GET",
      path: "/open_api/v3.0/promotion/list/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "filtering", value: filtering },
        { name: "including_material_atrributes", value: includingMaterialAtrributes },
        { name: "page", value: page },
        { name: "page_size", value: pageSize },
        { name: "cursor", value: cursor },
        { name: "count", value: count },
        { name: "fields", value: fields, collectionFormat: "csv" }
      ]
    });
  }
}
// src/lib/oceanengine/config.ts
import { chmod, mkdir as mkdir2, readFile as readFile2, rename as rename2, writeFile as writeFile2 } from "node:fs/promises";
import path3 from "node:path";
function getOceanEngineConfigInfo(options = {}) {
  const configDir = options.configDir ?? envPaths("adcli", { suffix: "" }).cache;
  return {
    configPath: path3.join(configDir, "oceanengine.json")
  };
}
async function saveOceanEngineAccessToken(token, options = {}) {
  const trimmed = token.trim();
  if (!trimmed) {
    throw new Error("missing OceanEngine token");
  }
  const configInfo = getOceanEngineConfigInfo(options);
  await mkdir2(path3.dirname(configInfo.configPath), { recursive: true });
  const tempPath = `${configInfo.configPath}.${process.pid}.tmp`;
  await writeFile2(tempPath, `${JSON.stringify({ access_token: trimmed })}
`, {
    encoding: "utf8",
    mode: 384
  });
  await rename2(tempPath, configInfo.configPath);
  await chmod(configInfo.configPath, 384);
  return configInfo;
}
async function loadOceanEngineAccessToken(options = {}) {
  const configInfo = getOceanEngineConfigInfo(options);
  let config;
  try {
    config = JSON.parse(await readFile2(configInfo.configPath, "utf8"));
  } catch (error) {
    if (isNotFoundError2(error)) {
      return;
    }
    throw error;
  }
  if (typeof config.access_token !== "string" || !config.access_token.trim()) {
    return;
  }
  return config.access_token.trim();
}
function isNotFoundError2(error) {
  return error instanceof Error && "code" in error && error.code === "ENOENT";
}

// src/lib/oceanengine/commands.ts
async function runOceanEngineCommand(argv, options = {}) {
  const args = parseOceanEngineArgs(argv);
  if (args.resource === "auth") {
    const token2 = args.action;
    if (!token2) {
      throw new Error("missing OceanEngine token");
    }
    const configInfo = await saveOceanEngineAccessToken(token2, { configDir: options.configDir });
    return {
      ok: true,
      config_path: configInfo.configPath
    };
  }
  const token = await resolveAccessToken(args, options);
  const apiClient = new ApiClient({ fetch: options.fetch }).setAccessToken(token);
  if (args.resource === "advertiser" && args.action === "list") {
    return new Oauth2AdvertiserGetApi(apiClient).openApiOauth2AdvertiserGetGet(token);
  }
  if (isProjectListCommand(args)) {
    const advertiserId = getRequiredNumber(args, "advertiser-id");
    return new ProjectListV30Api(apiClient).openApiV30ProjectListGet(advertiserId, parseCsv(args.flags.fields), parseJsonFlag(args.flags.filtering), parseNumberFlag(args.flags.page), parseNumberFlag(args.flags["page-size"]));
  }
  if (args.resource === "promotion" && args.action === "list") {
    const advertiserId = getRequiredNumber(args, "advertiser-id");
    const filtering = {
      ...parseJsonFlag(args.flags.filtering),
      ...parseProjectFilter(args.flags["project-id"])
    };
    return new PromotionListV30Api(apiClient).openApiV30PromotionListGet(advertiserId, Object.keys(filtering).length > 0 ? filtering : undefined, parseCsv(args.flags.fields), args.flags["including-material-attributes"], parseNumberFlag(args.flags.page), parseNumberFlag(args.flags["page-size"]), parseNumberFlag(args.flags.cursor), parseNumberFlag(args.flags.count));
  }
  throw new Error(`unknown oceanengine command: ${[args.resource, args.action].filter(Boolean).join(" ")}`);
}
function formatOceanEngineOutput(payload, json, argv = []) {
  if (json) {
    return JSON.stringify(payload, null, 2);
  }
  if (isOceanEngineErrorPayload(payload)) {
    return JSON.stringify(payload, null, 2);
  }
  if (argv[0] === "project" && argv[1] === "list") {
    return formatEntityList(payload, "project_id", ["project_id", "id"], ["name", "project_name"]);
  }
  if (argv[0] === "promotion" && argv[1] === "list") {
    return formatEntityList(payload, "promotion_id", ["promotion_id", "id"], ["name", "promotion_name"]);
  }
  return JSON.stringify(payload, null, 2);
}
function formatOceanEngineError(error) {
  if (!isRecord(error) || !("responseBody" in error)) {
    return;
  }
  const responseBody = error.responseBody;
  if (responseBody == null) {
    return;
  }
  if (typeof responseBody === "string") {
    return responseBody;
  }
  return JSON.stringify(responseBody, null, 2);
}
function parseOceanEngineArgs(argv) {
  const args = {
    resource: argv[0],
    action: argv[1],
    flags: {}
  };
  for (let index = 2;index < argv.length; index += 1) {
    const value = argv[index];
    if (!value?.startsWith("--")) {
      continue;
    }
    const name = value.slice(2);
    const next = argv[index + 1];
    if (!next || next.startsWith("--")) {
      args.flags[name] = true;
      continue;
    }
    args.flags[name] = next;
    index += 1;
  }
  return args;
}
async function resolveAccessToken(args, options) {
  const explicitToken = getOptionalString(args.flags["access-token"]);
  if (explicitToken) {
    return explicitToken;
  }
  const env2 = options.env ?? process.env;
  const envToken = getOptionalString(env2.OCEANENGINE_ACCESS_TOKEN);
  if (envToken) {
    return envToken;
  }
  const savedToken = await loadOceanEngineAccessToken({ configDir: options.configDir });
  if (savedToken) {
    return savedToken;
  }
  throw new Error("missing --access-token; run adcli oceanengine auth <token> or set OCEANENGINE_ACCESS_TOKEN");
}
function getRequiredString(args, flag) {
  const value = getOptionalString(args.flags[flag]);
  if (!value) {
    throw new Error(`missing --${flag}`);
  }
  return value;
}
function getOptionalString(value) {
  if (typeof value !== "string" || !value) {
    return;
  }
  return value;
}
function getRequiredNumber(args, flag) {
  const value = getRequiredString(args, flag);
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) {
    throw new Error(`--${flag} must be a number`);
  }
  return parsed;
}
function parseNumberFlag(value) {
  if (value == null || value === true) {
    return;
  }
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) {
    throw new Error(`numeric flag must be a number: ${value}`);
  }
  return parsed;
}
function parseCsv(value) {
  if (typeof value !== "string" || !value) {
    return;
  }
  return value.split(",").map((item) => item.trim()).filter(Boolean);
}
function parseJsonFlag(value) {
  if (typeof value !== "string" || !value) {
    return;
  }
  return parseJsonPreservingLargeIntegers(value);
}
function parseProjectFilter(value) {
  if (typeof value !== "string" || !value) {
    return {};
  }
  if (!/^\d+$/.test(value)) {
    throw new Error("--project-id must be an integer id");
  }
  return { project_id: value };
}
function isProjectListCommand(args) {
  return args.resource === "project" && args.action === "list";
}
function formatEntityList(payload, idHeader, idKeys, nameKeys) {
  const list = getPayloadList(payload);
  const header = `${idHeader}	name`;
  if (list.length === 0) {
    return header;
  }
  return [
    header,
    ...list.map((item) => {
      const id = getRecordValue(item, idKeys);
      const name = getRecordValue(item, nameKeys);
      return `${id}	${name}`;
    })
  ].join(`
`);
}
function getPayloadList(payload) {
  if (!isRecord(payload) || !isRecord(payload.data) || !Array.isArray(payload.data.list)) {
    return [];
  }
  return payload.data.list.filter(isRecord);
}
function getRecordValue(record, keys) {
  for (const key of keys) {
    const value = record[key];
    if (typeof value === "string" || typeof value === "number") {
      return String(value);
    }
  }
  return "";
}
function isRecord(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
function isOceanEngineErrorPayload(payload) {
  return isRecord(payload) && typeof payload.code === "number" && payload.code !== 0;
}

// src/cli.ts
var help = `adcli

Usage:
  adcli list [platform] [--json]
  adcli doc <command>
  adcli oceanengine <resource> <command>
  adcli prompt
  adcli llms

Commands:
  list          List supported advertising platforms and capabilities
  doc           Search and sync published advertising API docs
  oceanengine   Call OceanEngine APIs through the generated Node.js SDK
  prompt        Print an AI/Agent instruction prompt for using the docs pack
  llms          Print LLM-readable docs pack entry URLs
`;
var docHelp = `adcli doc

Usage:
  adcli doc search <query> [--platform tencent_ads] [--limit 10] [--json] [--refresh]
  adcli doc sync

Commands:
  search    Search published advertising API docs
  sync      Download and cache the latest search index
`;
var oceanEngineHelp = `adcli oceanengine

Usage:
  adcli oceanengine auth <token>
  adcli oceanengine advertiser list [--access-token token] [--json]
  adcli oceanengine project list --advertiser-id 123 [--access-token token] [--page 1] [--page-size 20] [--filtering '{"status":"PROJECT_STATUS_ALL"}'] [--json]
  adcli oceanengine promotion list --advertiser-id 123 [--access-token token] [--project-id 456] [--fields promotion_id,name,status_first] [--filtering '{}'] [--json]

Environment:
  Token precedence is --access-token, OCEANENGINE_ACCESS_TOKEN, then the saved token.
  Project list does not include deleted projects by default; use filtering status PROJECT_STATUS_ALL for all projects.
`;
async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (!args.domain || args.domain === "help" || args.domain === "--help" || args.domain === "-h") {
    console.log(help.trim());
    return;
  }
  if (args.domain === "list") {
    const index2 = await loadSearchIndex({ index: args.index, refresh: args.refresh });
    printDocList(index2, args);
    return;
  }
  if (args.domain === "doc" && (!args.command || args.command === "--help" || args.command === "-h" || args.command === "help")) {
    console.log(docHelp.trim());
    return;
  }
  if (args.domain === "doc" && args.command === "sync") {
    const index2 = await refreshSearchIndex();
    const cache = getSearchIndexCacheInfo();
    console.log(`Synced ${index2.documents.length} docs to ${cache.cachePath}`);
    return;
  }
  if (args.domain === "doc" && args.command === "list") {
    const index2 = await loadSearchIndex({ index: args.index, refresh: args.refresh });
    printDocList(index2, args);
    return;
  }
  if (args.domain === "prompt") {
    printLlms({ ...args, domain: "llms", command: "prompt" });
    return;
  }
  if (args.domain === "llms") {
    printLlms(args);
    return;
  }
  if (args.domain === "oceanengine") {
    if (!args.command || args.command === "--help" || args.command === "-h" || args.command === "help") {
      console.log(oceanEngineHelp.trim());
      return;
    }
    const oceanEngineArgv = [args.command, ...args.query];
    const payload = await runOceanEngineCommand(oceanEngineArgv);
    console.log(formatOceanEngineOutput(payload, args.json, oceanEngineArgv));
    return;
  }
  if (args.domain !== "doc" || args.command !== "search") {
    throw new Error(`unknown command: ${[args.domain, args.command].filter(Boolean).join(" ")}`);
  }
  const query = args.query.join(" ").trim();
  if (!query) {
    throw new Error("missing search query");
  }
  const index = await loadSearchIndex({ index: args.index, refresh: args.refresh });
  const results = await searchDocuments({
    query,
    documents: index.documents,
    miniSearch: index.mini_search,
    platformAliases: index.platform_aliases,
    platform: args.platform,
    limit: args.limit
  });
  if (args.json) {
    console.log(JSON.stringify({ query, results }, null, 2));
    return;
  }
  if (results.length === 0) {
    console.log("No matching docs found.");
    return;
  }
  for (const [index2, result] of results.entries()) {
    console.log(`${index2 + 1}. [${result.platform}] ${result.title}`);
    console.log(`   Doc: ${result.public_path}`);
    if (result.source_url) {
      console.log(`   Source: ${result.source_url}`);
    }
    console.log(`   Score: ${result.score.toFixed(2)}`);
  }
}
function printDocList(index, args) {
  const platformFilter = args.command;
  const platforms = [...new Set(index.documents.map((document) => document.platform))].sort().filter((platform) => !platformFilter || platform === platformFilter).map((platform) => {
    const documents = index.documents.filter((document) => document.platform === platform);
    return {
      platform,
      capabilities: [
        {
          name: "doc",
          documents: documents.length,
          index_url: `https://adcli.jiangzhx.com/${platform}/index.md`,
          commands: [
            `adcli doc search <query> --platform ${platform}`
          ]
        }
      ]
    };
  });
  if (platformFilter && platforms.length === 0) {
    throw new Error(`unsupported platform: ${platformFilter}`);
  }
  if (args.json) {
    console.log(JSON.stringify({ platforms }, null, 2));
    return;
  }
  for (const item of platforms) {
    console.log(item.platform);
    for (const capability of item.capabilities) {
      console.log(`  ${capability.name}`);
      for (const command of capability.commands) {
        console.log(`    ${command}`);
      }
      console.log(`    docs: ${capability.documents}`);
      console.log(`    index: ${capability.index_url}`);
    }
  }
}
function printLlms(args) {
  const payload = {
    name: "AdCLI Docs Pack",
    base_url: "https://adcli.jiangzhx.com",
    llms_txt: "https://adcli.jiangzhx.com/llms.txt",
    llms_full_txt: "https://adcli.jiangzhx.com/llms-full.txt",
    search_index: "https://adcli.jiangzhx.com/search-index.json",
    platform_indexes: [
      "https://adcli.jiangzhx.com/kuaishou/index.md",
      "https://adcli.jiangzhx.com/oceanengine/index.md",
      "https://adcli.jiangzhx.com/tencent_ads/index.md"
    ]
  };
  if (args.json) {
    console.log(JSON.stringify(payload, null, 2));
    return;
  }
  if (args.command === "prompt") {
    console.log([
      "Use the AdCLI advertising API docs pack when answering advertising platform API questions.",
      "",
      `Start with: ${payload.llms_txt}`,
      `Use full index when needed: ${payload.llms_full_txt}`,
      `Use search index for local/tool search: ${payload.search_index}`,
      "",
      "Rules:",
      "- Prefer the Markdown docs from this docs pack over memory.",
      "- Cite the specific platform document URL or source URL used.",
      "- If a query names a platform, keep that platform as the primary context but do not ignore relevant cross-platform differences.",
      "- For API testing or implementation, identify method, path, auth requirement, parameters, response fields, and known limits.",
      "- If the docs are incomplete or ambiguous, say what is missing instead of guessing."
    ].join(`
`));
    return;
  }
  console.log([
    "AdCLI Docs Pack",
    "",
    `llms.txt:       ${payload.llms_txt}`,
    `llms-full.txt:  ${payload.llms_full_txt}`,
    `search index:   ${payload.search_index}`,
    "",
    "Platform indexes:",
    ...payload.platform_indexes.map((url) => `- ${url}`),
    "",
    "Prompt for AI/Agent:",
    "  adcli llms prompt"
  ].join(`
`));
}
function parseArgs(argv) {
  const args = {
    domain: argv[0],
    command: argv[1],
    query: [],
    index: process.env.ADCLI_SEARCH_INDEX,
    limit: 10,
    json: false,
    refresh: false
  };
  for (let index = 2;index < argv.length; index += 1) {
    const value = argv[index];
    if (value === "--json") {
      args.json = true;
      continue;
    }
    if (value === "--index") {
      args.index = argv[index + 1] ?? "";
      index += 1;
      continue;
    }
    if (value === "--refresh") {
      args.refresh = true;
      continue;
    }
    if (value === "--limit") {
      args.limit = Number.parseInt(argv[index + 1] ?? "", 10);
      index += 1;
      continue;
    }
    if (value === "--platform") {
      args.platform = argv[index + 1];
      index += 1;
      continue;
    }
    args.query.push(value ?? "");
  }
  if (!Number.isInteger(args.limit) || args.limit < 1) {
    throw new Error("--limit must be a positive integer");
  }
  return args;
}
main().catch((error) => {
  console.error(formatOceanEngineError(error) ?? (error instanceof Error ? error.message : error));
  process.exit(1);
});
