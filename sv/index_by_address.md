---
layout: home
---
# Enligt adress
<table>
    {% assign sorted = (site.pages | sort: 'adress')  %}
    {% for sitepage in sorted %}
        {% if sitepage.layout == 'building' %}
          {% if sitepage.lang == 'sv' %}
            <tr><td><a href="{{ sitepage.url }}">{{ sitepage.title }}</a></td>
            <td>{{ sitepage.adress }}</td>
            </tr>
          {% endif %}
        {% endif %}
    {% endfor %}
</table>