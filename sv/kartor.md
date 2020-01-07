---
layout: home
lang: sv
---
# Stadskartor
<table>
  {% assign sitepages = site.pages | sort: 'utgiven' %}
    {% for sitepage in sitepages %}
        {% if sitepage.asset == 'map' %}
           <tr>
              <td>
                <table>
                  <tr><td>Upphovsman:</td><td>   {{ sitepage.upphovsman }}    </td> </tr>
                  <tr><td>Utgiven:</td><td>   <b>{{ sitepage.utgiven }}</b>      </td> </tr>
                  <tr><td>Digital källa:</td><td> <a href="{{ sitepage.digikallaurl }}"> {{sitepage.digikalla}} </a>      </td> </tr>
                  <tr><td>Orginal:</td><td>   {{ sitepage.orginal }}      </td> </tr>
                  <tr><td>Storlek:</td><td>   {{ sitepage.storlek }}      </td> </tr>
                   <tr><td>Beskrivning:</td><td>   {{ sitepage.beskrivning }}      </td> </tr>
                </table>
              </td>
              <td>
                 <a href="{{sitepage.dir}}{{ sitepage.img }}" rel="lightbox"><img src="{{sitepage.dir}}{{ sitepage.img }}" width="200px"></a>
              </td>
           </tr>
        {% endif %}
    {% endfor %}
</table>
