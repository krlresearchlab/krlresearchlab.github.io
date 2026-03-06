/* ── DATA ── */
const TEAM = [
  {name:"Polyna German",year:"3rd Year",program:"Computer Science & Economics",project:"Collecting and analyzing faculty demographic data for the Canadian Economics Diversity Project (CEDP).",img:"images/pol.png",linkedin:"https://can01.safelinks.protection.outlook.com/?url=http%3A%2F%2Flinkedin.com%2Fin%2Fpolynagerman&data=05%7C02%7Cpolyna.german%40mail.utoronto.ca%7C42cd2b2650f34a57d56908de46f45300%7C78aac2262f034b4d9037b46d56c55210%7C0%7C0%7C639026212335267659%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=MYfZp3ricjPujBdcMYjFjFpOHLX%2BIWHJlDWRGVW2ICk%3D&reserved=0"},
  {name:"Hal Glover",year:"4th Year",program:"Economics",project:"Working on the Airbnb and housing market project.",img:"images/hal.png",linkedin:"https://www.linkedin.com/in/hglover/"},
  {name:"Leran Xu",year:"4th Year",program:"Psychology & Economics",project:"Working on migration patterns regarding social events.",img:"images/leran.png",linkedin:"https://www.linkedin.com/in/leran-xu-423467270/"},
  {name:"Mashiat Abonty",year:"4th Year",program:"Economics & Statistics",project:"Working on the women's hygiene products market research.",img:"images/mashiat.png",linkedin:"https://www.linkedin.com/in/muntaha-mashiat-abonty-2a7b58326/"},
  {name:"Emerson Schryver",year:"3rd Year",program:"Economics & Mathematics",project:"Working on a wide range of topics involving ML and economics.",img:"images/emerson.png",linkedin:"https://www.linkedin.com/in/eschry/"},
  {name:"Kaiden Beskers",year:"3rd Year",program:"Astrophysics & Economics",project:"Working on a project about people experiencing homelessness in Toronto.",img:"images/kaiden.png",linkedin:"https://www.linkedin.com/in/kaiden-beskers-b824482ab/"},
  {name:"Anh Dang Phuong",year:"3rd Year",program:"Computer Science, Data Science & Economics",project:"Working on a project about the homelessness landscape in Toronto.",img:"images/amy.jpg",linkedin:"https://www.linkedin.com/in/phuonganhdangamy/"},
  {name:"Akshat Oza",year:"3rd Year",program:"Computer Science & Economics",project:"Working on a project evaluating policies and their impact on people experiencing homelessness in Toronto.",img:"images/akshat.jpg",linkedin:"https://www.linkedin.com/in/akshatoza/"},
];

const ALUMNI = [
  // {name:"Sample Alumni 1",year:"2024",program:"Economics",now:"Hopefully somewhere good"},
];

const RESEARCH = [
  {title:"Housing Markets",desc:"Investigating Airbnb's impact on housing affordability and rental dynamics in Canadian cities.",svg:'<path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1m-2 0h2"/>'},
  {title:"Migration & Social Events",desc:"Analyzing how social and political events shape migration patterns across regions.",svg:'<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>'},
  {title:"Economics Diversity",desc:"The Canadian Economics Diversity Project — mapping faculty demographics across institutions.",svg:'<path d="M18 20V10M12 20V4M6 20v-6"/>'},
  {title:"Homelessness Policy",desc:"Spatial analysis and policy evaluation for people experiencing homelessness in Toronto.",svg:'<path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4"/><path d="M9 9h1M9 13h1M9 17h1"/>'},
  {title:"Consumer Markets",desc:"Research on women's hygiene product markets, pricing, and access inequities.",svg:'<path d="M23 6l-9.5 9.5-5-5L1 18"/><path d="M17 6h6v6"/>'},
  ];

const RESOURCES = [
  {title:"Interactive Economic Maps",desc:"Explore our spatial data visualizations and interactive mapping tools.",svg:'<path d="M1 6v16l7-4 8 4 7-4V2l-7 4-8-4-7 4z"/><path d="M8 2v16M16 6v16"/>'},
  {title:"Data Repositories",desc:"Access curated datasets used in our research projects.",svg:'<path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/>'},
  {title:"Working Papers",desc:"Read our latest working papers and research findings.",svg:'<path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/>'},
];

const EVENTS = [{
  id:1,title:"K.R.L. Lab Launch Event",date:"January 9, 2026",location:"University of Toronto",featured:true,
  desc:"The inaugural launch of the K.R.L. Research Lab, celebrating the beginning of our mission to bridge applied econometrics and data science. Faculty, students, and guests joined to learn about the lab's vision, ongoing projects, and opportunities for collaboration.",
  topics:["Lab Mission & Vision","Applied Econometrics","Student Research Opportunities","Data Science for Policy"],
  presenters:["Nazanin Khazra","Polyna German","Hal Glover","Leran Xu","Mashiat Abonty","Emerson Schryver","Kaiden Beskers"],
  photos:["images/launch1.jpeg", "images/launch_2.jpeg"],
},{
  id:2,title:"K.R.L. Lab Seminar 2",date:"February 6, 2026",location:"University of Toronto",featured:true,
  desc:"A presentation exploring the preliminary findings of the lab's research on Bill 6 (the Safer Municipalities Act). The team analyzed high-frequency administrative data to estimate the causal impact of the legislation on shelter access, displacement, and overdose risks among unhoused populations in Toronto.",
  topics:["Lab Mission & Vision","Applied Econometrics","Student Research Opportunities","Data Science for Policy"],
  presenters:["Nazanin Khazra","Mashiat Abonty","Kaiden Beskers","Anh Dang Phuong", "Akshat Oza"],
  photos:[],
},
{
  id:3,title:"K.R.L. Lab Seminar 3",date:"March 6, 2026",location:"University of Toronto",featured:true,
  desc:"An interactive seminar and workshop focused on the fundamentals of causal inference and the Difference-in-Differences (DiD) methodology. Attendees explored how to distinguish true causal effects from simple correlations, finishing with a hands-on Python coding session to evaluate the impact of a hypothetical policy change.",
  topics:["Causal Inference","DiD","Parallel Trends Assumption","Coding Workshop"],
  presenters:["Nazanin Khazra","Hal Glover","Leran Xu","Emerson Schryver"],
  photos:[],
  slides:"images/K_R_L_Seminar_Series.pdf" 
}];
const APPLY_REQS = [
  "Intellectual curiosity and genuine interest in research",
  "Background in economics, statistics, computer science, or related fields",
  "Comfort with data analysis tools (R, Python, Stata, etc.)",
  "Willingness to collaborate and learn in a team setting"
];

/* ── Helpers ── */
function initials(name){return name.split(' ').map(n=>n[0]).join('')}
function svgIcon(svg,size,color){size=size||28;color=color||'var(--uoft-blue)';return '<svg width="'+size+'" height="'+size+'" viewBox="0 0 24 24" fill="none" stroke="'+color+'" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">'+svg+'</svg>'}
function avatarHTML(name,cls){cls=cls||'md';return '<div class="avatar '+cls+'">'+initials(name)+'</div>'}
function photoAvatarHTML(src,name,cls){cls=cls||'md';return '<div class="avatar photo '+cls+'"><img src="'+src+'" alt="'+name+'"></div>'}

/* ── Render: Research Cards ── */
function renderResearchCards(containerId, limit){
  var el=document.getElementById(containerId);if(!el)return;
  var items=limit?RESEARCH.slice(0,limit):RESEARCH;
  el.innerHTML=items.map(function(r,i){return '<div class="card research-card reveal" style="transition-delay:'+i*0.07+'s">'+svgIcon(r.svg)+' <h3>'+r.title+'</h3><p>'+r.desc+'</p></div>'}).join('');
}

/* ── Render: Resource Cards ── */
function renderResourceCards(){
  var el=document.getElementById('resourceCards');if(!el)return;
  el.innerHTML=RESOURCES.map(function(r,i){return '<div class="card research-card reveal" style="transition-delay:'+i*0.1+'s">'+svgIcon(r.svg,26)+'<h3>'+r.title+'</h3><p>'+r.desc+'</p></div>'}).join('');
}

/* ── Render: Home Team ── */
function renderHomeTeam(){
  var el=document.getElementById('homeTeamCards');if(!el)return;
  el.innerHTML=TEAM.map(function(t,i){return '<div class="card team-card-sm reveal" style="transition-delay:'+i*0.07+'s">'+photoAvatarHTML(t.img,t.name,'lg')+'<h4>'+t.name+'</h4><div class="year">'+t.year+'</div></div>'}).join('');
}

/* ── Render: People Page ── */
function renderDirector(){
  var el=document.getElementById('directorCard');if(!el)return;
  el.innerHTML=photoAvatarHTML('images/nazanin.png','Nazanin Khazra','xl')+'<div style="flex:1;min-width:260px"><div class="label">Lab Director</div><h3>Nazanin Khazra</h3><p>Department of Economics, University of Toronto. Leading research in applied econometrics and data science.</p><a href="https://www.nazaninkhazra.com/home" target="_blank" class="ext-link">Personal Website <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--boundless)" stroke-width="1.8" stroke-linecap="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/></svg></a></div>';
}
function renderPeopleCards(){
  var el=document.getElementById('peopleCards');if(!el)return;
  el.innerHTML=TEAM.map(function(t,i){
    var li=t.linkedin?' <a href="'+t.linkedin+'" target="_blank" class="linkedin-icon"><i class="fab fa-linkedin"></i></a>':'';
    return '<div class="card team-card reveal" style="transition-delay:'+i*0.07+'s"><div class="team-card-header">'+photoAvatarHTML(t.img,t.name,'md')+'<div><h4>'+t.name+li+'</h4><div class="meta">'+t.year+' &middot; '+t.program+'</div></div></div><p>'+t.project+'</p></div>'
  }).join('');
}

/* ── Render: Alumni ── */
function renderAlumni(){
  var el=document.getElementById('alumniList');if(!el)return;
  el.innerHTML=ALUMNI.map(function(a,i){return '<div class="card alumni-card reveal" style="transition-delay:'+i*0.1+'s">'+avatarHTML(a.name,'md')+'<div style="flex:1"><h4>'+a.name+'</h4><div class="sub">'+a.program+' &middot; Class of '+a.year+'</div></div><div class="now">'+a.now+'</div></div>'}).join('')+'<p class="reveal" style="text-align:center;margin-top:28px;font-size:13px;color:var(--text-light);font-style:italic;transition-delay:.2s">Alumni list is updated as the lab grows.</p>';
}

/* ── Render: Events ── */
/* ── Render: Events ── */
function renderEvents(){
  var el=document.getElementById('eventsList');if(!el)return;
  el.innerHTML=EVENTS.map(function(evt){
    var topicsHTML=evt.topics.map(function(t){return '<div class="event-topic"><div class="event-topic-dot"></div>'+t+'</div>'}).join('');
    var presentersHTML=evt.presenters.map(function(p){return '<div class="event-topic"><div class="event-topic-dot"></div>'+p+'</div>'}).join('');
    
    // NEW: Check for slides first, then photos
    var mediaHTML='';
    if(evt.slides){
      mediaHTML='<div class="event-media" style="margin-top:24px"><div class="event-col-label">Presentation Slides</div><iframe class="event-slides-frame" src="'+evt.slides+'" title="'+evt.title+' Slides"></iframe><div style="margin-top:10px"><a href="'+evt.slides+'" target="_blank" class="btn-link" style="padding:6px 14px;font-size:12px">Open PDF in new tab &rarr;</a></div></div>';
    } else if(evt.photos && evt.photos.length>0){
      mediaHTML='<div class="event-gallery" data-event="'+evt.id+'"><div class="event-col-label" style="margin-top:24px">Event Photos</div><div class="gallery-strip">';
      mediaHTML+=evt.photos.map(function(p,j){return '<img src="'+p+'" alt="Event photo '+(j+1)+'" onclick="openGallery('+evt.id+','+j+')">'}).join('');
      mediaHTML+='</div></div>';
    } else {
      mediaHTML='<div class="event-photos-placeholder">Media coming soon.</div>';
    }
    
    return '<div class="card event-card" data-id="'+evt.id+'"><div class="event-header '+(evt.featured?'featured':'')+'" onclick="toggleEvent('+evt.id+')"><div>'+(evt.featured?'<span class="feat-tag">Featured</span>':'')+'<h3>'+evt.title+'</h3><div class="event-meta">'+evt.date+' &middot; '+evt.location+'</div></div><div class="event-chevron"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M6 9l6 6 6-6"/></svg></div></div><div class="event-body"><div class="event-body-inner"><p>'+evt.desc+'</p><div class="event-cols"><div><div class="event-col-label">Topics Discussed</div>'+topicsHTML+'</div><div><div class="event-col-label">Presenters</div>'+presentersHTML+'</div></div>'+mediaHTML+'</div></div></div>'
  }).join('');
}

/* ── Render: Apply ── */
function renderApply(){
  var el=document.getElementById('applyReqs');if(!el)return;
  el.innerHTML=APPLY_REQS.map(function(r){return '<div class="apply-req"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--boundless)" stroke-width="1.8" stroke-linecap="round"><path d="M20 6L9 17l-5-5"/></svg><span>'+r+'</span></div>'}).join('');
}

/* ── Toggle Events ── */
function toggleEvent(id){
  var card=document.querySelector('.event-card[data-id="'+id+'"]');
  if(card)card.classList.toggle('open');
}

/* ── Search ── */
var SEARCH_DATA=[].concat(
  RESEARCH.map(function(r){return{title:r.title,url:'research.html',tag:'research'}}),
  RESOURCES.map(function(r){return{title:r.title,url:'resources.html',tag:'resources'}}),
  TEAM.map(function(t){return{title:t.name,url:'people.html',tag:'team'}}),
  ALUMNI.map(function(a){return{title:a.name+' (Alumni)',url:'alumni.html',tag:'alumni'}}),
  EVENTS.map(function(e){return{title:e.title,url:'events.html',tag:'events'}}),
  [{title:'Apply to the Lab',url:'apply.html',tag:'apply'}],
  [{title:'Prof. Nazanin Khazra',url:'people.html',tag:'director'}]
);
function openSearch(){
  var ov=document.getElementById('searchOverlay');if(!ov)return;
  ov.classList.add('open');
  var inp=document.getElementById('searchInput');inp.focus();inp.value='';
  document.getElementById('searchResults').innerHTML='';
}
function closeSearch(){
  var ov=document.getElementById('searchOverlay');if(ov)ov.classList.remove('open');
}
function doSearch(){
  var q=document.getElementById('searchInput').value.toLowerCase();
  var res=document.getElementById('searchResults');
  if(q.length<2){res.innerHTML='';return}
  var matches=SEARCH_DATA.filter(function(s){return s.title.toLowerCase().indexOf(q)!==-1});
  if(matches.length===0){res.innerHTML='<div class="search-empty">No results for &ldquo;'+q+'&rdquo;</div>';return}
  res.innerHTML=matches.map(function(m){return '<a class="search-result" href="'+m.url+'"><span class="search-tag">'+m.tag+'</span>'+m.title+'</a>'}).join('');
}

/* ── Scroll Reveals ── */
function initReveals(){
  document.querySelectorAll('.reveal').forEach(function(el){
    var obs=new IntersectionObserver(function(entries){if(entries[0].isIntersecting){el.classList.add('visible');obs.disconnect()}},{threshold:0.1});
    obs.observe(el);
  });
}

/* ── Nav Scroll ── */
window.addEventListener('scroll',function(){
  var nav=document.getElementById('siteNav');
  if(nav)nav.classList.toggle('scrolled',window.scrollY>40);
});

/* ── Photo Gallery Lightbox ── */
var galleryPhotos=[];
var galleryIndex=0;

function openGallery(eventId,index){
  var evt=EVENTS.find(function(e){return e.id===eventId});
  if(!evt||!evt.photos)return;
  galleryPhotos=evt.photos;
  galleryIndex=index;
  var lb=document.getElementById('galleryLightbox');
  if(!lb){
    lb=document.createElement('div');
    lb.id='galleryLightbox';
    lb.className='gallery-lightbox';
    lb.innerHTML='<div class="gallery-lb-backdrop" onclick="closeGallery()"></div><div class="gallery-lb-content"><button class="gallery-lb-close" onclick="closeGallery()">&times;</button><button class="gallery-lb-arrow gallery-lb-prev" onclick="galleryNav(-1)"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"><path d="M15 18l-6-6 6-6"/></svg></button><img class="gallery-lb-img" id="galleryImg" src="" alt="Event photo"><button class="gallery-lb-arrow gallery-lb-next" onclick="galleryNav(1)"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"><path d="M9 18l6-6-6-6"/></svg></button><div class="gallery-lb-counter" id="galleryCounter"></div></div>';
    document.body.appendChild(lb);
  }
  updateGallery();
  lb.classList.add('open');
  document.body.style.overflow='hidden';
}

function closeGallery(){
  var lb=document.getElementById('galleryLightbox');
  if(lb)lb.classList.remove('open');
  document.body.style.overflow='';
}

function galleryNav(dir){
  galleryIndex+=dir;
  if(galleryIndex<0)galleryIndex=galleryPhotos.length-1;
  if(galleryIndex>=galleryPhotos.length)galleryIndex=0;
  updateGallery();
}

function updateGallery(){
  var img=document.getElementById('galleryImg');
  var counter=document.getElementById('galleryCounter');
  if(img)img.src=galleryPhotos[galleryIndex];
  if(counter)counter.textContent=(galleryIndex+1)+' / '+galleryPhotos.length;
  // Hide arrows if only 1 photo
  var prev=document.querySelector('.gallery-lb-prev');
  var next=document.querySelector('.gallery-lb-next');
  if(prev)prev.style.display=galleryPhotos.length>1?'flex':'none';
  if(next)next.style.display=galleryPhotos.length>1?'flex':'none';
  if(counter)counter.style.display=galleryPhotos.length>1?'block':'none';
}

/* ── Keyboard Shortcuts ── */
window.addEventListener('keydown',function(e){
  if(e.key==='Escape'){closeGallery();closeSearch()}
  if((e.metaKey||e.ctrlKey)&&e.key==='k'){e.preventDefault();openSearch()}
  var lb=document.getElementById('galleryLightbox');
  if(lb&&lb.classList.contains('open')){
    if(e.key==='ArrowLeft')galleryNav(-1);
    if(e.key==='ArrowRight')galleryNav(1);
  }
});

/* ── Init ── */
document.addEventListener('DOMContentLoaded',function(){
  renderResearchCards('homeResearchCards',3);
  renderResearchCards('researchCards');
  renderResourceCards();
  renderHomeTeam();
  renderDirector();
  renderPeopleCards();
  renderAlumni();
  renderEvents();
  renderApply();
  initReveals();
});
