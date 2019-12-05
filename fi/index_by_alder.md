---
layout: home
lang: fi
---
# Iän mukaan
<table>
    {% assign sorted = (site.pages | sort: 'anno')  %}
    {% for sitepage in sorted %}
        {% if sitepage.layout == 'building' %}
          {% if sitepage.lang == 'fi' %}
            <tr>
              <td>{{ sitepage.anno }}</td>
              <td><a href="{{ sitepage.url }}">{{ sitepage.title }}</a></td>
              <td>{{ sitepage.adress }}</td>
            </tr>
          {% endif %}
        {% endif %}
    {% endfor %}
</table>