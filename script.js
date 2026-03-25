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

    const articlesData = [
    {
      title: "Syntax Whiplash: When Your Brain Mixes Up programming languages! 😵",
      excerpt: "“VS Code knows I’m cheating on JavaScript with python… and it’s judging me.” Right now I'm teaching someone Python while building in JavaScript and MY brain is doing linguistic gymnastics. Ever felt this?",
      readTime: "1 min read",
      date: "Mar 2025",
      url: "https://www.linkedin.com/pulse/syntax-whiplash-when-your-brain-mixes-up-programming-akpujiha-6bvbe"
    },
    {
      title: "Python vs JavaScript: A Love Letter to readable code",
      excerpt: "JavaScript has main character energy, but Python? Python is that friend who hands you a perfectly formatted bulleted list when you're overwhelmed. Here's why both languages hold a special place in my dev heart.",
      readTime: "2 min read",
      date: "Feb 2025",
      url: "https://www.linkedin.com/pulse/python-vs-javascript-love-letter-readable-code-uyo-oghene-akpujiha-fnj6e"
    },
    {
      title: "From 'It Works on My Machine' to Production Hell: Your Full-Stack Deployment Survival Guide",
      excerpt: "Your app works perfectly on your machine. You feel like a 10x senior architect. You deploy to production. Suddenly, your code develops amnesia. Endpoints 404, environment variables ghost you. Here's your survival guide.",
      readTime: "2 min read",
      date: "Jan 2025",
      url: "https://www.linkedin.com/pulse/from-works-my-machine-production-hell-your-full-stack-akpujiha-aftxf"
    },
    // {
    //   title: "The Virtual DOM: The Secret Sauce Behind Fast Web Apps",
    //   excerpt: "Have you ever wondered how modern web apps like Facebook, Instagram, or Netflix update so quickly without freezing or reloading the entire page? The answer lies in a clever concept called the Virtual DOM.",
    //   readTime: "2 min read",
    //   date: "Dec 2024",
    //   url: "https://www.linkedin.com/pulse/virtual-dom-secret-sauce-behind-fast-web-apps-uyo-oghene-akpujiha-mofmf"
    // },
    // {
    //   title: "Setting Up a React App in 2025: Your Best Options",
    //   excerpt: "So you want to start a React project? Great choice! 🎉 But first – you need to pick your weapon. Let me break down your options and show you why Vite is currently stealing the show.",
    //   readTime: "1 min read",
    //   date: "Nov 2024",
    //   url: "https://www.linkedin.com/pulse/setting-up-react-app-2025-your-best-options-uyo-oghene-akpujiha"
    // },
    // {
    //   title: "Why React's Virtual DOM is a Game-Changer",
    //   excerpt: "Want to know why React is so fast? It's all thanks to the Virtual DOM—a secret weapon that makes updates lightning-fast! Let's break it down in a fun, easy-to-grasp way with real-world analogies.",
    //   readTime: "1 min read",
    //   date: "Oct 2024",
    //   url: "https://www.linkedin.com/pulse/why-reacts-virtual-dom-game-changer-uyo-oghene-akpujiha"
    // }
  ];

  // Function to render article cards
  function renderArticles() {
    const gridContainer = document.getElementById('articlesGrid');
    if (!gridContainer) return;

    gridContainer.innerHTML = '';

    articlesData.forEach((article, index) => {
      const card = document.createElement('div');
      card.className = 'article-card';
      
      // Create a unique gradient based on index for subtle variation (optional)
      const iconGradient = index % 2 === 0 
        ? 'linear-gradient(135deg, #0a66c2, #0a5baf)' 
        : 'linear-gradient(135deg, var(--accent), #a855f7)';
      
      card.innerHTML = `
        <div class="article-icon-wrapper">
          <div class="article-icon" style="background: ${iconGradient};">
            <i class="fab fa-linkedin-in"></i>
          </div>
          <div class="article-read-time">
            <i class="far fa-clock"></i> ${article.readTime}
          </div>
        </div>
        <h3 class="article-title">${escapeHtml(article.title)}</h3>
        <p class="article-excerpt">${escapeHtml(article.excerpt)}</p>
        <div class="article-meta">
          <span><i class="far fa-calendar-alt"></i> ${article.date}</span>
          <span><i class="far fa-message"></i> discussion</span>
        </div>
        <a href="${article.url}" target="_blank" class="article-link" rel="noopener noreferrer">
          read full article <i class="fas fa-arrow-right"></i>
        </a>
      `;
      
      // Add click handler for smooth interaction (optional)
      const link = card.querySelector('.article-link');
      card.addEventListener('click', (e) => {
        if (e.target.tagName !== 'A' && !link.contains(e.target)) {
          window.open(article.url, '_blank');
        }
      });
      
      gridContainer.appendChild(card);
    });
  }

  // Simple escape function to prevent XSS
  function escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

 
  function initDarkModeToggle() {
    const toggleBtn = document.getElementById('demoThemeToggle');
    if (!toggleBtn) return;
    
    // Check for stored preference
    const isDark = localStorage.getItem('articles_dark_mode') === 'true';
    if (isDark) {
      document.documentElement.style.setProperty('--bg-primary', '#0b0f17');
      document.documentElement.style.setProperty('--bg-card', '#1a243b');
      document.documentElement.style.setProperty('--text-primary', '#f1f5f9');
      document.documentElement.style.setProperty('--text-secondary', '#cbd5e1');
      document.documentElement.style.setProperty('--accent', '#c084fc');
      document.documentElement.style.setProperty('--accent-soft', '#2e1a4a');
      document.documentElement.style.setProperty('--border', '#2d3a5e');
      toggleBtn.innerHTML = '<i class="fas fa-sun"></i> <span>Light mode</span>';
    }
    
    toggleBtn.addEventListener('click', () => {
      const root = document.documentElement;
      const currentlyDark = root.style.getPropertyValue('--bg-primary').trim() === '#0b0f17' || 
                            (root.style.getPropertyValue('--bg-primary') === '' && 
                             window.matchMedia('(prefers-color-scheme: dark)').matches && !localStorage.getItem('articles_dark_mode'));
      
      if (currentlyDark || root.style.getPropertyValue('--bg-primary') === '#0b0f17') {
        // Switch to light mode
        root.style.setProperty('--bg-primary', '#f8fafc');
        root.style.setProperty('--bg-card', '#ffffff');
        root.style.setProperty('--text-primary', '#0f172a');
        root.style.setProperty('--text-secondary', '#334155');
        root.style.setProperty('--accent', '#a855f7');
        root.style.setProperty('--accent-soft', '#e9d5ff');
        root.style.setProperty('--border', '#e2e8f0');
        localStorage.setItem('articles_dark_mode', 'false');
        toggleBtn.innerHTML = '<i class="fas fa-moon"></i> <span>Dark mode</span>';
      } else {
        // Switch to dark mode
        root.style.setProperty('--bg-primary', '#0b0f17');
        root.style.setProperty('--bg-card', '#1a243b');
        root.style.setProperty('--text-primary', '#f1f5f9');
        root.style.setProperty('--text-secondary', '#cbd5e1');
        root.style.setProperty('--accent', '#c084fc');
        root.style.setProperty('--accent-soft', '#2e1a4a');
        root.style.setProperty('--border', '#2d3a5e');
        localStorage.setItem('articles_dark_mode', 'true');
        toggleBtn.innerHTML = '<i class="fas fa-sun"></i> <span>Light mode</span>';
      }
    });
  }

  // Initialize everything when DOM is ready
  document.addEventListener('DOMContentLoaded', () => {
    renderArticles();
    initDarkModeToggle();
  });
