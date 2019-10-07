---
layout: home
---
# Osoitteen mukaan
<table>
    {% assign sorted = (site.pages | sort: 'adress')  %}
    {% for sitepage in sorted %}
        {% if sitepage.layout == 'building' %}
        {% if sitepage.lang == 'fi' %}
        <tr><th><a href="{{ sitepage.url }}">{{ sitepage.title }}</a></th>
        <th>{{ sitepage.adress }}</th>
        </tr>
      {% endif %}
      {% endif %}
    {% endfor %}
</table>