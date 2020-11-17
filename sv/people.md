---
layout: home
lang: sv
---
# Personer
<table>
    {% assign sorted = site.pages | sort: 'title'  %}
    {% for sitepage in sorted %}
        {% if sitepage.layout == 'person' %}
          {% if sitepage.lang == 'sv' %}
            <tr>
              <td><a href="{{ sitepage.url }}">{{ sitepage.title }}</a></td><td>{{ sitepage.born }} - {{sitepage.died }} </td>
            </tr>
          {% endif %}
        {% endif %}
    {% endfor %}
</table>