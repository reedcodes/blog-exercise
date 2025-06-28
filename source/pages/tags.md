---
title: Tags
---

{%- for tag in collections.tags %}
	{%- if tag != 'pages' and tag != 'posts' %}
- {{ tag }}
	{%- endif -%}
{%- endfor -%}
