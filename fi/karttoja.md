---
layout: home
lang: fi
---
# Karttoja
<table>
  {% assign sitepages = site.pages | sort: 'utgiven' %}
    {% for sitepage in sitepages %}
        {% if sitepage.asset == 'map' %}
           <tr>
              <td>
                <table>
                  <tr><td>Tekijä:</td><td>   {{ sitepage.upphovsman }}    </td> </tr>
                  <tr><td>Julkaisuvuosi:</td><td>   <b>{{ sitepage.utgiven }}</b>      </td> </tr>
                  <tr><td>Digi lähde:</td><td> <a href="{{ sitepage.digikallaurl }}"> {{sitepage.digikalla}} </a>      </td> </tr>
                  <tr><td>Alkuperäis kpl:</td><td>   {{ sitepage.orginal }}      </td> </tr>
                  <tr><td>Koko:</td><td>   {{ sitepage.storlek }}      </td> </tr>
                   <tr><td>Kuvaus:</td><td>   {{ sitepage.beskrivning }}      </td> </tr>
                </table>
              </td>
              <td>
                 <a href="{{sitepage.dir}}{{ sitepage.img }}" rel="lightbox"><img src="{{sitepage.dir}}{{ sitepage.img }}" width="200px"></a>
              </td>
           </tr>
        {% endif %}
    {% endfor %}
</table>