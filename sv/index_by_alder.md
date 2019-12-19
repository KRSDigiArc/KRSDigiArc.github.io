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
            {% if sitepage.anno == 9999%}
              <td>-</td>
            {% elsif sitepage.anno == 1899.9%}
              <td>1800-tal</td>
            {% else %}
              <td>{{ sitepage.anno }}</td>
            {% endif %}
              <td><a href="{{ sitepage.url }}">{{ sitepage.title }}</a></td>
              <td>{{ sitepage.adress }}</td>
            </tr>
          {% endif %}
        {% endif %}
    {% endfor %}
</table>