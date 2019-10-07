---
layout: home
---
# Kvartersvis (stadsdelsvis?)


<h2>Första kvarteret</h2>
<table>
   {% assign sorted = (site.pages | sort: 'adress')  %}
   {% for sitepage in sorted %}
     {% if sitepage.layout == 'building' %}
       {% if sitepage.lang == 'sv' %}
          {% if sitepage.stadsdel == 1 %}
            <tr><td><a href="{{ sitepage.url }}">{{ sitepage.title }}</a></td>
            <td>{{ sitepage.adress }}</td>
            </tr>
          {% endif %}
       {% endif %}
     {% endif %}
   {% endfor %}
</table>


<h2>Andra kvarteret</h2>
<table>
  {% assign sorted = (site.pages | sort: 'adress')  %}
  {% for sitepage in sorted %}
    {% if sitepage.layout == 'building' %}
      {% if sitepage.lang == 'sv' %}
        {% if sitepage.stadsdel == 2 %}
          <tr><td><a href="{{ sitepage.url }}">{{ sitepage.title }}</a></td>
          <td>{{ sitepage.adress }}</td>
          </tr>
        {% endif %}
      {% endif %}
    {% endif %}
  {% endfor %}
</table>

<h2>Tredje kvarteret</h2>
<table>
  {% for sitepage in sorted %}
    {% if sitepage.layout == 'building' %}
      {% if sitepage.lang == 'sv' %}
        {% if sitepage.stadsdel == 3 %}
          <tr><td><a href="{{ sitepage.url }}">{{ sitepage.title }}</a></td>
          <td>{{ sitepage.adress }}</td>
          </tr>
        {% endif %}
      {% endif %}
    {% endif %}
  {% endfor %}
</table>
