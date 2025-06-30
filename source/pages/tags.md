---
title: Tags
permalink: "/blog/tags/"
---

{%- from "taxonomy.njk" import taxonomy with context -%}

{{- taxonomy(collections.tags, 'tags') -}}
