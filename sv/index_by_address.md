---
layout: home
---
# Enligt adress
<table>
    {% assign sorted = (site.pages | sort: 'adress')  %}
    {% for sitepage in sorted %}
        {% if sitepage.layout == 'building' %}
        <tr><td><a href="{{ sitepage.url }}">{{ sitepage.title }}</a></td>
        <td>{{ sitepage.adress }}</td>
        </tr>
      {% endif %}
    {% endfor %}
</table>