const departments = {
    "AI & ML": {
      semesters: {
        "All":[
          { subject: "Physical Sciences", credit: 4 },
          { subject: "Physical Sciences Laboratory", credit: 1.5 },
          { subject: "Agile Product Development", credit: 3 },
          { subject: "Programming for Problem Solving(c++)", credit: 4 },
          { subject: "Designing web Applications using HTML,CSS...", credit: 3 },
          { subject: "Digital Logic and Design", credit: 4 },
          { subject: "Discrete Mathematics", credit: 4 },
          { subject: "Computer Organisation and Architecture", credit: 3 },
          { subject: "PC Hardware and Trouble Shooting Laboratory", credit: 1.5 },
          { subject: "Applied Linear Algebra", credit: 4 },
          { subject: "Technical English", credit: 3 },
          { subject: "Spoken English Laboratory", credit: 1.5 },
          { subject: "Data Structures and Algorithms", credit: 4 },
          { subject: "Managing Data using RDBMS", credit: 4 },
          { subject: "Java Fundamentals", credit: 3 },
          { subject: "Heritage of Tamils", credit: 1 },
          { subject: "Universal Human Values", credit: 3 },
          { subject: "Operating Systems", credit: 4 },
          { subject: "Probability and Statistics", credit: 4 },
          { subject: "Design and Analysis of Algorithms", credit: 3 },
          { subject: "Advanced Java Programming", credit: 3 },
          { subject: "Front End Development using React", credit: 3 },
          { subject: "Tamils and Technology", credit: 1 },
          { subject: "Artificial Intelligence and Expert Systems", credit: 4 },
          { subject: "Data Science", credit: 4 },
          { subject: "Networking and Communication", credit: 4 },
          { subject: "Managing Cloud and Containerization", credit: 3 },
          { subject: "Testing Methodologies and Tools", credit: 3 },
          { subject: "REST APPLICATION DEVELOPMENT USING SPRING BOOT AND JPA", credit: 3 },
          { subject: "Machine Learning Techniques", credit: 3 },
          { subject: "Machine Learning Techniques Laboratory", credit: 1.5 },
          { subject: "Neural Networks and DL", credit: 3 },
          { subject: "Automata Theory and Compiler design", credit: 4 },
          { subject: "Economics Accounting and Finance", credit: 3 },
          { subject: "OPEN ELECTIVE", credit: 3 },
          { subject: "Software Design Pattern", credit: 3 }
        ],
        "1": [
          { subject: "Physical Sciences", credit: 4 },
          { subject: "Physical Sciences Laboratory", credit: 1.5 },
          { subject: "Agile Product Development", credit: 3 },
          { subject: "Programming for Problem Solving(c++)", credit: 4 },
          { subject: "Designing web Applications using HTML,CSS...", credit: 3 },
          { subject: "Digital Logic and Design", credit: 4 },
          { subject: "Discrete Mathematics", credit: 4 }
        ],
        "2": [
          { subject: "Computer Organisation and Architecture", credit: 3 },
          { subject: "PC Hardware and Trouble Shooting Laboratory", credit: 1.5 },
          { subject: "Applied Linear Algebra", credit: 4 },
          { subject: "Technical English", credit: 3 },
          { subject: "Spoken English Laboratory", credit: 1.5 },
          { subject: "Data Structures and Algorithms", credit: 4 },
          { subject: "Managing Data using RDBMS", credit: 4 },
          { subject: "Java Fundamentals", credit: 3 },
          { subject: "Heritage of Tamils", credit: 1 }
        ],
        
        "3": [
          { subject: "Universal Human Values", credit: 3 },
          { subject: "Operating Systems", credit: 4 },
          { subject: "Probability and Statistics", credit: 4 },
          { subject: "Design and Analysis of Algorithms", credit: 3 },
          { subject: "Advanced Java Programming", credit: 3 },
          { subject: "Front End Development using React", credit: 3 },
          { subject: "Tamils and Technology", credit: 1 }
          ],
        "4": [
          { subject: "Artificial Intelligence and Expert Systems", credit: 4 },
          { subject: "Data Science", credit: 4 },
          { subject: "Networking and Communication", credit: 4 },
          { subject: "Managing Cloud and Containerization", credit: 3 },
          { subject: "Testing Methodologies and Tools", credit: 3 },
          { subject: "REST APPLICATION DEVELOPMENT USING SPRING BOOT AND JPA", credit: 3 }
        ],
        "5": [
          { subject: "Machine Learning Techniques", credit: 3 },
          { subject: "Machine Learning Techniques Laboratory", credit: 1.5 },
          { subject: "Neural Networks and DL", credit: 3 },
          { subject: "Automata Theory and Compiler design", credit: 4 },
          { subject: "Economics Accounting and Finance", credit: 3 },
          { subject: "OPEN ELECTIVE", credit: 3 },
          { subject: "Software Design Pattern", credit: 3 }
        ]
        // Define other semesters here
      }
    },
    "AI & DS": {
      semesters: {
        "All":[
          { subject: "Physical Sciences", credit: 4 },
          { subject: "Physical Sciences Laboratory", credit: 1.5 },
          { subject: "Agile Product Development", credit: 3 },
          { subject: "Programming for Problem Solving(c++)", credit: 4 },
          { subject: "Designing web Applications using HTML,CSS...", credit: 3 },
          { subject: "Digital Logic and Design", credit: 4 },
          { subject: "Discrete Mathematics", credit: 4 },
          { subject: "Computer Organisation and Architecture", credit: 3 },
          { subject: "PC Hardware and Trouble Shooting Laboratory", credit: 1.5 },
          { subject: "Applied Linear Algebra", credit: 4 },
          { subject: "Technical English", credit: 3 },
          { subject: "Spoken English Laboratory", credit: 1.5 },
          { subject: "Data Structures and Algorithms", credit: 4 },
          { subject: "Managing Data using RDBMS", credit: 4 },
          { subject: "Java Fundamentals", credit: 3 },
          { subject: "Heritage of Tamils", credit: 1 },
          { subject: "Universal Human Values", credit: 3 },
          { subject: "Operating Systems", credit: 4 },
          { subject: "Probability and Statistics", credit: 4 },
          { subject: "Design and Analysis of Algorithms", credit: 3 },
          { subject: "Advanced Java Programming", credit: 3 },
          { subject: "Front End Development using React", credit: 3 },
          { subject: "Tamils and Technology", credit: 1 },
          { subject: "Data Warehousing and Data Mining", credit: 4 },
          { subject: "Intelligent Systems", credit: 4 },
          { subject: "Networking and Communication", credit: 4 },
          { subject: "Managing Cloud and Containerization", credit: 3 },
          { subject: "Testing Methodologies and Tools", credit: 3 },
          { subject: "REST APPLICATION DEVELOPMENT USING SPRING BOOT AND JPA", credit: 3 },
          { subject: "Introduction to Microprocessors and Microcontrollers", credit: 4 },
          { subject: " Neural Networks and Deep Learning", credit: 3 },
          { subject: "OPEN ELECTIVE", credit: 3 },
          { subject: "Economics, Accounting and Finance ", credit: 3 },
          { subject: "Data Visualization Techniques", credit: 3 },
          { subject: "Data Visualization Techniques Laboratory ", credit: 1.5 },
          { subject: "Software Design Pattern ", credit: 3 }
        ],
        "1": [
          { subject: "Physical Sciences", credit: 4 },
          { subject: "Physical Sciences Laboratory", credit: 1.5 },
          { subject: "Agile Product Development", credit: 3 },
          { subject: "Programming for Problem Solving(c++)", credit: 4 },
          { subject: "Designing web Applications using HTML,CSS...", credit: 3 },
          { subject: "Digital Logic and Design", credit: 4 },
          { subject: "Discrete Mathematics", credit: 4 }
        ],
        "2": [
          { subject: "Computer Organisation and Architecture", credit: 3 },
          { subject: "PC Hardware and Trouble Shooting Laboratory", credit: 1.5 },
          { subject: "Applied Linear Algebra", credit: 4 },
          { subject: "Technical English", credit: 3 },
          { subject: "Spoken English Laboratory", credit: 1.5 },
          { subject: "Data Structures and Algorithms", credit: 4 },
          { subject: "Managing Data using RDBMS", credit: 4 },
          { subject: "Java Fundamentals", credit: 3 },
          { subject: "Heritage of Tamils", credit: 1 }
        ],
        
        "3": [
          { subject: "Universal Human Values", credit: 3 },
          { subject: "Operating Systems", credit: 4 },
          { subject: "Probability and Statistics", credit: 4 },
          { subject: "Design and Analysis of Algorithms", credit: 3 },
          { subject: "Advanced Java Programming", credit: 3 },
          { subject: "Front End Development using React", credit: 3 },
          { subject: "Tamils and Technology", credit: 1 }
          ],
        "4": [
          { subject: "Data Warehousing and Data Mining", credit: 4 },
          { subject: "Intelligent Systems", credit: 4 },
          { subject: "Networking and Communication", credit: 4 },
          { subject: "Managing Cloud and Containerization", credit: 3 },
          { subject: "Testing Methodologies and Tools", credit: 3 },
          { subject: "REST APPLICATION DEVELOPMENT USING SPRING BOOT AND JPA", credit: 3 }
        ],
        "5": [
          { subject: "Introduction to Microprocessors and Microcontrollers", credit: 4 },
          { subject: " Neural Networks and Deep Learning", credit: 3 },
          { subject: "OPEN ELECTIVE", credit: 3 },
          { subject: "Economics, Accounting and Finance ", credit: 3 },
          { subject: "Data Visualization Techniques", credit: 3 },
          { subject: "Data Visualization Techniques Laboratory ", credit: 1.5 },
          { subject: "Software Design Pattern ", credit: 3 }
        ]
        // Define other semesters here
      }
    },
    "CSE": {
      semesters: {
        "All":[
          { subject: "Physical Sciences", credit: 4 },
          { subject: "Physical Sciences Laboratory", credit: 1.5 },
          { subject: "Agile Product Development", credit: 3 },
          { subject: "Programming for Problem Solving(c++)", credit: 4 },
          { subject: "Designing web Applications using HTML,CSS...", credit: 3 },
          { subject: "Digital Logic and Design", credit: 4 },
          { subject: "Discrete Mathematics", credit: 4 },
          { subject: "Computer Organisation and Architecture", credit: 3 },
          { subject: "PC Hardware and Trouble Shooting Laboratory", credit: 1.5 },
          { subject: "Applied Linear Algebra", credit: 4 },
          { subject: "Technical English", credit: 3 },
          { subject: "Spoken English Laboratory", credit: 1.5 },
          { subject: "Data Structures and Algorithms", credit: 4 },
          { subject: "Managing Data using RDBMS", credit: 4 },
          { subject: "Java Fundamentals", credit: 3 },
          { subject: "Heritage of Tamils", credit: 1 },
          { subject: "Universal Human Values", credit: 3 },
          { subject: "Operating Systems", credit: 4 },
          { subject: "Probability and Statistics", credit: 4 },
          { subject: "Design and Analysis of Algorithms", credit: 3 },
          { subject: "Advanced Java Programming", credit: 3 },
          { subject: "Front End Development using React", credit: 3 },
          { subject: "Tamils and Technology", credit: 1 },
          { subject: "Computer Graphics and Multimedia", credit: 4 },
          { subject: "Object Oriented analysis and design", credit: 4 },
          { subject: "Networking and Communication", credit: 4 },
          { subject: "Managing Cloud and Containerization", credit: 3 },
          { subject: "Testing Methodologies and Tools", credit: 3 },
          { subject: "REST APPLICATION DEVELOPMENT USING SPRING BOOT AND JPA", credit: 3 }
        ],
        "1": [
          { subject: "Physical Sciences", credit: 4 },
          { subject: "Physical Sciences Laboratory", credit: 1.5 },
          { subject: "Agile Product Development", credit: 3 },
          { subject: "Programming for Problem Solving(c++)", credit: 4 },
          { subject: "Designing web Applications using HTML,CSS...", credit: 3 },
          { subject: "Digital Logic and Design", credit: 4 },
          { subject: "Discrete Mathematics", credit: 4 }
        ],
        "2": [
          { subject: "Computer Organisation and Architecture", credit: 3 },
          { subject: "PC Hardware and Trouble Shooting Laboratory", credit: 1.5 },
          { subject: "Applied Linear Algebra", credit: 4 },
          { subject: "Technical English", credit: 3 },
          { subject: "Spoken English Laboratory", credit: 1.5 },
          { subject: "Data Structures and Algorithms", credit: 4 },
          { subject: "Managing Data using RDBMS", credit: 4 },
          { subject: "Java Fundamentals", credit: 3 },
          { subject: "Heritage of Tamils", credit: 1 }
        ],
        
        "3": [
          { subject: "Universal Human Values", credit: 3 },
          { subject: "Operating Systems", credit: 4 },
          { subject: "Probability and Statistics", credit: 4 },
          { subject: "Design and Analysis of Algorithms", credit: 3 },
          { subject: "Advanced Java Programming", credit: 3 },
          { subject: "Front End Development using React", credit: 3 },
          { subject: "Tamils and Technology", credit: 1 }
          ],
        "4": [
          { subject: "Computer Graphics and Multimedia", credit: 4 },
          { subject: "Object Oriented analysis and design", credit: 4 },
          { subject: "Networking and Communication", credit: 4 },
          { subject: "Managing Cloud and Containerization", credit: 3 },
          { subject: "Testing Methodologies and Tools", credit: 3 },
          { subject: "REST APPLICATION DEVELOPMENT USING SPRING BOOT AND JPA", credit: 3 }
        ]
        // Define other semesters here
      }
    },
    ECE: {
      semesters: {
        "All":[
          { subject: "Technical English", credit: 3 },
          { subject: "Linear Algebra and Calculus", credit: 4 },
          { subject: "Spoken English Laboratory", credit: 1.5 },
          { subject: "Workshop and Manufacturing Practices Laboratory", credit: 1.5 },
          { subject: "Agile Product Development and Developer Tools", credit: 3 },
          { subject: "Programming for Problem Solving", credit: 4 },
          { subject: "Designing web Applications using HTML,CSS...", credit: 3 },
          { subject: "Circuit Theory and Electronic Devices", credit: 3 },
          { subject: "Statistics and Complex Analysis", credit: 4 },
          { subject: "Physical Sciences", credit: 4 },
          { subject: "Physical Sciences Laboratory", credit: 1.5 },
          { subject: "Circuit Theory Laboratory", credit: 1.5 },
          { subject: "Managing Data using RDBMS", credit: 4 },
          { subject: "Java Fundamentals", credit: 3 },
          { subject: "Data Structures and Algorithms", credit: 4 },
          { subject: "Design and Analysis of Algorithms", credit: 3 },
          { subject: "Advanced Java Programming", credit: 3 },
          { subject: "Tamils and Technology", credit: 1 },
          { subject: "Analog Circuits", credit: 3 },
          { subject: "Signals and Systems", credit: 3 },
          { subject: "Analog Circuits Laboratory", credit: 1.5 },
          { subject: "Universal Human Values", credit: 3 },
          { subject: "Probability and Random Processes", credit: 4 }
        ],
        "1": [
          { subject: "Technical English", credit: 3 },
          { subject: "Linear Algebra and Calculus", credit: 4 },
          { subject: "Spoken English Laboratory", credit: 1.5 },
          { subject: "Workshop and Manufacturing Practices Laboratory", credit: 1.5 },
          { subject: "Agile Product Development and Developer Tools", credit: 3 },
          { subject: "Programming for Problem Solving", credit: 4 },
          { subject: "Designing web Applications using HTML,CSS...", credit: 3 },
        ],
        "2": [
        { subject: "Circuit Theory and Electronic Devices", credit: 3 },
          { subject: "Statistics and Complex Analysis", credit: 4 },
          { subject: "Physical Sciences", credit: 4 },
          { subject: "Physical Sciences Laboratory", credit: 1.5 },
          { subject: "Circuit Theory Laboratory", credit: 1.5 },
          { subject: "Managing Data using RDBMS", credit: 4 },
          { subject: "Java Fundamentals", credit: 3 },
          { subject: "Data Structures and Algorithms", credit: 4 }
        ],
        "3":[
          { subject: "Design and Analysis of Algorithms", credit: 3 },
          { subject: "Advanced Java Programming", credit: 3 },
          { subject: "Tamils and Technology", credit: 1 },
          { subject: "Analog Circuits", credit: 3 },
          { subject: "Signals and Systems", credit: 3 },
          { subject: "Analog Circuits Laboratory", credit: 1.5 },
          { subject: "Universal Human Values", credit: 3 },
          { subject: "Probability and Random Processes", credit: 4 }
        ],
        // Define other semesters here
      }
    },
    EEE: {
      semesters: {
        "All":[
          { subject: "Technical English", credit: 3 },
          { subject: "Transform Calculus", credit: 4 },
          { subject: "Spoken English Laboratory", credit: 1.5 },
          { subject: "Engineering Graphics Laboratory", credit: 1.5 },
          { subject: "Agile Product Development and Developer Tools", credit: 3 },
          { subject: "Programming for Problem Solving", credit: 4 },
          { subject: "Designing web Applications using HTML,CSS...", credit: 3 },
          { subject: "Probability and Numerical Methods", credit: 4 },
          { subject: "Workshop and Manufacturing Practices", credit: 2 },
          { subject: "Physical Sciences", credit: 4},
          { subject: "Physical Sciences Laboratory", credit: 1.5 },
          { subject: "Data Structures and Algorithms", credit: 4 },
          { subject: "RDBMS", credit: 4 },
          { subject: "Java Fundamentals", credit: 3 },
          { subject: "Heritage of Tamils", credit: 1 },
          { subject: "Electromagnetic Fields", credit: 4 },
          { subject: "Circuits and Devices", credit: 4},
          { subject: "DC Machines and Transformers", credit: 3 },
          { subject: "Circuits and Devices Laboratory", credit: 1.5 },
          { subject: "DC Machines and Transformers Laboratory", credit: 1.5 },
          { subject: "Universal Human Values", credit: 3 },
          { subject: "Design and Analysis of Algorithms", credit: 3 },
          { subject: "Advanced Java Programming", credit: 3 },
          { subject: "Tamils and Technology", credit: 1 }
        ],
        "1": [
          { subject: "Technical English", credit: 3 },
            { subject: "Transform Calculus", credit: 4 },
            { subject: "Spoken English Laboratory", credit: 1.5 },
            { subject: "Engineering Graphics Laboratory", credit: 1.5 },
          { subject: "Agile Product Development and Developer Tools", credit: 3 },
          { subject: "Programming for Problem Solving", credit: 4 },
          { subject: "Designing web Applications using HTML,CSS...", credit: 3 },
          ],
        "2": [
          { subject: "Probability and Numerical Methods", credit: 4 },
          { subject: "Workshop and Manufacturing Practices", credit: 2 },
          { subject: "Physical Sciences", credit: 4},
          { subject: "Physical Sciences Laboratory", credit: 1.5 },
          { subject: "Data Structures and Algorithms", credit: 4 },
          { subject: "RDBMS", credit: 4 },
          { subject: "Java Fundamentals", credit: 3 },
          { subject: "Heritage of Tamils", credit: 1 }
        ],
        "3":[
          { subject: "Electromagnetic Fields", credit: 4 },
          { subject: "Circuits and Devices", credit: 4},
          { subject: "DC Machines and Transformers", credit: 3 },
          { subject: "Circuits and Devices Laboratory", credit: 1.5 },
          { subject: "DC Machines and Transformers Laboratory", credit: 1.5 },
          { subject: "Universal Human Values", credit: 3 },
          { subject: "Design and Analysis of Algorithms", credit: 3 },
          { subject: "Advanced Java Programming", credit: 3 },
          { subject: "Tamils and Technology", credit: 1 },
        ],
        // Define other semesters here
      }
    },
    MECHANICAL: {
      semesters: {
        "All":[
          { subject: "Basic Electrical and Electronics Engineering", credit: 4 },
          { subject: "Technical English", credit: 3 },
          { subject: "Spoken English Laboratory", credit: 1.5 },
          { subject: "Matrices, Differential Equations and Fourier Series", credit: 4 },
          { subject: "Engineering Drawing", credit: 4 },
          { subject: "Problem Solving Using C++", credit: 4 },
          { subject: "Calculas,Laplace Transforms and Statistics", credit: 4 },
          { subject: "Engineering Mechanics", credit: 4 },
          { subject: "Manufacturing Technology - I (with lab)", credit: 4 },
          { subject: "Physical Sciences", credit: 4 },
          { subject: "Physical Sciences Laboratory", credit: 1.5 },
          { subject: "Java Programming", credit: 4 },
          { subject: "Heritage of Tamils", credit: 1 },
          { subject: "Universal Human Values", credit: 3 },
          { subject: "Engineeringn Thermodynamics", credit: 3 },
          { subject: "Industrial Metallurgy", credit: 3 },
          { subject: "Manufacturing Technology II", credit: 3 },
          { subject: "Strength of Materials", credit: 4 },
          { subject: "Manufacturing Technology II Laboratory", credit: 1.5 },
          { subject: "OPEN ELECTIVE: Data Structures", credit: 3 },
          { subject: "Tamils and Technology", credit: 1 }
        ],
        "1": [
          { subject: "Basic Electrical and Electronics Engineering", credit: 4 },
          { subject: "Technical English", credit: 3 },
          { subject: "Spoken English Laboratory", credit: 1.5 },
          { subject: "Matrices, Differential Equations and Fourier Series", credit: 4 },
          { subject: "Engineering Drawing", credit: 4 },
          { subject: "Problem Solving Using C++", credit: 4 },
        ],
        "2": [
          { subject: "Calculas,Laplace Transforms and Statistics", credit: 4 },
          { subject: "Engineering Mechanics", credit: 4 },
          { subject: "Manufacturing Technology - I (with lab)", credit: 4 },
          { subject: "Physical Sciences", credit: 4 },
          { subject: "Physical Sciences Laboratory", credit: 1.5 },
          { subject: "Java Programming", credit: 4 },
          { subject: "Heritage of Tamils", credit: 1 },
        ],
        "3":[
          { subject: "Universal Human Values", credit: 3 },
          { subject: "Engineeringn Thermodynamics", credit: 3 },
          { subject: "Industrial Metallurgy", credit: 3 },
          { subject: "Manufacturing Technology II", credit: 3 },
          { subject: "Strength of Materials", credit: 4 },
          { subject: "Manufacturing Technology II Laboratory", credit: 1.5 },
          { subject: "OPEN ELECTIVE: Data Structures", credit: 3 },
          { subject: "Tamils and Technology", credit: 1 }
        ],
        // Define other semesters here
      }
    },
    CIVIL: {
      semesters: {
        "1": [
        /*  { subject: "Computer Organisation and Architecture", credit: 3 },
          { subject: "PC Hardware and Trouble Shooting", credit: 3 },
          { subject: "Applied Linear Algebra", credit: 3 },
          { subject: "Spoken English Laboratory", credit: 1 },
          { subject: "Data Structures and Algorithms", credit: 4 },
          { subject: "RDBMS", credit: 3 },
          { subject: "Java Fundamentals", credit: 3 },
          { subject: "Heritage of Tamils", credit: 3 }
        */],
        "2": [
        /*  { subject: "Computer Organisation and Architecture", credit: 3 },
          { subject: "PC Hardware and Trouble Shooting", credit: 3 },
          { subject: "Applied Linear Algebra", credit: 3 },
          { subject: "Spoken English Laboratory", credit: 1 },
          { subject: "Data Structures and Algorithms", credit: 4 },
          { subject: "RDBMS", credit: 3 },
          { subject: "Java Fundamentals", credit: 3 },
          { subject: "Heritage of Tamils", credit: 3 }
        */],
        "3":[],
        // Define other semesters here
      }
    }
  };

  export default departments;