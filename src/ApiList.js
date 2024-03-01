const apis = {
  // IsLogin: false,
  // userName: "",

  courseList: [
    {
      Id: 1,
      InstituteId: "326028",
      CourseTitle: "Pre-Masters Programme in Business and Management",
      Cost: "15,250 Per year",
      StartDate: "03 March 2024",
      StudyMode: "Full Time",
      Duration: "6 months",
      Description:
        "The Pre-Masters Programme in Business and Management at the International Study Centre prepares you for a wide selection of business-related postgraduate degrees at Royal Holloway.",
    },
    {
      Id: 2,
      InstituteId: "4574",
      CourseTitle: "Accounting, Accountability and Financial Management MSc",
      Cost: "40,140 Per year",
      StartDate: "23 September 2024",
      StudyMode: "Full Time",
      Duration: "1 year",
      Description:
        "The MSc in Accounting, Accountability & Financial Management at King’s Business School is an innovative course designed to provide you with an advanced understanding of the economic, technical and institutional foundations of accounting and financial management. You will also gain an appreciation of the importance of accountability and information, corporate governance, financial management and valuation and ethics in global financial markets.",
    },

    {
      Id: 3,
      InstituteId: "4574",
      courseId: "58289262",
      CourseTitle: "Business Management & Social Science",
      LevelOfStudy: "undergraduate",
      StartDate: " 23 September 2024",
      Duration: "1 year",
      StudyMode: "Full time",
      Cost: "24800 Per year",
      Description:
        "Business Management refers to the planning, organization, coordination, and control of business activities to achieve organizational goals efficiently and effectively. It involves overseeing the resources, processes, and people within an organization to ensure its success and sustainability.",
    },
    {
      Id: 4,
      InstituteId: "4574",
      courseId: "56606378",
      CourseTitle: "Banking & Finance MSc",
      Cost: "40,140 Per year",
      StudyMode: "Full Time",
      Duration: "1 year",
      StartDate: "23 September 2024",
      Description:
        "Banking and Finance is a postgraduate program that provides advanced education and training in the areas of banking, finance, and related fields. This program is designed to equip students with the knowledge and skills necessary to pursue careers in the financial industry, banking institutions, investment firms, and other related sectors.",
    },
    {
      Id: 5,
      InstituteId: "300668",
      courseId: "57596942",
      CourseTitle: "First Year in Business and Management",
      LevelOfStudy: "undergraduate",
      StartDate: "22 January 2024, 16 September 2024",
      Duration: "12 months",
      StudyMode: "Full time",
      Cost: "16,250 Per year",
      Description:
        "The first year in Business and Management typically involves foundational coursework aimed at providing students with a broad understanding of key business concepts and principles. The curriculum is designed to lay the groundwork for more specialized and advanced studies in subsequent years. ",
    },
    {
      CourseTitle: "First year in Maritime Business",
      Id: 6,
      InstituteId: "300668",
      courseId: "57596956",
      LevelOfStudy: "undergraduate",
      StartDate: " 22 January 2024, 16 September 2024",
      Duration: "12 months",
      StudyMode: "Full time",
      Cost: "16,250 Per year",
      Description:
        "University of Plymouth International College (UPIC) , Plymouth First Year in Business and Management On CampusOverview Ready to jump straight into the first year of your business degree? We’re here to help you settle into your new home. You will benefit from extra support with study skills, and you will learn how to adapt to the UK educational system. Teaching",
    },
    {
      Id: 7,
      InstituteId: "300668",
      CourseTitle: "Pre-Masters in Business & Management",
      courseId: "57596420",
      Cost: "9,500 Per year",
      StartDate: "22 January 202413 May 2024",
      StudyMode: "Full Time",
      Duration: "6 months",
      Description:
        "A Pre-Masters in Business and Management is a preparatory program designed for students who have completed their undergraduate studies but may not meet the entry requirements for a Master's program in Business and Management. This type of program helps students bridge the gap between their current qualifications and the academic prerequisites of a Master's degree.",
    },
    {
      Id: 8,
      InstituteId: "70239",
      courseId: "52842644",
      CourseTitle: "Accounting and Business Finance MSc",
      Cost: "14,600 Per year",
      StartDate: "February 2024April 2024June 2024",
      StudyMode: "Full Time",
      Duration: "1 year",
      Discription:
        "An MSc (Master of Science) in Accounting and Business Finance is a graduate-level program designed to provide advanced knowledge and skills in accounting, financial management, and related areas. This program is typically suitable for individuals who have completed a bachelor's degree in accounting, finance, or a related field and wish to deepen their expertise for career advancement or entry into specialized roles within the financial sector.",
    },
    {
      Id: 9,
      InstituteId: "424738",
      courseId: "58128036",
      CourseTitle: "First Year Degree in Accounting, Economics and Finance",
      LevelOfStudy: "undergraduate",
      StartDate: "January 2024, September 2024",
      Duration: "12 months",
      StudyMode: "Full time",
      Cost: "14000 Per year",
      Description:
        "ccounting and Business Finance is a graduate-level program designed to provide advanced knowledge and skills in accounting, financial management, and related areas. This program is typically suitable for individuals who have completed a bachelor's degree in accounting, finance, or a related field and wish to deepen their expertise for career advancement or entry into specialized roles within the financial sector.",
    },
    {
      Id: 10,
      InstituteId: "424738",
      courseId: "58127494",

      CourseTitle: "First Year Degree in Business",
      LevelOfStudy: "undergraduate",
      StartDate: "anuary 2024, September 2024",
      Duration: "12 months",
      StudyMode: "Full time",
      Cost: "14000 Per year",
      Description:
        "The first year of a degree program in Business typically focuses on providing students with a broad understanding of fundamental concepts and principles related to various business disciplines. ",
    },
    {
      Id: 11,
      InstituteId: "326028",
      courseId: "58054958",
      CourseTitle: "International Year One in Business and Management",
      LevelOfStudy: "undergraduate",
      StartDate: "15 January 2024, 23 September 2024, 25 November 2024",
      Duration: "12 months",
      StudyMode: "Full time",
      Cost: "19,000 Per year",
      Description:
        "The first year of a degree program in Business typically focuses on providing students with a broad understanding of fundamental concepts and principles related to various business disciplines. ",
    },
    {
      Id: 12,
      InstituteId: "424738",
      courseId: "57596402",
      Cost: "10,000 Per year",
      StartDate: "January 2024",
      Duration: "6 Months",
      StudyMode: "Full Time",
      CourseTitle: "Pre-Master's Business and Management (One Semester)",
      Description:
        "A Pre-Master's in Business and Management is a preparatory program designed for students who have completed their undergraduate studies but may not meet the direct entry requirements for a Master's program in Business and Management. This program aims to bridge the gap between the student's current qualifications and the expectations of a Master's degree, providing the necessary skills, knowledge, and language proficiency. ",
    },
    {
      Id: 13,
      InstituteId: "15574",
      courseId: "57260800",
      CourseTitle: "Airline and Airport Corporate Management MSc",
      Cost: "16,500 Per yearThe above mentioned fee is for Jan-24.",
      StartDate: "29 January 2024",
      StudyMode: "Full Time",
      Duration: "1 year",
      Description:
        "Airline and Airport Corporate Management is a specialized graduate program designed to provide in-depth knowledge and skills for individuals seeking managerial roles within the aviation industry. This program typically covers a range of topics related to airline and airport management, corporate strategy, and the broader aviation business environment.",
    },
    {
      Id: 14,
      InstituteId: "5581",
      courseId: "57135000",
      CourseTitle: "Master of Business Administration (MBA)",
      Cost: "19,224 Per year",
      StartDate: "23 September 202404 January 2025",
      StudyMode: "Full Time",
      Duration: "1 year",
      Description:
        "The Master of Business Administration (MBA) is a prestigious and widely recognized graduate-level degree that provides a comprehensive education in business and management. MBA programs are designed to develop skills and knowledge necessary for leadership roles in various industries.",
    },
    {
      Id: 15,
      courseId: "58054928",
      InstituteId: "326028",
      CourseTitle: "International Foundation Year in Management and Economics",
      LevelOfStudy: "undergraduate",
      StartDate: "15 January 2024, 23 September 2024, 25 November 2024",
      Duration: "12 months",
      StudyMode: "Full time",
      Cost: "181000 Per year",
      Description:
        "A foundation programme leading to undergraduate management and economics degrees The Management and Economics pathway at the International Study Centre will prepare you for management and economics-related degrees at the School of Management at Royal",
    },
    {
      Id: 16,
      InstituteId: "4054",
      CourseTitle: "Accounting & Finance (Foundation Entry)",
      LevelOfStudy: "undergraduate",
      StartDate: "September 2024",
      Duration: "3Yrs",
      StudyMode: "Full time",
      Cost: "£9,250 for the first year,£9,250 per year",
      Description:
        "Our course combines an academic programme with technical training. Develop your intellectual capacity, analytical skills and gain a strong knowledge and understanding of accounting. You’ll be able to work in audit, tax and accountancy businesses, as well as in financial functions within other organisations.",
    },
    {
      Id: 17,
      InstituteId: "4054",
      CourseTitle: "Computer Networks & Security",
      LevelOfStudy: "undergraduate",
      StartDate: "September 2024",
      Duration: "3yrs",
      StudyMode: "Full time",
      Cost: "UK:£9,250 per year,International:£16,500 per year",
      Description:
        "Thanks to new ideas, applications, security threats and constantly evolving technology, computer networks and security is a fascinating area to work in. On this practice-based course you’ll get to explore the latest developments in wired and wireless computer networking and security, underpinned by relevant theory.",
    },
    {
      Id: 17,
      InstituteId: "4054",
      CourseTitle: "Healthcare Science",
      LevelOfStudy: "undergraduate",
      StartDate: "September 2024",
      Duration: "3yrs",
      StudyMode: "Full time",
      Cost: "UK:£9,250 per year,International:£16,500 per year",
      Description:
        "Our BSc (Hons) Healthcare Science degree provides a government prescribed route into NHS pathology. Healthcare scientists are employed in a range of areas including, hospitals, industry and the Civil Service.",
    },
  ],

  ///////////////others/////////////
  instituteList: [
    {
      ID: 1,
      InstituteId: "4054",
      InstituteTitle: "University of Central Lancashire",
      Phone: "+44 1772 201 201",
      Website: "https://www.uclan.ac.uk",
      Address: "University of Central Lancashire Preston PR1 2HE",
      Description:
        "The University of Central Lancashire is the international, multi-campus university tracing its roots back to 1828 and leading the way in modern learning today.",
    },
    {
      ID: 1,
      InstituteId: "4574",
      InstituteTitle: "King's College London, University of London",
      Phone: "+44 (0)20 7836 5454",
      Website: "https://www.kcl.ac.uk",
      Address:
        "King's College London, University of London,London Westminster Bridge Road,SE1,7EH,England",
      Description:
        "The King’s International Foundation Programmes are specialist academic courses designed for ambitious international students who want to progress to a related undergraduate degree at King’s College London or another UK university. ",
    },

    {
      ID: 4,
      InstituteId: "326028",
      Website: "https://www.rhulisc.com/",
      Phone: " +44 (0)1784 434 455",
      Address:
        " Founder's Building, West, 1st Floor, Egham Hill, Englefield Green, Egham TW20 0EX, United Kingdom",
      InstituteTitle:
        "Royal Holloway, University of London International Study Centre",
      courseId: "58054928",
      Description:
        "You can continue your studies at Royal Holloway as an undergraduate when you successfully complete your International Foundation Year. This means that you have to achieve the required grades for progression. You can speak to staff about these requirements when you are about to finish your programme in case they have changed.",
    },

    {
      InstituteTitle: "University of Plymouth International College (UPIC)",
      Website: "https://upic.navitas.com/",
      ID: 6,
      InstituteId: "300668",
      Address: "Portland Villas, Plymouth PL4 6DX, United Kingdom",
      Phone: "+44 1752 411114",
    },

    {
      ID: 9,
      InstituteId: "70239",
      Phone: "+44 (0)1234 400 400",
      Website: "https://www.beds.ac.uk/",
      Address: "Vicarage St, Luton LU1 3JU, United Kingdom",
      InstituteTitle: "University of Bedfordshire",
      Discription:
        "This course provides you with a comprehensive knowledge of the key areas of accounting and finance, and prepares you for a career in management where an accounting and finance focus is required.The course blends accounting and business finance theory to solve operational problems faced by managers.Your studies bring theory and practice together, applying both to situations where vital financial decisions are made.",
    },

    {
      ID: 10,
      InstituteId: "424738",
      InstituteTitle: "Birmingham City University International College",
      Phone: "+44 121 331 7377",
      Website: "https://www.bcuic.navitas.com/",
      Address:
        "Birmingham City University International College, England 15 Bartholomew Row,Birmingham B5 5JU",
      Description:
        "Why study this pathway programme? The Faculty of Business, Law and Social Sciences boasts platinum ACCA teaching status. The University’s Accounting courses offer nine exemptions from ACCA exam papers. Recognising the global scope of business",
    },

    {
      ID: 13,
      InstituteId: "15574",
      Phone: "+44 20 7423 0000",
      Website: "https://www.londonmet.ac.uk/",
      Address: "166-220 Holloway Rd, London N7 8DB, United Kingdom",
      InstituteTitle: "London Metropolitan University",
      Discription:
        "This innovative master's programme focuses on e-commerce and e-strategies for managing the aviation system in the 21st century.Our curriculum is designed to help you establish a career in civil aviation, so that with this degree you'll be one step ahead in the industry.",
    },

    {
      ID: 14,
      InstituteId: "5581",
      Address:
        "Island Car Park Entrance, Hunter St, Buckingham MK18 1EG, United Kingdom",
      InstituteTitle: "University of Buckingham",
      Phone: " +44 (0)1280 814080",
      Website: "https://www.buckingham.ac.uk",
      Discription:
        "Our new flagship MBA programme takes advantage of Buckingham’s unique student-centred pedagogical approach, to give you an unparalleled opportunity to work closely with expert-faculty to develop considerable specialised and general business knowledge. It will help you achieve a more rewarding career and lucrative lifestyle.",
    },
  ],
};
export default {
  data() {
    return {
      apis: apis,
    };
  },
};
