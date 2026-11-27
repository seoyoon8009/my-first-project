const STEMS = ["갑", "을", "병", "정", "무", "기", "경", "신", "임", "계"];
const STEMS_HANJA = ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"];
const BRANCHES = ["자", "축", "인", "묘", "진", "사", "오", "미", "신", "유", "술", "해"];
const BRANCHES_HANJA = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"];

const ARTWORK_BASE =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork";

/* ───────── 10천간 기본 성향 및 테마 ───────── */
const STEM_DATA = {
  갑: {
    theme: "theme-wood",
    keywords: ["#추진력", "#솔직담백", "#직진리더"],
    desc: "새 학기 팀플이나 프로젝트를 시작할 때 가장 먼저 앞장서는 에너지를 가졌습니다. 눈치를 보기보다 정면 돌파하는 편이며, 한번 목표를 정하면 밤을 새워서라도 끝까지 밀고 나가는 힘이 있습니다."
  },
  을: {
    theme: "theme-wood",
    keywords: ["#섬세함", "#끈기", "#적응력만렙"],
    desc: "겉으로는 부드럽고 친화력이 좋지만 내면에는 쉽게 꺾이지 않는 단단한 심지가 있습니다. 팀원들의 의견을 조율하고 현실적인 해법을 찾아내는 감각이 뛰어납니다."
  },
  병: {
    theme: "theme-fire",
    keywords: ["#분위기메이커", "#긍정에너지", "#발표장인"],
    desc: "어색한 개강 첫 주나 동아리 모임 분위기를 단숨에 환하게 만드는 매력이 있습니다. 표현력이 풍부해 발표나 대외활동에서 자연스럽게 중심 역할을 맡습니다."
  },
  정: {
    theme: "theme-fire",
    keywords: ["#집중력", "#감수성", "#반전매력"],
    desc: "평소에는 차분하고 사려 깊지만, 전공이나 관심 분야에 빠지면 도서관에서 누구보다 뜨거운 집중력을 발휘합니다. 남들이 놓치는 족보 포인트를 잘 짚어냅니다."
  },
  무: {
    theme: "theme-earth",
    keywords: ["#신뢰감", "#포용력", "#멘탈갑"],
    desc: "주변의 촉박한 분위기에 쉽게 휘둘리지 않고 자기 페이스를 지킵니다. 스케일이 크고 믿음직스러워 마감 직전 다급한 순간에 친구들이 가장 먼저 의지하는 중심축입니다."
  },
  기: {
    theme: "theme-earth",
    keywords: ["#실용주의", "#배려심", "#다재다능"],
    desc: "현실 감각이 뛰어나고 문서 정리나 실무 능력이 좋습니다. 팀원들을 세심하게 챙기면서도 자신의 분량을 야무지게 완성해 내는 균형 감각을 갖추고 있습니다."
  },
  경: {
    theme: "theme-metal",
    keywords: ["#결단력", "#의리", "#깔끔한일처리"],
    desc: "기준이 명확하고 옳고 그름이 분명한 성격입니다. 한번 마음먹으면 군더더기 없이 깔끔하게 과제를 끝내며, 맡은 파트에 대한 책임감이 매우 강합니다."
  },
  신: {
    theme: "theme-metal",
    keywords: ["#완벽주의", "#미적감각", "#날카로운직관"],
    desc: "섬세하고 정교한 감각을 지녀 PPT 디자인이나 보고서 완성도를 높이는 데 강점이 있습니다. 자기 관리가 철저해 어디서든 세련된 인상을 남깁니다."
  },
  임: {
    theme: "theme-water",
    keywords: ["#아이디어뱅크", "#유연함", "#통찰력"],
    desc: "고정관념에 얽매이지 않고 새로운 분야를 빠르게 흡수합니다. 상황을 넓게 조망하는 시야가 있어 막막한 과제에서도 의외의 돌파구를 잘 찾아냅니다."
  },
  계: {
    theme: "theme-water",
    keywords: ["#직관력", "#기획감각", "#섬세한센스"],
    desc: "상황과 사람의 마음을 읽는 센스가 뛰어납니다. 겉으로 드러내지 않아도 머릿속에서 치밀하게 그림을 그리며, 참신한 아이디어로 팀에 영감을 줍니다."
  }
};

/* ───────── 12지지(일지) 속마음·행동 스타일 ───────── */
const BRANCH_DATA = {
  자: {
    tag: "자(子) 일지 · 밤샘 몰입형",
    keyword: "#지적호기심",
    desc: "조용히 혼자 생각을 정리할 때 가장 머리가 잘 돌아가는 타입이에요. 남들 다 자는 새벽 시간에 집중력이 폭발해 레포트나 시험 공부를 단숨에 끝내곤 합니다."
  },
  축: {
    tag: "축(丑) 일지 · 뚝심 완주형",
    keyword: "#성실끝판왕",
    desc: "속도가 조금 느려 보여도 한번 맡은 일은 절대 중도 포기하지 않는 뚝심이 있습니다. 학기 말에 가면 결국 가장 탄탄한 결과물을 손에 쥐는 실속파입니다."
  },
  인: {
    tag: "인(寅) 일지 · 개척 스타터형",
    keyword: "#행동파",
    desc: "아이디어가 떠오르면 망설이지 않고 바로 실행에 옮기는 에너지가 있습니다. 새로운 동아리나 대외활동에서도 빠르게 판을 키우는 기획형 행동파입니다."
  },
  묘: {
    tag: "묘(卯) 일지 · 센스 조율형",
    keyword: "#친화력",
    desc: "주변 분위기 변화를 빠르게 캐치하고 사람 사이를 부드럽게 잇는 감각이 뛰어납니다. 딱딱한 팀플 회의도 유쾌하게 풀어내는 센스를 지녔습니다."
  },
  진: {
    tag: "진(辰) 일지 · 큰그림 설계형",
    keyword: "#스케일",
    desc: "작은 디테일에 매몰되기보다 전체 흐름과 방향성을 크게 그리는 타입입니다. 위기 상황에서도 당황하지 않고 대안을 제시하는 듬직한 면모가 있습니다."
  },
  사: {
    tag: "사(巳) 일지 · 전략 탐구형",
    keyword: "#통찰력",
    desc: "겉으로는 차분해 보이지만 머릿속에서는 치밀하게 경우의 수를 계산하고 있습니다. 발표 Q&A나 면접처럼 순발력이 필요한 순간에 진가를 발휘합니다."
  },
  오: {
    tag: "오(午) 일지 · 직진 열정형",
    keyword: "#에너지폭발",
    desc: "호불호가 분명하고 꽂히는 분야에는 아낌없이 에너지를 쏟습니다. 솔직하고 뒤끝 없는 성격 덕분에 캠퍼스 어디서든 존재감이 뚜렷합니다."
  },
  미: {
    tag: "미(未) 일지 · 온기 케어형",
    keyword: "#다정함",
    desc: "주변 사람들의 컨디션과 감정을 세심하게 살피는 따뜻한 마음씨를 가졌습니다. 조용히 팀원들을 챙기며 묵묵히 자기 몫을 다해 신뢰를 쌓습니다."
  },
  신: {
    tag: "신(申) 일지 · 멀티 해결사형",
    keyword: "#임기응변",
    desc: "상황 판단이 빠르고 여러 일을 동시에 처리하는 멀티태스킹 능력이 뛰어납니다. 갑작스러운 변수나 마감 압박 속에서도 재치 있게 돌파구를 찾습니다."
  },
  유: {
    tag: "유(酉) 일지 · 디테일 장인형",
    keyword: "#깔끔정확",
    desc: "기준이 명확하고 오탈자나 엉성한 마감을 그냥 넘기지 못하는 깔끔한 성격입니다. 자료 조사, 문서 편집, 발표 퀄리티 관리에서 독보적인 실력을 보입니다."
  },
  술: {
    tag: "술(戌) 일지 · 의리 수호자형",
    keyword: "#책임감",
    desc: "한번 내 사람이라고 생각하면 끝까지 의리를 지키는 믿음직한 타입입니다. 겉으로 티를 많이 내지 않아도 결정적인 순간에 가장 든든하게 팀을 지킵니다."
  },
  해: {
    tag: "해(亥) 일지 · 유연한 영감형",
    keyword: "#포용력",
    desc: "틀에 박힌 방식보다 자유로운 분위기 속에서 창의적인 아이디어를 떠올립니다. 타인의 다름을 잘 받아들이고 깊은 공감 능력을 발휘합니다."
  }
};

/* ───────── 60갑자 일주별 고유 포켓몬 (60종) ───────── */
const PILLAR_POKEMON = {
  갑자: { id: 1, name: "이상해씨", subtitle: "깊은 밤 지혜를 틔워 가장 먼저 싹트는 캠퍼스 새내기" },
  갑인: { id: 252, name: "나무지기", subtitle: "목표를 향해 곧게 뻗어 나가는 조별과제 직진 리더" },
  갑진: { id: 389, name: "토대부기", subtitle: "큰 그림을 설계하고 팀 전체를 든든히 이끄는 거목" },
  갑오: { id: 152, name: "치코리타", subtitle: "밝은 에너지로 어색한 팀 분위기를 녹이는 직진 응원단" },
  갑신: { id: 387, name: "모부기", subtitle: "돌발 상황에서도 침착하게 돌파구를 뚫는 실전형 리더" },
  갑술: { id: 650, name: "도치마론", subtitle: "맡은 일은 끝까지 책임지고 완수하는 의리의 개척자" },

  을축: { id: 43, name: "뚜벅쵸", subtitle: "묵묵히 뿌리를 내리며 끝내 결과를 만들어내는 뚝심파" },
  을묘: { id: 722, name: "나몰빼미", subtitle: "어떤 팀에서도 제 몫을 해내는 유연한 캠퍼스 전략가" },
  을사: { id: 495, name: "주리비얀", subtitle: "부드러운 미소 뒤에 치밀한 계산을 품은 스마트 지략가" },
  을미: { id: 547, name: "엘풍", subtitle: "산뜻한 센스로 팀원들의 마음을 하나로 모으는 분위기 조율사" },
  을유: { id: 549, name: "드레디어", subtitle: "섬세한 기준과 미적 감각으로 완성도를 높이는 깔끔러" },
  을해: { id: 270, name: "연꽃몬", subtitle: "어디서든 자연스럽게 스며들어 아이디어를 피우는 감성파" },

  병자: { id: 155, name: "브케인", subtitle: "평소엔 차분하다가 결정적 순간 불꽃처럼 몰입하는 반전파" },
  병인: { id: 4, name: "파이리", subtitle: "어색한 첫 수업 분위기도 단숨에 녹이는 태양 에너지 센터" },
  병진: { id: 6, name: "리자몽", subtitle: "스케일 큰 기획과 압도적 존재감으로 무대를 장악하는 발표왕" },
  병오: { id: 257, name: "번치코", subtitle: "한번 불붙으면 누구도 말릴 수 없는 한낮의 뜨거운 승부사" },
  병신: { id: 390, name: "불꽃숭이", subtitle: "재치 넘치는 순발력으로 위기를 기회로 바꾸는 분위기 메이커" },
  병술: { id: 58, name: "가디", subtitle: "밝은 에너지와 뜨거운 의리로 동기를 챙기는 캠퍼스 수호자" },

  정축: { id: 607, name: "불켜미", subtitle: "은은하지만 꺼지지 않는 집중력으로 시험기간을 버티는 뚝심파" },
  정묘: { id: 37, name: "식스테일", subtitle: "차분함 속에 뜨거운 몰입력을 품은 섬세한 디테일 장인" },
  정사: { id: 653, name: "푸호꼬", subtitle: "예리한 통찰로 교수님의 출제 의도를 꿰뚫는 전략가" },
  정미: { id: 38, name: "나인테일", subtitle: "따뜻한 배려와 깊은 감수성으로 곁을 지키는 온기 힐러" },
  정유: { id: 725, name: "냐오불", subtitle: "쿨한 겉모습 뒤에 완벽한 결과물을 준비하는 디테일 승부사" },
  정해: { id: 136, name: "부스터", subtitle: "포근한 감성과 자유로운 영감을 지닌 밤샘 아이디어 뱅크" },

  무자: { id: 195, name: "누오", subtitle: "겉은 느긋해 보여도 속으론 핵심을 다 꿰뚫고 있는 실속파" },
  무인: { id: 232, name: "코리갑", subtitle: "묵직한 추진력으로 막힌 프로젝트를 밀고 나가는 행동대장" },
  무진: { id: 445, name: "한카리아스", subtitle: "거대한 스케일과 승부욕으로 목표를 쟁취하는 올라운드 에이스" },
  무오: { id: 143, name: "잠만보", subtitle: "시험기간에도 흔들리지 않는 묵직하고 든든한 멘탈 버팀목" },
  무신: { id: 246, name: "애버라스", subtitle: "탄탄한 기본기에 빠른 임기응변을 겸비한 숨은 실력자" },
  무술: { id: 745, name: "루가루암", subtitle: "한번 맺은 약속과 역할을 끝까지 지키는 단단한 의리파" },

  기축: { id: 104, name: "탕구리", subtitle: "조용히 자기 분량을 완벽히 챙기는 성실한 실무 전문가" },
  기묘: { id: 133, name: "이브이", subtitle: "자료 조사부터 정리까지 야무지게 해내는 만능 올라운더" },
  기사: { id: 27, name: "모래두지", subtitle: "실속과 효율을 정확히 계산해 빈틈없이 움직이는 전략가" },
  기미: { id: 179, name: "메리프", subtitle: "포근한 친화력으로 팀원들의 멘탈을 다독이는 온화한 조율자" },
  기유: { id: 302, name: "깜까미", subtitle: "남들이 놓치는 작은 디테일까지 보석처럼 찾아내는 분석가" },
  기해: { id: 220, name: "꾸꾸리", subtitle: "편안한 매력으로 주변을 무장해제시키는 감성 실용주의자" },

  경자: { id: 227, name: "무장조", subtitle: "날카로운 판단력과 밤샘 집중력으로 승부하는 쿨한 전략가" },
  경인: { id: 403, name: "코링크", subtitle: "망설임 없는 결단력으로 새로운 도전을 이끄는 행동파" },
  경진: { id: 376, name: "메타그로스", subtitle: "압도적인 논리와 큰 그림으로 팀을 캐리하는 강철 브레인" },
  경오: { id: 448, name: "루카리오", subtitle: "역할 분담이 명확하고 의리 있는 단단한 캠퍼스 승부사" },
  경신: { id: 123, name: "스라크", subtitle: "빠른 상황 판단과 깔끔한 일 처리로 마감 시간을 지배하는 해결사" },
  경술: { id: 304, name: "가보리", subtitle: "원칙과 책임을 목숨처럼 지키는 단단한 신뢰의 아이콘" },

  신축: { id: 303, name: "입치트", subtitle: "차분한 뚝심으로 완벽한 퀄리티를 벼려내는 내실형 장인" },
  신묘: { id: 700, name: "님피아", subtitle: "예리한 감각과 센스로 결과물의 완성도를 끌어올리는 아티스트" },
  신사: { id: 282, name: "가디안", subtitle: "냉철한 통찰과 우아한 카리스마로 팀의 품격을 높이는 설계자" },
  신미: { id: 175, name: "토게피", subtitle: "섬세한 감수성과 따뜻한 배려를 품은 반짝이는 행운아" },
  신유: { id: 196, name: "에브이", subtitle: "한 치의 오차도 허용하지 않는 날카로운 직관의 완벽주의자" },
  신해: { id: 39, name: "푸린", subtitle: "맑은 감성과 유연한 센스로 누구와도 잘 어우러지는 매력파" },

  임자: { id: 130, name: "갸라도스", subtitle: "깊은 통찰과 폭발적인 추진력을 동시에 품은 거대한 파도" },
  임인: { id: 7, name: "꼬부기", subtitle: "틀에 갇히지 않고 유연하게 돌파하는 유쾌한 캠퍼스 탐험가" },
  임진: { id: 131, name: "라프라스", subtitle: "넓은 시야와 포용력으로 팀원들을 목적지까지 이끄는 항해사" },
  임오: { id: 418, name: "브이젤", subtitle: "유연한 사고에 뜨거운 열정을 더해 거침없이 달리는 행동파" },
  임신: { id: 54, name: "고라파덕", subtitle: "엉뚱해 보여도 결정적 순간 천재적 아이디어를 터뜨리는 해결사" },
  임술: { id: 134, name: "샤미드", subtitle: "자유로운 감성과 묵직한 의리를 겸비한 깊이 있는 조력자" },

  계축: { id: 194, name: "우파", subtitle: "고요한 뚝심으로 자기 페이스를 지키며 스며드는 실속파" },
  계묘: { id: 183, name: "마릴", subtitle: "맑은 직관과 다정한 센스로 팀에 활력을 불어넣는 아이디어 뱅크" },
  계사: { id: 197, name: "블래키", subtitle: "조용하지만 치밀한 전략으로 밤에 더 빛나는 미스터리 기획자" },
  계미: { id: 393, name: "팽도리", subtitle: "따뜻한 감성과 자존심 있는 기획력을 지닌 섬세한 감성파" },
  계유: { id: 258, name: "물짱이", subtitle: "예리한 관찰력과 깔끔한 정리 실력을 갖춘 똑똑한 전략가" },
  계해: { id: 79, name: "야돈", subtitle: "여유로운 태도 속에 깊은 영감과 철학을 품은 몽상가" }
};

function getPokemonInfo(stem, branch) {
  const key = `${stem}${branch}`;
  const stemData = STEM_DATA[stem];
  const branchData = BRANCH_DATA[branch];
  const poke = PILLAR_POKEMON[key];

  return {
    dexNo: `No.${String(poke.id).padStart(3, "0")}`,
    theme: stemData.theme,
    pokemonName: poke.name,
    img: `${ARTWORK_BASE}/${poke.id}.png`,
    subtitle: poke.subtitle,
    keywords: [...stemData.keywords, branchData.keyword],
    desc: stemData.desc,
    branchTag: branchData.tag,
    branchDesc: branchData.desc
  };
}

/* ───────── 캠퍼스 능력치 스탯 계산 ───────── */

const STEM_STATS = [
  [94, 78, 84, 86], // 갑
  [80, 88, 92, 85], // 을
  [92, 76, 96, 82], // 병
  [82, 94, 84, 88], // 정
  [84, 82, 88, 97], // 무
  [83, 93, 91, 89], // 기
  [95, 86, 80, 92], // 경
  [81, 97, 83, 87], // 신
  [90, 81, 93, 86], // 임
  [84, 91, 87, 85]  // 계
];

const BRANCH_BONUS = [
  [0, 4, -1, 2], // 자
  [1, 3, 0, 4],  // 축
  [5, -1, 2, 1], // 인
  [0, 2, 5, 0],  // 묘
  [3, 1, 2, 3],  // 진
  [2, 4, 0, 2],  // 사
  [5, -2, 4, 1], // 오
  [-1, 2, 5, 2], // 미
  [3, 2, 3, 0],  // 신
  [1, 5, -1, 2], // 유
  [2, 2, 1, 4],  // 술
  [1, 1, 4, 2]   // 해
];

function renderCampusStats(pillar) {
  const base = STEM_STATS[pillar.stemIdx];
  const bonus = BRANCH_BONUS[pillar.branchIdx];
  const clamp = (v) => Math.max(72, Math.min(99, v));

  const values = {
    drive: clamp(base[0] + bonus[0]),
    detail: clamp(base[1] + bonus[1]),
    social: clamp(base[2] + bonus[2]),
    mental: clamp(base[3] + bonus[3])
  };

  Object.entries(values).forEach(([key, val]) => {
    document.getElementById(`stat-${key}`).style.width = `${val}%`;
    document.getElementById(`stat-${key}-val`).textContent = val;
  });
}

/* ───────── 천지덕합 & 상생삼합 파트너 계산 ───────── */

const YUKHAP_MAP = [1, 0, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2];

const HAP_REASONS = {
  갑: "거침없는 추진력을 현실적인 일정표로 다듬어주는 천지덕합 짝꿍",
  을: "유연한 기획에 단단한 결단력과 마감력을 더해주는 천지덕합 짝꿍",
  병: "뜨거운 열정에 꼼꼼한 디테일과 PPT 완성도를 입혀주는 천지덕합 짝꿍",
  정: "깊은 통찰과 섬세한 자료 정리가 만나 A+을 만드는 천지덕합 짝꿍",
  무: "묵직한 안정감에 기발한 기획 아이디어를 더해주는 천지덕합 짝꿍",
  기: "큰 그림을 열어주면 빈틈없이 결과물로 완성해 내는 천지덕합 짝꿍",
  경: "단호한 추진력을 부드럽게 감싸주며 시너지를 내는 천지덕합 짝꿍",
  신: "예리한 감각을 환하게 빛내주며 텐션을 높여주는 천지덕합 짝꿍",
  임: "넓은 시야에 섬세한 집중력을 더해 결과를 만드는 천지덕합 짝꿍",
  계: "섬세한 아이디어를 현실적인 결과물로 구현해 주는 천지덕합 짝꿍"
};

const SANGSAENG_REASONS = {
  갑: "넓은 시야와 레퍼런스로 아이디어를 채워주는 시험기간 조력자",
  을: "섬세한 직관으로 막막한 시험범위의 핵심을 짚어주는 조력자",
  병: "에너지가 방전되지 않도록 든든하게 페이스 맞춰주는 동기",
  정: "지치지 않게 곁에서 커피 한 잔 건네며 힘을 실어주는 친구",
  무: "활기찬 텐션으로 무기력함을 깨워주는 든든한 캠퍼스 응원군",
  기: "따뜻한 배려와 섬세한 피드백으로 마음을 채워주는 조력자",
  경: "예민해질 때마다 묵직하게 멘탈을 잡아주는 든든한 버팀목",
  신: "실속 있게 일정을 챙겨주며 능력을 꽃피우게 돕는 조력자",
  임: "명확한 방향을 잡아주어 시험 공부를 효율적으로 이끄는 조력자",
  계: "예리한 감각으로 기획의 완성도를 한 단계 높여주는 파트너"
};

function getPartnerPillars(stemIdx, branchIdx) {
  const myStem = STEMS[stemIdx];

  const hapStemIdx = (stemIdx + 5) % 10;
  const hapBranchIdx = YUKHAP_MAP[branchIdx];
  const hapStem = STEMS[hapStemIdx];
  const hapBranch = BRANCHES[hapBranchIdx];
  const hapInfo = getPokemonInfo(hapStem, hapBranch);

  const sangStemIdx = (stemIdx + 8) % 10;
  const sangBranchIdx = (branchIdx + 4) % 12;
  const sangStem = STEMS[sangStemIdx];
  const sangBranch = BRANCHES[sangBranchIdx];
  const sangInfo = getPokemonInfo(sangStem, sangBranch);

  return {
    hap: {
      label: `천지덕합 · ${hapStem}${hapBranch}`,
      pokemon: hapInfo,
      reason: HAP_REASONS[myStem]
    },
    sangsaeng: {
      label: `상생삼합 · ${sangStem}${sangBranch}`,
      pokemon: sangInfo,
      reason: SANGSAENG_REASONS[myStem]
    }
  };
}

function getDayPillar(dateStr) {
  const [year, month, day] = dateStr.split("-").map(Number);
  const baseUtc = Date.UTC(2000, 0, 1);
  const targetUtc = Date.UTC(year, month - 1, day);
  const diffDays = Math.floor((targetUtc - baseUtc) / (1000 * 60 * 60 * 24));

  const index60 = ((54 + diffDays) % 60 + 60) % 60;
  const stemIdx = index60 % 10;
  const branchIdx = index60 % 12;

  return makePillar(stemIdx, branchIdx);
}

function makePillar(stemIdx, branchIdx) {
  return {
    stemIdx,
    branchIdx,
    stem: STEMS[stemIdx],
    branch: BRANCHES[branchIdx],
    hanja: `${STEMS_HANJA[stemIdx]}${BRANCHES_HANJA[branchIdx]}`
  };
}

/* ───────── 년주 · 월주 · 시주 (절기 기준) ───────── */

const KST_OFFSET_MS = 9 * 60 * 60 * 1000;

const HOUR_CENTER = {
  자: 0.5, 축: 2.5, 인: 4.5, 묘: 6.5, 진: 8.5, 사: 10.5,
  오: 12.5, 미: 14.5, 신: 16.5, 유: 18.5, 술: 20.5, 해: 22.5, unknown: 12
};

function sunLongitude(utcMs) {
  const jd = utcMs / 86400000 + 2440587.5 + 69 / 86400;
  const T = (jd - 2451545) / 36525;
  const rad = Math.PI / 180;
  const L0 = 280.46646 + 36000.76983 * T + 0.0003032 * T * T;
  const M = (357.52911 + 35999.05029 * T - 0.0001537 * T * T) * rad;
  const C =
    (1.914602 - 0.004817 * T - 0.000014 * T * T) * Math.sin(M) +
    (0.019993 - 0.000101 * T) * Math.sin(2 * M) +
    0.000289 * Math.sin(3 * M);
  const omega = (125.04 - 1934.136 * T) * rad;
  const lon = L0 + C - 0.00569 - 0.00478 * Math.sin(omega);
  return ((lon % 360) + 360) % 360;
}

function monthIndexAt(utcMs) {
  return Math.floor(((sunLongitude(utcMs) - 315 + 360) % 360) / 30);
}

function kstToUtcMs(y, m, d, hours) {
  return Date.UTC(y, m - 1, d) + hours * 3600000 - KST_OFFSET_MS;
}

function getFourPillars(dateStr, birthTime) {
  const [y, m, d] = dateStr.split("-").map(Number);
  const moment = kstToUtcMs(y, m, d, HOUR_CENTER[birthTime]);

  const monthIdx = monthIndexAt(moment);

  const sajuYear = m <= 2 && monthIdx >= 10 ? y - 1 : y;
  const yearStemIdx = (((sajuYear - 4) % 10) + 10) % 10;
  const yearBranchIdx = (((sajuYear - 4) % 12) + 12) % 12;
  const yearP = makePillar(yearStemIdx, yearBranchIdx);

  const monthStemIdx = ((yearStemIdx % 5) * 2 + 2 + monthIdx) % 10;
  const monthBranchIdx = (monthIdx + 2) % 12;
  const monthP = makePillar(monthStemIdx, monthBranchIdx);

  const dayP = getDayPillar(dateStr);

  let hourP = null;
  if (birthTime !== "unknown") {
    const hourBranchIdx = BRANCHES.indexOf(birthTime);
    const hourStemIdx = ((dayP.stemIdx % 5) * 2 + hourBranchIdx) % 10;
    hourP = makePillar(hourStemIdx, hourBranchIdx);
  }

  const boundaryDay =
    birthTime === "unknown" &&
    monthIndexAt(kstToUtcMs(y, m, d, 0)) !== monthIndexAt(kstToUtcMs(y, m, d, 23.99));

  return { year: yearP, month: monthP, day: dayP, hour: hourP, boundaryDay };
}

/* ───────── 오행 ───────── */

const ELEMENTS = [
  { key: "wood", name: "목", hanja: "木", trait: "성장·기획" },
  { key: "fire", name: "화", hanja: "火", trait: "열정·표현" },
  { key: "earth", name: "토", hanja: "土", trait: "안정·신뢰" },
  { key: "metal", name: "금", hanja: "金", trait: "결단·원칙" },
  { key: "water", name: "수", hanja: "水", trait: "지혜·유연" }
];

const STEM_ELEMENT = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4];
const BRANCH_ELEMENT = [4, 2, 0, 0, 2, 1, 1, 2, 3, 3, 2, 4];

function countElements(pillars) {
  const counts = [0, 0, 0, 0, 0];
  [pillars.year, pillars.month, pillars.day, pillars.hour].forEach((p) => {
    if (!p) return;
    counts[STEM_ELEMENT[p.stemIdx]]++;
    counts[BRANCH_ELEMENT[p.branchIdx]]++;
  });
  return counts;
}

function renderPillarTable(pillars) {
  const cols = [
    { label: "시주", p: pillars.hour },
    { label: "일주", p: pillars.day, me: true },
    { label: "월주", p: pillars.month },
    { label: "년주", p: pillars.year }
  ];

  const cell = (idx, hanja, hangul, elementIdx) =>
    idx === null
      ? `<div class="glyph glyph-empty"><span class="glyph-hanja">?</span><span class="glyph-hangul">모름</span></div>`
      : `<div class="glyph el-${ELEMENTS[elementIdx].key}">
           <span class="glyph-hanja">${hanja}</span>
           <span class="glyph-hangul">${hangul}${ELEMENTS[elementIdx].name}</span>
         </div>`;

  document.getElementById("pillar-table").innerHTML = cols
    .map(({ label, p, me }) => {
      const stem = p ? cell(p.stemIdx, STEMS_HANJA[p.stemIdx], p.stem, STEM_ELEMENT[p.stemIdx]) : cell(null);
      const branch = p
        ? cell(p.branchIdx, BRANCHES_HANJA[p.branchIdx], p.branch, BRANCH_ELEMENT[p.branchIdx])
        : cell(null);
      return `<div class="pillar-col${me ? " is-me" : ""}">
                <span class="pillar-label">${label}${me ? " · 나" : ""}</span>
                ${stem}${branch}
              </div>`;
    })
    .join("");
}

function renderElementChart(counts, total) {
  const max = Math.max(...counts);
  document.getElementById("element-chart").innerHTML = ELEMENTS.map((el, i) => {
    const pct = Math.round((counts[i] / total) * 100);
    return `<div class="el-row">
              <span class="el-name">${el.name}<small>${el.hanja}</small></span>
              <div class="el-track"><div class="el-bar el-${el.key}" style="width:${pct}%"></div></div>
              <span class="el-count${counts[i] === max ? " is-max" : ""}">${counts[i]}개</span>
            </div>`;
  }).join("");

  const strongest = ELEMENTS.filter((_, i) => counts[i] === max);
  const missing = ELEMENTS.filter((_, i) => counts[i] === 0);
  let summary = `<strong>${strongest.map((e) => `${e.name}(${e.hanja})`).join("·")}</strong> 기운이 가장 강해요 — ${strongest
    .map((e) => e.trait)
    .join(", ")}이 나의 무기!`;
  if (missing.length) {
    summary += ` 반면 <strong>${missing.map((e) => `${e.name}(${e.hanja})`).join("·")}</strong> 기운은 비어 있어서, 이 기운을 가진 파트너가 큰 힘이 돼요.`;
  } else {
    summary += " 다섯 가지 기운이 모두 있는 균형 잡힌 사주예요.";
  }
  document.getElementById("element-summary").innerHTML = summary;
}

const YANG_STEMS = ["갑", "병", "무", "경", "임"];

const YINYANG_TEXT = {
  same: {
    tag: "음양 일치형",
    text: "타고난 기운과 성별의 음양이 같은 방향이에요. 꾸밈없이 본래 성향이 그대로 드러나서, 학기 초 처음 만난 동기들도 '딱 보이는 그대로'라고 느끼는 타입입니다."
  },
  cross: {
    tag: "반전 매력형",
    text: "타고난 기운과 성별의 음양이 서로 엇갈려요. 첫인상과 친해진 뒤의 모습이 달라서, 같은 조나 동아리에서 오래 볼수록 의외의 매력이 터지는 타입입니다."
  }
};

/* ───────── 오늘의 일진 & 캠퍼스 십신 운세 ───────── */

const FORTUNE_DATA = {
  비견: {
    overall: "주관이 뚜렷해지고 내 공부 페이스를 지키기 좋은 날이에요. 주변 진도에 흔들리지 않고 내 할 일에 집중하면 성과가 따릅니다.",
    study: { level: "상승", tone: "good", text: "도서관이나 스터디카페에서 혼자 밀고 나가는 집중력이 강해집니다. 밀린 전공 복습이나 개인 과제를 끝내기에 딱 좋아요." },
    money: { level: "안정", tone: "steady", text: "큰 지출은 없지만 동기들과의 학식·카페 모임으로 소소한 지출이 생길 수 있어요. 오늘 쓸 예산 선만 미리 정해두세요." },
    love: { level: "무난", tone: "steady", text: "편안한 동기·친구 같은 대화가 잘 통합니다. 다만 의견이 갈릴 땐 고집을 살짝 내려놓으면 분위기가 훨씬 부드러워져요." },
    rest: { level: "충전", tone: "good", text: "공강 시간엔 여럿이 어울리기보다 이어폰을 끼고 혼자만의 여유를 즐기는 편이 오후 수업 집중에 훨씬 유리합니다." }
  },
  겁재: {
    overall: "승부욕과 의욕이 올라오지만 충동적인 결정은 조심해야 하는 날이에요. 페이스를 조절하면 바쁜 일정도 거뜬히 넘길 수 있습니다.",
    study: { level: "상승", tone: "good", text: "선의의 경쟁심이 좋은 자극이 됩니다. 친구와 타이머를 맞춰 놓고 분량 내기 공부를 하면 평소보다 속도가 확 붙어요." },
    money: { level: "주의", tone: "care", text: "스트레스성 배달음식이나 충동 쇼핑이 당기기 쉬운 날입니다. 장바구니 결제 버튼을 누르기 전 하루만 더 고민해 보세요." },
    love: { level: "신중", tone: "care", text: "사소한 질투심이나 자존심이 올라올 수 있어요. 틱틱거리기보다 솔직한 마음을 차분히 전하는 편이 오해를 줄여줍니다." },
    rest: { level: "관리", tone: "steady", text: "무리한 밤샘이나 빡빡한 약속은 체력 방전으로 이어질 수 있어요. 오늘은 일찍 귀가해 수면 시간을 확보하는 게 최고입니다." }
  },
  식신: {
    overall: "마음에 여유가 생기고 아이디어와 표현력이 자연스럽게 흘러나오는 기분 좋은 캠퍼스 데이입니다.",
    study: { level: "매우 좋음", tone: "high", text: "한 가지 주제에 깊게 몰입하는 힘이 발휘됩니다. 단순 암기보다 백지에 직접 개념을 정리해 보는 공부법이 특히 잘 먹혀요." },
    money: { level: "상승", tone: "good", text: "알바나 꾸준한 노력이 기분 좋은 보상으로 돌아옵니다. 나를 위한 맛있는 학식 특식이나 달달한 디저트 소비는 길해요." },
    love: { level: "매우 좋음", tone: "high", text: "다정하고 유쾌한 매력이 돋보여 동아리나 수업에서 자연스럽게 호감을 얻습니다. 가벼운 스몰토크가 좋은 인연으로 이어져요." },
    rest: { level: "최고", tone: "high", text: "공강 시간에 맛집을 탐방하거나 취미 생활을 즐기면 스트레스가 말끔히 풀립니다. 기분 전환이 곧 학업 효율로 연결돼요." }
  },
  상관: {
    overall: "감각이 예리해지고 기존의 틀을 깨는 기발한 아이디어가 떠오르는 날이에요. 팀플이나 대화에서 말투만 살짝 부드럽게 다듬어 보세요.",
    study: { level: "매우 좋음", tone: "high", text: "기획안 작성, 발표, 레포트 구성에서 뛰어난 센스를 발휘합니다. 안 풀리던 문제도 다른 관점으로 접근하면 의외로 쉽게 풀려요." },
    money: { level: "변동", tone: "steady", text: "단기 알바나 공모전·이벤트 혜택 소식이 보이지만, 기분에 따른 소비도 함께 커질 수 있으니 지출 내역을 한 번 체크하세요." },
    love: { level: "매력 상승", tone: "good", text: "센스 있는 리액션과 솔직한 표현으로 시선을 끕니다. 직설적인 농담만 조금 조심하면 호감도가 급상승하는 날이에요." },
    rest: { level: "활력", tone: "good", text: "답답한 열람실보다 새로운 카페나 캠퍼스 산책로를 걸으며 머리를 식히면 막혔던 생각이 시원하게 정리됩니다." }
  },
  편재: {
    overall: "활동 반경이 넓어지고 새로운 기회와 캠퍼스 정보가 빠르게 들어오는 역동적인 날입니다.",
    study: { level: "무난", tone: "steady", text: "주변에서 부르는 곳도 많고 연락도 잦아 집중력이 흩어질 수 있어요. 스마트폰 알림을 꺼두고 50분 단위 집중 루틴을 돌려보세요." },
    money: { level: "매우 좋음", tone: "high", text: "뜻밖의 용돈, 쿠폰 이벤트, 알바 보너스 등 기분 좋은 재물 흐름이 들어옵니다. 다만 들어온 만큼 한 번에 쓰지 않도록 관리하세요." },
    love: { level: "상승", tone: "good", text: "연합 동아리, 교양 수업, 개강·종강 모임처럼 새로운 자리에서 설레는 인연을 만날 확률이 높습니다. 먼저 반갑게 인사해 보세요." },
    rest: { level: "적극", tone: "good", text: "가만히 누워 있기보다 친구들과 가볍게 어울리거나 새로운 장소를 탐방할 때 오히려 에너지가 충전되는 날입니다." }
  },
  정재: {
    overall: "성실하게 쌓아온 노력이 학점과 현실적인 결과로 이어지는 안정적이고 든든한 날이에요.",
    study: { level: "매우 좋음", tone: "high", text: "꼼꼼함과 지구력이 빛을 발합니다. 오답 노트 정리, 출석·과제 마감 체크처럼 디테일이 중요한 전공 공부에 가장 강해요." },
    money: { level: "매우 좋음", tone: "high", text: "계획적인 소비와 알바비 저축에 최적화된 날입니다. 불필요한 정기구독을 정리하거나 필요한 전공 서적을 합리적으로 구하기 좋아요." },
    love: { level: "안정", tone: "good", text: "진중하고 믿음직한 태도가 상대에게 깊은 신뢰를 줍니다. 사소한 약속이라도 정확히 지키면 호감이 단단하게 자리 잡아요." },
    rest: { level: "평온", tone: "good", text: "밀린 방 정리나 다음 주 시간표·일정표를 깔끔하게 정돈하며 보내는 공강 시간이 마음의 안정을 가져다줍니다." }
  },
  편관: {
    overall: "과제나 일정 압박감이 느껴질 수 있지만, 정면으로 돌파해 내면 한 단계 성장하는 계기가 되는 날입니다.",
    study: { level: "상승", tone: "good", text: "마감이 임박한 과제나 퀴즈 대비에서 놀라운 추진력이 나옵니다. 우선순위 1가지를 정해 끝까지 밀어붙여 보세요." },
    money: { level: "안정", tone: "steady", text: "돈을 쓰기보다 학업과 일정을 소화하느라 바쁜 하루입니다. 컨디션 유지를 위한 영양제나 따뜻한 식사 지출은 아끼지 마세요." },
    love: { level: "설렘", tone: "good", text: "자기 일에 몰입하는 진지한 모습이나 평소와 다른 반전 스타일의 사람에게 끌릴 수 있어요. 과한 긴장만 풀면 좋은 흐름이 옵니다." },
    rest: { level: "주의", tone: "care", text: "과부하가 걸리기 쉬운 날이니 공강 시간만큼은 과제 생각을 잠시 내려놓고 눈을 감거나 스트레칭으로 긴장을 풀어주세요." }
  },
  정관: {
    overall: "교수님과 팀원들에게 신뢰를 얻기 좋은 반듯한 기운의 날이에요. 정석대로 차분하게 움직이면 모든 일이 순조롭습니다.",
    study: { level: "매우 좋음", tone: "high", text: "규칙적인 공부 루틴이 완벽하게 작동합니다. 강의 내용을 빠짐없이 필기하고 계획표대로 진도를 나가면 기대 이상의 성취감을 얻어요." },
    money: { level: "안정", tone: "good", text: "정당한 알바 급여나 장학·근로 혜택처럼 안정적인 수입 흐름이 유지됩니다. 계획에 없던 지출만 피하면 지갑이 든든해요." },
    love: { level: "매우 좋음", tone: "high", text: "예의 바르고 진정성 있는 태도가 좋은 인연을 부릅니다. 소개팅이나 진지한 대화를 나누기에 더없이 좋은 기운의 날이에요." },
    rest: { level: "균형", tone: "good", text: "낮에는 집중해서 움직이고 저녁에는 정해진 시간에 딱 쉬어주는 규칙적인 리듬이 내일 컨디션까지 최상으로 만들어 줍니다." }
  },
  편인: {
    overall: "직관력과 통찰이 깊어지는 날이에요. 겉으로 드러나는 분주함보다 내면의 생각과 전공 개념을 깊이 파고드는 데 유리합니다.",
    study: { level: "상승", tone: "good", text: "남들이 놓치는 핵심 원리를 꿰뚫어 보는 날입니다. 심화 개념 이해나 논문·자료 리서치에서 뛰어난 집중력을 발휘해요." },
    money: { level: "주의", tone: "care", text: "정보가 많을수록 판단이 흔들릴 수 있어요. 충동적인 인강·앱 결제나 큰 금액이 나가는 소비는 내일로 미루는 편이 좋습니다." },
    love: { level: "신중", tone: "steady", text: "혼자만의 시간이 필요하거나 생각이 많아질 수 있어요. 연락이 조금 늦어질 땐 미리 솔직하게 컨디션을 공유하면 편안해집니다." },
    rest: { level: "최고", tone: "high", text: "조용한 공간에서 좋아하는 음악을 듣거나 낮잠을 자며 에너지를 비축하는 공강 시간이 최고의 보약이 됩니다." }
  },
  정인: {
    overall: "주변의 도움과 따뜻한 응원이 따라주는 편안한 날이에요. 배움과 휴식을 통해 에너지를 충전하기 좋습니다.",
    study: { level: "매우 좋음", tone: "high", text: "이해력과 흡수력이 최고조에 달하는 날입니다. 교수님 설명이나 온라인 강의, 자격증·어학 공부 모두 막힘없이 머리에 잘 들어와요." },
    money: { level: "상승", tone: "good", text: "선배나 주변으로부터 기프티콘·밥약 선물을 받거나 실질적인 도움을 얻기 쉽습니다. 책이나 자기계발 투자가 길해요." },
    love: { level: "매우 좋음", tone: "high", text: "상대의 마음을 잘 헤아려 주는 배려심 덕분에 관계가 한층 따뜻해집니다. 고마웠던 동기나 호감 가는 사람에게 먼저 연락해 보세요." },
    rest: { level: "충전", tone: "good", text: "마음이 편안해지는 날이라 짧은 휴식만으로도 피로가 빠르게 풀립니다. 좋아하는 음료 한 잔과 함께 여유로운 하루를 보내세요." }
  }
};

function getTenGod(myStemIdx, targetStemIdx) {
  const myEl = Math.floor(myStemIdx / 2);
  const targetEl = Math.floor(targetStemIdx / 2);
  const samePol = myStemIdx % 2 === targetStemIdx % 2;
  const diff = (targetEl - myEl + 5) % 5;

  const table = [
    ["비견", "겁재"],
    ["식신", "상관"],
    ["편재", "정재"],
    ["편관", "정관"],
    ["편인", "정인"]
  ];
  return table[diff][samePol ? 0 : 1];
}

function renderTodayFortune(myStemIdx) {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const d = String(now.getDate()).padStart(2, "0");

  const todayPillar = getDayPillar(`${y}-${m}-${d}`);
  const tenGod = getTenGod(myStemIdx, todayPillar.stemIdx);
  const f = FORTUNE_DATA[tenGod];

  document.getElementById("today-pillar-tag").textContent =
    `${now.getMonth() + 1}.${now.getDate()} ${todayPillar.stem}${todayPillar.branch}(${todayPillar.hanja})일 · ${tenGod}`;
  document.getElementById("fortune-overall").textContent = f.overall;

  const setItem = (key, data) => {
    const badge = document.getElementById(`fortune-${key}-badge`);
    badge.textContent = data.level;
    badge.className = `fortune-badge badge-${data.tone}`;
    document.getElementById(`fortune-${key}-text`).textContent = data.text;
  };

  setItem("study", f.study);
  setItem("money", f.money);
  setItem("love", f.love);
  setItem("rest", f.rest);
}

/* ───────── 모드 전환 & 친구 궁합 (URL 초대 + 둘이서 바로 궁합) ───────── */

let activeMode = "solo";
let invitedFriend = null;

const tabSolo = document.getElementById("tab-solo");
const tabDuo = document.getElementById("tab-duo");
const myBlockLabel = document.getElementById("my-block-label");
const duoFields = document.getElementById("duo-fields");
const submitBtn = document.getElementById("submit-btn");

function setMode(mode) {
  activeMode = mode;
  const isDuo = mode === "duo";
  tabSolo.classList.toggle("is-active", !isDuo);
  tabSolo.setAttribute("aria-selected", String(!isDuo));
  tabDuo.classList.toggle("is-active", isDuo);
  tabDuo.setAttribute("aria-selected", String(isDuo));

  myBlockLabel.classList.toggle("hidden", !isDuo);
  duoFields.classList.toggle("hidden", !isDuo);
  submitBtn.textContent = isDuo ? "둘이서 궁합 & 결과 확인하기" : "결과 카드 확인하기";
}

tabSolo.addEventListener("click", () => setMode("solo"));
tabDuo.addEventListener("click", () => setMode("duo"));

function parseFriendFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const fp = params.get("fp");
  if (!fp || fp.length !== 2) return null;

  const stem = fp[0];
  const branch = fp[1];
  const stemIdx = STEMS.indexOf(stem);
  const branchIdx = BRANCHES.indexOf(branch);
  if (stemIdx === -1 || branchIdx === -1 || !PILLAR_POKEMON[fp]) return null;

  const rawName = (params.get("fn") || "").trim().slice(0, 10);
  const name = rawName || "친구";
  const pillar = makePillar(stemIdx, branchIdx);
  const info = getPokemonInfo(stem, branch);

  return { name, pillar, info };
}

function initFriendInviteBanner() {
  invitedFriend = parseFriendFromUrl();
  const banner = document.getElementById("friend-invite-banner");
  if (!invitedFriend) {
    banner.classList.add("hidden");
    return;
  }

  document.getElementById("friend-invite-img").src = invitedFriend.info.img;
  document.getElementById("friend-invite-title").textContent =
    `${invitedFriend.name}님의 파트너는 ${invitedFriend.info.pokemonName} (${invitedFriend.pillar.stem}${invitedFriend.pillar.branch}일주)!`;
  document.getElementById("friend-invite-desc").textContent =
    `내 생년월일을 입력하면 ${invitedFriend.name}님과의 팀플·우정 궁합 점수도 바로 계산해 드려요.`;
  banner.classList.remove("hidden");
}

document.getElementById("clear-friend-btn").addEventListener("click", () => {
  invitedFriend = null;
  document.getElementById("friend-invite-banner").classList.add("hidden");
  const cleanUrl = window.location.origin + window.location.pathname;
  window.history.replaceState({}, "", cleanUrl);
});

function isBranchYukHap(b1, b2) {
  return YUKHAP_MAP[b1] === b2;
}

function isBranchSamHap(b1, b2) {
  return b1 !== b2 && b1 % 4 === b2 % 4;
}

function calcCompatibility(myPillar, friendPillar, myName, friendName) {
  const s1 = myPillar.stemIdx;
  const s2 = friendPillar.stemIdx;
  const el1 = STEM_ELEMENT[s1];
  const el2 = STEM_ELEMENT[s2];
  const yukHap = isBranchYukHap(myPillar.branchIdx, friendPillar.branchIdx);
  const samHap = isBranchSamHap(myPillar.branchIdx, friendPillar.branchIdx);

  let score = 84;
  let headline = "";
  let desc = "";

  if ((s1 + 5) % 10 === s2 && yukHap) {
    score = 100;
    headline = "천지덕합 · 60갑자 중 단 하나뿐인 운명의 베스트 파트너";
    desc = `${myName}님과 ${friendName}님은 겉(천간합)과 속마음(지지육합)이 동시에 맞물리는 희귀한 천지덕합 관계예요! 기획부터 마무리까지 빈틈없이 채워주는 최고의 캠퍼스 단짝입니다.`;
  } else if ((s1 + 5) % 10 === s2) {
    score = 97;
    headline = "천간합 · 눈빛만 봐도 역할 분담 끝나는 천생연분 콤비";
    desc = `${myName}님과 ${friendName}님은 서로의 빈틈을 자석처럼 끌어당겨 채워주는 천간합 관계예요. 한 명이 기획을 열면 다른 한 명이 디테일을 완성해 조별과제 A+ 확률이 가장 높은 조합입니다.`;
  } else if ((el2 + 1) % 5 === el1) {
    score = 94;
    headline = "상생 시너지 · 나를 성장시켜 주는 특급 캠퍼스 서포터";
    desc = `${friendName}님의 기운이 ${myName}님의 에너지를 자연스럽게 북돋워 주는 상생 관계예요. 시험기간에 지칠 때 옆에 있으면 아이디어와 의욕이 샘솟는 든든한 존재입니다.`;
  } else if ((el1 + 1) % 5 === el2) {
    score = 92;
    headline = "상생 시너지 · 내가 아낌없이 챙겨주게 되는 환상의 후배·동기 케미";
    desc = `${myName}님의 기운이 ${friendName}님의 잠재력을 활짝 열어주는 상생 관계예요. 함께 팀을 이루면 자연스럽게 호흡이 맞고 결과물의 완성도가 쑥쑥 올라갑니다.`;
  } else if (s1 === s2 && myPillar.branchIdx === friendPillar.branchIdx) {
    score = 95;
    headline = "60갑자 쌍둥이 · 생각부터 행동 패턴까지 소름 돋는 소울메이트";
    desc = `천간과 지지까지 완벽히 일치하는 같은 일주 콤비예요! 말하지 않아도 고민 포인트와 일 처리 속도가 똑같아서 눈빛만 봐도 통하는 환상의 단짝입니다.`;
  } else if (s1 === s2) {
    score = 90;
    headline = "도플갱어 콤비 · 말 안 해도 취향과 가치관이 통하는 단짝";
    desc = `타고난 일간 기운이 같아서 개그 코드부터 목표 지향점까지 잘 통하는 사이예요. 공강 시간에 함께 수다 떨거나 스터디 메이트로 뭉치면 시간 가는 줄 모릅니다.`;
  } else if (el1 === el2) {
    score = 87;
    headline = "동기 케미 · 같은 방향을 바라보며 시너지를 내는 파트너";
    desc = `같은 오행 기운을 공유하면서도 음양이 달라 서로 다른 매력을 보여주는 관계예요. 비슷한 목표를 향해 달려갈 때 서로에게 가장 좋은 자극제가 되어줍니다.`;
  } else {
    score = 83;
    headline = "상호보완 듀오 · 다른 시각으로 빈틈을 메워주는 전략 파트너";
    desc = `서로 다른 오행 기운을 가지고 있어 처음엔 스타일이 다르게 느껴질 수 있지만, 막상 함께 일하면 내가 놓친 부분을 상대가 정확히 짚어주는 알짜배기 조합입니다.`;
  }

  if (score < 100 && yukHap) {
    score = Math.min(99, score + 3);
    desc += " 게다가 속마음(지지 육합)까지 잘 맞아 오래 함께할수록 신뢰가 깊어지는 사이예요.";
  } else if (score < 100 && samHap) {
    score = Math.min(99, score + 2);
    desc += " 여기에 행동 방향(지지 삼합)까지 같은 팀을 이루어 함께 움직일 때 시너지가 배가 됩니다.";
  }

  return { score, headline, desc };
}

function renderFriendCompatibility(myPillar, myInfo, myName, partnerData) {
  const section = document.getElementById("friend-compat-section");
  if (!partnerData) {
    section.classList.add("hidden");
    return;
  }

  const displayMyName = myName === "당신" ? "나" : myName;
  const result = calcCompatibility(myPillar, partnerData.pillar, displayMyName, partnerData.name);

  document.getElementById("compat-score-badge").textContent = `${result.score}점`;
  setPokemonImage(document.getElementById("compat-my-img"), myInfo.img, myInfo.pokemonName);
  document.getElementById("compat-my-name").textContent = `${displayMyName} (${myInfo.pokemonName})`;

  setPokemonImage(
    document.getElementById("compat-friend-img"),
    partnerData.info.img,
    partnerData.info.pokemonName
  );
  document.getElementById("compat-friend-name").textContent =
    `${partnerData.name} (${partnerData.info.pokemonName})`;

  document.getElementById("compat-headline").textContent = result.headline;
  document.getElementById("compat-desc").textContent = result.desc;
  section.classList.remove("hidden");
}

/* ───────── 입력 폼 초기화 및 이벤트 ───────── */

const YEAR_MIN = 1930;
const YEAR_MAX = 2050;

const form = document.getElementById("test-form");
const inputSection = document.getElementById("input-section");
const loadingSection = document.getElementById("loading-section");
const resultSection = document.getElementById("result-section");

const yearSel = document.getElementById("birth-year");
const monthSel = document.getElementById("birth-month");
const daySel = document.getElementById("birth-day");
const leapWrap = document.getElementById("leap-wrap");
const leapCheck = document.getElementById("is-leap");
const dateError = document.getElementById("date-error");

const friendYearSel = document.getElementById("friend-year");
const friendMonthSel = document.getElementById("friend-month");
const friendDaySel = document.getElementById("friend-day");
const friendLeapWrap = document.getElementById("friend-leap-wrap");
const friendLeapCheck = document.getElementById("friend-is-leap");
const friendDateError = document.getElementById("friend-date-error");

let latestMyPillar = null;
let latestUserName = "친구";

function getRadio(name) {
  return document.querySelector(`input[name="${name}"]:checked`).value;
}

function fillSelect(sel, from, to, suffix, selected) {
  sel.innerHTML = "";
  const step = from <= to ? 1 : -1;
  for (let v = from; step > 0 ? v <= to : v >= to; v += step) {
    const opt = document.createElement("option");
    opt.value = v;
    opt.textContent = `${v}${suffix}`;
    if (v === selected) opt.selected = true;
    sel.appendChild(opt);
  }
}

function bindDateSelectors(yEl, mEl, dEl, calName, lWrap, lCheck, errEl) {
  const refresh = () => {
    const y = Number(yEl.value);
    const m = Number(mEl.value);
    const current = Number(dEl.value) || 1;
    const maxDay = getRadio(calName) === "lunar" ? 30 : new Date(Date.UTC(y, m, 0)).getUTCDate();
    fillSelect(dEl, 1, maxDay, "일", Math.min(current, maxDay));
  };

  fillSelect(yEl, YEAR_MAX, YEAR_MIN, "년", 2004);
  fillSelect(mEl, 1, 12, "월", 1);
  fillSelect(dEl, 1, 31, "일", 1);

  yEl.addEventListener("change", refresh);
  mEl.addEventListener("change", refresh);
  document.querySelectorAll(`input[name="${calName}"]`).forEach((r) =>
    r.addEventListener("change", () => {
      const isLunar = getRadio(calName) === "lunar";
      lWrap.classList.toggle("hidden", !isLunar);
      if (!isLunar) lCheck.checked = false;
      errEl.classList.add("hidden");
      refresh();
    })
  );
}

bindDateSelectors(yearSel, monthSel, daySel, "calendar", leapWrap, leapCheck, dateError);
bindDateSelectors(
  friendYearSel,
  friendMonthSel,
  friendDaySel,
  "friend-calendar",
  friendLeapWrap,
  friendLeapCheck,
  friendDateError
);
initFriendInviteBanner();

function showFieldError(el, msg) {
  el.textContent = msg;
  el.classList.remove("hidden");
}

function toSolarDate(calendar, y, m, d, isLeap, errEl) {
  const pad = (n) => String(n).padStart(2, "0");
  if (calendar === "solar") return `${y}-${pad(m)}-${pad(d)}`;

  if (typeof KoreanLunarCalendar === "undefined") {
    showFieldError(errEl, "음력 변환 기능을 불러오지 못했어요. 인터넷 연결을 확인해 주세요.");
    return null;
  }
  const cal = new KoreanLunarCalendar();
  if (!cal.setLunarDate(y, m, d, isLeap)) {
    showFieldError(
      errEl,
      isLeap
        ? `음력 ${y}년에는 윤${m}월이 없거나, 해당 날짜가 존재하지 않아요.`
        : `음력 ${y}년 ${m}월에는 ${d}일이 없어요. (작은 달은 29일까지)`
    );
    return null;
  }
  const s = cal.getSolarCalendar();
  return `${s.year}-${pad(s.month)}-${pad(s.day)}`;
}

function setPokemonImage(el, src, alt) {
  el.crossOrigin = "anonymous";
  el.src = src;
  el.alt = alt;
}

function runLoadingTransition(onComplete) {
  const stepText = document.getElementById("loading-step-text");
  const barFill = document.getElementById("loading-bar-fill");

  inputSection.classList.add("hidden");
  loadingSection.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });

  barFill.style.width = "18%";
  stepText.textContent = "60갑자 일주와 사주 명식을 계산하고 있어요...";

  setTimeout(() => {
    barFill.style.width = "62%";
    stepText.textContent = "오행 균형과 내 파트너 포켓몬을 매칭하는 중...";
  }, 450);

  setTimeout(() => {
    barFill.style.width = "100%";
    stepText.textContent = "오늘의 캠퍼스 운세와 궁합 카드를 완성했어요!";
  }, 950);

  setTimeout(() => {
    loadingSection.classList.add("hidden");
    barFill.style.width = "0%";
    resultSection.classList.remove("hidden");
    resultSection.classList.add("fade-in");
    if (onComplete) onComplete();
  }, 1350);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  dateError.classList.add("hidden");
  friendDateError.classList.add("hidden");

  const rawInputName = document.getElementById("user-name").value.trim();
  const userName = rawInputName || "당신";
  latestUserName = rawInputName || "친구";

  const gender = getRadio("gender");
  const calendar = getRadio("calendar");
  const isLeap = calendar === "lunar" && leapCheck.checked;
  const y = Number(yearSel.value);
  const m = Number(monthSel.value);
  const d = Number(daySel.value);
  const birthTime = document.getElementById("birth-time").value;

  const birthDate = toSolarDate(calendar, y, m, d, isLeap, dateError);
  if (!birthDate) return;

  // 둘이서 바로 궁합 모드일 때 상대방 날짜 변환 및 검증
  let partnerForCompat = invitedFriend;
  if (activeMode === "duo") {
    const fName = document.getElementById("friend-name").value.trim() || "상대방";
    const fCal = getRadio("friend-calendar");
    const fLeap = fCal === "lunar" && friendLeapCheck.checked;
    const fy = Number(friendYearSel.value);
    const fm = Number(friendMonthSel.value);
    const fd = Number(friendDaySel.value);

    const fSolar = toSolarDate(fCal, fy, fm, fd, fLeap, friendDateError);
    if (!fSolar) return;

    const fPillar = getDayPillar(fSolar);
    partnerForCompat = {
      name: fName,
      pillar: fPillar,
      info: getPokemonInfo(fPillar.stem, fPillar.branch)
    };
  }

  const pillars = getFourPillars(birthDate, birthTime);
  const pillar = pillars.day;
  const info = getPokemonInfo(pillar.stem, pillar.branch);
  latestMyPillar = pillar;

  // 사주 명식 + 오행 분포
  renderPillarTable(pillars);
  const counts = countElements(pillars);
  renderElementChart(counts, pillars.hour ? 8 : 6);
  const notes = [];
  if (!pillars.hour) notes.push("태어난 시간을 모르면 시주를 뺀 6글자로 분석해요.");
  if (pillars.boundaryDay)
    notes.push("이날은 절기가 바뀌는 날이라, 태어난 시간에 따라 월주가 달라질 수 있어요.");
  const noteEl = document.getElementById("saju-note");
  noteEl.textContent = notes.join(" ");
  noteEl.classList.toggle("hidden", notes.length === 0);

  // 1. 메인 결과 정보 세팅
  const timeText = birthTime === "unknown" ? "" : ` · ${birthTime}시생`;
  document.getElementById("result-pillar").textContent =
    `${pillar.stem}${pillar.branch}(${pillar.hanja})일주${timeText}`;
  document.getElementById("result-dex-no").textContent = info.dexNo;

  const genderText = gender === "male" ? "남성" : "여성";
  const inputText =
    calendar === "lunar"
      ? `음력${isLeap ? "(윤달)" : ""} ${y}.${m}.${d}`
      : `양력 ${y}.${m}.${d}`;
  const [sy, sm, sd] = birthDate.split("-").map(Number);
  const solarNote = calendar === "lunar" ? ` → 양력 ${sy}.${sm}.${sd}` : "";
  document.getElementById("result-birth").textContent =
    `${genderText} · ${inputText}${solarNote}`;

  const stemIsYang = YANG_STEMS.includes(pillar.stem);
  const genderIsYang = gender === "male";
  const yy = YINYANG_TEXT[stemIsYang === genderIsYang ? "same" : "cross"];
  document.getElementById("yinyang-tag").textContent =
    `${stemIsYang ? "양(陽)" : "음(陰)"} 일간 · ${genderText} · ${yy.tag}`;
  document.getElementById("yinyang-text").textContent = yy.text;

  document.getElementById("branch-tag").textContent = info.branchTag;
  document.getElementById("branch-text").textContent = info.branchDesc;

  setPokemonImage(document.getElementById("result-img"), info.img, info.pokemonName);

  document.getElementById("result-user").textContent =
    userName === "당신" ? "당신의 파트너 포켓몬" : `${userName}님의 파트너 포켓몬`;
  document.getElementById("result-title").textContent = info.pokemonName;
  document.getElementById("result-subtitle").textContent = info.subtitle;
  document.getElementById("result-desc").textContent = info.desc;

  const keywordContainer = document.getElementById("result-keywords");
  keywordContainer.innerHTML = info.keywords
    .map((kw) => `<span class="keyword-chip">${kw}</span>`)
    .join("");

  document.getElementById("result-card").className = `result-box ${info.theme}`;

  // 2. 캠퍼스 능력치 스탯 세팅
  renderCampusStats(pillar);

  // 3. 궁합 카드 세팅 (URL 초대 또는 둘이서 바로 궁합)
  renderFriendCompatibility(pillar, info, userName, partnerForCompat);

  // 4. 캠퍼스 파트너 세팅 (천지덕합 & 상생삼합)
  const partners = getPartnerPillars(pillar.stemIdx, pillar.branchIdx);

  document.getElementById("hap-badge").textContent = partners.hap.label;
  setPokemonImage(document.getElementById("hap-img"), partners.hap.pokemon.img, partners.hap.pokemon.pokemonName);
  document.getElementById("hap-name").textContent = partners.hap.pokemon.pokemonName;
  document.getElementById("hap-reason").textContent = partners.hap.reason;

  document.getElementById("sangsaeng-badge").textContent = partners.sangsaeng.label;
  setPokemonImage(
    document.getElementById("sangsaeng-img"),
    partners.sangsaeng.pokemon.img,
    partners.sangsaeng.pokemon.pokemonName
  );
  document.getElementById("sangsaeng-name").textContent = partners.sangsaeng.pokemon.pokemonName;
  document.getElementById("sangsaeng-reason").textContent = partners.sangsaeng.reason;

  // 5. 오늘의 캠퍼스 운세 세팅
  renderTodayFortune(pillar.stemIdx);

  // 로딩 애니메이션 후 결과 화면 표시
  runLoadingTransition();
});

document.getElementById("retry-btn").addEventListener("click", () => {
  document.getElementById("copy-msg").classList.add("hidden");
  resultSection.classList.add("hidden");
  inputSection.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.getElementById("copy-btn").addEventListener("click", async () => {
  const shareUrl = new URL(window.location.origin + window.location.pathname);
  if (latestMyPillar) {
    shareUrl.searchParams.set("fn", latestUserName);
    shareUrl.searchParams.set("fp", `${latestMyPillar.stem}${latestMyPillar.branch}`);
  }
  const finalLink = shareUrl.toString();

  try {
    await navigator.clipboard.writeText(finalLink);
    document.getElementById("copy-msg").classList.remove("hidden");
  } catch {
    const temp = document.createElement("textarea");
    temp.value = finalLink;
    document.body.appendChild(temp);
    temp.select();
    document.execCommand("copy");
    document.body.removeChild(temp);
    document.getElementById("copy-msg").classList.remove("hidden");
  }
});

// 결과 카드 PNG 이미지 저장 (PC·모바일 호환 Blob 다운로드)
const saveImgBtn = document.getElementById("save-img-btn");
saveImgBtn.addEventListener("click", async () => {
  if (typeof html2canvas === "undefined") {
    alert("이미지 저장 기능을 불러오지 못했어요. 새로고침 후 다시 시도해 주세요.");
    return;
  }

  const target = document.getElementById("result-card");
  const userName = document.getElementById("user-name").value.trim() || "나의";
  const pokemonName = document.getElementById("result-title").textContent.trim() || "포켓몬";
  const fileName = `${userName}_파트너포켓몬_${pokemonName}.png`;

  const originalLabel = saveImgBtn.textContent;
  saveImgBtn.disabled = true;
  saveImgBtn.textContent = "이미지 생성 중...";

  try {
    const canvas = await html2canvas(target, {
      scale: 2,
      useCORS: true,
      allowTaint: false,
      backgroundColor: "#ffffff"
    });

    await new Promise((resolve, reject) => {
      canvas.toBlob((blob) => {
        if (!blob) {
          reject(new Error("Blob creation failed"));
          return;
        }
        const blobUrl = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = blobUrl;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setTimeout(() => URL.revokeObjectURL(blobUrl), 1000);
        resolve();
      }, "image/png");
    });
  } catch (err) {
    alert("이미지 저장 중 오류가 발생했어요. 화면 캡처 기능을 이용해 주세요.");
  } finally {
    saveImgBtn.disabled = false;
    saveImgBtn.textContent = originalLabel;
  }
});
