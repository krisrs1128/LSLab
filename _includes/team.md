---
title: Team
layout: default
sectionid: team
---

<div>
<div class="row">
    <div class="col-sm-6 col-md-8">
	<h2 class="header-light regular-pad">Kris Sankaran</h2>
  I am an assistant professor in the <a href="https://stat.wisc.edu">Department of
  Statistics</a> at the University of Wisconsin - Madison. I was previously a
  postdoc at <a href="https://mila.quebec">Mila</a>, where I contributed to the
  institute's <a href="https://mila.quebec/en/ai-society/">humanitarian AI</a>
  initiative and worked on problems at the intersection of climate change
  adaptation and AI. I received my PhD under the guidance of <a
  href="http://statweb.stanford.edu/~susan/">Susan Holmes</a> at the Stanford
  University <a href="https://statistics.stanford.edu/">Department of
  Statistics</a>, specializing in probabilistic and interactive approaches to
  understanding complex microbiome datasets.
	<br><br>
  <a href="mailto:ksankaran@wisc.edu"><li class="fa fa-fw fa-2x fa-envelope"></li></a><a href="https://github.com/krisrs1128/"><li class="fa fa-lg fa-github"></li></a>
  <a href="{{ "https://drive.google.com/file/d/154jCZKIaReqOed-DQFmvu2lC24ytJnXr/view?usp=sharing/assets/docs/cv.pdf" }}">CV</a>
	<br><br>
</div>
<hr>
<hr>
</div>

<h1>Current Team</h1>

<div id="team">
{% for pub in site.team %}
    {% if pub.alumni == null %}
        {{ pub }}
    {% endif %}
{% endfor %}
</div>

<h1>Past Trainees</h1>

I have been lucky to work with many wonderful students during my postdoc at Mila
and as an Assistant Professor at UW-Madison,

<br>
{% for pub in site.team %}
    {% if pub.alumni != null %}
        {{ pub }}
    {% endif %}
{% endfor %}

<div id="team">
