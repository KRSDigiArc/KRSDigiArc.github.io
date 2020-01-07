---
layout: home
lang: fi
---
# Kaupunginosittain
<h2>Ensimmäinen kaupunginosa</h2>
<table>
   {% assign sorted = site.pages | sort: 'adress' %}
   {% for sitepage in sorted %}
     {% if sitepage.layout == 'building' %}
       {% if sitepage.lang == 'fi' %}
          {% if sitepage.stadsdel == 1 %}
            <tr><td><a href="{{ sitepage.url }}">{{ sitepage.title }}</a></td>
            <td>{{ sitepage.adress }}</td>
            </tr>
          {% endif %}
       {% endif %}
     {% endif %}
   {% endfor %}
</table>


<h2>Toinen kaupunginosa</h2>
<table>
  {% assign sorted = site.pages | sort: 'adress'  %}
  {% for sitepage in sorted %}
    {% if sitepage.layout == 'building' %}
      {% if sitepage.lang == 'fi' %}
        {% if sitepage.stadsdel == 2 %}
          <tr><td><a href="{{ sitepage.url }}">{{ sitepage.title }}</a></td>
          <td>{{ sitepage.adress }}</td>
          </tr>
        {% endif %}
      {% endif %}
    {% endif %}
  {% endfor %}
</table>

<h2>Kolmas kaupunginosa</h2>
<table>
  {% for sitepage in sorted %}
    {% if sitepage.layout == 'building' %}
      {% if sitepage.lang == 'fi' %}
        {% if sitepage.stadsdel == 3 %}
          <tr><td><a href="{{ sitepage.url }}">{{ sitepage.title }}</a></td>
          <td>{{ sitepage.adress }}</td>
          </tr>
        {% endif %}
      {% endif %}
    {% endif %}
  {% endfor %}
</table>

<h2>Neljäs kaupunginosa</h2>
<table>
  {% for sitepage in sorted %}
    {% if sitepage.layout == 'building' %}
      {% if sitepage.lang == 'fi' %}
        {% if sitepage.stadsdel == 4 %}
          <tr><td><a href="{{ sitepage.url }}">{{ sitepage.title }}</a></td>
          <td>{{ sitepage.adress }}</td>
          </tr>
        {% endif %}
      {% endif %}
    {% endif %}
  {% endfor %}
</table>
