import firebase_admin
from firebase_admin import credentials, firestore

# Inicializar la app con las credenciales
cred = credentials.Certificate("./prelaboral-435211-edc2bbcab539.json")
firebase_admin.initialize_app(cred)

# Conectar a Firestore
db = firestore.client()

# Datos de Ingeniería de Software
ingenieria_software_data = {
    "area": "Tecnología",
    "id": "ingenieriaSoftware",
    "name": "Ingeniería de Software",
    "videos": [
        {
            "title": "Podcast",
            "videoUrl": "https://storage.googleapis.com/prelaboral-435211.appspot.com/videos/Podcast_Ingenieria_Software.mp4",
            "icon": "FaPodcast",
            "exitTestQuestions": [
                {
                    "question": "¿Cuánto te gustaría trabajar en esta área?",
                    "type": "radio",
                    "options": [
                        "No me interesa en absoluto",
                        "Me interesa poco",
                        "Tengo un interés moderado",
                        "Me interesa bastante",
                        "Me interesa muchísimo"
                    ]
                },
                {
                    "question": "¿Qué herramienta es esencial para el manejo de versiones de código en desarrollo de software?",
                    "type": "radio",
                    "options": ["Docker", "Git", "Jenkins", "Kubernetes"],
                    "correct": "Git"
                },
                {
                    "question": "¿Cuál de los siguientes lenguajes de programación es más utilizado para desarrollo de aplicaciones móviles en Android?",
                    "type": "radio",
                    "options": ["Swift", "Kotlin", "Python", "Ruby"],
                    "correct": "Kotlin"
                },
                {
                    "question": "¿Qué tipo de prueba se enfoca en verificar el funcionamiento de un módulo o componente de forma aislada?",
                    "type": "radio",
                    "options": ["Prueba de integración", "Prueba unitaria", "Prueba de rendimiento", "Prueba de aceptación"],
                    "correct": "Prueba unitaria"
                },
                {
                    "question": "¿Qué herramienta de desarrollo de software incluye funcionalidades de Inteligencia Artificial para sugerir código?",
                    "type": "radio",
                    "options": ["Eclipse", "Visual Studio Code", "NetBeans", "IntelliJ IDEA"],
                    "correct": "Visual Studio Code"
                },
                {
                    "question": "¿Cuál de las siguientes bases de datos es NoSQL?",
                    "type": "radio",
                    "options": ["MySQL", "PostgreSQL", "MongoDB", "Oracle"],
                    "correct": "MongoDB"
                },
                {
                    "question": "¿Cuál de las siguientes habilidades es más importante para trabajar en equipo en un proyecto de software?",
                    "type": "radio",
                    "options": [
                        "Dominio absoluto de un lenguaje de programación",
                        "Capacidad de comunicación efectiva",
                        "Conocimiento avanzado de algoritmos",
                        "Experiencia en desarrollo de videojuegos"
                    ],
                    "correct": "Capacidad de comunicación efectiva"
                },
                {
                    "question": "¿Qué enfoque es más útil para entender las necesidades del cliente en un proyecto de software?",
                    "type": "radio",
                    "options": [
                        "Escribir código sin consultar al cliente",
                        "Realizar reuniones frecuentes y preguntas claras",
                        "Ignorar los comentarios del cliente y seguir el plan inicial",
                        "Delegar toda la comunicación al líder del proyecto"
                    ],
                    "correct": "Realizar reuniones frecuentes y preguntas claras"
                },
                {
                    "question": "¿Cuál de las siguientes es una metodología ágil utilizada en desarrollo de software?",
                    "type": "radio",
                    "options": ["Cascada", "Scrum", "Six Sigma", "Lean Manufacturing"],
                    "correct": "Scrum"
                },
                {
                    "question": "¿Qué habilidad es clave para priorizar tareas en un proyecto con plazos ajustados?",
                    "type": "radio",
                    "options": [
                        "Saber programar rápido",
                        "Gestión del tiempo y organización",
                        "Conocimiento profundo de hardware",
                        "Dominio de diseño gráfico"
                    ],
                    "correct": "Gestión del tiempo y organización"
                },
                {
                    "question": "¿Por qué es importante entender el negocio del cliente al desarrollar software?",
                    "type": "radio",
                    "options": [
                        "Para cobrar más por el proyecto",
                        "Para asegurar que el software resuelva problemas reales y agregue valor",
                        "Para impresionar al cliente con términos técnicos",
                        "Para evitar preguntar sobre sus necesidades"
                    ],
                    "correct": "Para asegurar que el software resuelva problemas reales y agregue valor"
                }
            ],
            "passingScore": 8  # Ajustado para 11 preguntas (70% aprox)
        },
        {
            "title": "Resumen",
            "videoUrl": "https://storage.googleapis.com/prelaboral-435211.appspot.com/videos/Capsula_resumen_Ingenieria_Software.mp4",
            "icon": "FaClipboardList",
            "exitTestQuestions": [
                {
                    "question": "¿Cuánto te gustaría trabajar en esta área?",
                    "type": "radio",
                    "options": [
                        "No me interesa en absoluto",
                        "Me interesa poco",
                        "Tengo un interés moderado",
                        "Me interesa bastante",
                        "Me interesa muchísimo"
                    ]
                }
            ],
            "passingScore": 1
        },
        {
            "title": "Lo bueno y lo malo",
            "videoUrl": "https://storage.googleapis.com/prelaboral-435211.appspot.com/videos/Lo_bueno_y_Lo_Malo%20_Ingenieria_de_Software.mp4",
            "icon": "FaInfoCircle",
            "exitTestQuestions": [
                {
                    "question": "¿Cuánto te gustaría trabajar en esta área?",
                    "type": "radio",
                    "options": [
                        "No me interesa en absoluto",
                        "Me interesa poco",
                        "Tengo un interés moderado",
                        "Me interesa bastante",
                        "Me interesa muchísimo"
                    ]
                },
                {
                    "question": "¿Qué herramienta es esencial para el manejo de versiones de código en desarrollo de software?",
                    "type": "radio",
                    "options": ["Docker", "Git", "Jenkins", "Kubernetes"],
                    "correct": "Git"
                },
                {
                    "question": "¿Cuál de los siguientes lenguajes de programación es más utilizado para desarrollo de aplicaciones móviles en Android?",
                    "type": "radio",
                    "options": ["Swift", "Kotlin", "Python", "Ruby"],
                    "correct": "Kotlin"
                },
                {
                    "question": "¿Qué tipo de prueba se enfoca en verificar el funcionamiento de un módulo o componente de forma aislada?",
                    "type": "radio",
                    "options": ["Prueba de integración", "Prueba unitaria", "Prueba de rendimiento", "Prueba de aceptación"],
                    "correct": "Prueba unitaria"
                },
                {
                    "question": "¿Qué herramienta de desarrollo de software incluye funcionalidades de Inteligencia Artificial para sugerir código?",
                    "type": "radio",
                    "options": ["Eclipse", "Visual Studio Code", "NetBeans", "IntelliJ IDEA"],
                    "correct": "Visual Studio Code"
                },
                {
                    "question": "¿Cuál de las siguientes bases de datos es NoSQL?",
                    "type": "radio",
                    "options": ["MySQL", "PostgreSQL", "MongoDB", "Oracle"],
                    "correct": "MongoDB"
                },
                {
                    "question": "¿Cuál de las siguientes habilidades es más importante para trabajar en equipo en un proyecto de software?",
                    "type": "radio",
                    "options": [
                        "Dominio absoluto de un lenguaje de programación",
                        "Capacidad de comunicación efectiva",
                        "Conocimiento avanzado de algoritmos",
                        "Experiencia en desarrollo de videojuegos"
                    ],
                    "correct": "Capacidad de comunicación efectiva"
                },
                {
                    "question": "¿Qué enfoque es más útil para entender las necesidades del cliente en un proyecto de software?",
                    "type": "radio",
                    "options": [
                        "Escribir código sin consultar al cliente",
                        "Realizar reuniones frecuentes y preguntas claras",
                        "Ignorar los comentarios del cliente y seguir el plan inicial",
                        "Delegar toda la comunicación al líder del proyecto"
                    ],
                    "correct": "Realizar reuniones frecuentes y preguntas claras"
                },
                {
                    "question": "¿Cuál de las siguientes es una metodología ágil utilizada en desarrollo de software?",
                    "type": "radio",
                    "options": ["Cascada", "Scrum", "Six Sigma", "Lean Manufacturing"],
                    "correct": "Scrum"
                },
                {
                    "question": "¿Qué habilidad es clave para priorizar tareas en un proyecto con plazos ajustados?",
                    "type": "radio",
                    "options": [
                        "Saber programar rápido",
                        "Gestión del tiempo y organización",
                        "Conocimiento profundo de hardware",
                        "Dominio de diseño gráfico"
                    ],
                    "correct": "Gestión del tiempo y organización"
                },
                {
                    "question": "¿Por qué es importante entender el negocio del cliente al desarrollar software?",
                    "type": "radio",
                    "options": [
                        "Para cobrar más por el proyecto",
                        "Para asegurar que el software resuelva problemas reales y agregue valor",
                        "Para impresionar al cliente con términos técnicos",
                        "Para evitar preguntar sobre sus necesidades"
                    ],
                    "correct": "Para asegurar que el software resuelva problemas reales y agregue valor"
                }
            ],
            "passingScore": 7
        },
        {
            "title": "10 Mandamientos",
            "videoUrl": "https://storage.googleapis.com/prelaboral-435211.appspot.com/videos/10M_Ingenieria_de_Sofware.mp4",
            "icon": "FaWpforms",
            "exitTestQuestions": [
                {
                    "question": "Entre estos 10 mandamientos del área de ingeniería de software, ¿cuáles consideras que son tus puntos más débiles o en los que tienes menos conocimiento? (Selecciona hasta 3)",
                    "type": "checkbox",
                    "options": [
                        "Conocer a fondo las necesidades del negocio",
                        "Preguntar todo y no asumir",
                        "Mantener una mentalidad de estudio continuo",
                        "Dominar la lógica de programación y el orden en el código",
                        "Usar control de versiones y desplegar software",
                        "Desarrollar habilidades de comunicación y manejo de crisis",
                        "Cultivar la capacidad de escuchar al usuario",
                        "Dominar la base de datos y la optimización de consultas",
                        "Fortalecer el inglés y las habilidades multiculturales",
                        "Cuidar la salud física y mental"
                    ],
                    "maxSelections": 3
                }
            ],
            "passingScore": 1
        }
    ]
}

# Datos de Tecnología
tecnologia_data = {
    "area": "Tecnología",
    "id": "tecnologia",
    "name": "Tecnología",
    "videos": [
        {
            "title": "Podcast",
            "videoUrl": "https://storage.googleapis.com/prelaboral-435211.appspot.com/videos/PODCAST%20-%20Tecnologia.mp4",
            "icon": "FaPodcast",
            "exitTestQuestions": [
                {
                    "question": "¿Cuánto te gustaría trabajar en esta área?",
                    "type": "radio",
                    "options": [
                        "No me interesa en absoluto",
                        "Me interesa poco",
                        "Tengo un interés moderado",
                        "Me interesa bastante",
                        "Me interesa muchísimo"
                    ]
                },
                {
                    "question": "¿Qué lenguaje de programación es considerado transversal y esencial para cualquier profesional en tecnología?",
                    "type": "radio",
                    "options": ["Java", "Python", "C++", "Ruby"],
                    "correct": "Python"
                },
                {
                    "question": "¿Qué herramienta se recomienda para hacer presentaciones efectivas en el ámbito profesional?",
                    "type": "radio",
                    "options": ["Prezi", "Canva", "PowerPoint", "Google Slides"],
                    "correct": "PowerPoint"
                },
                {
                    "question": "¿Qué base de datos es mencionada como un estándar en la industria tecnológica?",
                    "type": "radio",
                    "options": ["MongoDB", "SQL", "Oracle", "Firebase"],
                    "correct": "SQL"
                },
                {
                    "question": "¿Qué habilidad técnica es crucial para liderar proyectos tecnológicos?",
                    "type": "radio",
                    "options": [
                        "Diseño gráfico",
                        "Administración de proyectos y ruta crítica",
                        "Redacción de contenidos",
                        "Marketing digital"
                    ],
                    "correct": "Administración de proyectos y ruta crítica"
                },
                {
                    "question": "¿Qué tendencia tecnológica, además de la inteligencia artificial, se destaca como crucial para el futuro?",
                    "type": "radio",
                    "options": [
                        "Realidad virtual",
                        "Ciberseguridad",
                        "Blockchain",
                        "Desarrollo de aplicaciones móviles"
                    ],
                    "correct": "Ciberseguridad"
                },
                {
                    "question": "¿Qué actitud es fundamental para un profesional en tecnología?",
                    "type": "radio",
                    "options": [
                        "Resistirse al cambio y mantener métodos tradicionales",
                        "Tener curiosidad y gusto por crear soluciones innovadoras",
                        "Evitar el uso del inglés en el trabajo",
                        "Limitarse a seguir instrucciones sin cuestionar"
                    ],
                    "correct": "Tener curiosidad y gusto por crear soluciones innovadoras"
                },
                {
                    "question": "¿Qué error común cometen los profesionales al iniciar en la industria tecnológica?",
                    "type": "radio",
                    "options": [
                        "No saber programar en Python",
                        "No conocer el negocio en el que están trabajando",
                        "No tener un título universitario",
                        "No usar herramientas como PowerPoint"
                    ],
                    "correct": "No conocer el negocio en el que están trabajando"
                },
                {
                    "question": "¿Cuál es el consejo que se entrega para evitar errores en el primer trabajo en tecnología?",
                    "type": "radio",
                    "options": [
                        "Asumir que todo funciona como se enseña en la universidad",
                        "Preguntar todo y no dar nada por obvio",
                        "Evitar interactuar con otros departamentos",
                        "Limitarse a cumplir solo con las tareas asignadas"
                    ],
                    "correct": "Preguntar todo y no dar nada por obvio"
                },
                {
                    "question": "¿Qué habilidad blanda es clave para una buena gestión con proveedores y clientes internos?",
                    "type": "radio",
                    "options": [
                        "Ser introvertido y reservado",
                        "Tácticas de negociación y comunicación efectiva",
                        "Evitar conflictos a toda costa",
                        "Limitarse a seguir órdenes sin cuestionar"
                    ],
                    "correct": "Tácticas de negociación y comunicación efectiva"
                },
                {
                    "question": "¿Qué actitud es esencial para mantenerse relevante en la industria tecnológica?",
                    "type": "radio",
                    "options": [
                        "Evitar estudiar después de la universidad",
                        "Ser un 'nerd' y estar siempre aprendiendo",
                        "Limitarse a usar solo herramientas básicas",
                        "No preocuparse por las tendencias tecnológicas"
                    ],
                    "correct": "Ser un 'nerd' y estar siempre aprendiendo"
                }
            ],
            "passingScore": 8  # Ajustado para 11 preguntas (70% aprox)
        },
        {
            "title": "Resumen",
            "videoUrl": "https://storage.googleapis.com/prelaboral-435211.appspot.com/videos/Capsula%20resumen%20tecnologia.mp4",
            "icon": "FaClipboardList",
            "exitTestQuestions": [
                {
                    "question": "¿Cuánto te gustaría trabajar en esta área?",
                    "type": "radio",
                    "options": [
                        "No me interesa en absoluto",
                        "Me interesa poco",
                        "Tengo un interés moderado",
                        "Me interesa bastante",
                        "Me interesa muchísimo"
                    ]
                }
            ],
            "passingScore": 1
        },
        {
            "title": "Lo bueno y lo malo",
            "videoUrl": "https://storage.googleapis.com/prelaboral-435211.appspot.com/videos/Bueno%20y%20Malo%20Tecnologia.mp4",
            "icon": "FaInfoCircle",
            "exitTestQuestions": [
                {
                    "question": "¿Cuánto te gustaría trabajar en esta área?",
                    "type": "radio",
                    "options": [
                        "No me interesa en absoluto",
                        "Me interesa poco",
                        "Tengo un interés moderado",
                        "Me interesa bastante",
                        "Me interesa muchísimo"
                    ]
                },
                {
                    "question": "¿Qué lenguaje de programación es considerado transversal y esencial para cualquier profesional en tecnología?",
                    "type": "radio",
                    "options": ["Java", "Python", "C++", "Ruby"],
                    "correct": "Python"
                },
                {
                    "question": "¿Qué herramienta se recomienda para hacer presentaciones efectivas en el ámbito profesional?",
                    "type": "radio",
                    "options": ["Prezi", "Canva", "PowerPoint", "Google Slides"],
                    "correct": "PowerPoint"
                },
                {
                    "question": "¿Qué base de datos es mencionada como un estándar en la industria tecnológica?",
                    "type": "radio",
                    "options": ["MongoDB", "SQL", "Oracle", "Firebase"],
                    "correct": "SQL"
                },
                {
                    "question": "¿Qué habilidad técnica es crucial para liderar proyectos tecnológicos?",
                    "type": "radio",
                    "options": [
                        "Diseño gráfico",
                        "Administración de proyectos y ruta crítica",
                        "Redacción de contenidos",
                        "Marketing digital"
                    ],
                    "correct": "Administración de proyectos y ruta crítica"
                },
                {
                    "question": "¿Qué tendencia tecnológica, además de la inteligencia artificial, se destaca como crucial para el futuro?",
                    "type": "radio",
                    "options": [
                        "Realidad virtual",
                        "Ciberseguridad",
                        "Blockchain",
                        "Desarrollo de aplicaciones móviles"
                    ],
                    "correct": "Ciberseguridad"
                },
                {
                    "question": "¿Qué actitud es fundamental para un profesional en tecnología?",
                    "type": "radio",
                    "options": [
                        "Resistirse al cambio y mantener métodos tradicionales",
                        "Tener curiosidad y gusto por crear soluciones innovadoras",
                        "Evitar el uso del inglés en el trabajo",
                        "Limitarse a seguir instrucciones sin cuestionar"
                    ],
                    "correct": "Tener curiosidad y gusto por crear soluciones innovadoras"
                },
                {
                    "question": "¿Qué error común cometen los profesionales al iniciar en la industria tecnológica?",
                    "type": "radio",
                    "options": [
                        "No saber programar en Python",
                        "No conocer el negocio en el que están trabajando",
                        "No tener un título universitario",
                        "No usar herramientas como PowerPoint"
                    ],
                    "correct": "No conocer el negocio en el que están trabajando"
                },
                {
                    "question": "¿Cuál es el consejo que se entrega para evitar errores en el primer trabajo en tecnología?",
                    "type": "radio",
                    "options": [
                        "Asumir que todo funciona como se enseña en la universidad",
                        "Preguntar todo y no dar nada por obvio",
                        "Evitar interactuar con otros departamentos",
                        "Limitarse a cumplir solo con las tareas asignadas"
                    ],
                    "correct": "Preguntar todo y no dar nada por obvio"
                },
                {
                    "question": "¿Qué habilidad blanda es clave para una buena gestión con proveedores y clientes internos?",
                    "type": "radio",
                    "options": [
                        "Ser introvertido y reservado",
                        "Tácticas de negociación y comunicación efectiva",
                        "Evitar conflictos a toda costa",
                        "Limitarse a seguir órdenes sin cuestionar"
                    ],
                    "correct": "Tácticas de negociación y comunicación efectiva"
                },
                {
                    "question": "¿Qué actitud es esencial para mantenerse relevante en la industria tecnológica?",
                    "type": "radio",
                    "options": [
                        "Evitar estudiar después de la universidad",
                        "Ser un 'nerd' y estar siempre aprendiendo",
                        "Limitarse a usar solo herramientas básicas",
                        "No preocuparse por las tendencias tecnológicas"
                    ],
                    "correct": "Ser un 'nerd' y estar siempre aprendiendo"
                }
            ],
            "passingScore": 7
        },
        {
            "title": "10 Mandamientos",
            "videoUrl": "https://storage.googleapis.com/prelaboral-435211.appspot.com/videos/10M_tecnologia.mp4",
            "icon": "FaWpforms",
            "exitTestQuestions": [
                {
                    "question": "Entre estos 10 mandamientos de la industria tecnológica, ¿cuáles consideras que son tus puntos más débiles o en los que tienes menos conocimiento? (Selecciona hasta 3)",
                    "type": "checkbox",
                    "options": [
                        "Conocer la razón del negocio (entender qué se vende, a quién y cómo)",
                        "Adoptar la tecnología sin miedo (aceptar que la tecnología es una necesidad, no una opción)",
                        "Estudiar constantemente (mantenerse actualizado con nuevas tecnologías, lenguajes y tendencias)",
                        "Dominar herramientas básicas (Excel, PowerPoint, SQL, Python)",
                        "Cultivar el inglés (leer documentación, comunicarse con equipos internacionales)",
                        "Aprender a contar historias con datos (presentar información técnica de forma clara y convincente)",
                        "Ser flexible y resiliente (lidiar con imprevistos, presión y horarios cambiantes)",
                        "Cuidar la salud mental y física (incorporar hábitos saludables en un trabajo sedentario)",
                        "Desarrollar habilidades de negociación (gestionar recursos, priorizar proyectos y coordinar equipos)",
                        "Mantener viva la curiosidad y la pasión (resolver problemas de forma creativa y mejorar vidas a través de la tecnología)"
                    ],
                    "maxSelections": 3
                }
            ],
            "passingScore": 1
        }
    ]
}

# Datos de Ciencia de Datos
ciencia_datos_data = {
    "area": "Tecnología",
    "id": "cienciaDatos",
    "name": "Ciencia de Datos",
    "videos": [
        {
            "title": "Podcast",
            "videoUrl": "https://storage.googleapis.com/prelaboral-435211.appspot.com/videos/Podcast%20Ciencia%20de%20Datos.mp4",
            "icon": "FaPodcast",
            "exitTestQuestions": [
                {
                    "question": "¿Cuánto te gustaría trabajar en esta área?",
                    "type": "radio",
                    "options": ["No me interesa en absoluto", "Me interesa poco", "Tengo un interés moderado", "Me interesa bastante", "Me interesa muchísimo"]
                },
                {
                    "question": "¿Cuál es el principal objetivo de un profesional de Ciencia de Datos en una empresa?",
                    "type": "radio",
                    "options": ["Diseñar interfaces gráficas atractivas", "Obtener mayor rentabilidad o disminuir costos utilizando información", "Crear campañas de marketing tradicionales", "Desarrollar hardware especializado"],
                    "correct": "Obtener mayor rentabilidad o disminuir costos utilizando información"
                },
                {
                    "question": "¿Qué herramientas básicas se mencionan como esenciales para trabajar en Ciencia de Datos?",
                    "type": "radio",
                    "options": ["Photoshop, Word y Google Drive", "SQL, Python y Excel", "Tableau, PowerPoint y Java", "MongoDB, R y Canva"],
                    "correct": "SQL, Python y Excel"
                },
                {
                    "question": "¿Qué nivel de inglés se recomienda para trabajar en Ciencia de Datos, especialmente en roles internacionales o remotos?",
                    "type": "radio",
                    "options": ["Básico", "Intermedio", "Avanzado", "No es necesario"],
                    "correct": "Avanzado"
                },
                {
                    "question": "¿Qué 'superpoder' se recomienda desarrollar para destacar en Ciencia de Datos?",
                    "type": "radio",
                    "options": ["Saber programar en varios lenguajes", "Aprender a contar historias con datos y hacer presentaciones efectivas", "Dominar todas las herramientas de visualización de datos", "Ser experto en redes neuronales"],
                    "correct": "Aprender a contar historias con datos y hacer presentaciones efectivas"
                },
                {
                    "question": "¿Qué actitud es fundamental para enfrentar los desafíos en Ciencia de Datos, según la conversación?",
                    "type": "radio",
                    "options": ["Resistirse al cambio y mantener métodos tradicionales", "Entender el negocio y conectar los datos con los objetivos comerciales", "Evitar el uso de nuevas tecnologías", "Limitarse a seguir instrucciones sin cuestionar"],
                    "correct": "Entender el negocio y conectar los datos con los objetivos comerciales"
                }
            ],
            "passingScore": 4
        },
        {
            "title": "Resumen",
            "videoUrl": "https://storage.googleapis.com/prelaboral-435211.appspot.com/videos/Capsula%20Resumen%20Ciencia%20de%20Datos.mp4",
            "icon": "FaClipboardList",
            "exitTestQuestions": [
                {
                    "question": "¿Cuánto te gustaría trabajar en esta área?",
                    "type": "radio",
                    "options": ["No me interesa en absoluto", "Me interesa poco", "Tengo un interés moderado", "Me interesa bastante", "Me interesa muchísimo"]
                }
            ],
            "passingScore": 1
        },
        {
            "title": "Lo bueno y lo malo",
            "videoUrl": "https://storage.googleapis.com/prelaboral-435211.appspot.com/videos/BM_Ciencia%20de%20datos.mp4",
            "icon": "FaInfoCircle",
            "exitTestQuestions": [
                {
                    "question": "¿Cuánto te gustaría trabajar en esta área?",
                    "type": "radio",
                    "options": ["No me interesa en absoluto", "Me interesa poco", "Tengo un interés moderado", "Me interesa bastante", "Me interesa muchísimo"]
                },
                {
                    "question": "¿Qué herramienta es fundamental para la manipulación y análisis de datos en Ciencia de Datos?",
                    "type": "radio",
                    "options": ["Tableau", "SQL", "Photoshop", "Google Drive"],
                    "correct": "SQL"
                },
                {
                    "question": "¿Qué lenguaje de programación es ampliamente utilizado en Ciencia de Datos para el análisis estadístico y la creación de modelos?",
                    "type": "radio",
                    "options": ["Java", "Python", "C++", "Ruby"],
                    "correct": "Python"
                },
                {
                    "question": "¿Qué tipo de modelo se utiliza comúnmente para predecir resultados basados en datos históricos?",
                    "type": "radio",
                    "options": ["Modelos de regresión lineal", "Modelos de redes neuronales", "Modelos de clustering", "Modelos de series de tiempo"],
                    "correct": "Modelos de regresión lineal"
                },
                {
                    "question": "¿Qué herramienta se utiliza para visualizar datos y crear gráficos interactivos en Ciencia de Datos?",
                    "type": "radio",
                    "options": ["Excel", "PowerPoint", "Tableau", "Word"],
                    "correct": "Tableau"
                },
                {
                    "question": "¿Qué técnica se utiliza para dividir un conjunto de datos en grupos similares?",
                    "type": "radio",
                    "options": ["Regresión logística", "Clustering", "Árboles de decisión", "Redes neuronales"],
                    "correct": "Clustering"
                },
                {
                    "question": "¿Qué habilidad es fundamental para comunicar los resultados de un análisis de datos a personas no técnicas?",
                    "type": "radio",
                    "options": ["Saber programar en Python", "Contar historias con datos (storytelling)", "Dominar Excel avanzado", "Conocer redes neuronales"],
                    "correct": "Contar historias con datos (storytelling)"
                },
                {
                    "question": "¿Qué actitud es clave para mantenerse actualizado en el campo de la Ciencia de Datos?",
                    "type": "radio",
                    "options": ["Evitar estudiar después de la universidad", "Ser curioso y estar siempre aprendiendo", "Limitarse a usar solo herramientas básicas", "No preocuparse por las tendencias tecnológicas"],
                    "correct": "Ser curioso y estar siempre aprendiendo"
                },
                {
                    "question": "¿Qué error común cometen los profesionales al iniciar en Ciencia de Datos?",
                    "type": "radio",
                    "options": ["No saber programar en Python", "No entender el negocio en el que están trabajando", "No usar herramientas como Tableau", "No tener un título universitario"],
                    "correct": "No entender el negocio en el que están trabajando"
                },
                {
                    "question": "¿Qué habilidad blanda es esencial para trabajar en equipo en proyectos de Ciencia de Datos?",
                    "type": "radio",
                    "options": ["Ser introvertido y reservado", "Tener habilidades de comunicación y colaboración", "Evitar conflictos a toda costa", "Limitarse a seguir órdenes sin cuestionar"],
                    "correct": "Tener habilidades de comunicación y colaboración"
                },
                {
                    "question": "¿Qué actitud es fundamental para enfrentar los desafíos en Ciencia de Datos?",
                    "type": "radio",
                    "options": ["Resistirse al cambio y mantener métodos tradicionales", "Ser flexible y resiliente ante los imprevistos", "Evitar el uso de nuevas tecnologías", "Limitarse a seguir instrucciones sin cuestionar"],
                    "correct": "Ser flexible y resiliente ante los imprevistos"
                }
            ],
            "passingScore": 7
        },
        {
            "title": "10 Mandamientos",
            "videoUrl": "https://storage.googleapis.com/prelaboral-435211.appspot.com/videos/10M%20Ciencia%20de%20Datos.mp4",
            "icon": "FaWpforms",
            "exitTestQuestions": [
                {
                    "question": "Entre estos 10 mandamientos del área de ciencia de datos, ¿cuáles consideras que son tus puntos más débiles o en los que tienes menos conocimiento? (Selecciona hasta 3)",
                    "type": "checkbox",
                    "options": [
                        "Amar los datos sobre todas las cosas: Optimiza procesos con datos para reducir costos, aumentar ventas y mejorar la eficiencia",
                        "Conectar los datos con el negocio: Comprende la industria y el impacto de tus análisis en la rentabilidad",
                        "Aprendizaje continuo: Mantente actualizado con nuevas herramientas, lenguajes y técnicas para ser relevante",
                        "Trabajar en equipo: Colabora y comparte conocimientos con técnicos y comerciales",
                        "Comunicar con claridad: Presenta hallazgos de manera clara y convincente para facilitar la toma de decisiones",
                        "Dominar el inglés: Esencial para empresas internacionales y trabajo remoto, tanto hablado como escrito",
                        "No temer a la IA: Úsala como una oportunidad para optimizar procesos y enfocarte en tareas de mayor valor",
                        "Dominar herramientas básicas: Excel Avanzado, SQL, Python y PowerPoint son fundamentales",
                        "Entender el negocio: Comprende cómo se generan ingresos, identifica cuellos de botella y aporta a decisiones estratégicas",
                        "Innovar y crear valor: Propón soluciones innovadoras para mejorar procesos, productos y servicios"
                    ],
                    "maxSelections": 3
                }
            ],
            "passingScore": 1
        }
    ]
}

superpoderAbrirCerrarReunion = {
    "area": "SuperPoderes",
    "id": "superpoder-abrir-cerrar-reunion",
    "name": "Superpoder de abrir y cerrar una reunión",
    "videos": 
    [
        {
        "title": "SuperPoder: Como abrir y Cerrar reuniones",
        "videoUrl": "https://storage.googleapis.com/prelaboral-435211.appspot.com/videos/SP_Como_abrir_y_Cerrar_reuniones.mp4",
        "icon": "FaPodcast",
        "order": 1,
        "exitTestQuestions": [
            {
            "question": "¿Qué sucede si no preparas la reunión con anticipación?",
            "correct": "B",
            "options": ["A) La reunión será más dinámica y flexible.", "B) Pierdes tiempo y recursos.", "C) La reunión será más creativa sin planificación."]
            },
            {
            "question": "¿Por qué es importante evitar reuniones largas?",
            "correct": "B",
            "options": ["A) Las reuniones largas permiten un análisis más detallado de los temas.", "B) Porque las reuniones largas se convierten en conversaciones improductivas.", "C) Son necesarias para tratar todos los puntos con profundidad."]
            },
            {
            "question": "¿Qué debe suceder al final de cada reunión?",
            "correct": "B",
            "options": ["A) Cada participante debe compartir una reflexión personal.", "B) Todos deben tener tareas claras y asignadas.", "C) Es suficiente con discutir los próximos temas a abordar."]
            },
            {
            "question": "¿Qué debes hacer si notas que los participantes están desconectados durante una reunión?",
            "correct": "B",
            "options": ["A) Dejar que se recuperen por sí mismos.", "B) Aplicar técnicas para recuperar su atención y enfoque.", "C) Cambiar de tema y esperar que se interesen de nuevo."]
            },
            {
            "question": "¿Cuál es la clave para causar una buena primera impresión en una reunión?",
            "correct": "B",
            "options": ["A) Solo impresionar con tus conocimientos y habilidades.", "B) Conectarte auténticamente con la contraparte desde el inicio.", "C) Hablar de manera autoritaria y demostrar control de la reunión."]
            },
            {
            "question": "¿Por qué es importante aprender de los errores pasados en las reuniones?",
            "correct": "B",
            "options": ["A) Para evitar hacer las mismas preguntas en futuras reuniones.", "B) Para mejorar y optimizar cada nueva reunión.", "C) Para demostrar que siempre hay margen de mejora."]
            },
            {
            "question": "¿Por qué es necesario tener una estructura en las reuniones?",
            "correct": "B",
            "options": ["A) Para permitir que los participantes hablen sin restricciones.", "B) Para mantener el rumbo y avanzar con claridad.", "C) Para ofrecer un espacio para que todos expresen sus opiniones."]
            }
        ],
        "passingScore": 7 
        },
        {
        "title": "Resumen Abrir y cerrar reuniones",
        "videoUrl": "https://storage.googleapis.com/prelaboral-435211.appspot.com/videos/7P_Abrir_y_cerrar_reuniones.mp4",
        "icon": "FaClipboardList",
        "order": 2,
        "exitTestQuestions": [
            {
            "question": "¿Qué entendiste del resumen sobre abrir y cerrar reuniones?",
            "type": "checkbox",
            "options": ["Preparar la reunión es clave para su éxito.", "Evitar reuniones largas mejora la productividad.", "Asignar tareas claras al final es esencial."]
            }
        ]
        }
    ],
    "relatorName": "Nombre del Relator",
    "relatorExperience": "Experiencia relevante en liderazgo y reuniones",
    "linkedinUrl": "https://linkedin.com/in/relator-reuniones",
    "complementaryMaterials": [
        "https://storage.googleapis.com/prelaboral-435211.appspot.com/materiales/reuniones_guia.pdf"
    ]
}

# Datos de Control de Gestión
control_gestion_data = {
    "area": "Control de Gestión",
    "id": "controlGestion",
    "name": "Control de Gestión",
    "keywords": ["control", "gestión", "excel", "business intelligence", "kpis", "automatización", "datos", "estrategia"],
    "videos": [
        {
            "title": "Podcast",
            "videoUrl": "https://storage.googleapis.com/prelaboral-435211.appspot.com/videos/podcast_control de gestion oficial-002.mp4",
            "icon": "FaPodcast",
            "exitTestQuestions": [
                {
                    "question": "¿Cuánto te gustaría trabajar en esta área?",
                    "type": "radio",
                    "options": ["No me interesa en absoluto", "Me interesa poco", "Tengo un interés moderado", "Me interesa bastante", "Me interesa muchísimo"]
                },
                {
                    "question": "¿Cuál es el principal objetivo del Control de Gestión?",
                    "type": "radio",
                    "options": ["Crear estrategias de marketing", "Medir y monitorear el cumplimiento de los objetivos estratégicos del negocio", "Gestionar redes sociales de la empresa", "Encargarse exclusivamente de la contabilidad"],
                    "correct": "Medir y monitorear el cumplimiento de los objetivos estratégicos del negocio"
                },
                {
                    "question": "¿Qué tendencia está impactando fuertemente el Control de Gestión hoy en día?",
                    "type": "radio",
                    "options": ["Uso exclusivo de herramientas manuales", "Adopción de tecnologías como Business Intelligence, RPA e Inteligencia Artificial", "Eliminación de métricas y KPI", "Reducción del uso de datos en la toma de decisiones"],
                    "correct": "Adopción de tecnologías como Business Intelligence, RPA e Inteligencia Artificial"
                },
                {
                    "question": "¿Qué característica es esencial para un profesional de Control de Gestión?",
                    "type": "radio",
                    "options": ["Evitar el uso de datos y métricas", "Ser curioso y apasionado por el procesamiento de datos", "No preocuparse por los plazos de entrega", "Evitar la toma de decisiones estratégicas"],
                    "correct": "Ser curioso y apasionado por el procesamiento de datos"
                },
                {
                    "question": "¿Qué herramienta es fundamental para un profesional de Control de Gestión?",
                    "type": "radio",
                    "options": ["Solo redes sociales", "Excel avanzado y Power Query", "Herramientas de diseño gráfico", "Programas de edición de video"],
                    "correct": "Excel avanzado y Power Query"
                },
                {
                    "question": "¿Qué habilidad blanda es clave para un profesional de Control de Gestión?",
                    "type": "radio",
                    "options": ["Evitar la comunicación con otros equipos", "Tener una buena comunicación y saber explicar reportes", "No preocuparse por los detalles", "Evitar trabajar en equipo"],
                    "correct": "Tener una buena comunicación y saber explicar reportes"
                },
                {
                    "question": "¿Qué tipo de empresas pueden implementar herramientas de Control de Gestión?",
                    "type": "radio",
                    "options": ["Solo grandes empresas", "Solo empresas medianas", "Empresas grandes, medianas y pequeñas", "Solo empresas con más de 10 años en el mercado"],
                    "correct": "Empresas grandes, medianas y pequeñas"
                },
                {
                    "question": "¿Qué actitud es clave para trabajar en Control de Gestión?",
                    "type": "radio",
                    "options": ["Evitar trabajar bajo presión", "Ser capaz de trabajar bajo presión y cumplir plazos", "No preocuparse por la precisión de la información", "Evitar la comunicación con otros equipos"],
                    "correct": "Ser capaz de trabajar bajo presión y cumplir plazos"
                },
                {
                    "question": "¿Qué nivel de inglés se recomienda para trabajar en Control de Gestión?",
                    "type": "radio",
                    "options": ["No es necesario saber inglés", "Nivel básico", "Nivel medio", "Nivel avanzado"],
                    "correct": "Nivel medio"
                },
                {
                    "question": "¿Qué recomendación se da a un joven profesional que inicia en Control de Gestión?",
                    "type": "radio",
                    "options": ["Evitar aprender herramientas como Excel y Power BI", "Estudiar y dominar herramientas como Excel y Power BI, y conocer el negocio en profundidad", "No preocuparse por entender cómo funciona cada área de la empresa", "Evitar hacer preguntas y cuestionar los procesos"],
                    "correct": "Estudiar y dominar herramientas como Excel y Power BI, y conocer el negocio en profundidad"
                },
                {
                    "question": "¿Qué actitud es clave para destacar en Control de Gestión?",
                    "type": "radio",
                    "options": ["Evitar la curiosidad y no hacer preguntas", "Ser preguntón y cuestionar constantemente los procesos y resultados", "No preocuparse por los plazos de entrega", "Evitar la toma de decisiones basadas en datos"],
                    "correct": "Ser preguntón y cuestionar constantemente los procesos y resultados"
                }
            ],
            "passingScore": 7
        },
        {
            "title": "Resumen",
            "videoUrl": "https://storage.googleapis.com/prelaboral-435211.appspot.com/videos/Capsula resumen_control de gestión.mp4",
            "icon": "FaClipboardList",
            "exitTestQuestions": [
                {
                    "question": "¿Cuánto te gustaría trabajar en esta área?",
                    "type": "radio",
                    "options": ["No me interesa en absoluto", "Me interesa poco", "Tengo un interés moderado", "Me interesa bastante", "Me interesa muchísimo"]
                },
                {
                    "question": "¿Cuál es el principal objetivo del Control de Gestión?",
                    "type": "radio",
                    "options": ["Crear estrategias de marketing", "Medir y monitorear el cumplimiento de los objetivos estratégicos del negocio", "Gestionar redes sociales de la empresa", "Encargarse exclusivamente de la contabilidad"],
                    "correct": "Medir y monitorear el cumplimiento de los objetivos estratégicos del negocio"
                },
                {
                    "question": "¿Qué tendencia está impactando fuertemente el Control de Gestión hoy en día?",
                    "type": "radio",
                    "options": ["Uso exclusivo de herramientas manuales", "Adopción de tecnologías como Business Intelligence, RPA e Inteligencia Artificial", "Eliminación de métricas y KPI", "Reducción del uso de datos en la toma de decisiones"],
                    "correct": "Adopción de tecnologías como Business Intelligence, RPA e Inteligencia Artificial"
                },
                {
                    "question": "¿Qué característica es esencial para un profesional de Control de Gestión?",
                    "type": "radio",
                    "options": ["Evitar el uso de datos y métricas", "Ser curioso y apasionado por el procesamiento de datos", "No preocuparse por los plazos de entrega", "Evitar la toma de decisiones estratégicas"],
                    "correct": "Ser curioso y apasionado por el procesamiento de datos"
                },
                {
                    "question": "¿Qué herramienta es fundamental para un profesional de Control de Gestión?",
                    "type": "radio",
                    "options": ["Solo redes sociales", "Excel avanzado y Power Query", "Herramientas de diseño gráfico", "Programas de edición de video"],
                    "correct": "Excel avanzado y Power Query"
                },
                {
                    "question": "¿Qué habilidad blanda es clave para un profesional de Control de Gestión?",
                    "type": "radio",
                    "options": ["Evitar la comunicación con otros equipos", "Tener una buena comunicación y saber explicar reportes", "No preocuparse por los detalles", "Evitar trabajar en equipo"],
                    "correct": "Tener una buena comunicación y saber explicar reportes"
                }
            ],
            "passingScore": 4
        },
        {
            "title": "Lo bueno y lo malo",
            "videoUrl": "https://storage.googleapis.com/prelaboral-435211.appspot.com/videos/BM Control de Gestion.mp4",
            "icon": "FaInfoCircle",
            "exitTestQuestions": [
                {
                    "question": "¿Cuánto te gustaría trabajar en esta área?",
                    "type": "radio",
                    "options": ["No me interesa en absoluto", "Me interesa poco", "Tengo un interés moderado", "Me interesa bastante", "Me interesa muchísimo"]
                },
                {
                    "question": "¿Cuál es el principal objetivo del Control de Gestión?",
                    "type": "radio",
                    "options": ["Crear estrategias de marketing", "Medir y monitorear el cumplimiento de los objetivos estratégicos del negocio", "Gestionar redes sociales de la empresa", "Encargarse exclusivamente de la contabilidad"],
                    "correct": "Medir y monitorear el cumplimiento de los objetivos estratégicos del negocio"
                },
                {
                    "question": "¿Qué tendencia está impactando fuertemente el Control de Gestión hoy en día?",
                    "type": "radio",
                    "options": ["Uso exclusivo de herramientas manuales", "Adopción de tecnologías como Business Intelligence, RPA e Inteligencia Artificial", "Eliminación de métricas y KPI", "Reducción del uso de datos en la toma de decisiones"],
                    "correct": "Adopción de tecnologías como Business Intelligence, RPA e Inteligencia Artificial"
                },
                {
                    "question": "¿Qué característica es esencial para un profesional de Control de Gestión?",
                    "type": "radio",
                    "options": ["Evitar el uso de datos y métricas", "Ser curioso y apasionado por el procesamiento de datos", "No preocuparse por los plazos de entrega", "Evitar la toma de decisiones estratégicas"],
                    "correct": "Ser curioso y apasionado por el procesamiento de datos"
                },
                {
                    "question": "¿Qué herramienta es fundamental para un profesional de Control de Gestión?",
                    "type": "radio",
                    "options": ["Solo redes sociales", "Excel avanzado y Power Query", "Herramientas de diseño gráfico", "Programas de edición de video"],
                    "correct": "Excel avanzado y Power Query"
                },
                {
                    "question": "¿Qué habilidad blanda es clave para un profesional de Control de Gestión?",
                    "type": "radio",
                    "options": ["Evitar la comunicación con otros equipos", "Tener una buena comunicación y saber explicar reportes", "No preocuparse por los detalles", "Evitar trabajar en equipo"],
                    "correct": "Tener una buena comunicación y saber explicar reportes"
                },
                {
                    "question": "¿Qué tipo de empresas pueden implementar herramientas de Control de Gestión?",
                    "type": "radio",
                    "options": ["Solo grandes empresas", "Solo empresas medianas", "Empresas grandes, medianas y pequeñas", "Solo empresas con más de 10 años en el mercado"],
                    "correct": "Empresas grandes, medianas y pequeñas"
                }
            ],
            "passingScore": 4
        },
        {
            "title": "10 Mandamientos",
            "videoUrl": "https://storage.googleapis.com/prelaboral-435211.appspot.com/videos/10m_control de gestion.mp4",
            "icon": "FaWpforms",
            "exitTestQuestions": [
                {
                    "question": "Entre estos 10 mandamientos del área de control de gestión, ¿cuáles consideras que son tus puntos más débiles o en los que tienes menos conocimiento? (Selecciona hasta 3)",
                    "type": "checkbox",
                    "options": [
                        "Medir objetivos estratégicos del negocio",
                        "Entender procesos e industria de la empresa",
                        "Dominar Excel, Power Query y Business Intelligence",
                        "Ser proactivo y cuestionar procesos",
                        "Entregar información precisa bajo presión",
                        "Comunicar resultados claramente",
                        "Adoptar IA y automatización",
                        "Priorizar KPIs estratégicos",
                        "Ser un estudiante eterno",
                        "Usar plataformas en la nube"
                    ],
                    "maxSelections": 3
                }
            ],
            "passingScore": 1
        }
    ]
}

# Datos de Turismo
turismo_data = {
    "area": "Turismo",
    "id": "turismo",
    "name": "Turismo",
    "keywords": ["turismo", "viajes", "hospitalidad", "inglés", "excel", "negociación", "experiencia", "proactividad"],
    "videos": [
        {
            "title": "Podcast",
            "videoUrl": "https://storage.googleapis.com/prelaboral-435211.appspot.com/videos/Podcast turismo.mp4",
            "icon": "FaPodcast",
            "exitTestQuestions": [
                {
                    "question": "¿Cuánto te gustaría trabajar en esta área?",
                    "type": "radio",
                    "options": ["No me interesa en absoluto", "Me interesa poco", "Tengo un interés moderado", "Me interesa bastante", "Me interesa muchísimo"]
                },
                {
                    "question": "¿Cuál es el principal objetivo de la industria del turismo?",
                    "type": "radio",
                    "options": ["Generar empleos", "Entregar una experiencia positiva al turista", "Promover el crecimiento económico", "Reducir costos operativos"],
                    "correct": "Entregar una experiencia positiva al turista"
                },
                {
                    "question": "¿Qué institución gubernamental en Chile se encarga específicamente del turismo?",
                    "type": "radio",
                    "options": ["Ministerio de Medio Ambiente", "Subsecretaría de Turismo (dependiente del Ministerio de Economía)", "Ministerio de Cultura", "Servicio Nacional de Turismo (SERNATUR)"],
                    "correct": "Subsecretaría de Turismo (dependiente del Ministerio de Economía)"
                },
                {
                    "question": "¿Qué tendencia está impulsando el crecimiento del turismo en Chile, según la conversación?",
                    "type": "radio",
                    "options": ["Turismo masivo y paquetes preprogramados", "Plataformas digitales y turismo de intereses especiales", "Turismo de lujo exclusivo", "Turismo deportivo extremo"],
                    "correct": "Plataformas digitales y turismo de intereses especiales"
                },
                {
                    "question": "¿Qué diferencia hay entre un servicio turístico y un producto turístico?",
                    "type": "radio",
                    "options": ["El servicio turístico es más caro que el producto turístico", "El producto turístico ofrece una experiencia única y diferenciadora", "El servicio turístico no incluye alojamiento", "El producto turístico es solo para turistas extranjeros"],
                    "correct": "El producto turístico ofrece una experiencia única y diferenciadora"
                },
                {
                    "question": "¿Qué habilidad es considerada primordial para trabajar en turismo?",
                    "type": "radio",
                    "options": ["Manejo avanzado de Excel", "Conocimientos de marketing digital", "Dominio del inglés y habilidades blandas", "Experiencia en logística internacional"],
                    "correct": "Dominio del inglés y habilidades blandas"
                },
                {
                    "question": "¿Qué es fundamental para resolver problemas en la operación turística?",
                    "type": "radio",
                    "options": ["Tener un equipo grande de trabajo", "Estar siempre en terreno", "Tener un plan B y estar atento a la contingencia", "Delegar responsabilidades en otros"],
                    "correct": "Tener un plan B y estar atento a la contingencia"
                },
                {
                    "question": "¿Qué característica NO es adecuada para alguien que quiere trabajar en turismo?",
                    "type": "radio",
                    "options": ["Proactividad", "Gusto por la acción y la dinámica", "Preferencia por horarios fijos y rutinarios", "Habilidades de negociación"],
                    "correct": "Preferencia por horarios fijos y rutinarios"
                },
                {
                    "question": "¿Qué herramienta es esencial para manejar la gran cantidad de datos en turismo?",
                    "type": "radio",
                    "options": ["Photoshop", "Excel", "WordPress", "AutoCAD"],
                    "correct": "Excel"
                },
                {
                    "question": "¿Qué tipo de turismo está aumentando su demanda en Chile según la conversación?",
                    "type": "radio",
                    "options": ["Turismo de negocios", "Turismo de intereses especiales", "Turismo de lujo", "Turismo deportivo"],
                    "correct": "Turismo de intereses especiales"
                },
                {
                    "question": "¿Qué consejo se destaca para alguien que quiere ingresar a la industria del turismo?",
                    "type": "radio",
                    "options": ["Evitar el contacto con clientes", "Mejorar constantemente el dominio del inglés y las habilidades blandas", "Enfocarse solo en el trabajo de oficina", "Limitarse a trabajar con turistas locales"],
                    "correct": "Mejorar constantemente el dominio del inglés y las habilidades blandas"
                }
            ],
            "passingScore": 7
        },
        {
            "title": "Resumen",
            "videoUrl": "https://storage.googleapis.com/prelaboral-435211.appspot.com/videos/resumen Turismo.mp4",
            "icon": "FaClipboardList",
            "exitTestQuestions": [
                {
                    "question": "¿Cuánto te gustaría trabajar en esta área?",
                    "type": "radio",
                    "options": ["No me interesa en absoluto", "Me interesa poco", "Tengo un interés moderado", "Me interesa bastante", "Me interesa muchísimo"]
                },
                {
                    "question": "¿Cuál es el principal objetivo de la industria del turismo según el texto?",
                    "type": "radio",
                    "options": ["Generar empleos en el sector", "Entregar la mejor experiencia al turista", "Reducir costos operativos", "Promover destinos internacionales"],
                    "correct": "Entregar la mejor experiencia al turista"
                },
                {
                    "question": "¿Qué habilidad es fundamental para comunicarse efectivamente en la industria del turismo, especialmente con turistas y proveedores internacionales?",
                    "type": "radio",
                    "options": ["Dominio avanzado de Excel", "Conocimientos de marketing digital", "Manejo del inglés (oral y escrito)", "Experiencia en diseño gráfico"],
                    "correct": "Manejo del inglés (oral y escrito)"
                },
                {
                    "question": "¿Qué característica es esencial para resolver problemas en la operación turística, según el texto?",
                    "type": "radio",
                    "options": ["Tener un equipo grande de trabajo", "Estar siempre en terreno", "Tener un plan B y ser proactivo", "Delegar responsabilidades en otros"],
                    "correct": "Tener un plan B y ser proactivo"
                },
                {
                    "question": "¿Qué herramienta tecnológica es esencial para trabajar en turismo, según el texto?",
                    "type": "radio",
                    "options": ["Photoshop", "Excel (nivel avanzado)", "AutoCAD", "WordPress"],
                    "correct": "Excel (nivel avanzado)"
                },
                {
                    "question": "¿Qué 'superpoder' es fundamental para destacar en la industria del turismo?",
                    "type": "radio",
                    "options": ["Conocimientos avanzados de matemáticas", "Habilidades de relaciones públicas y negociación", "Dominio de redes sociales", "Experiencia en diseño gráfico"],
                    "correct": "Habilidades de relaciones públicas y negociación"
                }
            ],
            "passingScore": 4
        },
        {
            "title": "Lo bueno y lo malo",
            "videoUrl": "",  # No hay video explícito en paths_videos.txt
            "icon": "FaInfoCircle",
            "exitTestQuestions": [
                {
                    "question": "¿Cuánto te gustaría trabajar en esta área?",
                    "type": "radio",
                    "options": ["No me interesa en absoluto", "Me interesa poco", "Tengo un interés moderado", "Me interesa bastante", "Me interesa muchísimo"]
                },
                {
                    "question": "¿Cuál es el principal objetivo de la industria del turismo?",
                    "type": "radio",
                    "options": ["Generar empleos", "Entregar una experiencia positiva al turista", "Promover el crecimiento económico", "Reducir costos operativos"],
                    "correct": "Entregar una experiencia positiva al turista"
                },
                {
                    "question": "¿Qué habilidad es considerada primordial para trabajar en turismo?",
                    "type": "radio",
                    "options": ["Manejo avanzado de Excel", "Conocimientos de marketing digital", "Dominio del inglés y habilidades blandas", "Experiencia en logística internacional"],
                    "correct": "Dominio del inglés y habilidades blandas"
                },
                {
                    "question": "¿Qué es fundamental para resolver problemas en la operación turística?",
                    "type": "radio",
                    "options": ["Tener un equipo grande de trabajo", "Estar siempre en terreno", "Tener un plan B y estar atento a la contingencia", "Delegar responsabilidades en otros"],
                    "correct": "Tener un plan B y estar atento a la contingencia"
                },
                {
                    "question": "¿Qué herramienta es esencial para manejar la gran cantidad de datos en turismo?",
                    "type": "radio",
                    "options": ["Photoshop", "Excel", "WordPress", "AutoCAD"],
                    "correct": "Excel"
                }
            ],
            "passingScore": 3
        },
        {
            "title": "10 Mandamientos",
            "videoUrl": "https://storage.googleapis.com/prelaboral-435211.appspot.com/videos/10m_turismo.mp4",
            "icon": "FaWpforms",
            "exitTestQuestions": [
                {
                    "question": "Entre estos 10 mandamientos del área de turismo, ¿cuáles consideras que son tus puntos más débiles o en los que tienes menos conocimiento? (Selecciona hasta 3)",
                    "type": "checkbox",
                    "options": [
                        "Crear experiencias memorables para el turista",
                        "Dominar el inglés para comunicación internacional",
                        "Desarrollar habilidades de comunicación y negociación",
                        "Tener un plan B para imprevistos",
                        "Gestionar datos con herramientas como Excel",
                        "Diferenciar servicios y productos turísticos",
                        "Mantenerse actualizado con tendencias digitales",
                        "Evitar errores comunes en planificación",
                        "Priorizar habilidades blandas",
                        "Prepararse y adaptarse a cambios"
                    ],
                    "maxSelections": 3
                }
            ],
            "passingScore": 1
        }
    ]
}

# Datos de Academia
academia_data = {
    "area": "Academia",
    "id": "academia",
    "name": "Academia",
    "keywords": ["educación", "investigación", "docencia", "universidad", "publicaciones", "vinculación", "aprendizaje"],
    "videos": [
        {
            "title": "Podcast",
            "videoUrl": "https://storage.googleapis.com/prelaboral-435211.appspot.com/videos/podcast_academia.mp4",
            "icon": "FaPodcast",
            "exitTestQuestions": [
                {
                    "question": "¿Cuánto te gustaría trabajar en esta área?",
                    "type": "radio",
                    "options": ["No me interesa en absoluto", "Me interesa poco", "Tengo un interés moderado", "Me interesa bastante", "Me interesa muchísimo"]
                },
                {
                    "question": "¿Cuál es uno de los objetivos principales de trabajar en la academia?",
                    "type": "radio",
                    "options": ["Impartir únicamente clases teóricas sin investigación", "Generar nuevo conocimiento a través de la investigación", "Limitarse a tareas administrativas", "Evitar el contacto con estudiantes y colegas"],
                    "correct": "Generar nuevo conocimiento a través de la investigación"
                },
                {
                    "question": "¿Qué tres funciones principales debe cumplir un académico universitario?",
                    "type": "radio",
                    "options": ["Docencia, vinculación con el medio e investigación", "Marketing, redes sociales y gestión de eventos", "Administración financiera, logística y recursos humanos", "Diseño gráfico, programación y atención al cliente"],
                    "correct": "Docencia, vinculación con el medio e investigación"
                },
                {
                    "question": "¿Por qué es crucial la acreditación en las universidades?",
                    "type": "radio",
                    "options": ["Porque mejora opcionalmente el prestigio institucional", "Porque garantiza estándares de calidad exigidos", "Porque reduce costos operativos", "Porque elimina la necesidad de evaluaciones internas"],
                    "correct": "Porque garantiza estándares de calidad exigidos"
                },
                {
                    "question": "¿Qué habilidad es esencial para usar inteligencia artificial (IA) en la academia?",
                    "type": "radio",
                    "options": ["Dominio avanzado de hojas de cálculo", "Capacidad para formular preguntas precisas con vocabulario amplio", "Habilidad para editar videos", "Conocimiento de mecánica automotriz"],
                    "correct": "Capacidad para formular preguntas precisas con vocabulario amplio"
                },
                {
                    "question": "¿Qué estrategia es fundamental para mantener la relevancia de la investigación académica?",
                    "type": "radio",
                    "options": ["Publicar exclusivamente en revistas nacionales", "Colaborar con investigadores de múltiples disciplinas", "Evitar el uso de herramientas digitales", "Limitarse a teorías tradicionales sin innovación"],
                    "correct": "Colaborar con investigadores de múltiples disciplinas"
                },
                {
                    "question": "¿Cuál es el principal beneficio de la movilidad académica internacional?",
                    "type": "radio",
                    "options": ["Aprender nuevos idiomas", "Obtener sueldos más altos temporalmente", "Establecer redes de colaboración investigativa", "Conocer culturas diferentes"],
                    "correct": "Establecer redes de colaboración investigativa"
                },
                {
                    "question": "¿Qué área de trabajo en la academia es clave para ingenieros?",
                    "type": "radio",
                    "options": ["Gestión de redes sociales institucionales", "Vinculación con el medio (proyectos comunitarios, empresas)", "Organización de actividades deportivas", "Traducción de textos técnicos"],
                    "correct": "Vinculación con el medio (proyectos comunitarios, empresas)"
                },
                {
                    "question": "¿Qué requisito académico es cada vez más exigido en universidades?",
                    "type": "radio",
                    "options": ["Certificaciones en idiomas", "Grado de magíster o doctorado", "Experiencia en turismo educativo", "Dominio de herramientas de diseño"],
                    "correct": "Grado de magíster o doctorado"
                },
                {
                    "question": "¿Cuál es la característica FUNDAMENTAL para que un ingeniero destaque en el ámbito académico universitario?",
                    "type": "radio",
                    "options": ["Dominio avanzado de softwares de diseño industrial", "Capacidad para combinar experiencia práctica con investigación", "Certificaciones internacionales en gestión de proyectos", "Conocimiento exhaustivo de normativas laborales"],
                    "correct": "Capacidad para combinar experiencia práctica con investigación"
                },
                {
                    "question": "¿Qué actitud define a un buen académico?",
                    "type": "radio",
                    "options": ["Aprendizaje continuo y adaptabilidad", "Rechazo a las nuevas tecnologías", "Exclusivo enfoque en teoría sin práctica", "Priorización de horarios rígidos sin flexibilidad"],
                    "correct": "Aprendizaje continuo y adaptabilidad"
                }
            ],
            "passingScore": 7
        },
        {
            "title": "Resumen",
            "videoUrl": "https://storage.googleapis.com/prelaboral-435211.appspot.com/videos/Podcast resumen_academia.mp4",
            "icon": "FaClipboardList",
            "exitTestQuestions": [
                {
                    "question": "¿Cuánto te gustaría trabajar en esta área?",
                    "type": "radio",
                    "options": ["No me interesa en absoluto", "Me interesa poco", "Tengo un interés moderado", "Me interesa bastante", "Me interesa muchísimo"]
                },
                {
                    "question": "¿Cuál es el principal atributo que debe tener un profesional para ingresar al mundo académico?",
                    "type": "radio",
                    "options": ["Dominio de normativas institucionales", "Buenas relaciones con estudiantes y aprendizaje continuo", "Experiencia exclusiva en investigación teórica", "Conocimiento avanzado de contabilidad"],
                    "correct": "Buenas relaciones con estudiantes y aprendizaje continuo"
                },
                {
                    "question": "¿Qué aspecto es fundamental para que un profesional se destaque en vinculación con el medio según la conversación?",
                    "type": "radio",
                    "options": ["Tener contactos en medios de comunicación", "Desarrollar proyectos que integren a la comunidad y empresas", "Dominar técnicas de marketing digital", "Publicar frecuentemente en redes sociales"],
                    "correct": "Desarrollar proyectos que integren a la comunidad y empresas"
                },
                {
                    "question": "¿Por qué es crucial mejorar el vocabulario para usar IA en academia?",
                    "type": "radio",
                    "options": ["Para impresionar en entrevistas", "Para formular preguntas precisas y desarrollar teorías", "Por requisitos de publicaciones formales", "Para traducir textos técnicos"],
                    "correct": "Para formular preguntas precisas y desarrollar teorías"
                },
                {
                    "question": "¿Cómo debe entenderse el rol de la inteligencia artificial en el ámbito académico?",
                    "type": "radio",
                    "options": ["Como amenaza laboral", "Como potenciador si se usa con criterio", "Como herramienta obsoleta", "Como recurso solo para estudiantes"],
                    "correct": "Como potenciador si se usa con criterio"
                },
                {
                    "question": "¿Qué se afirma sobre el nivel de inglés necesario en el mundo académico?",
                    "type": "radio",
                    "options": ["Básico para leer documentos", "Es un requisito indispensable ('must')", "Solo relevante para investigadores senior", "Menos importante que el dominio de estadística"],
                    "correct": "Es un requisito indispensable ('must')"
                }
            ],
            "passingScore": 4
        },
        {
            "title": "Lo bueno y lo malo",
            "videoUrl": "https://storage.googleapis.com/prelaboral-435211.appspot.com/videos/bm academia.mp4",
            "icon": "FaInfoCircle",
            "exitTestQuestions": [
                {
                    "question": "¿Cuánto te gustaría trabajar en esta área?",
                    "type": "radio",
                    "options": ["No me interesa en absoluto", "Me interesa poco", "Tengo un interés moderado", "Me interesa bastante", "Me interesa muchísimo"]
                },
                {
                    "question": "¿Cuál es uno de los objetivos principales de trabajar en la academia?",
                    "type": "radio",
                    "options": ["Impartir únicamente clases teóricas sin investigación", "Generar nuevo conocimiento a través de la investigación", "Limitarse a tareas administrativas", "Evitar el contacto con estudiantes y colegas"],
                    "correct": "Generar nuevo conocimiento a través de la investigación"
                },
                {
                    "question": "¿Qué tres funciones principales debe cumplir un académico universitario?",
                    "type": "radio",
                    "options": ["Docencia, vinculación con el medio e investigación", "Marketing, redes sociales y gestión de eventos", "Administración financiera, logística y recursos humanos", "Diseño gráfico, programación y atención al cliente"],
                    "correct": "Docencia, vinculación con el medio e investigación"
                },
                {
                    "question": "¿Por qué es crucial la acreditación en las universidades?",
                    "type": "radio",
                    "options": ["Porque mejora opcionalmente el prestigio institucional", "Porque garantiza estándares de calidad exigidos", "Porque reduce costos operativos", "Porque elimina la necesidad de evaluaciones internas"],
                    "correct": "Porque garantiza estándares de calidad exigidos"
                },
                {
                    "question": "¿Qué habilidad es esencial para usar inteligencia artificial (IA) en la academia?",
                    "type": "radio",
                    "options": ["Dominio avanzado de hojas de cálculo", "Capacidad para formular preguntas precisas con vocabulario amplio", "Habilidad para editar videos", "Conocimiento de mecánica automotriz"],
                    "correct": "Capacidad para formular preguntas precisas con vocabulario amplio"
                },
                {
                    "question": "¿Qué estrategia es fundamental para mantener la relevancia de la investigación académica?",
                    "type": "radio",
                    "options": ["Publicar exclusivamente en revistas nacionales", "Colaborar con investigadores de múltiples disciplinas", "Evitar el uso de herramientas digitales", "Limitarse a teorías tradicionales sin innovación"],
                    "correct": "Colaborar con investigadores de múltiples disciplinas"
                }
            ],
            "passingScore": 4
        },
        {
            "title": "10 Mandamientos",
            "videoUrl": "https://storage.googleapis.com/prelaboral-435211.appspot.com/videos/10m academia.mp4",
            "icon": "FaWpforms",
            "exitTestQuestions": [
                {
                    "question": "Entre estos 10 mandamientos del área de academia, ¿cuáles consideras que son tus puntos más débiles o en los que tienes menos conocimiento? (Selecciona hasta 3)",
                    "type": "checkbox",
                    "options": [
                        "Obtener un grado de doctor",
                        "Cumplir con docencia, investigación y vinculación",
                        "Usar ejemplos prácticos en la enseñanza",
                        "Aplicar IA con criterio",
                        "Mantener aprendizaje continuo",
                        "Desarrollar habilidades comunicacionales",
                        "Publicar y ejecutar proyectos",
                        "Generar impacto social",
                        "Combinar experiencia práctica y teórica",
                        "Tener paciencia y resiliencia"
                    ],
                    "maxSelections": 3
                }
            ],
            "passingScore": 1
        }
    ]
}

# Datos de Administración y Finanzas
administracion_finanzas_data = {
    "area": "Administración y Finanzas",
    "id": "administracionFinanzas",
    "name": "Administración y Finanzas",
    "keywords": ["finanzas", "administración", "excel", "negociación", "estrategia", "contabilidad", "recursos", "utilidades"],
    "videos": [
        {
            "title": "Podcast",
            "videoUrl": "https://storage.googleapis.com/prelaboral-435211.appspot.com/videos/Podcast Admin y Finanzas.mp4",
            "icon": "FaPodcast",
            "exitTestQuestions": [
                {
                    "question": "¿Cuánto te gustaría trabajar en esta área?",
                    "type": "radio",
                    "options": ["No me interesa en absoluto", "Me interesa poco", "Tengo un interés moderado", "Me interesa bastante", "Me interesa muchísimo"]
                },
                {
                    "question": "¿Cuál es el principal objetivo del área de administración y finanzas en una empresa?",
                    "type": "radio",
                    "options": ["Maximizar las ventas", "Velar por los recursos financieros y maximizar las utilidades de los accionistas", "Gestionar el personal operativo", "Desarrollar estrategias de marketing"],
                    "correct": "Velar por los recursos financieros y maximizar las utilidades de los accionistas"
                },
                {
                    "question": "¿Qué áreas suelen trabajar de la mano con administración y finanzas?",
                    "type": "radio",
                    "options": ["Solo el área contable", "Gerencia general, área comercial y contabilidad", "Recursos humanos y marketing", "Solo el área operativa"],
                    "correct": "Gerencia general, área comercial y contabilidad"
                },
                {
                    "question": "¿Qué habilidad es fundamental para destacar en administración y finanzas?",
                    "type": "radio",
                    "options": ["Conocimientos avanzados de diseño gráfico", "Habilidades de negociación y personalidad para decir 'no'", "Dominio de redes sociales", "Experiencia en logística internacional"],
                    "correct": "Habilidades de negociación y personalidad para decir 'no'"
                },
                {
                    "question": "¿Qué error común cometen los profesionales recién titulados al ingresar al área?",
                    "type": "radio",
                    "options": ["Preguntar demasiado", "Ser soberbios y no escuchar a los más experimentados", "No usar herramientas tecnológicas", "Trabajar demasiadas horas"],
                    "correct": "Ser soberbios y no escuchar a los más experimentados"
                },
                {
                    "question": "¿Qué herramienta tecnológica es esencial para trabajar en administración y finanzas?",
                    "type": "radio",
                    "options": ["Photoshop", "Excel (nivel avanzado)", "AutoCAD", "WordPress"],
                    "correct": "Excel (nivel avanzado)"
                },
                {
                    "question": "¿Qué característica NO es adecuada para alguien que quiere trabajar en administración y finanzas?",
                    "type": "radio",
                    "options": ["Ser disciplinado y estructurado", "Tener flexibilidad para adaptarse a cambios", "Ser demasiado cuadrado y poco flexible", "Tener habilidades de planificación"],
                    "correct": "Ser demasiado cuadrado y poco flexible"
                },
                {
                    "question": "¿Qué consejo es útil para un recién titulado que busca su primer trabajo en el área?",
                    "type": "radio",
                    "options": ["Evitar hacer preguntas para no parecer inseguro", "Buscar una práctica profesional en una empresa de su interés", "Esperar a ser gerente desde el primer día", "No comprometerse con ninguna empresa"],
                    "correct": "Buscar una práctica profesional en una empresa de su interés"
                },
                {
                    "question": "¿Qué aspecto es clave para tomar decisiones en administración y finanzas?",
                    "type": "radio",
                    "options": ["Tener una visión a corto plazo", "Ser estratégico y tener una visión de futuro", "Evitar la planificación a largo plazo", "Delegar todas las decisiones en el equipo"],
                    "correct": "Ser estratégico y tener una visión de futuro"
                },
                {
                    "question": "¿Qué tipo de perfil profesional es más común en administración y finanzas?",
                    "type": "radio",
                    "options": ["Diseñadores gráficos y comunicadores", "Ingenieros comerciales, industriales y contadores", "Profesionales del área de salud", "Expertos en marketing digital"],
                    "correct": "Ingenieros comerciales, industriales y contadores"
                },
                {
                    "question": "¿Qué consejo es fundamental para crecer en el área de administración y finanzas?",
                    "type": "radio",
                    "options": ["Evitar comprometerse con la empresa", "Tener paciencia, disciplina y resiliencia", "Buscar solo oportunidades únicas en la vida", "No establecer metas a largo plazo"],
                    "correct": "Tener paciencia, disciplina y resiliencia"
                }
            ],
            "passingScore": 7
        },
        {
            "title": "Resumen",
            "videoUrl": "",  # No hay video explícito en paths_videos.txt
            "icon": "FaClipboardList",
            "exitTestQuestions": [
                {
                    "question": "¿Cuánto te gustaría trabajar en esta área?",
                    "type": "radio",
                    "options": ["No me interesa en absoluto", "Me interesa poco", "Tengo un interés moderado", "Me interesa bastante", "Me interesa muchísimo"]
                }
            ],
            "passingScore": 1
        },
        {
            "title": "Lo bueno y lo malo",
            "videoUrl": "https://storage.googleapis.com/prelaboral-435211.appspot.com/videos/BM_Admnistracion y finanzas.mp4",
            "icon": "FaInfoCircle",
            "exitTestQuestions": [
                {
                    "question": "¿Cuánto te gustaría trabajar en esta área?",
                    "type": "radio",
                    "options": ["No me interesa en absoluto", "Me interesa poco", "Tengo un interés moderado", "Me interesa bastante", "Me interesa muchísimo"]
                },
                {
                    "question": "¿Cuál es el principal objetivo del área de administración y finanzas en una empresa?",
                    "type": "radio",
                    "options": ["Maximizar las ventas", "Velar por los recursos financieros y maximizar las utilidades de los accionistas", "Gestionar el personal operativo", "Desarrollar estrategias de marketing"],
                    "correct": "Velar por los recursos financieros y maximizar las utilidades de los accionistas"
                },
                {
                    "question": "¿Qué habilidad es fundamental para destacar en administración y finanzas?",
                    "type": "radio",
                    "options": ["Conocimientos avanzados de diseño gráfico", "Habilidades de negociación y personalidad para decir 'no'", "Dominio de redes sociales", "Experiencia en logística internacional"],
                    "correct": "Habilidades de negociación y personalidad para decir 'no'"
                },
                {
                    "question": "¿Qué herramienta tecnológica es esencial para trabajar en administración y finanzas?",
                    "type": "radio",
                    "options": ["Photoshop", "Excel (nivel avanzado)", "AutoCAD", "WordPress"],
                    "correct": "Excel (nivel avanzado)"
                },
                {
                    "question": "¿Qué característica NO es adecuada para alguien que quiere trabajar en administración y finanzas?",
                    "type": "radio",
                    "options": ["Ser disciplinado y estructurado", "Tener flexibilidad para adaptarse a cambios", "Ser demasiado cuadrado y poco flexible", "Tener habilidades de planificación"],
                    "correct": "Ser demasiado cuadrado y poco flexible"
                },
                {
                    "question": "¿Qué consejo es útil para un recién titulado que busca su primer trabajo en el área?",
                    "type": "radio",
                    "options": ["Evitar hacer preguntas para no parecer inseguro", "Buscar una práctica profesional en una empresa de su interés", "Esperar a ser gerente desde el primer día", "No comprometerse con ninguna empresa"],
                    "correct": "Buscar una práctica profesional en una empresa de su interés"
                }
            ],
            "passingScore": 4
        },
        {
            "title": "10 Mandamientos",
            "videoUrl": "https://storage.googleapis.com/prelaboral-435211.appspot.com/videos/10m_administracion y finanzas.mp4",
            "icon": "FaWpforms",
            "exitTestQuestions": [
                {
                    "question": "Entre estos 10 mandamientos del área de administración y finanzas, ¿cuáles consideras que son tus puntos más débiles o en los que tienes menos conocimiento? (Selecciona hasta 3)",
                    "type": "checkbox",
                    "options": [
                        "Maximizar utilidades de los accionistas",
                        "Dominar Excel a nivel avanzado",
                        "Desarrollar habilidades de negociación",
                        "Entender la operación del negocio",
                        "Evitar ser soberbio y escuchar",
                        "Ser proactivo con un plan B",
                        "Buscar prácticas profesionales",
                        "Tomar decisiones estratégicas",
                        "Mantener paciencia y resiliencia",
                        "Colaborar con gerencia y contabilidad"
                    ],
                    "maxSelections": 3
                }
            ],
            "passingScore": 1
        }
    ]
}

# Datos de Ventas
ventas_data = {
    "area": "Ventas",
    "id": "ventas",
    "name": "Ventas",
    "keywords": ["ventas", "clientes", "negociación", "empatía", "ética", "proactividad", "comunicación", "estrategia"],
    "videos": [
        {
            "title": "Podcast",
            "videoUrl": "https://storage.googleapis.com/prelaboral-435211.appspot.com/videos/podcast ventas-007.mp4",
            "icon": "FaPodcast",
            "exitTestQuestions": [
                {
                    "question": "¿Cuánto te gustaría trabajar en esta área?",
                    "type": "radio",
                    "options": ["No me interesa en absoluto", "Me interesa poco", "Tengo un interés moderado", "Me interesa bastante", "Me interesa muchísimo"]
                },
                {
                    "question": "¿Qué significa ser un vendedor profesional?",
                    "type": "radio",
                    "options": ["Vender productos a cualquier costo", "Ayudar a resolver problemas y cumplir metas del cliente", "Usar técnicas agresivas para cerrar ventas", "Cumplir con las cuotas de venta sin importar cómo"],
                    "correct": "Ayudar a resolver problemas y cumplir metas del cliente"
                },
                {
                    "question": "¿Cuál es uno de los principales atributos que debe tener un vendedor exitoso?",
                    "type": "radio",
                    "options": ["Ser arrogante y seguro de sí mismo", "Ser empático y entender las necesidades del cliente", "Evitar hacer preguntas para no parecer inseguro", "Concentrarse solo en las características del producto"],
                    "correct": "Ser empático y entender las necesidades del cliente"
                },
                {
                    "question": "¿Qué significa la responsabilidad en el contexto de las ventas?",
                    "type": "radio",
                    "options": ["Cumplir con las tareas asignadas", "Hacerse cargo de las consecuencias de tus acciones, tanto buenas como malas", "Delegar las tareas difíciles a otros", "Evitar cometer errores a toda costa"],
                    "correct": "Hacerse cargo de las consecuencias de tus acciones, tanto buenas como malas"
                },
                {
                    "question": "¿Qué es el 'dolor del cliente' en ventas?",
                    "type": "radio",
                    "options": ["El precio alto de un producto", "Una necesidad insatisfecha, un problema no resuelto o una meta no cumplida", "La falta de atención del vendedor", "La competencia desleal en el mercado"],
                    "correct": "Una necesidad insatisfecha, un problema no resuelto o una meta no cumplida"
                },
                {
                    "question": "¿Qué error común cometen los vendedores principiantes?",
                    "type": "radio",
                    "options": ["Hacer demasiadas preguntas al cliente", "No prepararse lo suficiente sobre el producto o servicio", "Ser demasiado amigables con los clientes", "Evitar hablar de los beneficios del producto"],
                    "correct": "No prepararse lo suficiente sobre el producto o servicio"
                },
                {
                    "question": "¿Qué se recomienda hacer durante el proceso de inducción en un nuevo trabajo de ventas?",
                    "type": "radio",
                    "options": ["Evitar hacer preguntas para no parecer inseguro", "Hacer preguntas a todas las áreas de la empresa para entender cómo funcionan", "Concentrarse solo en aprender sobre el producto", "Esperar a que te den toda la información sin preguntar"],
                    "correct": "Hacer preguntas a todas las áreas de la empresa para entender cómo funcionan"
                },
                {
                    "question": "¿Qué actitud es clave para tener éxito en ventas?",
                    "type": "radio",
                    "options": ["Llegar justo a la hora de entrada", "Ser proactivo y llegar temprano para organizarse", "Esperar a que te asignen tareas específicas", "Evitar tomar la iniciativa para no cometer errores"],
                    "correct": "Ser proactivo y llegar temprano para organizarse"
                },
                {
                    "question": "¿Qué significa la autoconfianza en el contexto de las ventas?",
                    "type": "radio",
                    "options": ["Creer que eres mejor que los demás", "Creer en ti mismo y en tu capacidad para lograr objetivos", "Ignorar los comentarios de los clientes", "Evitar pedir ayuda para no parecer débil"],
                    "correct": "Creer en ti mismo y en tu capacidad para lograr objetivos"
                },
                {
                    "question": "¿Qué se recomienda para manejar el rechazo en ventas?",
                    "type": "radio",
                    "options": ["Tomarlo como algo personal y desmotivarse", "Aprender de cada 'no' y usarlo para mejorar", "Evitar situaciones donde puedas recibir un 'no'", "Culpar al cliente por no entender tu propuesta"],
                    "correct": "Aprender de cada 'no' y usarlo para mejorar"
                },
                {
                    "question": "¿Qué se necesita para tener éxito a largo plazo en ventas?",
                    "type": "radio",
                    "options": ["Dejar de estudiar una vez que dominas las técnicas básicas", "Mantenerse actualizado y estudiar constantemente sobre el comportamiento del consumidor", "Evitar cambiar tu enfoque para no confundirte", "Depender solo de la experiencia práctica"],
                    "correct": "Mantenerse actualizado y estudiar constantemente sobre el comportamiento del consumidor"
                }
            ],
            "passingScore": 7
        },
        {
            "title": "Resumen",
            "videoUrl": "https://storage.googleapis.com/prelaboral-435211.appspot.com/videos/podcast_resumen ventas.mp4",
            "icon": "FaClipboardList",
            "exitTestQuestions": [
                {
                    "question": "¿Cuánto te gustaría trabajar en esta área?",
                    "type": "radio",
                    "options": ["No me interesa en absoluto", "Me interesa poco", "Tengo un interés moderado", "Me interesa bastante", "Me interesa muchísimo"]
                },
                {
                    "question": "¿Por qué es importante vender en el contexto laboral?",
                    "type": "radio",
                    "options": ["Porque es una actividad exclusiva para profesionales de ventas", "Porque todos, en algún momento, necesitan vender su imagen o habilidades", "Porque solo los vendedores profesionales consiguen trabajo", "Porque es una actividad que no requiere preparación"],
                    "correct": "Porque todos, en algún momento, necesitan vender su imagen o habilidades"
                },
                {
                    "question": "¿Qué se necesita para que una reunión de ventas sea eficiente?",
                    "type": "radio",
                    "options": ["Hablar mucho sobre uno mismo y sus logros", "Prepararse adecuadamente y hacer preguntas que demuestren conocimiento", "Evitar preguntas para no incomodar al cliente", "Confiar únicamente en la intuición durante la reunión"],
                    "correct": "Prepararse adecuadamente y hacer preguntas que demuestren conocimiento"
                },
                {
                    "question": "¿Qué significa la frase 'las personas le compran a las personas'?",
                    "type": "radio",
                    "options": ["Que los clientes prefieren comprar productos sin interactuar con vendedores", "Que el contacto humano de calidad es clave en el proceso de ventas", "Que los vendedores deben evitar el contacto personal para ser objetivos", "Que las ventas son más efectivas cuando se automatizan"],
                    "correct": "Que el contacto humano de calidad es clave en el proceso de ventas"
                },
                {
                    "question": "¿Qué se recomienda hacer para destacar en una entrevista de trabajo, según el texto?",
                    "type": "radio",
                    "options": ["Hablar solo de las notas académicas y logros técnicos", "Demostrar cómo contratarte será más beneficioso que contratar a otro candidato", "Evitar preguntas sobre la empresa para no parecer intrusivo", "Limitarse a responder lo que el entrevistador pregunta"],
                    "correct": "Demostrar cómo contratarte será más beneficioso que contratar a otro candidato"
                },
                {
                    "question": "¿Qué se dice sobre los vendedores y la inteligencia artificial?",
                    "type": "radio",
                    "options": ["Los vendedores serán reemplazados completamente por la inteligencia artificial", "Los vendedores que no se adapten a la tecnología desaparecerán", "La inteligencia artificial no tiene impacto en el mundo de las ventas", "Los vendedores no necesitan usar tecnología para ser exitosos"],
                    "correct": "Los vendedores que no se adapten a la tecnología desaparecerán"
                }
            ],
            "passingScore": 4
        },
        {
            "title": "Lo bueno y lo malo",
            "videoUrl": "",  # No hay video explícito en paths_videos.txt
            "icon": "FaInfoCircle",
            "exitTestQuestions": [
                {
                    "question": "¿Cuánto te gustaría trabajar en esta área?",
                    "type": "radio",
                    "options": ["No me interesa en absoluto", "Me interesa poco", "Tengo un interés moderado", "Me interesa bastante", "Me interesa muchísimo"]
                },
                {
                    "question": "¿Qué significa ser un vendedor profesional?",
                    "type": "radio",
                    "options": ["Vender productos a cualquier costo", "Ayudar a resolver problemas y cumplir metas del cliente", "Usar técnicas agresivas para cerrar ventas", "Cumplir con las cuotas de venta sin importar cómo"],
                    "correct": "Ayudar a resolver problemas y cumplir metas del cliente"
                },
                {
                    "question": "¿Cuál es uno de los principales atributos que debe tener un vendedor exitoso?",
                    "type": "radio",
                    "options": ["Ser arrogante y seguro de sí mismo", "Ser empático y entender las necesidades del cliente", "Evitar hacer preguntas para no parecer inseguro", "Concentrarse solo en las características del producto"],
                    "correct": "Ser empático y entender las necesidades del cliente"
                },
                {
                    "question": "¿Qué se recomienda para manejar el rechazo en ventas?",
                    "type": "radio",
                    "options": ["Tomarlo como algo personal y desmotivarse", "Aprender de cada 'no' y usarlo para mejorar", "Evitar situaciones donde puedas recibir un 'no'", "Culpar al cliente por no entender tu propuesta"],
                    "correct": "Aprender de cada 'no' y usarlo para mejorar"
                },
                {
                    "question": "¿Qué actitud es clave para tener éxito en ventas?",
                    "type": "radio",
                    "options": ["Llegar justo a la hora de entrada", "Ser proactivo y llegar temprano para organizarse", "Esperar a que te asignen tareas específicas", "Evitar tomar la iniciativa para no cometer errores"],
                    "correct": "Ser proactivo y llegar temprano para organizarse"
                }
            ],
            "passingScore": 3
        },
        {
            "title": "10 Mandamientos",
            "videoUrl": "https://storage.googleapis.com/prelaboral-435211.appspot.com/videos/10 Mandamientos_ventas.mp4",
            "icon": "FaWpforms",
            "exitTestQuestions": [
                {
                    "question": "Entre estos 10 mandamientos del área de ventas, ¿cuáles consideras que son tus puntos más débiles o en los que tienes menos conocimiento? (Selecciona hasta 3)",
                    "type": "checkbox",
                    "options": [
                        "Tratar las ventas como una profesión ética",
                        "Desarrollar habilidades emocionales y estratégicas",
                        "Ser empático con los clientes",
                        "Aprender del rechazo",
                        "Generar confianza cumpliendo promesas",
                        "Hacer preguntas para entender necesidades",
                        "Reconocer la importancia de las ventas",
                        "Mantener ética en las ventas",
                        "Ser proactivo y esforzado",
                        "Prepararse constantemente"
                    ],
                    "maxSelections": 3
                }
            ],
            "passingScore": 1
        }
    ]
}

# Datos de Hidrógeno Verde
hidrogeno_verde_data = {
    "area": "Hidrógeno Verde",
    "id": "hidrogenoVerde",
    "name": "Hidrógeno Verde",
    "keywords": ["hidrógeno", "energía", "renovable", "electrólisis", "sostenibilidad", "ingeniería", "carbono neutralidad"],
    "videos": [
        {
            "title": "Podcast",
            "videoUrl": "https://storage.googleapis.com/prelaboral-435211.appspot.com/videos/podcast hidrogeno verde.mp4",
            "icon": "FaPodcast",
            "exitTestQuestions": [
                {
                    "question": "¿Cuánto te gustaría trabajar en esta área?",
                    "type": "radio",
                    "options": ["No me interesa en absoluto", "Me interesa poco", "Tengo un interés moderado", "Me interesa bastante", "Me interesa muchísimo"]
                },
                {
                    "question": "¿Qué tipo de energía se requiere obligatoriamente para producir hidrógeno verde?",
                    "type": "radio",
                    "options": ["Energía nuclear", "Energía geotérmica", "Energías renovables (eólica, solar, etc.)", "Energía a base de carbón"],
                    "correct": "Energías renovables (eólica, solar, etc.)"
                },
                {
                    "question": "¿Qué factor diferencia al hidrógeno verde de otras industrias extractivas en Chile (ej. cobre, litio)?",
                    "type": "radio",
                    "options": ["Su bajo costo de producción", "El valor agregado en su proceso (ej. electrólisis)", "La falta de competencia internacional", "Que no requiere energía renovable"],
                    "correct": "El valor agregado en su proceso (ej. electrólisis)"
                },
                {
                    "question": "¿Qué región de Chile destaca por su potencial en energía eólica para hidrógeno verde?",
                    "type": "radio",
                    "options": ["Región Metropolitana", "Magallanes", "Valparaíso", "Coquimbo"],
                    "correct": "Magallanes"
                },
                {
                    "question": "¿Qué requisito profesional es obligatorio para certificar instalaciones de hidrógeno según el Decreto 191?",
                    "type": "radio",
                    "options": ["Ser ingeniero comercial", "Ser químico o mecánico", "Tener experiencia en minería", "Dominar programación"],
                    "correct": "Ser químico o mecánico"
                },
                {
                    "question": "¿Qué ventaja competitiva tiene Chile para convertirse en líder mundial en producción de hidrógeno verde?",
                    "type": "radio",
                    "options": ["Tiene la combinación perfecta de radiación solar en el norte y vientos fuertes en el sur", "Es el país con mayor cantidad de agua dulce en América Latina", "Tiene la infraestructura portuaria más desarrollada de la región", "Cuenta con subsidios estatales más altos que otros países"],
                    "correct": "Tiene la combinación perfecta de radiación solar en el norte y vientos fuertes en el sur"
                },
                {
                    "question": "¿Por qué Chile es competitivo en la producción de hidrógeno verde a nivel global?",
                    "type": "radio",
                    "options": ["Por su mano de obra barata", "Por su alta disponibilidad de energías renovables (solar/eólica)", "Por subsidios exclusivos a empresas extranjeras", "Por su cercanía a mercados asiáticos"],
                    "correct": "Por su alta disponibilidad de energías renovables (solar/eólica)"
                },
                {
                    "question": "¿Qué habilidad es CRUCIAL para profesionales en hidrógeno verde?",
                    "type": "radio",
                    "options": ["Dominar redes sociales", "Evaluación y planificación de proyectos", "Saber programar en Python", "Tener experiencia en ventas"],
                    "correct": "Evaluación y planificación de proyectos"
                },
                {
                    "question": "¿Qué ventaja clave tiene el hidrógeno verde sobre los combustibles fósiles tradicionales?",
                    "type": "radio",
                    "options": ["Mayor densidad energética", "Cero emisiones de CO2 en su producción y uso", "Menor costo de almacenamiento", "Infraestructura más desarrollada"],
                    "correct": "Cero emisiones de CO2 en su producción y uso"
                },
                {
                    "question": "¿Cuál es el principal desafío tecnológico actual para masificar el uso de hidrógeno verde?",
                    "type": "radio",
                    "options": ["Falta de electrolizadores", "Almacenamiento y transporte eficiente", "Producción de agua dulce", "Generación de energía renovable"],
                    "correct": "Almacenamiento y transporte eficiente"
                },
                {
                    "question": "¿Qué consejo se da a los profesionales que quieren ingresar a esta industria?",
                    "type": "radio",
                    "options": ["Evitar roles técnicos", "Ser apasionados por energías renovables y adquirir experiencia práctica", "Esperar a que la industria madure", "Enfocarse solo en cargos administrativos"],
                    "correct": "Ser apasionados por energías renovables y adquirir experiencia práctica"
                }
            ],
            "passingScore": 7
        },
        {
            "title": "Resumen",
            "videoUrl": "https://storage.googleapis.com/prelaboral-435211.appspot.com/videos/resumen hidrogeno verde.mp4",
            "icon": "FaClipboardList",
            "exitTestQuestions": [
                {
                    "question": "¿Cuánto te gustaría trabajar en esta área?",
                    "type": "radio",
                    "options": ["No me interesa en absoluto", "Me interesa poco", "Tengo un interés moderado", "Me interesa bastante", "Me interesa muchísimo"]
                },
                {
                    "question": "¿Cuál es el principal objetivo de la industria del hidrógeno verde en Chile?",
                    "type": "radio",
                    "options": ["Reemplazar completamente la minería del cobre", "Lograr la carbono-neutralidad al 2050", "Exportar agua a otros países", "Reducir el costo de la energía eléctrica residencial"],
                    "correct": "Lograr la carbono-neutralidad al 2050"
                },
                {
                    "question": "¿Qué carreras profesionales son las más relevantes para trabajar en este sector?",
                    "type": "radio",
                    "options": ["Derecho y administración", "Química, mecánica e ingeniería eléctrica", "Medicina y biología", "Diseño gráfico y marketing"],
                    "correct": "Química, mecánica e ingeniería eléctrica"
                },
                {
                    "question": "¿Cómo se está utilizando la inteligencia artificial en esta industria?",
                    "type": "radio",
                    "options": ["Para crear campañas publicitarias", "En el control de calidad de electrolizadores", "Para reemplazar mano de obra técnica", "En la gestión de redes sociales"],
                    "correct": "En el control de calidad de electrolizadores"
                },
                {
                    "question": "¿Qué herramienta es fundamental para calcular el valor del hidrógeno (LSOH)?",
                    "type": "radio",
                    "options": ["Photoshop", "Mapas solares y eólicos", "Redes sociales", "Software de edición de video"],
                    "correct": "Mapas solares y eólicos"
                },
                {
                    "question": "¿Por qué es importante el inglés en esta industria?",
                    "type": "radio",
                    "options": ["Para escribir canciones sobre energías limpias", "Para acceder a información técnica y contactar proveedores globales", "Porque todos los equipos vienen con manuales en ruso", "Es un requisito para usar Excel"],
                    "correct": "Para acceder a información técnica y contactar proveedores globales"
                }
            ],
            "passingScore": 4
        },
        {
            "title": "Lo bueno y lo malo",
            "videoUrl": "https://storage.googleapis.com/prelaboral-435211.appspot.com/videos/BM_hidrogeno verde.mp4",
            "icon": "FaInfoCircle",
            "exitTestQuestions": [
                {
                    "question": "¿Cuánto te gustaría trabajar en esta área?",
                    "type": "radio",
                    "options": ["No me interesa en absoluto", "Me interesa poco", "Tengo un interés moderado", "Me interesa bastante", "Me interesa muchísimo"]
                },
                {
                    "question": "¿Qué tipo de energía se requiere obligatoriamente para producir hidrógeno verde?",
                    "type": "radio",
                    "options": ["Energía nuclear", "Energía geotérmica", "Energías renovables (eólica, solar, etc.)", "Energía a base de carbón"],
                    "correct": "Energías renovables (eólica, solar, etc.)"
                },
                {
                    "question": "¿Qué ventaja competitiva tiene Chile para convertirse en líder mundial en producción de hidrógeno verde?",
                    "type": "radio",
                    "options": ["Tiene la combinación perfecta de radiación solar en el norte y vientos fuertes en el sur", "Es el país con mayor cantidad de agua dulce en América Latina", "Tiene la infraestructura portuaria más desarrollada de la región", "Cuenta con subsidios estatales más altos que otros países"],
                    "correct": "Tiene la combinación perfecta de radiación solar en el norte y vientos fuertes en el sur"
                },
                {
                    "question": "¿Qué habilidad es CRUCIAL para profesionales en hidrógeno verde?",
                    "type": "radio",
                    "options": ["Dominar redes sociales", "Evaluación y planificación de proyectos", "Saber programar en Python", "Tener experiencia en ventas"],
                    "correct": "Evaluación y planificación de proyectos"
                },
                {
                    "question": "¿Qué ventaja clave tiene el hidrógeno verde sobre los combustibles fósiles tradicionales?",
                    "type": "radio",
                    "options": ["Mayor densidad energética", "Cero emisiones de CO2 en su producción y uso", "Menor costo de almacenamiento", "Infraestructura más desarrollada"],
                    "correct": "Cero emisiones de CO2 en su producción y uso"
                }
            ],
            "passingScore": 3
        },
        {
            "title": "10 Mandamientos",
            "videoUrl": "https://storage.googleapis.com/prelaboral-435211.appspot.com/videos/10m_hidrogeno verde.mp4",
            "icon": "FaWpforms",
            "exitTestQuestions": [
                {
                    "question": "Entre estos 10 mandamientos del área de hidrógeno verde, ¿cuáles consideras que son tus puntos más débiles o en los que tienes menos conocimiento? (Selecciona hasta 3)",
                    "type": "checkbox",
                    "options": [
                        "Contribuir a la carbono neutralidad",
                        "Usar energías renovables",
                        "Trabajar en regiones clave como Magallanes",
                        "Dominar el inglés para proveedores",
                        "Analizar costos de proyectos",
                        "Agregar valor al transformar materias primas",
                        "Participar en proyectos pilotos",
                        "Ser adaptable a imprevistos",
                        "Colaborar con la minería",
                        "Aprovechar ventajas competitivas de Chile"
                    ],
                    "maxSelections": 3
                }
            ],
            "passingScore": 1
        }
    ]
}

# Datos de Marketing Digital (continued)
marketing_digital_data = {
    "area": "Marketing Digital",
    "id": "marketingDigital",
    "name": "Marketing Digital",
    "keywords": ["marketing", "digital", "redes sociales", "contenido", "métricas", "estrategia", "publicidad", "innovación"],
    "videos": [
        {
            "title": "Podcast",
            "videoUrl": "https://storage.googleapis.com/prelaboral-435211.appspot.com/videos/Pocast Marketing Digital.mp4",
            "icon": "FaPodcast",
            "exitTestQuestions": [
                {
                    "question": "¿Cuánto te gustaría trabajar en esta área?",
                    "type": "radio",
                    "options": ["No me interesa en absoluto", "Me interesa poco", "Tengo un interés moderado", "Me interesa bastante", "Me interesa muchísimo"]
                },
                {
                    "question": "¿Qué característica es esencial para un profesional de Marketing Digital?",
                    "type": "radio",
                    "options": ["Ser introvertido y trabajar solo", "Tener habilidades de comunicación y trabajo en equipo", "Evitar el uso de tecnología", "No necesitar actualizarse constantemente"],
                    "correct": "Tener habilidades de comunicación y trabajo en equipo"
                },
                {
                    "question": "¿Qué habilidad es fundamental para analizar el rendimiento de las campañas de Marketing Digital?",
                    "type": "radio",
                    "options": ["Saber diseñar gráficos atractivos", "Interpretar métricas y KPI (indicadores clave de rendimiento)", "Escribir textos largos y detallados", "Conocer únicamente redes sociales"],
                    "correct": "Interpretar métricas y KPI (indicadores clave de rendimiento)"
                },
                {
                    "question": "¿Qué tendencia está impactando fuertemente el Marketing Digital?",
                    "type": "radio",
                    "options": ["Uso exclusivo de redes sociales tradicionales", "Inteligencia Artificial y automatización", "Eliminación de métricas y KPI", "Reducción del trabajo en equipo"],
                    "correct": "Inteligencia Artificial y automatización"
                },
                {
                    "question": "¿Qué error común cometen los profesionales al iniciar en Marketing Digital?",
                    "type": "radio",
                    "options": ["No dejar respaldo por correo de las decisiones", "Usar demasiadas métricas", "Evitar el contacto con los clientes", "No utilizar redes sociales"],
                    "correct": "No dejar respaldo por correo de las decisiones"
                },
                {
                    "question": "¿Qué habilidad es crucial para manejar datos en Marketing Digital?",
                    "type": "radio",
                    "options": ["Ser experto en cálculo avanzado", "Saber interpretar y usar los números para tomar decisiones", "Evitar el uso de Excel", "No necesitar entender métricas"],
                    "correct": "Saber interpretar y usar los números para tomar decisiones"
                },
                {
                    "question": "¿Qué tipo de personalidad NO es recomendable para el Marketing Digital?",
                    "type": "radio",
                    "options": ["Alguien que disfruta del cambio y la innovación", "Alguien que prefiere la monotonía y evita los riesgos", "Alguien proactivo y curioso", "Alguien que le gusta trabajar en equipo"],
                    "correct": "Alguien que prefiere la monotonía y evita los riesgos"
                },
                {
                    "question": "¿Qué herramienta es fundamental para un profesional de Marketing Digital?",
                    "type": "radio",
                    "options": ["Solo redes sociales como TikTok", "Plataformas de Ads como Google Ads y Meta Ads", "Evitar el uso de metodologías ágiles", "No necesitar capacitación constante"],
                    "correct": "Plataformas de Ads como Google Ads y Meta Ads"
                },
                {
                    "question": "¿Qué consejo es clave para los profesionales que recién comienzan en Marketing Digital?",
                    "type": "radio",
                    "options": ["No hacer preguntas para no parecer inseguro", "Atreverse a preguntar y ser proactivo", "Evitar el contacto con los clientes", "No preocuparse por los detalles"],
                    "correct": "Atreverse a preguntar y ser proactivo"
                },
                {
                    "question": "¿Qué característica es clave para destacar en el Marketing Digital?",
                    "type": "radio",
                    "options": ["Ser reactivo y esperar instrucciones", "Tener proactividad y adaptabilidad al cambio", "Evitar el uso de herramientas digitales", "No preocuparse por las métricas"],
                    "correct": "Tener proactividad y adaptabilidad al cambio"
                },
                {
                    "question": "¿Qué herramienta es recomendable para gestionar proyectos y tareas en Marketing Digital?",
                    "type": "radio",
                    "options": ["Herramientas de diseño como Photoshop", "Plataformas de metodologías ágiles como Trello o Monday", "Programas de edición de video como Premiere Pro", "Software de contabilidad como QuickBooks"],
                    "correct": "Plataformas de metodologías ágiles como Trello o Monday"
                }
            ],
            "passingScore": 7
        },
        {
            "title": "Resumen",
            "videoUrl": "",  # No hay video explícito en paths_videos.txt
            "icon": "FaClipboardList",
            "exitTestQuestions": [
                {
                    "question": "¿Cuánto te gustaría trabajar en esta área?",
                    "type": "radio",
                    "options": ["No me interesa en absoluto", "Me interesa poco", "Tengo un interés moderado", "Me interesa bastante", "Me interesa muchísimo"]
                }
            ],
            "passingScore": 1
        },
        {
            "title": "Lo bueno y lo malo",
            "videoUrl": "https://storage.googleapis.com/prelaboral-435211.appspot.com/videos/BM_Marketing digital.mp4",
            "icon": "FaInfoCircle",
            "exitTestQuestions": [
                {
                    "question": "¿Cuánto te gustaría trabajar en esta área?",
                    "type": "radio",
                    "options": ["No me interesa en absoluto", "Me interesa poco", "Tengo un interés moderado", "Me interesa bastante", "Me interesa muchísimo"]
                },
                {
                    "question": "¿Qué característica es esencial para un profesional de Marketing Digital?",
                    "type": "radio",
                    "options": ["Ser introvertido y trabajar solo", "Tener habilidades de comunicación y trabajo en equipo", "Evitar el uso de tecnología", "No necesitar actualizarse constantemente"],
                    "correct": "Tener habilidades de comunicación y trabajo en equipo"
                },
                {
                    "question": "¿Qué habilidad es fundamental para analizar el rendimiento de las campañas de Marketing Digital?",
                    "type": "radio",
                    "options": ["Saber diseñar gráficos atractivos", "Interpretar métricas y KPI (indicadores clave de rendimiento)", "Escribir textos largos y detallados", "Conocer únicamente redes sociales"],
                    "correct": "Interpretar métricas y KPI (indicadores clave de rendimiento)"
                },
                {
                    "question": "¿Qué tendencia está impactando fuertemente el Marketing Digital?",
                    "type": "radio",
                    "options": ["Uso exclusivo de redes sociales tradicionales", "Inteligencia Artificial y automatización", "Eliminación de métricas y KPI", "Reducción del trabajo en equipo"],
                    "correct": "Inteligencia Artificial y automatización"
                },
                {
                    "question": "¿Qué consejo es clave para los profesionales que recién comienzan en Marketing Digital?",
                    "type": "radio",
                    "options": ["No hacer preguntas para no parecer inseguro", "Atreverse a preguntar y ser proactivo", "Evitar el contacto con los clientes", "No preocuparse por los detalles"],
                    "correct": "Atreverse a preguntar y ser proactivo"
                },
                {
                    "question": "¿Qué herramienta es recomendable para gestionar proyectos y tareas en Marketing Digital?",
                    "type": "radio",
                    "options": ["Herramientas de diseño como Photoshop", "Plataformas de metodologías ágiles como Trello o Monday", "Programas de edición de video como Premiere Pro", "Software de contabilidad como QuickBooks"],
                    "correct": "Plataformas de metodologías ágiles como Trello o Monday"
                }
            ],
            "passingScore": 4
        },
        {
            "title": "10 Mandamientos",
            "videoUrl": "https://storage.googleapis.com/prelaboral-435211.appspot.com/videos/10m_marketing digital.mp4",
            "icon": "FaWpforms",
            "exitTestQuestions": [
                {
                    "question": "Entre estos 10 mandamientos del área de marketing digital, ¿cuáles consideras que son tus puntos más débiles o en los que tienes menos conocimiento? (Selecciona hasta 3)",
                    "type": "checkbox",
                    "options": [
                        "Resolver problemas y agregar valor al cliente",
                        "Elegir canales según objetivos específicos",
                        "Honrar la prueba y el error",
                        "Medir métricas para mejorar campañas",
                        "Crear mensajes que conecten con la audiencia",
                        "Adaptarse rápidamente a cambios",
                        "Ser paciente y constante",
                        "Diversificar contenido (blogs, videos, emails)",
                        "Mantenerse actualizado como estudiante eterno",
                        "Innovar sin miedo al fracaso"
                    ],
                    "maxSelections": 3
                }
            ],
            "passingScore": 1
        }
    ]
}

# Datos de Gestión del Cambio
gestion_cambio_data = {
    "area": "Gestión del Cambio",
    "id": "gestionCambio",
    "name": "Gestión del Cambio",
    "keywords": ["cambio", "gestión", "adaptación", "comunicación", "ADKAR", "resistencia", "liderazgo", "estrategia"],
    "videos": [
        {
            "title": "Podcast",
            "videoUrl": "https://storage.googleapis.com/prelaboral-435211.appspot.com/videos/Podcast_gestion del cambio.mp4",
            "icon": "FaPodcast",
            "exitTestQuestions": [
                {
                    "question": "¿Cuánto te gustaría trabajar en esta área?",
                    "type": "radio",
                    "options": ["No me interesa en absoluto", "Me interesa poco", "Tengo un interés moderado", "Me interesa bastante", "Me interesa muchísimo"]
                },
                {
                    "question": "¿Qué es la gestión del cambio?",
                    "type": "radio",
                    "options": ["Un proceso nuevo que surgió con la tecnología", "La administración consciente del cambio en una organización", "Una herramienta exclusiva para empresas tecnológicas", "Un método para reducir costos en las empresas"],
                    "correct": "La administración consciente del cambio en una organización"
                },
                {
                    "question": "¿Por qué el ser humano tiende a resistirse al cambio?",
                    "type": "radio",
                    "options": ["Por falta de recursos económicos", "Porque prefiere mantenerse en su zona de confort", "Porque no entiende los beneficios del cambio", "Porque las empresas no lo motivan lo suficiente"],
                    "correct": "Porque prefiere mantenerse en su zona de confort"
                },
                {
                    "question": "¿Qué es un diagnóstico en el contexto de la gestión del cambio?",
                    "type": "radio",
                    "options": ["Un análisis financiero de la organización", "Un proceso para identificar brechas y preparación para el cambio", "Una evaluación de la competencia en el mercado", "Un estudio de la satisfacción de los clientes"],
                    "correct": "Un proceso para identificar brechas y preparación para el cambio"
                },
                {
                    "question": "¿Qué elemento es clave para abordar la resistencia al cambio en una organización?",
                    "type": "radio",
                    "options": ["Reducir los costos operativos", "Comunicar claramente los beneficios del cambio", "Contratar más personal", "Implementar nuevas tecnologías sin explicación"],
                    "correct": "Comunicar claramente los beneficios del cambio"
                },
                {
                    "question": "¿Qué metodología se menciona para gestionar el cambio?",
                    "type": "radio",
                    "options": ["SCRUM", "ADKAR", "LEAN", "KANBAN"],
                    "correct": "ADKAR"
                },
                {
                    "question": "¿Qué representa la 'R' en la metodología ADKAR?",
                    "type": "radio",
                    "options": ["Reorganización", "Reinforcement (Refuerzo)", "Reducción", "Revisión"],
                    "correct": "Reinforcement (Refuerzo)"
                },
                {
                    "question": "¿Qué es fundamental para que una gestión del cambio sea exitosa?",
                    "type": "radio",
                    "options": ["Tener un presupuesto elevado", "Contar con herramientas tecnológicas avanzadas", "Una estrategia comunicacional efectiva", "Reducir el número de empleados"],
                    "correct": "Una estrategia comunicacional efectiva"
                },
                {
                    "question": "¿Qué habilidad es clave para un profesional que trabaja en gestión del cambio?",
                    "type": "radio",
                    "options": ["Dominio de herramientas tecnológicas", "Desarrollo personal y autoconocimiento", "Conocimientos avanzados en finanzas", "Experiencia en marketing digital"],
                    "correct": "Desarrollo personal y autoconocimiento"
                },
                {
                    "question": "¿Qué aspecto es fundamental para mantener el cambio a largo plazo en una organización?",
                    "type": "radio",
                    "options": ["Despedir a los empleados que se resisten al cambio", "Implementar un sistema de refuerzo y seguimiento", "Reducir la comunicación para evitar confusiones", "Ignorar los resultados del diagnóstico inicial"],
                    "correct": "Implementar un sistema de refuerzo y seguimiento"
                },
                {
                    "question": "¿Qué se debe hacer después de identificar una brecha en el diagnóstico de gestión del cambio?",
                    "type": "radio",
                    "options": ["Implementar cambios inmediatos sin planificación", "Diseñar un programa de implementación con acciones específicas", "Reducir el personal para ahorrar costos", "Ignorar los resultados y continuar con el proceso actual"],
                    "correct": "Diseñar un programa de implementación con acciones específicas"
                }
            ],
            "passingScore": 7
        },
        {
            "title": "Resumen",
            "videoUrl": "",  # No hay video explícito en paths_videos.txt
            "icon": "FaClipboardList",
            "exitTestQuestions": [
                {
                    "question": "¿Cuánto te gustaría trabajar en esta área?",
                    "type": "radio",
                    "options": ["No me interesa en absoluto", "Me interesa poco", "Tengo un interés moderado", "Me interesa bastante", "Me interesa muchísimo"]
                }
            ],
            "passingScore": 1
        },
        {
            "title": "Lo bueno y lo malo",
            "videoUrl": "https://storage.googleapis.com/prelaboral-435211.appspot.com/videos/bm_gestion del cambio.mp4",
            "icon": "FaInfoCircle",
            "exitTestQuestions": [
                {
                    "question": "¿Cuánto te gustaría trabajar en esta área?",
                    "type": "radio",
                    "options": ["No me interesa en absoluto", "Me interesa poco", "Tengo un interés moderado", "Me interesa bastante", "Me interesa muchísimo"]
                },
                {
                    "question": "¿Qué es la gestión del cambio?",
                    "type": "radio",
                    "options": ["Un proceso nuevo que surgió con la tecnología", "La administración consciente del cambio en una organización", "Una herramienta exclusiva para empresas tecnológicas", "Un método para reducir costos en las empresas"],
                    "correct": "La administración consciente del cambio en una organización"
                },
                {
                    "question": "¿Por qué el ser humano tiende a resistirse al cambio?",
                    "type": "radio",
                    "options": ["Por falta de recursos económicos", "Porque prefiere mantenerse en su zona de confort", "Porque no entiende los beneficios del cambio", "Porque las empresas no lo motivan lo suficiente"],
                    "correct": "Porque prefiere mantenerse en su zona de confort"
                },
                {
                    "question": "¿Qué es un diagnóstico en el contexto de la gestión del cambio?",
                    "type": "radio",
                    "options": ["Un análisis financiero de la organización", "Un proceso para identificar brechas y preparación para el cambio", "Una evaluación de la competencia en el mercado", "Un estudio de la satisfacción de los clientes"],
                    "correct": "Un proceso para identificar brechas y preparación para el cambio"
                },
                {
                    "question": "¿Qué elemento es clave para abordar la resistencia al cambio en una organización?",
                    "type": "radio",
                    "options": ["Reducir los costos operativos", "Comunicar claramente los beneficios del cambio", "Contratar más personal", "Implementar nuevas tecnologías sin explicación"],
                    "correct": "Comunicar claramente los beneficios del cambio"
                },
                {
                    "question": "¿Qué metodología se menciona para gestionar el cambio?",
                    "type": "radio",
                    "options": ["SCRUM", "ADKAR", "LEAN", "KANBAN"],
                    "correct": "ADKAR"
                }
            ],
            "passingScore": 4
        },
        {
            "title": "10 Mandamientos",
            "videoUrl": "https://storage.googleapis.com/prelaboral-435211.appspot.com/videos/10m_gestion del cambio.mp4",
            "icon": "FaWpforms",
            "exitTestQuestions": [
                {
                    "question": "Entre estos 10 mandamientos del área de gestión del cambio, ¿cuáles consideras que son tus puntos más débiles o en los que tienes menos conocimiento? (Selecciona hasta 3)",
                    "type": "checkbox",
                    "options": [
                        "Aceptar el cambio como inevitable",
                        "Realizar diagnósticos para identificar brechas",
                        "Comunicar el por qué, para qué y cómo del cambio",
                        "Priorizar la adaptación de las personas",
                        "Usar metodologías como ADKAR",
                        "Liderar demostrando compromiso",
                        "Implementar refuerzo y seguimiento",
                        "Anticipar y manejar resistencia",
                        "Establecer KPIs para medir progreso",
                        "Fomentar una cultura de aprendizaje"
                    ],
                    "maxSelections": 3
                }
            ],
            "passingScore": 1
        }
    ]
}

# Datos de Empresa Consultora
empresa_consultora_data = {
    "area": "Consultoría",
    "id": "empresaConsultora",
    "name": "Empresa Consultora",
    "keywords": ["consultoría", "análisis", "estrategia", "habilidades blandas", "excel", "proyectos", "comunicación", "clientes"],
    "videos": [
        {
            "title": "Podcast",
            "videoUrl": "https://storage.googleapis.com/prelaboral-435211.appspot.com/videos/Podcast Empresa Consultora.mp4",
            "icon": "FaPodcast",
            "exitTestQuestions": [
                {
                    "question": "¿Cuánto te gustaría trabajar en esta área?",
                    "type": "radio",
                    "options": ["No me interesa en absoluto", "Me interesa poco", "Tengo un interés moderado", "Me interesa bastante", "Me interesa muchísimo"]
                },
                {
                    "question": "¿Cuál es uno de los principales objetivos de una empresa de consultoría?",
                    "type": "radio",
                    "options": ["Contratar personal de manera permanente para las empresas", "Vender horas profesionales especializadas para reducir el riesgo en los proyectos", "Reemplazar áreas internas de las empresas de manera indefinida", "Ofrecer servicios de asesoría sin ejecutar acciones concretas"],
                    "correct": "Vender horas profesionales especializadas para reducir el riesgo en los proyectos"
                },
                {
                    "question": "¿Qué diferencia principal existe entre un consultor y un asesor?",
                    "type": "radio",
                    "options": ["El consultor ejecuta acciones, mientras que el asesor solo da recomendaciones", "El asesor ejecuta acciones, mientras que el consultor solo da recomendaciones", "Ambos realizan las mismas tareas, pero en diferentes industrias", "El consultor trabaja solo en proyectos financieros, mientras que el asesor se enfoca en operaciones"],
                    "correct": "El consultor ejecuta acciones, mientras que el asesor solo da recomendaciones"
                },
                {
                    "question": "¿Qué tipo de empresas suelen contratar servicios de consultoría?",
                    "type": "radio",
                    "options": ["Solo empresas pequeñas", "Solo empresas grandes", "Principalmente empresas medianas y grandes", "Solo emprendedores individuales"],
                    "correct": "Principalmente empresas medianas y grandes"
                },
                {
                    "question": "¿Cuál es una de las habilidades más importantes para un consultor junior?",
                    "type": "radio",
                    "options": ["Saber manejar redes sociales", "Tener un conocimiento técnico sólido y habilidades de análisis", "Ser experto en marketing digital", "Conocer solo herramientas de diseño gráfico"],
                    "correct": "Tener un conocimiento técnico sólido y habilidades de análisis"
                },
                {
                    "question": "¿Qué herramienta es fundamental para un consultor en su día a día?",
                    "type": "radio",
                    "options": ["Photoshop", "Excel", "Instagram", "TikTok"],
                    "correct": "Excel"
                },
                {
                    "question": "¿Qué es un error común que cometen los consultores junior al presentar informes o análisis?",
                    "type": "radio",
                    "options": ["Usar gráficos demasiado complejos que dificultan la comprensión", "Incluir poca información en los informes", "No utilizar herramientas como Excel o PowerPoint", "Evitar el contacto directo con el cliente"],
                    "correct": "Usar gráficos demasiado complejos que dificultan la comprensión"
                },
                {
                    "question": "¿Qué riesgo enfrenta un consultor si no gestiona bien un proyecto?",
                    "type": "radio",
                    "options": ["El proyecto se cancela automáticamente", "El cliente puede no dar feedback y el proyecto se estanca", "El consultor es despedido inmediatamente", "No hay riesgos significativos"],
                    "correct": "El cliente puede no dar feedback y el proyecto se estanca"
                },
                {
                    "question": "¿Qué actitud es fundamental para un consultor junior al enfrentarse a un cliente?",
                    "type": "radio",
                    "options": ["Ser crítico y señalar los errores del cliente de manera directa", "Mantener una 'cara de póker' y manejar las observaciones de manera interna antes de comunicarlas al cliente", "Evitar cualquier tipo de feedback para no generar conflictos", "Delegar todas las responsabilidades en el equipo senior"],
                    "correct": "Mantener una 'cara de póker' y manejar las observaciones de manera interna antes de comunicarlas al cliente"
                },
                {
                    "question": "¿Qué error común cometen los consultores junior al inicio de su carrera?",
                    "type": "radio",
                    "options": ["No saber usar herramientas tecnológicas", "Ser demasiado técnicos y no manejar bien la comunicación con el cliente", "No saber redactar informes", "No tener conocimientos financieros"],
                    "correct": "Ser demasiado técnicos y no manejar bien la comunicación con el cliente"
                },
                {
                    "question": "¿Qué característica es clave para avanzar en una empresa de consultoría?",
                    "type": "radio",
                    "options": ["Saber gestionar proyectos y tener habilidades blandas", "Ser experto en una sola área técnica", "No necesitar feedback de los clientes", "Trabajar de manera independiente sin equipo"],
                    "correct": "Saber gestionar proyectos y tener habilidades blandas"
                }
            ],
            "passingScore": 7
        },
        {
            "title": "Resumen",
            "videoUrl": "https://storage.googleapis.com/prelaboral-435211.appspot.com/videos/Capsula resumen empresa consultora.mp4",
            "icon": "FaClipboardList",
            "exitTestQuestions": [
                {
                    "question": "¿Cuánto te gustaría trabajar en esta área?",
                    "type": "radio",
                    "options": ["No me interesa en absoluto", "Me interesa poco", "Tengo un interés moderado", "Me interesa bastante", "Me interesa muchísimo"]
                },
                {
                    "question": "¿Cuál es el objetivo principal de una empresa de consultoría?",
                    "type": "radio",
                    "options": ["Vender productos a otras empresas", "Tomar acciones específicas dentro de una organización basadas en el análisis de datos", "Ofrecer servicios de reclutamiento para otras empresas", "Desarrollar software para organizaciones", "Realizar actividades de marketing digital"],
                    "correct": "Tomar acciones específicas dentro de una organización basadas en el análisis de datos"
                },
                {
                    "question": "¿Qué atributo central debe tener un profesional que desea ingresar al mundo de la consultoría?",
                    "type": "radio",
                    "options": ["Saber un poco de todo sin especializarse", "Tener habilidades blandas pero no técnicas", "Saber en profundidad sobre un área específica y tener habilidades blandas", "Ser experto en marketing digital", "Tener experiencia previa en ventas"],
                    "correct": "Saber en profundidad sobre un área específica y tener habilidades blandas"
                },
                {
                    "question": "¿Cuál es uno de los principales errores que cometen los profesionales al iniciar en la consultoría?",
                    "type": "radio",
                    "options": ["No saber utilizar herramientas tecnológicas", "Llegar con un mindset demasiado técnico y no entender las zonas grises", "No tener experiencia en ventas", "No saber comunicarse en inglés", "No tener conocimientos en análisis de datos"],
                    "correct": "Llegar con un mindset demasiado técnico y no entender las zonas grises"
                },
                {
                    "question": "¿Cuáles son las herramientas básicas que debe manejar un profesional de consultoría según el texto?",
                    "type": "radio",
                    "options": ["Photoshop y herramientas de diseño gráfico", "Suite de Microsoft (Teams, Excel, Word, PowerPoint) o Google Suite (Drive, Gmail)", "Herramientas de programación como Python y Java", "Plataformas de redes sociales como Instagram y Facebook", "Herramientas de edición de video como Premiere Pro"],
                    "correct": "Suite de Microsoft (Teams, Excel, Word, PowerPoint) o Google Suite (Drive, Gmail)"
                },
                {
                    "question": "¿Por qué es importante el nivel de inglés en the mundo de la consultoría según el texto?",
                    "type": "radio",
                    "options": ["Porque todos los clientes son extranjeros", "Porque el conocimiento experto suele estar disponible en inglés y es necesario para acceder a nuevas tecnologías", "Porque es obligatorio para trabajar en cualquier empresa", "Porque las reuniones siempre se realizan en inglés", "Porque es necesario para viajar al extranjero"],
                    "correct": "Porque el conocimiento experto suele estar disponible en inglés y es necesario para acceder a nuevas tecnologías"
                }
            ],
            "passingScore": 4
        },
        {
            "title": "Lo bueno y lo malo",
            "videoUrl": "https://storage.googleapis.com/prelaboral-435211.appspot.com/videos/BM empresa consultora.mp4",
            "icon": "FaInfoCircle",
            "exitTestQuestions": [
                {
                    "question": "¿Cuánto te gustaría trabajar en esta área?",
                    "type": "radio",
                    "options": ["No me interesa en absoluto", "Me interesa poco", "Tengo un interés moderado", "Me interesa bastante", "Me interesa muchísimo"]
                },
                {
                    "question": "¿Cuál es uno de los principales objetivos de una empresa de consultoría?",
                    "type": "radio",
                    "options": ["Contratar personal de manera permanente para las empresas", "Vender horas profesionales especializadas para reducir el riesgo en los proyectos", "Reemplazar áreas internas de las empresas de manera indefinida", "Ofrecer servicios de asesoría sin ejecutar acciones concretas"],
                    "correct": "Vender horas profesionales especializadas para reducir el riesgo en los proyectos"
                },
                {
                    "question": "¿Qué herramienta es fundamental para un consultor en su día a día?",
                    "type": "radio",
                    "options": ["Photoshop", "Excel", "Instagram", "TikTok"],
                    "correct": "Excel"
                },
                {
                    "question": "¿Qué actitud es fundamental para un consultor junior al enfrentarse a un cliente?",
                    "type": "radio",
                    "options": ["Ser crítico y señalar los errores del cliente de manera directa", "Mantener una 'cara de póker' y manejar las observaciones de manera interna antes de comunicarlas al cliente", "Evitar cualquier tipo de feedback para no generar conflictos", "Delegar todas las responsabilidades en el equipo senior"],
                    "correct": "Mantener una 'cara de póker' y manejar las observaciones de manera interna antes de comunicarlas al cliente"
                },
                {
                    "question": "¿Qué característica es clave para avanzar en una empresa de consultoría?",
                    "type": "radio",
                    "options": ["Saber gestionar proyectos y tener habilidades blandas", "Ser experto en una sola área técnica", "No necesitar feedback de los clientes", "Trabajar de manera independiente sin equipo"],
                    "correct": "Saber gestionar proyectos y tener habilidades blandas"
                }
            ],
            "passingScore": 3
        },
        {
            "title": "10 Mandamientos",
            "videoUrl": "https://storage.googleapis.com/prelaboral-435211.appspot.com/videos/10m_empresa consultora.mp4",
            "icon": "FaWpforms",
            "exitTestQuestions": [
                {
                    "question": "Entre estos 10 mandamientos del área de empresa consultora, ¿cuáles consideras que son tus puntos más débiles o en los que tienes menos conocimiento? (Selecciona hasta 3)",
                    "type": "checkbox",
                    "options": [
                        "Tomar acciones basadas en análisis de datos",
                        "Tener conocimiento profundo en un área específica",
                        "Desarrollar habilidades blandas como comunicación",
                        "Manejar ambigüedades y zonas grises",
                        "Dominar la suite de Microsoft",
                        "Gestionar proyectos con registros detallados",
                        "Crear informes claros y concisos",
                        "Mantener profesionalismo frente al cliente",
                        "Adaptarse a una estructura piramidal",
                        "Afrontar cada proyecto como un nuevo desafío"
                    ],
                    "maxSelections": 3
                }
            ],
            "passingScore": 1
        }
    ]
}

# Función para subir datos a una colección
def upload_collection(collection_name, data):
    try:
        doc_ref = db.collection(collection_name).document(data["id"])
        doc_ref.set(data)
        print(f"Documento '{data['id']}' subido con éxito a la colección '{collection_name}'!")
    except Exception as e:
        print(f"Error al subir el documento '{data['id']}': {e}")

# Subir todas las áreas a la colección 'learningAreas'
def upload_all_data():
    upload_collection("learningAreas", tecnologia_data)
    upload_collection("learningAreas", ingenieria_software_data)
    upload_collection("learningAreas", ciencia_datos_data)
    upload_collection("learningAreas", superpoderAbrirCerrarReunion)
    # Nuevas colecciones de videos
    upload_collection("learningAreas", control_gestion_data)
    upload_collection("learningAreas", turismo_data)
    upload_collection("learningAreas", academia_data)
    upload_collection("learningAreas", administracion_finanzas_data)
    upload_collection("learningAreas", ventas_data)
    upload_collection("learningAreas", hidrogeno_verde_data)
    upload_collection("learningAreas", marketing_digital_data)
    upload_collection("learningAreas", gestion_cambio_data)
    upload_collection("learningAreas", empresa_consultora_data)

# Ejecutar la función
if __name__ == "__main__":
    upload_all_data()