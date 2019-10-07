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
            <tr><th><a href="{{ sitepage.url }}">{{ sitepage.title }}</a></th>
            <th>{{ sitepage.adress }}</th>
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
          <tr><th><a href="{{ sitepage.url }}">{{ sitepage.title }}</a></th>
          <th>{{ sitepage.adress }}</th>
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
          <tr><th><a href="{{ sitepage.url }}">{{ sitepage.title }}</a></th>
          <th>{{ sitepage.adress }}</th>
          </tr>
        {% endif %}
      {% endif %}
    {% endif %}
  {% endfor %}
</table>
