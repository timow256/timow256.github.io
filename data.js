/*
  ==========================================================
  EDIT THIS FILE TO UPDATE YOUR PORTFOLIO
  ==========================================================
  Most content on the website comes from this single object.

  Quick rules:
  1) Text must stay inside quotes: "like this".
  2) Items in a list are separated by commas.
  3) To remove a project, delete its whole {...} block.
  4) To add a project, copy an existing project block and edit it.
  5) Put project images in assets/images/ and set:
       image: "assets/images/your-image.jpg"
     Leave image: "" to use the automatic placeholder.
*/

const PORTFOLIO = {
  profile: {
    name: "Timotius William Wuisang",
    photo: "assets/images/fotoTimotius.jpeg",
    eyebrow: "Engineering Physics • Data-Driven Engineering",
    title: "R&D, Experimental Engineering, Data & Analytics",
    intro:
      "Engineering Physics fresh graduate from Universitas Gadjah Mada with hands-on experience in experimental testing, engineering research, process monitoring, data analysis, IoT prototyping, and technical problem solving.",
    about:
      "My work sits at the intersection of physical systems and data. I have worked on material characterization, thermal and optical testing, microcontroller-based automation, sensor integration, Python-based analysis, and engineering documentation. I am especially interested in applied data analytics, IoT automation, and R&D roles where technical decisions are supported by evidence.",
    location: "Indonesia",
    email: "timotiuswilliam2005@gmail.com",
    github: "",
    linkedin: "https://www.linkedin.com/in/timotius-william-wuisang/",
    resume: "assets/CV_Timotius_William_Wuisang.pdf",
  },

  focus: [
    {
      title: "R&D & Experimental Engineering",
      text: "Testing, instrumentation, material characterization, technical documentation, and research."
    },
    {
      title: "Data & Analytics",
      text: "Python, exploratory analysis, visualization, and data-driven engineering decisions."
    }
  ],

  education: {
    degree: "Bachelor of Engineering in Engineering Physics",
    institution: "Universitas Gadjah Mada",
    period: "2022–2026",
    details: "GPA 3.57/4.00"
  },

  projects: [
    {
      title: "Thermochromic Transparent Wood Research",
      year: "",
      category: "Research • Materials • Thermal/Optical",
      summary:
        "Investigated transparent mahogany with thermochromic coating and compared material performance across coating concentrations.",
      highlights: [
        "Supported specimen fabrication through delignification, epoxy impregnation, and spray coating while maintaining consistent laboratory procedures.",
        "Monitored process conditions and troubleshot fabrication, curing, and testing issues with the research team.",
        "Analyzed response time, thermal conductivity, optical transmittance, and CIELAB color-change data.",
        "Compared engineering trade-offs across formulations and identified the 10 wt% formulation as the best overall performance balance in the study."
      ],
      tools: ["Experimental Design", "Thermal Testing", "UV-Vis-NIR", "CIELAB", "ImageJ", "Excel", "Technical Reporting"],
      image: "assets/images/TW.png",
      links: []
    },

    {
      title: "IoT Automated Window Ventilation",
      year: "",
      category: "R&D • IoT • Building Performance",
      summary:
        "Developed a preliminary automated window-control concept for passive ventilation and thermal-comfort research during an R&D internship.",
      highlights: [
        "Developed microcontroller-based control logic for automated window operation.",
        "Integrated environmental sensing and actuator-control concepts for a physical building system.",
        "Reviewed technical references, discussed feasibility with the R&D team, and contributed to a collaborative research proposal.",
        "Connected engineering design decisions with thermal-comfort and energy-efficiency objectives."
      ],
      tools: ["Arduino/STM32", "Sensors", "Actuator Control", "IoT", "Building Physics", "Technical Review"],
      image: "assets/images/KP-YKK.png",
      links: []
    },

    {
      title: "Conveyor Monitoring & Safety Control",
      year: "",
      category: "Embedded Systems • Monitoring • Full Stack",
      summary:
        "Built a monitoring concept that connected a Raspberry Pi-based hardware layer with a web interface for real-time operating data and control.",
      highlights: [
        "Integrated sensor and operating-status data into a browser-based monitoring interface.",
        "Implemented start, stop, reset, manual-override, and automatic-shutdown logic.",
        "Worked across Raspberry Pi/Flask, backend services, and a React-based frontend.",
        "Used threshold-based rules to support safe equipment shutdown when abnormal conditions were detected."
      ],
      tools: ["Raspberry Pi", "Flask", "React", "Express", "MongoDB", "Sensors", "Control Logic"],
      image: "assets/images/conveyor.png",
      links: []
    },

    {
      title: "E-commerce Shipping Prediction & EDA",
      year: "",
      category: "Data Science • Machine Learning",
      summary:
        "Explored shipment data and built an introductory classification workflow to practice structured data analysis and predictive modeling.",
      highlights: [
        "Cleaned and explored shipment-related variables using Python and Pandas.",
        "Created visualizations to communicate patterns and relationships in the data.",
        "Built a basic Scikit-learn classification workflow.",
        "Documented the work in public Kaggle notebooks."
      ],
      tools: ["Python", "Pandas", "Matplotlib", "Seaborn", "Scikit-learn"],
      image: "assets/images/DS.png",
      links: [
        {
          label: "Prediction notebook",
          url: "https://www.kaggle.com/code/timotiuswilliamw/e-commerce-shipping-prediction-69-accuracy"
        },
        {
          label: "EDA notebook",
          url: "https://www.kaggle.com/code/timotiuswilliamw/e-commerce-shipping-very-simple-eda-beginner"
        }
      ]
    },

    {
      title: "PSoC–ESP32 Security & Communication Prototype",
      year: "",
      category: "Embedded Systems • Communication",
      summary:
        "Developed an embedded security prototype combining local credential input, display logic, communication, and server-side logging.",
      highlights: [
        "Implemented keypad-based credential handling and lockout logic after repeated invalid attempts.",
        "Worked with seven-segment displays, timers, UART communication, and ESP32 connectivity.",
        "Connected device events to a server-side logging workflow.",
        "Practiced system integration across embedded hardware, communication, and application layers."
      ],
      tools: ["PSoC", "ESP32", "UART", "WebSocket", "Embedded C", "CSV Logging"],
      image: "assets/images/comm.png",
      links: []
    }
  ],

  experience: [
    {
      period: "Feb–Jul 2026",
      role: "Research Assistant — Thermochromic Transparent Wood Project",
      organization: "Universitas Gadjah Mada",
      bullets: [
        "Performed experimental fabrication, testing, data analysis, and technical documentation.",
        "Collaborated with lecturers and team members to troubleshoot research-process and testing issues."
      ]
    },
    {
      period: "Dec 2024–Jan 2025",
      role: "Research Engineer Intern — Research Division",
      organization: "YKK AP R&D Center Indonesia",
      bullets: [
        "Conducted a preliminary study and developed an IoT-based automated window ventilation concept.",
        "Contributed to technical discussions, feasibility review, and a collaborative research proposal."
      ]
    },
    {
      period: "Aug–Dec 2024",
      role: "Basic Informatics Laboratory Assistant",
      organization: "Universitas Gadjah Mada",
      bullets: [
        "Guided students through Python practicum sessions and structured problem solving.",
        "Evaluated assignments and laboratory reports while providing feedback on logic and report clarity."
      ]
    }
  ],

  community: [
    {
      period: "Jun–Aug 2025",
      role: "KKN-PPM Community Empowerment",
      organization: "Team \u201CBakti Seyegan\u201D \u2022 Mandungan I, Seyegan, Sleman, Yogyakarta",
      image: "assets/images/KKN.png",
      icon: "community",
      softSkills: ["Leadership", "Community Engagement", "Communication", "Collaboration", "Adaptability"],
      bullets: [
        "Led and contributed to community digitalization initiatives, including the inventory, validation, and documentation of local food resources as well as the development of a structured digital population administration system for Mandungan I.",
        "Developed community-oriented educational materials, including a Strategic Planting Guidebook for the Women Farmers Group (KWT) and visual waste-management campaigns to support food security and environmental awareness.",
        "Designed and facilitated interactive science activities for elementary school students while collaborating with local residents, village officials, KWT members, and schools to ensure programs addressed local needs and supported sustainable community development."
      ]
    },
    {
      period: "Sep 2025–present",
      role: "Freelance Mathematics Private Tutor",
      organization: "Online • SD, SMP & SMA students",
      image: "assets/images/Tutor.png",
      icon: "tutor",
      softSkills: ["Patience", "Empathy", "Clear Communication", "Adaptability", "Mentoring"],
      bullets: [
        "Delivered personalized online mathematics tutoring for elementary, junior high, and high school students, focusing on strengthening fundamental algebra skills and improving academic performance through customized lesson plans."
      ]
    }
  ],

  skills: {
    "Engineering & Research": [
      "Experimental Testing", "Process Monitoring", "Material Characterization", "Heat Transfer",
      "Instrumentation", "Technical Documentation", "Troubleshooting"
    ],
    "Data & Programming": [
      "Python", "Pandas", "Matplotlib", "Seaborn", "Scikit-learn", "Microsoft Excel", "Data Cleaning", "EDA"
    ],
    "Embedded & Hardware": [
      "Arduino", "STM32", "ESP32", "Raspberry Pi", "Sensor Integration", "Actuator Control", "Circuit Troubleshooting"
    ],
    "Professional": [
      "Analytical Problem Solving", "Technical Reporting", "Presentation", "Team Collaboration", "Adaptability"
    ],
    "Languages": [
      "Indonesian — Native", "English — Intermediate / Working Proficiency"
    ]
  }
};
