---
layout: home
---
# testit
<ul>
{% assign sitepages = site.pages | sort: 'order' %}
{% for sitepage in sitepages %}
{% if sitepage.layout == 'building' %}
  <li {% if page.url == sitepage.url %} class="active"{% endif %}>
    <a href="{{ sitepage.url }}">{{ sitepage.title }}</a>
  </li>
   {% endif %}
{% endfor %}
</ul>
