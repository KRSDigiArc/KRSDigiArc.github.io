---
layout: home
lang: fi
---
# Osoitteen mukaan
{% assign streets = "Hållfastinkatu,Kissanpiiskaajankuja,Kauppiaskatu,Laväärtintie,Puistokatu,Aitakatu,Rantakatu,Läntinen Pitkäkatu,Itäinen Pitkäkatu" | split: ','%}
<p>
{%- for street in streets %}
    <a href="#{{street}}">{{ street }}</a>
    {% if forloop.last == false %}
      ,
    {% endif %}
{%- endfor %}
</p>
{% for street in streets %}
  <h3 id="{{street}}"> {{ street }} </h3>
  <p>
  {% for sitepage in site.pages %}
    {%- if sitepage.layout == 'building' %}
      {%- if sitepage.lang == 'fi' %}
        {%- for item in sitepage.address %}
          {%- if item.street == street %}
            {{ item.num }}  <a href="{{ sitepage.url }}">{{ sitepage.title }}</a><br>
          {%- endif %}
        {%- endfor %}
      {%- endif %}
    {%- endif %}
  {%- endfor %}
  </p>
{% endfor %}
