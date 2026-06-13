import type { I18n } from './en';

export const zh: I18n = {
  nav: {
    home: '首頁',
    publications: '發表',
    research: '研究領域',
    team: '團隊',
    activities: '活動',
    langToggle: 'EN',
  },
  hero: {
    eyebrow: '歡迎來到',
    h1_line1: '智慧演算生醫影像實驗室',
    h1_line2: '',
    subtitle: '國立臺灣大學　生物機電工程學系',
    body: '智慧演算生醫影像實驗室以多模態人工智慧為核心，融合醫學影像與病歷資訊、農業視覺與機器人控制等異質資料，挖掘單一模態方法所無法觸及的洞見。我們相信嚴謹的數理基礎與真實問題的驅動，是每一次突破的起點。',
    cta_research: '探索研究',
    cta_team: '認識團隊',
  },
  pi: {
    name: '周呈霙 教授',
    dept: '國立臺灣大學　生物機電工程學系',
    joint_title: '合聘單位',
    joint: [
      '統計碩士學位學程',
      '醫療器材與醫學影像研究所',
      '國際半導體學士學位學程',
    ],
    education_title: '學經歷',
    education: [
      { years: '2000–2005', role: '化學工程博士', institution: '萊斯大學' },
      { years: '2005–2007', role: '資深研究員', institution: '伊黎諾理工學院，生物醫學工程系' },
      { years: '2007–present', role: '教授，國立臺灣大學生物機電工程學系', institution: '' },
    ],
    interests_title: '研究興趣',
    courses_title: '開授課程',
    courses: [
      '試驗設計之工程應用',
      '機率與統計',
      '探索式多變量資料分析',
    ],
  },
  publications: {
    title: '發表論文',
    journal: 'J',
    conference: 'C',
    back_to_top: '回到頂部',
  },
  research: {
    title: '研究領域',
    domains: {
      'Medical Image': {
        label: '醫療影像',
        description: '開發電腦斷層掃描重建、X光相位對比成像、PET 及 AI 輔助診斷的計算方法，融合影像資料與病歷資訊，實現多模態洞見。',
      },
      'Smart Agriculture': {
        label: '智慧農業',
        description: '整合電腦視覺與機器人控制的 AIoT 系統，應用於精準農業——病蟲害監測、作物產量預測與蜜蜂行為分析。',
      },
      'Medical Data': {
        label: '醫療數據',
        description: '將統計與機器學習方法應用於電子病歷、臨床時間序列與多模態病患資料，實現疾病早期預測與風險分層。',
      },
      'Biosensing': {
        label: '生物感測',
        description: '快篩檢測試劑研發、適體與蛋白質結合預測，以及 IoT 整合生物感測器設計，應用於臨床與環境監測。',
      },
    },
    recent_pubs: '近期發表',
    recent_theses: '近期論文',
    no_records: '尚無資料。',
  },
  team: {
    title: '團隊',
    sections: {
      ms: '碩士生',
      phd: '博士生',
      alumni: '校友',
      ra: '研究助理',
    },
  },
  activities: {
    title: '活動紀錄',
  },
  footer: {
    address: '臺灣台北市大安區羅斯福路四段1號',
    tel: '+886-2-3366-4888',
    email: 'cibi@ntu.edu.tw',
  },
  pi_interests: [
    { label: '醫療影像AI技術開發', domain: 'Medical Image' as const },
    { label: 'X光相位對比成像', domain: 'Medical Image' as const },
    { label: '電腦斷層掃描影像重建', domain: 'Medical Image' as const },
    { label: '人工智慧之農業應用', domain: 'Smart Agriculture' as const },
    { label: '快篩檢測試劑研發', domain: 'Biosensing' as const },
  ],
};
