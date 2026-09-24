export const portfolioData = {
  personal: {
    name: "Vijay Jadhav",
    role: "Software Developer & Automation Engineer",
    email: "vijayjjadhav93@gmail.com",
    phone: "+91 7768999852",
    location: "Maharashtra, India",
    summary: "Detail-oriented hands-on automated developer with experience building workflows and web applications. Skilled in Python, SQL, and API integrations, bridging the gap between raw data, ERP systems, and streamlined business operations.",
  },
  skills: {
    languages: ["Python", "C#.Net", "HTML", "CSS", "JavaScript", "SQL", "Java"],
    frameworks: ["Numpy", "Pandas", "ASP.Net Core", "Bootstrap", "PHP", "Rest API"],
    databases: ["MS SQL Server 2022", "MYSQL", "Oracle 10g"],
    tools: ["Google Apps Script", "Google Workspace APIs", "Google Sheets", "Git/Github", "Task Scheduler", "Tally TDL"],
  },
  experience: [
    {
      role: "Software Developer & MIS Executive",
      company: "Luna Technologies Pvt Ltd.",
      duration: "Dec 2025 - Present",
      points: [
        "Architected an Inventory & BOM system with automated Sales Order tracking, reducing manual data entry by 90% and ensuring 100% stock accuracy.",
        "Developed a custom Python automation service using Google Drive API and Windows Task Scheduler to silently sync local ERP Excel exports (Order.xlsx) to Google Drive without desktop mirroring.",
        "Engineered a Master Checklist automated task completion runner to centralize and validate daily operational warehouse workflows.",
        "Digitized backend data collection by integrating custom HTML and Google Forms with Google Apps Script.",
        "Deployed zero-touch Google Apps Script automations for instant daily distribution of SO summaries and departmental reports.",
        "Built web apps integrated with complex Tally Definition Language (TDL) RFD logic for precise inventory reconciliation."
      ]
    }
  ],
  projects: [
    {
      title: "ERP Drive Sync Automation",
      description: "Python-based background service for seamless file synchronization.",
      specialDescription: "Directly uploads local ERP Excel exports to Google Drive utilizing API service accounts.",
      uniqueness: "Completely eliminates the need for resource-heavy desktop mirroring clients.",
      techStack: ["Python", "Drive API", "Task Scheduler"],
      liveLink: "https://demo-erpsync-vijay.vercel.app"
    },
    {
      title: "Master Checklist Runner",
      description: "Centralized operational task management web application.",
      specialDescription: "Assigns, tracks, and validates daily employee workflows in real-time.",
      uniqueness: "Automated daily triggers ensure no task is missed before day-end closing.",
      techStack: ["Apps Script", "Web App", "Automation"],
      liveLink: "https://demo-taskmaster-vijay.vercel.app"
    },
    {
      title: "DN/DC Approval Portal",
      description: "Delivery Note & Challan management system.",
      specialDescription: "Strict multi-level approval/rejection workflows with custom data validations.",
      uniqueness: "Creates an immutable digital audit trail for all outbound dispatch items.",
      techStack: ["Portal", "Validation Logic"],
      liveLink: "https://demo-dndc-vijay.vercel.app"
    },
    {
      title: "Inventory Stock Webapp",
      description: "Real-time physical stock tracking application.",
      specialDescription: "Interfaces directly with Tally RFD logic to cross-verify physical vs system stock.",
      uniqueness: "Reduces inventory reconciliation time from days to minutes.",
      techStack: ["Tally RFD", "Web App"],
      liveLink: "https://demo-inventory-vijay.vercel.app"
    },
    {
      title: "Packing Photo Viewer",
      description: "Dynamic portal for QA and dispatch verification.",
      specialDescription: "Instantly fetches specific packing photos dynamically using Sales Order numbers.",
      uniqueness: "Zero-latency image retrieval directly from secure cloud buckets.",
      techStack: ["Portal", "Cloud API"],
      liveLink: "https://demo-photoviewer-vijay.vercel.app"
    },
    {
      title: "E-Commerce Platform",
      description: "Responsive storefront with robust backend architecture.",
      specialDescription: "Complete user authentication, cart management, and product cataloging.",
      uniqueness: "Custom SQL schemas optimized for fast product search queries.",
      techStack: ["PHP", "MySQL"],
      liveLink: "https://demo-ecommerce-vijay.vercel.app"
    },
    {
      title: "Clinic Management System",
      description: "Patient and appointment management portal.",
      specialDescription: "Built with a secure ASP.NET Core backend and SQL Server 2022.",
      uniqueness: "Includes automated doctor scheduling and patient history tracking.",
      techStack: ["ASP.NET", "SQL Server"],
      liveLink: "https://demo-clinic-vijay.vercel.app"
    }
  ],
  education: [
    { degree: "BSc Computer Science", year: "2022-2025", score: "83.70%" },
    { degree: "HSC - PCMB", year: "2021-2022", score: "71.33%" },
    { degree: "SSC", year: "2019-2020", score: "93.40%" } // Added SSC
  ],
  certifications: [
    "SQL for Data Science (Great Learning)",
    "Java Basic Programs (Great Learning)",
    "Introduction to Computers (Spoken tutorials - IIT Bombay)",
    "HTML (Spoken tutorials - IIT Bombay)"
  ]
};
