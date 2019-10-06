---
layout: home
---
# Kvartersvis (stadsdelsvis?)
<table>
    {% assign sorted = (site.pages | sort: 'adress')  %}
    {% for sitepage in sorted %}
        {% if sitepage.layout == 'building' %}
        <tr><th><a href="{{ sitepage.url }}">{{ sitepage.title }}</a></th>
        <th>{{ sitepage.adress }}</th>
        </tr>
      {% endif %}
    {% endfor %}
</table>