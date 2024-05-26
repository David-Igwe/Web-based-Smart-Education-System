module.exports = [
    {
        topicName: 'Process', 
        url: 'C:/Users/USER/Desktop/Project (Web App)/seeds/topic_texts/CSC432/Process.pdf',
        questions: [
            {
                question: 'What is the primary role of a process in an operating system?',
                options: [
                    {
                        text: 'Executing code',
                        isAnswer: false
                    },
                    {
                        text: 'Managing threads',
                        isAnswer: false
                    },
                    {
                        text: 'Allocating memory',
                        isAnswer: false
                    },
                    {
                        text: 'Containment and management',
                        isAnswer: true
                    }
                ]
            },
            {
                question: 'Which component of a process stores the default security context used by threads within the process?',
                options: [
                    {
                        text: 'Private virtual address space',
                        isAnswer: false
                    },
                    {
                        text: 'Access token',
                        isAnswer: true
                    },
                    {
                        text: 'Handle table',
                        isAnswer: false
                    },
                    {
                        text: 'Executable program',
                        isAnswer: false
                    }
                ]
            },
            {
                question: 'What uniquely identifies a process in an operating system?',
                options: [
                    {
                        text: 'Executable file name',
                        isAnswer: false
                    },
                    {
                        text: 'Thread count',
                        isAnswer: false
                    },
                    {
                        text: 'Process ID',
                        isAnswer: true
                    },
                    {
                        text: 'Virtual address space',
                        isAnswer: false
                    }
                ]
            },
            {
                question: "How many threads are typically created when a normal user-mode process is created?",
                options: [
                    {
                        text: 'None',
                        isAnswer: false
                    },
                    {
                        text: 'One',
                        isAnswer: true
                    },
                    {
                        text: 'Two',
                        isAnswer: false
                    },
                    {
                        text: 'Variable, depending on the operating system',
                        isAnswer: false
                    }
                ]
            },
            {
                question: 'What does each process in an operating system have its own instance of?',
                options: [
                    {
                        text: 'Handle table',
                        isAnswer: false
                    },
                    {
                        text: 'Process ID',
                        isAnswer: false
                    },
                    {
                        text: 'Virtual address space',
                        isAnswer: true
                    },
                    {
                        text: 'Executable program',
                        isAnswer: false
                    }
                ]
            },
        ],
        image: {
            url: 'https://res.cloudinary.com/dmgrue5xh/image/upload/v1711942584/Project/Concepts-_Program_vs._Process_vs._Thread_tljwq7.jpg',
            filename: 'Project/Concepts-_Program_vs._Process_vs._Thread_tljwq7.jpg'
        }
    },
    {
        topicName: 'Threads', 
        url: 'C:/Users/USER/Desktop/Project (Web App)/seeds/topic_texts/CSC432/Threads.pdf',
        questions: [
            {
                question: 'What is a thread primarily responsible for within an operating system?',
                options: [
                    {
                        text: 'Allocating memory',
                        isAnswer: false
                    },
                    {
                        text: 'Managing processes',
                        isAnswer: false
                    },
                    {
                        text: 'Executing code',
                        isAnswer: true
                    },
                    {
                        text: 'Handling system calls',
                        isAnswer: false
                    }
                ]
            },
            {
                question: 'Which advantage is specific to user-level threads compared to kernel-level threads?',
                options: [
                    {
                        text: 'Easy multiprocessing',
                        isAnswer: false
                    },
                    {
                        text: 'Faster context switching',
                        isAnswer: false
                    },
                    {
                        text: 'Hardware independence',
                        isAnswer: true
                    },
                    {
                        text: 'Blocking I/O protocol',
                        isAnswer: false
                    }
                ]
            },
            {
                question: 'How are user-level threads created?',
                options: [
                    {
                        text: "By the kernel directly",
                        isAnswer: false
                    },
                    {
                        text: "Through system calls",
                        isAnswer: false
                    },
                    {
                        text: "Using thread libraries",
                        isAnswer: true
                    },
                    {
                        text: "With hardware utility",
                        isAnswer: false
                    }
                ]
            },
            {
                question: "What is a key disadvantage of kernel-level threads?",
                options: [
                    {
                        text: 'Platform independence',
                        isAnswer: false
                    },
                    {
                        text: 'Slow and inefficient performance',
                        isAnswer: true
                    },
                    {
                        text: 'Easy multiprocessing',
                        isAnswer: false
                    },
                    {
                        text: 'Nonblocking I/O calls',
                        isAnswer: false
                    }
                ]
            },
            {
                question: 'What is the primary difference between a thread and a process?',
                options: [
                    {
                        text: 'A process manages memory, while a thread executes code',
                        isAnswer: false
                    },
                    {
                        text: "A process executes code, while a thread manages system calls",
                        isAnswer: false
                    },
                    {
                        text: 'A process is hardware-dependent, while a thread is platform-independent',
                        isAnswer: false
                    },
                    {
                        text: 'A process is a lightweight segment, while a thread is a program or software',
                        isAnswer: true
                    }
                ]
            },
        ],
        image: {
            url: 'https://res.cloudinary.com/dmgrue5xh/image/upload/v1711942680/Project/threads_multiple_threaded_vfia25.png',
            filename: 'Project/threads_multiple_threaded_vfia25.png'
        }
    },
    {
        topicName: 'Multithreading', 
        url: 'C:/Users/USER/Desktop/Project (Web App)/seeds/topic_texts/CSC432/Multithreading.pdf',
        questions: [
            {
                question: 'What is the primary difference between multitasking and multithreading?',
                options: [
                    {
                        text: 'Multitasking works on processes, while multithreading works on threads',
                        isAnswer: true
                    },
                    {
                        text: 'Multithreading utilizes more resources than multitasking',
                        isAnswer: false
                    },
                    {
                        text: 'Multitasking requires context switching, while multithreading does not',
                        isAnswer: false
                    },
                    {
                        text: 'Multithreading enables users to interact with several applications simultaneously',
                        isAnswer: false
                    }
                ]
            },
            {
                question: 'Which characteristic is specific to processes rather than threads?',
                options: [
                    {
                        text: 'Efficient context switching',
                        isAnswer: false
                    },
                    {
                        text: 'Minimal resource usage',
                        isAnswer: false
                    },
                    {
                        text: 'Isolated memory allocation',
                        isAnswer: true
                    },
                    {
                        text: 'Effective communication between tasks',
                        isAnswer: false
                    }
                ]
            },
            {
                question: 'In a multithreading architecture, what is shared among all threads?',
                options: [
                    {
                        text: "Memory space",
                        isAnswer: true
                    },
                    {
                        text: "Access tokens",
                        isAnswer: false
                    },
                    {
                        text: "Handle tables",
                        isAnswer: false
                    },
                    {
                        text: "Process IDs",
                        isAnswer: false
                    }
                ]
            },
            {
                question: "What is a major advantage of multithreading over single-threaded architecture?",
                options: [
                    {
                        text: 'Increased context switching time',
                        isAnswer: false
                    },
                    {
                        text: 'Reduced CPU utilization',
                        isAnswer: false
                    },
                    {
                        text: 'Improved memory utilization',
                        isAnswer: true
                    },
                    {
                        text: 'Limited application scalability',
                        isAnswer: false
                    }
                ]
            },
            {
                question: 'Why is multithreading important in modern application development?',
                options: [
                    {
                        text: 'It reduces application responsiveness',
                        isAnswer: false
                    },
                    {
                        text: "It limits memory utilization",
                        isAnswer: false
                    },
                    {
                        text: 'It improves resource sharing efficiency',
                        isAnswer: true
                    },
                    {
                        text: 'It eliminates the need for context switching',
                        isAnswer: false
                    }
                ]
            },
        ],
        image: {
            url: 'https://res.cloudinary.com/dmgrue5xh/image/upload/v1711942754/Project/What-is-Multithreading_exfkdz.jpg',
            filename: 'Project/What-is-Multithreading_exfkdz.jpg'
        }
    },
    {
        topicName: 'Shared Memory', 
        url: 'C:/Users/USER/Desktop/Project (Web App)/seeds/topic_texts/CSC432/Shared Memory.pdf',
        questions: [
            {
                question: 'What is one of the primary advantages of shared memory over other IPC mechanisms?',
                options: [
                    {
                        text: 'It requires synchronization for data access',
                        isAnswer: false
                    },
                    {
                        text: 'Data needs to be copied to the kernel before exchange',
                        isAnswer: false
                    },
                    {
                        text: 'It allows processes to share a common memory region',
                        isAnswer: true
                    },
                    {
                        text: ' It relies on separate address spaces for each process',
                        isAnswer: false
                    }
                ]
            },
            {
                question: 'Which system call is used to create a shared memory segment in an operating system?',
                options: [
                    {
                        text: 'shmat()',
                        isAnswer: false
                    },
                    {
                        text: 'shmget()',
                        isAnswer: true
                    },
                    {
                        text: 'shmdt()',
                        isAnswer: false
                    },
                    {
                        text: 'shmctl()',
                        isAnswer: false
                    }
                ]
            },
            {
                question: 'What is the return type of the shmdt() system call?',
                options: [
                    {
                        text: "void pointer",
                        isAnswer: false
                    },
                    {
                        text: "Integer",
                        isAnswer: true
                    },
                    {
                        text: "Float",
                        isAnswer: false
                    },
                    {
                        text: "Character",
                        isAnswer: false
                    }
                ]
            },
            {
                question: "What data structure does the kernel maintain to keep track of shared memory segments?",
                options: [
                    {
                        text: 'struct shmid_ds',
                        isAnswer: true
                    },
                    {
                        text: 'struct ipc_perm',
                        isAnswer: false
                    },
                    {
                        text: 'struct shm_table',
                        isAnswer: false
                    },
                    {
                        text: 'struct shared_memory',
                        isAnswer: false
                    }
                ]
            },
            {
                question: 'Which command is used with the shmctl() system call to destroy a shared memory segment?',
                options: [
                    {
                        text: 'IPC_STAT',
                        isAnswer: false
                    },
                    {
                        text: "IPC_SET",
                        isAnswer: false
                    },
                    {
                        text: 'IPC_RMID',
                        isAnswer: true
                    },
                    {
                        text: 'IPC_INFO',
                        isAnswer: false
                    }
                ]
            },
        ],
        image: {
            url: 'https://res.cloudinary.com/dmgrue5xh/image/upload/v1711942805/Project/shared_memory_mobuwq.png',
            filename: 'Project/shared_memory_mobuwq.png'
        }
    },
    {
        topicName: 'Socket Programming', 
        url: 'C:/Users/USER/Desktop/Project (Web App)/seeds/topic_texts/CSC432/Socket Programming.pdf',
        questions: [
            {
                question: 'What is the primary purpose of socket programming?',
                options: [
                    {
                        text: 'To establish a connection between hardware components',
                        isAnswer: false
                    },
                    {
                        text: 'To facilitate communication between processes or programs over a network',
                        isAnswer: true
                    },
                    {
                        text: 'To create a bidirectional gateway within a single machine',
                        isAnswer: false
                    },
                    {
                        text: 'To manage file descriptors in Unix/Linux systems',
                        isAnswer: false
                    }
                ]
            },
            {
                question: 'Which protocol is typically used by stream sockets for data transfer?',
                options: [
                    {
                        text: 'TCP',
                        isAnswer: true
                    },
                    {
                        text: 'UDP',
                        isAnswer: false
                    },
                    {
                        text: 'ICMP',
                        isAnswer: false
                    },
                    {
                        text: 'ARP',
                        isAnswer: false
                    }
                ]
            },
            {
                question: 'What is a characteristic of datagram sockets?',
                options: [
                    {
                        text: "They guarantee ordered delivery of packets",
                        isAnswer: false
                    },
                    {
                        text: "They use a connection-oriented approach",
                        isAnswer: false
                    },
                    {
                        text: "They ensure reliable data delivery",
                        isAnswer: false
                    },
                    {
                        text: "They may deliver packets in any order to the receiver",
                        isAnswer: true
                    }
                ]
            },
            {
                question: "What is the purpose of raw sockets in socket programming?",
                options: [
                    {
                        text: 'To provide an abstract layer for communication between processes',
                        isAnswer: false
                    },
                    {
                        text: 'To develop new protocols on top of existing ones',
                        isAnswer: true
                    },
                    {
                        text: 'To ensure secure data transmission over the Internet',
                        isAnswer: false
                    },
                    {
                        text: 'To handle data transmission within the same host system',
                        isAnswer: false
                    }
                ]
            },
            {
                question: 'What is the underlying protocol used by Internet domain sockets for communication?',
                options: [
                    {
                        text: 'TCP/IP',
                        isAnswer: true
                    },
                    {
                        text: "UDP",
                        isAnswer: false
                    },
                    {
                        text: 'ICMP',
                        isAnswer: false
                    },
                    {
                        text: 'ARP',
                        isAnswer: false
                    }
                ]
            },
        ],
        image: {
            url: 'https://res.cloudinary.com/dmgrue5xh/image/upload/v1711942869/Project/socket-programming-in-computer-network_thumbnail_hw8u5x.webp',
            filename: 'Project/socket-programming-in-computer-network_thumbnail_hw8u5x.webp'
        }
    }

];