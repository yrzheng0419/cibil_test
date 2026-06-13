export const en = {
  nav: {
    home: 'Home',
    publications: 'Publications',
    research: 'Research',
    team: 'Team',
    activities: 'Activities',
    langToggle: '中',
  },
  hero: {
    eyebrow: 'WELCOME TO THE',
    h1_line1: 'Computational Intelligence in',
    h1_line2: 'Biomedical Imaging Laboratory',
    subtitle: 'Department of Biomechatronics Engineering, National Taiwan University',
    body: 'CIBI Lab develops AI methods that fuse heterogeneous data — medical images with clinical records, agricultural vision with robotic control — to generate insights that single-modality approaches cannot reach. We build tools that matter, grounded in rigorous mathematics and driven by real-world problems.',
    cta_research: 'Explore research',
    cta_team: 'Meet the team',
  },
  pi: {
    name: 'Prof. Cheng-Ying Chou',
    dept: 'Department of Biomechatronics Engineering, NTU',
    joint_title: 'Joint Appointments',
    joint: [
      'Master Program in Statistics',
      'Medical Devices and Imaging System',
      'Global Undergraduate Program in Semiconductors',
    ],
    education_title: 'Education & Experience',
    education: [
      { years: '2000–2005', role: 'Ph.D., Chemical Engineering', institution: 'Rice University' },
      { years: '2005–2007', role: 'Senior Research Scientist', institution: 'Illinois Institute of Technology, Biomedical Engineering' },
      { years: '2007–present', role: 'Professor, NTU Biomechatronics Engineering', institution: '' },
    ],
    interests_title: 'Research Interests',
    courses_title: 'Courses Taught',
    courses: [
      'Experimental Design and Analysis in Engineering',
      'Probability and Statistics',
      'Exploratory Multivariate Data Analysis',
    ],
  },
  publications: {
    title: 'Publications',
    journal: 'J',
    conference: 'C',
    back_to_top: 'Back to top',
  },
  research: {
    title: 'Research',
    domains: {
      'Medical Image': {
        label: 'Medical Image',
        description: 'We develop computational methods for CT reconstruction, X-ray phase-contrast imaging, PET, and AI-assisted diagnosis — fusing imaging data with clinical records for multimodal insight.',
      },
      'Smart Agriculture': {
        label: 'Smart Agriculture',
        description: 'AIoT systems integrating computer vision with robotic control for precision farming — pest monitoring, crop yield prediction, and honeybee behaviour analysis.',
      },
      'Medical Data': {
        label: 'Medical Data',
        description: 'Statistical and machine learning methods applied to electronic health records, clinical time-series, and multimodal patient data for early disease prediction and risk stratification.',
      },
      'Biosensing': {
        label: 'Biosensing',
        description: 'Rapid diagnostic kit development, aptamer-protein binding prediction, and IoT-integrated biosensor design for clinical and environmental monitoring.',
      },
    },
    recent_pubs: 'Recent Publications',
    recent_theses: 'Recent Theses',
    no_records: 'No records yet.',
  },
  team: {
    title: 'Team',
    sections: {
      ms: 'MSc Students',
      phd: 'PhD Students',
      alumni: 'Alumni',
      ra: 'Research Assistants',
    },
  },
  activities: {
    title: 'Activities',
  },
  footer: {
    address: '1 Sec. 4, Roosevelt Rd., Taipei 10617, Taiwan',
    tel: '+886-2-3366-4888',
    email: 'cibi@ntu.edu.tw',
  },
  pi_interests: [
    { label: 'Medical Imaging AI', domain: 'Medical Image' as const },
    { label: 'X-ray Phase Contrast Imaging', domain: 'Medical Image' as const },
    { label: 'CT Image Reconstruction', domain: 'Medical Image' as const },
    { label: 'Agricultural AI Applications', domain: 'Smart Agriculture' as const },
    { label: 'Rapid Diagnostic Kit Development', domain: 'Biosensing' as const },
  ],
};

export type I18n = typeof en;
