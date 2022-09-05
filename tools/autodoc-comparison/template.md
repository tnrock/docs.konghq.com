# Configuration Reference for Kong Gateway

Reference for Kong Gateway configuration parameters. Set these parameters in kong.conf.

To learn more about the kong.conf file, see the guide on the [Kong Configuration File](/gateway/latest/production/kong-conf/).

---
{% for item in items %}
## {{ item.name }}
{% if item.description %}
{{ item.description }}
{% endif 

%}{% for var, data in item.vars %}
### {{ var }}
{% if var in eeOnly %}{: .badge .enterprise }{% endif %}
{{ data.description }}
{% if data.default %}**Default:** {{ data.default }}{% endif %}
{% endfor 

%}{% for table in item.tables %}
### {{ table.title }}
{% for r in table.rows %}
| **{{ r.name }}** | {{ r.description | replace("\n"," ") | replace("  "," ") }} | {{ r.default }} |{% endfor 
%}{% endfor %}---{% endfor %}
