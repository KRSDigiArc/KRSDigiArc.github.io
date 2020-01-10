---
layout: home
lang: fi
---
# Lähteitä
<p>
  {% assign sitepages = site.pages | sort: 'utgiven' %}
    {% for sitepage in sitepages %}
        {% if sitepage.asset == 'source' %}
                <table>
                  <tr><td>Titel:</td>         <td><a href="{{sitepage.dir}}{{ sitepage.file }}"> {{ sitepage.title }} </a> </td></tr>
                  <tr><td>Tekijä:</td>    <td>   {{ sitepage.upphovsman }}    </td> </tr>
                  <tr><td>Organisaatio:</td>  <td>   {{ sitepage.organization }}    </td> </tr>
                  <tr><td>Julkaisuvuosi:</td>       <td>   <b>{{ sitepage.utgiven }}</b>      </td> </tr>
                  <tr><td>Digi lähde:</td> <td> <a href="{{ sitepage.digikallaurl }}"> {{sitepage.digikalla}} </a>      </td> </tr>
                  <tr><td>Alkuperäis kpl:</td>       <td>   {{ sitepage.orginal }}      </td> </tr>
                   <tr><td>Kuvaus:</td><td>   {{ sitepage.beskrivning }}      </td> </tr>
                </table>
                <hr>
        {% endif %}
    {% endfor %}
</p>
