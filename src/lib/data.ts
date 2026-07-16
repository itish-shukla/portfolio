export const LINKS = {
  email: 'itish2606@gmail.com',
  github: 'https://github.com/itish-shukla',
  linkedin: 'https://linkedin.com/in/itish-shukla-a5490627a',
}

export const MARQUEE_STACK = [
  'React',
  'TypeScript',
  'Next.js',
  'React Native',
  'LangChain',
  'AI / ML',
  'Python',
  'Tailwind',
]

export const MARQUEE_CTA = ['Got an idea?', "Let's build it", 'Say hello']

export const STATS = [
  { value: 37, suffix: '%', label: 'Smaller codebase after leading an Angular → React migration' },
  { value: 1.8, suffix: 's', decimals: 1, label: 'Faster average page loads across the app' },
  { value: 329, suffix: 'K', label: 'Lines of legacy code retired in 8 months' },
  { value: 99.7, suffix: '%', decimals: 1, label: 'Accuracy of my Siamese-network face matcher' },
]

export const EXPERIENCE = [
  {
    period: '2025 —',
    company: 'GigSky',
    role: 'Software Engineer I',
    points: [
      'Led the 8-month migration of a 1,224-file, ~428K-line Angular app to React + TypeScript — down to 770 files and ~99K lines, with pages loading ~1.8s faster.',
      'Own the public-facing GigSky website and ship customer-facing features end to end.',
      'Primary technical reviewer for pull requests across the React app and public site.',
    ],
  },
  {
    period: '2024',
    company: '4good.ai',
    role: 'Software Engineer Intern',
    points: [
      'Built an agentic framework translating natural language into executable SQL / NoSQL queries.',
      'Shipped a RAG pipeline with LangChain + vector search, and an LLM routing layer that dispatches requests to specialized models.',
      'Built Curapod — a React Native app talking to wearable medical hardware over Bluetooth LE.',
    ],
  },
  {
    period: '2023',
    company: 'Cuvasol',
    role: 'Software Engineer Intern',
    points: [
      'Built a real-time eye-gaze correction system for live video using facial-landmark models.',
      'Optimized the detection pipeline for smooth inference during live sessions.',
    ],
  },
]

export const PROJECTS = [
  {
    index: '01',
    title: 'Angular → React',
    description: '428K lines of legacy Angular rebuilt as a modern React + TypeScript app for GigSky.',
    tags: ['React', 'TypeScript', 'Next.js'],
    year: '2025',
    href: 'https://www.gigsky.com',
  },
  {
    index: '02',
    title: 'Text-to-SQL Agent',
    description: 'Agentic framework that turns plain English into executable SQL & NoSQL queries.',
    tags: ['LangChain', 'LLMs', 'RAG'],
    year: '2024',
    href: null,
  },
  {
    index: '03',
    title: 'Curapod',
    description: 'React Native app for wearable medical hardware — BLE comms and secure auth.',
    tags: ['React Native', 'BLE'],
    year: '2024',
    href: null,
  },
  {
    index: '04',
    title: 'Fight IQ',
    description: "Boxer action recognition at 98.6% accuracy over 20K annotated frames, explained with SHAP.",
    tags: ['Faster R-CNN', 'SHAP', 'PyTorch'],
    year: '2024',
    href: null,
  },
  {
    index: '05',
    title: 'Face Match',
    description: 'Siamese neural network scoring facial similarity at 99.7% test accuracy.',
    tags: ['TensorFlow', 'Vision'],
    year: '2023',
    href: null,
  },
]

export const STACK = [
  { group: 'Languages', items: ['JavaScript', 'TypeScript', 'Python', 'C++'] },
  { group: 'Frameworks', items: ['React', 'Next.js', 'Angular', 'React Native', 'Jest'] },
  { group: 'Data', items: ['SQL', 'Firebase', 'Redis', 'ChromaDB'] },
  { group: 'AI / ML', items: ['LangChain', 'LangSmith', 'TensorFlow', 'PyTorch', 'OpenCV'] },
]
