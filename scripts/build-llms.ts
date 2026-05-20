#!/usr/bin/env bun

import { buildAllLlmsArtifacts, buildLlmsArtifacts } from "@/src/lib/llms/builder";

const platform = process.argv[2] ?? "all";

const build = platform === "all"
  ? buildAllLlmsArtifacts().then((manifests) => ({
    platform: "all",
    documents: manifests.reduce((sum, manifest) => sum + manifest.documents.length, 0),
    platforms: manifests.map((manifest) => manifest.platform),
      outputs: {
        llms: "/llms.txt",
        llms_full: "/llms-full.txt",
        search_index: "/search-index.json",
      },
    }))
  : buildLlmsArtifacts({ platform }).then((manifest) => ({
    platform: manifest.platform,
    documents: manifest.documents.length,
    outputs: manifest.outputs,
  }));

build
  .then((summary) => {
    console.log(
      JSON.stringify(
        summary,
        null,
        2,
      ),
    );
  })
  .catch((error: unknown) => {
    console.error(error instanceof Error ? error.message : error);
    process.exit(1);
  });
