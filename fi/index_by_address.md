---
layout: home
lang: fi
---
# Osoitteen mukaan
{% assign streets = "Aitakatu,Hållfastinkatu,Itäinen Pitkäkatu,Kauppiaskatu,Kirkkokatu,Kissanpiiskaajankuja,Lapväärtintie,Läntinen Pitkäkatu,Puistokatu,Rantakatu,Sundströminkatu,Uusikatu" | split: ','%}
<p>
{%- for street in streets %}
    <a href="#{{street}}">{{ street }}</a>
    {% if forloop.last == false %}
    ,
    {% endif %}
{%- endfor %}
</p>
{% for street in streets %}
  <h2><a class="anchor" name="{{street}}">{{ street }}</a></h2>
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
