const LANGS = [
  {
    id: 'RU',
    title: 'Русский',
  },
  {
    id: 'GB',
    title: 'English',
  },
  {
    id: 'IL',
    title: 'עִברִית',
  }
];

const CONTACTS = [
  {
    id: 'mail',
    text: 'gtm003@gmail.com',
  },
  {
    id: 'phone',
    text: '+7 963 318-00-31',
  },
  {
    id: 'place',
    text: 'Saint Petersburg, Russia',
  }
];

const SKILLS = [
  {
    subtitle: 'Java-script',
    value: '4',
  },
  {
    subtitle: 'Types-cript',
    value: '2',
  },
  {
    subtitle: 'SCSS',
    value: '4',
  },
  {
    subtitle: 'HTML',
    value: '4',
  },
  {
    subtitle: 'React',
    value: '3',
  }
];

const NAME = {
  RU: 'Григорович Татьяна',
  GB: 'Grigorovich Tatyana',
  IL: "גריגורוביץ 'טטיאנה"
};

const POSITION = {
  RU: 'Фронтенд-разработчик',
  GB: 'Front-end Developer',
  IL: "מפתח חזיתי"
};

const DESCRIPTION = {
  RU: {
    title: "Описание",
    text: "Я ищу работу начинающего фронтенд-разработчика с возможностью профессионального развития. Мой предыдущий опыт работы связан с проектированием различных конструкций из стекла и металла. Верю, что мой предыдущий опыт и настойчивость в достижении поставленных целей помогут мне быстро приобрести необходимые навыки."
  },
  GB: {
    title: "Description",
    text: "I am looking for a Junior Frontend Developer position with opportunities for professional growth. My previous professional activity was related to the design of different metal structures. I believe that my previous experience combined with persistence in achieving my goals will help me to acquire all necessary skills in a short period of time."
  },
  IL: {
    title: "תיאור",
    text: "אני מחפש משרת מפתח Frontend Junior עם אפשרויות לצמיחה מקצועית. הפעילות המקצועית הקודמת שלי הייתה קשורה בעיצוב מבני מתכת שונים. אני מאמין שהניסיון הקודם שלי בשילוב עם התמדה בהשגת מטרותיי יעזרו לי לרכוש את כל המיומנויות הדרושות תוך זמן קצר."
  },
};

const COURSES = {
  title: {
    RU: 'Курсы',
    GB: 'Courses',
    IL: "קורסים"
  },
  list: [
    {
      title: "Front-End/JavaScript. RS School.",
      courseLink: "https://rs.school/js/",
      courseDescripe: " On the Javascript / Front-end course, I learned HTML, JS and SCSS, learned how to work with the Gulp and WebPack compilers, and gained experience with GitHub.",
      certificateLink: "https://app.rs.school/certificate/64gfe4vu",
    },
    {
      title: "React. RS School.",
      courseLink: "https://rs.school/react/",
      courseDescripe: " On the React course, I gained experience in creating UI using the specified library and initial experience in programming in TypeScript",
      certificateLink: "https://app.rs.school/certificate/xp7c36nv",
    },
  ]
};

const PROJECTS = {
  title: {
    RU: "Проекты",
    GB: "Projects",
    IL: "פרויקטים"
  },
  RU: [
    {
      title: "SVG-редактор.",
      text: "This is teamwork, the final task of the Javascript / Front-end course. The project uses the MVC pattern. The bulk of my work on this project is the model methods responsible for creating and editing elements on the canvas.",
      GHLink: "https://github.com/gtm003/rsclone",
      deployLink: "https://alexk08.github.io/rsclone/client/build/",
    },
    {
      title: "Einstein's puzzle.",
      text: "This is an individual project, the first assignment from the React course. In this project, a rather complex game logic has been implemented and basic knowledge of the React library has been obtained.",
      GHLink: "https://github.com/gtm003/react-game",
      deployLink: "",
    },
    {
      title: "React. RS Lang.",
      text: "This is the final team project, in which I learned to write in TypeScript, got experience with Redux, React Route. My part in this project is the Sprint and Word Constructor games, statistics page.",
      GHLink: "https://github.com/gtm003/rslang",
      deployLink: "https://rslang-team23-alexk08.netlify.app/",
    },
  ],
  GB: [
    {
      title: "SVG-editor.",
      text: "This is teamwork, the final task of the Javascript / Front-end course. The project uses the MVC pattern. The bulk of my work on this project is the model methods responsible for creating and editing elements on the canvas.",
      GHLink: "https://github.com/gtm003/rsclone",
      deployLink: "https://alexk08.github.io/rsclone/client/build/",
    },
    {
      title: "Einstein's puzzle.",
      text: "This is an individual project, the first assignment from the React course. In this project, a rather complex game logic has been implemented and basic knowledge of the React library has been obtained.",
      GHLink: "",
      deployLink: "",
    },
    {
      title: "React. RS Lang.",
      text: "This is the final team project, in which I learned to write in TypeScript, got experience with Redux, React Route. My part in this project is the Sprint and Word Constructor games, statistics page.",
      GHLink: "https://github.com/gtm003/rslang",
      deployLink: "https://rslang-team23-alexk08.netlify.app/",
    },
  ],
  IL: [
    {
      title: "SVG-редактор.",
      text: "This is teamwork, the final task of the Javascript / Front-end course. The project uses the MVC pattern. The bulk of my work on this project is the model methods responsible for creating and editing elements on the canvas.",
      GHLink: "https://github.com/gtm003/rsclone",
      deployLink: "https://alexk08.github.io/rsclone/client/build/",
    },
    {
      title: "Einstein's puzzle.",
      text: "This is an individual project, the first assignment from the React course. In this project, a rather complex game logic has been implemented and basic knowledge of the React library has been obtained.",
      GHLink: "",
      deployLink: "",
    },
    {
      title: "React. RS Lang.",
      text: "This is the final team project, in which I learned to write in TypeScript, got experience with Redux, React Route. My part in this project is the Sprint and Word Constructor games, statistics page.",
      GHLink: "https://github.com/gtm003/rslang",
      deployLink: "https://rslang-team23-alexk08.netlify.app/",
    },
  ],
};

export {LANGS, CONTACTS, SKILLS, NAME, POSITION, DESCRIPTION, COURSES, PROJECTS};
