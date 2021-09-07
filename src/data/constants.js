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
  certificatesTitle: {
    RU: "Сертификаты",
    GB: "Certificates",
    IL: "תעודות"
  },
  list: [
    {
      title: "Front-End/JavaScript. RS School.",
      courseLink: "https://rs.school/js/",
      courseDescripe:
      {
        RU: " На курсе Javascript / Front-end я изучила HTML, JS и SCSS, научилась работать с упаковщиками Gulp и WebPack и приобрела опыт работы с GitHub.",
        GB: " On the Javascript / Front-end course, I learned HTML, JS and SCSS, learned how to work with the Gulp and WebPack compilers, and gained experience with GitHub.",
        IL: " בקורס Javascript / Front-end למדתי HTML, JS ו- SCSS, למדתי איך לעבוד עם מהדרי Gulp ו- WebPack וצברתי ניסיון עם GitHub.",
      },
      certificateLink: "https://app.rs.school/certificate/64gfe4vu",
    },
    {
      title: "React. RS School.",
      courseLink: "https://rs.school/react/",
      courseDescripe: 
      {
        RU: " На курсе React я получила опыт создания пользовательского интерфейса с использованием указанной библиотеки и начальный опыт программирования на TypeScript.",
        GB: " On the React course, I gained experience in creating UI using the specified library and initial experience in programming in TypeScript.",
        IL: " בקורס React צברתי ניסיון ביצירת ממשק משתמש באמצעות הספרייה שצוינה וניסיון ראשוני בתכנות ב- TypeScript",
      },
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
  progects:  [
    {
      title: {
        RU: "SVG-редактор.",
        GB: "SVG-editor.",
        IL: "עוֹרֵך-SVG.",
      },
      description: {
        RU: " Это командная работа, последняя задача курса Javascript / Front-end. В проекте используется шаблон MVC. Основная часть моей работы над этим проектом - это методы модели, отвечающие за создание и редактирование элементов на холсте.",
        GB: " This is teamwork, the final task of the Javascript / Front-end course. The project uses the MVC pattern. The bulk of my work on this project is the model methods responsible for creating and editing elements on the canvas.",
        IL: " זו עבודת צוות, המשימה האחרונה של קורס Javascript / Front-end. הפרויקט משתמש בתבנית MVC. עיקר עבודתי בפרויקט זה הוא שיטות המודל האחראיות ליצירת ועריכת אלמנטים על הבד.",
      },
      GHLink: "https://github.com/gtm003/rsclone",
      deployLink: "https://alexk08.github.io/rsclone/client/build/",
    },
    {
      title: {
        RU: "Головоломка Энштейна.",
        GB: "Einstein's puzzle.",
        IL: "הפאזל של איינשטיין.",
      },
      description: {
        RU: " Это индивидуальный проект, первое задание из курса React. В этом проекте реализована довольно сложная игровая логика и получены базовые знания библиотеки React.",
        GB: " This is an individual project, the first assignment from the React course. In this project, a rather complex game logic has been implemented and basic knowledge of the React library has been obtained.",
        IL: " זהו פרויקט אינדיבידואלי, המשימה הראשונה מתוך קורס React. בפרויקט זה יושמה היגיון משחק מורכב למדי והתקבל ידע בסיסי בספריית React.",
      },
      GHLink: "https://github.com/gtm003/react-game",
      deployLink: "https://gtm003.github.io/react-game/",
    },
    {
      title: {
        RU: "RSLang.",
        GB: "RSLang.",
        IL: "RSLang.",
      },
      description: {
        RU: " Это индивидуальный проект, первое задание из курса React. В этом проекте реализована довольно сложная игровая логика и получены базовые знания библиотеки React.",
        GB: " This is an individual project, the first assignment from the React course. In this project, a rather complex game logic has been implemented and basic knowledge of the React library has been obtained.",
        IL: " זהו פרויקט אינדיבידואלי, המשימה הראשונה מתוך קורס React. בפרויקט זה יושמה היגיון משחק מורכב למדי והתקבל ידע בסיסי בספריית React.",
      },
      GHLink: "https://github.com/gtm003/rslang",
      deployLink: "https://rslang-team23-alexk08.netlify.app/",
    }
  ]
};

export {LANGS, CONTACTS, SKILLS, NAME, POSITION, DESCRIPTION, COURSES, PROJECTS};
