/** SectionProgressProjects 에서 사용 */
export const _myProjects: MyProject[] = [
  {
    id: 1,
    title: "포트폴리오 아카이빙 서비스 개발",
    teamName: "YooHoo",
    members: [
      {
        id: 1,
        avatarImage: "https://source.unsplash.com/random/300x300?person",
        coverImage: "https://source.unsplash.com/random/400x300?office",
        name: "김아영",
        type: "예리한 분석가형",
        role: "개발자",
        workTendency: ["통찰력있는", "계획적인", "주도적인", "관찰력이뛰어난"],
        skills: ["notion", "slack"],
      },
      {
        id: 2,
        avatarImage: "https://source.unsplash.com/random/300x300?woman",
        coverImage: "https://source.unsplash.com/random/400x300?tech",
        name: "이준호",
        type: "혁신적인 창조형",
        role: "디자이너",
        workTendency: ["창의적인", "직관적인", "개방적인", "융통성있는"],
        skills: ["photoshop", "illustrator"],
      },
      {
        id: 3,
        avatarImage: "https://source.unsplash.com/random/300x300?man",
        coverImage: "https://source.unsplash.com/random/400x300?business",
        name: "박수진",
        type: "목표지향적 전략가형",
        role: "마케터",
        workTendency: ["체계적인", "분석적인", "목표지향적인", "결과중심적인"],
        skills: ["google analytics", "SEO"],
      },
    ],
  },
  {
    id: 2,
    title: "핀테크 모바일 앱서비스 제안",
    teamName: "죽밥",

    members: [
      {
        id: 4,
        avatarImage: "https://source.unsplash.com/random/300x300?person&sig=4",
        coverImage:
          "https://source.unsplash.com/random/400x300?workplace&sig=4",
        name: "장민준",
        type: "실용적인 실천가형",
        role: "운영자",
        workTendency: ["체계적인", "효율적인", "실용적인", "규칙을중시하는"],
        skills: ["linux", "shell scripting"],
      },
      {
        id: 5,
        avatarImage: "https://source.unsplash.com/random/300x300?person&sig=5",
        coverImage: "https://source.unsplash.com/random/400x300?computer&sig=5",
        name: "최유리",
        type: "대담한 모험가형",
        role: "프로젝트 매니저",
        workTendency: ["대담한", "모험적인", "자유로운 영혼", "융통성있는"],
        skills: ["jira", "scrum"],
      },
      {
        id: 6,
        avatarImage: "https://source.unsplash.com/random/300x300?person&sig=6",
        coverImage: "https://source.unsplash.com/random/400x300?meeting&sig=6",
        name: "김태현",
        type: "친화적인 조력자형",
        role: "인사담당자",
        workTendency: ["인간중심적인", "협력적인", "친화적인", "지원적인"],
        skills: ["communication", "team building"],
      },
      {
        id: 7,
        avatarImage: "https://source.unsplash.com/random/300x300?person&sig=7",
        coverImage: "https://source.unsplash.com/random/400x300?strategy&sig=7",
        name: "황보미",
        type: "안정적인 관리자형",
        role: "데이터 분석가",
        workTendency: ["분석적인", "신중한", "실질적인", "체계적인"],
        skills: ["SQL", "data analysis"],
      },
      {
        id: 8,
        avatarImage: "https://source.unsplash.com/random/300x300?person&sig=8",
        coverImage: "https://source.unsplash.com/random/400x300?coding&sig=8",
        name: "서하준",
        type: "논리적인 사색가형",
        role: "백엔드 개발자",
        workTendency: [
          "논리적인",
          "분석적인",
          "독립적인",
          "원리원칙을중시하는",
        ],
        skills: ["node.js", "database design"],
      },
    ],
  },
];

/** SectionAllProjects 에서 사용 */
export const _allprojects: Project[] = [
  {
    id: 1,
    title: "기 개발된 사이트의 고도화 디자인, 개발",
    description:
      "이미 운영 중인 인지 훈련 웹사이트가 있고, 그 내용을 어플로 제작하고 싶습니다. 보유 중인 소스코드는 없으며, 모바일 기획부터 어려움을 느껴",
    // recruitmentStatus: null,
    recruitmentPeriod: "1주",
    memberQuota: { 프론트: 2, 디자이너: 3 },
    currentMemberCount: 3,
    totalMemberCount: 4,
    workTendencyMatchingRate: 98,
  },
  {
    id: 2,
    title: "새로운 모바일 앱 UI/UX 디자인",
    description:
      "혁신적인 사용자 경험을 제공할 모바일 앱의 UI/UX 디자인 프로젝트입니다. 사용자 중심의 디자인을 추구하며, 창의적인 아이디어가 많은 디자이너를 기다립니다.",
    recruitmentStatus: new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000), // 5일 후
    recruitmentPeriod: "2주",
    memberQuota: { 프론트: 1, 디자이너: 2 },
    currentMemberCount: 1,
    totalMemberCount: 3,
    workTendencyMatchingRate: 92,
  },
  {
    id: 3,
    title: "웹 기반 데이터 분석 플랫폼 개발",
    description:
      "데이터 분석을 위한 웹 기반 플랫폼 개발 프로젝트입니다. 빅데이터 처리와 분석에 관심이 있는 백엔드 개발자와 데이터 과학자를 찾고 있습니다.",
    recruitmentStatus: new Date(
      new Date().getTime() + 10 * 24 * 60 * 60 * 1000
    ), // 10일 후
    recruitmentPeriod: "3주",
    memberQuota: { 백엔드: 2, 데이터과학자: 1 },
    currentMemberCount: 2,
    totalMemberCount: 3,
    workTendencyMatchingRate: 85,
  },
];

/** SectionMemberRecomm 에서 사용 */
export const _membersData: Member[] = [
  {
    id: 1,
    avatarImage: "",
    coverImage: "",
    name: "김아영",
    type: "예리한 분석가형",
    role: "개발자",
    workTendency: ["통찰력있는", "계획적인", "주도적인", "관찰력이뛰어난"],
    skills: ["notion", "slack"],
  },
  {
    id: 2,
    avatarImage: "",
    coverImage: "",
    name: "전여빈",
    type: "프로 리더형",
    role: "디자이너",
    workTendency: ["추진력 있는", "전략적인", "주도적인", "통제를 잘하는"],
    skills: ["notion", "Figma", "Photoshop", "React", "여러가지"],
  },
  {
    id: 3,
    avatarImage: "",
    coverImage: "",
    name: "전여빈",
    type: "프로 리더형",
    role: "디자이너",
    workTendency: ["추진력 있는", "전략적인", "주도적인", "통제를 잘하는"],
    skills: ["notion", "Figma", "Photoshop", "React", "여러가지"],
  },
  {
    id: 4,
    avatarImage: "",
    coverImage: "",
    name: "전여빈",
    type: "프로 리더형",
    role: "디자이너",
    workTendency: ["추진력 있는", "전략적인", "주도적인", "통제를 잘하는"],
    skills: ["notion", "Figma", "Photoshop", "React", "여러가지"],
  },
];

/** user 에서 사용 */
export const _user: User = {
  id: 1,
  name: "이닷코",
  avatar: "",
  myProjects: [..._myProjects],
  recruitingMembers: [
    {
      id: 1,
      avatarImage: "",
      coverImage: "",
      name: "김아영",
      type: "예리한 분석가형",
      role: "개발자",
      workTendency: ["통찰력있는", "계획적인", "주도적인", "관찰력이뛰어난"],
      skills: ["notion", "slack"],
    },
    {
      id: 2,
      avatarImage: "",
      coverImage: "",
      name: "전여빈",
      type: "프로 리더형",
      role: "디자이너",
      workTendency: ["추진력 있는", "전략적인", "주도적인", "통제를 잘하는"],
      skills: ["notion", "Figma", "Photoshop", "React", "여러가지"],
    },
  ],
};
