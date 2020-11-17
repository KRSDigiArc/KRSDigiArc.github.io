---
layout: home
---
# Enligt adress

{% assign streets = "Hållfastskagatan,Kattpiskargränden,Kyrkogatan,Köpmansgatan,Lappfjärdsvägen,Nygatan,Parkgatan,Staketgatan,Strandgatan,Sundströmsgatan,Västra Långgatan,Östra Långgatan" | split: ','%}
<p>
{%- for street in streets %}
    <a href="#{{street}}">{{ street }}</a>
    {% if forloop.last == false %}
     ,
    {% endif %}
{%- endfor %}
</p>
{% for street in streets %}
  <h2><a name="{{street}}">{{ street }}</a></h2>
  <p>
  {% for sitepage in site.pages %}
    {%- if sitepage.layout == 'building' %}
      {%- if sitepage.lang == 'sv' %}
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
