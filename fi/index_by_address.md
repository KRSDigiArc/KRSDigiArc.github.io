---
layout: home
lang: fi
---
# Osoitteen mukaan
<table>
    {% assign sorted = site.pages | sort: 'adress'  %}
    {% for sitepage in sorted %}
        {% if sitepage.layout == 'building' %}
        {% if sitepage.lang == 'fi' %}
        <tr>
          <td>
            {{ sitepage.adress }}
          </td>
          <td>
            <a href="{{ sitepage.url }}">{{ sitepage.title }}</a>
          </td>
       </tr>
      {% endif %}
      {% endif %}
    {% endfor %}
</table>