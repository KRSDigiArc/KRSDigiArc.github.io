---
layout: home
lang: sv
---
# Kartor
<table>
    {% for sitepage in site.pages %}
        {% if sitepage.asset == 'map' %}
           <tr><td><a href="{{ sitepage.url }}">{{ sitepage.upphovsman }}</a></td>
           <td>{{ sitepage.utgiven }}</td>
           <td><img src="{{sitepage.dir}}{{ sitepage.img }}" width="200px"></td>
           </tr>
        {% endif %}
    {% endfor %}
</table>