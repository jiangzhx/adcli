#!/usr/bin/env node
// @bun

// src/cli.ts
import { readFile } from "fs/promises";
import path from "path";

// node_modules/minisearch/dist/es/index.js
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
    const [node, path] = trackDown(this._tree, prefix.slice(this._prefix.length));
    if (node === undefined) {
      const [parentNode, key] = last(path);
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
var trackDown = (tree, key, path = []) => {
  if (key.length === 0 || tree == null) {
    return [tree, path];
  }
  for (const k of tree.keys()) {
    if (k !== LEAF && key.startsWith(k)) {
      path.push([tree, k]);
      return trackDown(tree.get(k), key.slice(k.length), path);
    }
  }
  path.push([tree, key]);
  return trackDown(undefined, "", path);
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
  const [node, path] = trackDown(tree, key);
  if (node === undefined) {
    return;
  }
  node.delete(LEAF);
  if (node.size === 0) {
    cleanup(path);
  } else if (node.size === 1) {
    const [key2, value] = node.entries().next().value;
    merge(path, key2, value);
  }
};
var cleanup = (path) => {
  if (path.length === 0) {
    return;
  }
  const [node, key] = last(path);
  node.delete(key);
  if (node.size === 0) {
    cleanup(path.slice(0, -1));
  } else if (node.size === 1) {
    const [key2, value] = node.entries().next().value;
    if (key2 !== LEAF) {
      merge(path.slice(0, -1), key2, value);
    }
  }
};
var merge = (path, key, value) => {
  if (path.length === 0) {
    return;
  }
  const [node, nodeKey] = last(path);
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

// src/cli.ts
var defaultSearchIndexUrl = "https://adcli.jiangzhx.com/search-index.json";
var help = `adcli

Usage:
  adcli doc search <query> [--index ${defaultSearchIndexUrl}] [--platform tencent_ads] [--limit 10] [--json]

Commands:
  doc search    Search published advertising API docs
`;
async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (!args.domain || args.domain === "help" || args.domain === "--help" || args.domain === "-h") {
    console.log(help.trim());
    return;
  }
  if (args.domain !== "doc" || args.command !== "search") {
    throw new Error(`unknown command: ${[args.domain, args.command].filter(Boolean).join(" ")}`);
  }
  const query = args.query.join(" ").trim();
  if (!query) {
    throw new Error("missing search query");
  }
  const index = await loadSearchIndex(args.index);
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
function parseArgs(argv) {
  const args = {
    domain: argv[0],
    command: argv[1],
    query: [],
    index: process.env.ADCLI_SEARCH_INDEX ?? defaultSearchIndexUrl,
    limit: 10,
    json: false
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
async function loadSearchIndex(index) {
  if (/^https?:\/\//i.test(index)) {
    const response = await fetch(index);
    if (!response.ok) {
      throw new Error(`failed to fetch search index: ${index} (${response.status})`);
    }
    return await response.json();
  }
  const indexPath = path.resolve(index);
  try {
    return JSON.parse(await readFile(indexPath, "utf8"));
  } catch (error) {
    if (error instanceof Error && "code" in error && error.code === "ENOENT") {
      throw new Error(`missing search index: ${path.relative(process.cwd(), indexPath)}. Use --index ${defaultSearchIndexUrl} or run: bun run build:search-index`);
    }
    throw error;
  }
}
main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
