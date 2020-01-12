---
layout: home
lang: sv
---
# Källor
<p>
  {% assign sitepages = site.pages | sort: 'utgiven' %}
    {% for sitepage in sitepages %}
        {% if sitepage.asset == 'source' %}
                <table>
                  <tr><td>Titel:</td>         <td><a href="{{sitepage.dir}}{{ sitepage.file }}"> {{ sitepage.title }} </a> </td></tr>
                  <tr><td>Upphovsman:</td>    <td>   {{ sitepage.upphovsman }}    </td> </tr>
                  <tr><td>Organisation:</td>  <td>   {{ sitepage.organization }}    </td> </tr>
                  <tr><td>Utgiven:</td>       <td>   <b>{{ sitepage.utgiven }}</b>      </td> </tr>
                  <tr><td>Digital källa:</td> <td> <a href="{{ sitepage.digikallaurl }}"> {{sitepage.digikalla}} </a>      </td> </tr>
                  <tr><td>Orginal:</td>       <td>   {{ sitepage.orginal }}      </td> </tr>
                   <tr><td>Beskrivning:</td><td>   {{ sitepage.beskrivning }}      </td> </tr>
                </table>
                <hr>
        {% endif %}
    {% endfor %}
</p>
