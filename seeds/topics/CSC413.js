module.exports = [
    {
        topicName: 'Introduction to DBMS',
        url: 'C:/Users/USER/Desktop/Project (Web App)/seeds/topic_texts/CSC413/Introduction to DBMS.pdf',
        questions: [
            {
                question: 'What is the primary function of a database management system (DBMS)?',
                options: [
                    {
                        text: 'To manage hardware components within an organization',
                        isAnswer: false
                    },
                    {
                        text: 'To convert raw facts or observations into meaningful information',
                        isAnswer: false
                    },
                    {
                        text: 'To facilitate communication between multiple users',
                        isAnswer: false
                    },
                    {
                        text: 'To centrally manage and control data shared by multiple users',
                        isAnswer: true
                    }
                ]
            },
            {
                question: 'Which of the following is an example of metadata?',
                options: [
                    {
                        text: 'Raw facts or observations',
                        isAnswer: false
                    },
                    {
                        text: 'Data stored in a standard format',
                        isAnswer: false
                    },
                    {
                        text: 'Properties or characteristics of other data',
                        isAnswer: true
                    },
                    {
                        text: 'Finished information products',
                        isAnswer: false
                    }
                ]
            },
            {
                question: 'What is the primary advantage of using a DBMS in an organization?',
                options: [
                    {
                        text: 'Increased redundancy in data storage',
                        isAnswer: false
                    },
                    {
                        text: 'Reduced application development time',
                        isAnswer: true
                    },
                    {
                        text: 'Dependency on system-dependent code',
                        isAnswer: false
                    },
                    {
                        text: 'Inefficient storage and retrieval mechanisms',
                        isAnswer: false
                    }
                ]
            },
            {
                question: "What is one of the disadvantages of a DBMS system?",
                options: [
                    {
                        text: 'Reduced redundancy in data storage',
                        isAnswer: false
                    },
                    {
                        text: 'Simplified backup and recovery operations',
                        isAnswer: false
                    },
                    {
                        text: 'Overhead costs associated with security and integrity',
                        isAnswer: true
                    },
                    {
                        text: 'Independence of application-specific code',
                        isAnswer: false
                    }
                ]
            },
            {
                question: 'What is the purpose of a catalog in a DBMS?',
                options: [
                    {
                        text: 'To store application-specific data',
                        isAnswer: false
                    },
                    {
                        text: 'To provide access to related data items',
                        isAnswer: false
                    },
                    {
                        text: 'To manage metadata and data structures',
                        isAnswer: true
                    },
                    {
                        text: 'To eliminate inconsistencies in redundant data files',
                        isAnswer: false
                    }
                ]
            },
        ],
        image: {
            url: 'https://res.cloudinary.com/dmgrue5xh/image/upload/v1711941837/Project/DBMS_wqy5rd.webp',
            filename: 'Project/DBMS_wqy5rd.webp'
        }
    },
    {
        topicName: 'Entity Relationship(ER) Modeling',
        url: 'C:/Users/USER/Desktop/Project (Web App)/seeds/topic_texts/CSC413/Entity Relationship(ER) Modeling.pdf',
        questions: [
            {
                question: 'What is ER Modeling primarily used for?',
                options: [
                    {
                        text: 'Implementing database systems',
                        isAnswer: false
                    },
                    {
                        text: 'Understanding and organizing data independently of the database implementation',
                        isAnswer: true
                    },
                    {
                        text: 'Managing hardware components within an organization',
                        isAnswer: false
                    },
                    {
                        text: 'Storing and retrieving large amounts of information',
                        isAnswer: false
                    }
                ]
            },
            {
                question: 'Which term describes an entity that depends on another entity for its existence and lacks its own key attribute?',
                options: [
                    {
                        text: 'Regular entity',
                        isAnswer: false
                    },
                    {
                        text: 'Entity instance',
                        isAnswer: false
                    },
                    {
                        text: 'Weak entity',
                        isAnswer: true
                    },
                    {
                        text: 'Stored attribute',
                        isAnswer: false
                    }
                ]
            },
            {
                question: 'What does the degree of a relationship in ER modeling represent?',
                options: [
                    {
                        text: "The number of attributes in an entity",
                        isAnswer: false
                    },
                    {
                        text: "The number of key attributes in an entity",
                        isAnswer: false
                    },
                    {
                        text: "The number of entity types involved in a relationship",
                        isAnswer: true
                    },
                    {
                        text: "The number of instances of an entity",
                        isAnswer: false
                    }
                ]
            },
            {
                question: "In ER modeling, what does a one-to-many (1:N) relationship indicate?",
                options: [
                    {
                        text: 'Each entity instance is connected to multiple instances of another entity',
                        isAnswer: false
                    },
                    {
                        text: 'AEach entity instance is connected to one instance of another entity',
                        isAnswer: false
                    },
                    {
                        text: 'Multiple entity instances are connected to one instance of another entity',
                        isAnswer: true
                    },
                    {
                        text: 'One entity instance is connected to one instance of another entity',
                        isAnswer: false
                    }
                ]
            },
            {
                question: 'What is a disadvantage of ER Modeling?',
                options: [
                    {
                        text: 'It is difficult to understand and implement',
                        isAnswer: false
                    },
                    {
                        text: "It leads to misinterpretations due to ambiguous diagrams",
                        isAnswer: true
                    },
                    {
                        text: 'It lacks intuitive representation and business user language',
                        isAnswer: false
                    },
                    {
                        text: 'It cannot be generalized or specialized based on needs',
                        isAnswer: false
                    }
                ]
            },
        ],
        image: {
            url: 'https://res.cloudinary.com/dmgrue5xh/image/upload/v1711942069/Project/Entity-Relationship-Model-ER-model-in-DBMS-img_j7thei.webp',
            filename: 'Project/Entity-Relationship-Model-ER-model-in-DBMS-img_j7thei.webp'
        }
    },
    {
        topicName: 'Relational Model',
        url: 'C:/Users/USER/Desktop/Project (Web App)/seeds/topic_texts/CSC413/Relational Model.pdf',
        questions: [
            {
                question: 'Why has the relational model become the primary data model for commercial data processing applications?',
                options: [
                    {
                        text: 'Due to its complex structure, which suits modern data needs',
                        isAnswer: false
                    },
                    {
                        text: 'Because it allows for easy integration with other data models',
                        isAnswer: false
                    },
                    {
                        text: 'Its simplicity compared to earlier models like the network and hierarchical models',
                        isAnswer: true
                    },
                    {
                        text: 'Because it offers advanced features for data manipulation',
                        isAnswer: false
                    }
                ]
            },
            {
                question: 'In a relational database, what corresponds to a row in a table?',
                options: [
                    {
                        text: 'Domain',
                        isAnswer: false
                    },
                    {
                        text: 'Attribute',
                        isAnswer: false
                    },
                    {
                        text: 'Tuple',
                        isAnswer: true
                    },
                    {
                        text: 'Relation',
                        isAnswer: false
                    }
                ]
            },
            {
                question: 'What is a superkey in the context of a relation?',
                options: [
                    {
                        text: "A set of attributes that uniquely identifies a tuple within the relation",
                        isAnswer: true
                    },
                    {
                        text: "A key used for sorting tuples within a relation",
                        isAnswer: false
                    },
                    {
                        text: "An extraneous attribute that does not contribute to tuple identification",
                        isAnswer: false
                    },
                    {
                        text: "A unique value assigned to each tuple within the relation",
                        isAnswer: false
                    }
                ]
            },
            {
                question: "How is a primary key different from a candidate key in a relation schema?",
                options: [
                    {
                        text: 'A primary key is chosen by the database designer as the principal means of identifying tuples, while a candidate key is any set of attributes that uniquely identifies a tuple',
                        isAnswer: true
                    },
                    {
                        text: 'A primary key is a subset of a candidate key, chosen for its simplicity',
                        isAnswer: false
                    },
                    {
                        text: 'A primary key is automatically generated by the database system, while a candidate key must be manually defined',
                        isAnswer: false
                    },
                    {
                        text: 'A primary key can contain extraneous attributes, while a candidate key must consist of the minimum set of attributes required for tuple identification',
                        isAnswer: false
                    }
                ]
            },
            {
                question: 'What does a foreign key in a relation indicate?',
                options: [
                    {
                        text: 'It is the primary key of the relation',
                        isAnswer: false
                    },
                    {
                        text: "It uniquely identifies a tuple within the relation",
                        isAnswer: false
                    },
                    {
                        text: 'It references the primary key of another relation',
                        isAnswer: true
                    },
                    {
                        text: 'It is used for sorting tuples within the relation',
                        isAnswer: false
                    }
                ]
            },
        ],
        image: {
            url: 'https://res.cloudinary.com/dmgrue5xh/image/upload/v1711942275/Project/Your-paragraph-text--90-_hfmnjj.jpg',
            filename: 'Project/Your-paragraph-text--90-_hfmnjj.jpg'
        }
    },
    {
        topicName: 'Structured Query Language (SQL)',
        url: 'C:/Users/USER/Desktop/Project (Web App)/seeds/topic_texts/CSC413/Structured Query Language (SQL).pdf',
        questions: [
            {
                question: 'What does SQL stand for?',
                options: [
                    {
                        text: 'Standard Query Language',
                        isAnswer: false
                    },
                    {
                        text: 'Simple Query Language',
                        isAnswer: false
                    },
                    {
                        text: 'Structured Query Language',
                        isAnswer: true
                    },
                    {
                        text: 'Systematic Query Language',
                        isAnswer: false
                    }
                ]
            },
            {
                question: 'Which part of SQL is used to create a table, index, or view?',
                options: [
                    {
                        text: 'Data-definition language (DDL)',
                        isAnswer: true
                    },
                    {
                        text: 'Interactive data-manipulation language (DML)',
                        isAnswer: false
                    },
                    {
                        text: 'Transaction control',
                        isAnswer: false
                    },
                    {
                        text: 'View definition',
                        isAnswer: false
                    }
                ]
            },
            {
                question: 'What does the "create" statement in SQL allow you to do?',
                options: [
                    {
                        text: "Create a new database",
                        isAnswer: false
                    },
                    {
                        text: "Create a new query",
                        isAnswer: false
                    },
                    {
                        text: "Create a new table, index, or view",
                        isAnswer: true
                    },
                    {
                        text: "Create a new transaction",
                        isAnswer: false
                    }
                ]
            },
            {
                question: 'What is the purpose of the "distinct" keyword in SQL?',
                options: [
                    {
                        text: 'To specify access rights to relations and views',
                        isAnswer: false
                    },
                    {
                        text: 'To prevent the duplication of rows in query results',
                        isAnswer: true
                    },
                    {
                        text: 'To define integrity constraints for the database',
                        isAnswer: false
                    },
                    {
                        text: 'To create a new database schema',
                        isAnswer: false
                    }
                ]
            },
            {
                question: 'Which part of SQL specifies a condition for selecting tuples from a table?',
                options: [
                    {
                        text: 'Select Clause',
                        isAnswer: false
                    },
                    {
                        text: "From Clause",
                        isAnswer: false
                    },
                    {
                        text: 'Where Clause',
                        isAnswer: true
                    },
                    {
                        text: 'Distinct Clause',
                        isAnswer: false
                    }
                ]
            },
        ],
        image: {
            url: 'https://res.cloudinary.com/dmgrue5xh/image/upload/v1711942341/Project/SQL-Tutorial_lfsadv.png',
            filename: 'Project/SQL-Tutorial_lfsadv.png'
        }
    },
    {
        topicName: 'Object-Oriented Database Systems',
        url: 'C:/Users/USER/Desktop/Project (Web App)/seeds/topic_texts/CSC413/Object-Oriented Database Systems.pdf',
        questions: [
            {
                question: 'What distinguishes the Object-oriented approach from semantic data models in databases?',
                options: [
                    {
                        text: 'Use of constructors and destructors',
                        isAnswer: false
                    },
                    {
                        text: 'Inclusion of behavior along with object structure in the database',
                        isAnswer: true
                    },
                    {
                        text: 'Implementation of multiple inheritance',
                        isAnswer: false
                    },
                    {
                        text: 'Use of class definitions to describe entities',
                        isAnswer: false
                    }
                ]
            },
            {
                question: 'In Object-oriented systems, what is the role of messages?',
                options: [
                    {
                        text: "They alter an object's private state",
                        isAnswer: false
                    },
                    {
                        text: 'They define the structure of the object',
                        isAnswer: false
                    },
                    {
                        text: 'They convey requested operations between objects',
                        isAnswer: true
                    },
                    {
                        text: 'They release resources held by an object',
                        isAnswer: false
                    }
                ]
            },
            {
                question: 'What are constructors used for in Object-oriented systems?',
                options: [
                    {
                        text: "Deleting instances of an object",
                        isAnswer: false
                    },
                    {
                        text: "Changing an object's internal state",
                        isAnswer: false
                    },
                    {
                        text: "Initializing data items of a new object instance",
                        isAnswer: true
                    },
                    {
                        text: "Ensuring data independence in encapsulation",
                        isAnswer: false
                    }
                ]
            },
            {
                question: "What is the purpose of inheritance in Object-oriented systems?",
                options: [
                    {
                        text: 'To encapsulate data structures and methods within an object',
                        isAnswer: false
                    },
                    {
                        text: 'To provide persistence to Object-oriented languages',
                        isAnswer: false
                    },
                    {
                        text: 'To allow objects to interact with each other through messages',
                        isAnswer: false
                    },
                    {
                        text: 'To reuse and extend existing data definitions and methods',
                        isAnswer: true
                    }
                ]
            },
            {
                question: 'How does encapsulation contribute to data independence in Object-oriented systems?',
                options: [
                    {
                        text: 'By ensuring that objects are destroyed when the application ends',
                        isAnswer: false
                    },
                    {
                        text: "By encapsulating both data structures and methods within an object",
                        isAnswer: false
                    },
                    {
                        text: 'By providing persistence to data stored in memory',
                        isAnswer: false
                    },
                    {
                        text: 'By allowing access to internal data structures only through public methods',
                        isAnswer: true
                    }
                ]
            },
        ],
        image: {
            url: 'https://res.cloudinary.com/dmgrue5xh/image/upload/v1711942428/Project/Concepts-of-object-oriented-databases_pq5aar.png',
            filename: 'Project/Concepts-of-object-oriented-databases_pq5aar.png'
        }
    },

];