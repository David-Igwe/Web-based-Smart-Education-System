module.exports = [
    {
        topicName: 'Introduction to Concepts of Programming Languages', 
        url: 'C:/Users/USER/Desktop/Project (Web App)/seeds/topic_texts/CSC422/Introduction to Concepts of Programming Languages.txt',
        questions: [
            {
                question: 'Which of the following is a reason for studying the concepts of programming languages?',
                options: [
                    {
                        text: 'To help select appropriate programming languages for software development projects',
                        isAnswer: true
                    },
                    {
                        text: 'To learn new spoken languages',
                        isAnswer: false
                    },
                    {
                        text: 'To design new programming languages',
                        isAnswer: false
                    }
                ]
            },
            {
                question: 'What is a code in the context of programming languages?',
                options: [
                    {
                        text: 'A computational expression after translation and resource allocation',
                        isAnswer: false
                    },
                    {
                        text: 'A formalized language for computational expression',
                        isAnswer: false
                    },
                    {
                        text: 'A computational expression yet to undergo translation',
                        isAnswer: true
                    }
                ]
            },
            {
                question: 'Which of the following is not a property of programming languages?',
                options: [
                    {
                        text: 'Correctness',
                        isAnswer: false
                    },
                    {
                        text: 'Efficiency',
                        isAnswer: false
                    },
                    {
                        text: 'Debuggability',
                        isAnswer: true
                    }
                ]
            },
            {
                question: "Which type of programming language is suitable for web applications?",
                options: [
                    {
                        text: 'Business Applications',
                        isAnswer: false
                    },
                    {
                        text: 'Data Manipulation',
                        isAnswer: false
                    },
                    {
                        text: 'Scripting languages',
                        isAnswer: true
                    }
                ]
            },
            {
                question: 'Which software development methodology involves languages like Small-talk and Java?',
                options: [
                    {
                        text: 'Structured',
                        isAnswer: false
                    },
                    {
                        text: 'Procedural',
                        isAnswer: false
                    },
                    {
                        text: 'Object Orientation',
                        isAnswer: true
                    }
                ]
            },
        ],
        image: {
            url: 'hhttps://res.cloudinary.com/dmgrue5xh/image/upload/v1711948638/Project/Best-Programming-Languages-to-Start-Learning-Today_fucl45.avif',
            filename: 'Project/Best-Programming-Languages-to-Start-Learning-Today_fucl45.avif'
        }
    },
    {
        topicName: 'Variables', 
        url: 'C:/Users/USER/Desktop/Project (Web App)/seeds/topic_texts/CSC422/Variables.txt',
        questions: [
            {
                question: 'What are the attributes of a variable?',
                options: [
                    {
                        text: 'Name, address, type, value, lifetime, scope',
                        isAnswer: true
                    },
                    {
                        text: 'Name, address, type, size, value, scope',
                        isAnswer: false
                    },
                    {
                        text: 'Name, location, type, value, lifespan, scope',
                        isAnswer: false
                    }
                ]
            },
            {
                question: 'Which type of binding occurs at translation time and remains constant throughout program execution?',
                options: [
                    {
                        text: 'Static binding',
                        isAnswer: true
                    },
                    {
                        text: 'Dynamic binding',
                        isAnswer: false
                    },
                    {
                        text: 'Stack-dynamic binding',
                        isAnswer: false
                    }
                ]
            },
            {
                question: 'What is the primary disadvantage of explicit heap-dynamic variables?',
                options: [
                    {
                        text: "They are difficult to design and implement",
                        isAnswer: true
                    },
                    {
                        text: "They are slow",
                        isAnswer: false
                    },
                    {
                        text: "They are susceptible to overflow and underflow",
                        isAnswer: false
                    }
                ]
            },
            {
                question: "What is the scope of a local variable?",
                options: [
                    {
                        text: 'It is accessible anywhere in the program',
                        isAnswer: false
                    },
                    {
                        text: 'It is accessible only within a specific subprogram',
                        isAnswer: true
                    },
                    {
                        text: 'It is accessible globally',
                        isAnswer: false
                    }
                ]
            },
            {
                question: 'Which type of variable allocation occurs at runtime outside the control of the programmer?',
                options: [
                    {
                        text: 'Static Variable',
                        isAnswer: false
                    },
                    {
                        text: "Explicit Heap-Dynamic Variable",
                        isAnswer: false
                    },
                    {
                        text: 'Implicit Heap-Dynamic Variable',
                        isAnswer: true
                    }
                ]
            },
        ],
        image: {
            url: 'https://res.cloudinary.com/dmgrue5xh/image/upload/v1711948807/Project/1_F8IOVSYnzHBIdYR63lZHHQ_ubzfnc.jpg',
            filename: 'Project/1_F8IOVSYnzHBIdYR63lZHHQ_ubzfnc.jpg'
        }
    },
    {
        topicName: 'Statement', 
        url: 'C:/Users/USER/Desktop/Project (Web App)/seeds/topic_texts/CSC422/Statement.txt',
        questions: [
            {
                question: 'Which of the following is NOT a type of statement?',
                options: [
                    {
                        text: 'Sequence',
                        isAnswer: false
                    },
                    {
                        text: 'Loop',
                        isAnswer: true
                    },
                    {
                        text: 'Selection',
                        isAnswer: false
                    }
                ]
            },
            {
                question: 'What is the primary purpose of a selection statement in programming?',
                options: [
                    {
                        text: 'To execute only one statement',
                        isAnswer: false
                    },
                    {
                        text: 'To alter the order of execution',
                        isAnswer: false
                    },
                    {
                        text: 'To execute or exclude statements based on a condition',
                        isAnswer: true
                    }
                ]
            },
            {
                question: 'What are the design issues associated with multi-way selection statements?',
                options: [
                    {
                        text: "Type of condition expression, execution flow, default case specification",
                        isAnswer: false
                    },
                    {
                        text: "Form of selection clause, type of condition expression, assignment of statements",
                        isAnswer: true
                    },
                    {
                        text: "Syntax, selection clause, case label, default case",
                        isAnswer: false
                    }
                ]
            },
            {
                question: "How are selection clauses typically specified?",
                options: [
                    {
                        text: 'Using mathematical expressions',
                        isAnswer: false
                    },
                    {
                        text: 'Using keywords and condition expressions',
                        isAnswer: true
                    },
                    {
                        text: 'Using special symbols only',
                        isAnswer: true
                    }
                ]
            },
            {
                question: 'In C-based multi-way selection statements, what is used to mark the end of each case?',
                options: [
                    {
                        text: 'Braces {}',
                        isAnswer: false
                    },
                    {
                        text: "Keywords",
                        isAnswer: false
                    },
                    {
                        text: 'Delimiter :',
                        isAnswer: true
                    }
                ]
            },
        ],
        image: {
            url: 'https://res.cloudinary.com/dmgrue5xh/image/upload/v1711948879/Project/What-is-a-statement-in_programming_hsdbsr.jpg',
            filename: 'Project/What-is-a-statement-in_programming_hsdbsr.jpg'
        }
    },
    {
        topicName: 'Subprograms', 
        url: 'C:/Users/USER/Desktop/Project (Web App)/seeds/topic_texts/CSC422/Subprograms.txt',
        questions: [
            {
                question: 'What is a primary characteristic of a subroutine?',
                options: [
                    {
                        text: 'It can have multiple entry and exit points',
                        isAnswer: false
                    },
                    {
                        text: 'It must return a value',
                        isAnswer: false
                    },
                    {
                        text: 'It has one entry and one exit point',
                        isAnswer: true
                    }
                ]
            },
            {
                question: 'What distinguishes a function from a procedure?',
                options: [
                    {
                        text: 'Functions can have multiple entry points',
                        isAnswer: false
                    },
                    {
                        text: 'Functions return zero or more values',
                        isAnswer: true
                    },
                    {
                        text: 'Procedures have a single entry point',
                        isAnswer: false
                    }
                ]
            },
            {
                question: 'Which parameter passing technique is known for its memory inefficiency?',
                options: [
                    {
                        text: "Pass-by-value",
                        isAnswer: true
                    },
                    {
                        text: "Pass-by-address",
                        isAnswer: false
                    },
                    {
                        text: "Pass-by-result",
                        isAnswer: false
                    }
                ]
            },
            {
                question: "What is the primary advantage of pass-by-value parameter passing?",
                options: [
                    {
                        text: 'Efficient memory usage',
                        isAnswer: true
                    },
                    {
                        text: 'Avoidance of side-effects',
                        isAnswer: false
                    },
                    {
                        text: 'Allows for dynamic binding',
                        isAnswer: false
                    }
                ]
            },
            {
                question: 'What is functional cohesion in a subprogram?',
                options: [
                    {
                        text: "When the subprogram's roles are performed by other entities in the program",
                        isAnswer: false
                    },
                    {
                        text: "When the subprogram achieves its goal through unrelated operations",
                        isAnswer: false
                    },
                    {
                        text: 'When everything in the subprogram contributes to achieving its goal',
                        isAnswer: true
                    }
                ]
            },
        ],
        image: {
            url: 'https://res.cloudinary.com/dmgrue5xh/image/upload/v1711948938/Project/subprograms-m98-m99_qf69bt.jpg',
            filename: 'Project/subprograms-m98-m99_qf69bt.jpg'
        }
    },
    {
        topicName: 'Object Oriented Programming', 
        url: 'C:/Users/USER/Desktop/Project (Web App)/seeds/topic_texts/CSC422/Object Oriented Programming.txt',
        questions: [
            {
                question: 'What are the fundamental principles of Object Oriented Programming (OOP) that support reusability?',
                options: [
                    {
                        text: 'Abstraction, classes, and methods',
                        isAnswer: false
                    },
                    {
                        text: 'Inheritance, abstraction, and polymorphism',
                        isAnswer: false
                    },
                    {
                        text: 'Encapsulation, inheritance, and polymorphism',
                        isAnswer: true
                    }
                ]
            },
            {
                question: 'What does encapsulation refer to in Object Oriented Programming (OOP)?',
                options: [
                    {
                        text: 'The process of creating objects from classes',
                        isAnswer: false
                    },
                    {
                        text: 'Protecting the object and its contents from unauthorized access',
                        isAnswer: true
                    },
                    {
                        text: 'Inheriting attributes and behaviors from a parent class',
                        isAnswer: false
                    }
                ]
            },
            {
                question: 'Which principle of OOP describes the ability of objects to take on different forms or types?',
                options: [
                    {
                        text: "Inheritance",
                        isAnswer: false
                    },
                    {
                        text: "Encapsulation",
                        isAnswer: false
                    },
                    {
                        text: "Polymorphism",
                        isAnswer: true
                    }
                ]
            },
            {
                question: "What is recommended regarding inheritance in OOP languages?",
                options: [
                    {
                        text: 'Single inheritance is recommended, and double inheritance should be avoided',
                        isAnswer: true
                    },
                    {
                        text: 'Double inheritance is recommended for better maintainability',
                        isAnswer: false
                    },
                    {
                        text: 'Both single and double inheritance are equally recommended',
                        isAnswer: false
                    }
                ]
            },
            {
                question: 'What makes a language a pure Object Oriented Programming (OOP) language?',
                options: [
                    {
                        text: 'When it supports only object-oriented principles',
                        isAnswer: false
                    },
                    {
                        text: "When it enforces object orientation and dynamic binding",
                        isAnswer: true
                    },
                    {
                        text: 'When it supports object orientation without any other programming paradigms',
                        isAnswer: false
                    }
                ]
            },
        ],
        image: {
            url: 'https://res.cloudinary.com/dmgrue5xh/image/upload/v1711949032/Project/object-oriented-programming-languages_ffgrcv.png',
            filename: 'Project/object-oriented-programming-languages_ffgrcv.png'
        }
    },

]