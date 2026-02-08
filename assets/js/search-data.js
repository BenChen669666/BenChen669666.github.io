// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "post-summary-of-allen-zhu-39-s-icml-2024-tutorial-on-physics-of-large-language-models",
        
          title: "Summary of Allen-Zhu&#39;s ICML 2024 Tutorial on Physics of Large Language Models",
        
        description: "Key insights from Allen-Zhu&#39;s tutorial on the underlying mechanisms of LLMs",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/physics-of-llms-icml-tutorial/";
          
        },
      },{id: "post-digest-on-embedded-power-chinese-government-and-economic-development",
        
          title: "Digest on Embedded Power: Chinese Government and Economic Development",
        
        description: "A digest on Embedded Power by Lan Xiaohuan, examining the unique characteristics of the Chinese economy",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/chinese-government-economic-development/";
          
        },
      },{id: "post-a-random-walk-in-the-jungle-of-the-gene",
        
          title: "A Random Walk in the Jungle of the Gene",
        
        description: "A review on The Gene&amp;#58; An Intimate History by Siddhartha Mukherjee",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/random-walk-jungle-gene/";
          
        },
      },{id: "news-welcome-to-my-personal-academic-website-i-am-a-ph-d-candidate-in-information-systems-at-the-carlson-school-of-management-university-of-minnesota",
          title: 'Welcome to my personal academic website! I am a Ph.D. candidate in Information...',
          description: "",
          section: "News",},{id: "projects-algorithmic-decision-making",
          title: 'Algorithmic Decision-Making',
          description: "Designing machine/deep learning algorithms to support human judgment in data-intensive environments.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-ai-in-healthcare-amp-society",
          title: 'AI in Healthcare &amp;amp; Society',
          description: "Examining the impact of public policies and human behaviors on the use of AI systems in society.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%63%68%65%6E%37%39%35%34@%75%6D%6E.%65%64%75", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/liben-ben-c-255404122", "_blank");
        },
      },{
        id: 'social-instagram',
        title: 'Instagram',
        section: 'Socials',
        handler: () => {
          window.open("https://instagram.com/ribben_", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
