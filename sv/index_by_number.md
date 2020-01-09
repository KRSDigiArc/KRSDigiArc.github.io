---
layout: home
---
# Enligt fastighetsnummer
<table>
  {% assign sitepages = site.pages | sort: 'fastighetsnr' %}
  {% for sitepage in sitepages %}
    {% if sitepage.layout == 'building' %}
      {% if sitepage.lang == 'sv' %}
        {% if page.url == sitepage.url %} class="active"{% endif %}
          <tr><td>
          {{ sitepage.fastighetsnr }}
          </td><td>
          <a href="{{ sitepage.url }}">{{ sitepage.title }}</a>
          </td>
          </tr>
       {% endif %}
    {% endif %}
  {% endfor %}
</table>
