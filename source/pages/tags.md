---
title: Tags
permalink: "/blog/tags/"
order: 4
---

{%- from "taxonomy.njk" import taxonomy with context -%}

{{- taxonomy(collections.tags, 'tags') -}}
