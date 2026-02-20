export const content = {
  nav: {
    links: [
      { label: { en: "About", ko: "회사 소개" }, href: "#about" },
      {
        label: { en: "Services", ko: "서비스" },
        href: "#services",
        children: {
          core: { label: { en: "Core Products", ko: "핵심 제품" }, items: [
            { label: { en: "Influlyze", ko: "Influlyze" }, href: "/services/influlyze", desc: { en: "Influencer Analytics SaaS", ko: "인플루언서 분석 SaaS" } },
            { label: { en: "Robot Labeling", ko: "로봇 라벨링" }, href: "/services/robot-labeling", desc: { en: "Robot Control Platform", ko: "로봇 관제 플랫폼" } },
            { label: { en: "OnForAll", ko: "OnForAll" }, href: "/services/onforall", desc: { en: "Synthetic Data Platform", ko: "합성 데이터 플랫폼" } },
          ]},
          side: { label: { en: "Side Projects", ko: "사이드 프로젝트" }, items: [
            { label: { en: "Keyranki", ko: "Keyranki" }, href: "/services/keyranki", desc: { en: "Trending Keyword Aggregator", ko: "인기 키워드 통합" } },
            { label: { en: "GachaWorld", ko: "가챠월드" }, href: "/services/gacha-world", desc: { en: "Gacha Shop Finder", ko: "가챠샵 찾기" } },
          ]},
        },
      },
      { label: { en: "Technology", ko: "기술" }, href: "/technology" },
      { label: { en: "Vision", ko: "비전" }, href: "#vision" },
      { label: { en: "Contact", ko: "연락처" }, href: "#contact" },
    ],
    cta: { en: "Get in Touch", ko: "문의하기" },
  },

  hero: {
    tag: {
      en: "AI SOFTWARE INFRASTRUCTURE COMPANY",
      ko: "AI 소프트웨어 인프라 기업",
    },
    headline: {
      en: {
        line1: "uvreon",
        highlight1: "",
        line2: "AI Software Infrastructure for",
        highlight2: "Intelligent Operations",
      },
      ko: {
        line1: "uvreon",
        highlight1: "",
        line2: "지능형 운영을 위한",
        highlight2: "AI 소프트웨어 인프라",
      },
    },
    subtext: {
      en: "We builds scalable software platforms that transform data into intelligent operational systems across digital and physical environments.",
      ko: "디지털과 물리 환경 전반에서 데이터를 지능형 운영 시스템으로 전환하는 확장 가능한 소프트웨어 플랫폼을 구축합니다.",
    },
    cta1: { en: "Explore Our Services", ko: "서비스 살펴보기" },
    cta2: { en: "Contact Us", ko: "문의하기" },
  },

  about: {
    label: { en: "WHO WE ARE", ko: "회사 소개" },
    title: {
      en: {
        line1: "A Software Company Focused on",
        highlight: "Applied Intelligence",
      },
      ko: {
        line1: "응용 지능에 집중하는",
        highlight: "소프트웨어 기업",
      },
    },
    desc1: {
      en: "Nuvreon is a Delaware-based AI-centered software company designing platforms that structure data, embed intelligence, and enable scalable digital operations.",
      ko: "Nuvreon은 데이터를 구조화하고, 지능을 내장하며, 확장 가능한 디지털 운영을 실현하는 플랫폼을 설계하는 AI 소프트웨어 기업입니다.",
    },
    desc2: {
      en: "",
      ko: "",
    },
    points: [
      {
        en: "We build software first.",
        ko: "소프트웨어를 먼저 만듭니다.",
      },
      {
        en: "Intelligence is embedded into systems.",
        ko: "지능은 시스템에 내장됩니다.",
      },
    ],
    cards: [
      {
        title: { en: "Software First", ko: "소프트웨어 우선" },
        desc: {
          en: "Platforms designed to structure and operationalize data",
          ko: "데이터를 구조화하고 운영화하는 플랫폼 설계",
        },
      },
      {
        title: { en: "Embedded Intelligence", ko: "내장형 지능" },
        desc: {
          en: "AI woven into system architecture, not bolted on",
          ko: "AI를 별도 기능이 아닌 시스템 구조에 직접 통합",
        },
      },
      {
        title: { en: "Delaware C-Corp", ko: "미국 Delaware 법인" },
        desc: {
          en: "U.S. corporate structure for global scalability",
          ko: "글로벌 확장에 최적화된 미국 법인 구조",
        },
      },
    ],
    teamLabel: { en: "LEADERSHIP", ko: "경영진" },
    team: [
      {
        name: "Steve Hwang",
        role: { en: "Chief Executive Officer", ko: "대표이사 (CEO)" },
        image: "/images/team-ceo.jpg",
      },
      {
        name: "Hans",
        role: { en: "Chief Technology Officer", ko: "최고기술책임자 (CTO)" },
        image: "/images/team-cto.jpg",
      },
      {
        name: "Jin",
        role: { en: "Chief Operating Officer", ko: "최고운영책임자 (COO)" },
        image: "/images/team-coo.jpg",
      },
    ],
  },

  services: {
    label: { en: "WHAT WE BUILD", ko: "우리가 만드는 것" },
    title: {
      en: { text: "Scalable Intelligence", highlight: "Services" },
      ko: { text: "확장 가능한 지능형", highlight: "서비스" },
    },
    desc: {
      en: "Core products and exploratory projects across the intelligence and consumer stack.",
      ko: "지능형 시스템과 소비자 영역을 아우르는 핵심 제품과 탐색 프로젝트.",
    },
    coreLabel: { en: "CORE PRODUCTS", ko: "핵심 제품" },
    sideLabel: { en: "SIDE PROJECTS", ko: "사이드 프로젝트" },
    items: [
      {
        number: "01",
        slug: "influlyze",
        image: "/images/service-02.png",
        category: "core" as const,
        title: {
          en: "Influencer Analytics SaaS",
          ko: "인플루언서 분석 SaaS",
        },
        product: "Influlyze",
        purpose: {
          en: "Analyze and optimize influencer marketing across YouTube, Instagram, and more.",
          ko: "유튜브, 인스타그램 등 인플루언서 마케팅을 분석하고 최적화합니다.",
        },
        features: [
          { en: "YouTuber & Instagrammer analytics", ko: "유튜버/인스타그래머 분석" },
          { en: "Engagement & audience insights", ko: "참여도 및 오디언스 분석" },
          { en: "Creator growth scoring", ko: "크리에이터 성장 지표 평가" },
          { en: "Campaign performance optimization", ko: "캠페인 성과 최적화" },
        ],
      },
      {
        number: "02",
        slug: "robot-labeling",
        image: "/images/service-03.png",
        category: "core" as const,
        title: {
          en: "Robot Labeling & Control Platform",
          ko: "로봇 라벨링 및 관제 플랫폼",
        },
        product: "",
        purpose: {
          en: "Label, monitor, and control robotic systems through a unified management platform.",
          ko: "통합 관리 플랫폼으로 로봇 시스템을 라벨링하고, 모니터링하고, 관제합니다.",
        },
        features: [
          { en: "Robotic system data labeling", ko: "로봇 시스템 데이터 라벨링" },
          { en: "Real-time monitoring & control dashboard", ko: "실시간 모니터링 및 관제 대시보드" },
          { en: "Fleet management & device orchestration", ko: "다수 장비 관리 및 오케스트레이션" },
          { en: "Operational alert & anomaly detection", ko: "운영 알림 및 이상 탐지" },
        ],
      },
      {
        number: "03",
        slug: "onforall",
        image: "/images/service-04.png",
        category: "core" as const,
        title: {
          en: "Synthetic Data Platform for AI Training",
          ko: "AI 학습용 합성 데이터 플랫폼",
        },
        product: "OnForAll",
        purpose: {
          en: "Generate privacy-safe 100% synthetic data via virtual environments for ML training.",
          ko: "가상 환경 기반 100% 합성 데이터를 생성하여 안전한 AI 학습을 지원합니다.",
        },
        features: [
          { en: "Synthetic dataset browsing & marketplace", ko: "합성 데이터셋 탐색 및 마켓플레이스" },
          { en: "Unity/Unreal Engine data generation", ko: "Unity/Unreal Engine 기반 데이터 생성" },
          { en: "Privacy-safe with zero personal data", ko: "개인정보 없는 프라이버시 안전 데이터" },
          { en: "Funding opportunities & collaboration tools", ko: "펀딩 기회 및 협업 도구" },
        ],
      },
      {
        number: "04",
        slug: "keyranki",
        image: "/images/service-01.png",
        category: "side" as const,
        title: {
          en: "Real-Time Trending Keyword Aggregator",
          ko: "실시간 인기 키워드 통합 플랫폼",
        },
        product: "Keyranki",
        purpose: {
          en: "Track real-time popular keywords across 5 search engines in one place.",
          ko: "5개 검색 엔진의 실시간 인기 키워드를 한눈에 추적합니다.",
        },
        features: [
          { en: "Real-time trending keyword aggregation", ko: "실시간 인기 키워드 통합" },
          { en: "Multi-engine coverage (Google, Naver, Daum, Nate, Zum)", ko: "다중 검색 엔진 지원 (구글, 네이버, 다음, 네이트, 줌)" },
          { en: "Keyword ranking & movement tracking", ko: "키워드 순위 및 변동 추적" },
          { en: "Treemap visualization & comparative analytics", ko: "트리맵 시각화 및 비교 분석" },
        ],
      },
      {
        number: "05",
        slug: "gacha-world",
        image: "/images/service-05.png",
        category: "side" as const,
        title: {
          en: "Location-Based Gacha Shop Finder",
          ko: "위치 기반 가챠샵 찾기 서비스",
        },
        product: { en: "GachaWorld", ko: "가챠월드" },
        purpose: {
          en: "Discover nearby gacha shops including claw machines, capsule toys, and random boxes across Korea.",
          ko: "한국 전역의 인형뽑기, 캡슐토이, 랜덤박스 매장을 가까운 곳부터 찾아보세요.",
        },
        features: [
          { en: "Nearby gacha shop discovery", ko: "주변 가챠샵 찾기" },
          { en: "Trend analytics & popular machines", ko: "트렌드 분석 및 인기 기기" },
          { en: "Value analysis & success rate data", ko: "가치 분석 및 성공률 데이터" },
          { en: "Community reviews & ratings", ko: "커뮤니티 리뷰 및 평점" },
        ],
      },
    ],
  },

  philosophy: {
    label: { en: "OUR AI PHILOSOPHY", ko: "AI 철학" },
    title: {
      en: { text: "Applied AI,", highlight: "Not AI for Its Own Sake" },
      ko: { text: "AI 자체가 아닌,", highlight: "실전 적용 AI" },
    },
    principles: [
      {
        title: {
          en: "Leverage existing LLM infrastructure",
          ko: "기존 LLM 인프라 활용",
        },
        desc: {
          en: "Build on proven foundation models instead of reinventing the wheel.",
          ko: "검증된 파운데이션 모델 위에 우리만의 가치를 쌓아갑니다.",
        },
      },
      {
        title: {
          en: "Build contextual reasoning layers",
          ko: "맥락 추론 레이어 구축",
        },
        desc: {
          en: "Add domain-specific intelligence on top of general capabilities.",
          ko: "범용 AI 위에 산업별 전문 지능을 더합니다.",
        },
      },
      {
        title: {
          en: "Integrate intelligence into workflows",
          ko: "워크플로에 지능 통합",
        },
        desc: {
          en: "AI embedded into operational processes, not isolated as a feature.",
          ko: "AI를 독립 기능이 아닌 운영 프로세스에 직접 내장합니다.",
        },
      },
      {
        title: {
          en: "Focus on system-level AI architecture",
          ko: "시스템 레벨 AI 아키텍처",
        },
        desc: {
          en: "Prioritize integrated intelligence systems over standalone model training.",
          ko: "단일 모델이 아닌, 전체 시스템에서 작동하는 통합 지능을 지향합니다.",
        },
      },
    ],
  },

  vision: {
    label: { en: "LONG-TERM VISION", ko: "장기 비전" },
    title: {
      en: {
        text: "From Digital Intelligence to",
        highlight: "Personalized Operational Systems",
      },
      ko: {
        text: "디지털 지능에서",
        highlight: "개인화된 운영 시스템으로",
      },
    },
    desc: {
      en: "Our long-term objective is to extend software intelligence into adaptive environments, including personalized device ecosystems.",
      ko: "소프트웨어 지능을 적응형 환경으로 확장하는 것이 우리의 장기 목표입니다. 여기에는 개인화된 디바이스 생태계도 포함됩니다.",
    },
    positioning: {
      en: "Nuvreon is an AI software infrastructure company building scalable intelligence systems across digital analytics, SaaS platforms, and device-integrated operations.",
      ko: "Nuvreon은 디지털 분석, SaaS 플랫폼, 디바이스 통합 운영 전반에 걸쳐 확장 가능한 지능 시스템을 구축하는 AI 소프트웨어 인프라 기업입니다.",
    },
  },

  contact: {
    label: { en: "GET IN TOUCH", ko: "연락처" },
    title: {
      en: { text: "Partner With", highlight: "Nuvreon" },
      ko: { text: "Nuvreon과 함께", highlight: "시작하세요" },
    },
    desc: {
      en: "Whether you are an investor, enterprise partner, or technology collaborator, we welcome conversations about the future of intelligent systems.",
      ko: "투자자, 기업 파트너, 기술 협력사 등 지능형 시스템의 미래에 관심 있는 모든 분과의 대화를 환영합니다.",
    },
    info: [
      {
        label: { en: "Corporate Structure", ko: "법인 형태" },
        value: "Delaware C-Corp",
      },
      {
        label: { en: "Headquarters", ko: "본사 소재지" },
        value: { en: "United States", ko: "미국" },
      },
      {
        label: { en: "Email", ko: "이메일" },
        value: "sp.hwang@hantech.io",
      },
    ],
    cards: [
      {
        title: { en: "Partnership Inquiries", ko: "파트너십 문의" },
        desc: {
          en: "Explore collaboration opportunities in AI and software integration.",
          ko: "AI 및 소프트웨어 분야의 협업 기회를 함께 모색합니다.",
        },
      },
      {
        title: { en: "Investor Relations", ko: "투자 문의" },
        desc: {
          en: "Learn about our growth trajectory, market opportunity, and corporate roadmap.",
          ko: "성장 전략, 시장 기회, 사업 로드맵에 대해 안내드립니다.",
        },
      },
      {
        title: { en: "Enterprise Solutions", ko: "기업 솔루션" },
        desc: {
          en: "Discuss custom deployment of our intelligence platforms for your organization.",
          ko: "조직에 맞는 지능형 플랫폼 맞춤 도입을 상담합니다.",
        },
      },
      {
        title: { en: "Global Expansion", ko: "글로벌 진출" },
        desc: {
          en: "Connect with us about international market entry and strategic partnerships.",
          ko: "해외 시장 진출과 전략적 제휴에 관해 논의합니다.",
        },
      },
    ],
  },

  footer: {
    rights: {
      en: "Nuvreon Inc. All rights reserved.",
      ko: "Nuvreon Inc. All rights reserved.",
    },
    links: [
      { label: { en: "About", ko: "회사 소개" }, href: "#about" },
      { label: { en: "Services", ko: "서비스" }, href: "#services" },
      { label: { en: "Contact", ko: "연락처" }, href: "#contact" },
    ],
    youtube: "https://www.youtube.com/@Nuvreon-official",
    email: "sp.hwang@hantech.io",
  },

  serviceDetails: {
    keyranki: {
      heroDesc: {
        en: "A real-time keyword aggregation platform that tracks and visualizes trending search terms across Google, Naver, Daum, Nate, and Zum in a single unified dashboard.",
        ko: "구글, 네이버, 다음, 네이트, 줌 5개 검색 엔진의 실시간 인기 키워드를 하나의 통합 대시보드에서 추적하고 시각화하는 플랫폼입니다.",
      },
      videoId: "",
      overview: {
        en: "Keyranki aggregates real-time trending keywords from five major search engines in South Korea -- Google, Naver, Daum, Nate, and Zum -- into a single dashboard. Users can instantly see what topics are trending across all platforms simultaneously, track keyword rank changes with up/down/stable indicators, compare popularity differences between search engines, and explore data through interactive treemap visualizations. The platform refreshes continuously to provide minute-level granularity on public search interest.",
        ko: "Keyranki는 한국의 5대 검색 엔진(구글, 네이버, 다음, 네이트, 줌)의 실시간 인기 키워드를 하나의 대시보드로 통합합니다. 모든 플랫폼에서 어떤 주제가 동시에 인기를 얻고 있는지 즉시 확인하고, 상승/하락/유지 지표로 키워드 순위 변화를 추적하며, 검색 엔진 간 인기도 차이를 비교하고, 인터랙티브 트리맵 시각화로 데이터를 탐색할 수 있습니다. 분 단위로 지속 갱신되어 대중 검색 관심사의 실시간 흐름을 제공합니다.",
      },
      techStack: [
        {
          title: { en: "Multi-Engine Crawler", ko: "멀티 엔진 크롤러" },
          desc: {
            en: "Parallel data collection from Google, Naver, Daum, Nate, and Zum with real-time synchronization and deduplication across sources.",
            ko: "구글, 네이버, 다음, 네이트, 줌에서 병렬 데이터 수집, 실시간 동기화 및 중복 제거.",
          },
        },
        {
          title: { en: "Ranking Engine", ko: "랭킹 엔진" },
          desc: {
            en: "Unified ranking algorithm that normalizes keyword positions across different search engines and tracks rank movement history.",
            ko: "서로 다른 검색 엔진의 키워드 순위를 정규화하고 순위 변동 이력을 추적하는 통합 랭킹 알고리즘.",
          },
        },
        {
          title: { en: "Visualization Layer", ko: "시각화 레이어" },
          desc: {
            en: "Interactive treemap and ranking views that display keyword popularity across engines with real-time updates.",
            ko: "실시간 업데이트와 함께 엔진별 키워드 인기도를 표시하는 인터랙티브 트리맵 및 순위 뷰.",
          },
        },
        {
          title: { en: "Real-Time Sync", ko: "실시간 동기화" },
          desc: {
            en: "Continuous data refresh pipeline ensuring sub-minute latency between source changes and dashboard updates.",
            ko: "소스 변경과 대시보드 업데이트 간 1분 이내 지연을 보장하는 지속적 데이터 갱신 파이프라인.",
          },
        },
      ],
      capabilities: [
        {
          title: { en: "Unified Trending Dashboard", ko: "통합 인기 키워드 대시보드" },
          desc: {
            en: "View top trending keywords from all 5 search engines on one screen with real-time updates.",
            ko: "5개 검색 엔진의 인기 키워드를 한 화면에서 실시간으로 확인합니다.",
          },
        },
        {
          title: { en: "Rank Movement Tracking", ko: "순위 변동 추적" },
          desc: {
            en: "Track each keyword's rank changes with up/down/stable indicators and historical trends.",
            ko: "상승/하락/유지 지표와 이력 트렌드로 각 키워드의 순위 변화를 추적합니다.",
          },
        },
        {
          title: { en: "Cross-Engine Comparison", ko: "검색 엔진 간 비교" },
          desc: {
            en: "Compare how the same topic trends differently across Google, Naver, Daum, Nate, and Zum.",
            ko: "같은 주제가 구글, 네이버, 다음, 네이트, 줌에서 어떻게 다르게 인기를 끄는지 비교합니다.",
          },
        },
        {
          title: { en: "Treemap Visualization", ko: "트리맵 시각화" },
          desc: {
            en: "Explore keyword data through interactive treemap views showing relative search popularity at a glance.",
            ko: "상대적 검색 인기도를 한눈에 보여주는 인터랙티브 트리맵 뷰로 키워드 데이터를 탐색합니다.",
          },
        },
        {
          title: { en: "Minute-Level Refresh", ko: "분 단위 실시간 갱신" },
          desc: {
            en: "Continuous data collection ensures trending keywords are always up-to-date within seconds of changes.",
            ko: "지속적 데이터 수집으로 인기 키워드가 변화 발생 후 수초 내에 항상 최신 상태를 유지합니다.",
          },
        },
        {
          title: { en: "Top 10 Rankings Per Engine", ko: "엔진별 Top 10 순위" },
          desc: {
            en: "Dedicated top 10 keyword lists for each search engine, providing engine-specific trend insights.",
            ko: "각 검색 엔진별 전용 Top 10 키워드 목록으로 엔진 특화 트렌드 인사이트를 제공합니다.",
          },
        },
      ],
    },
    influlyze: {
      heroDesc: {
        en: "A SaaS platform that analyzes YouTubers, Instagrammers, and other creators to measure real influence, audience quality, and campaign effectiveness with data-driven precision.",
        ko: "유튜버, 인스타그래머 등 크리에이터의 실질적 영향력, 오디언스 품질, 캠페인 효과를 데이터 기반으로 정밀하게 분석하는 SaaS 플랫폼입니다.",
      },
      videoId: "",
      overview: {
        en: "The Influencer Analytics platform goes beyond subscriber counts and likes to measure the real impact of creators on YouTube, Instagram, TikTok, and other platforms. By analyzing engagement patterns, audience demographics, content performance, and conversion data at scale, it enables brands and agencies to identify the right creators, design effective campaigns, and measure actual ROI. The platform continuously learns from campaign outcomes to sharpen its scoring and recommendation models.",
        ko: "인플루언서 분석 플랫폼은 구독자 수나 좋아요 같은 단순 수치를 넘어, 유튜브, 인스타그램, 틱톡 등에서 활동하는 크리에이터의 실질적 영향력을 측정합니다. 참여 패턴, 오디언스 인구통계, 콘텐츠 성과, 전환 데이터를 대규모로 분석하여 적합한 크리에이터 선정, 효과적인 캠페인 설계, 실제 ROI 측정을 가능하게 합니다. 캠페인 결과 데이터를 지속적으로 학습하여 스코어링과 추천 모델을 고도화합니다.",
      },
      techStack: [
        {
          title: { en: "Multi-Platform Data Engine", ko: "멀티플랫폼 데이터 엔진" },
          desc: {
            en: "Collects and normalizes creator data from YouTube, Instagram, TikTok, and other platforms including subscriber metrics, video/post performance, and audience demographics.",
            ko: "유튜브, 인스타그램, 틱톡 등에서 구독자 지표, 영상/게시물 성과, 오디언스 인구통계를 수집하고 정규화합니다.",
          },
        },
        {
          title: { en: "Influence Scoring Engine", ko: "영향력 평가 엔진" },
          desc: {
            en: "Proprietary scoring system that evaluates creators based on engagement quality, audience authenticity, content relevance, and growth momentum.",
            ko: "참여 품질, 오디언스 진정성, 콘텐츠 적합도, 성장 추세를 종합 평가하는 자체 크리에이터 스코어링 시스템.",
          },
        },
        {
          title: { en: "Audience Intelligence", ko: "오디언스 분석" },
          desc: {
            en: "Deep analysis of follower demographics, fake account detection, and audience overlap mapping across creators.",
            ko: "팔로워 인구통계 심층 분석, 가짜 계정 탐지, 크리에이터 간 오디언스 중복 매핑.",
          },
        },
        {
          title: { en: "Campaign Analytics", ko: "캠페인 분석" },
          desc: {
            en: "End-to-end campaign tracking with ROI attribution, A/B comparison between creators, and performance optimization recommendations.",
            ko: "ROI 귀인 분석, 크리에이터 간 A/B 비교, 성과 최적화 추천이 포함된 캠페인 추적 시스템.",
          },
        },
      ],
      capabilities: [
        {
          title: { en: "Creator Discovery & Scoring", ko: "크리에이터 발굴 및 평가" },
          desc: {
            en: "Find and evaluate YouTubers, Instagrammers, and TikTokers based on multi-dimensional influence scores beyond simple follower counts.",
            ko: "단순 팔로워 수가 아닌 다차원 영향력 지표로 유튜버, 인스타그래머, 틱톡커를 발굴하고 평가합니다.",
          },
        },
        {
          title: { en: "Fake Follower Detection", ko: "가짜 팔로워 탐지" },
          desc: {
            en: "AI-powered detection of fake followers, bot engagement, and inflated metrics to ensure partnership quality.",
            ko: "AI 기반으로 가짜 팔로워, 봇 참여, 부풀려진 수치를 탐지하여 파트너십 품질을 보장합니다.",
          },
        },
        {
          title: { en: "Growth Trend Prediction", ko: "성장 트렌드 예측" },
          desc: {
            en: "Predict which creators are on upward trajectories and identify rising influencers before they go mainstream.",
            ko: "성장 궤도에 있는 크리에이터를 예측하고, 주류에 도달하기 전의 떠오르는 인플루언서를 선별합니다.",
          },
        },
        {
          title: { en: "Campaign ROI Measurement", ko: "캠페인 ROI 측정" },
          desc: {
            en: "Track the full funnel from influencer content to conversions, attributing business results to specific creators and posts.",
            ko: "인플루언서 콘텐츠부터 전환까지 전체 퍼널을 추적하고, 특정 크리에이터와 게시물에 성과를 귀인합니다.",
          },
        },
        {
          title: { en: "Content Performance Analysis", ko: "콘텐츠 성과 분석" },
          desc: {
            en: "Understand which video formats, thumbnails, posting times, and content topics drive the highest engagement on each platform.",
            ko: "각 플랫폼에서 어떤 영상 형식, 썸네일, 게시 시간, 콘텐츠 주제가 가장 높은 참여를 이끄는지 분석합니다.",
          },
        },
        {
          title: { en: "Competitor Campaign Benchmarking", ko: "경쟁사 캠페인 벤치마킹" },
          desc: {
            en: "Monitor competitor influencer partnerships and benchmark campaign performance against industry standards.",
            ko: "경쟁사의 인플루언서 파트너십을 모니터링하고 업계 기준 대비 캠페인 성과를 비교합니다.",
          },
        },
      ],
    },
    "robot-labeling": {
      heroDesc: {
        en: "A unified platform for labeling robotic system data, real-time monitoring, and fleet-wide control to streamline robotic operations at scale.",
        ko: "로봇 시스템 데이터 라벨링, 실시간 모니터링, 다수 장비 관제를 통합하여 대규모 로봇 운영을 효율화하는 플랫폼입니다.",
      },
      videoId: "",
      overview: {
        en: "The Robot Labeling & Control Platform provides end-to-end tools for managing robotic systems. From data annotation for training robot perception models to live dashboards for monitoring fleet status, the platform enables operators to maintain visibility and control across all deployed units. Built for industrial, logistics, and service robotics environments, it combines data labeling workflows with operational monitoring in a single interface.",
        ko: "로봇 라벨링 및 관제 플랫폼은 로봇 시스템 관리를 위한 엔드투엔드 도구를 제공합니다. 로봇 인식 모델 학습을 위한 데이터 어노테이션부터 배치된 장비들의 상태를 실시간으로 모니터링하는 대시보드까지, 운영자가 모든 배포 장비에 대한 가시성과 제어를 유지할 수 있도록 합니다. 산업, 물류, 서비스 로봇 환경을 위해 설계되었으며, 데이터 라벨링 워크플로와 운영 모니터링을 하나의 인터페이스에서 통합합니다.",
      },
      techStack: [
        {
          title: { en: "Labeling Engine", ko: "라벨링 엔진" },
          desc: {
            en: "Annotation tools optimized for robotic sensor data including LiDAR point clouds, camera feeds, and IMU streams with semi-automated labeling support.",
            ko: "LiDAR 포인트 클라우드, 카메라 피드, IMU 스트림 등 로봇 센서 데이터에 최적화된 반자동 라벨링 도구.",
          },
        },
        {
          title: { en: "Monitoring Dashboard", ko: "모니터링 대시보드" },
          desc: {
            en: "Real-time fleet status visualization with device health metrics, location tracking, and operational state indicators.",
            ko: "장비 상태, 위치 추적, 운영 상태 지표를 포함한 실시간 다수 장비 상태 시각화.",
          },
        },
        {
          title: { en: "Control Interface", ko: "관제 인터페이스" },
          desc: {
            en: "Remote command and control capabilities for individual robots or fleet-wide operations with safety interlocks.",
            ko: "안전 인터록을 갖춘 개별 로봇 또는 다수 장비 원격 명령 및 제어.",
          },
        },
        {
          title: { en: "Alert System", ko: "알림 시스템" },
          desc: {
            en: "Configurable alerts for anomaly detection, maintenance schedules, and operational threshold violations.",
            ko: "이상 탐지, 정비 일정, 운영 기준 초과에 대한 설정 가능한 알림.",
          },
        },
      ],
      capabilities: [
        {
          title: { en: "Multi-Sensor Data Labeling", ko: "다중 센서 데이터 라벨링" },
          desc: {
            en: "Annotate data from cameras, LiDAR, and other sensors with tools designed for 2D and 3D labeling workflows.",
            ko: "카메라, LiDAR 등 센서 데이터를 2D/3D 라벨링 워크플로에 최적화된 도구로 어노테이션합니다.",
          },
        },
        {
          title: { en: "Real-Time Fleet Monitoring", ko: "실시간 다수 장비 모니터링" },
          desc: {
            en: "Monitor all deployed robotic units on a single dashboard with live status, location, and health indicators.",
            ko: "배포된 모든 로봇 장비의 실시간 상태, 위치, 상태 지표를 하나의 대시보드에서 모니터링합니다.",
          },
        },
        {
          title: { en: "Remote Command & Control", ko: "원격 명령 및 제어" },
          desc: {
            en: "Send commands to individual robots or groups with safety checks and confirmation workflows.",
            ko: "안전 점검과 확인 워크플로를 통해 개별 로봇 또는 그룹에 명령을 전송합니다.",
          },
        },
        {
          title: { en: "Anomaly Detection Alerts", ko: "이상 탐지 알림" },
          desc: {
            en: "Automatically detect unusual behavior or performance degradation and notify operators in real time.",
            ko: "비정상 동작이나 성능 저하를 자동으로 감지하고 운영자에게 실시간으로 알립니다.",
          },
        },
        {
          title: { en: "Labeling Quality Management", ko: "라벨링 품질 관리" },
          desc: {
            en: "Review, validate, and track labeling quality with built-in QA workflows and accuracy metrics.",
            ko: "내장된 QA 워크플로와 정확도 지표로 라벨링 품질을 검토, 검증, 추적합니다.",
          },
        },
        {
          title: { en: "Operational Analytics", ko: "운영 분석" },
          desc: {
            en: "Analyze fleet utilization, downtime patterns, and operational efficiency with historical data dashboards.",
            ko: "이력 데이터 대시보드로 장비 활용률, 다운타임 패턴, 운영 효율성을 분석합니다.",
          },
        },
      ],
    },
    onforall: {
      heroDesc: {
        en: "A synthetic data platform that generates privacy-safe, 100% artificial datasets via virtual environments for AI and machine learning training.",
        ko: "가상 환경을 통해 개인정보가 전혀 포함되지 않은 100% 합성 데이터셋을 생성하는 AI 학습용 데이터 플랫폼입니다.",
      },
      videoId: "",
      overview: {
        en: "OnForAll provides an ocean of synthetic training data generated entirely through virtual environments like Unity and Unreal Engine. Unlike real-world datasets that carry privacy risks and collection costs, OnForAll's datasets contain zero personal information while maintaining the statistical properties needed for effective ML model training. The platform serves as both a marketplace for browsing existing synthetic datasets and a submission portal for data creators, with funding opportunities for generation projects.",
        ko: "OnForAll은 Unity, Unreal Engine 등 가상 환경에서 완전히 생성된 합성 학습 데이터를 제공합니다. 개인정보 위험과 수집 비용이 수반되는 실제 데이터셋과 달리, OnForAll의 데이터셋은 효과적인 ML 모델 학습에 필요한 통계적 특성을 유지하면서도 개인정보를 전혀 포함하지 않습니다. 기존 합성 데이터셋을 탐색하는 마켓플레이스이자 데이터 생성자를 위한 제출 포털로 기능하며, 생성 프로젝트에 대한 펀딩 기회도 제공합니다.",
      },
      techStack: [
        {
          title: { en: "Virtual Environment Engine", ko: "가상 환경 엔진" },
          desc: {
            en: "Unity and Unreal Engine-based data generation pipelines that produce photorealistic synthetic datasets with controllable parameters.",
            ko: "Unity, Unreal Engine 기반 데이터 생성 파이프라인으로 제어 가능한 파라미터의 포토리얼리스틱 합성 데이터셋 생산.",
          },
        },
        {
          title: { en: "Neural Synthesis", ko: "뉴럴 합성" },
          desc: {
            en: "AI-powered data augmentation and generation techniques that expand dataset variety while maintaining statistical validity.",
            ko: "통계적 유효성을 유지하면서 데이터셋 다양성을 확장하는 AI 기반 데이터 증강 및 생성 기술.",
          },
        },
        {
          title: { en: "Privacy Validation", ko: "프라이버시 검증" },
          desc: {
            en: "Automated verification pipeline ensuring zero personal identifiable information in all generated datasets.",
            ko: "생성된 모든 데이터셋에 개인 식별 정보가 전혀 없음을 보장하는 자동화된 검증 파이프라인.",
          },
        },
        {
          title: { en: "Dataset Marketplace", ko: "데이터셋 마켓플레이스" },
          desc: {
            en: "Browsable catalog with domain filtering, quality scoring, and direct download for immediate ML pipeline integration.",
            ko: "도메인 필터링, 품질 평가, 즉시 ML 파이프라인 연동을 위한 직접 다운로드가 가능한 카탈로그.",
          },
        },
      ],
      capabilities: [
        {
          title: { en: "Unlimited Data Generation", ko: "무제한 데이터 생성" },
          desc: {
            en: "Generate theoretically unlimited synthetic datasets with controllable scene parameters, lighting, and object placement.",
            ko: "제어 가능한 장면 파라미터, 조명, 객체 배치로 이론적으로 무제한의 합성 데이터셋을 생성합니다.",
          },
        },
        {
          title: { en: "Zero Privacy Risk", ko: "프라이버시 위험 제로" },
          desc: {
            en: "All data is 100% synthetic with absolutely no real personal information, eliminating GDPR and privacy compliance concerns.",
            ko: "모든 데이터가 100% 합성으로 실제 개인정보가 전혀 없어 GDPR 및 프라이버시 규정 준수 우려를 제거합니다.",
          },
        },
        {
          title: { en: "Domain-Specific Datasets", ko: "도메인 특화 데이터셋" },
          desc: {
            en: "Pre-built and custom datasets for autonomous driving, robotics, medical imaging, and other specialized AI applications.",
            ko: "자율주행, 로봇공학, 의료 영상 등 특화 AI 분야를 위한 사전 구축 및 맞춤 데이터셋.",
          },
        },
        {
          title: { en: "Dataset Marketplace", ko: "데이터셋 마켓플레이스" },
          desc: {
            en: "Browse, download, and contribute synthetic datasets with quality ratings and usage statistics.",
            ko: "합성 데이터셋을 탐색, 다운로드, 기여할 수 있으며 품질 평점과 사용 통계를 제공합니다.",
          },
        },
        {
          title: { en: "Funding & Collaboration", ko: "펀딩 및 협업" },
          desc: {
            en: "Access funding opportunities for data generation projects and collaborate with research institutions worldwide.",
            ko: "데이터 생성 프로젝트에 대한 펀딩 기회에 접근하고 전 세계 연구 기관과 협업합니다.",
          },
        },
        {
          title: { en: "ML Pipeline Integration", ko: "ML 파이프라인 연동" },
          desc: {
            en: "Direct export to common ML frameworks with automatic format conversion and annotation embedding.",
            ko: "자동 포맷 변환과 어노테이션 임베딩으로 주요 ML 프레임워크에 직접 내보내기.",
          },
        },
      ],
    },
    "gacha-world": {
      heroDesc: {
        en: "A location-based service that helps users discover nearby gacha shops including claw machines, capsule toys, and random boxes across Korea.",
        ko: "한국 전역의 인형뽑기, 캡슐토이, 랜덤박스 매장을 위치 기반으로 찾아주는 서비스입니다.",
      },
      videoId: "",
      overview: {
        en: "GachaWorld is the go-to platform for gacha enthusiasts in Korea. It consolidates dispersed information about claw machine arcades, capsule toy shops, and random box retailers into a single searchable map. Users can discover nearby shops, check real-time trends on popular machines and products, compare success rates and pricing, and read community reviews before visiting. The platform turns a fragmented hobby experience into an informed, community-driven discovery journey.",
        ko: "가챠월드는 한국 가챠 매니아들을 위한 필수 플랫폼입니다. 흩어져 있는 인형뽑기, 캡슐토이, 랜덤박스 매장 정보를 하나의 검색 가능한 지도로 통합합니다. 주변 매장을 찾고, 인기 기기와 상품의 실시간 트렌드를 확인하고, 성공률과 가격을 비교하고, 방문 전 커뮤니티 리뷰를 읽을 수 있습니다. 파편화된 취미 경험을 정보 기반의 커뮤니티 주도 탐색 여정으로 전환합니다.",
      },
      techStack: [
        {
          title: { en: "Location Engine", ko: "위치 엔진" },
          desc: {
            en: "GPS-based shop discovery with map integration, distance calculation, and route guidance to nearby gacha locations.",
            ko: "GPS 기반 매장 탐색, 지도 연동, 거리 계산, 가까운 가챠 매장까지의 경로 안내.",
          },
        },
        {
          title: { en: "Trend Analytics", ko: "트렌드 분석" },
          desc: {
            en: "Real-time tracking of popular machines, trending products, and regional gacha hotspots based on user activity data.",
            ko: "사용자 활동 데이터 기반 인기 기기, 트렌딩 상품, 지역별 가챠 핫스팟 실시간 추적.",
          },
        },
        {
          title: { en: "Value Analysis", ko: "가치 분석" },
          desc: {
            en: "Price comparison and success rate calculations to help users make informed decisions on where and what to play.",
            ko: "가격 비교 및 성공률 계산으로 어디서 무엇을 할지 합리적 의사결정 지원.",
          },
        },
        {
          title: { en: "Community Platform", ko: "커뮤니티 플랫폼" },
          desc: {
            en: "User reviews, ratings, photo sharing, and a point-based reward system to encourage community engagement.",
            ko: "사용자 리뷰, 평점, 사진 공유, 포인트 기반 리워드 시스템으로 커뮤니티 참여 촉진.",
          },
        },
      ],
      capabilities: [
        {
          title: { en: "Nearby Shop Discovery", ko: "주변 매장 찾기" },
          desc: {
            en: "Find gacha shops near your current location with real-time map view, distance sorting, and opening hours.",
            ko: "현재 위치 기준으로 실시간 지도, 거리순 정렬, 영업시간과 함께 주변 가챠 매장을 찾습니다.",
          },
        },
        {
          title: { en: "Popular Machine Rankings", ko: "인기 기기 순위" },
          desc: {
            en: "See which claw machines, capsule toy vendors, and random boxes are trending right now in your area.",
            ko: "현재 내 지역에서 어떤 인형뽑기, 캡슐토이, 랜덤박스가 인기인지 확인합니다.",
          },
        },
        {
          title: { en: "Success Rate & Price Data", ko: "성공률 및 가격 데이터" },
          desc: {
            en: "Community-reported success rates and price comparisons to help you choose the best value gacha experiences.",
            ko: "커뮤니티 제보 성공률과 가격 비교로 가성비 좋은 가챠 경험을 선택할 수 있습니다.",
          },
        },
        {
          title: { en: "User Reviews & Photos", ko: "사용자 리뷰 및 사진" },
          desc: {
            en: "Read reviews and browse photos from other users before visiting a shop or trying a machine.",
            ko: "매장 방문이나 기기 이용 전 다른 사용자의 리뷰와 사진을 확인합니다.",
          },
        },
        {
          title: { en: "Rewards & Points System", ko: "리워드 및 포인트 시스템" },
          desc: {
            en: "Earn points for reviews, check-ins, and contributions to unlock rewards and community badges.",
            ko: "리뷰, 체크인, 기여 활동으로 포인트를 적립하여 리워드와 커뮤니티 뱃지를 획득합니다.",
          },
        },
        {
          title: { en: "Regional Trend Map", ko: "지역별 트렌드 맵" },
          desc: {
            en: "Explore gacha trends across different regions in Korea with heatmap visualization of popular spots.",
            ko: "히트맵 시각화로 한국 각 지역의 가챠 트렌드와 인기 스팟을 탐색합니다.",
          },
        },
      ],
    },
  },

  serviceDetailLabels: {
    backToHome: { en: "Back to Home", ko: "홈으로 돌아가기" },
    overview: { en: "OVERVIEW", ko: "개요" },
    overviewTitle: { en: "Service Overview", ko: "서비스 개요" },
    tech: { en: "TECHNOLOGY", ko: "기술" },
    techTitle: {
      en: { text: "Technology", highlight: "Architecture" },
      ko: { text: "기술", highlight: "아키텍처" },
    },
    capabilities: { en: "CAPABILITIES", ko: "핵심 기능" },
    capabilitiesTitle: {
      en: { text: "Core", highlight: "Capabilities" },
      ko: { text: "핵심", highlight: "기능" },
    },
    video: { en: "PRODUCT DEMO", ko: "제품 데모" },
    videoTitle: {
      en: { text: "See It", highlight: "In Action" },
      ko: { text: "직접", highlight: "확인하세요" },
    },
    cta: {
      en: "Interested in this service?",
      ko: "이 서비스에 관심이 있으신가요?",
    },
    ctaButton: { en: "Contact Us", ko: "문의하기" },
    learnMore: { en: "Learn More", ko: "자세히 보기" },
  },

  technology: {
    label: { en: "TECHNOLOGY", ko: "기술" },
    title: {
      en: { text: "How We Build", highlight: "Intelligence" },
      ko: { text: "지능을 만드는", highlight: "기술" },
    },
    desc: {
      en: "Our technology philosophy centers on applied AI -- leveraging proven infrastructure to build systems that deliver measurable operational value.",
      ko: "우리의 기술 철학은 응용 AI에 집중합니다. 검증된 인프라를 활용해 측정 가능한 운영 가치를 제공하는 시스템을 구축합니다.",
    },
    principles: {
      label: { en: "AI PHILOSOPHY", ko: "AI 철학" },
      title: {
        en: { text: "Applied AI,", highlight: "Not AI for Its Own Sake" },
        ko: { text: "AI 자체가 아닌,", highlight: "실전 적용 AI" },
      },
      items: [
        {
          title: {
            en: "Leverage existing LLM infrastructure",
            ko: "기존 LLM 인프라 활용",
          },
          desc: {
            en: "Build on proven foundation models instead of reinventing the wheel. We focus resources on domain-specific value layers rather than base model training.",
            ko: "검증된 파운데이션 모델 위에 우리만의 가치를 쌓아갑니다. 기초 모델 학습이 아닌 도메인 특화 가치 레이어에 역량을 집중합니다.",
          },
        },
        {
          title: {
            en: "Build contextual reasoning layers",
            ko: "맥락 추론 레이어 구축",
          },
          desc: {
            en: "Add domain-specific intelligence on top of general capabilities. Our reasoning engines understand industry context, not just language.",
            ko: "범용 AI 위에 산업별 전문 지능을 더합니다. 우리의 추론 엔진은 언어뿐 아니라 산업 맥락을 이해합니다.",
          },
        },
        {
          title: {
            en: "Integrate intelligence into workflows",
            ko: "워크플로에 지능 통합",
          },
          desc: {
            en: "AI embedded into operational processes, not isolated as a standalone feature. Intelligence flows through the entire system architecture.",
            ko: "AI를 독립 기능이 아닌 운영 프로세스에 직접 내장합니다. 지능이 전체 시스템 아키텍처를 관통합니다.",
          },
        },
        {
          title: {
            en: "Focus on system-level AI architecture",
            ko: "시스템 레벨 AI 아키텍처",
          },
          desc: {
            en: "Prioritize integrated intelligence systems over standalone model training. The value is in orchestration, not individual model performance.",
            ko: "단일 모델이 아닌, 전체 시스템에서 작동하는 통합 지능을 지향합니다. 가치는 개별 모델 성능이 아닌 오케스트레이션에 있습니다.",
          },
        },
      ],
    },
    stack: {
      label: { en: "CORE TECHNOLOGY STACK", ko: "핵심 기술 스택" },
      title: {
        en: { text: "Built on Modern", highlight: "Infrastructure" },
        ko: { text: "최신 인프라 기반", highlight: "기술 구성" },
      },
      categories: [
        {
          title: { en: "Data & Processing", ko: "데이터 및 처리" },
          items: [
            { en: "Real-time stream processing pipelines", ko: "실시간 스트림 처리 파이프라인" },
            { en: "Distributed data ingestion at scale", ko: "대규모 분산 데이터 수집" },
            { en: "Time-series analytics engines", ko: "시계열 분석 엔진" },
            { en: "ETL automation with data quality validation", ko: "데이터 품질 검증이 포함된 ETL 자동화" },
          ],
        },
        {
          title: { en: "AI & Machine Learning", ko: "AI 및 머신러닝" },
          items: [
            { en: "Foundation model integration (LLM APIs)", ko: "파운데이션 모델 연동 (LLM API)" },
            { en: "Custom contextual reasoning layers", ko: "맞춤형 맥락 추론 레이어" },
            { en: "Predictive analytics & forecasting models", ko: "예측 분석 및 예보 모델" },
            { en: "Anomaly detection & pattern recognition", ko: "이상 탐지 및 패턴 인식" },
          ],
        },
        {
          title: { en: "Platform & Infrastructure", ko: "플랫폼 및 인프라" },
          items: [
            { en: "Cloud-native microservices architecture", ko: "클라우드 네이티브 마이크로서비스 아키텍처" },
            { en: "Edge computing for low-latency operations", ko: "초저지연 운영을 위한 엣지 컴퓨팅" },
            { en: "On-premise deployment for enterprise security", ko: "기업 보안을 위한 온프레미스 배포" },
            { en: "RESTful API-first design", ko: "RESTful API 우선 설계" },
          ],
        },
        {
          title: { en: "Frontend & Visualization", ko: "프론트엔드 및 시각화" },
          items: [
            { en: "Interactive real-time dashboards", ko: "인터랙티브 실시간 대시보드" },
            { en: "Responsive SaaS web applications", ko: "반응형 SaaS 웹 애플리케이션" },
            { en: "Data visualization & reporting tools", ko: "데이터 시각화 및 리포팅 도구" },
            { en: "Multi-language interface (EN/KO)", ko: "다국어 인터페이스 (한/영)" },
          ],
        },
      ],
    },
    architecture: {
      label: { en: "SYSTEM ARCHITECTURE", ko: "시스템 아키텍처" },
      title: {
        en: { text: "Intelligence", highlight: "Pipeline" },
        ko: { text: "인텔리전스", highlight: "파이프라인" },
      },
      desc: {
        en: "Our services follow a unified architecture pattern: ingest data, apply intelligence, and deliver actionable outputs.",
        ko: "우리의 서비스는 통일된 아키텍처 패턴을 따릅니다: 데이터 수집, 지능 적용, 실행 가능한 결과 제공.",
      },
      layers: [
        {
          title: { en: "Data Ingestion", ko: "데이터 수집" },
          desc: {
            en: "Multi-source data collection from APIs, web crawling, IoT sensors, and enterprise systems with automated quality validation.",
            ko: "API, 웹 크롤링, IoT 센서, 엔터프라이즈 시스템에서 자동 품질 검증과 함께 다중 소스 데이터를 수집합니다.",
          },
        },
        {
          title: { en: "Processing & Enrichment", ko: "처리 및 강화" },
          desc: {
            en: "Raw data is normalized, enriched with contextual metadata, and transformed into structured intelligence-ready formats.",
            ko: "원시 데이터를 정규화하고, 맥락 메타데이터로 강화하며, 분석 가능한 구조화된 형태로 변환합니다.",
          },
        },
        {
          title: { en: "Intelligence Layer", ko: "인텔리전스 레이어" },
          desc: {
            en: "ML models, scoring algorithms, and contextual reasoning engines analyze processed data to generate insights and predictions.",
            ko: "ML 모델, 스코어링 알고리즘, 맥락 추론 엔진이 처리된 데이터를 분석하여 인사이트와 예측을 생성합니다.",
          },
        },
        {
          title: { en: "Action & Delivery", ko: "실행 및 전달" },
          desc: {
            en: "Intelligence outputs are delivered through dashboards, APIs, alerts, and automated workflows for immediate operational impact.",
            ko: "인텔리전스 결과를 대시보드, API, 알림, 자동화 워크플로를 통해 전달하여 즉각적인 운영 효과를 만듭니다.",
          },
        },
      ],
    },
    security: {
      label: { en: "SECURITY & COMPLIANCE", ko: "보안 및 규정 준수" },
      title: {
        en: { text: "Enterprise-Grade", highlight: "Security" },
        ko: { text: "엔터프라이즈급", highlight: "보안" },
      },
      items: [
        { en: "End-to-end data encryption (in-transit and at-rest)", ko: "종단 간 데이터 암호화 (전송 중 및 저장 시)" },
        { en: "Role-based access control (RBAC)", ko: "역할 기반 접근 제어 (RBAC)" },
        { en: "SOC 2 Type II compliance readiness", ko: "SOC 2 Type II 준수 대비" },
        { en: "Air-gapped on-premise deployment options", ko: "에어갭 온프레미스 배포 옵션" },
        { en: "Regular security audits and penetration testing", ko: "정기 보안 감사 및 침투 테스트" },
        { en: "GDPR and data privacy compliance", ko: "GDPR 및 데이터 프라이버시 규정 준수" },
      ],
    },
    ctaText: {
      en: "Want to learn more about our technology?",
      ko: "기술에 대해 더 알고 싶으신가요?",
    },
  },
} as const;

export type BiText = { en: string; ko: string } | string;

export function t(value: BiText, lang: "en" | "ko"): string {
  if (typeof value === "string") return value;
  return value[lang];
}
