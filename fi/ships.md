---
layout: home
lang: fi
---
# Laivoja
<table>
    {% assign sorted = site.pages | sort: 'title'  %}
    {% for sitepage in sorted %}
        {% if sitepage.layout == 'ship' %}
          {% if sitepage.lang == 'fi' %}
            <tr>
              <td><a href="{{ sitepage.url }}">{{ sitepage.title }}</a></td>
            </tr>
          {% endif %}
        {% endif %}
    {% endfor %}
</table>