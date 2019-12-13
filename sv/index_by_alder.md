---
layout: home
lang: sv
---
# Enligt ålder
<table>
    {% assign sorted = (site.pages | sort: 'anno')  %}
    {% for sitepage in sorted %}
        {% if sitepage.layout == 'building' %}
          {% if sitepage.lang == 'sv' %}
            <tr>
              <td>{{ sitepage.anno }}</td>
              <td><a href="{{ sitepage.url }}">{{ sitepage.title }}</a></td>
              <td>{{ sitepage.adress }}</td>
            </tr>
          {% endif %}
        {% endif %}
    {% endfor %}
</table>