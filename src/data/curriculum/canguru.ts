import type { OlympiadCurriculum } from "./types";

export const CANGURU_CURRICULUM = {
  "olympiadId": "canguru",
  "editionYear": 2026,
  "version": "2026.1",
  "lastReview": "2026-10-21",
  "levels": [
    {
      "id": "canguru_p",
      "code": "P",
      "name": "P — Pré-Ecolier",
      "description": "Base oficial do 3º e 4º anos, usada como revisão nas trilhas atendidas.",
      "grades": [],
      "order": 0,
      "active": false
    },
    {
      "id": "canguru_e",
      "code": "E",
      "name": "E — Ecolier",
      "description": "Nível oficial do 5º e 6º anos; trilha da Via Olímpica para o 6º ano.",
      "grades": [
        "6ano"
      ],
      "order": 1,
      "active": true
    },
    {
      "id": "canguru_b",
      "code": "B",
      "name": "B — Benjamin",
      "description": "Nível oficial do 7º e 8º anos.",
      "grades": [
        "7ano",
        "8ano"
      ],
      "order": 2,
      "active": true
    },
    {
      "id": "canguru_c",
      "code": "C",
      "name": "C — Cadet",
      "description": "Nível oficial do 9º ano.",
      "grades": [
        "9ano"
      ],
      "order": 3,
      "active": true
    },
    {
      "id": "canguru_j",
      "code": "J",
      "name": "J — Junior",
      "description": "Nível oficial da 1ª e 2ª séries do Ensino Médio.",
      "grades": [
        "1em",
        "2em"
      ],
      "order": 4,
      "active": true
    },
    {
      "id": "canguru_s",
      "code": "S",
      "name": "S — Student",
      "description": "Nível oficial da 3ª série do Ensino Médio.",
      "grades": [
        "3em"
      ],
      "order": 5,
      "active": true
    }
  ],
  "areas": [
    {
      "id": "canguru-numeros",
      "name": "Números e operações",
      "description": "Aritmética, divisibilidade, razões e estruturas numéricas.",
      "order": 1
    },
    {
      "id": "canguru-algebra",
      "name": "Álgebra e sequências",
      "description": "Padrões, expressões, equações, funções, polinômios e recorrências.",
      "order": 2
    },
    {
      "id": "canguru-geometria",
      "name": "Geometria e medidas",
      "description": "Geometria plana e espacial, transformações, medidas e coordenadas.",
      "order": 3
    },
    {
      "id": "canguru-combinatoria",
      "name": "Combinatória e probabilidade",
      "description": "Contagem, princípios combinatórios, probabilidade e organização de casos.",
      "order": 4
    },
    {
      "id": "canguru-logica",
      "name": "Lógica e estratégias",
      "description": "Raciocínio lógico, invariantes, jogos, tabuleiros e estratégias de resolução.",
      "order": 5
    },
    {
      "id": "canguru-dados",
      "name": "Dados e algoritmos",
      "description": "Leitura de dados, algoritmos e representações cartesianas.",
      "order": 6
    }
  ],
  "contents": [
    {
      "id": "canguru-base-naturais-operacoes",
      "olympiadId": "canguru",
      "areaId": "canguru-numeros",
      "macrotheme": "Fundamentos aritméticos",
      "moduleId": "canguru-numeros-fundamentos",
      "moduleTitle": "Numeros Fundamentos",
      "title": "Números naturais e operações fundamentais",
      "description": "Estudo de números naturais e operações fundamentais com foco em problemas de raciocínio e aplicações no formato do Canguru.",
      "subtopics": [
        "contagem e ordenação",
        "sistema de numeração",
        "adição e subtração",
        "multiplicação",
        "divisão exata"
      ],
      "learningObjectives": [
        "Compreender os conceitos centrais de números naturais e operações fundamentais.",
        "Resolver problemas do Canguru que combinem contagem e ordenação, sistema de numeração, adição e subtração.",
        "Explicar a estratégia usada e conferir as restrições do problema."
      ],
      "prerequisites": [
        "Leitura atenta do enunciado",
        "Operações compatíveis com o nível"
      ],
      "theoryOutline": [
        "Conceito e vocabulário: contagem e ordenação",
        "Conceito e vocabulário: sistema de numeração",
        "Conceito e vocabulário: adição e subtração",
        "Conceito e vocabulário: multiplicação",
        "Conceito e vocabulário: divisão exata"
      ],
      "formulas": [],
      "commonErrors": [
        "Aplicar uma regra sem verificar todas as condições do enunciado.",
        "Contar o mesmo caso mais de uma vez ou ignorar possibilidades.",
        "Aceitar uma resposta sem conferir se ela satisfaz as restrições."
      ],
      "keywords": [
        "Números naturais e operações fundamentais",
        "contagem e ordenação",
        "sistema de numeração",
        "adição e subtração",
        "multiplicação"
      ],
      "requiresUpdate": false,
      "reviewFrequencyMonths": null,
      "status": "revisado",
      "sourceTopicIds": [
        "P-01",
        "P-02",
        "P-03",
        "P-04"
      ],
      "adaptations": [
        {
          "levelId": "canguru_e",
          "originProgram": "oficial_herdado",
          "treatment": "revisao",
          "importance": "essencial",
          "difficulty": 1,
          "order": 1,
          "theoryMinutes": 30,
          "exerciseMinutes": 45,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 6,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar representações concretas, desenhos e tentativas organizadas.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_b",
          "originProgram": "oficial_herdado",
          "treatment": "revisao",
          "importance": "essencial",
          "difficulty": 2,
          "order": 1,
          "theoryMinutes": 20,
          "exerciseMinutes": 45,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 6,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar representações concretas, desenhos e tentativas organizadas.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_c",
          "originProgram": "oficial_herdado",
          "treatment": "revisao",
          "importance": "importante",
          "difficulty": 1,
          "order": 1,
          "theoryMinutes": 15,
          "exerciseMinutes": 30,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 6,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_j",
          "originProgram": "oficial_herdado",
          "treatment": "revisao",
          "importance": "importante",
          "difficulty": 1,
          "order": 1,
          "theoryMinutes": 15,
          "exerciseMinutes": 30,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 6,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_s",
          "originProgram": "oficial_herdado",
          "treatment": "revisao",
          "importance": "importante",
          "difficulty": 1,
          "order": 1,
          "theoryMinutes": 15,
          "exerciseMinutes": 30,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 6,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        }
      ],
      "sources": [
        {
          "id": "canguru-programa-p1",
          "type": "programa_oficial",
          "title": "Conteúdo Programático do Concurso Canguru",
          "institution": "Canguru de Matemática Brasil / UpMat Educacional",
          "editionYear": null,
          "pageSection": "Página 1",
          "url": "https://e1f593d1-358f-4280-bf47-50136b7f401f.filesusr.com/ugd/7aad12_e4850730edb3462799273e3dcfb75447.pdf",
          "consultedAt": "2026-10-21",
          "official": true,
          "evidence": "conteudo_herdado"
        }
      ]
    },
    {
      "id": "canguru-base-multiplos-fracoes",
      "olympiadId": "canguru",
      "areaId": "canguru-numeros",
      "macrotheme": "Fundamentos aritméticos",
      "moduleId": "canguru-numeros-divisibilidade",
      "moduleTitle": "Numeros Divisibilidade",
      "title": "Múltiplos, divisores e partes de uma quantidade",
      "description": "Estudo de múltiplos, divisores e partes de uma quantidade com foco em problemas de raciocínio e aplicações no formato do Canguru.",
      "subtopics": [
        "dobro",
        "triplo",
        "metade",
        "terça parte",
        "múltiplos e divisores"
      ],
      "learningObjectives": [
        "Compreender os conceitos centrais de múltiplos, divisores e partes de uma quantidade.",
        "Resolver problemas do Canguru que combinem dobro, triplo, metade.",
        "Explicar a estratégia usada e conferir as restrições do problema."
      ],
      "prerequisites": [
        "Leitura atenta do enunciado",
        "Operações compatíveis com o nível"
      ],
      "theoryOutline": [
        "Conceito e vocabulário: dobro",
        "Conceito e vocabulário: triplo",
        "Conceito e vocabulário: metade",
        "Conceito e vocabulário: terça parte",
        "Conceito e vocabulário: múltiplos e divisores"
      ],
      "formulas": [],
      "commonErrors": [
        "Aplicar uma regra sem verificar todas as condições do enunciado.",
        "Contar o mesmo caso mais de uma vez ou ignorar possibilidades.",
        "Aceitar uma resposta sem conferir se ela satisfaz as restrições."
      ],
      "keywords": [
        "Múltiplos, divisores e partes de uma quantidade",
        "dobro",
        "triplo",
        "metade",
        "terça parte"
      ],
      "requiresUpdate": false,
      "reviewFrequencyMonths": null,
      "status": "revisado",
      "sourceTopicIds": [
        "P-05"
      ],
      "adaptations": [
        {
          "levelId": "canguru_e",
          "originProgram": "oficial_herdado",
          "treatment": "revisao",
          "importance": "essencial",
          "difficulty": 1,
          "order": 2,
          "theoryMinutes": 30,
          "exerciseMinutes": 45,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 6,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar representações concretas, desenhos e tentativas organizadas.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_b",
          "originProgram": "oficial_herdado",
          "treatment": "revisao",
          "importance": "essencial",
          "difficulty": 2,
          "order": 2,
          "theoryMinutes": 20,
          "exerciseMinutes": 45,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 6,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar representações concretas, desenhos e tentativas organizadas.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_c",
          "originProgram": "oficial_herdado",
          "treatment": "revisao",
          "importance": "importante",
          "difficulty": 1,
          "order": 2,
          "theoryMinutes": 15,
          "exerciseMinutes": 30,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 6,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_j",
          "originProgram": "oficial_herdado",
          "treatment": "revisao",
          "importance": "importante",
          "difficulty": 1,
          "order": 2,
          "theoryMinutes": 15,
          "exerciseMinutes": 30,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 6,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_s",
          "originProgram": "oficial_herdado",
          "treatment": "revisao",
          "importance": "importante",
          "difficulty": 1,
          "order": 2,
          "theoryMinutes": 15,
          "exerciseMinutes": 30,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 6,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        }
      ],
      "sources": [
        {
          "id": "canguru-programa-p1",
          "type": "programa_oficial",
          "title": "Conteúdo Programático do Concurso Canguru",
          "institution": "Canguru de Matemática Brasil / UpMat Educacional",
          "editionYear": null,
          "pageSection": "Página 1",
          "url": "https://e1f593d1-358f-4280-bf47-50136b7f401f.filesusr.com/ugd/7aad12_e4850730edb3462799273e3dcfb75447.pdf",
          "consultedAt": "2026-10-21",
          "official": true,
          "evidence": "conteudo_herdado"
        }
      ]
    },
    {
      "id": "canguru-base-padroes-prealgebra",
      "olympiadId": "canguru",
      "areaId": "canguru-algebra",
      "macrotheme": "Padrões e relações",
      "moduleId": "canguru-algebra-padroes",
      "moduleTitle": "Algebra Padroes",
      "title": "Padrões, ordenação e pré-álgebra",
      "description": "Estudo de padrões, ordenação e pré-álgebra com foco em problemas de raciocínio e aplicações no formato do Canguru.",
      "subtopics": [
        "ordenação de números, letras e figuras",
        "padrões em figuras",
        "sequências de figuras",
        "valores atribuídos a símbolos"
      ],
      "learningObjectives": [
        "Compreender os conceitos centrais de padrões, ordenação e pré-álgebra.",
        "Resolver problemas do Canguru que combinem ordenação de números, letras e figuras, padrões em figuras, sequências de figuras.",
        "Explicar a estratégia usada e conferir as restrições do problema."
      ],
      "prerequisites": [
        "Leitura atenta do enunciado",
        "Operações compatíveis com o nível"
      ],
      "theoryOutline": [
        "Conceito e vocabulário: ordenação de números, letras e figuras",
        "Conceito e vocabulário: padrões em figuras",
        "Conceito e vocabulário: sequências de figuras",
        "Conceito e vocabulário: valores atribuídos a símbolos"
      ],
      "formulas": [],
      "commonErrors": [
        "Aplicar uma regra sem verificar todas as condições do enunciado.",
        "Contar o mesmo caso mais de uma vez ou ignorar possibilidades.",
        "Aceitar uma resposta sem conferir se ela satisfaz as restrições."
      ],
      "keywords": [
        "Padrões, ordenação e pré-álgebra",
        "ordenação de números, letras e figuras",
        "padrões em figuras",
        "sequências de figuras",
        "valores atribuídos a símbolos"
      ],
      "requiresUpdate": false,
      "reviewFrequencyMonths": null,
      "status": "revisado",
      "sourceTopicIds": [
        "P-06",
        "P-08",
        "P-09",
        "P-10",
        "P-16"
      ],
      "adaptations": [
        {
          "levelId": "canguru_e",
          "originProgram": "oficial_herdado",
          "treatment": "revisao",
          "importance": "essencial",
          "difficulty": 2,
          "order": 3,
          "theoryMinutes": 30,
          "exerciseMinutes": 60,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 6,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar representações concretas, desenhos e tentativas organizadas.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_b",
          "originProgram": "oficial_herdado",
          "treatment": "revisao",
          "importance": "essencial",
          "difficulty": 3,
          "order": 3,
          "theoryMinutes": 20,
          "exerciseMinutes": 50,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 6,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar representações concretas, desenhos e tentativas organizadas.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_c",
          "originProgram": "oficial_herdado",
          "treatment": "revisao",
          "importance": "importante",
          "difficulty": 2,
          "order": 3,
          "theoryMinutes": 15,
          "exerciseMinutes": 35,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 6,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_j",
          "originProgram": "oficial_herdado",
          "treatment": "revisao",
          "importance": "importante",
          "difficulty": 2,
          "order": 3,
          "theoryMinutes": 15,
          "exerciseMinutes": 35,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 6,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_s",
          "originProgram": "oficial_herdado",
          "treatment": "revisao",
          "importance": "importante",
          "difficulty": 2,
          "order": 3,
          "theoryMinutes": 15,
          "exerciseMinutes": 35,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 6,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        }
      ],
      "sources": [
        {
          "id": "canguru-programa-p1",
          "type": "programa_oficial",
          "title": "Conteúdo Programático do Concurso Canguru",
          "institution": "Canguru de Matemática Brasil / UpMat Educacional",
          "editionYear": null,
          "pageSection": "Página 1",
          "url": "https://e1f593d1-358f-4280-bf47-50136b7f401f.filesusr.com/ugd/7aad12_e4850730edb3462799273e3dcfb75447.pdf",
          "consultedAt": "2026-10-21",
          "official": true,
          "evidence": "conteudo_herdado"
        }
      ]
    },
    {
      "id": "canguru-base-formas-transformacoes",
      "olympiadId": "canguru",
      "areaId": "canguru-geometria",
      "macrotheme": "Geometria básica",
      "moduleId": "canguru-geometria-formas",
      "moduleTitle": "Geometria Formas",
      "title": "Formas, movimentos e localização",
      "description": "Estudo de formas, movimentos e localização com foco em problemas de raciocínio e aplicações no formato do Canguru.",
      "subtopics": [
        "triângulo, quadrado e retângulo",
        "translação",
        "reflexão",
        "localização no plano e no espaço"
      ],
      "learningObjectives": [
        "Compreender os conceitos centrais de formas, movimentos e localização.",
        "Resolver problemas do Canguru que combinem triângulo, quadrado e retângulo, translação, reflexão.",
        "Explicar a estratégia usada e conferir as restrições do problema."
      ],
      "prerequisites": [
        "Leitura atenta do enunciado",
        "Operações compatíveis com o nível"
      ],
      "theoryOutline": [
        "Conceito e vocabulário: triângulo, quadrado e retângulo",
        "Conceito e vocabulário: translação",
        "Conceito e vocabulário: reflexão",
        "Conceito e vocabulário: localização no plano e no espaço"
      ],
      "formulas": [],
      "commonErrors": [
        "Aplicar uma regra sem verificar todas as condições do enunciado.",
        "Contar o mesmo caso mais de uma vez ou ignorar possibilidades.",
        "Aceitar uma resposta sem conferir se ela satisfaz as restrições."
      ],
      "keywords": [
        "Formas, movimentos e localização",
        "triângulo, quadrado e retângulo",
        "translação",
        "reflexão",
        "localização no plano e no espaço"
      ],
      "requiresUpdate": false,
      "reviewFrequencyMonths": null,
      "status": "revisado",
      "sourceTopicIds": [
        "P-07",
        "P-11",
        "P-15"
      ],
      "adaptations": [
        {
          "levelId": "canguru_e",
          "originProgram": "oficial_herdado",
          "treatment": "revisao",
          "importance": "essencial",
          "difficulty": 2,
          "order": 4,
          "theoryMinutes": 30,
          "exerciseMinutes": 60,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 6,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar representações concretas, desenhos e tentativas organizadas.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_b",
          "originProgram": "oficial_herdado",
          "treatment": "revisao",
          "importance": "essencial",
          "difficulty": 3,
          "order": 4,
          "theoryMinutes": 20,
          "exerciseMinutes": 50,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 6,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar representações concretas, desenhos e tentativas organizadas.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_c",
          "originProgram": "oficial_herdado",
          "treatment": "revisao",
          "importance": "importante",
          "difficulty": 2,
          "order": 4,
          "theoryMinutes": 15,
          "exerciseMinutes": 35,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 6,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_j",
          "originProgram": "oficial_herdado",
          "treatment": "revisao",
          "importance": "importante",
          "difficulty": 2,
          "order": 4,
          "theoryMinutes": 15,
          "exerciseMinutes": 35,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 6,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_s",
          "originProgram": "oficial_herdado",
          "treatment": "revisao",
          "importance": "importante",
          "difficulty": 2,
          "order": 4,
          "theoryMinutes": 15,
          "exerciseMinutes": 35,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 6,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        }
      ],
      "sources": [
        {
          "id": "canguru-programa-p1",
          "type": "programa_oficial",
          "title": "Conteúdo Programático do Concurso Canguru",
          "institution": "Canguru de Matemática Brasil / UpMat Educacional",
          "editionYear": null,
          "pageSection": "Página 1",
          "url": "https://e1f593d1-358f-4280-bf47-50136b7f401f.filesusr.com/ugd/7aad12_e4850730edb3462799273e3dcfb75447.pdf",
          "consultedAt": "2026-10-21",
          "official": true,
          "evidence": "conteudo_herdado"
        }
      ]
    },
    {
      "id": "canguru-base-medidas-tempo",
      "olympiadId": "canguru",
      "areaId": "canguru-geometria",
      "macrotheme": "Medidas",
      "moduleId": "canguru-geometria-medidas",
      "moduleTitle": "Geometria Medidas",
      "title": "Tempo, calendário e medidas usuais",
      "description": "Estudo de tempo, calendário e medidas usuais com foco em problemas de raciocínio e aplicações no formato do Canguru.",
      "subtopics": [
        "relógio analógico e digital",
        "horas e minutos",
        "dias e meses",
        "quilômetro, metro e centímetro",
        "quilograma e grama"
      ],
      "learningObjectives": [
        "Compreender os conceitos centrais de tempo, calendário e medidas usuais.",
        "Resolver problemas do Canguru que combinem relógio analógico e digital, horas e minutos, dias e meses.",
        "Explicar a estratégia usada e conferir as restrições do problema."
      ],
      "prerequisites": [
        "Leitura atenta do enunciado",
        "Operações compatíveis com o nível"
      ],
      "theoryOutline": [
        "Conceito e vocabulário: relógio analógico e digital",
        "Conceito e vocabulário: horas e minutos",
        "Conceito e vocabulário: dias e meses",
        "Conceito e vocabulário: quilômetro, metro e centímetro",
        "Conceito e vocabulário: quilograma e grama"
      ],
      "formulas": [],
      "commonErrors": [
        "Aplicar uma regra sem verificar todas as condições do enunciado.",
        "Contar o mesmo caso mais de uma vez ou ignorar possibilidades.",
        "Aceitar uma resposta sem conferir se ela satisfaz as restrições."
      ],
      "keywords": [
        "Tempo, calendário e medidas usuais",
        "relógio analógico e digital",
        "horas e minutos",
        "dias e meses",
        "quilômetro, metro e centímetro"
      ],
      "requiresUpdate": false,
      "reviewFrequencyMonths": null,
      "status": "revisado",
      "sourceTopicIds": [
        "P-12",
        "P-13",
        "P-14"
      ],
      "adaptations": [
        {
          "levelId": "canguru_e",
          "originProgram": "oficial_herdado",
          "treatment": "revisao",
          "importance": "essencial",
          "difficulty": 1,
          "order": 5,
          "theoryMinutes": 30,
          "exerciseMinutes": 45,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 6,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar representações concretas, desenhos e tentativas organizadas.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_b",
          "originProgram": "oficial_herdado",
          "treatment": "revisao",
          "importance": "essencial",
          "difficulty": 2,
          "order": 5,
          "theoryMinutes": 20,
          "exerciseMinutes": 45,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 6,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar representações concretas, desenhos e tentativas organizadas.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_c",
          "originProgram": "oficial_herdado",
          "treatment": "revisao",
          "importance": "importante",
          "difficulty": 1,
          "order": 5,
          "theoryMinutes": 15,
          "exerciseMinutes": 30,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 6,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_j",
          "originProgram": "oficial_herdado",
          "treatment": "revisao",
          "importance": "importante",
          "difficulty": 1,
          "order": 5,
          "theoryMinutes": 15,
          "exerciseMinutes": 30,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 6,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_s",
          "originProgram": "oficial_herdado",
          "treatment": "revisao",
          "importance": "importante",
          "difficulty": 1,
          "order": 5,
          "theoryMinutes": 15,
          "exerciseMinutes": 30,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 6,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        }
      ],
      "sources": [
        {
          "id": "canguru-programa-p1",
          "type": "programa_oficial",
          "title": "Conteúdo Programático do Concurso Canguru",
          "institution": "Canguru de Matemática Brasil / UpMat Educacional",
          "editionYear": null,
          "pageSection": "Página 1",
          "url": "https://e1f593d1-358f-4280-bf47-50136b7f401f.filesusr.com/ugd/7aad12_e4850730edb3462799273e3dcfb75447.pdf",
          "consultedAt": "2026-10-21",
          "official": true,
          "evidence": "conteudo_herdado"
        }
      ]
    },
    {
      "id": "canguru-base-solidos-composicao",
      "olympiadId": "canguru",
      "areaId": "canguru-geometria",
      "macrotheme": "Geometria espacial",
      "moduleId": "canguru-geometria-solidos",
      "moduleTitle": "Geometria Solidos",
      "title": "Sólidos e composição de figuras",
      "description": "Estudo de sólidos e composição de figuras com foco em problemas de raciocínio e aplicações no formato do Canguru.",
      "subtopics": [
        "cubos",
        "blocos retangulares",
        "pirâmides",
        "composição de figuras planas",
        "composição de sólidos"
      ],
      "learningObjectives": [
        "Compreender os conceitos centrais de sólidos e composição de figuras.",
        "Resolver problemas do Canguru que combinem cubos, blocos retangulares, pirâmides.",
        "Explicar a estratégia usada e conferir as restrições do problema."
      ],
      "prerequisites": [
        "Leitura atenta do enunciado",
        "Operações compatíveis com o nível"
      ],
      "theoryOutline": [
        "Conceito e vocabulário: cubos",
        "Conceito e vocabulário: blocos retangulares",
        "Conceito e vocabulário: pirâmides",
        "Conceito e vocabulário: composição de figuras planas",
        "Conceito e vocabulário: composição de sólidos"
      ],
      "formulas": [],
      "commonErrors": [
        "Aplicar uma regra sem verificar todas as condições do enunciado.",
        "Contar o mesmo caso mais de uma vez ou ignorar possibilidades.",
        "Aceitar uma resposta sem conferir se ela satisfaz as restrições."
      ],
      "keywords": [
        "Sólidos e composição de figuras",
        "cubos",
        "blocos retangulares",
        "pirâmides",
        "composição de figuras planas"
      ],
      "requiresUpdate": false,
      "reviewFrequencyMonths": null,
      "status": "revisado",
      "sourceTopicIds": [
        "P-18",
        "P-19"
      ],
      "adaptations": [
        {
          "levelId": "canguru_e",
          "originProgram": "oficial_herdado",
          "treatment": "revisao",
          "importance": "essencial",
          "difficulty": 2,
          "order": 6,
          "theoryMinutes": 30,
          "exerciseMinutes": 60,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 6,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar representações concretas, desenhos e tentativas organizadas.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_b",
          "originProgram": "oficial_herdado",
          "treatment": "revisao",
          "importance": "essencial",
          "difficulty": 3,
          "order": 6,
          "theoryMinutes": 20,
          "exerciseMinutes": 50,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 6,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar representações concretas, desenhos e tentativas organizadas.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_c",
          "originProgram": "oficial_herdado",
          "treatment": "revisao",
          "importance": "importante",
          "difficulty": 2,
          "order": 6,
          "theoryMinutes": 15,
          "exerciseMinutes": 35,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 6,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_j",
          "originProgram": "oficial_herdado",
          "treatment": "revisao",
          "importance": "importante",
          "difficulty": 2,
          "order": 6,
          "theoryMinutes": 15,
          "exerciseMinutes": 35,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 6,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_s",
          "originProgram": "oficial_herdado",
          "treatment": "revisao",
          "importance": "importante",
          "difficulty": 2,
          "order": 6,
          "theoryMinutes": 15,
          "exerciseMinutes": 35,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 6,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        }
      ],
      "sources": [
        {
          "id": "canguru-programa-p1",
          "type": "programa_oficial",
          "title": "Conteúdo Programático do Concurso Canguru",
          "institution": "Canguru de Matemática Brasil / UpMat Educacional",
          "editionYear": null,
          "pageSection": "Página 1",
          "url": "https://e1f593d1-358f-4280-bf47-50136b7f401f.filesusr.com/ugd/7aad12_e4850730edb3462799273e3dcfb75447.pdf",
          "consultedAt": "2026-10-21",
          "official": true,
          "evidence": "conteudo_herdado"
        }
      ]
    },
    {
      "id": "canguru-base-contagem-caminhos",
      "olympiadId": "canguru",
      "areaId": "canguru-combinatoria",
      "macrotheme": "Contagem básica",
      "moduleId": "canguru-combinatoria-caminhos",
      "moduleTitle": "Combinatoria Caminhos",
      "title": "Contagem de figuras e caminhos",
      "description": "Estudo de contagem de figuras e caminhos com foco em problemas de raciocínio e aplicações no formato do Canguru.",
      "subtopics": [
        "contagem de números e figuras",
        "contagem básica de caminhos"
      ],
      "learningObjectives": [
        "Compreender os conceitos centrais de contagem de figuras e caminhos.",
        "Resolver problemas do Canguru que combinem contagem de números e figuras, contagem básica de caminhos.",
        "Explicar a estratégia usada e conferir as restrições do problema."
      ],
      "prerequisites": [
        "Leitura atenta do enunciado",
        "Operações compatíveis com o nível"
      ],
      "theoryOutline": [
        "Conceito e vocabulário: contagem de números e figuras",
        "Conceito e vocabulário: contagem básica de caminhos"
      ],
      "formulas": [],
      "commonErrors": [
        "Aplicar uma regra sem verificar todas as condições do enunciado.",
        "Contar o mesmo caso mais de uma vez ou ignorar possibilidades.",
        "Aceitar uma resposta sem conferir se ela satisfaz as restrições."
      ],
      "keywords": [
        "Contagem de figuras e caminhos",
        "contagem de números e figuras",
        "contagem básica de caminhos"
      ],
      "requiresUpdate": false,
      "reviewFrequencyMonths": null,
      "status": "revisado",
      "sourceTopicIds": [
        "P-17"
      ],
      "adaptations": [
        {
          "levelId": "canguru_e",
          "originProgram": "oficial_herdado",
          "treatment": "revisao",
          "importance": "essencial",
          "difficulty": 2,
          "order": 7,
          "theoryMinutes": 30,
          "exerciseMinutes": 60,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 6,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar representações concretas, desenhos e tentativas organizadas.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_b",
          "originProgram": "oficial_herdado",
          "treatment": "revisao",
          "importance": "essencial",
          "difficulty": 3,
          "order": 7,
          "theoryMinutes": 20,
          "exerciseMinutes": 50,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 6,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar representações concretas, desenhos e tentativas organizadas.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_c",
          "originProgram": "oficial_herdado",
          "treatment": "revisao",
          "importance": "importante",
          "difficulty": 2,
          "order": 7,
          "theoryMinutes": 15,
          "exerciseMinutes": 35,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 6,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_j",
          "originProgram": "oficial_herdado",
          "treatment": "revisao",
          "importance": "importante",
          "difficulty": 2,
          "order": 7,
          "theoryMinutes": 15,
          "exerciseMinutes": 35,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 6,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_s",
          "originProgram": "oficial_herdado",
          "treatment": "revisao",
          "importance": "importante",
          "difficulty": 2,
          "order": 7,
          "theoryMinutes": 15,
          "exerciseMinutes": 35,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 6,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        }
      ],
      "sources": [
        {
          "id": "canguru-programa-p1",
          "type": "programa_oficial",
          "title": "Conteúdo Programático do Concurso Canguru",
          "institution": "Canguru de Matemática Brasil / UpMat Educacional",
          "editionYear": null,
          "pageSection": "Página 1",
          "url": "https://e1f593d1-358f-4280-bf47-50136b7f401f.filesusr.com/ugd/7aad12_e4850730edb3462799273e3dcfb75447.pdf",
          "consultedAt": "2026-10-21",
          "official": true,
          "evidence": "conteudo_herdado"
        }
      ]
    },
    {
      "id": "canguru-base-texto-logica",
      "olympiadId": "canguru",
      "areaId": "canguru-logica",
      "macrotheme": "Leitura e estratégia",
      "moduleId": "canguru-logica-fundamentos",
      "moduleTitle": "Logica Fundamentos",
      "title": "Compreensão de enunciados e lógica elementar",
      "description": "Estudo de compreensão de enunciados e lógica elementar com foco em problemas de raciocínio e aplicações no formato do Canguru.",
      "subtopics": [
        "compreensão de textos simples",
        "identificação de condições",
        "lógica e estratégia"
      ],
      "learningObjectives": [
        "Compreender os conceitos centrais de compreensão de enunciados e lógica elementar.",
        "Resolver problemas do Canguru que combinem compreensão de textos simples, identificação de condições, lógica e estratégia.",
        "Explicar a estratégia usada e conferir as restrições do problema."
      ],
      "prerequisites": [
        "Leitura atenta do enunciado",
        "Operações compatíveis com o nível"
      ],
      "theoryOutline": [
        "Conceito e vocabulário: compreensão de textos simples",
        "Conceito e vocabulário: identificação de condições",
        "Conceito e vocabulário: lógica e estratégia"
      ],
      "formulas": [],
      "commonErrors": [
        "Aplicar uma regra sem verificar todas as condições do enunciado.",
        "Contar o mesmo caso mais de uma vez ou ignorar possibilidades.",
        "Aceitar uma resposta sem conferir se ela satisfaz as restrições."
      ],
      "keywords": [
        "Compreensão de enunciados e lógica elementar",
        "compreensão de textos simples",
        "identificação de condições",
        "lógica e estratégia"
      ],
      "requiresUpdate": false,
      "reviewFrequencyMonths": null,
      "status": "revisado",
      "sourceTopicIds": [
        "P-20",
        "P-21"
      ],
      "adaptations": [
        {
          "levelId": "canguru_e",
          "originProgram": "oficial_herdado",
          "treatment": "revisao",
          "importance": "essencial",
          "difficulty": 2,
          "order": 8,
          "theoryMinutes": 30,
          "exerciseMinutes": 60,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 6,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar representações concretas, desenhos e tentativas organizadas.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_b",
          "originProgram": "oficial_herdado",
          "treatment": "revisao",
          "importance": "essencial",
          "difficulty": 3,
          "order": 8,
          "theoryMinutes": 20,
          "exerciseMinutes": 50,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 6,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar representações concretas, desenhos e tentativas organizadas.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_c",
          "originProgram": "oficial_herdado",
          "treatment": "revisao",
          "importance": "importante",
          "difficulty": 2,
          "order": 8,
          "theoryMinutes": 15,
          "exerciseMinutes": 35,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 6,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_j",
          "originProgram": "oficial_herdado",
          "treatment": "revisao",
          "importance": "importante",
          "difficulty": 2,
          "order": 8,
          "theoryMinutes": 15,
          "exerciseMinutes": 35,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 6,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_s",
          "originProgram": "oficial_herdado",
          "treatment": "revisao",
          "importance": "importante",
          "difficulty": 2,
          "order": 8,
          "theoryMinutes": 15,
          "exerciseMinutes": 35,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 6,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        }
      ],
      "sources": [
        {
          "id": "canguru-programa-p1",
          "type": "programa_oficial",
          "title": "Conteúdo Programático do Concurso Canguru",
          "institution": "Canguru de Matemática Brasil / UpMat Educacional",
          "editionYear": null,
          "pageSection": "Página 1",
          "url": "https://e1f593d1-358f-4280-bf47-50136b7f401f.filesusr.com/ugd/7aad12_e4850730edb3462799273e3dcfb75447.pdf",
          "consultedAt": "2026-10-21",
          "official": true,
          "evidence": "conteudo_herdado"
        }
      ]
    },
    {
      "id": "canguru-e-operacoes-divisao",
      "olympiadId": "canguru",
      "areaId": "canguru-numeros",
      "macrotheme": "Aritmética",
      "moduleId": "canguru-numeros-operacoes",
      "moduleTitle": "Numeros Operacoes",
      "title": "Operações com naturais e divisão euclidiana",
      "description": "Estudo de operações com naturais e divisão euclidiana com foco em problemas de raciocínio e aplicações no formato do Canguru.",
      "subtopics": [
        "naturais até quatro algarismos",
        "multiplicação por dois algarismos",
        "dividendo, divisor, quociente e resto"
      ],
      "learningObjectives": [
        "Compreender os conceitos centrais de operações com naturais e divisão euclidiana.",
        "Resolver problemas do Canguru que combinem naturais até quatro algarismos, multiplicação por dois algarismos, dividendo, divisor, quociente e resto.",
        "Explicar a estratégia usada e conferir as restrições do problema."
      ],
      "prerequisites": [
        "Leitura atenta do enunciado",
        "Operações compatíveis com o nível"
      ],
      "theoryOutline": [
        "Conceito e vocabulário: naturais até quatro algarismos",
        "Conceito e vocabulário: multiplicação por dois algarismos",
        "Conceito e vocabulário: dividendo, divisor, quociente e resto"
      ],
      "formulas": [],
      "commonErrors": [
        "Aplicar uma regra sem verificar todas as condições do enunciado.",
        "Contar o mesmo caso mais de uma vez ou ignorar possibilidades.",
        "Aceitar uma resposta sem conferir se ela satisfaz as restrições."
      ],
      "keywords": [
        "Operações com naturais e divisão euclidiana",
        "naturais até quatro algarismos",
        "multiplicação por dois algarismos",
        "dividendo, divisor, quociente e resto"
      ],
      "requiresUpdate": false,
      "reviewFrequencyMonths": null,
      "status": "revisado",
      "sourceTopicIds": [
        "E-01"
      ],
      "adaptations": [
        {
          "levelId": "canguru_e",
          "originProgram": "oficial_nivel_atual",
          "treatment": "novo",
          "importance": "essencial",
          "difficulty": 2,
          "order": 9,
          "theoryMinutes": 60,
          "exerciseMinutes": 90,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 9,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar representações concretas, desenhos e tentativas organizadas.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_b",
          "originProgram": "oficial_herdado",
          "treatment": "aprofundamento",
          "importance": "essencial",
          "difficulty": 3,
          "order": 9,
          "theoryMinutes": 35,
          "exerciseMinutes": 70,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 7,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar representações concretas, desenhos e tentativas organizadas.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_c",
          "originProgram": "oficial_herdado",
          "treatment": "revisao",
          "importance": "importante",
          "difficulty": 2,
          "order": 9,
          "theoryMinutes": 20,
          "exerciseMinutes": 50,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 6,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_j",
          "originProgram": "oficial_herdado",
          "treatment": "revisao",
          "importance": "importante",
          "difficulty": 2,
          "order": 9,
          "theoryMinutes": 20,
          "exerciseMinutes": 50,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 6,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_s",
          "originProgram": "oficial_herdado",
          "treatment": "revisao",
          "importance": "importante",
          "difficulty": 2,
          "order": 9,
          "theoryMinutes": 20,
          "exerciseMinutes": 50,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 6,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        }
      ],
      "sources": [
        {
          "id": "canguru-programa-p1",
          "type": "programa_oficial",
          "title": "Conteúdo Programático do Concurso Canguru",
          "institution": "Canguru de Matemática Brasil / UpMat Educacional",
          "editionYear": null,
          "pageSection": "Página 1",
          "url": "https://e1f593d1-358f-4280-bf47-50136b7f401f.filesusr.com/ugd/7aad12_e4850730edb3462799273e3dcfb75447.pdf",
          "consultedAt": "2026-10-21",
          "official": true,
          "evidence": "mencao_direta"
        }
      ]
    },
    {
      "id": "canguru-e-padroes-codigos",
      "olympiadId": "canguru",
      "areaId": "canguru-algebra",
      "macrotheme": "Padrões e símbolos",
      "moduleId": "canguru-algebra-codigos",
      "moduleTitle": "Algebra Codigos",
      "title": "Padrões, códigos e correspondências",
      "description": "Estudo de padrões, códigos e correspondências com foco em problemas de raciocínio e aplicações no formato do Canguru.",
      "subtopics": [
        "sequências de figuras, números e letras",
        "codificação simples",
        "variáveis e figuras"
      ],
      "learningObjectives": [
        "Compreender os conceitos centrais de padrões, códigos e correspondências.",
        "Resolver problemas do Canguru que combinem sequências de figuras, números e letras, codificação simples, variáveis e figuras.",
        "Explicar a estratégia usada e conferir as restrições do problema."
      ],
      "prerequisites": [
        "Leitura atenta do enunciado",
        "Operações compatíveis com o nível"
      ],
      "theoryOutline": [
        "Conceito e vocabulário: sequências de figuras, números e letras",
        "Conceito e vocabulário: codificação simples",
        "Conceito e vocabulário: variáveis e figuras"
      ],
      "formulas": [],
      "commonErrors": [
        "Aplicar uma regra sem verificar todas as condições do enunciado.",
        "Contar o mesmo caso mais de uma vez ou ignorar possibilidades.",
        "Aceitar uma resposta sem conferir se ela satisfaz as restrições."
      ],
      "keywords": [
        "Padrões, códigos e correspondências",
        "sequências de figuras, números e letras",
        "codificação simples",
        "variáveis e figuras"
      ],
      "requiresUpdate": false,
      "reviewFrequencyMonths": null,
      "status": "revisado",
      "sourceTopicIds": [
        "E-02",
        "E-03",
        "E-04",
        "E-09"
      ],
      "adaptations": [
        {
          "levelId": "canguru_e",
          "originProgram": "oficial_nivel_atual",
          "treatment": "novo",
          "importance": "essencial",
          "difficulty": 2,
          "order": 10,
          "theoryMinutes": 45,
          "exerciseMinutes": 90,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 9,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar representações concretas, desenhos e tentativas organizadas.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_b",
          "originProgram": "oficial_herdado",
          "treatment": "aprofundamento",
          "importance": "essencial",
          "difficulty": 3,
          "order": 10,
          "theoryMinutes": 25,
          "exerciseMinutes": 70,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 7,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar representações concretas, desenhos e tentativas organizadas.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_c",
          "originProgram": "oficial_herdado",
          "treatment": "revisao",
          "importance": "importante",
          "difficulty": 2,
          "order": 10,
          "theoryMinutes": 15,
          "exerciseMinutes": 50,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 6,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_j",
          "originProgram": "oficial_herdado",
          "treatment": "revisao",
          "importance": "importante",
          "difficulty": 2,
          "order": 10,
          "theoryMinutes": 15,
          "exerciseMinutes": 50,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 6,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_s",
          "originProgram": "oficial_herdado",
          "treatment": "revisao",
          "importance": "importante",
          "difficulty": 2,
          "order": 10,
          "theoryMinutes": 15,
          "exerciseMinutes": 50,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 6,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        }
      ],
      "sources": [
        {
          "id": "canguru-programa-p1",
          "type": "programa_oficial",
          "title": "Conteúdo Programático do Concurso Canguru",
          "institution": "Canguru de Matemática Brasil / UpMat Educacional",
          "editionYear": null,
          "pageSection": "Página 1",
          "url": "https://e1f593d1-358f-4280-bf47-50136b7f401f.filesusr.com/ugd/7aad12_e4850730edb3462799273e3dcfb75447.pdf",
          "consultedAt": "2026-10-21",
          "official": true,
          "evidence": "mencao_direta"
        }
      ]
    },
    {
      "id": "canguru-e-igualdades",
      "olympiadId": "canguru",
      "areaId": "canguru-algebra",
      "macrotheme": "Pré-álgebra",
      "moduleId": "canguru-algebra-igualdades",
      "moduleTitle": "Algebra Igualdades",
      "title": "Propriedades das igualdades e pré-álgebra",
      "description": "Estudo de propriedades das igualdades e pré-álgebra com foco em problemas de raciocínio e aplicações no formato do Canguru.",
      "subtopics": [
        "reflexividade",
        "simetria",
        "transitividade",
        "preservação por adição e multiplicação",
        "problemas pré-algébricos"
      ],
      "learningObjectives": [
        "Compreender os conceitos centrais de propriedades das igualdades e pré-álgebra.",
        "Resolver problemas do Canguru que combinem reflexividade, simetria, transitividade.",
        "Explicar a estratégia usada e conferir as restrições do problema."
      ],
      "prerequisites": [
        "Leitura atenta do enunciado",
        "Operações compatíveis com o nível"
      ],
      "theoryOutline": [
        "Conceito e vocabulário: reflexividade",
        "Conceito e vocabulário: simetria",
        "Conceito e vocabulário: transitividade",
        "Conceito e vocabulário: preservação por adição e multiplicação",
        "Conceito e vocabulário: problemas pré-algébricos"
      ],
      "formulas": [],
      "commonErrors": [
        "Aplicar uma regra sem verificar todas as condições do enunciado.",
        "Contar o mesmo caso mais de uma vez ou ignorar possibilidades.",
        "Aceitar uma resposta sem conferir se ela satisfaz as restrições."
      ],
      "keywords": [
        "Propriedades das igualdades e pré-álgebra",
        "reflexividade",
        "simetria",
        "transitividade",
        "preservação por adição e multiplicação"
      ],
      "requiresUpdate": false,
      "reviewFrequencyMonths": null,
      "status": "revisado",
      "sourceTopicIds": [
        "E-04",
        "E-17"
      ],
      "adaptations": [
        {
          "levelId": "canguru_e",
          "originProgram": "oficial_nivel_atual",
          "treatment": "novo",
          "importance": "essencial",
          "difficulty": 2,
          "order": 11,
          "theoryMinutes": 45,
          "exerciseMinutes": 90,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 9,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar representações concretas, desenhos e tentativas organizadas.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_b",
          "originProgram": "oficial_herdado",
          "treatment": "aprofundamento",
          "importance": "essencial",
          "difficulty": 3,
          "order": 11,
          "theoryMinutes": 25,
          "exerciseMinutes": 70,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 7,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar representações concretas, desenhos e tentativas organizadas.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_c",
          "originProgram": "oficial_herdado",
          "treatment": "revisao",
          "importance": "importante",
          "difficulty": 2,
          "order": 11,
          "theoryMinutes": 15,
          "exerciseMinutes": 50,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 6,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_j",
          "originProgram": "oficial_herdado",
          "treatment": "revisao",
          "importance": "importante",
          "difficulty": 2,
          "order": 11,
          "theoryMinutes": 15,
          "exerciseMinutes": 50,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 6,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_s",
          "originProgram": "oficial_herdado",
          "treatment": "revisao",
          "importance": "importante",
          "difficulty": 2,
          "order": 11,
          "theoryMinutes": 15,
          "exerciseMinutes": 50,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 6,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        }
      ],
      "sources": [
        {
          "id": "canguru-programa-p1",
          "type": "programa_oficial",
          "title": "Conteúdo Programático do Concurso Canguru",
          "institution": "Canguru de Matemática Brasil / UpMat Educacional",
          "editionYear": null,
          "pageSection": "Página 1",
          "url": "https://e1f593d1-358f-4280-bf47-50136b7f401f.filesusr.com/ugd/7aad12_e4850730edb3462799273e3dcfb75447.pdf",
          "consultedAt": "2026-10-21",
          "official": true,
          "evidence": "mencao_direta"
        }
      ]
    },
    {
      "id": "canguru-e-conjuntos-contagem",
      "olympiadId": "canguru",
      "areaId": "canguru-combinatoria",
      "macrotheme": "Conjuntos e contagem",
      "moduleId": "canguru-combinatoria-principios",
      "moduleTitle": "Combinatoria Principios",
      "title": "União, interseção e princípios de contagem",
      "description": "Estudo de união, interseção e princípios de contagem com foco em problemas de raciocínio e aplicações no formato do Canguru.",
      "subtopics": [
        "união e interseção",
        "contagem de números e figuras",
        "listagem organizada",
        "princípios aditivo e multiplicativo"
      ],
      "learningObjectives": [
        "Compreender os conceitos centrais de união, interseção e princípios de contagem.",
        "Resolver problemas do Canguru que combinem união e interseção, contagem de números e figuras, listagem organizada.",
        "Explicar a estratégia usada e conferir as restrições do problema."
      ],
      "prerequisites": [
        "Leitura atenta do enunciado",
        "Operações compatíveis com o nível"
      ],
      "theoryOutline": [
        "Conceito e vocabulário: união e interseção",
        "Conceito e vocabulário: contagem de números e figuras",
        "Conceito e vocabulário: listagem organizada",
        "Conceito e vocabulário: princípios aditivo e multiplicativo"
      ],
      "formulas": [],
      "commonErrors": [
        "Aplicar uma regra sem verificar todas as condições do enunciado.",
        "Contar o mesmo caso mais de uma vez ou ignorar possibilidades.",
        "Aceitar uma resposta sem conferir se ela satisfaz as restrições."
      ],
      "keywords": [
        "União, interseção e princípios de contagem",
        "união e interseção",
        "contagem de números e figuras",
        "listagem organizada",
        "princípios aditivo e multiplicativo"
      ],
      "requiresUpdate": false,
      "reviewFrequencyMonths": null,
      "status": "revisado",
      "sourceTopicIds": [
        "E-08",
        "E-10",
        "E-11"
      ],
      "adaptations": [
        {
          "levelId": "canguru_e",
          "originProgram": "oficial_nivel_atual",
          "treatment": "novo",
          "importance": "essencial",
          "difficulty": 2,
          "order": 12,
          "theoryMinutes": 45,
          "exerciseMinutes": 90,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 9,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar representações concretas, desenhos e tentativas organizadas.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_b",
          "originProgram": "oficial_herdado",
          "treatment": "aprofundamento",
          "importance": "essencial",
          "difficulty": 3,
          "order": 12,
          "theoryMinutes": 25,
          "exerciseMinutes": 70,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 7,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar representações concretas, desenhos e tentativas organizadas.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_c",
          "originProgram": "oficial_herdado",
          "treatment": "revisao",
          "importance": "importante",
          "difficulty": 2,
          "order": 12,
          "theoryMinutes": 15,
          "exerciseMinutes": 50,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 6,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_j",
          "originProgram": "oficial_herdado",
          "treatment": "revisao",
          "importance": "importante",
          "difficulty": 2,
          "order": 12,
          "theoryMinutes": 15,
          "exerciseMinutes": 50,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 6,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_s",
          "originProgram": "oficial_herdado",
          "treatment": "revisao",
          "importance": "importante",
          "difficulty": 2,
          "order": 12,
          "theoryMinutes": 15,
          "exerciseMinutes": 50,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 6,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        }
      ],
      "sources": [
        {
          "id": "canguru-programa-p1",
          "type": "programa_oficial",
          "title": "Conteúdo Programático do Concurso Canguru",
          "institution": "Canguru de Matemática Brasil / UpMat Educacional",
          "editionYear": null,
          "pageSection": "Página 1",
          "url": "https://e1f593d1-358f-4280-bf47-50136b7f401f.filesusr.com/ugd/7aad12_e4850730edb3462799273e3dcfb75447.pdf",
          "consultedAt": "2026-10-21",
          "official": true,
          "evidence": "mencao_direta"
        }
      ]
    },
    {
      "id": "canguru-e-poligonos-transformacoes",
      "olympiadId": "canguru",
      "areaId": "canguru-geometria",
      "macrotheme": "Figuras e transformações",
      "moduleId": "canguru-geometria-poligonos",
      "moduleTitle": "Geometria Poligonos",
      "title": "Polígonos, transformações e invariância",
      "description": "Estudo de polígonos, transformações e invariância com foco em problemas de raciocínio e aplicações no formato do Canguru.",
      "subtopics": [
        "triângulos, quadriláteros e hexágonos",
        "translação, reflexão e rotação",
        "elementos invariantes"
      ],
      "learningObjectives": [
        "Compreender os conceitos centrais de polígonos, transformações e invariância.",
        "Resolver problemas do Canguru que combinem triângulos, quadriláteros e hexágonos, translação, reflexão e rotação, elementos invariantes.",
        "Explicar a estratégia usada e conferir as restrições do problema."
      ],
      "prerequisites": [
        "Leitura atenta do enunciado",
        "Operações compatíveis com o nível"
      ],
      "theoryOutline": [
        "Conceito e vocabulário: triângulos, quadriláteros e hexágonos",
        "Conceito e vocabulário: translação, reflexão e rotação",
        "Conceito e vocabulário: elementos invariantes"
      ],
      "formulas": [],
      "commonErrors": [
        "Aplicar uma regra sem verificar todas as condições do enunciado.",
        "Contar o mesmo caso mais de uma vez ou ignorar possibilidades.",
        "Aceitar uma resposta sem conferir se ela satisfaz as restrições."
      ],
      "keywords": [
        "Polígonos, transformações e invariância",
        "triângulos, quadriláteros e hexágonos",
        "translação, reflexão e rotação",
        "elementos invariantes"
      ],
      "requiresUpdate": false,
      "reviewFrequencyMonths": null,
      "status": "revisado",
      "sourceTopicIds": [
        "E-05",
        "E-06",
        "E-07"
      ],
      "adaptations": [
        {
          "levelId": "canguru_e",
          "originProgram": "oficial_nivel_atual",
          "treatment": "novo",
          "importance": "essencial",
          "difficulty": 2,
          "order": 13,
          "theoryMinutes": 60,
          "exerciseMinutes": 90,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 9,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar representações concretas, desenhos e tentativas organizadas.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_b",
          "originProgram": "oficial_herdado",
          "treatment": "aprofundamento",
          "importance": "essencial",
          "difficulty": 3,
          "order": 13,
          "theoryMinutes": 35,
          "exerciseMinutes": 70,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 7,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar representações concretas, desenhos e tentativas organizadas.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_c",
          "originProgram": "oficial_herdado",
          "treatment": "revisao",
          "importance": "importante",
          "difficulty": 2,
          "order": 13,
          "theoryMinutes": 20,
          "exerciseMinutes": 50,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 6,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_j",
          "originProgram": "oficial_herdado",
          "treatment": "revisao",
          "importance": "importante",
          "difficulty": 2,
          "order": 13,
          "theoryMinutes": 20,
          "exerciseMinutes": 50,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 6,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_s",
          "originProgram": "oficial_herdado",
          "treatment": "revisao",
          "importance": "importante",
          "difficulty": 2,
          "order": 13,
          "theoryMinutes": 20,
          "exerciseMinutes": 50,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 6,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        }
      ],
      "sources": [
        {
          "id": "canguru-programa-p1",
          "type": "programa_oficial",
          "title": "Conteúdo Programático do Concurso Canguru",
          "institution": "Canguru de Matemática Brasil / UpMat Educacional",
          "editionYear": null,
          "pageSection": "Página 1",
          "url": "https://e1f593d1-358f-4280-bf47-50136b7f401f.filesusr.com/ugd/7aad12_e4850730edb3462799273e3dcfb75447.pdf",
          "consultedAt": "2026-10-21",
          "official": true,
          "evidence": "mencao_direta"
        }
      ]
    },
    {
      "id": "canguru-e-perimetro-area-composicao",
      "olympiadId": "canguru",
      "areaId": "canguru-geometria",
      "macrotheme": "Medidas e composição",
      "moduleId": "canguru-geometria-area",
      "moduleTitle": "Geometria Area",
      "title": "Perímetros, áreas e decomposição de figuras",
      "description": "Estudo de perímetros, áreas e decomposição de figuras com foco em problemas de raciocínio e aplicações no formato do Canguru.",
      "subtopics": [
        "perímetro",
        "área de quadrados e retângulos",
        "composição e decomposição plana e espacial"
      ],
      "learningObjectives": [
        "Compreender os conceitos centrais de perímetros, áreas e decomposição de figuras.",
        "Resolver problemas do Canguru que combinem perímetro, área de quadrados e retângulos, composição e decomposição plana e espacial.",
        "Explicar a estratégia usada e conferir as restrições do problema."
      ],
      "prerequisites": [
        "Leitura atenta do enunciado",
        "Operações compatíveis com o nível"
      ],
      "theoryOutline": [
        "Conceito e vocabulário: perímetro",
        "Conceito e vocabulário: área de quadrados e retângulos",
        "Conceito e vocabulário: composição e decomposição plana e espacial"
      ],
      "formulas": [],
      "commonErrors": [
        "Aplicar uma regra sem verificar todas as condições do enunciado.",
        "Contar o mesmo caso mais de uma vez ou ignorar possibilidades.",
        "Aceitar uma resposta sem conferir se ela satisfaz as restrições."
      ],
      "keywords": [
        "Perímetros, áreas e decomposição de figuras",
        "perímetro",
        "área de quadrados e retângulos",
        "composição e decomposição plana e espacial"
      ],
      "requiresUpdate": false,
      "reviewFrequencyMonths": null,
      "status": "revisado",
      "sourceTopicIds": [
        "E-12",
        "E-13"
      ],
      "adaptations": [
        {
          "levelId": "canguru_e",
          "originProgram": "oficial_nivel_atual",
          "treatment": "novo",
          "importance": "essencial",
          "difficulty": 2,
          "order": 14,
          "theoryMinutes": 60,
          "exerciseMinutes": 90,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 9,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar representações concretas, desenhos e tentativas organizadas.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_b",
          "originProgram": "oficial_herdado",
          "treatment": "aprofundamento",
          "importance": "essencial",
          "difficulty": 3,
          "order": 14,
          "theoryMinutes": 35,
          "exerciseMinutes": 70,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 7,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar representações concretas, desenhos e tentativas organizadas.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_c",
          "originProgram": "oficial_herdado",
          "treatment": "revisao",
          "importance": "importante",
          "difficulty": 2,
          "order": 14,
          "theoryMinutes": 20,
          "exerciseMinutes": 50,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 6,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_j",
          "originProgram": "oficial_herdado",
          "treatment": "revisao",
          "importance": "importante",
          "difficulty": 2,
          "order": 14,
          "theoryMinutes": 20,
          "exerciseMinutes": 50,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 6,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_s",
          "originProgram": "oficial_herdado",
          "treatment": "revisao",
          "importance": "importante",
          "difficulty": 2,
          "order": 14,
          "theoryMinutes": 20,
          "exerciseMinutes": 50,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 6,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        }
      ],
      "sources": [
        {
          "id": "canguru-programa-p2",
          "type": "programa_oficial",
          "title": "Conteúdo Programático do Concurso Canguru",
          "institution": "Canguru de Matemática Brasil / UpMat Educacional",
          "editionYear": null,
          "pageSection": "Página 2",
          "url": "https://e1f593d1-358f-4280-bf47-50136b7f401f.filesusr.com/ugd/7aad12_e4850730edb3462799273e3dcfb75447.pdf",
          "consultedAt": "2026-10-21",
          "official": true,
          "evidence": "mencao_direta"
        }
      ]
    },
    {
      "id": "canguru-e-logica-quadriculados",
      "olympiadId": "canguru",
      "areaId": "canguru-logica",
      "macrotheme": "Lógica aplicada",
      "moduleId": "canguru-logica-verbal",
      "moduleTitle": "Logica Verbal",
      "title": "Implicação, negação e problemas em quadriculados",
      "description": "Estudo de implicação, negação e problemas em quadriculados com foco em problemas de raciocínio e aplicações no formato do Canguru.",
      "subtopics": [
        "implicação e negação",
        "problemas numéricos ou geométricos em quadriculados",
        "problemas com relógios"
      ],
      "learningObjectives": [
        "Compreender os conceitos centrais de implicação, negação e problemas em quadriculados.",
        "Resolver problemas do Canguru que combinem implicação e negação, problemas numéricos ou geométricos em quadriculados, problemas com relógios.",
        "Explicar a estratégia usada e conferir as restrições do problema."
      ],
      "prerequisites": [
        "Leitura atenta do enunciado",
        "Operações compatíveis com o nível"
      ],
      "theoryOutline": [
        "Conceito e vocabulário: implicação e negação",
        "Conceito e vocabulário: problemas numéricos ou geométricos em quadriculados",
        "Conceito e vocabulário: problemas com relógios"
      ],
      "formulas": [],
      "commonErrors": [
        "Aplicar uma regra sem verificar todas as condições do enunciado.",
        "Contar o mesmo caso mais de uma vez ou ignorar possibilidades.",
        "Aceitar uma resposta sem conferir se ela satisfaz as restrições."
      ],
      "keywords": [
        "Implicação, negação e problemas em quadriculados",
        "implicação e negação",
        "problemas numéricos ou geométricos em quadriculados",
        "problemas com relógios"
      ],
      "requiresUpdate": false,
      "reviewFrequencyMonths": null,
      "status": "revisado",
      "sourceTopicIds": [
        "E-14",
        "E-15",
        "E-16"
      ],
      "adaptations": [
        {
          "levelId": "canguru_e",
          "originProgram": "oficial_nivel_atual",
          "treatment": "novo",
          "importance": "essencial",
          "difficulty": 3,
          "order": 15,
          "theoryMinutes": 45,
          "exerciseMinutes": 90,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 9,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar representações concretas, desenhos e tentativas organizadas.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_b",
          "originProgram": "oficial_herdado",
          "treatment": "aprofundamento",
          "importance": "essencial",
          "difficulty": 4,
          "order": 15,
          "theoryMinutes": 25,
          "exerciseMinutes": 70,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 7,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar representações concretas, desenhos e tentativas organizadas.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_c",
          "originProgram": "oficial_herdado",
          "treatment": "revisao",
          "importance": "importante",
          "difficulty": 3,
          "order": 15,
          "theoryMinutes": 15,
          "exerciseMinutes": 50,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 6,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_j",
          "originProgram": "oficial_herdado",
          "treatment": "revisao",
          "importance": "importante",
          "difficulty": 3,
          "order": 15,
          "theoryMinutes": 15,
          "exerciseMinutes": 50,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 6,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_s",
          "originProgram": "oficial_herdado",
          "treatment": "revisao",
          "importance": "importante",
          "difficulty": 3,
          "order": 15,
          "theoryMinutes": 15,
          "exerciseMinutes": 50,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 6,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        }
      ],
      "sources": [
        {
          "id": "canguru-programa-p2",
          "type": "programa_oficial",
          "title": "Conteúdo Programático do Concurso Canguru",
          "institution": "Canguru de Matemática Brasil / UpMat Educacional",
          "editionYear": null,
          "pageSection": "Página 2",
          "url": "https://e1f593d1-358f-4280-bf47-50136b7f401f.filesusr.com/ugd/7aad12_e4850730edb3462799273e3dcfb75447.pdf",
          "consultedAt": "2026-10-21",
          "official": true,
          "evidence": "mencao_direta"
        }
      ]
    },
    {
      "id": "canguru-e-extremos-equilibrio",
      "olympiadId": "canguru",
      "areaId": "canguru-logica",
      "macrotheme": "Estratégias elementares",
      "moduleId": "canguru-logica-extremos",
      "moduleTitle": "Logica Extremos",
      "title": "Máximos, mínimos e equilíbrio",
      "description": "Estudo de máximos, mínimos e equilíbrio com foco em problemas de raciocínio e aplicações no formato do Canguru.",
      "subtopics": [
        "máximos e mínimos elementares",
        "balanças",
        "móbiles",
        "relações de equilíbrio"
      ],
      "learningObjectives": [
        "Compreender os conceitos centrais de máximos, mínimos e equilíbrio.",
        "Resolver problemas do Canguru que combinem máximos e mínimos elementares, balanças, móbiles.",
        "Explicar a estratégia usada e conferir as restrições do problema."
      ],
      "prerequisites": [
        "Leitura atenta do enunciado",
        "Operações compatíveis com o nível"
      ],
      "theoryOutline": [
        "Conceito e vocabulário: máximos e mínimos elementares",
        "Conceito e vocabulário: balanças",
        "Conceito e vocabulário: móbiles",
        "Conceito e vocabulário: relações de equilíbrio"
      ],
      "formulas": [],
      "commonErrors": [
        "Aplicar uma regra sem verificar todas as condições do enunciado.",
        "Contar o mesmo caso mais de uma vez ou ignorar possibilidades.",
        "Aceitar uma resposta sem conferir se ela satisfaz as restrições."
      ],
      "keywords": [
        "Máximos, mínimos e equilíbrio",
        "máximos e mínimos elementares",
        "balanças",
        "móbiles",
        "relações de equilíbrio"
      ],
      "requiresUpdate": false,
      "reviewFrequencyMonths": null,
      "status": "revisado",
      "sourceTopicIds": [
        "E-18",
        "E-19"
      ],
      "adaptations": [
        {
          "levelId": "canguru_e",
          "originProgram": "oficial_nivel_atual",
          "treatment": "novo",
          "importance": "essencial",
          "difficulty": 3,
          "order": 16,
          "theoryMinutes": 45,
          "exerciseMinutes": 90,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 9,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar representações concretas, desenhos e tentativas organizadas.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_b",
          "originProgram": "oficial_herdado",
          "treatment": "aprofundamento",
          "importance": "essencial",
          "difficulty": 4,
          "order": 16,
          "theoryMinutes": 25,
          "exerciseMinutes": 70,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 7,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar representações concretas, desenhos e tentativas organizadas.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_c",
          "originProgram": "oficial_herdado",
          "treatment": "revisao",
          "importance": "importante",
          "difficulty": 3,
          "order": 16,
          "theoryMinutes": 15,
          "exerciseMinutes": 50,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 6,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_j",
          "originProgram": "oficial_herdado",
          "treatment": "revisao",
          "importance": "importante",
          "difficulty": 3,
          "order": 16,
          "theoryMinutes": 15,
          "exerciseMinutes": 50,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 6,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_s",
          "originProgram": "oficial_herdado",
          "treatment": "revisao",
          "importance": "importante",
          "difficulty": 3,
          "order": 16,
          "theoryMinutes": 15,
          "exerciseMinutes": 50,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 6,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        }
      ],
      "sources": [
        {
          "id": "canguru-programa-p2",
          "type": "programa_oficial",
          "title": "Conteúdo Programático do Concurso Canguru",
          "institution": "Canguru de Matemática Brasil / UpMat Educacional",
          "editionYear": null,
          "pageSection": "Página 2",
          "url": "https://e1f593d1-358f-4280-bf47-50136b7f401f.filesusr.com/ugd/7aad12_e4850730edb3462799273e3dcfb75447.pdf",
          "consultedAt": "2026-10-21",
          "official": true,
          "evidence": "mencao_direta"
        }
      ]
    },
    {
      "id": "canguru-b-inteiros-racionais",
      "olympiadId": "canguru",
      "areaId": "canguru-numeros",
      "macrotheme": "Números com sinal",
      "moduleId": "canguru-numeros-inteiros",
      "moduleTitle": "Numeros Inteiros",
      "title": "Inteiros, racionais e reta numérica",
      "description": "Estudo de inteiros, racionais e reta numérica com foco em problemas de raciocínio e aplicações no formato do Canguru.",
      "subtopics": [
        "regras de sinais",
        "inteiros na reta",
        "racionais na reta",
        "frações e divisão"
      ],
      "learningObjectives": [
        "Compreender os conceitos centrais de inteiros, racionais e reta numérica.",
        "Resolver problemas do Canguru que combinem regras de sinais, inteiros na reta, racionais na reta.",
        "Explicar a estratégia usada e conferir as restrições do problema."
      ],
      "prerequisites": [
        "Operações com naturais",
        "Frações básicas"
      ],
      "theoryOutline": [
        "Conceito e vocabulário: regras de sinais",
        "Conceito e vocabulário: inteiros na reta",
        "Conceito e vocabulário: racionais na reta",
        "Conceito e vocabulário: frações e divisão"
      ],
      "formulas": [],
      "commonErrors": [
        "Aplicar uma regra sem verificar todas as condições do enunciado.",
        "Contar o mesmo caso mais de uma vez ou ignorar possibilidades.",
        "Aceitar uma resposta sem conferir se ela satisfaz as restrições."
      ],
      "keywords": [
        "Inteiros, racionais e reta numérica",
        "regras de sinais",
        "inteiros na reta",
        "racionais na reta",
        "frações e divisão"
      ],
      "requiresUpdate": false,
      "reviewFrequencyMonths": null,
      "status": "revisado",
      "sourceTopicIds": [
        "B-01",
        "B-02",
        "B-05",
        "B-13"
      ],
      "adaptations": [
        {
          "levelId": "canguru_b",
          "originProgram": "oficial_nivel_atual",
          "treatment": "novo",
          "importance": "essencial",
          "difficulty": 3,
          "order": 17,
          "theoryMinutes": 60,
          "exerciseMinutes": 90,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 9,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar representações concretas, desenhos e tentativas organizadas.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_c",
          "originProgram": "oficial_herdado",
          "treatment": "aprofundamento",
          "importance": "essencial",
          "difficulty": 4,
          "order": 17,
          "theoryMinutes": 35,
          "exerciseMinutes": 70,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 7,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_j",
          "originProgram": "oficial_herdado",
          "treatment": "revisao",
          "importance": "importante",
          "difficulty": 3,
          "order": 17,
          "theoryMinutes": 20,
          "exerciseMinutes": 50,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 6,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_s",
          "originProgram": "oficial_herdado",
          "treatment": "revisao",
          "importance": "importante",
          "difficulty": 3,
          "order": 17,
          "theoryMinutes": 20,
          "exerciseMinutes": 50,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 6,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        }
      ],
      "sources": [
        {
          "id": "canguru-programa-p2",
          "type": "programa_oficial",
          "title": "Conteúdo Programático do Concurso Canguru",
          "institution": "Canguru de Matemática Brasil / UpMat Educacional",
          "editionYear": null,
          "pageSection": "Página 2",
          "url": "https://e1f593d1-358f-4280-bf47-50136b7f401f.filesusr.com/ugd/7aad12_e4850730edb3462799273e3dcfb75447.pdf",
          "consultedAt": "2026-10-21",
          "official": true,
          "evidence": "mencao_direta"
        }
      ]
    },
    {
      "id": "canguru-b-divisibilidade",
      "olympiadId": "canguru",
      "areaId": "canguru-numeros",
      "macrotheme": "Divisibilidade",
      "moduleId": "canguru-numeros-divisao",
      "moduleTitle": "Numeros Divisao",
      "title": "Divisão euclidiana e divisibilidade",
      "description": "Estudo de divisão euclidiana e divisibilidade com foco em problemas de raciocínio e aplicações no formato do Canguru.",
      "subtopics": [
        "divisores positivos",
        "quociente e resto",
        "critérios e propriedades de divisibilidade"
      ],
      "learningObjectives": [
        "Compreender os conceitos centrais de divisão euclidiana e divisibilidade.",
        "Resolver problemas do Canguru que combinem divisores positivos, quociente e resto, critérios e propriedades de divisibilidade.",
        "Explicar a estratégia usada e conferir as restrições do problema."
      ],
      "prerequisites": [
        "Leitura atenta do enunciado",
        "Operações compatíveis com o nível"
      ],
      "theoryOutline": [
        "Conceito e vocabulário: divisores positivos",
        "Conceito e vocabulário: quociente e resto",
        "Conceito e vocabulário: critérios e propriedades de divisibilidade"
      ],
      "formulas": [],
      "commonErrors": [
        "Aplicar uma regra sem verificar todas as condições do enunciado.",
        "Contar o mesmo caso mais de uma vez ou ignorar possibilidades.",
        "Aceitar uma resposta sem conferir se ela satisfaz as restrições."
      ],
      "keywords": [
        "Divisão euclidiana e divisibilidade",
        "divisores positivos",
        "quociente e resto",
        "critérios e propriedades de divisibilidade"
      ],
      "requiresUpdate": false,
      "reviewFrequencyMonths": null,
      "status": "revisado",
      "sourceTopicIds": [
        "B-03"
      ],
      "adaptations": [
        {
          "levelId": "canguru_b",
          "originProgram": "oficial_nivel_atual",
          "treatment": "novo",
          "importance": "essencial",
          "difficulty": 3,
          "order": 18,
          "theoryMinutes": 60,
          "exerciseMinutes": 90,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 9,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar representações concretas, desenhos e tentativas organizadas.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_c",
          "originProgram": "oficial_herdado",
          "treatment": "aprofundamento",
          "importance": "essencial",
          "difficulty": 4,
          "order": 18,
          "theoryMinutes": 35,
          "exerciseMinutes": 70,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 7,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_j",
          "originProgram": "oficial_herdado",
          "treatment": "revisao",
          "importance": "importante",
          "difficulty": 3,
          "order": 18,
          "theoryMinutes": 20,
          "exerciseMinutes": 50,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 6,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_s",
          "originProgram": "oficial_herdado",
          "treatment": "revisao",
          "importance": "importante",
          "difficulty": 3,
          "order": 18,
          "theoryMinutes": 20,
          "exerciseMinutes": 50,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 6,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        }
      ],
      "sources": [
        {
          "id": "canguru-programa-p2",
          "type": "programa_oficial",
          "title": "Conteúdo Programático do Concurso Canguru",
          "institution": "Canguru de Matemática Brasil / UpMat Educacional",
          "editionYear": null,
          "pageSection": "Página 2",
          "url": "https://e1f593d1-358f-4280-bf47-50136b7f401f.filesusr.com/ugd/7aad12_e4850730edb3462799273e3dcfb75447.pdf",
          "consultedAt": "2026-10-21",
          "official": true,
          "evidence": "mencao_direta"
        }
      ]
    },
    {
      "id": "canguru-b-porcentagem-expressoes",
      "olympiadId": "canguru",
      "areaId": "canguru-numeros",
      "macrotheme": "Aritmética algébrica",
      "moduleId": "canguru-numeros-expressoes",
      "moduleTitle": "Numeros Expressoes",
      "title": "Porcentagens, expressões e potenciação",
      "description": "Estudo de porcentagens, expressões e potenciação com foco em problemas de raciocínio e aplicações no formato do Canguru.",
      "subtopics": [
        "porcentagens",
        "expressões aritméticas",
        "ordem das operações",
        "potenciação"
      ],
      "learningObjectives": [
        "Compreender os conceitos centrais de porcentagens, expressões e potenciação.",
        "Resolver problemas do Canguru que combinem porcentagens, expressões aritméticas, ordem das operações.",
        "Explicar a estratégia usada e conferir as restrições do problema."
      ],
      "prerequisites": [
        "Leitura atenta do enunciado",
        "Operações compatíveis com o nível"
      ],
      "theoryOutline": [
        "Conceito e vocabulário: porcentagens",
        "Conceito e vocabulário: expressões aritméticas",
        "Conceito e vocabulário: ordem das operações",
        "Conceito e vocabulário: potenciação"
      ],
      "formulas": [],
      "commonErrors": [
        "Aplicar uma regra sem verificar todas as condições do enunciado.",
        "Contar o mesmo caso mais de uma vez ou ignorar possibilidades.",
        "Aceitar uma resposta sem conferir se ela satisfaz as restrições."
      ],
      "keywords": [
        "Porcentagens, expressões e potenciação",
        "porcentagens",
        "expressões aritméticas",
        "ordem das operações",
        "potenciação"
      ],
      "requiresUpdate": false,
      "reviewFrequencyMonths": null,
      "status": "revisado",
      "sourceTopicIds": [
        "B-06",
        "B-08"
      ],
      "adaptations": [
        {
          "levelId": "canguru_b",
          "originProgram": "oficial_nivel_atual",
          "treatment": "novo",
          "importance": "essencial",
          "difficulty": 3,
          "order": 19,
          "theoryMinutes": 60,
          "exerciseMinutes": 90,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 9,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar representações concretas, desenhos e tentativas organizadas.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_c",
          "originProgram": "oficial_herdado",
          "treatment": "aprofundamento",
          "importance": "essencial",
          "difficulty": 4,
          "order": 19,
          "theoryMinutes": 35,
          "exerciseMinutes": 70,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 7,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_j",
          "originProgram": "oficial_herdado",
          "treatment": "revisao",
          "importance": "importante",
          "difficulty": 3,
          "order": 19,
          "theoryMinutes": 20,
          "exerciseMinutes": 50,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 6,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_s",
          "originProgram": "oficial_herdado",
          "treatment": "revisao",
          "importance": "importante",
          "difficulty": 3,
          "order": 19,
          "theoryMinutes": 20,
          "exerciseMinutes": 50,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 6,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        }
      ],
      "sources": [
        {
          "id": "canguru-programa-p2",
          "type": "programa_oficial",
          "title": "Conteúdo Programático do Concurso Canguru",
          "institution": "Canguru de Matemática Brasil / UpMat Educacional",
          "editionYear": null,
          "pageSection": "Página 2",
          "url": "https://e1f593d1-358f-4280-bf47-50136b7f401f.filesusr.com/ugd/7aad12_e4850730edb3462799273e3dcfb75447.pdf",
          "consultedAt": "2026-10-21",
          "official": true,
          "evidence": "mencao_direta"
        }
      ]
    },
    {
      "id": "canguru-b-sequencias-recorrencia",
      "olympiadId": "canguru",
      "areaId": "canguru-algebra",
      "macrotheme": "Sequências",
      "moduleId": "canguru-algebra-sequencias",
      "moduleTitle": "Algebra Sequencias",
      "title": "Sequências, fórmulas e recorrências",
      "description": "Estudo de sequências, fórmulas e recorrências com foco em problemas de raciocínio e aplicações no formato do Canguru.",
      "subtopics": [
        "sequências complexas",
        "regras por fórmulas",
        "termos dependentes dos anteriores"
      ],
      "learningObjectives": [
        "Compreender os conceitos centrais de sequências, fórmulas e recorrências.",
        "Resolver problemas do Canguru que combinem sequências complexas, regras por fórmulas, termos dependentes dos anteriores.",
        "Explicar a estratégia usada e conferir as restrições do problema."
      ],
      "prerequisites": [
        "Leitura atenta do enunciado",
        "Operações compatíveis com o nível"
      ],
      "theoryOutline": [
        "Conceito e vocabulário: sequências complexas",
        "Conceito e vocabulário: regras por fórmulas",
        "Conceito e vocabulário: termos dependentes dos anteriores"
      ],
      "formulas": [],
      "commonErrors": [
        "Aplicar uma regra sem verificar todas as condições do enunciado.",
        "Contar o mesmo caso mais de uma vez ou ignorar possibilidades.",
        "Aceitar uma resposta sem conferir se ela satisfaz as restrições."
      ],
      "keywords": [
        "Sequências, fórmulas e recorrências",
        "sequências complexas",
        "regras por fórmulas",
        "termos dependentes dos anteriores"
      ],
      "requiresUpdate": false,
      "reviewFrequencyMonths": null,
      "status": "revisado",
      "sourceTopicIds": [
        "B-07"
      ],
      "adaptations": [
        {
          "levelId": "canguru_b",
          "originProgram": "oficial_nivel_atual",
          "treatment": "novo",
          "importance": "essencial",
          "difficulty": 3,
          "order": 20,
          "theoryMinutes": 60,
          "exerciseMinutes": 90,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 9,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar representações concretas, desenhos e tentativas organizadas.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_c",
          "originProgram": "oficial_herdado",
          "treatment": "aprofundamento",
          "importance": "essencial",
          "difficulty": 4,
          "order": 20,
          "theoryMinutes": 35,
          "exerciseMinutes": 70,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 7,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_j",
          "originProgram": "oficial_herdado",
          "treatment": "revisao",
          "importance": "importante",
          "difficulty": 3,
          "order": 20,
          "theoryMinutes": 20,
          "exerciseMinutes": 50,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 6,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_s",
          "originProgram": "oficial_herdado",
          "treatment": "revisao",
          "importance": "importante",
          "difficulty": 3,
          "order": 20,
          "theoryMinutes": 20,
          "exerciseMinutes": 50,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 6,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        }
      ],
      "sources": [
        {
          "id": "canguru-programa-p2",
          "type": "programa_oficial",
          "title": "Conteúdo Programático do Concurso Canguru",
          "institution": "Canguru de Matemática Brasil / UpMat Educacional",
          "editionYear": null,
          "pageSection": "Página 2",
          "url": "https://e1f593d1-358f-4280-bf47-50136b7f401f.filesusr.com/ugd/7aad12_e4850730edb3462799273e3dcfb75447.pdf",
          "consultedAt": "2026-10-21",
          "official": true,
          "evidence": "mencao_direta"
        }
      ]
    },
    {
      "id": "canguru-b-geometria-angulos",
      "olympiadId": "canguru",
      "areaId": "canguru-geometria",
      "macrotheme": "Geometria plana",
      "moduleId": "canguru-geometria-angulos",
      "moduleTitle": "Geometria Angulos",
      "title": "Ângulos em triângulos e relações geométricas",
      "description": "Estudo de ângulos em triângulos e relações geométricas com foco em problemas de raciocínio e aplicações no formato do Canguru.",
      "subtopics": [
        "ângulos em triângulos",
        "relações entre elementos de figuras planas"
      ],
      "learningObjectives": [
        "Compreender os conceitos centrais de ângulos em triângulos e relações geométricas.",
        "Resolver problemas do Canguru que combinem ângulos em triângulos, relações entre elementos de figuras planas.",
        "Explicar a estratégia usada e conferir as restrições do problema."
      ],
      "prerequisites": [
        "Leitura atenta do enunciado",
        "Operações compatíveis com o nível"
      ],
      "theoryOutline": [
        "Conceito e vocabulário: ângulos em triângulos",
        "Conceito e vocabulário: relações entre elementos de figuras planas"
      ],
      "formulas": [],
      "commonErrors": [
        "Aplicar uma regra sem verificar todas as condições do enunciado.",
        "Contar o mesmo caso mais de uma vez ou ignorar possibilidades.",
        "Aceitar uma resposta sem conferir se ela satisfaz as restrições."
      ],
      "keywords": [
        "Ângulos em triângulos e relações geométricas",
        "ângulos em triângulos",
        "relações entre elementos de figuras planas"
      ],
      "requiresUpdate": false,
      "reviewFrequencyMonths": null,
      "status": "revisado",
      "sourceTopicIds": [
        "B-09"
      ],
      "adaptations": [
        {
          "levelId": "canguru_b",
          "originProgram": "oficial_nivel_atual",
          "treatment": "novo",
          "importance": "essencial",
          "difficulty": 3,
          "order": 21,
          "theoryMinutes": 60,
          "exerciseMinutes": 90,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 9,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar representações concretas, desenhos e tentativas organizadas.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_c",
          "originProgram": "oficial_herdado",
          "treatment": "aprofundamento",
          "importance": "essencial",
          "difficulty": 4,
          "order": 21,
          "theoryMinutes": 35,
          "exerciseMinutes": 70,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 7,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_j",
          "originProgram": "oficial_herdado",
          "treatment": "revisao",
          "importance": "importante",
          "difficulty": 3,
          "order": 21,
          "theoryMinutes": 20,
          "exerciseMinutes": 50,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 6,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_s",
          "originProgram": "oficial_herdado",
          "treatment": "revisao",
          "importance": "importante",
          "difficulty": 3,
          "order": 21,
          "theoryMinutes": 20,
          "exerciseMinutes": 50,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 6,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        }
      ],
      "sources": [
        {
          "id": "canguru-programa-p2",
          "type": "programa_oficial",
          "title": "Conteúdo Programático do Concurso Canguru",
          "institution": "Canguru de Matemática Brasil / UpMat Educacional",
          "editionYear": null,
          "pageSection": "Página 2",
          "url": "https://e1f593d1-358f-4280-bf47-50136b7f401f.filesusr.com/ugd/7aad12_e4850730edb3462799273e3dcfb75447.pdf",
          "consultedAt": "2026-10-21",
          "official": true,
          "evidence": "mencao_direta"
        }
      ]
    },
    {
      "id": "canguru-b-planificacoes",
      "olympiadId": "canguru",
      "areaId": "canguru-geometria",
      "macrotheme": "Geometria espacial",
      "moduleId": "canguru-geometria-planificacoes",
      "moduleTitle": "Geometria Planificacoes",
      "title": "Planificações e decomposição de blocos",
      "description": "Estudo de planificações e decomposição de blocos com foco em problemas de raciocínio e aplicações no formato do Canguru.",
      "subtopics": [
        "decomposição de cubos",
        "planificações de cubos",
        "blocos retangulares"
      ],
      "learningObjectives": [
        "Compreender os conceitos centrais de planificações e decomposição de blocos.",
        "Resolver problemas do Canguru que combinem decomposição de cubos, planificações de cubos, blocos retangulares.",
        "Explicar a estratégia usada e conferir as restrições do problema."
      ],
      "prerequisites": [
        "Leitura atenta do enunciado",
        "Operações compatíveis com o nível"
      ],
      "theoryOutline": [
        "Conceito e vocabulário: decomposição de cubos",
        "Conceito e vocabulário: planificações de cubos",
        "Conceito e vocabulário: blocos retangulares"
      ],
      "formulas": [],
      "commonErrors": [
        "Aplicar uma regra sem verificar todas as condições do enunciado.",
        "Contar o mesmo caso mais de uma vez ou ignorar possibilidades.",
        "Aceitar uma resposta sem conferir se ela satisfaz as restrições."
      ],
      "keywords": [
        "Planificações e decomposição de blocos",
        "decomposição de cubos",
        "planificações de cubos",
        "blocos retangulares"
      ],
      "requiresUpdate": false,
      "reviewFrequencyMonths": null,
      "status": "revisado",
      "sourceTopicIds": [
        "B-10"
      ],
      "adaptations": [
        {
          "levelId": "canguru_b",
          "originProgram": "oficial_nivel_atual",
          "treatment": "novo",
          "importance": "essencial",
          "difficulty": 3,
          "order": 22,
          "theoryMinutes": 45,
          "exerciseMinutes": 90,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 9,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar representações concretas, desenhos e tentativas organizadas.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_c",
          "originProgram": "oficial_herdado",
          "treatment": "aprofundamento",
          "importance": "essencial",
          "difficulty": 4,
          "order": 22,
          "theoryMinutes": 25,
          "exerciseMinutes": 70,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 7,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_j",
          "originProgram": "oficial_herdado",
          "treatment": "revisao",
          "importance": "importante",
          "difficulty": 3,
          "order": 22,
          "theoryMinutes": 15,
          "exerciseMinutes": 50,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 6,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_s",
          "originProgram": "oficial_herdado",
          "treatment": "revisao",
          "importance": "importante",
          "difficulty": 3,
          "order": 22,
          "theoryMinutes": 15,
          "exerciseMinutes": 50,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 6,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        }
      ],
      "sources": [
        {
          "id": "canguru-programa-p2",
          "type": "programa_oficial",
          "title": "Conteúdo Programático do Concurso Canguru",
          "institution": "Canguru de Matemática Brasil / UpMat Educacional",
          "editionYear": null,
          "pageSection": "Página 2",
          "url": "https://e1f593d1-358f-4280-bf47-50136b7f401f.filesusr.com/ugd/7aad12_e4850730edb3462799273e3dcfb75447.pdf",
          "consultedAt": "2026-10-21",
          "official": true,
          "evidence": "mencao_direta"
        }
      ]
    },
    {
      "id": "canguru-b-tabuleiros-magicos",
      "olympiadId": "canguru",
      "areaId": "canguru-logica",
      "macrotheme": "Jogos e tabuleiros",
      "moduleId": "canguru-logica-tabuleiros",
      "moduleTitle": "Logica Tabuleiros",
      "title": "Tabuleiros e quadrados mágicos",
      "description": "Estudo de tabuleiros e quadrados mágicos com foco em problemas de raciocínio e aplicações no formato do Canguru.",
      "subtopics": [
        "problemas de lógica em tabuleiro",
        "quadrados mágicos"
      ],
      "learningObjectives": [
        "Compreender os conceitos centrais de tabuleiros e quadrados mágicos.",
        "Resolver problemas do Canguru que combinem problemas de lógica em tabuleiro, quadrados mágicos.",
        "Explicar a estratégia usada e conferir as restrições do problema."
      ],
      "prerequisites": [
        "Leitura atenta do enunciado",
        "Operações compatíveis com o nível"
      ],
      "theoryOutline": [
        "Conceito e vocabulário: problemas de lógica em tabuleiro",
        "Conceito e vocabulário: quadrados mágicos"
      ],
      "formulas": [],
      "commonErrors": [
        "Aplicar uma regra sem verificar todas as condições do enunciado.",
        "Contar o mesmo caso mais de uma vez ou ignorar possibilidades.",
        "Aceitar uma resposta sem conferir se ela satisfaz as restrições."
      ],
      "keywords": [
        "Tabuleiros e quadrados mágicos",
        "problemas de lógica em tabuleiro",
        "quadrados mágicos"
      ],
      "requiresUpdate": false,
      "reviewFrequencyMonths": null,
      "status": "revisado",
      "sourceTopicIds": [
        "B-11"
      ],
      "adaptations": [
        {
          "levelId": "canguru_b",
          "originProgram": "oficial_nivel_atual",
          "treatment": "novo",
          "importance": "essencial",
          "difficulty": 4,
          "order": 23,
          "theoryMinutes": 45,
          "exerciseMinutes": 90,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 9,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar representações concretas, desenhos e tentativas organizadas.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_c",
          "originProgram": "oficial_herdado",
          "treatment": "aprofundamento",
          "importance": "essencial",
          "difficulty": 5,
          "order": 23,
          "theoryMinutes": 25,
          "exerciseMinutes": 70,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 7,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_j",
          "originProgram": "oficial_herdado",
          "treatment": "revisao",
          "importance": "importante",
          "difficulty": 4,
          "order": 23,
          "theoryMinutes": 15,
          "exerciseMinutes": 50,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 6,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_s",
          "originProgram": "oficial_herdado",
          "treatment": "revisao",
          "importance": "importante",
          "difficulty": 4,
          "order": 23,
          "theoryMinutes": 15,
          "exerciseMinutes": 50,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 6,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        }
      ],
      "sources": [
        {
          "id": "canguru-programa-p2",
          "type": "programa_oficial",
          "title": "Conteúdo Programático do Concurso Canguru",
          "institution": "Canguru de Matemática Brasil / UpMat Educacional",
          "editionYear": null,
          "pageSection": "Página 2",
          "url": "https://e1f593d1-358f-4280-bf47-50136b7f401f.filesusr.com/ugd/7aad12_e4850730edb3462799273e3dcfb75447.pdf",
          "consultedAt": "2026-10-21",
          "official": true,
          "evidence": "mencao_direta"
        }
      ]
    },
    {
      "id": "canguru-b-logica-formal",
      "olympiadId": "canguru",
      "areaId": "canguru-logica",
      "macrotheme": "Lógica verbal",
      "moduleId": "canguru-logica-formal",
      "moduleTitle": "Logica Formal",
      "title": "Lógica formal e verbal",
      "description": "Estudo de lógica formal e verbal com foco em problemas de raciocínio e aplicações no formato do Canguru.",
      "subtopics": [
        "condicionais",
        "negações",
        "deduções em textos"
      ],
      "learningObjectives": [
        "Compreender os conceitos centrais de lógica formal e verbal.",
        "Resolver problemas do Canguru que combinem condicionais, negações, deduções em textos.",
        "Explicar a estratégia usada e conferir as restrições do problema."
      ],
      "prerequisites": [
        "Leitura atenta do enunciado",
        "Operações compatíveis com o nível"
      ],
      "theoryOutline": [
        "Conceito e vocabulário: condicionais",
        "Conceito e vocabulário: negações",
        "Conceito e vocabulário: deduções em textos"
      ],
      "formulas": [],
      "commonErrors": [
        "Aplicar uma regra sem verificar todas as condições do enunciado.",
        "Contar o mesmo caso mais de uma vez ou ignorar possibilidades.",
        "Aceitar uma resposta sem conferir se ela satisfaz as restrições."
      ],
      "keywords": [
        "Lógica formal e verbal",
        "condicionais",
        "negações",
        "deduções em textos"
      ],
      "requiresUpdate": false,
      "reviewFrequencyMonths": null,
      "status": "revisado",
      "sourceTopicIds": [
        "B-12"
      ],
      "adaptations": [
        {
          "levelId": "canguru_b",
          "originProgram": "oficial_nivel_atual",
          "treatment": "novo",
          "importance": "essencial",
          "difficulty": 4,
          "order": 24,
          "theoryMinutes": 45,
          "exerciseMinutes": 90,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 9,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar representações concretas, desenhos e tentativas organizadas.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_c",
          "originProgram": "oficial_herdado",
          "treatment": "aprofundamento",
          "importance": "essencial",
          "difficulty": 5,
          "order": 24,
          "theoryMinutes": 25,
          "exerciseMinutes": 70,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 7,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_j",
          "originProgram": "oficial_herdado",
          "treatment": "revisao",
          "importance": "importante",
          "difficulty": 4,
          "order": 24,
          "theoryMinutes": 15,
          "exerciseMinutes": 50,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 6,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_s",
          "originProgram": "oficial_herdado",
          "treatment": "revisao",
          "importance": "importante",
          "difficulty": 4,
          "order": 24,
          "theoryMinutes": 15,
          "exerciseMinutes": 50,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 6,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        }
      ],
      "sources": [
        {
          "id": "canguru-programa-p2",
          "type": "programa_oficial",
          "title": "Conteúdo Programático do Concurso Canguru",
          "institution": "Canguru de Matemática Brasil / UpMat Educacional",
          "editionYear": null,
          "pageSection": "Página 2",
          "url": "https://e1f593d1-358f-4280-bf47-50136b7f401f.filesusr.com/ugd/7aad12_e4850730edb3462799273e3dcfb75447.pdf",
          "consultedAt": "2026-10-21",
          "official": true,
          "evidence": "mencao_direta"
        }
      ]
    },
    {
      "id": "canguru-b-contagem-pombos",
      "olympiadId": "canguru",
      "areaId": "canguru-combinatoria",
      "macrotheme": "Princípios de contagem",
      "moduleId": "canguru-combinatoria-pombos",
      "moduleTitle": "Combinatoria Pombos",
      "title": "Contagem combinada e princípio da casa dos pombos",
      "description": "Estudo de contagem combinada e princípio da casa dos pombos com foco em problemas de raciocínio e aplicações no formato do Canguru.",
      "subtopics": [
        "princípios aditivo e multiplicativo combinados",
        "princípio da casa dos pombos"
      ],
      "learningObjectives": [
        "Compreender os conceitos centrais de contagem combinada e princípio da casa dos pombos.",
        "Resolver problemas do Canguru que combinem princípios aditivo e multiplicativo combinados, princípio da casa dos pombos.",
        "Explicar a estratégia usada e conferir as restrições do problema."
      ],
      "prerequisites": [
        "Leitura atenta do enunciado",
        "Operações compatíveis com o nível"
      ],
      "theoryOutline": [
        "Conceito e vocabulário: princípios aditivo e multiplicativo combinados",
        "Conceito e vocabulário: princípio da casa dos pombos"
      ],
      "formulas": [],
      "commonErrors": [
        "Aplicar uma regra sem verificar todas as condições do enunciado.",
        "Contar o mesmo caso mais de uma vez ou ignorar possibilidades.",
        "Aceitar uma resposta sem conferir se ela satisfaz as restrições."
      ],
      "keywords": [
        "Contagem combinada e princípio da casa dos pombos",
        "princípios aditivo e multiplicativo combinados",
        "princípio da casa dos pombos"
      ],
      "requiresUpdate": false,
      "reviewFrequencyMonths": null,
      "status": "revisado",
      "sourceTopicIds": [
        "B-14",
        "B-15"
      ],
      "adaptations": [
        {
          "levelId": "canguru_b",
          "originProgram": "oficial_nivel_atual",
          "treatment": "novo",
          "importance": "essencial",
          "difficulty": 4,
          "order": 25,
          "theoryMinutes": 60,
          "exerciseMinutes": 120,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 12,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar representações concretas, desenhos e tentativas organizadas.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_c",
          "originProgram": "oficial_herdado",
          "treatment": "aprofundamento",
          "importance": "essencial",
          "difficulty": 5,
          "order": 25,
          "theoryMinutes": 35,
          "exerciseMinutes": 95,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 10,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_j",
          "originProgram": "oficial_herdado",
          "treatment": "revisao",
          "importance": "importante",
          "difficulty": 4,
          "order": 25,
          "theoryMinutes": 20,
          "exerciseMinutes": 65,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 6,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_s",
          "originProgram": "oficial_herdado",
          "treatment": "revisao",
          "importance": "importante",
          "difficulty": 4,
          "order": 25,
          "theoryMinutes": 20,
          "exerciseMinutes": 65,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 6,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        }
      ],
      "sources": [
        {
          "id": "canguru-programa-p2",
          "type": "programa_oficial",
          "title": "Conteúdo Programático do Concurso Canguru",
          "institution": "Canguru de Matemática Brasil / UpMat Educacional",
          "editionYear": null,
          "pageSection": "Página 2",
          "url": "https://e1f593d1-358f-4280-bf47-50136b7f401f.filesusr.com/ugd/7aad12_e4850730edb3462799273e3dcfb75447.pdf",
          "consultedAt": "2026-10-21",
          "official": true,
          "evidence": "mencao_direta"
        }
      ]
    },
    {
      "id": "canguru-b-igualdades-variaveis",
      "olympiadId": "canguru",
      "areaId": "canguru-algebra",
      "macrotheme": "Igualdades",
      "moduleId": "canguru-algebra-igualdades",
      "moduleTitle": "Algebra Igualdades",
      "title": "Variáveis e propriedades das igualdades",
      "description": "Estudo de variáveis e propriedades das igualdades com foco em problemas de raciocínio e aplicações no formato do Canguru.",
      "subtopics": [
        "correspondência entre variáveis e figuras",
        "propriedades das igualdades"
      ],
      "learningObjectives": [
        "Compreender os conceitos centrais de variáveis e propriedades das igualdades.",
        "Resolver problemas do Canguru que combinem correspondência entre variáveis e figuras, propriedades das igualdades.",
        "Explicar a estratégia usada e conferir as restrições do problema."
      ],
      "prerequisites": [
        "Leitura atenta do enunciado",
        "Operações compatíveis com o nível"
      ],
      "theoryOutline": [
        "Conceito e vocabulário: correspondência entre variáveis e figuras",
        "Conceito e vocabulário: propriedades das igualdades"
      ],
      "formulas": [],
      "commonErrors": [
        "Aplicar uma regra sem verificar todas as condições do enunciado.",
        "Contar o mesmo caso mais de uma vez ou ignorar possibilidades.",
        "Aceitar uma resposta sem conferir se ela satisfaz as restrições."
      ],
      "keywords": [
        "Variáveis e propriedades das igualdades",
        "correspondência entre variáveis e figuras",
        "propriedades das igualdades"
      ],
      "requiresUpdate": false,
      "reviewFrequencyMonths": null,
      "status": "revisado",
      "sourceTopicIds": [
        "B-04"
      ],
      "adaptations": [
        {
          "levelId": "canguru_b",
          "originProgram": "oficial_nivel_atual",
          "treatment": "novo",
          "importance": "essencial",
          "difficulty": 3,
          "order": 26,
          "theoryMinutes": 45,
          "exerciseMinutes": 75,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 8,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar representações concretas, desenhos e tentativas organizadas.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_c",
          "originProgram": "oficial_herdado",
          "treatment": "aprofundamento",
          "importance": "essencial",
          "difficulty": 4,
          "order": 26,
          "theoryMinutes": 25,
          "exerciseMinutes": 60,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 6,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_j",
          "originProgram": "oficial_herdado",
          "treatment": "revisao",
          "importance": "importante",
          "difficulty": 3,
          "order": 26,
          "theoryMinutes": 15,
          "exerciseMinutes": 40,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 6,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_s",
          "originProgram": "oficial_herdado",
          "treatment": "revisao",
          "importance": "importante",
          "difficulty": 3,
          "order": 26,
          "theoryMinutes": 15,
          "exerciseMinutes": 40,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 6,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        }
      ],
      "sources": [
        {
          "id": "canguru-programa-p2",
          "type": "programa_oficial",
          "title": "Conteúdo Programático do Concurso Canguru",
          "institution": "Canguru de Matemática Brasil / UpMat Educacional",
          "editionYear": null,
          "pageSection": "Página 2",
          "url": "https://e1f593d1-358f-4280-bf47-50136b7f401f.filesusr.com/ugd/7aad12_e4850730edb3462799273e3dcfb75447.pdf",
          "consultedAt": "2026-10-21",
          "official": true,
          "evidence": "mencao_direta"
        }
      ]
    },
    {
      "id": "canguru-c-sistemas-numeracao",
      "olympiadId": "canguru",
      "areaId": "canguru-numeros",
      "macrotheme": "Propriedades numéricas",
      "moduleId": "canguru-numeros-sistemas",
      "moduleTitle": "Numeros Sistemas",
      "title": "Sistemas de numeração e propriedades dos números",
      "description": "Estudo de sistemas de numeração e propriedades dos números com foco em problemas de raciocínio e aplicações no formato do Canguru.",
      "subtopics": [
        "sistemas de numeração",
        "operações com racionais",
        "potências de naturais"
      ],
      "learningObjectives": [
        "Compreender os conceitos centrais de sistemas de numeração e propriedades dos números.",
        "Resolver problemas do Canguru que combinem sistemas de numeração, operações com racionais, potências de naturais.",
        "Explicar a estratégia usada e conferir as restrições do problema."
      ],
      "prerequisites": [
        "Leitura atenta do enunciado",
        "Operações compatíveis com o nível"
      ],
      "theoryOutline": [
        "Conceito e vocabulário: sistemas de numeração",
        "Conceito e vocabulário: operações com racionais",
        "Conceito e vocabulário: potências de naturais"
      ],
      "formulas": [],
      "commonErrors": [
        "Aplicar uma regra sem verificar todas as condições do enunciado.",
        "Contar o mesmo caso mais de uma vez ou ignorar possibilidades.",
        "Aceitar uma resposta sem conferir se ela satisfaz as restrições."
      ],
      "keywords": [
        "Sistemas de numeração e propriedades dos números",
        "sistemas de numeração",
        "operações com racionais",
        "potências de naturais"
      ],
      "requiresUpdate": false,
      "reviewFrequencyMonths": null,
      "status": "revisado",
      "sourceTopicIds": [
        "C-01",
        "C-02",
        "C-03"
      ],
      "adaptations": [
        {
          "levelId": "canguru_c",
          "originProgram": "oficial_nivel_atual",
          "treatment": "novo",
          "importance": "essencial",
          "difficulty": 3,
          "order": 27,
          "theoryMinutes": 60,
          "exerciseMinutes": 90,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 9,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_j",
          "originProgram": "oficial_herdado",
          "treatment": "aprofundamento",
          "importance": "essencial",
          "difficulty": 4,
          "order": 27,
          "theoryMinutes": 35,
          "exerciseMinutes": 70,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 7,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_s",
          "originProgram": "oficial_herdado",
          "treatment": "revisao",
          "importance": "importante",
          "difficulty": 3,
          "order": 27,
          "theoryMinutes": 20,
          "exerciseMinutes": 50,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 6,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        }
      ],
      "sources": [
        {
          "id": "canguru-programa-p2",
          "type": "programa_oficial",
          "title": "Conteúdo Programático do Concurso Canguru",
          "institution": "Canguru de Matemática Brasil / UpMat Educacional",
          "editionYear": null,
          "pageSection": "Página 2",
          "url": "https://e1f593d1-358f-4280-bf47-50136b7f401f.filesusr.com/ugd/7aad12_e4850730edb3462799273e3dcfb75447.pdf",
          "consultedAt": "2026-10-21",
          "official": true,
          "evidence": "mencao_direta"
        }
      ]
    },
    {
      "id": "canguru-c-razoes-proporcoes",
      "olympiadId": "canguru",
      "areaId": "canguru-numeros",
      "macrotheme": "Proporcionalidade",
      "moduleId": "canguru-numeros-proporcoes",
      "moduleTitle": "Numeros Proporcoes",
      "title": "Razões e proporções",
      "description": "Estudo de razões e proporções com foco em problemas de raciocínio e aplicações no formato do Canguru.",
      "subtopics": [
        "razões",
        "proporções",
        "escalas e comparações"
      ],
      "learningObjectives": [
        "Compreender os conceitos centrais de razões e proporções.",
        "Resolver problemas do Canguru que combinem razões, proporções, escalas e comparações.",
        "Explicar a estratégia usada e conferir as restrições do problema."
      ],
      "prerequisites": [
        "Leitura atenta do enunciado",
        "Operações compatíveis com o nível"
      ],
      "theoryOutline": [
        "Conceito e vocabulário: razões",
        "Conceito e vocabulário: proporções",
        "Conceito e vocabulário: escalas e comparações"
      ],
      "formulas": [],
      "commonErrors": [
        "Aplicar uma regra sem verificar todas as condições do enunciado.",
        "Contar o mesmo caso mais de uma vez ou ignorar possibilidades.",
        "Aceitar uma resposta sem conferir se ela satisfaz as restrições."
      ],
      "keywords": [
        "Razões e proporções",
        "razões",
        "proporções",
        "escalas e comparações"
      ],
      "requiresUpdate": false,
      "reviewFrequencyMonths": null,
      "status": "revisado",
      "sourceTopicIds": [
        "C-04"
      ],
      "adaptations": [
        {
          "levelId": "canguru_c",
          "originProgram": "oficial_nivel_atual",
          "treatment": "novo",
          "importance": "essencial",
          "difficulty": 3,
          "order": 28,
          "theoryMinutes": 60,
          "exerciseMinutes": 90,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 9,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_j",
          "originProgram": "oficial_herdado",
          "treatment": "aprofundamento",
          "importance": "essencial",
          "difficulty": 4,
          "order": 28,
          "theoryMinutes": 35,
          "exerciseMinutes": 70,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 7,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_s",
          "originProgram": "oficial_herdado",
          "treatment": "revisao",
          "importance": "importante",
          "difficulty": 3,
          "order": 28,
          "theoryMinutes": 20,
          "exerciseMinutes": 50,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 6,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        }
      ],
      "sources": [
        {
          "id": "canguru-programa-p2",
          "type": "programa_oficial",
          "title": "Conteúdo Programático do Concurso Canguru",
          "institution": "Canguru de Matemática Brasil / UpMat Educacional",
          "editionYear": null,
          "pageSection": "Página 2",
          "url": "https://e1f593d1-358f-4280-bf47-50136b7f401f.filesusr.com/ugd/7aad12_e4850730edb3462799273e3dcfb75447.pdf",
          "consultedAt": "2026-10-21",
          "official": true,
          "evidence": "mencao_direta"
        }
      ]
    },
    {
      "id": "canguru-c-geometria-poligonos",
      "olympiadId": "canguru",
      "areaId": "canguru-geometria",
      "macrotheme": "Geometria plana",
      "moduleId": "canguru-geometria-poligonos",
      "moduleTitle": "Geometria Poligonos",
      "title": "Ângulos, polígonos e transformações",
      "description": "Estudo de ângulos, polígonos e transformações com foco em problemas de raciocínio e aplicações no formato do Canguru.",
      "subtopics": [
        "relações de ângulos",
        "polígonos convexos",
        "transformações geométricas"
      ],
      "learningObjectives": [
        "Compreender os conceitos centrais de ângulos, polígonos e transformações.",
        "Resolver problemas do Canguru que combinem relações de ângulos, polígonos convexos, transformações geométricas.",
        "Explicar a estratégia usada e conferir as restrições do problema."
      ],
      "prerequisites": [
        "Leitura atenta do enunciado",
        "Operações compatíveis com o nível"
      ],
      "theoryOutline": [
        "Conceito e vocabulário: relações de ângulos",
        "Conceito e vocabulário: polígonos convexos",
        "Conceito e vocabulário: transformações geométricas"
      ],
      "formulas": [],
      "commonErrors": [
        "Aplicar uma regra sem verificar todas as condições do enunciado.",
        "Contar o mesmo caso mais de uma vez ou ignorar possibilidades.",
        "Aceitar uma resposta sem conferir se ela satisfaz as restrições."
      ],
      "keywords": [
        "Ângulos, polígonos e transformações",
        "relações de ângulos",
        "polígonos convexos",
        "transformações geométricas"
      ],
      "requiresUpdate": false,
      "reviewFrequencyMonths": null,
      "status": "revisado",
      "sourceTopicIds": [
        "C-05",
        "C-07",
        "C-08"
      ],
      "adaptations": [
        {
          "levelId": "canguru_c",
          "originProgram": "oficial_nivel_atual",
          "treatment": "novo",
          "importance": "essencial",
          "difficulty": 4,
          "order": 29,
          "theoryMinutes": 75,
          "exerciseMinutes": 105,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 10,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_j",
          "originProgram": "oficial_herdado",
          "treatment": "aprofundamento",
          "importance": "essencial",
          "difficulty": 5,
          "order": 29,
          "theoryMinutes": 40,
          "exerciseMinutes": 85,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 8,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_s",
          "originProgram": "oficial_herdado",
          "treatment": "revisao",
          "importance": "importante",
          "difficulty": 4,
          "order": 29,
          "theoryMinutes": 25,
          "exerciseMinutes": 60,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 6,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        }
      ],
      "sources": [
        {
          "id": "canguru-programa-p2",
          "type": "programa_oficial",
          "title": "Conteúdo Programático do Concurso Canguru",
          "institution": "Canguru de Matemática Brasil / UpMat Educacional",
          "editionYear": null,
          "pageSection": "Página 2",
          "url": "https://e1f593d1-358f-4280-bf47-50136b7f401f.filesusr.com/ugd/7aad12_e4850730edb3462799273e3dcfb75447.pdf",
          "consultedAt": "2026-10-21",
          "official": true,
          "evidence": "mencao_direta"
        }
      ]
    },
    {
      "id": "canguru-c-areas",
      "olympiadId": "canguru",
      "areaId": "canguru-geometria",
      "macrotheme": "Áreas",
      "moduleId": "canguru-geometria-areas",
      "moduleTitle": "Geometria Areas",
      "title": "Áreas de retângulos, triângulos e círculos",
      "description": "Estudo de áreas de retângulos, triângulos e círculos com foco em problemas de raciocínio e aplicações no formato do Canguru.",
      "subtopics": [
        "área de retângulos",
        "área de triângulos",
        "área de círculos"
      ],
      "learningObjectives": [
        "Compreender os conceitos centrais de áreas de retângulos, triângulos e círculos.",
        "Resolver problemas do Canguru que combinem área de retângulos, área de triângulos, área de círculos.",
        "Explicar a estratégia usada e conferir as restrições do problema."
      ],
      "prerequisites": [
        "Leitura atenta do enunciado",
        "Operações compatíveis com o nível"
      ],
      "theoryOutline": [
        "Conceito e vocabulário: área de retângulos",
        "Conceito e vocabulário: área de triângulos",
        "Conceito e vocabulário: área de círculos"
      ],
      "formulas": [],
      "commonErrors": [
        "Aplicar uma regra sem verificar todas as condições do enunciado.",
        "Contar o mesmo caso mais de uma vez ou ignorar possibilidades.",
        "Aceitar uma resposta sem conferir se ela satisfaz as restrições."
      ],
      "keywords": [
        "Áreas de retângulos, triângulos e círculos",
        "área de retângulos",
        "área de triângulos",
        "área de círculos"
      ],
      "requiresUpdate": false,
      "reviewFrequencyMonths": null,
      "status": "revisado",
      "sourceTopicIds": [
        "C-06"
      ],
      "adaptations": [
        {
          "levelId": "canguru_c",
          "originProgram": "oficial_nivel_atual",
          "treatment": "novo",
          "importance": "essencial",
          "difficulty": 3,
          "order": 30,
          "theoryMinutes": 60,
          "exerciseMinutes": 90,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 9,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_j",
          "originProgram": "oficial_herdado",
          "treatment": "aprofundamento",
          "importance": "essencial",
          "difficulty": 4,
          "order": 30,
          "theoryMinutes": 35,
          "exerciseMinutes": 70,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 7,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_s",
          "originProgram": "oficial_herdado",
          "treatment": "revisao",
          "importance": "importante",
          "difficulty": 3,
          "order": 30,
          "theoryMinutes": 20,
          "exerciseMinutes": 50,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 6,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        }
      ],
      "sources": [
        {
          "id": "canguru-programa-p2",
          "type": "programa_oficial",
          "title": "Conteúdo Programático do Concurso Canguru",
          "institution": "Canguru de Matemática Brasil / UpMat Educacional",
          "editionYear": null,
          "pageSection": "Página 2",
          "url": "https://e1f593d1-358f-4280-bf47-50136b7f401f.filesusr.com/ugd/7aad12_e4850730edb3462799273e3dcfb75447.pdf",
          "consultedAt": "2026-10-21",
          "official": true,
          "evidence": "mencao_direta"
        }
      ]
    },
    {
      "id": "canguru-c-equacoes-sistemas",
      "olympiadId": "canguru",
      "areaId": "canguru-algebra",
      "macrotheme": "Equações",
      "moduleId": "canguru-algebra-equacoes",
      "moduleTitle": "Algebra Equacoes",
      "title": "Equações, desigualdades e sistemas lineares",
      "description": "Estudo de equações, desigualdades e sistemas lineares com foco em problemas de raciocínio e aplicações no formato do Canguru.",
      "subtopics": [
        "equações lineares",
        "desigualdades",
        "sistemas de equações"
      ],
      "learningObjectives": [
        "Compreender os conceitos centrais de equações, desigualdades e sistemas lineares.",
        "Resolver problemas do Canguru que combinem equações lineares, desigualdades, sistemas de equações.",
        "Explicar a estratégia usada e conferir as restrições do problema."
      ],
      "prerequisites": [
        "Leitura atenta do enunciado",
        "Operações compatíveis com o nível"
      ],
      "theoryOutline": [
        "Conceito e vocabulário: equações lineares",
        "Conceito e vocabulário: desigualdades",
        "Conceito e vocabulário: sistemas de equações"
      ],
      "formulas": [],
      "commonErrors": [
        "Aplicar uma regra sem verificar todas as condições do enunciado.",
        "Contar o mesmo caso mais de uma vez ou ignorar possibilidades.",
        "Aceitar uma resposta sem conferir se ela satisfaz as restrições."
      ],
      "keywords": [
        "Equações, desigualdades e sistemas lineares",
        "equações lineares",
        "desigualdades",
        "sistemas de equações"
      ],
      "requiresUpdate": false,
      "reviewFrequencyMonths": null,
      "status": "revisado",
      "sourceTopicIds": [
        "C-09"
      ],
      "adaptations": [
        {
          "levelId": "canguru_c",
          "originProgram": "oficial_nivel_atual",
          "treatment": "novo",
          "importance": "essencial",
          "difficulty": 4,
          "order": 31,
          "theoryMinutes": 75,
          "exerciseMinutes": 105,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 10,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_j",
          "originProgram": "oficial_herdado",
          "treatment": "aprofundamento",
          "importance": "essencial",
          "difficulty": 5,
          "order": 31,
          "theoryMinutes": 40,
          "exerciseMinutes": 85,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 8,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_s",
          "originProgram": "oficial_herdado",
          "treatment": "revisao",
          "importance": "importante",
          "difficulty": 4,
          "order": 31,
          "theoryMinutes": 25,
          "exerciseMinutes": 60,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 6,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        }
      ],
      "sources": [
        {
          "id": "canguru-programa-p3",
          "type": "programa_oficial",
          "title": "Conteúdo Programático do Concurso Canguru",
          "institution": "Canguru de Matemática Brasil / UpMat Educacional",
          "editionYear": null,
          "pageSection": "Página 3",
          "url": "https://e1f593d1-358f-4280-bf47-50136b7f401f.filesusr.com/ugd/7aad12_e4850730edb3462799273e3dcfb75447.pdf",
          "consultedAt": "2026-10-21",
          "official": true,
          "evidence": "mencao_direta"
        }
      ]
    },
    {
      "id": "canguru-c-combinacoes",
      "olympiadId": "canguru",
      "areaId": "canguru-combinatoria",
      "macrotheme": "Combinações",
      "moduleId": "canguru-combinatoria-combinacoes",
      "moduleTitle": "Combinatoria Combinacoes",
      "title": "Combinações simples em contextos numéricos e geométricos",
      "description": "Estudo de combinações simples em contextos numéricos e geométricos com foco em problemas de raciocínio e aplicações no formato do Canguru.",
      "subtopics": [
        "combinações simples",
        "aplicações numéricas",
        "aplicações geométricas"
      ],
      "learningObjectives": [
        "Compreender os conceitos centrais de combinações simples em contextos numéricos e geométricos.",
        "Resolver problemas do Canguru que combinem combinações simples, aplicações numéricas, aplicações geométricas.",
        "Explicar a estratégia usada e conferir as restrições do problema."
      ],
      "prerequisites": [
        "Leitura atenta do enunciado",
        "Operações compatíveis com o nível"
      ],
      "theoryOutline": [
        "Conceito e vocabulário: combinações simples",
        "Conceito e vocabulário: aplicações numéricas",
        "Conceito e vocabulário: aplicações geométricas"
      ],
      "formulas": [],
      "commonErrors": [
        "Aplicar uma regra sem verificar todas as condições do enunciado.",
        "Contar o mesmo caso mais de uma vez ou ignorar possibilidades.",
        "Aceitar uma resposta sem conferir se ela satisfaz as restrições."
      ],
      "keywords": [
        "Combinações simples em contextos numéricos e geométricos",
        "combinações simples",
        "aplicações numéricas",
        "aplicações geométricas"
      ],
      "requiresUpdate": false,
      "reviewFrequencyMonths": null,
      "status": "revisado",
      "sourceTopicIds": [
        "C-10"
      ],
      "adaptations": [
        {
          "levelId": "canguru_c",
          "originProgram": "oficial_nivel_atual",
          "treatment": "novo",
          "importance": "essencial",
          "difficulty": 4,
          "order": 32,
          "theoryMinutes": 60,
          "exerciseMinutes": 105,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 10,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_j",
          "originProgram": "oficial_herdado",
          "treatment": "aprofundamento",
          "importance": "essencial",
          "difficulty": 5,
          "order": 32,
          "theoryMinutes": 35,
          "exerciseMinutes": 85,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 8,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_s",
          "originProgram": "oficial_herdado",
          "treatment": "revisao",
          "importance": "importante",
          "difficulty": 4,
          "order": 32,
          "theoryMinutes": 20,
          "exerciseMinutes": 60,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 6,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        }
      ],
      "sources": [
        {
          "id": "canguru-programa-p3",
          "type": "programa_oficial",
          "title": "Conteúdo Programático do Concurso Canguru",
          "institution": "Canguru de Matemática Brasil / UpMat Educacional",
          "editionYear": null,
          "pageSection": "Página 3",
          "url": "https://e1f593d1-358f-4280-bf47-50136b7f401f.filesusr.com/ugd/7aad12_e4850730edb3462799273e3dcfb75447.pdf",
          "consultedAt": "2026-10-21",
          "official": true,
          "evidence": "mencao_direta"
        }
      ]
    },
    {
      "id": "canguru-c-dados-algoritmos",
      "olympiadId": "canguru",
      "areaId": "canguru-dados",
      "macrotheme": "Dados e procedimentos",
      "moduleId": "canguru-dados-algoritmos",
      "moduleTitle": "Dados Algoritmos",
      "title": "Interpretação de dados e reconhecimento de algoritmos",
      "description": "Estudo de interpretação de dados e reconhecimento de algoritmos com foco em problemas de raciocínio e aplicações no formato do Canguru.",
      "subtopics": [
        "tabelas e dados",
        "sequências de instruções",
        "reconhecimento de algoritmos"
      ],
      "learningObjectives": [
        "Compreender os conceitos centrais de interpretação de dados e reconhecimento de algoritmos.",
        "Resolver problemas do Canguru que combinem tabelas e dados, sequências de instruções, reconhecimento de algoritmos.",
        "Explicar a estratégia usada e conferir as restrições do problema."
      ],
      "prerequisites": [
        "Leitura atenta do enunciado",
        "Operações compatíveis com o nível"
      ],
      "theoryOutline": [
        "Conceito e vocabulário: tabelas e dados",
        "Conceito e vocabulário: sequências de instruções",
        "Conceito e vocabulário: reconhecimento de algoritmos"
      ],
      "formulas": [],
      "commonErrors": [
        "Aplicar uma regra sem verificar todas as condições do enunciado.",
        "Contar o mesmo caso mais de uma vez ou ignorar possibilidades.",
        "Aceitar uma resposta sem conferir se ela satisfaz as restrições."
      ],
      "keywords": [
        "Interpretação de dados e reconhecimento de algoritmos",
        "tabelas e dados",
        "sequências de instruções",
        "reconhecimento de algoritmos"
      ],
      "requiresUpdate": false,
      "reviewFrequencyMonths": null,
      "status": "revisado",
      "sourceTopicIds": [
        "C-11"
      ],
      "adaptations": [
        {
          "levelId": "canguru_c",
          "originProgram": "oficial_nivel_atual",
          "treatment": "novo",
          "importance": "essencial",
          "difficulty": 3,
          "order": 33,
          "theoryMinutes": 45,
          "exerciseMinutes": 90,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 9,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_j",
          "originProgram": "oficial_herdado",
          "treatment": "aprofundamento",
          "importance": "essencial",
          "difficulty": 4,
          "order": 33,
          "theoryMinutes": 25,
          "exerciseMinutes": 70,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 7,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_s",
          "originProgram": "oficial_herdado",
          "treatment": "revisao",
          "importance": "importante",
          "difficulty": 3,
          "order": 33,
          "theoryMinutes": 15,
          "exerciseMinutes": 50,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 6,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        }
      ],
      "sources": [
        {
          "id": "canguru-programa-p3",
          "type": "programa_oficial",
          "title": "Conteúdo Programático do Concurso Canguru",
          "institution": "Canguru de Matemática Brasil / UpMat Educacional",
          "editionYear": null,
          "pageSection": "Página 3",
          "url": "https://e1f593d1-358f-4280-bf47-50136b7f401f.filesusr.com/ugd/7aad12_e4850730edb3462799273e3dcfb75447.pdf",
          "consultedAt": "2026-10-21",
          "official": true,
          "evidence": "mencao_direta"
        }
      ]
    },
    {
      "id": "canguru-c-plano-reta",
      "olympiadId": "canguru",
      "areaId": "canguru-dados",
      "macrotheme": "Geometria analítica",
      "moduleId": "canguru-dados-plano",
      "moduleTitle": "Dados Plano",
      "title": "Plano cartesiano e equação da reta",
      "description": "Estudo de plano cartesiano e equação da reta com foco em problemas de raciocínio e aplicações no formato do Canguru.",
      "subtopics": [
        "pontos no plano cartesiano",
        "coordenadas",
        "equação da reta"
      ],
      "learningObjectives": [
        "Compreender os conceitos centrais de plano cartesiano e equação da reta.",
        "Resolver problemas do Canguru que combinem pontos no plano cartesiano, coordenadas, equação da reta.",
        "Explicar a estratégia usada e conferir as restrições do problema."
      ],
      "prerequisites": [
        "Leitura atenta do enunciado",
        "Operações compatíveis com o nível"
      ],
      "theoryOutline": [
        "Conceito e vocabulário: pontos no plano cartesiano",
        "Conceito e vocabulário: coordenadas",
        "Conceito e vocabulário: equação da reta"
      ],
      "formulas": [],
      "commonErrors": [
        "Aplicar uma regra sem verificar todas as condições do enunciado.",
        "Contar o mesmo caso mais de uma vez ou ignorar possibilidades.",
        "Aceitar uma resposta sem conferir se ela satisfaz as restrições."
      ],
      "keywords": [
        "Plano cartesiano e equação da reta",
        "pontos no plano cartesiano",
        "coordenadas",
        "equação da reta"
      ],
      "requiresUpdate": false,
      "reviewFrequencyMonths": null,
      "status": "revisado",
      "sourceTopicIds": [
        "C-12"
      ],
      "adaptations": [
        {
          "levelId": "canguru_c",
          "originProgram": "oficial_nivel_atual",
          "treatment": "novo",
          "importance": "essencial",
          "difficulty": 4,
          "order": 34,
          "theoryMinutes": 60,
          "exerciseMinutes": 90,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 9,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_j",
          "originProgram": "oficial_herdado",
          "treatment": "aprofundamento",
          "importance": "essencial",
          "difficulty": 5,
          "order": 34,
          "theoryMinutes": 35,
          "exerciseMinutes": 70,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 7,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_s",
          "originProgram": "oficial_herdado",
          "treatment": "revisao",
          "importance": "importante",
          "difficulty": 4,
          "order": 34,
          "theoryMinutes": 20,
          "exerciseMinutes": 50,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 6,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        }
      ],
      "sources": [
        {
          "id": "canguru-programa-p3",
          "type": "programa_oficial",
          "title": "Conteúdo Programático do Concurso Canguru",
          "institution": "Canguru de Matemática Brasil / UpMat Educacional",
          "editionYear": null,
          "pageSection": "Página 3",
          "url": "https://e1f593d1-358f-4280-bf47-50136b7f401f.filesusr.com/ugd/7aad12_e4850730edb3462799273e3dcfb75447.pdf",
          "consultedAt": "2026-10-21",
          "official": true,
          "evidence": "mencao_direta"
        }
      ]
    },
    {
      "id": "canguru-j-reais",
      "olympiadId": "canguru",
      "areaId": "canguru-numeros",
      "macrotheme": "Números reais",
      "moduleId": "canguru-numeros-reais",
      "moduleTitle": "Numeros Reais",
      "title": "Operações e propriedades dos números reais",
      "description": "Estudo de operações e propriedades dos números reais com foco em problemas de raciocínio e aplicações no formato do Canguru.",
      "subtopics": [
        "operações com números reais",
        "ordem e propriedades"
      ],
      "learningObjectives": [
        "Compreender os conceitos centrais de operações e propriedades dos números reais.",
        "Resolver problemas do Canguru que combinem operações com números reais, ordem e propriedades.",
        "Explicar a estratégia usada e conferir as restrições do problema."
      ],
      "prerequisites": [
        "Leitura atenta do enunciado",
        "Operações compatíveis com o nível"
      ],
      "theoryOutline": [
        "Conceito e vocabulário: operações com números reais",
        "Conceito e vocabulário: ordem e propriedades"
      ],
      "formulas": [],
      "commonErrors": [
        "Aplicar uma regra sem verificar todas as condições do enunciado.",
        "Contar o mesmo caso mais de uma vez ou ignorar possibilidades.",
        "Aceitar uma resposta sem conferir se ela satisfaz as restrições."
      ],
      "keywords": [
        "Operações e propriedades dos números reais",
        "operações com números reais",
        "ordem e propriedades"
      ],
      "requiresUpdate": false,
      "reviewFrequencyMonths": null,
      "status": "revisado",
      "sourceTopicIds": [
        "J-01"
      ],
      "adaptations": [
        {
          "levelId": "canguru_j",
          "originProgram": "oficial_nivel_atual",
          "treatment": "novo",
          "importance": "essencial",
          "difficulty": 3,
          "order": 35,
          "theoryMinutes": 60,
          "exerciseMinutes": 90,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 9,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_s",
          "originProgram": "oficial_herdado",
          "treatment": "aprofundamento",
          "importance": "essencial",
          "difficulty": 4,
          "order": 35,
          "theoryMinutes": 35,
          "exerciseMinutes": 70,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 7,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        }
      ],
      "sources": [
        {
          "id": "canguru-programa-p3",
          "type": "programa_oficial",
          "title": "Conteúdo Programático do Concurso Canguru",
          "institution": "Canguru de Matemática Brasil / UpMat Educacional",
          "editionYear": null,
          "pageSection": "Página 3",
          "url": "https://e1f593d1-358f-4280-bf47-50136b7f401f.filesusr.com/ugd/7aad12_e4850730edb3462799273e3dcfb75447.pdf",
          "consultedAt": "2026-10-21",
          "official": true,
          "evidence": "mencao_direta"
        }
      ]
    },
    {
      "id": "canguru-j-funcoes",
      "olympiadId": "canguru",
      "areaId": "canguru-algebra",
      "macrotheme": "Funções",
      "moduleId": "canguru-algebra-funcoes",
      "moduleTitle": "Algebra Funcoes",
      "title": "Funções, gráficos e equações funcionais",
      "description": "Estudo de funções, gráficos e equações funcionais com foco em problemas de raciocínio e aplicações no formato do Canguru.",
      "subtopics": [
        "propriedades de funções",
        "gráficos",
        "equações funcionais"
      ],
      "learningObjectives": [
        "Compreender os conceitos centrais de funções, gráficos e equações funcionais.",
        "Resolver problemas do Canguru que combinem propriedades de funções, gráficos, equações funcionais.",
        "Explicar a estratégia usada e conferir as restrições do problema."
      ],
      "prerequisites": [
        "Leitura atenta do enunciado",
        "Operações compatíveis com o nível"
      ],
      "theoryOutline": [
        "Conceito e vocabulário: propriedades de funções",
        "Conceito e vocabulário: gráficos",
        "Conceito e vocabulário: equações funcionais"
      ],
      "formulas": [],
      "commonErrors": [
        "Aplicar uma regra sem verificar todas as condições do enunciado.",
        "Contar o mesmo caso mais de uma vez ou ignorar possibilidades.",
        "Aceitar uma resposta sem conferir se ela satisfaz as restrições."
      ],
      "keywords": [
        "Funções, gráficos e equações funcionais",
        "propriedades de funções",
        "gráficos",
        "equações funcionais"
      ],
      "requiresUpdate": false,
      "reviewFrequencyMonths": null,
      "status": "revisado",
      "sourceTopicIds": [
        "J-02"
      ],
      "adaptations": [
        {
          "levelId": "canguru_j",
          "originProgram": "oficial_nivel_atual",
          "treatment": "novo",
          "importance": "essencial",
          "difficulty": 5,
          "order": 36,
          "theoryMinutes": 90,
          "exerciseMinutes": 120,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 12,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_s",
          "originProgram": "oficial_herdado",
          "treatment": "aprofundamento",
          "importance": "essencial",
          "difficulty": 5,
          "order": 36,
          "theoryMinutes": 50,
          "exerciseMinutes": 95,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 10,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        }
      ],
      "sources": [
        {
          "id": "canguru-programa-p3",
          "type": "programa_oficial",
          "title": "Conteúdo Programático do Concurso Canguru",
          "institution": "Canguru de Matemática Brasil / UpMat Educacional",
          "editionYear": null,
          "pageSection": "Página 3",
          "url": "https://e1f593d1-358f-4280-bf47-50136b7f401f.filesusr.com/ugd/7aad12_e4850730edb3462799273e3dcfb75447.pdf",
          "consultedAt": "2026-10-21",
          "official": true,
          "evidence": "mencao_direta"
        }
      ]
    },
    {
      "id": "canguru-j-polinomios",
      "olympiadId": "canguru",
      "areaId": "canguru-algebra",
      "macrotheme": "Polinômios",
      "moduleId": "canguru-algebra-polinomios",
      "moduleTitle": "Algebra Polinomios",
      "title": "Polinômios de uma variável",
      "description": "Estudo de polinômios de uma variável com foco em problemas de raciocínio e aplicações no formato do Canguru.",
      "subtopics": [
        "operações com polinômios",
        "raízes e fatores",
        "identidades"
      ],
      "learningObjectives": [
        "Compreender os conceitos centrais de polinômios de uma variável.",
        "Resolver problemas do Canguru que combinem operações com polinômios, raízes e fatores, identidades.",
        "Explicar a estratégia usada e conferir as restrições do problema."
      ],
      "prerequisites": [
        "Leitura atenta do enunciado",
        "Operações compatíveis com o nível"
      ],
      "theoryOutline": [
        "Conceito e vocabulário: operações com polinômios",
        "Conceito e vocabulário: raízes e fatores",
        "Conceito e vocabulário: identidades"
      ],
      "formulas": [],
      "commonErrors": [
        "Aplicar uma regra sem verificar todas as condições do enunciado.",
        "Contar o mesmo caso mais de uma vez ou ignorar possibilidades.",
        "Aceitar uma resposta sem conferir se ela satisfaz as restrições."
      ],
      "keywords": [
        "Polinômios de uma variável",
        "operações com polinômios",
        "raízes e fatores",
        "identidades"
      ],
      "requiresUpdate": false,
      "reviewFrequencyMonths": null,
      "status": "revisado",
      "sourceTopicIds": [
        "J-03"
      ],
      "adaptations": [
        {
          "levelId": "canguru_j",
          "originProgram": "oficial_nivel_atual",
          "treatment": "novo",
          "importance": "essencial",
          "difficulty": 4,
          "order": 37,
          "theoryMinutes": 75,
          "exerciseMinutes": 105,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 10,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_s",
          "originProgram": "oficial_herdado",
          "treatment": "aprofundamento",
          "importance": "essencial",
          "difficulty": 5,
          "order": 37,
          "theoryMinutes": 40,
          "exerciseMinutes": 85,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 8,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        }
      ],
      "sources": [
        {
          "id": "canguru-programa-p3",
          "type": "programa_oficial",
          "title": "Conteúdo Programático do Concurso Canguru",
          "institution": "Canguru de Matemática Brasil / UpMat Educacional",
          "editionYear": null,
          "pageSection": "Página 3",
          "url": "https://e1f593d1-358f-4280-bf47-50136b7f401f.filesusr.com/ugd/7aad12_e4850730edb3462799273e3dcfb75447.pdf",
          "consultedAt": "2026-10-21",
          "official": true,
          "evidence": "mencao_direta"
        }
      ]
    },
    {
      "id": "canguru-j-recorrencia-inducao",
      "olympiadId": "canguru",
      "areaId": "canguru-algebra",
      "macrotheme": "Sequências",
      "moduleId": "canguru-algebra-inducao",
      "moduleTitle": "Algebra Inducao",
      "title": "Recorrências e princípio da indução",
      "description": "Estudo de recorrências e princípio da indução com foco em problemas de raciocínio e aplicações no formato do Canguru.",
      "subtopics": [
        "fórmulas de recorrência",
        "sequências",
        "princípio da indução"
      ],
      "learningObjectives": [
        "Compreender os conceitos centrais de recorrências e princípio da indução.",
        "Resolver problemas do Canguru que combinem fórmulas de recorrência, sequências, princípio da indução.",
        "Explicar a estratégia usada e conferir as restrições do problema."
      ],
      "prerequisites": [
        "Leitura atenta do enunciado",
        "Operações compatíveis com o nível"
      ],
      "theoryOutline": [
        "Conceito e vocabulário: fórmulas de recorrência",
        "Conceito e vocabulário: sequências",
        "Conceito e vocabulário: princípio da indução"
      ],
      "formulas": [],
      "commonErrors": [
        "Aplicar uma regra sem verificar todas as condições do enunciado.",
        "Contar o mesmo caso mais de uma vez ou ignorar possibilidades.",
        "Aceitar uma resposta sem conferir se ela satisfaz as restrições."
      ],
      "keywords": [
        "Recorrências e princípio da indução",
        "fórmulas de recorrência",
        "sequências",
        "princípio da indução"
      ],
      "requiresUpdate": false,
      "reviewFrequencyMonths": null,
      "status": "revisado",
      "sourceTopicIds": [
        "J-04"
      ],
      "adaptations": [
        {
          "levelId": "canguru_j",
          "originProgram": "oficial_nivel_atual",
          "treatment": "novo",
          "importance": "essencial",
          "difficulty": 5,
          "order": 38,
          "theoryMinutes": 90,
          "exerciseMinutes": 120,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 12,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_s",
          "originProgram": "oficial_herdado",
          "treatment": "aprofundamento",
          "importance": "essencial",
          "difficulty": 5,
          "order": 38,
          "theoryMinutes": 50,
          "exerciseMinutes": 95,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 10,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        }
      ],
      "sources": [
        {
          "id": "canguru-programa-p3",
          "type": "programa_oficial",
          "title": "Conteúdo Programático do Concurso Canguru",
          "institution": "Canguru de Matemática Brasil / UpMat Educacional",
          "editionYear": null,
          "pageSection": "Página 3",
          "url": "https://e1f593d1-358f-4280-bf47-50136b7f401f.filesusr.com/ugd/7aad12_e4850730edb3462799273e3dcfb75447.pdf",
          "consultedAt": "2026-10-21",
          "official": true,
          "evidence": "mencao_direta"
        }
      ]
    },
    {
      "id": "canguru-j-combinacoes-repeticao",
      "olympiadId": "canguru",
      "areaId": "canguru-combinatoria",
      "macrotheme": "Combinatória",
      "moduleId": "canguru-combinatoria-repeticao",
      "moduleTitle": "Combinatoria Repeticao",
      "title": "Combinações com repetição",
      "description": "Estudo de combinações com repetição com foco em problemas de raciocínio e aplicações no formato do Canguru.",
      "subtopics": [
        "combinações com repetição",
        "organização de casos"
      ],
      "learningObjectives": [
        "Compreender os conceitos centrais de combinações com repetição.",
        "Resolver problemas do Canguru que combinem combinações com repetição, organização de casos.",
        "Explicar a estratégia usada e conferir as restrições do problema."
      ],
      "prerequisites": [
        "Leitura atenta do enunciado",
        "Operações compatíveis com o nível"
      ],
      "theoryOutline": [
        "Conceito e vocabulário: combinações com repetição",
        "Conceito e vocabulário: organização de casos"
      ],
      "formulas": [],
      "commonErrors": [
        "Aplicar uma regra sem verificar todas as condições do enunciado.",
        "Contar o mesmo caso mais de uma vez ou ignorar possibilidades.",
        "Aceitar uma resposta sem conferir se ela satisfaz as restrições."
      ],
      "keywords": [
        "Combinações com repetição",
        "combinações com repetição",
        "organização de casos"
      ],
      "requiresUpdate": false,
      "reviewFrequencyMonths": null,
      "status": "revisado",
      "sourceTopicIds": [
        "J-05"
      ],
      "adaptations": [
        {
          "levelId": "canguru_j",
          "originProgram": "oficial_nivel_atual",
          "treatment": "novo",
          "importance": "essencial",
          "difficulty": 5,
          "order": 39,
          "theoryMinutes": 75,
          "exerciseMinutes": 120,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 12,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_s",
          "originProgram": "oficial_herdado",
          "treatment": "aprofundamento",
          "importance": "essencial",
          "difficulty": 5,
          "order": 39,
          "theoryMinutes": 40,
          "exerciseMinutes": 95,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 10,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        }
      ],
      "sources": [
        {
          "id": "canguru-programa-p3",
          "type": "programa_oficial",
          "title": "Conteúdo Programático do Concurso Canguru",
          "institution": "Canguru de Matemática Brasil / UpMat Educacional",
          "editionYear": null,
          "pageSection": "Página 3",
          "url": "https://e1f593d1-358f-4280-bf47-50136b7f401f.filesusr.com/ugd/7aad12_e4850730edb3462799273e3dcfb75447.pdf",
          "consultedAt": "2026-10-21",
          "official": true,
          "evidence": "mencao_direta"
        }
      ]
    },
    {
      "id": "canguru-j-geometria-euclidiana",
      "olympiadId": "canguru",
      "areaId": "canguru-geometria",
      "macrotheme": "Geometria plana",
      "moduleId": "canguru-geometria-euclidiana",
      "moduleTitle": "Geometria Euclidiana",
      "title": "Geometria euclidiana plana geral",
      "description": "Estudo de geometria euclidiana plana geral com foco em problemas de raciocínio e aplicações no formato do Canguru.",
      "subtopics": [
        "triângulos e círculos",
        "semelhança",
        "ângulos e áreas",
        "construções auxiliares"
      ],
      "learningObjectives": [
        "Compreender os conceitos centrais de geometria euclidiana plana geral.",
        "Resolver problemas do Canguru que combinem triângulos e círculos, semelhança, ângulos e áreas.",
        "Explicar a estratégia usada e conferir as restrições do problema."
      ],
      "prerequisites": [
        "Leitura atenta do enunciado",
        "Operações compatíveis com o nível"
      ],
      "theoryOutline": [
        "Conceito e vocabulário: triângulos e círculos",
        "Conceito e vocabulário: semelhança",
        "Conceito e vocabulário: ângulos e áreas",
        "Conceito e vocabulário: construções auxiliares"
      ],
      "formulas": [],
      "commonErrors": [
        "Aplicar uma regra sem verificar todas as condições do enunciado.",
        "Contar o mesmo caso mais de uma vez ou ignorar possibilidades.",
        "Aceitar uma resposta sem conferir se ela satisfaz as restrições."
      ],
      "keywords": [
        "Geometria euclidiana plana geral",
        "triângulos e círculos",
        "semelhança",
        "ângulos e áreas",
        "construções auxiliares"
      ],
      "requiresUpdate": false,
      "reviewFrequencyMonths": null,
      "status": "revisado",
      "sourceTopicIds": [
        "J-06"
      ],
      "adaptations": [
        {
          "levelId": "canguru_j",
          "originProgram": "oficial_nivel_atual",
          "treatment": "novo",
          "importance": "essencial",
          "difficulty": 5,
          "order": 40,
          "theoryMinutes": 90,
          "exerciseMinutes": 135,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 14,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_s",
          "originProgram": "oficial_herdado",
          "treatment": "aprofundamento",
          "importance": "essencial",
          "difficulty": 5,
          "order": 40,
          "theoryMinutes": 50,
          "exerciseMinutes": 110,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 11,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        }
      ],
      "sources": [
        {
          "id": "canguru-programa-p3",
          "type": "programa_oficial",
          "title": "Conteúdo Programático do Concurso Canguru",
          "institution": "Canguru de Matemática Brasil / UpMat Educacional",
          "editionYear": null,
          "pageSection": "Página 3",
          "url": "https://e1f593d1-358f-4280-bf47-50136b7f401f.filesusr.com/ugd/7aad12_e4850730edb3462799273e3dcfb75447.pdf",
          "consultedAt": "2026-10-21",
          "official": true,
          "evidence": "mencao_direta"
        }
      ]
    },
    {
      "id": "canguru-j-geometria-analitica",
      "olympiadId": "canguru",
      "areaId": "canguru-dados",
      "macrotheme": "Geometria analítica",
      "moduleId": "canguru-dados-analitica",
      "moduleTitle": "Dados Analitica",
      "title": "Geometria analítica plana",
      "description": "Estudo de geometria analítica plana com foco em problemas de raciocínio e aplicações no formato do Canguru.",
      "subtopics": [
        "retas",
        "distâncias",
        "circunferências",
        "coordenadas"
      ],
      "learningObjectives": [
        "Compreender os conceitos centrais de geometria analítica plana.",
        "Resolver problemas do Canguru que combinem retas, distâncias, circunferências.",
        "Explicar a estratégia usada e conferir as restrições do problema."
      ],
      "prerequisites": [
        "Leitura atenta do enunciado",
        "Operações compatíveis com o nível"
      ],
      "theoryOutline": [
        "Conceito e vocabulário: retas",
        "Conceito e vocabulário: distâncias",
        "Conceito e vocabulário: circunferências",
        "Conceito e vocabulário: coordenadas"
      ],
      "formulas": [],
      "commonErrors": [
        "Aplicar uma regra sem verificar todas as condições do enunciado.",
        "Contar o mesmo caso mais de uma vez ou ignorar possibilidades.",
        "Aceitar uma resposta sem conferir se ela satisfaz as restrições."
      ],
      "keywords": [
        "Geometria analítica plana",
        "retas",
        "distâncias",
        "circunferências",
        "coordenadas"
      ],
      "requiresUpdate": false,
      "reviewFrequencyMonths": null,
      "status": "revisado",
      "sourceTopicIds": [
        "J-07"
      ],
      "adaptations": [
        {
          "levelId": "canguru_j",
          "originProgram": "oficial_nivel_atual",
          "treatment": "novo",
          "importance": "essencial",
          "difficulty": 4,
          "order": 41,
          "theoryMinutes": 90,
          "exerciseMinutes": 120,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 12,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        },
        {
          "levelId": "canguru_s",
          "originProgram": "oficial_herdado",
          "treatment": "aprofundamento",
          "importance": "essencial",
          "difficulty": 5,
          "order": 41,
          "theoryMinutes": 50,
          "exerciseMinutes": 95,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 10,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        }
      ],
      "sources": [
        {
          "id": "canguru-programa-p3",
          "type": "programa_oficial",
          "title": "Conteúdo Programático do Concurso Canguru",
          "institution": "Canguru de Matemática Brasil / UpMat Educacional",
          "editionYear": null,
          "pageSection": "Página 3",
          "url": "https://e1f593d1-358f-4280-bf47-50136b7f401f.filesusr.com/ugd/7aad12_e4850730edb3462799273e3dcfb75447.pdf",
          "consultedAt": "2026-10-21",
          "official": true,
          "evidence": "mencao_direta"
        }
      ]
    },
    {
      "id": "canguru-s-geometria-espacial",
      "olympiadId": "canguru",
      "areaId": "canguru-geometria",
      "macrotheme": "Geometria avançada",
      "moduleId": "canguru-geometria-espacial",
      "moduleTitle": "Geometria Espacial",
      "title": "Geometria euclidiana plana e espacial",
      "description": "Estudo de geometria euclidiana plana e espacial com foco em problemas de raciocínio e aplicações no formato do Canguru.",
      "subtopics": [
        "geometria plana avançada",
        "poliedros",
        "áreas e volumes",
        "relações espaciais"
      ],
      "learningObjectives": [
        "Compreender os conceitos centrais de geometria euclidiana plana e espacial.",
        "Resolver problemas do Canguru que combinem geometria plana avançada, poliedros, áreas e volumes.",
        "Explicar a estratégia usada e conferir as restrições do problema."
      ],
      "prerequisites": [
        "Leitura atenta do enunciado",
        "Operações compatíveis com o nível"
      ],
      "theoryOutline": [
        "Conceito e vocabulário: geometria plana avançada",
        "Conceito e vocabulário: poliedros",
        "Conceito e vocabulário: áreas e volumes",
        "Conceito e vocabulário: relações espaciais"
      ],
      "formulas": [],
      "commonErrors": [
        "Aplicar uma regra sem verificar todas as condições do enunciado.",
        "Contar o mesmo caso mais de uma vez ou ignorar possibilidades.",
        "Aceitar uma resposta sem conferir se ela satisfaz as restrições."
      ],
      "keywords": [
        "Geometria euclidiana plana e espacial",
        "geometria plana avançada",
        "poliedros",
        "áreas e volumes",
        "relações espaciais"
      ],
      "requiresUpdate": false,
      "reviewFrequencyMonths": null,
      "status": "revisado",
      "sourceTopicIds": [
        "S-01"
      ],
      "adaptations": [
        {
          "levelId": "canguru_s",
          "originProgram": "oficial_nivel_atual",
          "treatment": "novo",
          "importance": "essencial",
          "difficulty": 5,
          "order": 42,
          "theoryMinutes": 90,
          "exerciseMinutes": 150,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 15,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        }
      ],
      "sources": [
        {
          "id": "canguru-programa-p3",
          "type": "programa_oficial",
          "title": "Conteúdo Programático do Concurso Canguru",
          "institution": "Canguru de Matemática Brasil / UpMat Educacional",
          "editionYear": null,
          "pageSection": "Página 3",
          "url": "https://e1f593d1-358f-4280-bf47-50136b7f401f.filesusr.com/ugd/7aad12_e4850730edb3462799273e3dcfb75447.pdf",
          "consultedAt": "2026-10-21",
          "official": true,
          "evidence": "mencao_direta"
        }
      ]
    },
    {
      "id": "canguru-s-analitica-espacial",
      "olympiadId": "canguru",
      "areaId": "canguru-dados",
      "macrotheme": "Geometria analítica",
      "moduleId": "canguru-dados-espacial",
      "moduleTitle": "Dados Espacial",
      "title": "Geometria analítica espacial",
      "description": "Estudo de geometria analítica espacial com foco em problemas de raciocínio e aplicações no formato do Canguru.",
      "subtopics": [
        "pontos, retas e planos no espaço",
        "distâncias e ângulos"
      ],
      "learningObjectives": [
        "Compreender os conceitos centrais de geometria analítica espacial.",
        "Resolver problemas do Canguru que combinem pontos, retas e planos no espaço, distâncias e ângulos.",
        "Explicar a estratégia usada e conferir as restrições do problema."
      ],
      "prerequisites": [
        "Leitura atenta do enunciado",
        "Operações compatíveis com o nível"
      ],
      "theoryOutline": [
        "Conceito e vocabulário: pontos, retas e planos no espaço",
        "Conceito e vocabulário: distâncias e ângulos"
      ],
      "formulas": [],
      "commonErrors": [
        "Aplicar uma regra sem verificar todas as condições do enunciado.",
        "Contar o mesmo caso mais de uma vez ou ignorar possibilidades.",
        "Aceitar uma resposta sem conferir se ela satisfaz as restrições."
      ],
      "keywords": [
        "Geometria analítica espacial",
        "pontos, retas e planos no espaço",
        "distâncias e ângulos"
      ],
      "requiresUpdate": false,
      "reviewFrequencyMonths": null,
      "status": "revisado",
      "sourceTopicIds": [
        "S-02"
      ],
      "adaptations": [
        {
          "levelId": "canguru_s",
          "originProgram": "oficial_nivel_atual",
          "treatment": "novo",
          "importance": "essencial",
          "difficulty": 5,
          "order": 43,
          "theoryMinutes": 90,
          "exerciseMinutes": 120,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 12,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        }
      ],
      "sources": [
        {
          "id": "canguru-programa-p3",
          "type": "programa_oficial",
          "title": "Conteúdo Programático do Concurso Canguru",
          "institution": "Canguru de Matemática Brasil / UpMat Educacional",
          "editionYear": null,
          "pageSection": "Página 3",
          "url": "https://e1f593d1-358f-4280-bf47-50136b7f401f.filesusr.com/ugd/7aad12_e4850730edb3462799273e3dcfb75447.pdf",
          "consultedAt": "2026-10-21",
          "official": true,
          "evidence": "mencao_direta"
        }
      ]
    },
    {
      "id": "canguru-s-trigonometria",
      "olympiadId": "canguru",
      "areaId": "canguru-geometria",
      "macrotheme": "Trigonometria",
      "moduleId": "canguru-geometria-trigonometria",
      "moduleTitle": "Geometria Trigonometria",
      "title": "Trigonometria aplicada à geometria",
      "description": "Estudo de trigonometria aplicada à geometria com foco em problemas de raciocínio e aplicações no formato do Canguru.",
      "subtopics": [
        "relações trigonométricas",
        "leis dos senos e cossenos",
        "aplicações geométricas"
      ],
      "learningObjectives": [
        "Compreender os conceitos centrais de trigonometria aplicada à geometria.",
        "Resolver problemas do Canguru que combinem relações trigonométricas, leis dos senos e cossenos, aplicações geométricas.",
        "Explicar a estratégia usada e conferir as restrições do problema."
      ],
      "prerequisites": [
        "Leitura atenta do enunciado",
        "Operações compatíveis com o nível"
      ],
      "theoryOutline": [
        "Conceito e vocabulário: relações trigonométricas",
        "Conceito e vocabulário: leis dos senos e cossenos",
        "Conceito e vocabulário: aplicações geométricas"
      ],
      "formulas": [],
      "commonErrors": [
        "Aplicar uma regra sem verificar todas as condições do enunciado.",
        "Contar o mesmo caso mais de uma vez ou ignorar possibilidades.",
        "Aceitar uma resposta sem conferir se ela satisfaz as restrições."
      ],
      "keywords": [
        "Trigonometria aplicada à geometria",
        "relações trigonométricas",
        "leis dos senos e cossenos",
        "aplicações geométricas"
      ],
      "requiresUpdate": false,
      "reviewFrequencyMonths": null,
      "status": "revisado",
      "sourceTopicIds": [
        "S-03"
      ],
      "adaptations": [
        {
          "levelId": "canguru_s",
          "originProgram": "oficial_nivel_atual",
          "treatment": "novo",
          "importance": "essencial",
          "difficulty": 5,
          "order": 44,
          "theoryMinutes": 90,
          "exerciseMinutes": 135,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 14,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        }
      ],
      "sources": [
        {
          "id": "canguru-programa-p3",
          "type": "programa_oficial",
          "title": "Conteúdo Programático do Concurso Canguru",
          "institution": "Canguru de Matemática Brasil / UpMat Educacional",
          "editionYear": null,
          "pageSection": "Página 3",
          "url": "https://e1f593d1-358f-4280-bf47-50136b7f401f.filesusr.com/ugd/7aad12_e4850730edb3462799273e3dcfb75447.pdf",
          "consultedAt": "2026-10-21",
          "official": true,
          "evidence": "mencao_direta"
        }
      ]
    },
    {
      "id": "canguru-s-combinatoria",
      "olympiadId": "canguru",
      "areaId": "canguru-combinatoria",
      "macrotheme": "Combinatória geral",
      "moduleId": "canguru-combinatoria-geral",
      "moduleTitle": "Combinatoria Geral",
      "title": "Combinatória geral",
      "description": "Estudo de combinatória geral com foco em problemas de raciocínio e aplicações no formato do Canguru.",
      "subtopics": [
        "permutações",
        "arranjos",
        "combinações",
        "inclusão-exclusão",
        "contagens com restrições"
      ],
      "learningObjectives": [
        "Compreender os conceitos centrais de combinatória geral.",
        "Resolver problemas do Canguru que combinem permutações, arranjos, combinações.",
        "Explicar a estratégia usada e conferir as restrições do problema."
      ],
      "prerequisites": [
        "Leitura atenta do enunciado",
        "Operações compatíveis com o nível"
      ],
      "theoryOutline": [
        "Conceito e vocabulário: permutações",
        "Conceito e vocabulário: arranjos",
        "Conceito e vocabulário: combinações",
        "Conceito e vocabulário: inclusão-exclusão",
        "Conceito e vocabulário: contagens com restrições"
      ],
      "formulas": [],
      "commonErrors": [
        "Aplicar uma regra sem verificar todas as condições do enunciado.",
        "Contar o mesmo caso mais de uma vez ou ignorar possibilidades.",
        "Aceitar uma resposta sem conferir se ela satisfaz as restrições."
      ],
      "keywords": [
        "Combinatória geral",
        "permutações",
        "arranjos",
        "combinações",
        "inclusão-exclusão"
      ],
      "requiresUpdate": false,
      "reviewFrequencyMonths": null,
      "status": "revisado",
      "sourceTopicIds": [
        "S-04"
      ],
      "adaptations": [
        {
          "levelId": "canguru_s",
          "originProgram": "oficial_nivel_atual",
          "treatment": "novo",
          "importance": "essencial",
          "difficulty": 5,
          "order": 45,
          "theoryMinutes": 90,
          "exerciseMinutes": 150,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 15,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        }
      ],
      "sources": [
        {
          "id": "canguru-programa-p3",
          "type": "programa_oficial",
          "title": "Conteúdo Programático do Concurso Canguru",
          "institution": "Canguru de Matemática Brasil / UpMat Educacional",
          "editionYear": null,
          "pageSection": "Página 3",
          "url": "https://e1f593d1-358f-4280-bf47-50136b7f401f.filesusr.com/ugd/7aad12_e4850730edb3462799273e3dcfb75447.pdf",
          "consultedAt": "2026-10-21",
          "official": true,
          "evidence": "mencao_direta"
        }
      ]
    },
    {
      "id": "canguru-s-probabilidade",
      "olympiadId": "canguru",
      "areaId": "canguru-combinatoria",
      "macrotheme": "Probabilidade",
      "moduleId": "canguru-combinatoria-probabilidade",
      "moduleTitle": "Combinatoria Probabilidade",
      "title": "Probabilidade",
      "description": "Estudo de probabilidade com foco em problemas de raciocínio e aplicações no formato do Canguru.",
      "subtopics": [
        "espaço amostral",
        "eventos",
        "probabilidade condicional",
        "contagem aplicada"
      ],
      "learningObjectives": [
        "Compreender os conceitos centrais de probabilidade.",
        "Resolver problemas do Canguru que combinem espaço amostral, eventos, probabilidade condicional.",
        "Explicar a estratégia usada e conferir as restrições do problema."
      ],
      "prerequisites": [
        "Leitura atenta do enunciado",
        "Operações compatíveis com o nível"
      ],
      "theoryOutline": [
        "Conceito e vocabulário: espaço amostral",
        "Conceito e vocabulário: eventos",
        "Conceito e vocabulário: probabilidade condicional",
        "Conceito e vocabulário: contagem aplicada"
      ],
      "formulas": [],
      "commonErrors": [
        "Aplicar uma regra sem verificar todas as condições do enunciado.",
        "Contar o mesmo caso mais de uma vez ou ignorar possibilidades.",
        "Aceitar uma resposta sem conferir se ela satisfaz as restrições."
      ],
      "keywords": [
        "Probabilidade",
        "espaço amostral",
        "eventos",
        "probabilidade condicional",
        "contagem aplicada"
      ],
      "requiresUpdate": false,
      "reviewFrequencyMonths": null,
      "status": "revisado",
      "sourceTopicIds": [
        "S-05"
      ],
      "adaptations": [
        {
          "levelId": "canguru_s",
          "originProgram": "oficial_nivel_atual",
          "treatment": "novo",
          "importance": "essencial",
          "difficulty": 5,
          "order": 46,
          "theoryMinutes": 90,
          "exerciseMinutes": 135,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 14,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        }
      ],
      "sources": [
        {
          "id": "canguru-programa-p3",
          "type": "programa_oficial",
          "title": "Conteúdo Programático do Concurso Canguru",
          "institution": "Canguru de Matemática Brasil / UpMat Educacional",
          "editionYear": null,
          "pageSection": "Página 3",
          "url": "https://e1f593d1-358f-4280-bf47-50136b7f401f.filesusr.com/ugd/7aad12_e4850730edb3462799273e3dcfb75447.pdf",
          "consultedAt": "2026-10-21",
          "official": true,
          "evidence": "mencao_direta"
        }
      ]
    },
    {
      "id": "canguru-s-logica",
      "olympiadId": "canguru",
      "areaId": "canguru-logica",
      "macrotheme": "Lógica avançada",
      "moduleId": "canguru-logica-matematica",
      "moduleTitle": "Logica Matematica",
      "title": "Lógica matemática e problemas de lógica",
      "description": "Estudo de lógica matemática e problemas de lógica com foco em problemas de raciocínio e aplicações no formato do Canguru.",
      "subtopics": [
        "proposições e argumentos",
        "invariantes",
        "estratégias de prova"
      ],
      "learningObjectives": [
        "Compreender os conceitos centrais de lógica matemática e problemas de lógica.",
        "Resolver problemas do Canguru que combinem proposições e argumentos, invariantes, estratégias de prova.",
        "Explicar a estratégia usada e conferir as restrições do problema."
      ],
      "prerequisites": [
        "Leitura atenta do enunciado",
        "Operações compatíveis com o nível"
      ],
      "theoryOutline": [
        "Conceito e vocabulário: proposições e argumentos",
        "Conceito e vocabulário: invariantes",
        "Conceito e vocabulário: estratégias de prova"
      ],
      "formulas": [],
      "commonErrors": [
        "Aplicar uma regra sem verificar todas as condições do enunciado.",
        "Contar o mesmo caso mais de uma vez ou ignorar possibilidades.",
        "Aceitar uma resposta sem conferir se ela satisfaz as restrições."
      ],
      "keywords": [
        "Lógica matemática e problemas de lógica",
        "proposições e argumentos",
        "invariantes",
        "estratégias de prova"
      ],
      "requiresUpdate": false,
      "reviewFrequencyMonths": null,
      "status": "revisado",
      "sourceTopicIds": [
        "S-06"
      ],
      "adaptations": [
        {
          "levelId": "canguru_s",
          "originProgram": "oficial_nivel_atual",
          "treatment": "novo",
          "importance": "essencial",
          "difficulty": 5,
          "order": 47,
          "theoryMinutes": 75,
          "exerciseMinutes": 120,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 12,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        }
      ],
      "sources": [
        {
          "id": "canguru-programa-p3",
          "type": "programa_oficial",
          "title": "Conteúdo Programático do Concurso Canguru",
          "institution": "Canguru de Matemática Brasil / UpMat Educacional",
          "editionYear": null,
          "pageSection": "Página 3",
          "url": "https://e1f593d1-358f-4280-bf47-50136b7f401f.filesusr.com/ugd/7aad12_e4850730edb3462799273e3dcfb75447.pdf",
          "consultedAt": "2026-10-21",
          "official": true,
          "evidence": "mencao_direta"
        }
      ]
    },
    {
      "id": "canguru-s-equacoes-algebricas",
      "olympiadId": "canguru",
      "areaId": "canguru-algebra",
      "macrotheme": "Álgebra avançada",
      "moduleId": "canguru-algebra-equacoes",
      "moduleTitle": "Algebra Equacoes",
      "title": "Equações algébricas",
      "description": "Estudo de equações algébricas com foco em problemas de raciocínio e aplicações no formato do Canguru.",
      "subtopics": [
        "raízes e coeficientes",
        "fatoração",
        "equações polinomiais"
      ],
      "learningObjectives": [
        "Compreender os conceitos centrais de equações algébricas.",
        "Resolver problemas do Canguru que combinem raízes e coeficientes, fatoração, equações polinomiais.",
        "Explicar a estratégia usada e conferir as restrições do problema."
      ],
      "prerequisites": [
        "Leitura atenta do enunciado",
        "Operações compatíveis com o nível"
      ],
      "theoryOutline": [
        "Conceito e vocabulário: raízes e coeficientes",
        "Conceito e vocabulário: fatoração",
        "Conceito e vocabulário: equações polinomiais"
      ],
      "formulas": [],
      "commonErrors": [
        "Aplicar uma regra sem verificar todas as condições do enunciado.",
        "Contar o mesmo caso mais de uma vez ou ignorar possibilidades.",
        "Aceitar uma resposta sem conferir se ela satisfaz as restrições."
      ],
      "keywords": [
        "Equações algébricas",
        "raízes e coeficientes",
        "fatoração",
        "equações polinomiais"
      ],
      "requiresUpdate": false,
      "reviewFrequencyMonths": null,
      "status": "revisado",
      "sourceTopicIds": [
        "S-07"
      ],
      "adaptations": [
        {
          "levelId": "canguru_s",
          "originProgram": "oficial_nivel_atual",
          "treatment": "novo",
          "importance": "essencial",
          "difficulty": 5,
          "order": 48,
          "theoryMinutes": 90,
          "exerciseMinutes": 120,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 12,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva",
            "interpretação de imagem"
          ],
          "languageAdaptation": "Usar linguagem matemática progressivamente formal, sem perder a análise estratégica.",
          "masteryCriteria": "Acertar pelo menos 75% de uma lista mista e justificar a estratégia utilizada.",
          "note": "Tempo pedagógico estimado pela Via Olímpica; não é duração oficial."
        }
      ],
      "sources": [
        {
          "id": "canguru-programa-p3",
          "type": "programa_oficial",
          "title": "Conteúdo Programático do Concurso Canguru",
          "institution": "Canguru de Matemática Brasil / UpMat Educacional",
          "editionYear": null,
          "pageSection": "Página 3",
          "url": "https://e1f593d1-358f-4280-bf47-50136b7f401f.filesusr.com/ugd/7aad12_e4850730edb3462799273e3dcfb75447.pdf",
          "consultedAt": "2026-10-21",
          "official": true,
          "evidence": "mencao_direta"
        }
      ]
    },
    {
      "id": "canguru-estrategia-listagem-casos",
      "olympiadId": "canguru",
      "areaId": "canguru-logica",
      "macrotheme": "Estratégias transversais",
      "moduleId": "canguru-logica-estrategias",
      "moduleTitle": "Estratégias de resolução",
      "title": "Listagem organizada e divisão em casos",
      "description": "Estratégia transversal para organizar o raciocínio em problemas do Canguru: listagem organizada e divisão em casos.",
      "subtopics": [
        "listar possibilidades",
        "separar casos sem sobreposição",
        "verificar completude"
      ],
      "learningObjectives": [
        "Aplicar listagem organizada e divisão em casos em problemas de diferentes áreas.",
        "Escolher quando a estratégia é útil.",
        "Conferir se o raciocínio cobre todas as possibilidades."
      ],
      "prerequisites": [
        "Leitura atenta",
        "Conhecimentos do problema estudado"
      ],
      "theoryOutline": [
        "listar possibilidades",
        "separar casos sem sobreposição",
        "verificar completude"
      ],
      "formulas": [],
      "commonErrors": [
        "Usar a estratégia sem justificar por que ela cobre todos os casos.",
        "Confundir um padrão observado com uma prova."
      ],
      "keywords": [
        "Listagem organizada e divisão em casos",
        "listar possibilidades",
        "separar casos sem sobreposição",
        "verificar completude"
      ],
      "requiresUpdate": false,
      "reviewFrequencyMonths": null,
      "status": "revisado",
      "sourceTopicIds": [],
      "adaptations": [
        {
          "levelId": "canguru_e",
          "originProgram": "complemento_via_olimpica",
          "treatment": "novo",
          "importance": "importante",
          "difficulty": 2,
          "order": 49,
          "theoryMinutes": 30,
          "exerciseMinutes": 60,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 8,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva"
          ],
          "languageAdaptation": "Introduzir com exemplos curtos e ampliar gradualmente a formalização.",
          "masteryCriteria": "Escolher e aplicar a estratégia corretamente em pelo menos 75% dos problemas propostos.",
          "note": "Complemento pedagógico, não tópico oficial isolado."
        },
        {
          "levelId": "canguru_b",
          "originProgram": "complemento_via_olimpica",
          "treatment": "aprofundamento",
          "importance": "importante",
          "difficulty": 2,
          "order": 49,
          "theoryMinutes": 30,
          "exerciseMinutes": 60,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 8,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva"
          ],
          "languageAdaptation": "Introduzir com exemplos curtos e ampliar gradualmente a formalização.",
          "masteryCriteria": "Escolher e aplicar a estratégia corretamente em pelo menos 75% dos problemas propostos.",
          "note": "Complemento pedagógico, não tópico oficial isolado."
        },
        {
          "levelId": "canguru_c",
          "originProgram": "complemento_via_olimpica",
          "treatment": "aprofundamento",
          "importance": "importante",
          "difficulty": 3,
          "order": 49,
          "theoryMinutes": 30,
          "exerciseMinutes": 75,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 8,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva"
          ],
          "languageAdaptation": "Introduzir com exemplos curtos e ampliar gradualmente a formalização.",
          "masteryCriteria": "Escolher e aplicar a estratégia corretamente em pelo menos 75% dos problemas propostos.",
          "note": "Complemento pedagógico, não tópico oficial isolado."
        },
        {
          "levelId": "canguru_j",
          "originProgram": "complemento_via_olimpica",
          "treatment": "aprofundamento",
          "importance": "importante",
          "difficulty": 3,
          "order": 49,
          "theoryMinutes": 30,
          "exerciseMinutes": 75,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 8,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva"
          ],
          "languageAdaptation": "Introduzir com exemplos curtos e ampliar gradualmente a formalização.",
          "masteryCriteria": "Escolher e aplicar a estratégia corretamente em pelo menos 75% dos problemas propostos.",
          "note": "Complemento pedagógico, não tópico oficial isolado."
        },
        {
          "levelId": "canguru_s",
          "originProgram": "complemento_via_olimpica",
          "treatment": "aprofundamento",
          "importance": "importante",
          "difficulty": 4,
          "order": 49,
          "theoryMinutes": 30,
          "exerciseMinutes": 75,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 8,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva"
          ],
          "languageAdaptation": "Introduzir com exemplos curtos e ampliar gradualmente a formalização.",
          "masteryCriteria": "Escolher e aplicar a estratégia corretamente em pelo menos 75% dos problemas propostos.",
          "note": "Complemento pedagógico, não tópico oficial isolado."
        }
      ],
      "sources": [
        {
          "id": "canguru-estrategias-via",
          "type": "material_complementar",
          "title": "Estratégias transversais da Via Olímpica",
          "institution": "Via Olímpica",
          "editionYear": 2026,
          "pageSection": "Especificação pedagógica do projeto",
          "url": "",
          "consultedAt": "2026-10-21",
          "official": false,
          "evidence": "desdobramento_didatico"
        }
      ]
    },
    {
      "id": "canguru-estrategia-paridade-restos",
      "olympiadId": "canguru",
      "areaId": "canguru-logica",
      "macrotheme": "Estratégias transversais",
      "moduleId": "canguru-logica-estrategias",
      "moduleTitle": "Estratégias de resolução",
      "title": "Paridade, restos e invariantes",
      "description": "Estratégia transversal para organizar o raciocínio em problemas do Canguru: paridade, restos e invariantes.",
      "subtopics": [
        "paridade",
        "análise de restos",
        "quantidades invariantes"
      ],
      "learningObjectives": [
        "Aplicar paridade, restos e invariantes em problemas de diferentes áreas.",
        "Escolher quando a estratégia é útil.",
        "Conferir se o raciocínio cobre todas as possibilidades."
      ],
      "prerequisites": [
        "Leitura atenta",
        "Conhecimentos do problema estudado"
      ],
      "theoryOutline": [
        "paridade",
        "análise de restos",
        "quantidades invariantes"
      ],
      "formulas": [],
      "commonErrors": [
        "Usar a estratégia sem justificar por que ela cobre todos os casos.",
        "Confundir um padrão observado com uma prova."
      ],
      "keywords": [
        "Paridade, restos e invariantes",
        "paridade",
        "análise de restos",
        "quantidades invariantes"
      ],
      "requiresUpdate": false,
      "reviewFrequencyMonths": null,
      "status": "revisado",
      "sourceTopicIds": [],
      "adaptations": [
        {
          "levelId": "canguru_e",
          "originProgram": "complemento_via_olimpica",
          "treatment": "novo",
          "importance": "importante",
          "difficulty": 2,
          "order": 50,
          "theoryMinutes": 30,
          "exerciseMinutes": 60,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 8,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva"
          ],
          "languageAdaptation": "Introduzir com exemplos curtos e ampliar gradualmente a formalização.",
          "masteryCriteria": "Escolher e aplicar a estratégia corretamente em pelo menos 75% dos problemas propostos.",
          "note": "Complemento pedagógico, não tópico oficial isolado."
        },
        {
          "levelId": "canguru_b",
          "originProgram": "complemento_via_olimpica",
          "treatment": "aprofundamento",
          "importance": "importante",
          "difficulty": 2,
          "order": 50,
          "theoryMinutes": 30,
          "exerciseMinutes": 60,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 8,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva"
          ],
          "languageAdaptation": "Introduzir com exemplos curtos e ampliar gradualmente a formalização.",
          "masteryCriteria": "Escolher e aplicar a estratégia corretamente em pelo menos 75% dos problemas propostos.",
          "note": "Complemento pedagógico, não tópico oficial isolado."
        },
        {
          "levelId": "canguru_c",
          "originProgram": "complemento_via_olimpica",
          "treatment": "aprofundamento",
          "importance": "importante",
          "difficulty": 3,
          "order": 50,
          "theoryMinutes": 30,
          "exerciseMinutes": 75,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 8,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva"
          ],
          "languageAdaptation": "Introduzir com exemplos curtos e ampliar gradualmente a formalização.",
          "masteryCriteria": "Escolher e aplicar a estratégia corretamente em pelo menos 75% dos problemas propostos.",
          "note": "Complemento pedagógico, não tópico oficial isolado."
        },
        {
          "levelId": "canguru_j",
          "originProgram": "complemento_via_olimpica",
          "treatment": "aprofundamento",
          "importance": "importante",
          "difficulty": 3,
          "order": 50,
          "theoryMinutes": 30,
          "exerciseMinutes": 75,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 8,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva"
          ],
          "languageAdaptation": "Introduzir com exemplos curtos e ampliar gradualmente a formalização.",
          "masteryCriteria": "Escolher e aplicar a estratégia corretamente em pelo menos 75% dos problemas propostos.",
          "note": "Complemento pedagógico, não tópico oficial isolado."
        },
        {
          "levelId": "canguru_s",
          "originProgram": "complemento_via_olimpica",
          "treatment": "aprofundamento",
          "importance": "importante",
          "difficulty": 4,
          "order": 50,
          "theoryMinutes": 30,
          "exerciseMinutes": 75,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 8,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva"
          ],
          "languageAdaptation": "Introduzir com exemplos curtos e ampliar gradualmente a formalização.",
          "masteryCriteria": "Escolher e aplicar a estratégia corretamente em pelo menos 75% dos problemas propostos.",
          "note": "Complemento pedagógico, não tópico oficial isolado."
        }
      ],
      "sources": [
        {
          "id": "canguru-estrategias-via",
          "type": "material_complementar",
          "title": "Estratégias transversais da Via Olímpica",
          "institution": "Via Olímpica",
          "editionYear": 2026,
          "pageSection": "Especificação pedagógica do projeto",
          "url": "",
          "consultedAt": "2026-10-21",
          "official": false,
          "evidence": "desdobramento_didatico"
        }
      ]
    },
    {
      "id": "canguru-estrategia-simetria-extremos",
      "olympiadId": "canguru",
      "areaId": "canguru-logica",
      "macrotheme": "Estratégias transversais",
      "moduleId": "canguru-logica-estrategias",
      "moduleTitle": "Estratégias de resolução",
      "title": "Simetria, extremos e casos pequenos",
      "description": "Estratégia transversal para organizar o raciocínio em problemas do Canguru: simetria, extremos e casos pequenos.",
      "subtopics": [
        "simetria",
        "comparação de extremos",
        "teste de casos pequenos"
      ],
      "learningObjectives": [
        "Aplicar simetria, extremos e casos pequenos em problemas de diferentes áreas.",
        "Escolher quando a estratégia é útil.",
        "Conferir se o raciocínio cobre todas as possibilidades."
      ],
      "prerequisites": [
        "Leitura atenta",
        "Conhecimentos do problema estudado"
      ],
      "theoryOutline": [
        "simetria",
        "comparação de extremos",
        "teste de casos pequenos"
      ],
      "formulas": [],
      "commonErrors": [
        "Usar a estratégia sem justificar por que ela cobre todos os casos.",
        "Confundir um padrão observado com uma prova."
      ],
      "keywords": [
        "Simetria, extremos e casos pequenos",
        "simetria",
        "comparação de extremos",
        "teste de casos pequenos"
      ],
      "requiresUpdate": false,
      "reviewFrequencyMonths": null,
      "status": "revisado",
      "sourceTopicIds": [],
      "adaptations": [
        {
          "levelId": "canguru_e",
          "originProgram": "complemento_via_olimpica",
          "treatment": "novo",
          "importance": "importante",
          "difficulty": 2,
          "order": 51,
          "theoryMinutes": 30,
          "exerciseMinutes": 60,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 8,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva"
          ],
          "languageAdaptation": "Introduzir com exemplos curtos e ampliar gradualmente a formalização.",
          "masteryCriteria": "Escolher e aplicar a estratégia corretamente em pelo menos 75% dos problemas propostos.",
          "note": "Complemento pedagógico, não tópico oficial isolado."
        },
        {
          "levelId": "canguru_b",
          "originProgram": "complemento_via_olimpica",
          "treatment": "aprofundamento",
          "importance": "importante",
          "difficulty": 2,
          "order": 51,
          "theoryMinutes": 30,
          "exerciseMinutes": 60,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 8,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva"
          ],
          "languageAdaptation": "Introduzir com exemplos curtos e ampliar gradualmente a formalização.",
          "masteryCriteria": "Escolher e aplicar a estratégia corretamente em pelo menos 75% dos problemas propostos.",
          "note": "Complemento pedagógico, não tópico oficial isolado."
        },
        {
          "levelId": "canguru_c",
          "originProgram": "complemento_via_olimpica",
          "treatment": "aprofundamento",
          "importance": "importante",
          "difficulty": 3,
          "order": 51,
          "theoryMinutes": 30,
          "exerciseMinutes": 75,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 8,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva"
          ],
          "languageAdaptation": "Introduzir com exemplos curtos e ampliar gradualmente a formalização.",
          "masteryCriteria": "Escolher e aplicar a estratégia corretamente em pelo menos 75% dos problemas propostos.",
          "note": "Complemento pedagógico, não tópico oficial isolado."
        },
        {
          "levelId": "canguru_j",
          "originProgram": "complemento_via_olimpica",
          "treatment": "aprofundamento",
          "importance": "importante",
          "difficulty": 3,
          "order": 51,
          "theoryMinutes": 30,
          "exerciseMinutes": 75,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 8,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva"
          ],
          "languageAdaptation": "Introduzir com exemplos curtos e ampliar gradualmente a formalização.",
          "masteryCriteria": "Escolher e aplicar a estratégia corretamente em pelo menos 75% dos problemas propostos.",
          "note": "Complemento pedagógico, não tópico oficial isolado."
        },
        {
          "levelId": "canguru_s",
          "originProgram": "complemento_via_olimpica",
          "treatment": "aprofundamento",
          "importance": "importante",
          "difficulty": 4,
          "order": 51,
          "theoryMinutes": 30,
          "exerciseMinutes": 75,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 8,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva"
          ],
          "languageAdaptation": "Introduzir com exemplos curtos e ampliar gradualmente a formalização.",
          "masteryCriteria": "Escolher e aplicar a estratégia corretamente em pelo menos 75% dos problemas propostos.",
          "note": "Complemento pedagógico, não tópico oficial isolado."
        }
      ],
      "sources": [
        {
          "id": "canguru-estrategias-via",
          "type": "material_complementar",
          "title": "Estratégias transversais da Via Olímpica",
          "institution": "Via Olímpica",
          "editionYear": 2026,
          "pageSection": "Especificação pedagógica do projeto",
          "url": "",
          "consultedAt": "2026-10-21",
          "official": false,
          "evidence": "desdobramento_didatico"
        }
      ]
    },
    {
      "id": "canguru-estrategia-volta-complementar",
      "olympiadId": "canguru",
      "areaId": "canguru-logica",
      "macrotheme": "Estratégias transversais",
      "moduleId": "canguru-logica-estrategias",
      "moduleTitle": "Estratégias de resolução",
      "title": "Trabalho de trás para frente e contagem pelo complementar",
      "description": "Estratégia transversal para organizar o raciocínio em problemas do Canguru: trabalho de trás para frente e contagem pelo complementar.",
      "subtopics": [
        "trabalho de trás para frente",
        "contagem pelo complementar",
        "uso inteligente das alternativas"
      ],
      "learningObjectives": [
        "Aplicar trabalho de trás para frente e contagem pelo complementar em problemas de diferentes áreas.",
        "Escolher quando a estratégia é útil.",
        "Conferir se o raciocínio cobre todas as possibilidades."
      ],
      "prerequisites": [
        "Leitura atenta",
        "Conhecimentos do problema estudado"
      ],
      "theoryOutline": [
        "trabalho de trás para frente",
        "contagem pelo complementar",
        "uso inteligente das alternativas"
      ],
      "formulas": [],
      "commonErrors": [
        "Usar a estratégia sem justificar por que ela cobre todos os casos.",
        "Confundir um padrão observado com uma prova."
      ],
      "keywords": [
        "Trabalho de trás para frente e contagem pelo complementar",
        "trabalho de trás para frente",
        "contagem pelo complementar",
        "uso inteligente das alternativas"
      ],
      "requiresUpdate": false,
      "reviewFrequencyMonths": null,
      "status": "revisado",
      "sourceTopicIds": [],
      "adaptations": [
        {
          "levelId": "canguru_e",
          "originProgram": "complemento_via_olimpica",
          "treatment": "novo",
          "importance": "importante",
          "difficulty": 2,
          "order": 52,
          "theoryMinutes": 30,
          "exerciseMinutes": 60,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 8,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva"
          ],
          "languageAdaptation": "Introduzir com exemplos curtos e ampliar gradualmente a formalização.",
          "masteryCriteria": "Escolher e aplicar a estratégia corretamente em pelo menos 75% dos problemas propostos.",
          "note": "Complemento pedagógico, não tópico oficial isolado."
        },
        {
          "levelId": "canguru_b",
          "originProgram": "complemento_via_olimpica",
          "treatment": "aprofundamento",
          "importance": "importante",
          "difficulty": 2,
          "order": 52,
          "theoryMinutes": 30,
          "exerciseMinutes": 60,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 8,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva"
          ],
          "languageAdaptation": "Introduzir com exemplos curtos e ampliar gradualmente a formalização.",
          "masteryCriteria": "Escolher e aplicar a estratégia corretamente em pelo menos 75% dos problemas propostos.",
          "note": "Complemento pedagógico, não tópico oficial isolado."
        },
        {
          "levelId": "canguru_c",
          "originProgram": "complemento_via_olimpica",
          "treatment": "aprofundamento",
          "importance": "importante",
          "difficulty": 3,
          "order": 52,
          "theoryMinutes": 30,
          "exerciseMinutes": 75,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 8,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva"
          ],
          "languageAdaptation": "Introduzir com exemplos curtos e ampliar gradualmente a formalização.",
          "masteryCriteria": "Escolher e aplicar a estratégia corretamente em pelo menos 75% dos problemas propostos.",
          "note": "Complemento pedagógico, não tópico oficial isolado."
        },
        {
          "levelId": "canguru_j",
          "originProgram": "complemento_via_olimpica",
          "treatment": "aprofundamento",
          "importance": "importante",
          "difficulty": 3,
          "order": 52,
          "theoryMinutes": 30,
          "exerciseMinutes": 75,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 8,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva"
          ],
          "languageAdaptation": "Introduzir com exemplos curtos e ampliar gradualmente a formalização.",
          "masteryCriteria": "Escolher e aplicar a estratégia corretamente em pelo menos 75% dos problemas propostos.",
          "note": "Complemento pedagógico, não tópico oficial isolado."
        },
        {
          "levelId": "canguru_s",
          "originProgram": "complemento_via_olimpica",
          "treatment": "aprofundamento",
          "importance": "importante",
          "difficulty": 4,
          "order": 52,
          "theoryMinutes": 30,
          "exerciseMinutes": 75,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 8,
          "exerciseTypes": [
            "raciocínio lógico",
            "objetiva"
          ],
          "languageAdaptation": "Introduzir com exemplos curtos e ampliar gradualmente a formalização.",
          "masteryCriteria": "Escolher e aplicar a estratégia corretamente em pelo menos 75% dos problemas propostos.",
          "note": "Complemento pedagógico, não tópico oficial isolado."
        }
      ],
      "sources": [
        {
          "id": "canguru-estrategias-via",
          "type": "material_complementar",
          "title": "Estratégias transversais da Via Olímpica",
          "institution": "Via Olímpica",
          "editionYear": 2026,
          "pageSection": "Especificação pedagógica do projeto",
          "url": "",
          "consultedAt": "2026-10-21",
          "official": false,
          "evidence": "desdobramento_didatico"
        }
      ]
    }
  ],
  "officialTopicIds": [
    "P-01",
    "P-02",
    "P-03",
    "P-04",
    "P-05",
    "P-06",
    "P-07",
    "P-08",
    "P-09",
    "P-10",
    "P-11",
    "P-12",
    "P-13",
    "P-14",
    "P-15",
    "P-16",
    "P-17",
    "P-18",
    "P-19",
    "P-20",
    "P-21",
    "E-01",
    "E-02",
    "E-03",
    "E-04",
    "E-05",
    "E-06",
    "E-07",
    "E-08",
    "E-09",
    "E-10",
    "E-11",
    "E-12",
    "E-13",
    "E-14",
    "E-15",
    "E-16",
    "E-17",
    "E-18",
    "E-19",
    "B-01",
    "B-02",
    "B-03",
    "B-04",
    "B-05",
    "B-06",
    "B-07",
    "B-08",
    "B-09",
    "B-10",
    "B-11",
    "B-12",
    "B-13",
    "B-14",
    "B-15",
    "C-01",
    "C-02",
    "C-03",
    "C-04",
    "C-05",
    "C-06",
    "C-07",
    "C-08",
    "C-09",
    "C-10",
    "C-11",
    "C-12",
    "J-01",
    "J-02",
    "J-03",
    "J-04",
    "J-05",
    "J-06",
    "J-07",
    "S-01",
    "S-02",
    "S-03",
    "S-04",
    "S-05",
    "S-06",
    "S-07"
  ],
  "details": {
    "shortDescription": "Competição internacional de matemática que valoriza raciocínio, criatividade e estratégias de resolução de problemas.",
    "audience": "6º ano do Ensino Fundamental ao 3º ano do Ensino Médio, distribuídos nos níveis E, B, C, J e S.",
    "examType": "Prova objetiva individual, com cinco alternativas, sem consulta e sem calculadora.",
    "about": "O programa é cumulativo: cada nível incorpora os conteúdos dos níveis anteriores e acrescenta novos temas.",
    "formatTitle": "Formato da competição",
    "stages": [
      "Nível E: 24 questões em até 100 minutos.",
      "Níveis B, C, J e S: 30 questões em até 100 minutos.",
      "Aplicação e inscrição realizadas pela escola."
    ],
    "preparationNote": "A Via Olímpica separa teoria, estratégias de resolução e prática com questões. Os tempos são estimativas pedagógicas do projeto.",
    "officialUrl": "https://www.cangurudematematicabrasil.com.br/regulamento",
    "officialLabel": "Regulamento do Canguru"
  }
} as const satisfies OlympiadCurriculum;
