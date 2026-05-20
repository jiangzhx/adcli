#!/usr/bin/env bun

import { buildSearchIndex } from "@/src/lib/search/index-builder";

buildSearchIndex()
  .then((index) => {
    console.log(
      JSON.stringify(
        {
          documents: index.documents.length,
          output: "/search-index.json",
        },
        null,
        2,
      ),
    );
  })
  .catch((error: unknown) => {
    console.error(error instanceof Error ? error.message : error);
    process.exit(1);
  });
