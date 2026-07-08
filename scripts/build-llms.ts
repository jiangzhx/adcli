#!/usr/bin/env bun

import { buildAllLlmsArtifacts, buildLlmsArtifacts, buildLlmsArtifactsForUrl } from "@/src/lib/llms/builder";

const args = process.argv.slice(2);
const urlIndex = args.indexOf("--url");
const platformIndex = args.indexOf("--platform");
const platformOption = platformIndex === -1 ? undefined : args[platformIndex + 1];

const build = urlIndex !== -1
  ? buildLlmsArtifactsForUrl({
    url: requiredOptionValue(args, urlIndex, "--url"),
    platform: platformOption,
  }).then((result) => ({
    platform: result.platform,
    document: result.document,
    outputs: result.outputs,
  }))
  : buildPlatform(args[0] ?? "all");

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

function buildPlatform(platform: string) {
  return platform === "all"
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
}

function requiredOptionValue(args: string[], index: number, option: string): string {
  const value = args[index + 1];
  if (!value || value.startsWith("--")) {
    throw new Error(`${option} must be followed by a value`);
  }
  return value;
}
