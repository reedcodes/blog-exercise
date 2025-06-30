---
pagination:
  data: collections
  size: 1
  alias: tag
eleventyComputed:
  title: "Tag Archive: {{ tag -}}"
  permalink: "/blog/tags/{{- tag | slug -}}/"
eleventyExcludeFromCollections: ["pages"]
---

{%- from "post-list.njk" import postList with context -%}

{{- postList(collections[tag]) -}}
