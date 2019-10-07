---
layout: home
---
# Enligt fastighetsnummer
<table>
  {% assign sitepages = site.pages | sort: 'order' %}
  {% for sitepage in sitepages %}
    {% if sitepage.layout == 'building' %}
      {% if sitepage.lang == 'sv' %}
        {% if page.url == sitepage.url %} class="active"{% endif %}
          <tr><td>
          <a href="{{ sitepage.url }}">{{ sitepage.title }}</a>
          </td><td>
          {{ sitepage.fastighetsnr }}
          </td>
          </tr>
       {% endif %}
    {% endif %}
  {% endfor %}
</table>
