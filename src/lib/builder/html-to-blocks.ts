export type SourceBlockKind = "heading" | "paragraph" | "table" | "code";

export type SourceReference = {
  url: string;
  text: string;
  target_source_id?: string;
};

export type SourceBlock = {
  id: string;
  source_id: string;
  kind: SourceBlockKind;
  markdown: string;
  locator: string;
  level?: number;
  text?: string;
  references?: SourceReference[];
};

export type ExtractBlocksInput = {
  html: string;
  sourceId: string;
  sourceUrl?: string;
  titleHint?: string;
};

export type ExtractBlocksResult = {
  cleanedMarkdown: string;
  blocks: SourceBlock[];
};

type ParsedBlock = Omit<SourceBlock, "id" | "source_id">;

const contentTagPattern =
  /<(h[1-6]|p|pre|table)\b[^>]*>[\s\S]*?<\/\1>/gi;

export function extractBlocksFromHtml(input: ExtractBlocksInput): ExtractBlocksResult {
  const html = stripNoise(input.html);
  const scope = extractPrimaryScope(html);
  const parsedBlocks = parseContentBlocks(scope, input.sourceUrl, input.sourceId);
  const blocks = parsedBlocks.length > 0 ? mergeAdjacentCodeBlocks(parsedBlocks) : fallbackTitleBlock(input.titleHint);

  const numberedBlocks = blocks.map((block, index) => ({
    id: `blk_${String(index + 1).padStart(3, "0")}`,
    source_id: input.sourceId,
    ...block,
  }));

  return {
    cleanedMarkdown: numberedBlocks.map((block) => block.markdown).join("\n\n"),
    blocks: numberedBlocks,
  };
}

function mergeAdjacentCodeBlocks(blocks: ParsedBlock[]): ParsedBlock[] {
  const merged: ParsedBlock[] = [];

  for (const block of blocks) {
    const previous = merged.at(-1);
    if (previous?.kind === "code" && block.kind === "code") {
      const previousText = previous.text ?? unwrapCodeMarkdown(previous.markdown);
      const currentText = block.text ?? unwrapCodeMarkdown(block.markdown);
      const text = [previousText, currentText].filter(Boolean).join("\n");
      previous.text = text;
      previous.markdown = `\`\`\`\n${text}\n\`\`\``;
      continue;
    }

    merged.push({ ...block });
  }

  return merged;
}

function unwrapCodeMarkdown(markdown: string): string {
  return markdown.replace(/^```\n?/, "").replace(/\n?```$/, "");
}

function parseContentBlocks(html: string, sourceUrl: string | undefined, sourceId: string): ParsedBlock[] {
  const blocks: ParsedBlock[] = [];

  for (const match of html.matchAll(contentTagPattern)) {
    const tag = match[1]?.toLowerCase();
    const outerHtml = match[0];
    if (!tag) {
      continue;
    }

    if (tag.startsWith("h")) {
      const level = Number(tag.slice(1));
      const inline = parseInlineContent(outerHtml, sourceUrl, sourceId);
      const text = inline.text;
      if (text) {
        blocks.push({
          kind: "heading",
          level,
          text,
          markdown: `${"#".repeat(level)} ${inline.markdown}`,
          locator: tag,
          references: inline.references.length > 0 ? inline.references : undefined,
        });
      }
      continue;
    }

    if (tag === "p") {
      const inline = parseInlineContent(outerHtml, sourceUrl, sourceId);
      const text = inline.text;
      if (text) {
        blocks.push({
          kind: "paragraph",
          text,
          markdown: inline.markdown,
          locator: "p",
          references: inline.references.length > 0 ? inline.references : undefined,
        });
      }
      continue;
    }

    if (tag === "pre") {
      const text = decodeHtmlEntities(stripTags(outerHtml)).trim();
      if (text) {
        blocks.push({
          kind: "code",
          text,
          markdown: `\`\`\`\n${text}\n\`\`\``,
          locator: "pre",
        });
      }
      continue;
    }

    if (tag === "table") {
      const markdown = tableToMarkdown(outerHtml, sourceUrl, sourceId);
      if (markdown) {
        const references = extractReferences(outerHtml, sourceUrl, sourceId);
        blocks.push({
          kind: "table",
          markdown,
          locator: `table[${blocks.filter((block) => block.kind === "table").length + 1}]`,
          references: references.length > 0 ? references : undefined,
        });
      }
    }
  }

  return blocks;
}

function tableToMarkdown(tableHtml: string, sourceUrl: string | undefined, sourceId: string): string | undefined {
  const rows = [...tableHtml.matchAll(/<tr\b[^>]*>([\s\S]*?)<\/tr>/gi)]
    .map((rowMatch) => {
      const rowHtml = rowMatch[1] ?? "";
      return [...rowHtml.matchAll(/<(th|td)\b[^>]*>([\s\S]*?)<\/\1>/gi)]
        .map((cellMatch) => parseInlineContent(cellMatch[2] ?? "", sourceUrl, sourceId).markdown);
    })
    .filter((cells) => cells.length > 0);

  if (rows.length === 0) {
    return undefined;
  }

  const columnCount = Math.max(...rows.map((row) => row.length));
  const normalizedRows = rows.map((row) => padCells(row, columnCount));
  const [firstRow, ...remainingRows] = normalizedRows;
  if (!firstRow) {
    return undefined;
  }

  return [
    markdownTableRow(firstRow),
    markdownTableRow(Array.from({ length: columnCount }, () => "---")),
    ...remainingRows.map(markdownTableRow),
  ].join("\n");
}

function markdownTableRow(cells: string[]): string {
  return `| ${cells.map(escapeTableCell).join(" | ")} |`;
}

function escapeTableCell(cell: string): string {
  return cell.replaceAll("|", "\\|");
}

function padCells(cells: string[], length: number): string[] {
  return [...cells, ...Array.from({ length: length - cells.length }, () => "")];
}

function parseInlineContent(
  html: string,
  sourceUrl: string | undefined,
  sourceId: string,
): { text: string; markdown: string; references: SourceReference[] } {
  const references = extractReferences(html, sourceUrl, sourceId);
  const markdownHtml = html.replace(/<a\b([^>]*)>([\s\S]*?)<\/a>/gi, (full, attrs: string, innerHtml: string) => {
    const href = extractHref(attrs);
    const text = normalizeInlineText(stripTags(innerHtml));
    if (!href || !text) {
      return text;
    }

    const url = normalizeUrl(href, sourceUrl);
    if (!url) {
      return text;
    }

    return `[${escapeMarkdownLinkText(text)}](${url})`;
  });

  return {
    text: normalizeInlineText(stripTags(html)),
    markdown: normalizeInlineText(stripTags(markdownHtml)),
    references,
  };
}

function extractReferences(html: string, sourceUrl: string | undefined, sourceId: string): SourceReference[] {
  const references: SourceReference[] = [];

  for (const match of html.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/gi)) {
    const href = extractHref(match[1] ?? "");
    const text = normalizeInlineText(stripTags(match[2] ?? ""));
    if (!href || !text) {
      continue;
    }

    const url = normalizeUrl(href, sourceUrl);
    if (!url) {
      continue;
    }

    references.push({
      url,
      text,
      target_source_id: inferTargetSourceId(url, sourceId, sourceUrl),
    });
  }

  return references;
}

function extractHref(attrs: string): string | undefined {
  const match = /\bhref\s*=\s*(["'])(.*?)\1/i.exec(attrs);
  return match?.[2] ? decodeHtmlEntities(match[2]) : undefined;
}

function normalizeUrl(href: string, sourceUrl: string | undefined): string | undefined {
  try {
    return sourceUrl ? new URL(href, sourceUrl).toString() : new URL(href).toString();
  } catch {
    return undefined;
  }
}

function inferTargetSourceId(url: string, sourceId: string, sourceUrl: string | undefined): string | undefined {
  const docId = /\/labels\/\d+\/docs\/(\d+)/.exec(url)?.[1];
  const sourcePrefix = /^(.*?)(\d+)$/.exec(sourceId)?.[1];
  if (docId && sourcePrefix) {
    return `${sourcePrefix}${docId}`;
  }

  if (!sourceUrl) {
    return undefined;
  }

  const currentSlug = slugFromPath(new URL(sourceUrl).pathname);
  const targetSlug = slugFromPath(new URL(url).pathname);
  if (!currentSlug || !targetSlug || !sourceId.endsWith(currentSlug)) {
    return undefined;
  }

  return `${sourceId.slice(0, -currentSlug.length)}${targetSlug}`;
}

function slugFromPath(pathname: string): string | undefined {
  const slug = pathname
    .replace(/^\/+|\/+$/g, "")
    .replace(/[^a-zA-Z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "")
    .toLowerCase();

  return slug || undefined;
}

function escapeMarkdownLinkText(text: string): string {
  return text.replaceAll("[", "\\[").replaceAll("]", "\\]");
}

function fallbackTitleBlock(titleHint: string | undefined): ParsedBlock[] {
  const text = titleHint?.trim() || "Untitled Source";
  return [
    {
      kind: "heading",
      level: 1,
      text,
      markdown: `# ${text}`,
      locator: "title_hint",
    },
  ];
}

function extractPrimaryScope(html: string): string {
  return extractTagContent(html, "article") ?? extractTagContent(html, "main") ?? extractTagContent(html, "body") ?? html;
}

function extractTagContent(html: string, tagName: string): string | undefined {
  const pattern = new RegExp(`<${tagName}\\b[^>]*>([\\s\\S]*?)<\\/${tagName}>`, "i");
  return pattern.exec(html)?.[1];
}

function stripNoise(html: string): string {
  return html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, "")
    .replace(/<noscript\b[^>]*>[\s\S]*?<\/noscript>/gi, "")
    .replace(/<!--[\s\S]*?-->/g, "");
}

function stripTags(html: string): string {
  return html
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/(p|div|li|tr|h[1-6])>/gi, "\n")
    .replace(/<[^>]+>/g, "");
}

function normalizeInlineText(text: string): string {
  return decodeHtmlEntities(text)
    .replace(/\u00a0/g, " ")
    .replace(/[ \t\r\n]+/g, " ")
    .trim();
}

function decodeHtmlEntities(text: string): string {
  return text
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, "\"")
    .replace(/&#39;/g, "'");
}
