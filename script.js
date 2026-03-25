  (function(){
    // Theme toggling
    const themeToggle = document.getElementById('themeToggle');
    const lightIcon = document.getElementById('lightIcon'), darkIcon = document.getElementById('darkIcon');
    const body = document.body;
    const stored = localStorage.getItem('theme');
    if(stored === 'dark') { body.classList.add('dark'); lightIcon.classList.remove('active'); darkIcon.classList.add('active'); }
    else { body.classList.remove('dark'); lightIcon.classList.add('active'); darkIcon.classList.remove('active'); }
    themeToggle.addEventListener('click',()=>{
      if(body.classList.contains('dark')){ body.classList.remove('dark'); localStorage.setItem('theme','light'); lightIcon.classList.add('active'); darkIcon.classList.remove('active');}
      else { body.classList.add('dark'); localStorage.setItem('theme','dark'); lightIcon.classList.remove('active'); darkIcon.classList.add('active'); }
    });

    // Mobile nav toggle
    const navToggle = document.getElementById('navToggle'), navMenu = document.getElementById('navMenu');
    if(navToggle && navMenu){
      navToggle.addEventListener('click',()=>{ 
        navMenu.classList.toggle('active'); 
        const icon = navToggle.querySelector('i'); 
        if(navMenu.classList.contains('active')){ icon.classList.remove('fa-bars'); icon.classList.add('fa-times'); } 
        else { icon.classList.remove('fa-times'); icon.classList.add('fa-bars'); } 
      });
      document.querySelectorAll('.nav-link').forEach(l=>l.addEventListener('click',()=>{ navMenu.classList.remove('active'); navToggle.querySelector('i').classList.remove('fa-times'); navToggle.querySelector('i').classList.add('fa-bars'); }));
    }

    // Projects Data
    const projectsData = [
      { name: "CoinMystique", desc: "crypto dashboard · Chart.js, CoinGecko", tech: ["JS","API"], img: "images/coinmysique.png", github: "https://github.com/UyoOghene/coinmystique", live: "https://coinmystique.netlify.app/" },
      { name: "RumeDrivers", desc: "designated driver service · HTML/CSS", tech: ["responsive","UX"], img: "images/rumehero.png", github: "https://github.com/UyoOghene/rumedrivers", live: "https://rumedrivers.netlify.app/" },
      { name: "Xetech", desc: "feminine aesthetic gadget store", tech: ["React","Vite"], img: "images/xetechhero.png", github: "https://github.com/UyoOghene/xetech", live: "xetechcl.vercel.app/" },
      { name: "Glambox", desc: "social app for beauty", tech: ["Node/Express","MongoDB"], img: "images/glambox.png", github: "https://github.com/UyoOghene/glambox", live: "https://vercellesson.vercel.app/" },
      { name: "BuildBank", desc: "construction finance tracker", tech: ["MERN"], img: "images/buildbank.png", github: "https://github.com/UyoOghene/buildbank", live: "https://build-bank-xi.vercel.app/" },
      { name: "Chers Scents", desc: "luxury perfume e‑commerce", tech: ["React","JWT"], img: "images/chershero.png", github: "https://github.com/UyoOghene/chers-scents", live: "https://chersscents.vercel.app/" }
    ];
    const container = document.getElementById('projectsGrid');
    if(container){
      container.innerHTML = '';
      projectsData.forEach(p=>{ 
        const card = document.createElement('div'); 
        card.className='project-card'; 
        card.innerHTML=`<img class="project-img" src="${p.img}" alt="${p.name}" onerror="this.src='https://placehold.co/600x400/a855f7/ffffff?text=${p.name}'"><div class="project-content"><div class="project-icon"><i class="fas fa-code"></i></div><div class="project-title">${p.name}</div><div class="project-desc">${p.desc}</div><div class="tech-badge">${p.tech.map(t=>`<span>${t}</span>`).join('')}</div><div class="project-links"><a href="${p.github}" target="_blank"><i class="fab fa-github"></i> GitHub Repo</a><a href="${p.live}" target="_blank"><i class="fas fa-external-link-alt"></i> Live Demo</a></div></div>`; 
        container.appendChild(card); 
      });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('.nav-link, .hero-cta a[href^="#"]').forEach(anchor=>{ 
      anchor.addEventListener('click',function(e){ 
        const href=this.getAttribute('href'); 
        if(href&&href.startsWith('#')){ 
          e.preventDefault(); 
          const target=document.querySelector(href); 
          if(target){ window.scrollTo({top:target.getBoundingClientRect().top+window.pageYOffset-80,behavior:'smooth'}); } 
        } 
      }); 
    });
  })();