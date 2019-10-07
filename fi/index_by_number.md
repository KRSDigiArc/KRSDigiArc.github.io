---
layout: home
---
# Kiinteistönumeroittain
<table>
  {% assign sitepages = site.pages | sort: 'order' %}
  {% for sitepage in sitepages %}
    {% if sitepage.layout == 'building' %}
      {% if sitepage.lang == 'fi' %}
        {% if page.url == sitepage.url %} class="active"{% endif %}
          <tr><th>
          <a href="{{ sitepage.url }}">{{ sitepage.title }}</a>
          </th><th>
          {{ sitepage.fastighetsnr }}
          </th>
          </tr>
       {% endif %}
    {% endif %}
  {% endfor %}
</table>
