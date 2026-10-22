import type { OlympiadCurriculum } from "./types";

export const OLITEF_CURRICULUM = {
  "olympiadId": "olitef",
  "editionYear": 2026,
  "version": "2026.1",
  "lastReview": "2026-10-21",
  "levels": [
    {
      "id": "olitef_n1",
      "code": "Nível 1",
      "name": "Nível 1",
      "description": "6º e 7º anos do Ensino Fundamental.",
      "grades": [
        "6ano",
        "7ano"
      ],
      "order": 1,
      "active": true
    },
    {
      "id": "olitef_n2",
      "code": "Nível 2",
      "name": "Nível 2",
      "description": "8º e 9º anos do Ensino Fundamental.",
      "grades": [
        "8ano",
        "9ano"
      ],
      "order": 2,
      "active": true
    },
    {
      "id": "olitef_n3",
      "code": "Nível 3",
      "name": "Nível 3",
      "description": "1ª, 2ª e 3ª séries do Ensino Médio.",
      "grades": [
        "1em",
        "2em",
        "3em"
      ],
      "order": 3,
      "active": true
    }
  ],
  "areas": [
    {
      "id": "olitef-ma01",
      "name": "MA01 — Educação Financeira Básica",
      "description": "Dinheiro, matemática financeira, economia, orçamento e decisões pessoais.",
      "order": 1
    },
    {
      "id": "olitef-ma02",
      "name": "MA02 — Renda Fixa",
      "description": "Remuneração, riscos, liquidez, garantias e produtos de renda fixa.",
      "order": 2
    },
    {
      "id": "olitef-ma03",
      "name": "MA03 — Renda Variável",
      "description": "Ações, bolsa, fundos, diversificação e riscos.",
      "order": 3
    },
    {
      "id": "olitef-formacao",
      "name": "Formação financeira e empreendedorismo",
      "description": "Trabalho, consumo, crédito, escolhas e projetos.",
      "order": 4
    }
  ],
  "contents": [
    {
      "id": "olitef-ma01-dinheiro-meios-pagamento",
      "olympiadId": "olitef",
      "areaId": "olitef-ma01",
      "macrotheme": "Dinheiro e sistema financeiro",
      "moduleId": "olitef-ma01-dinheiro",
      "moduleTitle": "Ma01 Dinheiro",
      "title": "História do dinheiro e meios de pagamento",
      "description": "Estudo de história do dinheiro e meios de pagamento em situações financeiras e econômicas compatíveis com os três níveis da OLITEF.",
      "subtopics": [
        "trocas e escambo",
        "evolução das formas de dinheiro",
        "moedas e cédulas",
        "meios eletrônicos",
        "cartões e Pix",
        "funções do dinheiro"
      ],
      "learningObjectives": [
        "Compreender história do dinheiro e meios de pagamento.",
        "Aplicar os conceitos em situações, tabelas ou cálculos.",
        "Comparar alternativas e justificar uma decisão."
      ],
      "prerequisites": [
        "Operações básicas",
        "Leitura e interpretação de situações"
      ],
      "theoryOutline": [
        "trocas e escambo",
        "evolução das formas de dinheiro",
        "moedas e cédulas",
        "meios eletrônicos",
        "cartões e Pix",
        "funções do dinheiro"
      ],
      "formulas": [],
      "commonErrors": [
        "Ignorar a unidade de tempo, a base de cálculo ou as condições do problema.",
        "Escolher uma alternativa apenas pelo valor aparente, sem considerar custos e riscos.",
        "Confundir conceitos próximos ou siglas de produtos."
      ],
      "keywords": [
        "História do dinheiro e meios de pagamento",
        "trocas e escambo",
        "evolução das formas de dinheiro",
        "moedas e cédulas",
        "meios eletrônicos",
        "cartões e Pix"
      ],
      "requiresUpdate": false,
      "reviewFrequencyMonths": null,
      "status": "revisado",
      "sourceTopicIds": [
        "OLITEF-MA01-DINHEIRO-MEIOS-PAGAMENTO"
      ],
      "adaptations": [
        {
          "levelId": "olitef_n1",
          "originProgram": "oficial_nucleo_comum",
          "treatment": "novo",
          "importance": "essencial",
          "difficulty": 1,
          "order": 1,
          "theoryMinutes": 45,
          "exerciseMinutes": 60,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 8,
          "exerciseTypes": [
            "objetiva",
            "cálculo",
            "interpretação de texto",
            "interpretação de tabela"
          ],
          "languageAdaptation": "Linguagem concreta, tabelas, exemplos cotidianos e cálculo passo a passo.",
          "masteryCriteria": "Atingir ao menos 75% de acertos e justificar a decisão financeira ou o cálculo utilizado.",
          "note": "Tempo estimado pela Via Olímpica; não é carga horária oficial."
        },
        {
          "levelId": "olitef_n2",
          "originProgram": "oficial_nucleo_comum",
          "treatment": "aprofundamento",
          "importance": "essencial",
          "difficulty": 2,
          "order": 1,
          "theoryMinutes": 30,
          "exerciseMinutes": 75,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 8,
          "exerciseTypes": [
            "objetiva",
            "cálculo",
            "interpretação de texto",
            "interpretação de tabela"
          ],
          "languageAdaptation": "Situações com várias etapas, comparação de propostas e mais autonomia.",
          "masteryCriteria": "Atingir ao menos 75% de acertos e justificar a decisão financeira ou o cálculo utilizado.",
          "note": "Tempo estimado pela Via Olímpica; não é carga horária oficial."
        },
        {
          "levelId": "olitef_n3",
          "originProgram": "oficial_nucleo_comum",
          "treatment": "aprofundamento",
          "importance": "essencial",
          "difficulty": 2,
          "order": 1,
          "theoryMinutes": 30,
          "exerciseMinutes": 90,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 10,
          "exerciseTypes": [
            "objetiva",
            "cálculo",
            "interpretação de texto",
            "interpretação de tabela"
          ],
          "languageAdaptation": "Representação algébrica, hipóteses explícitas e análise crítica de custos e riscos.",
          "masteryCriteria": "Atingir ao menos 75% de acertos e justificar a decisão financeira ou o cálculo utilizado.",
          "note": "Tempo estimado pela Via Olímpica; não é carga horária oficial."
        }
      ],
      "sources": [
        {
          "id": "olitef-cadernos-2026",
          "type": "caderno_estudante",
          "title": "Cadernos do Estudante OLITEF 2026",
          "institution": "OLITEF / Tesouro Direto",
          "editionYear": 2026,
          "pageSection": "Parte 2 — conteúdo teórico comum",
          "url": "https://www.olitef.com.br/baixar-provas-anteriores",
          "consultedAt": "2026-10-21",
          "official": true,
          "evidence": "mencao_direta"
        }
      ]
    },
    {
      "id": "olitef-ma01-sistema-financeiro",
      "olympiadId": "olitef",
      "areaId": "olitef-ma01",
      "macrotheme": "Dinheiro e sistema financeiro",
      "moduleId": "olitef-ma01-sfn",
      "moduleTitle": "Ma01 Sfn",
      "title": "Sistema Financeiro Nacional e instituições",
      "description": "Estudo de sistema financeiro nacional e instituições em situações financeiras e econômicas compatíveis com os três níveis da OLITEF.",
      "subtopics": [
        "circulação do dinheiro",
        "intermediação bancária",
        "cooperativas, financeiras, consórcios, seguradoras e corretoras",
        "bolsa de valores",
        "Banco Central, CVM, Susep e Previc",
        "regulação e fiscalização"
      ],
      "learningObjectives": [
        "Compreender sistema financeiro nacional e instituições.",
        "Aplicar os conceitos em situações, tabelas ou cálculos.",
        "Comparar alternativas e justificar uma decisão."
      ],
      "prerequisites": [
        "Operações básicas",
        "Leitura e interpretação de situações"
      ],
      "theoryOutline": [
        "circulação do dinheiro",
        "intermediação bancária",
        "cooperativas, financeiras, consórcios, seguradoras e corretoras",
        "bolsa de valores",
        "Banco Central, CVM, Susep e Previc",
        "regulação e fiscalização"
      ],
      "formulas": [],
      "commonErrors": [
        "Ignorar a unidade de tempo, a base de cálculo ou as condições do problema.",
        "Escolher uma alternativa apenas pelo valor aparente, sem considerar custos e riscos.",
        "Confundir conceitos próximos ou siglas de produtos."
      ],
      "keywords": [
        "Sistema Financeiro Nacional e instituições",
        "circulação do dinheiro",
        "intermediação bancária",
        "cooperativas, financeiras, consórcios, seguradoras e corretoras",
        "bolsa de valores",
        "Banco Central, CVM, Susep e Previc"
      ],
      "requiresUpdate": true,
      "reviewFrequencyMonths": 6,
      "status": "revisado",
      "sourceTopicIds": [
        "OLITEF-MA01-SISTEMA-FINANCEIRO"
      ],
      "adaptations": [
        {
          "levelId": "olitef_n1",
          "originProgram": "oficial_nucleo_comum",
          "treatment": "novo",
          "importance": "essencial",
          "difficulty": 2,
          "order": 2,
          "theoryMinutes": 60,
          "exerciseMinutes": 75,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 8,
          "exerciseTypes": [
            "objetiva",
            "cálculo",
            "interpretação de texto",
            "interpretação de tabela"
          ],
          "languageAdaptation": "Linguagem concreta, tabelas, exemplos cotidianos e cálculo passo a passo.",
          "masteryCriteria": "Atingir ao menos 75% de acertos e justificar a decisão financeira ou o cálculo utilizado.",
          "note": "Tempo estimado pela Via Olímpica; não é carga horária oficial."
        },
        {
          "levelId": "olitef_n2",
          "originProgram": "oficial_nucleo_comum",
          "treatment": "aprofundamento",
          "importance": "essencial",
          "difficulty": 3,
          "order": 2,
          "theoryMinutes": 45,
          "exerciseMinutes": 90,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 10,
          "exerciseTypes": [
            "objetiva",
            "cálculo",
            "interpretação de texto",
            "interpretação de tabela"
          ],
          "languageAdaptation": "Situações com várias etapas, comparação de propostas e mais autonomia.",
          "masteryCriteria": "Atingir ao menos 75% de acertos e justificar a decisão financeira ou o cálculo utilizado.",
          "note": "Tempo estimado pela Via Olímpica; não é carga horária oficial."
        },
        {
          "levelId": "olitef_n3",
          "originProgram": "oficial_nucleo_comum",
          "treatment": "aprofundamento",
          "importance": "essencial",
          "difficulty": 3,
          "order": 2,
          "theoryMinutes": 30,
          "exerciseMinutes": 105,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 12,
          "exerciseTypes": [
            "objetiva",
            "cálculo",
            "interpretação de texto",
            "interpretação de tabela"
          ],
          "languageAdaptation": "Representação algébrica, hipóteses explícitas e análise crítica de custos e riscos.",
          "masteryCriteria": "Atingir ao menos 75% de acertos e justificar a decisão financeira ou o cálculo utilizado.",
          "note": "Tempo estimado pela Via Olímpica; não é carga horária oficial."
        }
      ],
      "sources": [
        {
          "id": "olitef-cadernos-2026",
          "type": "caderno_estudante",
          "title": "Cadernos do Estudante OLITEF 2026",
          "institution": "OLITEF / Tesouro Direto",
          "editionYear": 2026,
          "pageSection": "Parte 2 — conteúdo teórico comum",
          "url": "https://www.olitef.com.br/baixar-provas-anteriores",
          "consultedAt": "2026-10-21",
          "official": true,
          "evidence": "regra_atualizavel"
        }
      ]
    },
    {
      "id": "olitef-ma01-porcentagens",
      "olympiadId": "olitef",
      "areaId": "olitef-ma01",
      "macrotheme": "Matemática financeira",
      "moduleId": "olitef-ma01-matematica",
      "moduleTitle": "Ma01 Matematica",
      "title": "Frações, decimais e porcentagens em finanças",
      "description": "Estudo de frações, decimais e porcentagens em finanças em situações financeiras e econômicas compatíveis com os três níveis da OLITEF.",
      "subtopics": [
        "operações com dinheiro",
        "frações e decimais",
        "cálculo percentual",
        "preço por unidade"
      ],
      "learningObjectives": [
        "Compreender frações, decimais e porcentagens em finanças.",
        "Aplicar os conceitos em situações, tabelas ou cálculos.",
        "Comparar alternativas e justificar uma decisão."
      ],
      "prerequisites": [
        "Operações com números naturais e decimais"
      ],
      "theoryOutline": [
        "operações com dinheiro",
        "frações e decimais",
        "cálculo percentual",
        "preço por unidade"
      ],
      "formulas": [],
      "commonErrors": [
        "Ignorar a unidade de tempo, a base de cálculo ou as condições do problema.",
        "Escolher uma alternativa apenas pelo valor aparente, sem considerar custos e riscos.",
        "Confundir conceitos próximos ou siglas de produtos."
      ],
      "keywords": [
        "Frações, decimais e porcentagens em finanças",
        "operações com dinheiro",
        "frações e decimais",
        "cálculo percentual",
        "preço por unidade"
      ],
      "requiresUpdate": false,
      "reviewFrequencyMonths": null,
      "status": "revisado",
      "sourceTopicIds": [
        "OLITEF-MA01-PORCENTAGENS"
      ],
      "adaptations": [
        {
          "levelId": "olitef_n1",
          "originProgram": "oficial_nucleo_comum",
          "treatment": "novo",
          "importance": "essencial",
          "difficulty": 2,
          "order": 3,
          "theoryMinutes": 60,
          "exerciseMinutes": 90,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 10,
          "exerciseTypes": [
            "objetiva",
            "cálculo",
            "interpretação de texto",
            "interpretação de tabela"
          ],
          "languageAdaptation": "Linguagem concreta, tabelas, exemplos cotidianos e cálculo passo a passo.",
          "masteryCriteria": "Atingir ao menos 75% de acertos e justificar a decisão financeira ou o cálculo utilizado.",
          "note": "Tempo estimado pela Via Olímpica; não é carga horária oficial."
        },
        {
          "levelId": "olitef_n2",
          "originProgram": "oficial_nucleo_comum",
          "treatment": "aprofundamento",
          "importance": "essencial",
          "difficulty": 3,
          "order": 3,
          "theoryMinutes": 45,
          "exerciseMinutes": 105,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 12,
          "exerciseTypes": [
            "objetiva",
            "cálculo",
            "interpretação de texto",
            "interpretação de tabela"
          ],
          "languageAdaptation": "Situações com várias etapas, comparação de propostas e mais autonomia.",
          "masteryCriteria": "Atingir ao menos 75% de acertos e justificar a decisão financeira ou o cálculo utilizado.",
          "note": "Tempo estimado pela Via Olímpica; não é carga horária oficial."
        },
        {
          "levelId": "olitef_n3",
          "originProgram": "oficial_nucleo_comum",
          "treatment": "aprofundamento",
          "importance": "essencial",
          "difficulty": 3,
          "order": 3,
          "theoryMinutes": 30,
          "exerciseMinutes": 120,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 13,
          "exerciseTypes": [
            "objetiva",
            "cálculo",
            "interpretação de texto",
            "interpretação de tabela"
          ],
          "languageAdaptation": "Representação algébrica, hipóteses explícitas e análise crítica de custos e riscos.",
          "masteryCriteria": "Atingir ao menos 75% de acertos e justificar a decisão financeira ou o cálculo utilizado.",
          "note": "Tempo estimado pela Via Olímpica; não é carga horária oficial."
        }
      ],
      "sources": [
        {
          "id": "olitef-cadernos-2026",
          "type": "caderno_estudante",
          "title": "Cadernos do Estudante OLITEF 2026",
          "institution": "OLITEF / Tesouro Direto",
          "editionYear": 2026,
          "pageSection": "Parte 2 — conteúdo teórico comum",
          "url": "https://www.olitef.com.br/baixar-provas-anteriores",
          "consultedAt": "2026-10-21",
          "official": true,
          "evidence": "mencao_direta"
        }
      ]
    },
    {
      "id": "olitef-ma01-aumentos-descontos",
      "olympiadId": "olitef",
      "areaId": "olitef-ma01",
      "macrotheme": "Matemática financeira",
      "moduleId": "olitef-ma01-matematica",
      "moduleTitle": "Ma01 Matematica",
      "title": "Aumentos, descontos e porcentagens sucessivas",
      "description": "Estudo de aumentos, descontos e porcentagens sucessivas em situações financeiras e econômicas compatíveis com os três níveis da OLITEF.",
      "subtopics": [
        "fator multiplicativo",
        "aumento e desconto",
        "mudança da base de cálculo",
        "reajustes sucessivos"
      ],
      "learningObjectives": [
        "Compreender aumentos, descontos e porcentagens sucessivas.",
        "Aplicar os conceitos em situações, tabelas ou cálculos.",
        "Comparar alternativas e justificar uma decisão."
      ],
      "prerequisites": [
        "Operações básicas",
        "Leitura e interpretação de situações"
      ],
      "theoryOutline": [
        "fator multiplicativo",
        "aumento e desconto",
        "mudança da base de cálculo",
        "reajustes sucessivos"
      ],
      "formulas": [
        {
          "expression": "valor final = valor inicial × (1 ± taxa)",
          "variables": {
            "taxa": "taxa decimal"
          }
        }
      ],
      "commonErrors": [
        "Ignorar a unidade de tempo, a base de cálculo ou as condições do problema.",
        "Escolher uma alternativa apenas pelo valor aparente, sem considerar custos e riscos.",
        "Confundir conceitos próximos ou siglas de produtos."
      ],
      "keywords": [
        "Aumentos, descontos e porcentagens sucessivas",
        "fator multiplicativo",
        "aumento e desconto",
        "mudança da base de cálculo",
        "reajustes sucessivos"
      ],
      "requiresUpdate": false,
      "reviewFrequencyMonths": null,
      "status": "revisado",
      "sourceTopicIds": [
        "OLITEF-MA01-AUMENTOS-DESCONTOS"
      ],
      "adaptations": [
        {
          "levelId": "olitef_n1",
          "originProgram": "oficial_nucleo_comum",
          "treatment": "novo",
          "importance": "essencial",
          "difficulty": 3,
          "order": 4,
          "theoryMinutes": 60,
          "exerciseMinutes": 90,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 10,
          "exerciseTypes": [
            "objetiva",
            "cálculo",
            "interpretação de texto",
            "interpretação de tabela"
          ],
          "languageAdaptation": "Linguagem concreta, tabelas, exemplos cotidianos e cálculo passo a passo.",
          "masteryCriteria": "Atingir ao menos 75% de acertos e justificar a decisão financeira ou o cálculo utilizado.",
          "note": "Tempo estimado pela Via Olímpica; não é carga horária oficial."
        },
        {
          "levelId": "olitef_n2",
          "originProgram": "oficial_nucleo_comum",
          "treatment": "aprofundamento",
          "importance": "essencial",
          "difficulty": 4,
          "order": 4,
          "theoryMinutes": 45,
          "exerciseMinutes": 105,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 12,
          "exerciseTypes": [
            "objetiva",
            "cálculo",
            "interpretação de texto",
            "interpretação de tabela"
          ],
          "languageAdaptation": "Situações com várias etapas, comparação de propostas e mais autonomia.",
          "masteryCriteria": "Atingir ao menos 75% de acertos e justificar a decisão financeira ou o cálculo utilizado.",
          "note": "Tempo estimado pela Via Olímpica; não é carga horária oficial."
        },
        {
          "levelId": "olitef_n3",
          "originProgram": "oficial_nucleo_comum",
          "treatment": "aprofundamento",
          "importance": "essencial",
          "difficulty": 4,
          "order": 4,
          "theoryMinutes": 30,
          "exerciseMinutes": 120,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 13,
          "exerciseTypes": [
            "objetiva",
            "cálculo",
            "interpretação de texto",
            "interpretação de tabela"
          ],
          "languageAdaptation": "Representação algébrica, hipóteses explícitas e análise crítica de custos e riscos.",
          "masteryCriteria": "Atingir ao menos 75% de acertos e justificar a decisão financeira ou o cálculo utilizado.",
          "note": "Tempo estimado pela Via Olímpica; não é carga horária oficial."
        }
      ],
      "sources": [
        {
          "id": "olitef-cadernos-2026",
          "type": "caderno_estudante",
          "title": "Cadernos do Estudante OLITEF 2026",
          "institution": "OLITEF / Tesouro Direto",
          "editionYear": 2026,
          "pageSection": "Parte 2 — conteúdo teórico comum",
          "url": "https://www.olitef.com.br/baixar-provas-anteriores",
          "consultedAt": "2026-10-21",
          "official": true,
          "evidence": "mencao_direta"
        }
      ]
    },
    {
      "id": "olitef-ma01-juros-simples",
      "olympiadId": "olitef",
      "areaId": "olitef-ma01",
      "macrotheme": "Matemática financeira",
      "moduleId": "olitef-ma01-juros",
      "moduleTitle": "Ma01 Juros",
      "title": "Juros simples",
      "description": "Estudo de juros simples em situações financeiras e econômicas compatíveis com os três níveis da OLITEF.",
      "subtopics": [
        "capital",
        "taxa",
        "prazo",
        "juros",
        "montante",
        "compatibilidade entre taxa e prazo"
      ],
      "learningObjectives": [
        "Compreender juros simples.",
        "Aplicar os conceitos em situações, tabelas ou cálculos.",
        "Comparar alternativas e justificar uma decisão."
      ],
      "prerequisites": [
        "Operações básicas",
        "Leitura e interpretação de situações"
      ],
      "theoryOutline": [
        "capital",
        "taxa",
        "prazo",
        "juros",
        "montante",
        "compatibilidade entre taxa e prazo"
      ],
      "formulas": [
        {
          "expression": "J = C × i × n",
          "variables": {
            "J": "juros",
            "C": "capital",
            "i": "taxa decimal",
            "n": "períodos"
          }
        },
        {
          "expression": "M = C(1 + in)",
          "variables": {
            "M": "montante"
          }
        }
      ],
      "commonErrors": [
        "Ignorar a unidade de tempo, a base de cálculo ou as condições do problema.",
        "Escolher uma alternativa apenas pelo valor aparente, sem considerar custos e riscos.",
        "Confundir conceitos próximos ou siglas de produtos."
      ],
      "keywords": [
        "Juros simples",
        "capital",
        "taxa",
        "prazo",
        "juros",
        "montante"
      ],
      "requiresUpdate": false,
      "reviewFrequencyMonths": null,
      "status": "revisado",
      "sourceTopicIds": [
        "OLITEF-MA01-JUROS-SIMPLES"
      ],
      "adaptations": [
        {
          "levelId": "olitef_n1",
          "originProgram": "oficial_nucleo_comum",
          "treatment": "novo",
          "importance": "essencial",
          "difficulty": 3,
          "order": 5,
          "theoryMinutes": 75,
          "exerciseMinutes": 90,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 10,
          "exerciseTypes": [
            "objetiva",
            "cálculo",
            "interpretação de texto",
            "interpretação de tabela"
          ],
          "languageAdaptation": "Linguagem concreta, tabelas, exemplos cotidianos e cálculo passo a passo.",
          "masteryCriteria": "Atingir ao menos 75% de acertos e justificar a decisão financeira ou o cálculo utilizado.",
          "note": "Tempo estimado pela Via Olímpica; não é carga horária oficial."
        },
        {
          "levelId": "olitef_n2",
          "originProgram": "oficial_nucleo_comum",
          "treatment": "aprofundamento",
          "importance": "essencial",
          "difficulty": 4,
          "order": 5,
          "theoryMinutes": 60,
          "exerciseMinutes": 105,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 12,
          "exerciseTypes": [
            "objetiva",
            "cálculo",
            "interpretação de texto",
            "interpretação de tabela"
          ],
          "languageAdaptation": "Situações com várias etapas, comparação de propostas e mais autonomia.",
          "masteryCriteria": "Atingir ao menos 75% de acertos e justificar a decisão financeira ou o cálculo utilizado.",
          "note": "Tempo estimado pela Via Olímpica; não é carga horária oficial."
        },
        {
          "levelId": "olitef_n3",
          "originProgram": "oficial_nucleo_comum",
          "treatment": "aprofundamento",
          "importance": "essencial",
          "difficulty": 4,
          "order": 5,
          "theoryMinutes": 45,
          "exerciseMinutes": 120,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 13,
          "exerciseTypes": [
            "objetiva",
            "cálculo",
            "interpretação de texto",
            "interpretação de tabela"
          ],
          "languageAdaptation": "Representação algébrica, hipóteses explícitas e análise crítica de custos e riscos.",
          "masteryCriteria": "Atingir ao menos 75% de acertos e justificar a decisão financeira ou o cálculo utilizado.",
          "note": "Tempo estimado pela Via Olímpica; não é carga horária oficial."
        }
      ],
      "sources": [
        {
          "id": "olitef-cadernos-2026",
          "type": "caderno_estudante",
          "title": "Cadernos do Estudante OLITEF 2026",
          "institution": "OLITEF / Tesouro Direto",
          "editionYear": 2026,
          "pageSection": "Parte 2 — conteúdo teórico comum",
          "url": "https://www.olitef.com.br/baixar-provas-anteriores",
          "consultedAt": "2026-10-21",
          "official": true,
          "evidence": "mencao_direta"
        }
      ]
    },
    {
      "id": "olitef-ma01-juros-compostos",
      "olympiadId": "olitef",
      "areaId": "olitef-ma01",
      "macrotheme": "Matemática financeira",
      "moduleId": "olitef-ma01-juros",
      "moduleTitle": "Ma01 Juros",
      "title": "Juros compostos",
      "description": "Estudo de juros compostos em situações financeiras e econômicas compatíveis com os três níveis da OLITEF.",
      "subtopics": [
        "crescimento composto",
        "multiplicações sucessivas",
        "montante",
        "comparação com juros simples",
        "tabelas de evolução"
      ],
      "learningObjectives": [
        "Compreender juros compostos.",
        "Aplicar os conceitos em situações, tabelas ou cálculos.",
        "Comparar alternativas e justificar uma decisão."
      ],
      "prerequisites": [
        "Operações básicas",
        "Leitura e interpretação de situações"
      ],
      "theoryOutline": [
        "crescimento composto",
        "multiplicações sucessivas",
        "montante",
        "comparação com juros simples",
        "tabelas de evolução"
      ],
      "formulas": [
        {
          "expression": "M = C(1+i)^n",
          "variables": {
            "M": "montante",
            "C": "capital",
            "i": "taxa decimal",
            "n": "períodos"
          }
        }
      ],
      "commonErrors": [
        "Ignorar a unidade de tempo, a base de cálculo ou as condições do problema.",
        "Escolher uma alternativa apenas pelo valor aparente, sem considerar custos e riscos.",
        "Confundir conceitos próximos ou siglas de produtos."
      ],
      "keywords": [
        "Juros compostos",
        "crescimento composto",
        "multiplicações sucessivas",
        "montante",
        "comparação com juros simples",
        "tabelas de evolução"
      ],
      "requiresUpdate": false,
      "reviewFrequencyMonths": null,
      "status": "revisado",
      "sourceTopicIds": [
        "OLITEF-MA01-JUROS-COMPOSTOS"
      ],
      "adaptations": [
        {
          "levelId": "olitef_n1",
          "originProgram": "oficial_nucleo_comum",
          "treatment": "novo",
          "importance": "essencial",
          "difficulty": 3,
          "order": 6,
          "theoryMinutes": 90,
          "exerciseMinutes": 120,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 13,
          "exerciseTypes": [
            "objetiva",
            "cálculo",
            "interpretação de texto",
            "interpretação de tabela"
          ],
          "languageAdaptation": "Linguagem concreta, tabelas, exemplos cotidianos e cálculo passo a passo.",
          "masteryCriteria": "Atingir ao menos 75% de acertos e justificar a decisão financeira ou o cálculo utilizado.",
          "note": "Tempo estimado pela Via Olímpica; não é carga horária oficial."
        },
        {
          "levelId": "olitef_n2",
          "originProgram": "oficial_nucleo_comum",
          "treatment": "aprofundamento",
          "importance": "essencial",
          "difficulty": 4,
          "order": 6,
          "theoryMinutes": 75,
          "exerciseMinutes": 135,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 15,
          "exerciseTypes": [
            "objetiva",
            "cálculo",
            "interpretação de texto",
            "interpretação de tabela"
          ],
          "languageAdaptation": "Situações com várias etapas, comparação de propostas e mais autonomia.",
          "masteryCriteria": "Atingir ao menos 75% de acertos e justificar a decisão financeira ou o cálculo utilizado.",
          "note": "Tempo estimado pela Via Olímpica; não é carga horária oficial."
        },
        {
          "levelId": "olitef_n3",
          "originProgram": "oficial_nucleo_comum",
          "treatment": "aprofundamento",
          "importance": "essencial",
          "difficulty": 4,
          "order": 6,
          "theoryMinutes": 60,
          "exerciseMinutes": 150,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 17,
          "exerciseTypes": [
            "objetiva",
            "cálculo",
            "interpretação de texto",
            "interpretação de tabela"
          ],
          "languageAdaptation": "Representação algébrica, hipóteses explícitas e análise crítica de custos e riscos.",
          "masteryCriteria": "Atingir ao menos 75% de acertos e justificar a decisão financeira ou o cálculo utilizado.",
          "note": "Tempo estimado pela Via Olímpica; não é carga horária oficial."
        }
      ],
      "sources": [
        {
          "id": "olitef-cadernos-2026",
          "type": "caderno_estudante",
          "title": "Cadernos do Estudante OLITEF 2026",
          "institution": "OLITEF / Tesouro Direto",
          "editionYear": 2026,
          "pageSection": "Parte 2 — conteúdo teórico comum",
          "url": "https://www.olitef.com.br/baixar-provas-anteriores",
          "consultedAt": "2026-10-21",
          "official": true,
          "evidence": "mencao_direta"
        }
      ]
    },
    {
      "id": "olitef-ma01-economia",
      "olympiadId": "olitef",
      "areaId": "olitef-ma01",
      "macrotheme": "Economia básica",
      "moduleId": "olitef-ma01-economia",
      "moduleTitle": "Ma01 Economia",
      "title": "Selic, inflação, PIB e atividade econômica",
      "description": "Estudo de selic, inflação, pib e atividade econômica em situações financeiras e econômicas compatíveis com os três níveis da OLITEF.",
      "subtopics": [
        "Selic Meta",
        "Copom",
        "juros, crédito, consumo e investimento",
        "inflação e poder de compra",
        "índices de preços",
        "PIB",
        "emprego e renda",
        "arrecadação e serviços públicos",
        "sustentabilidade"
      ],
      "learningObjectives": [
        "Compreender selic, inflação, pib e atividade econômica.",
        "Aplicar os conceitos em situações, tabelas ou cálculos.",
        "Comparar alternativas e justificar uma decisão."
      ],
      "prerequisites": [
        "Operações básicas",
        "Leitura e interpretação de situações"
      ],
      "theoryOutline": [
        "Selic Meta",
        "Copom",
        "juros, crédito, consumo e investimento",
        "inflação e poder de compra",
        "índices de preços",
        "PIB"
      ],
      "formulas": [],
      "commonErrors": [
        "Ignorar a unidade de tempo, a base de cálculo ou as condições do problema.",
        "Escolher uma alternativa apenas pelo valor aparente, sem considerar custos e riscos.",
        "Confundir conceitos próximos ou siglas de produtos."
      ],
      "keywords": [
        "Selic, inflação, PIB e atividade econômica",
        "Selic Meta",
        "Copom",
        "juros, crédito, consumo e investimento",
        "inflação e poder de compra",
        "índices de preços"
      ],
      "requiresUpdate": true,
      "reviewFrequencyMonths": 6,
      "status": "revisado",
      "sourceTopicIds": [
        "OLITEF-MA01-ECONOMIA"
      ],
      "adaptations": [
        {
          "levelId": "olitef_n1",
          "originProgram": "oficial_nucleo_comum",
          "treatment": "novo",
          "importance": "essencial",
          "difficulty": 3,
          "order": 7,
          "theoryMinutes": 75,
          "exerciseMinutes": 90,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 10,
          "exerciseTypes": [
            "objetiva",
            "cálculo",
            "interpretação de texto",
            "interpretação de tabela"
          ],
          "languageAdaptation": "Linguagem concreta, tabelas, exemplos cotidianos e cálculo passo a passo.",
          "masteryCriteria": "Atingir ao menos 75% de acertos e justificar a decisão financeira ou o cálculo utilizado.",
          "note": "Tempo estimado pela Via Olímpica; não é carga horária oficial."
        },
        {
          "levelId": "olitef_n2",
          "originProgram": "oficial_nucleo_comum",
          "treatment": "aprofundamento",
          "importance": "essencial",
          "difficulty": 4,
          "order": 7,
          "theoryMinutes": 60,
          "exerciseMinutes": 105,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 12,
          "exerciseTypes": [
            "objetiva",
            "cálculo",
            "interpretação de texto",
            "interpretação de tabela"
          ],
          "languageAdaptation": "Situações com várias etapas, comparação de propostas e mais autonomia.",
          "masteryCriteria": "Atingir ao menos 75% de acertos e justificar a decisão financeira ou o cálculo utilizado.",
          "note": "Tempo estimado pela Via Olímpica; não é carga horária oficial."
        },
        {
          "levelId": "olitef_n3",
          "originProgram": "oficial_nucleo_comum",
          "treatment": "aprofundamento",
          "importance": "essencial",
          "difficulty": 4,
          "order": 7,
          "theoryMinutes": 45,
          "exerciseMinutes": 120,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 13,
          "exerciseTypes": [
            "objetiva",
            "cálculo",
            "interpretação de texto",
            "interpretação de tabela"
          ],
          "languageAdaptation": "Representação algébrica, hipóteses explícitas e análise crítica de custos e riscos.",
          "masteryCriteria": "Atingir ao menos 75% de acertos e justificar a decisão financeira ou o cálculo utilizado.",
          "note": "Tempo estimado pela Via Olímpica; não é carga horária oficial."
        }
      ],
      "sources": [
        {
          "id": "olitef-cadernos-2026",
          "type": "caderno_estudante",
          "title": "Cadernos do Estudante OLITEF 2026",
          "institution": "OLITEF / Tesouro Direto",
          "editionYear": 2026,
          "pageSection": "Parte 2 — conteúdo teórico comum",
          "url": "https://www.olitef.com.br/baixar-provas-anteriores",
          "consultedAt": "2026-10-21",
          "official": true,
          "evidence": "regra_atualizavel"
        }
      ]
    },
    {
      "id": "olitef-ma01-orcamento",
      "olympiadId": "olitef",
      "areaId": "olitef-ma01",
      "macrotheme": "Finanças pessoais",
      "moduleId": "olitef-ma01-planejamento",
      "moduleTitle": "Ma01 Planejamento",
      "title": "Orçamento pessoal e familiar",
      "description": "Estudo de orçamento pessoal e familiar em situações financeiras e econômicas compatíveis com os três níveis da OLITEF.",
      "subtopics": [
        "fontes de receita",
        "despesas e compromissos",
        "saldo, equilíbrio e déficit",
        "organização de categorias",
        "planejamento de gastos"
      ],
      "learningObjectives": [
        "Compreender orçamento pessoal e familiar.",
        "Aplicar os conceitos em situações, tabelas ou cálculos.",
        "Comparar alternativas e justificar uma decisão."
      ],
      "prerequisites": [
        "Operações básicas",
        "Leitura e interpretação de situações"
      ],
      "theoryOutline": [
        "fontes de receita",
        "despesas e compromissos",
        "saldo, equilíbrio e déficit",
        "organização de categorias",
        "planejamento de gastos"
      ],
      "formulas": [],
      "commonErrors": [
        "Ignorar a unidade de tempo, a base de cálculo ou as condições do problema.",
        "Escolher uma alternativa apenas pelo valor aparente, sem considerar custos e riscos.",
        "Confundir conceitos próximos ou siglas de produtos."
      ],
      "keywords": [
        "Orçamento pessoal e familiar",
        "fontes de receita",
        "despesas e compromissos",
        "saldo, equilíbrio e déficit",
        "organização de categorias",
        "planejamento de gastos"
      ],
      "requiresUpdate": false,
      "reviewFrequencyMonths": null,
      "status": "revisado",
      "sourceTopicIds": [
        "OLITEF-MA01-ORCAMENTO"
      ],
      "adaptations": [
        {
          "levelId": "olitef_n1",
          "originProgram": "oficial_nucleo_comum",
          "treatment": "novo",
          "importance": "essencial",
          "difficulty": 2,
          "order": 8,
          "theoryMinutes": 60,
          "exerciseMinutes": 90,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 10,
          "exerciseTypes": [
            "objetiva",
            "cálculo",
            "interpretação de texto",
            "interpretação de tabela"
          ],
          "languageAdaptation": "Linguagem concreta, tabelas, exemplos cotidianos e cálculo passo a passo.",
          "masteryCriteria": "Atingir ao menos 75% de acertos e justificar a decisão financeira ou o cálculo utilizado.",
          "note": "Tempo estimado pela Via Olímpica; não é carga horária oficial."
        },
        {
          "levelId": "olitef_n2",
          "originProgram": "oficial_nucleo_comum",
          "treatment": "aprofundamento",
          "importance": "essencial",
          "difficulty": 3,
          "order": 8,
          "theoryMinutes": 45,
          "exerciseMinutes": 105,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 12,
          "exerciseTypes": [
            "objetiva",
            "cálculo",
            "interpretação de texto",
            "interpretação de tabela"
          ],
          "languageAdaptation": "Situações com várias etapas, comparação de propostas e mais autonomia.",
          "masteryCriteria": "Atingir ao menos 75% de acertos e justificar a decisão financeira ou o cálculo utilizado.",
          "note": "Tempo estimado pela Via Olímpica; não é carga horária oficial."
        },
        {
          "levelId": "olitef_n3",
          "originProgram": "oficial_nucleo_comum",
          "treatment": "aprofundamento",
          "importance": "essencial",
          "difficulty": 3,
          "order": 8,
          "theoryMinutes": 30,
          "exerciseMinutes": 120,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 13,
          "exerciseTypes": [
            "objetiva",
            "cálculo",
            "interpretação de texto",
            "interpretação de tabela"
          ],
          "languageAdaptation": "Representação algébrica, hipóteses explícitas e análise crítica de custos e riscos.",
          "masteryCriteria": "Atingir ao menos 75% de acertos e justificar a decisão financeira ou o cálculo utilizado.",
          "note": "Tempo estimado pela Via Olímpica; não é carga horária oficial."
        }
      ],
      "sources": [
        {
          "id": "olitef-cadernos-2026",
          "type": "caderno_estudante",
          "title": "Cadernos do Estudante OLITEF 2026",
          "institution": "OLITEF / Tesouro Direto",
          "editionYear": 2026,
          "pageSection": "Parte 2 — conteúdo teórico comum",
          "url": "https://www.olitef.com.br/baixar-provas-anteriores",
          "consultedAt": "2026-10-21",
          "official": true,
          "evidence": "mencao_direta"
        }
      ]
    },
    {
      "id": "olitef-ma01-poupanca-reserva",
      "olympiadId": "olitef",
      "areaId": "olitef-ma01",
      "macrotheme": "Finanças pessoais",
      "moduleId": "olitef-ma01-planejamento",
      "moduleTitle": "Ma01 Planejamento",
      "title": "Poupança, reserva e objetivos",
      "description": "Estudo de poupança, reserva e objetivos em situações financeiras e econômicas compatíveis com os três níveis da OLITEF.",
      "subtopics": [
        "formação de poupança",
        "reserva para imprevistos",
        "metas financeiras",
        "prazo e valor por período",
        "planejamento de longo prazo e aposentadoria"
      ],
      "learningObjectives": [
        "Compreender poupança, reserva e objetivos.",
        "Aplicar os conceitos em situações, tabelas ou cálculos.",
        "Comparar alternativas e justificar uma decisão."
      ],
      "prerequisites": [
        "Operações básicas",
        "Leitura e interpretação de situações"
      ],
      "theoryOutline": [
        "formação de poupança",
        "reserva para imprevistos",
        "metas financeiras",
        "prazo e valor por período",
        "planejamento de longo prazo e aposentadoria"
      ],
      "formulas": [],
      "commonErrors": [
        "Ignorar a unidade de tempo, a base de cálculo ou as condições do problema.",
        "Escolher uma alternativa apenas pelo valor aparente, sem considerar custos e riscos.",
        "Confundir conceitos próximos ou siglas de produtos."
      ],
      "keywords": [
        "Poupança, reserva e objetivos",
        "formação de poupança",
        "reserva para imprevistos",
        "metas financeiras",
        "prazo e valor por período",
        "planejamento de longo prazo e aposentadoria"
      ],
      "requiresUpdate": false,
      "reviewFrequencyMonths": null,
      "status": "revisado",
      "sourceTopicIds": [
        "OLITEF-MA01-POUPANCA-RESERVA"
      ],
      "adaptations": [
        {
          "levelId": "olitef_n1",
          "originProgram": "oficial_nucleo_comum",
          "treatment": "novo",
          "importance": "essencial",
          "difficulty": 2,
          "order": 9,
          "theoryMinutes": 60,
          "exerciseMinutes": 90,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 10,
          "exerciseTypes": [
            "objetiva",
            "cálculo",
            "interpretação de texto",
            "interpretação de tabela"
          ],
          "languageAdaptation": "Linguagem concreta, tabelas, exemplos cotidianos e cálculo passo a passo.",
          "masteryCriteria": "Atingir ao menos 75% de acertos e justificar a decisão financeira ou o cálculo utilizado.",
          "note": "Tempo estimado pela Via Olímpica; não é carga horária oficial."
        },
        {
          "levelId": "olitef_n2",
          "originProgram": "oficial_nucleo_comum",
          "treatment": "aprofundamento",
          "importance": "essencial",
          "difficulty": 3,
          "order": 9,
          "theoryMinutes": 45,
          "exerciseMinutes": 105,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 12,
          "exerciseTypes": [
            "objetiva",
            "cálculo",
            "interpretação de texto",
            "interpretação de tabela"
          ],
          "languageAdaptation": "Situações com várias etapas, comparação de propostas e mais autonomia.",
          "masteryCriteria": "Atingir ao menos 75% de acertos e justificar a decisão financeira ou o cálculo utilizado.",
          "note": "Tempo estimado pela Via Olímpica; não é carga horária oficial."
        },
        {
          "levelId": "olitef_n3",
          "originProgram": "oficial_nucleo_comum",
          "treatment": "aprofundamento",
          "importance": "essencial",
          "difficulty": 3,
          "order": 9,
          "theoryMinutes": 30,
          "exerciseMinutes": 120,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 13,
          "exerciseTypes": [
            "objetiva",
            "cálculo",
            "interpretação de texto",
            "interpretação de tabela"
          ],
          "languageAdaptation": "Representação algébrica, hipóteses explícitas e análise crítica de custos e riscos.",
          "masteryCriteria": "Atingir ao menos 75% de acertos e justificar a decisão financeira ou o cálculo utilizado.",
          "note": "Tempo estimado pela Via Olímpica; não é carga horária oficial."
        }
      ],
      "sources": [
        {
          "id": "olitef-cadernos-2026",
          "type": "caderno_estudante",
          "title": "Cadernos do Estudante OLITEF 2026",
          "institution": "OLITEF / Tesouro Direto",
          "editionYear": 2026,
          "pageSection": "Parte 2 — conteúdo teórico comum",
          "url": "https://www.olitef.com.br/baixar-provas-anteriores",
          "consultedAt": "2026-10-21",
          "official": true,
          "evidence": "mencao_direta"
        }
      ]
    },
    {
      "id": "olitef-ma01-credito-endividamento",
      "olympiadId": "olitef",
      "areaId": "olitef-ma01",
      "macrotheme": "Finanças pessoais",
      "moduleId": "olitef-ma01-credito",
      "moduleTitle": "Ma01 Credito",
      "title": "Crédito, parcelamento, CET e endividamento",
      "description": "Estudo de crédito, parcelamento, cet e endividamento em situações financeiras e econômicas compatíveis com os três níveis da OLITEF.",
      "subtopics": [
        "uso do crédito",
        "comprometimento da renda",
        "parcela e custo total",
        "Custo Efetivo Total",
        "juros e encargos",
        "amortização do principal",
        "prevenção e reorganização de dívidas"
      ],
      "learningObjectives": [
        "Compreender crédito, parcelamento, cet e endividamento.",
        "Aplicar os conceitos em situações, tabelas ou cálculos.",
        "Comparar alternativas e justificar uma decisão."
      ],
      "prerequisites": [
        "Operações básicas",
        "Leitura e interpretação de situações"
      ],
      "theoryOutline": [
        "uso do crédito",
        "comprometimento da renda",
        "parcela e custo total",
        "Custo Efetivo Total",
        "juros e encargos",
        "amortização do principal"
      ],
      "formulas": [],
      "commonErrors": [
        "Ignorar a unidade de tempo, a base de cálculo ou as condições do problema.",
        "Escolher uma alternativa apenas pelo valor aparente, sem considerar custos e riscos.",
        "Confundir conceitos próximos ou siglas de produtos."
      ],
      "keywords": [
        "Crédito, parcelamento, CET e endividamento",
        "uso do crédito",
        "comprometimento da renda",
        "parcela e custo total",
        "Custo Efetivo Total",
        "juros e encargos"
      ],
      "requiresUpdate": true,
      "reviewFrequencyMonths": 6,
      "status": "revisado",
      "sourceTopicIds": [
        "OLITEF-MA01-CREDITO-ENDIVIDAMENTO"
      ],
      "adaptations": [
        {
          "levelId": "olitef_n1",
          "originProgram": "oficial_nucleo_comum",
          "treatment": "novo",
          "importance": "essencial",
          "difficulty": 3,
          "order": 10,
          "theoryMinutes": 75,
          "exerciseMinutes": 105,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 12,
          "exerciseTypes": [
            "objetiva",
            "cálculo",
            "interpretação de texto",
            "interpretação de tabela"
          ],
          "languageAdaptation": "Linguagem concreta, tabelas, exemplos cotidianos e cálculo passo a passo.",
          "masteryCriteria": "Atingir ao menos 75% de acertos e justificar a decisão financeira ou o cálculo utilizado.",
          "note": "Tempo estimado pela Via Olímpica; não é carga horária oficial."
        },
        {
          "levelId": "olitef_n2",
          "originProgram": "oficial_nucleo_comum",
          "treatment": "aprofundamento",
          "importance": "essencial",
          "difficulty": 4,
          "order": 10,
          "theoryMinutes": 60,
          "exerciseMinutes": 120,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 13,
          "exerciseTypes": [
            "objetiva",
            "cálculo",
            "interpretação de texto",
            "interpretação de tabela"
          ],
          "languageAdaptation": "Situações com várias etapas, comparação de propostas e mais autonomia.",
          "masteryCriteria": "Atingir ao menos 75% de acertos e justificar a decisão financeira ou o cálculo utilizado.",
          "note": "Tempo estimado pela Via Olímpica; não é carga horária oficial."
        },
        {
          "levelId": "olitef_n3",
          "originProgram": "oficial_nucleo_comum",
          "treatment": "aprofundamento",
          "importance": "essencial",
          "difficulty": 4,
          "order": 10,
          "theoryMinutes": 45,
          "exerciseMinutes": 135,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 15,
          "exerciseTypes": [
            "objetiva",
            "cálculo",
            "interpretação de texto",
            "interpretação de tabela"
          ],
          "languageAdaptation": "Representação algébrica, hipóteses explícitas e análise crítica de custos e riscos.",
          "masteryCriteria": "Atingir ao menos 75% de acertos e justificar a decisão financeira ou o cálculo utilizado.",
          "note": "Tempo estimado pela Via Olímpica; não é carga horária oficial."
        }
      ],
      "sources": [
        {
          "id": "olitef-cadernos-2026",
          "type": "caderno_estudante",
          "title": "Cadernos do Estudante OLITEF 2026",
          "institution": "OLITEF / Tesouro Direto",
          "editionYear": 2026,
          "pageSection": "Parte 2 — conteúdo teórico comum",
          "url": "https://www.olitef.com.br/baixar-provas-anteriores",
          "consultedAt": "2026-10-21",
          "official": true,
          "evidence": "regra_atualizavel"
        }
      ]
    },
    {
      "id": "olitef-ma02-introducao-renda-fixa",
      "olympiadId": "olitef",
      "areaId": "olitef-ma02",
      "macrotheme": "Fundamentos de renda fixa",
      "moduleId": "olitef-ma02-fundamentos",
      "moduleTitle": "Ma02 Fundamentos",
      "title": "Títulos de dívida e participantes da renda fixa",
      "description": "Estudo de títulos de dívida e participantes da renda fixa em situações financeiras e econômicas compatíveis com os três níveis da OLITEF.",
      "subtopics": [
        "investidor, emissor e tomador",
        "governo, bancos, cooperativas e empresas",
        "capital aplicado",
        "prazo e vencimento",
        "regra de remuneração"
      ],
      "learningObjectives": [
        "Compreender títulos de dívida e participantes da renda fixa.",
        "Aplicar os conceitos em situações, tabelas ou cálculos.",
        "Comparar alternativas e justificar uma decisão."
      ],
      "prerequisites": [
        "Operações básicas",
        "Leitura e interpretação de situações"
      ],
      "theoryOutline": [
        "investidor, emissor e tomador",
        "governo, bancos, cooperativas e empresas",
        "capital aplicado",
        "prazo e vencimento",
        "regra de remuneração"
      ],
      "formulas": [],
      "commonErrors": [
        "Ignorar a unidade de tempo, a base de cálculo ou as condições do problema.",
        "Escolher uma alternativa apenas pelo valor aparente, sem considerar custos e riscos.",
        "Confundir conceitos próximos ou siglas de produtos."
      ],
      "keywords": [
        "Títulos de dívida e participantes da renda fixa",
        "investidor, emissor e tomador",
        "governo, bancos, cooperativas e empresas",
        "capital aplicado",
        "prazo e vencimento",
        "regra de remuneração"
      ],
      "requiresUpdate": false,
      "reviewFrequencyMonths": null,
      "status": "revisado",
      "sourceTopicIds": [
        "OLITEF-MA02-INTRODUCAO-RENDA-FIXA"
      ],
      "adaptations": [
        {
          "levelId": "olitef_n1",
          "originProgram": "oficial_nucleo_comum",
          "treatment": "novo",
          "importance": "essencial",
          "difficulty": 2,
          "order": 11,
          "theoryMinutes": 60,
          "exerciseMinutes": 90,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 10,
          "exerciseTypes": [
            "objetiva",
            "cálculo",
            "interpretação de texto",
            "interpretação de tabela"
          ],
          "languageAdaptation": "Linguagem concreta, tabelas, exemplos cotidianos e cálculo passo a passo.",
          "masteryCriteria": "Atingir ao menos 75% de acertos e justificar a decisão financeira ou o cálculo utilizado.",
          "note": "Tempo estimado pela Via Olímpica; não é carga horária oficial."
        },
        {
          "levelId": "olitef_n2",
          "originProgram": "oficial_nucleo_comum",
          "treatment": "aprofundamento",
          "importance": "essencial",
          "difficulty": 3,
          "order": 11,
          "theoryMinutes": 45,
          "exerciseMinutes": 105,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 12,
          "exerciseTypes": [
            "objetiva",
            "cálculo",
            "interpretação de texto",
            "interpretação de tabela"
          ],
          "languageAdaptation": "Situações com várias etapas, comparação de propostas e mais autonomia.",
          "masteryCriteria": "Atingir ao menos 75% de acertos e justificar a decisão financeira ou o cálculo utilizado.",
          "note": "Tempo estimado pela Via Olímpica; não é carga horária oficial."
        },
        {
          "levelId": "olitef_n3",
          "originProgram": "oficial_nucleo_comum",
          "treatment": "aprofundamento",
          "importance": "essencial",
          "difficulty": 3,
          "order": 11,
          "theoryMinutes": 30,
          "exerciseMinutes": 120,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 13,
          "exerciseTypes": [
            "objetiva",
            "cálculo",
            "interpretação de texto",
            "interpretação de tabela"
          ],
          "languageAdaptation": "Representação algébrica, hipóteses explícitas e análise crítica de custos e riscos.",
          "masteryCriteria": "Atingir ao menos 75% de acertos e justificar a decisão financeira ou o cálculo utilizado.",
          "note": "Tempo estimado pela Via Olímpica; não é carga horária oficial."
        }
      ],
      "sources": [
        {
          "id": "olitef-cadernos-2026",
          "type": "caderno_estudante",
          "title": "Cadernos do Estudante OLITEF 2026",
          "institution": "OLITEF / Tesouro Direto",
          "editionYear": 2026,
          "pageSection": "Parte 2 — conteúdo teórico comum",
          "url": "https://www.olitef.com.br/baixar-provas-anteriores",
          "consultedAt": "2026-10-21",
          "official": true,
          "evidence": "mencao_direta"
        }
      ]
    },
    {
      "id": "olitef-ma02-remuneracao-indexadores",
      "olympiadId": "olitef",
      "areaId": "olitef-ma02",
      "macrotheme": "Fundamentos de renda fixa",
      "moduleId": "olitef-ma02-remuneracao",
      "moduleTitle": "Ma02 Remuneracao",
      "title": "Remuneração prefixada, pós-fixada e híbrida",
      "description": "Estudo de remuneração prefixada, pós-fixada e híbrida em situações financeiras e econômicas compatíveis com os três níveis da OLITEF.",
      "subtopics": [
        "prefixado",
        "pós-fixado",
        "híbrido",
        "CDI e taxa DI",
        "percentual do CDI",
        "Selic, IPCA, IGP-M e TR",
        "regra conhecida x valor final conhecido"
      ],
      "learningObjectives": [
        "Compreender remuneração prefixada, pós-fixada e híbrida.",
        "Aplicar os conceitos em situações, tabelas ou cálculos.",
        "Comparar alternativas e justificar uma decisão."
      ],
      "prerequisites": [
        "Operações básicas",
        "Leitura e interpretação de situações"
      ],
      "theoryOutline": [
        "prefixado",
        "pós-fixado",
        "híbrido",
        "CDI e taxa DI",
        "percentual do CDI",
        "Selic, IPCA, IGP-M e TR"
      ],
      "formulas": [],
      "commonErrors": [
        "Ignorar a unidade de tempo, a base de cálculo ou as condições do problema.",
        "Escolher uma alternativa apenas pelo valor aparente, sem considerar custos e riscos.",
        "Confundir conceitos próximos ou siglas de produtos."
      ],
      "keywords": [
        "Remuneração prefixada, pós-fixada e híbrida",
        "prefixado",
        "pós-fixado",
        "híbrido",
        "CDI e taxa DI",
        "percentual do CDI"
      ],
      "requiresUpdate": true,
      "reviewFrequencyMonths": 6,
      "status": "revisado",
      "sourceTopicIds": [
        "OLITEF-MA02-REMUNERACAO-INDEXADORES"
      ],
      "adaptations": [
        {
          "levelId": "olitef_n1",
          "originProgram": "oficial_nucleo_comum",
          "treatment": "novo",
          "importance": "essencial",
          "difficulty": 3,
          "order": 12,
          "theoryMinutes": 75,
          "exerciseMinutes": 105,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 12,
          "exerciseTypes": [
            "objetiva",
            "cálculo",
            "interpretação de texto",
            "interpretação de tabela"
          ],
          "languageAdaptation": "Linguagem concreta, tabelas, exemplos cotidianos e cálculo passo a passo.",
          "masteryCriteria": "Atingir ao menos 75% de acertos e justificar a decisão financeira ou o cálculo utilizado.",
          "note": "Tempo estimado pela Via Olímpica; não é carga horária oficial."
        },
        {
          "levelId": "olitef_n2",
          "originProgram": "oficial_nucleo_comum",
          "treatment": "aprofundamento",
          "importance": "essencial",
          "difficulty": 4,
          "order": 12,
          "theoryMinutes": 60,
          "exerciseMinutes": 120,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 13,
          "exerciseTypes": [
            "objetiva",
            "cálculo",
            "interpretação de texto",
            "interpretação de tabela"
          ],
          "languageAdaptation": "Situações com várias etapas, comparação de propostas e mais autonomia.",
          "masteryCriteria": "Atingir ao menos 75% de acertos e justificar a decisão financeira ou o cálculo utilizado.",
          "note": "Tempo estimado pela Via Olímpica; não é carga horária oficial."
        },
        {
          "levelId": "olitef_n3",
          "originProgram": "oficial_nucleo_comum",
          "treatment": "aprofundamento",
          "importance": "essencial",
          "difficulty": 4,
          "order": 12,
          "theoryMinutes": 45,
          "exerciseMinutes": 135,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 15,
          "exerciseTypes": [
            "objetiva",
            "cálculo",
            "interpretação de texto",
            "interpretação de tabela"
          ],
          "languageAdaptation": "Representação algébrica, hipóteses explícitas e análise crítica de custos e riscos.",
          "masteryCriteria": "Atingir ao menos 75% de acertos e justificar a decisão financeira ou o cálculo utilizado.",
          "note": "Tempo estimado pela Via Olímpica; não é carga horária oficial."
        }
      ],
      "sources": [
        {
          "id": "olitef-cadernos-2026",
          "type": "caderno_estudante",
          "title": "Cadernos do Estudante OLITEF 2026",
          "institution": "OLITEF / Tesouro Direto",
          "editionYear": 2026,
          "pageSection": "Parte 2 — conteúdo teórico comum",
          "url": "https://www.olitef.com.br/baixar-provas-anteriores",
          "consultedAt": "2026-10-21",
          "official": true,
          "evidence": "regra_atualizavel"
        }
      ]
    },
    {
      "id": "olitef-ma02-riscos-liquidez",
      "olympiadId": "olitef",
      "areaId": "olitef-ma02",
      "macrotheme": "Risco e retorno",
      "moduleId": "olitef-ma02-riscos",
      "moduleTitle": "Ma02 Riscos",
      "title": "Rentabilidade, riscos e liquidez",
      "description": "Estudo de rentabilidade, riscos e liquidez em situações financeiras e econômicas compatíveis com os três níveis da OLITEF.",
      "subtopics": [
        "rentabilidade",
        "retorno esperado e risco",
        "risco de crédito",
        "risco de liquidez",
        "risco de mercado",
        "prazo e resgate",
        "venda antes do vencimento",
        "marcação a mercado"
      ],
      "learningObjectives": [
        "Compreender rentabilidade, riscos e liquidez.",
        "Aplicar os conceitos em situações, tabelas ou cálculos.",
        "Comparar alternativas e justificar uma decisão."
      ],
      "prerequisites": [
        "Operações básicas",
        "Leitura e interpretação de situações"
      ],
      "theoryOutline": [
        "rentabilidade",
        "retorno esperado e risco",
        "risco de crédito",
        "risco de liquidez",
        "risco de mercado",
        "prazo e resgate"
      ],
      "formulas": [],
      "commonErrors": [
        "Ignorar a unidade de tempo, a base de cálculo ou as condições do problema.",
        "Escolher uma alternativa apenas pelo valor aparente, sem considerar custos e riscos.",
        "Confundir conceitos próximos ou siglas de produtos."
      ],
      "keywords": [
        "Rentabilidade, riscos e liquidez",
        "rentabilidade",
        "retorno esperado e risco",
        "risco de crédito",
        "risco de liquidez",
        "risco de mercado"
      ],
      "requiresUpdate": true,
      "reviewFrequencyMonths": 6,
      "status": "revisado",
      "sourceTopicIds": [
        "OLITEF-MA02-RISCOS-LIQUIDEZ"
      ],
      "adaptations": [
        {
          "levelId": "olitef_n1",
          "originProgram": "oficial_nucleo_comum",
          "treatment": "novo",
          "importance": "essencial",
          "difficulty": 3,
          "order": 13,
          "theoryMinutes": 75,
          "exerciseMinutes": 105,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 12,
          "exerciseTypes": [
            "objetiva",
            "cálculo",
            "interpretação de texto",
            "interpretação de tabela"
          ],
          "languageAdaptation": "Linguagem concreta, tabelas, exemplos cotidianos e cálculo passo a passo.",
          "masteryCriteria": "Atingir ao menos 75% de acertos e justificar a decisão financeira ou o cálculo utilizado.",
          "note": "Tempo estimado pela Via Olímpica; não é carga horária oficial."
        },
        {
          "levelId": "olitef_n2",
          "originProgram": "oficial_nucleo_comum",
          "treatment": "aprofundamento",
          "importance": "essencial",
          "difficulty": 4,
          "order": 13,
          "theoryMinutes": 60,
          "exerciseMinutes": 120,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 13,
          "exerciseTypes": [
            "objetiva",
            "cálculo",
            "interpretação de texto",
            "interpretação de tabela"
          ],
          "languageAdaptation": "Situações com várias etapas, comparação de propostas e mais autonomia.",
          "masteryCriteria": "Atingir ao menos 75% de acertos e justificar a decisão financeira ou o cálculo utilizado.",
          "note": "Tempo estimado pela Via Olímpica; não é carga horária oficial."
        },
        {
          "levelId": "olitef_n3",
          "originProgram": "oficial_nucleo_comum",
          "treatment": "aprofundamento",
          "importance": "essencial",
          "difficulty": 4,
          "order": 13,
          "theoryMinutes": 45,
          "exerciseMinutes": 135,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 15,
          "exerciseTypes": [
            "objetiva",
            "cálculo",
            "interpretação de texto",
            "interpretação de tabela"
          ],
          "languageAdaptation": "Representação algébrica, hipóteses explícitas e análise crítica de custos e riscos.",
          "masteryCriteria": "Atingir ao menos 75% de acertos e justificar a decisão financeira ou o cálculo utilizado.",
          "note": "Tempo estimado pela Via Olímpica; não é carga horária oficial."
        }
      ],
      "sources": [
        {
          "id": "olitef-cadernos-2026",
          "type": "caderno_estudante",
          "title": "Cadernos do Estudante OLITEF 2026",
          "institution": "OLITEF / Tesouro Direto",
          "editionYear": 2026,
          "pageSection": "Parte 2 — conteúdo teórico comum",
          "url": "https://www.olitef.com.br/baixar-provas-anteriores",
          "consultedAt": "2026-10-21",
          "official": true,
          "evidence": "regra_atualizavel"
        }
      ]
    },
    {
      "id": "olitef-ma02-garantias",
      "olympiadId": "olitef",
      "areaId": "olitef-ma02",
      "macrotheme": "Risco e retorno",
      "moduleId": "olitef-ma02-garantias",
      "moduleTitle": "Ma02 Garantias",
      "title": "FGC, FGCoop e garantias",
      "description": "Estudo de fgc, fgcoop e garantias em situações financeiras e econômicas compatíveis com os três níveis da OLITEF.",
      "subtopics": [
        "papel do FGC",
        "papel do FGCoop",
        "produtos cobertos",
        "condições e limites",
        "diferença para títulos do Tesouro Nacional"
      ],
      "learningObjectives": [
        "Compreender fgc, fgcoop e garantias.",
        "Aplicar os conceitos em situações, tabelas ou cálculos.",
        "Comparar alternativas e justificar uma decisão."
      ],
      "prerequisites": [
        "Operações básicas",
        "Leitura e interpretação de situações"
      ],
      "theoryOutline": [
        "papel do FGC",
        "papel do FGCoop",
        "produtos cobertos",
        "condições e limites",
        "diferença para títulos do Tesouro Nacional"
      ],
      "formulas": [],
      "commonErrors": [
        "Ignorar a unidade de tempo, a base de cálculo ou as condições do problema.",
        "Escolher uma alternativa apenas pelo valor aparente, sem considerar custos e riscos.",
        "Confundir conceitos próximos ou siglas de produtos."
      ],
      "keywords": [
        "FGC, FGCoop e garantias",
        "papel do FGC",
        "papel do FGCoop",
        "produtos cobertos",
        "condições e limites",
        "diferença para títulos do Tesouro Nacional"
      ],
      "requiresUpdate": true,
      "reviewFrequencyMonths": 6,
      "status": "revisado",
      "sourceTopicIds": [
        "OLITEF-MA02-GARANTIAS"
      ],
      "adaptations": [
        {
          "levelId": "olitef_n1",
          "originProgram": "oficial_nucleo_comum",
          "treatment": "novo",
          "importance": "essencial",
          "difficulty": 3,
          "order": 14,
          "theoryMinutes": 60,
          "exerciseMinutes": 75,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 8,
          "exerciseTypes": [
            "objetiva",
            "cálculo",
            "interpretação de texto",
            "interpretação de tabela"
          ],
          "languageAdaptation": "Linguagem concreta, tabelas, exemplos cotidianos e cálculo passo a passo.",
          "masteryCriteria": "Atingir ao menos 75% de acertos e justificar a decisão financeira ou o cálculo utilizado.",
          "note": "Tempo estimado pela Via Olímpica; não é carga horária oficial."
        },
        {
          "levelId": "olitef_n2",
          "originProgram": "oficial_nucleo_comum",
          "treatment": "aprofundamento",
          "importance": "essencial",
          "difficulty": 4,
          "order": 14,
          "theoryMinutes": 45,
          "exerciseMinutes": 90,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 10,
          "exerciseTypes": [
            "objetiva",
            "cálculo",
            "interpretação de texto",
            "interpretação de tabela"
          ],
          "languageAdaptation": "Situações com várias etapas, comparação de propostas e mais autonomia.",
          "masteryCriteria": "Atingir ao menos 75% de acertos e justificar a decisão financeira ou o cálculo utilizado.",
          "note": "Tempo estimado pela Via Olímpica; não é carga horária oficial."
        },
        {
          "levelId": "olitef_n3",
          "originProgram": "oficial_nucleo_comum",
          "treatment": "aprofundamento",
          "importance": "essencial",
          "difficulty": 4,
          "order": 14,
          "theoryMinutes": 30,
          "exerciseMinutes": 105,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 12,
          "exerciseTypes": [
            "objetiva",
            "cálculo",
            "interpretação de texto",
            "interpretação de tabela"
          ],
          "languageAdaptation": "Representação algébrica, hipóteses explícitas e análise crítica de custos e riscos.",
          "masteryCriteria": "Atingir ao menos 75% de acertos e justificar a decisão financeira ou o cálculo utilizado.",
          "note": "Tempo estimado pela Via Olímpica; não é carga horária oficial."
        }
      ],
      "sources": [
        {
          "id": "olitef-cadernos-2026",
          "type": "caderno_estudante",
          "title": "Cadernos do Estudante OLITEF 2026",
          "institution": "OLITEF / Tesouro Direto",
          "editionYear": 2026,
          "pageSection": "Parte 2 — conteúdo teórico comum",
          "url": "https://www.olitef.com.br/baixar-provas-anteriores",
          "consultedAt": "2026-10-21",
          "official": true,
          "evidence": "regra_atualizavel"
        }
      ]
    },
    {
      "id": "olitef-ma02-poupanca",
      "olympiadId": "olitef",
      "areaId": "olitef-ma02",
      "macrotheme": "Produtos de renda fixa",
      "moduleId": "olitef-ma02-produtos",
      "moduleTitle": "Ma02 Produtos",
      "title": "Poupança",
      "description": "Estudo de poupança em situações financeiras e econômicas compatíveis com os três níveis da OLITEF.",
      "subtopics": [
        "funcionamento geral",
        "remuneração ligada à Selic e TR",
        "data de crédito dos rendimentos",
        "resgate",
        "tributação",
        "comparação conceitual"
      ],
      "learningObjectives": [
        "Compreender poupança.",
        "Aplicar os conceitos em situações, tabelas ou cálculos.",
        "Comparar alternativas e justificar uma decisão."
      ],
      "prerequisites": [
        "Operações básicas",
        "Leitura e interpretação de situações"
      ],
      "theoryOutline": [
        "funcionamento geral",
        "remuneração ligada à Selic e TR",
        "data de crédito dos rendimentos",
        "resgate",
        "tributação",
        "comparação conceitual"
      ],
      "formulas": [],
      "commonErrors": [
        "Ignorar a unidade de tempo, a base de cálculo ou as condições do problema.",
        "Escolher uma alternativa apenas pelo valor aparente, sem considerar custos e riscos.",
        "Confundir conceitos próximos ou siglas de produtos."
      ],
      "keywords": [
        "Poupança",
        "funcionamento geral",
        "remuneração ligada à Selic e TR",
        "data de crédito dos rendimentos",
        "resgate",
        "tributação"
      ],
      "requiresUpdate": true,
      "reviewFrequencyMonths": 6,
      "status": "revisado",
      "sourceTopicIds": [
        "OLITEF-MA02-POUPANCA"
      ],
      "adaptations": [
        {
          "levelId": "olitef_n1",
          "originProgram": "oficial_nucleo_comum",
          "treatment": "novo",
          "importance": "essencial",
          "difficulty": 2,
          "order": 15,
          "theoryMinutes": 45,
          "exerciseMinutes": 60,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 8,
          "exerciseTypes": [
            "objetiva",
            "cálculo",
            "interpretação de texto",
            "interpretação de tabela"
          ],
          "languageAdaptation": "Linguagem concreta, tabelas, exemplos cotidianos e cálculo passo a passo.",
          "masteryCriteria": "Atingir ao menos 75% de acertos e justificar a decisão financeira ou o cálculo utilizado.",
          "note": "Tempo estimado pela Via Olímpica; não é carga horária oficial."
        },
        {
          "levelId": "olitef_n2",
          "originProgram": "oficial_nucleo_comum",
          "treatment": "aprofundamento",
          "importance": "essencial",
          "difficulty": 3,
          "order": 15,
          "theoryMinutes": 30,
          "exerciseMinutes": 75,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 8,
          "exerciseTypes": [
            "objetiva",
            "cálculo",
            "interpretação de texto",
            "interpretação de tabela"
          ],
          "languageAdaptation": "Situações com várias etapas, comparação de propostas e mais autonomia.",
          "masteryCriteria": "Atingir ao menos 75% de acertos e justificar a decisão financeira ou o cálculo utilizado.",
          "note": "Tempo estimado pela Via Olímpica; não é carga horária oficial."
        },
        {
          "levelId": "olitef_n3",
          "originProgram": "oficial_nucleo_comum",
          "treatment": "aprofundamento",
          "importance": "essencial",
          "difficulty": 3,
          "order": 15,
          "theoryMinutes": 30,
          "exerciseMinutes": 90,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 10,
          "exerciseTypes": [
            "objetiva",
            "cálculo",
            "interpretação de texto",
            "interpretação de tabela"
          ],
          "languageAdaptation": "Representação algébrica, hipóteses explícitas e análise crítica de custos e riscos.",
          "masteryCriteria": "Atingir ao menos 75% de acertos e justificar a decisão financeira ou o cálculo utilizado.",
          "note": "Tempo estimado pela Via Olímpica; não é carga horária oficial."
        }
      ],
      "sources": [
        {
          "id": "olitef-cadernos-2026",
          "type": "caderno_estudante",
          "title": "Cadernos do Estudante OLITEF 2026",
          "institution": "OLITEF / Tesouro Direto",
          "editionYear": 2026,
          "pageSection": "Parte 2 — conteúdo teórico comum",
          "url": "https://www.olitef.com.br/baixar-provas-anteriores",
          "consultedAt": "2026-10-21",
          "official": true,
          "evidence": "regra_atualizavel"
        }
      ]
    },
    {
      "id": "olitef-ma02-tesouro-direto",
      "olympiadId": "olitef",
      "areaId": "olitef-ma02",
      "macrotheme": "Produtos de renda fixa",
      "moduleId": "olitef-ma02-tesouro",
      "moduleTitle": "Ma02 Tesouro",
      "title": "Tesouro Direto e títulos públicos",
      "description": "Estudo de tesouro direto e títulos públicos em situações financeiras e econômicas compatíveis com os três níveis da OLITEF.",
      "subtopics": [
        "empréstimo ao governo",
        "vencimento e fluxos",
        "venda antecipada",
        "Tesouro Selic",
        "Tesouro Reserva",
        "Tesouro Prefixado",
        "Tesouro IPCA+",
        "Tesouro Educa+",
        "Tesouro RendA+"
      ],
      "learningObjectives": [
        "Compreender tesouro direto e títulos públicos.",
        "Aplicar os conceitos em situações, tabelas ou cálculos.",
        "Comparar alternativas e justificar uma decisão."
      ],
      "prerequisites": [
        "Operações básicas",
        "Leitura e interpretação de situações"
      ],
      "theoryOutline": [
        "empréstimo ao governo",
        "vencimento e fluxos",
        "venda antecipada",
        "Tesouro Selic",
        "Tesouro Reserva",
        "Tesouro Prefixado"
      ],
      "formulas": [],
      "commonErrors": [
        "Ignorar a unidade de tempo, a base de cálculo ou as condições do problema.",
        "Escolher uma alternativa apenas pelo valor aparente, sem considerar custos e riscos.",
        "Confundir conceitos próximos ou siglas de produtos."
      ],
      "keywords": [
        "Tesouro Direto e títulos públicos",
        "empréstimo ao governo",
        "vencimento e fluxos",
        "venda antecipada",
        "Tesouro Selic",
        "Tesouro Reserva"
      ],
      "requiresUpdate": true,
      "reviewFrequencyMonths": 6,
      "status": "revisado",
      "sourceTopicIds": [
        "OLITEF-MA02-TESOURO-DIRETO"
      ],
      "adaptations": [
        {
          "levelId": "olitef_n1",
          "originProgram": "oficial_nucleo_comum",
          "treatment": "novo",
          "importance": "essencial",
          "difficulty": 3,
          "order": 16,
          "theoryMinutes": 90,
          "exerciseMinutes": 120,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 13,
          "exerciseTypes": [
            "objetiva",
            "cálculo",
            "interpretação de texto",
            "interpretação de tabela"
          ],
          "languageAdaptation": "Linguagem concreta, tabelas, exemplos cotidianos e cálculo passo a passo.",
          "masteryCriteria": "Atingir ao menos 75% de acertos e justificar a decisão financeira ou o cálculo utilizado.",
          "note": "Tempo estimado pela Via Olímpica; não é carga horária oficial."
        },
        {
          "levelId": "olitef_n2",
          "originProgram": "oficial_nucleo_comum",
          "treatment": "aprofundamento",
          "importance": "essencial",
          "difficulty": 4,
          "order": 16,
          "theoryMinutes": 75,
          "exerciseMinutes": 135,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 15,
          "exerciseTypes": [
            "objetiva",
            "cálculo",
            "interpretação de texto",
            "interpretação de tabela"
          ],
          "languageAdaptation": "Situações com várias etapas, comparação de propostas e mais autonomia.",
          "masteryCriteria": "Atingir ao menos 75% de acertos e justificar a decisão financeira ou o cálculo utilizado.",
          "note": "Tempo estimado pela Via Olímpica; não é carga horária oficial."
        },
        {
          "levelId": "olitef_n3",
          "originProgram": "oficial_nucleo_comum",
          "treatment": "aprofundamento",
          "importance": "essencial",
          "difficulty": 4,
          "order": 16,
          "theoryMinutes": 60,
          "exerciseMinutes": 150,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 17,
          "exerciseTypes": [
            "objetiva",
            "cálculo",
            "interpretação de texto",
            "interpretação de tabela"
          ],
          "languageAdaptation": "Representação algébrica, hipóteses explícitas e análise crítica de custos e riscos.",
          "masteryCriteria": "Atingir ao menos 75% de acertos e justificar a decisão financeira ou o cálculo utilizado.",
          "note": "Tempo estimado pela Via Olímpica; não é carga horária oficial."
        }
      ],
      "sources": [
        {
          "id": "olitef-cadernos-2026",
          "type": "caderno_estudante",
          "title": "Cadernos do Estudante OLITEF 2026",
          "institution": "OLITEF / Tesouro Direto",
          "editionYear": 2026,
          "pageSection": "Parte 2 — conteúdo teórico comum",
          "url": "https://www.olitef.com.br/baixar-provas-anteriores",
          "consultedAt": "2026-10-21",
          "official": true,
          "evidence": "regra_atualizavel"
        }
      ]
    },
    {
      "id": "olitef-ma02-produtos-bancarios",
      "olympiadId": "olitef",
      "areaId": "olitef-ma02",
      "macrotheme": "Produtos de renda fixa",
      "moduleId": "olitef-ma02-produtos",
      "moduleTitle": "Ma02 Produtos",
      "title": "CDB, RDB, LCI, LCA e RDC",
      "description": "Estudo de cdb, rdb, lci, lca e rdc em situações financeiras e econômicas compatíveis com os três níveis da OLITEF.",
      "subtopics": [
        "emissor",
        "remuneração",
        "prazos",
        "liquidez",
        "riscos e garantias",
        "tratamento tributário"
      ],
      "learningObjectives": [
        "Compreender cdb, rdb, lci, lca e rdc.",
        "Aplicar os conceitos em situações, tabelas ou cálculos.",
        "Comparar alternativas e justificar uma decisão."
      ],
      "prerequisites": [
        "Operações básicas",
        "Leitura e interpretação de situações"
      ],
      "theoryOutline": [
        "emissor",
        "remuneração",
        "prazos",
        "liquidez",
        "riscos e garantias",
        "tratamento tributário"
      ],
      "formulas": [],
      "commonErrors": [
        "Ignorar a unidade de tempo, a base de cálculo ou as condições do problema.",
        "Escolher uma alternativa apenas pelo valor aparente, sem considerar custos e riscos.",
        "Confundir conceitos próximos ou siglas de produtos."
      ],
      "keywords": [
        "CDB, RDB, LCI, LCA e RDC",
        "emissor",
        "remuneração",
        "prazos",
        "liquidez",
        "riscos e garantias"
      ],
      "requiresUpdate": true,
      "reviewFrequencyMonths": 6,
      "status": "revisado",
      "sourceTopicIds": [
        "OLITEF-MA02-PRODUTOS-BANCARIOS"
      ],
      "adaptations": [
        {
          "levelId": "olitef_n1",
          "originProgram": "oficial_nucleo_comum",
          "treatment": "novo",
          "importance": "essencial",
          "difficulty": 3,
          "order": 17,
          "theoryMinutes": 75,
          "exerciseMinutes": 105,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 12,
          "exerciseTypes": [
            "objetiva",
            "cálculo",
            "interpretação de texto",
            "interpretação de tabela"
          ],
          "languageAdaptation": "Linguagem concreta, tabelas, exemplos cotidianos e cálculo passo a passo.",
          "masteryCriteria": "Atingir ao menos 75% de acertos e justificar a decisão financeira ou o cálculo utilizado.",
          "note": "Tempo estimado pela Via Olímpica; não é carga horária oficial."
        },
        {
          "levelId": "olitef_n2",
          "originProgram": "oficial_nucleo_comum",
          "treatment": "aprofundamento",
          "importance": "essencial",
          "difficulty": 4,
          "order": 17,
          "theoryMinutes": 60,
          "exerciseMinutes": 120,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 13,
          "exerciseTypes": [
            "objetiva",
            "cálculo",
            "interpretação de texto",
            "interpretação de tabela"
          ],
          "languageAdaptation": "Situações com várias etapas, comparação de propostas e mais autonomia.",
          "masteryCriteria": "Atingir ao menos 75% de acertos e justificar a decisão financeira ou o cálculo utilizado.",
          "note": "Tempo estimado pela Via Olímpica; não é carga horária oficial."
        },
        {
          "levelId": "olitef_n3",
          "originProgram": "oficial_nucleo_comum",
          "treatment": "aprofundamento",
          "importance": "essencial",
          "difficulty": 4,
          "order": 17,
          "theoryMinutes": 45,
          "exerciseMinutes": 135,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 15,
          "exerciseTypes": [
            "objetiva",
            "cálculo",
            "interpretação de texto",
            "interpretação de tabela"
          ],
          "languageAdaptation": "Representação algébrica, hipóteses explícitas e análise crítica de custos e riscos.",
          "masteryCriteria": "Atingir ao menos 75% de acertos e justificar a decisão financeira ou o cálculo utilizado.",
          "note": "Tempo estimado pela Via Olímpica; não é carga horária oficial."
        }
      ],
      "sources": [
        {
          "id": "olitef-cadernos-2026",
          "type": "caderno_estudante",
          "title": "Cadernos do Estudante OLITEF 2026",
          "institution": "OLITEF / Tesouro Direto",
          "editionYear": 2026,
          "pageSection": "Parte 2 — conteúdo teórico comum",
          "url": "https://www.olitef.com.br/baixar-provas-anteriores",
          "consultedAt": "2026-10-21",
          "official": true,
          "evidence": "regra_atualizavel"
        }
      ]
    },
    {
      "id": "olitef-ma02-debentures",
      "olympiadId": "olitef",
      "areaId": "olitef-ma02",
      "macrotheme": "Produtos de renda fixa",
      "moduleId": "olitef-ma02-produtos",
      "moduleTitle": "Ma02 Produtos",
      "title": "Debêntures",
      "description": "Estudo de debêntures em situações financeiras e econômicas compatíveis com os três níveis da OLITEF.",
      "subtopics": [
        "captação por empresas",
        "investidor como credor",
        "remuneração e vencimento",
        "risco de crédito",
        "liquidez",
        "ausência de FGC"
      ],
      "learningObjectives": [
        "Compreender debêntures.",
        "Aplicar os conceitos em situações, tabelas ou cálculos.",
        "Comparar alternativas e justificar uma decisão."
      ],
      "prerequisites": [
        "Operações básicas",
        "Leitura e interpretação de situações"
      ],
      "theoryOutline": [
        "captação por empresas",
        "investidor como credor",
        "remuneração e vencimento",
        "risco de crédito",
        "liquidez",
        "ausência de FGC"
      ],
      "formulas": [],
      "commonErrors": [
        "Ignorar a unidade de tempo, a base de cálculo ou as condições do problema.",
        "Escolher uma alternativa apenas pelo valor aparente, sem considerar custos e riscos.",
        "Confundir conceitos próximos ou siglas de produtos."
      ],
      "keywords": [
        "Debêntures",
        "captação por empresas",
        "investidor como credor",
        "remuneração e vencimento",
        "risco de crédito",
        "liquidez"
      ],
      "requiresUpdate": true,
      "reviewFrequencyMonths": 6,
      "status": "revisado",
      "sourceTopicIds": [
        "OLITEF-MA02-DEBENTURES"
      ],
      "adaptations": [
        {
          "levelId": "olitef_n1",
          "originProgram": "oficial_nucleo_comum",
          "treatment": "novo",
          "importance": "essencial",
          "difficulty": 3,
          "order": 18,
          "theoryMinutes": 60,
          "exerciseMinutes": 90,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 10,
          "exerciseTypes": [
            "objetiva",
            "cálculo",
            "interpretação de texto",
            "interpretação de tabela"
          ],
          "languageAdaptation": "Linguagem concreta, tabelas, exemplos cotidianos e cálculo passo a passo.",
          "masteryCriteria": "Atingir ao menos 75% de acertos e justificar a decisão financeira ou o cálculo utilizado.",
          "note": "Tempo estimado pela Via Olímpica; não é carga horária oficial."
        },
        {
          "levelId": "olitef_n2",
          "originProgram": "oficial_nucleo_comum",
          "treatment": "aprofundamento",
          "importance": "essencial",
          "difficulty": 4,
          "order": 18,
          "theoryMinutes": 45,
          "exerciseMinutes": 105,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 12,
          "exerciseTypes": [
            "objetiva",
            "cálculo",
            "interpretação de texto",
            "interpretação de tabela"
          ],
          "languageAdaptation": "Situações com várias etapas, comparação de propostas e mais autonomia.",
          "masteryCriteria": "Atingir ao menos 75% de acertos e justificar a decisão financeira ou o cálculo utilizado.",
          "note": "Tempo estimado pela Via Olímpica; não é carga horária oficial."
        },
        {
          "levelId": "olitef_n3",
          "originProgram": "oficial_nucleo_comum",
          "treatment": "aprofundamento",
          "importance": "essencial",
          "difficulty": 4,
          "order": 18,
          "theoryMinutes": 30,
          "exerciseMinutes": 120,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 13,
          "exerciseTypes": [
            "objetiva",
            "cálculo",
            "interpretação de texto",
            "interpretação de tabela"
          ],
          "languageAdaptation": "Representação algébrica, hipóteses explícitas e análise crítica de custos e riscos.",
          "masteryCriteria": "Atingir ao menos 75% de acertos e justificar a decisão financeira ou o cálculo utilizado.",
          "note": "Tempo estimado pela Via Olímpica; não é carga horária oficial."
        }
      ],
      "sources": [
        {
          "id": "olitef-cadernos-2026",
          "type": "caderno_estudante",
          "title": "Cadernos do Estudante OLITEF 2026",
          "institution": "OLITEF / Tesouro Direto",
          "editionYear": 2026,
          "pageSection": "Parte 2 — conteúdo teórico comum",
          "url": "https://www.olitef.com.br/baixar-provas-anteriores",
          "consultedAt": "2026-10-21",
          "official": true,
          "evidence": "regra_atualizavel"
        }
      ]
    },
    {
      "id": "olitef-ma03-acoes",
      "olympiadId": "olitef",
      "areaId": "olitef-ma03",
      "macrotheme": "Participação em empresas",
      "moduleId": "olitef-ma03-acoes",
      "moduleTitle": "Ma03 Acoes",
      "title": "Ações, valorização e dividendos",
      "description": "Estudo de ações, valorização e dividendos em situações financeiras e econômicas compatíveis com os três níveis da OLITEF.",
      "subtopics": [
        "participação no capital",
        "diferença entre dívida e participação",
        "valorização e desvalorização",
        "dividendos",
        "volatilidade",
        "possibilidade de perdas"
      ],
      "learningObjectives": [
        "Compreender ações, valorização e dividendos.",
        "Aplicar os conceitos em situações, tabelas ou cálculos.",
        "Comparar alternativas e justificar uma decisão."
      ],
      "prerequisites": [
        "Operações básicas",
        "Leitura e interpretação de situações"
      ],
      "theoryOutline": [
        "participação no capital",
        "diferença entre dívida e participação",
        "valorização e desvalorização",
        "dividendos",
        "volatilidade",
        "possibilidade de perdas"
      ],
      "formulas": [],
      "commonErrors": [
        "Ignorar a unidade de tempo, a base de cálculo ou as condições do problema.",
        "Escolher uma alternativa apenas pelo valor aparente, sem considerar custos e riscos.",
        "Confundir conceitos próximos ou siglas de produtos."
      ],
      "keywords": [
        "Ações, valorização e dividendos",
        "participação no capital",
        "diferença entre dívida e participação",
        "valorização e desvalorização",
        "dividendos",
        "volatilidade"
      ],
      "requiresUpdate": true,
      "reviewFrequencyMonths": 6,
      "status": "revisado",
      "sourceTopicIds": [
        "OLITEF-MA03-ACOES"
      ],
      "adaptations": [
        {
          "levelId": "olitef_n1",
          "originProgram": "oficial_nucleo_comum",
          "treatment": "novo",
          "importance": "essencial",
          "difficulty": 3,
          "order": 19,
          "theoryMinutes": 75,
          "exerciseMinutes": 105,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 12,
          "exerciseTypes": [
            "objetiva",
            "cálculo",
            "interpretação de texto",
            "interpretação de tabela"
          ],
          "languageAdaptation": "Linguagem concreta, tabelas, exemplos cotidianos e cálculo passo a passo.",
          "masteryCriteria": "Atingir ao menos 75% de acertos e justificar a decisão financeira ou o cálculo utilizado.",
          "note": "Tempo estimado pela Via Olímpica; não é carga horária oficial."
        },
        {
          "levelId": "olitef_n2",
          "originProgram": "oficial_nucleo_comum",
          "treatment": "aprofundamento",
          "importance": "essencial",
          "difficulty": 4,
          "order": 19,
          "theoryMinutes": 60,
          "exerciseMinutes": 120,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 13,
          "exerciseTypes": [
            "objetiva",
            "cálculo",
            "interpretação de texto",
            "interpretação de tabela"
          ],
          "languageAdaptation": "Situações com várias etapas, comparação de propostas e mais autonomia.",
          "masteryCriteria": "Atingir ao menos 75% de acertos e justificar a decisão financeira ou o cálculo utilizado.",
          "note": "Tempo estimado pela Via Olímpica; não é carga horária oficial."
        },
        {
          "levelId": "olitef_n3",
          "originProgram": "oficial_nucleo_comum",
          "treatment": "aprofundamento",
          "importance": "essencial",
          "difficulty": 4,
          "order": 19,
          "theoryMinutes": 45,
          "exerciseMinutes": 135,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 15,
          "exerciseTypes": [
            "objetiva",
            "cálculo",
            "interpretação de texto",
            "interpretação de tabela"
          ],
          "languageAdaptation": "Representação algébrica, hipóteses explícitas e análise crítica de custos e riscos.",
          "masteryCriteria": "Atingir ao menos 75% de acertos e justificar a decisão financeira ou o cálculo utilizado.",
          "note": "Tempo estimado pela Via Olímpica; não é carga horária oficial."
        }
      ],
      "sources": [
        {
          "id": "olitef-cadernos-2026",
          "type": "caderno_estudante",
          "title": "Cadernos do Estudante OLITEF 2026",
          "institution": "OLITEF / Tesouro Direto",
          "editionYear": 2026,
          "pageSection": "Parte 2 — conteúdo teórico comum",
          "url": "https://www.olitef.com.br/baixar-provas-anteriores",
          "consultedAt": "2026-10-21",
          "official": true,
          "evidence": "regra_atualizavel"
        }
      ]
    },
    {
      "id": "olitef-ma03-bolsa-indices",
      "olympiadId": "olitef",
      "areaId": "olitef-ma03",
      "macrotheme": "Mercado de capitais",
      "moduleId": "olitef-ma03-mercado",
      "moduleTitle": "Ma03 Mercado",
      "title": "Bolsa de valores, B3 e índices",
      "description": "Estudo de bolsa de valores, b3 e índices em situações financeiras e econômicas compatíveis com os três níveis da OLITEF.",
      "subtopics": [
        "função dos mercados",
        "compra e venda de ativos",
        "Bovespa, BM&F e Cetip",
        "formação da B3",
        "negociação eletrônica",
        "índices de mercado",
        "Ibovespa"
      ],
      "learningObjectives": [
        "Compreender bolsa de valores, b3 e índices.",
        "Aplicar os conceitos em situações, tabelas ou cálculos.",
        "Comparar alternativas e justificar uma decisão."
      ],
      "prerequisites": [
        "Operações básicas",
        "Leitura e interpretação de situações"
      ],
      "theoryOutline": [
        "função dos mercados",
        "compra e venda de ativos",
        "Bovespa, BM&F e Cetip",
        "formação da B3",
        "negociação eletrônica",
        "índices de mercado"
      ],
      "formulas": [],
      "commonErrors": [
        "Ignorar a unidade de tempo, a base de cálculo ou as condições do problema.",
        "Escolher uma alternativa apenas pelo valor aparente, sem considerar custos e riscos.",
        "Confundir conceitos próximos ou siglas de produtos."
      ],
      "keywords": [
        "Bolsa de valores, B3 e índices",
        "função dos mercados",
        "compra e venda de ativos",
        "Bovespa, BM&F e Cetip",
        "formação da B3",
        "negociação eletrônica"
      ],
      "requiresUpdate": true,
      "reviewFrequencyMonths": 6,
      "status": "revisado",
      "sourceTopicIds": [
        "OLITEF-MA03-BOLSA-INDICES"
      ],
      "adaptations": [
        {
          "levelId": "olitef_n1",
          "originProgram": "oficial_nucleo_comum",
          "treatment": "novo",
          "importance": "essencial",
          "difficulty": 3,
          "order": 20,
          "theoryMinutes": 60,
          "exerciseMinutes": 90,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 10,
          "exerciseTypes": [
            "objetiva",
            "cálculo",
            "interpretação de texto",
            "interpretação de tabela"
          ],
          "languageAdaptation": "Linguagem concreta, tabelas, exemplos cotidianos e cálculo passo a passo.",
          "masteryCriteria": "Atingir ao menos 75% de acertos e justificar a decisão financeira ou o cálculo utilizado.",
          "note": "Tempo estimado pela Via Olímpica; não é carga horária oficial."
        },
        {
          "levelId": "olitef_n2",
          "originProgram": "oficial_nucleo_comum",
          "treatment": "aprofundamento",
          "importance": "essencial",
          "difficulty": 4,
          "order": 20,
          "theoryMinutes": 45,
          "exerciseMinutes": 105,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 12,
          "exerciseTypes": [
            "objetiva",
            "cálculo",
            "interpretação de texto",
            "interpretação de tabela"
          ],
          "languageAdaptation": "Situações com várias etapas, comparação de propostas e mais autonomia.",
          "masteryCriteria": "Atingir ao menos 75% de acertos e justificar a decisão financeira ou o cálculo utilizado.",
          "note": "Tempo estimado pela Via Olímpica; não é carga horária oficial."
        },
        {
          "levelId": "olitef_n3",
          "originProgram": "oficial_nucleo_comum",
          "treatment": "aprofundamento",
          "importance": "essencial",
          "difficulty": 4,
          "order": 20,
          "theoryMinutes": 30,
          "exerciseMinutes": 120,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 13,
          "exerciseTypes": [
            "objetiva",
            "cálculo",
            "interpretação de texto",
            "interpretação de tabela"
          ],
          "languageAdaptation": "Representação algébrica, hipóteses explícitas e análise crítica de custos e riscos.",
          "masteryCriteria": "Atingir ao menos 75% de acertos e justificar a decisão financeira ou o cálculo utilizado.",
          "note": "Tempo estimado pela Via Olímpica; não é carga horária oficial."
        }
      ],
      "sources": [
        {
          "id": "olitef-cadernos-2026",
          "type": "caderno_estudante",
          "title": "Cadernos do Estudante OLITEF 2026",
          "institution": "OLITEF / Tesouro Direto",
          "editionYear": 2026,
          "pageSection": "Parte 2 — conteúdo teórico comum",
          "url": "https://www.olitef.com.br/baixar-provas-anteriores",
          "consultedAt": "2026-10-21",
          "official": true,
          "evidence": "regra_atualizavel"
        }
      ]
    },
    {
      "id": "olitef-ma03-fundos-instrumentos",
      "olympiadId": "olitef",
      "areaId": "olitef-ma03",
      "macrotheme": "Veículos de investimento",
      "moduleId": "olitef-ma03-instrumentos",
      "moduleTitle": "Ma03 Instrumentos",
      "title": "Fundos, FIIs, Fiagros, ETFs e BDRs",
      "description": "Estudo de fundos, fiis, fiagros, etfs e bdrs em situações financeiras e econômicas compatíveis com os três níveis da OLITEF.",
      "subtopics": [
        "fundos e cotas",
        "fundos imobiliários",
        "Fiagros",
        "ETFs",
        "BDRs",
        "classe e ativos de cada instrumento"
      ],
      "learningObjectives": [
        "Compreender fundos, fiis, fiagros, etfs e bdrs.",
        "Aplicar os conceitos em situações, tabelas ou cálculos.",
        "Comparar alternativas e justificar uma decisão."
      ],
      "prerequisites": [
        "Operações básicas",
        "Leitura e interpretação de situações"
      ],
      "theoryOutline": [
        "fundos e cotas",
        "fundos imobiliários",
        "Fiagros",
        "ETFs",
        "BDRs",
        "classe e ativos de cada instrumento"
      ],
      "formulas": [],
      "commonErrors": [
        "Ignorar a unidade de tempo, a base de cálculo ou as condições do problema.",
        "Escolher uma alternativa apenas pelo valor aparente, sem considerar custos e riscos.",
        "Confundir conceitos próximos ou siglas de produtos."
      ],
      "keywords": [
        "Fundos, FIIs, Fiagros, ETFs e BDRs",
        "fundos e cotas",
        "fundos imobiliários",
        "Fiagros",
        "ETFs",
        "BDRs"
      ],
      "requiresUpdate": true,
      "reviewFrequencyMonths": 6,
      "status": "revisado",
      "sourceTopicIds": [
        "OLITEF-MA03-FUNDOS-INSTRUMENTOS"
      ],
      "adaptations": [
        {
          "levelId": "olitef_n1",
          "originProgram": "oficial_nucleo_comum",
          "treatment": "novo",
          "importance": "essencial",
          "difficulty": 3,
          "order": 21,
          "theoryMinutes": 75,
          "exerciseMinutes": 105,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 12,
          "exerciseTypes": [
            "objetiva",
            "cálculo",
            "interpretação de texto",
            "interpretação de tabela"
          ],
          "languageAdaptation": "Linguagem concreta, tabelas, exemplos cotidianos e cálculo passo a passo.",
          "masteryCriteria": "Atingir ao menos 75% de acertos e justificar a decisão financeira ou o cálculo utilizado.",
          "note": "Tempo estimado pela Via Olímpica; não é carga horária oficial."
        },
        {
          "levelId": "olitef_n2",
          "originProgram": "oficial_nucleo_comum",
          "treatment": "aprofundamento",
          "importance": "essencial",
          "difficulty": 4,
          "order": 21,
          "theoryMinutes": 60,
          "exerciseMinutes": 120,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 13,
          "exerciseTypes": [
            "objetiva",
            "cálculo",
            "interpretação de texto",
            "interpretação de tabela"
          ],
          "languageAdaptation": "Situações com várias etapas, comparação de propostas e mais autonomia.",
          "masteryCriteria": "Atingir ao menos 75% de acertos e justificar a decisão financeira ou o cálculo utilizado.",
          "note": "Tempo estimado pela Via Olímpica; não é carga horária oficial."
        },
        {
          "levelId": "olitef_n3",
          "originProgram": "oficial_nucleo_comum",
          "treatment": "aprofundamento",
          "importance": "essencial",
          "difficulty": 4,
          "order": 21,
          "theoryMinutes": 45,
          "exerciseMinutes": 135,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 15,
          "exerciseTypes": [
            "objetiva",
            "cálculo",
            "interpretação de texto",
            "interpretação de tabela"
          ],
          "languageAdaptation": "Representação algébrica, hipóteses explícitas e análise crítica de custos e riscos.",
          "masteryCriteria": "Atingir ao menos 75% de acertos e justificar a decisão financeira ou o cálculo utilizado.",
          "note": "Tempo estimado pela Via Olímpica; não é carga horária oficial."
        }
      ],
      "sources": [
        {
          "id": "olitef-cadernos-2026",
          "type": "caderno_estudante",
          "title": "Cadernos do Estudante OLITEF 2026",
          "institution": "OLITEF / Tesouro Direto",
          "editionYear": 2026,
          "pageSection": "Parte 2 — conteúdo teórico comum",
          "url": "https://www.olitef.com.br/baixar-provas-anteriores",
          "consultedAt": "2026-10-21",
          "official": true,
          "evidence": "regra_atualizavel"
        }
      ]
    },
    {
      "id": "olitef-ma03-carteira-diversificacao",
      "olympiadId": "olitef",
      "areaId": "olitef-ma03",
      "macrotheme": "Decisões de investimento",
      "moduleId": "olitef-ma03-carteira",
      "moduleTitle": "Ma03 Carteira",
      "title": "Carteira, diversificação e objetivos",
      "description": "Estudo de carteira, diversificação e objetivos em situações financeiras e econômicas compatíveis com os três níveis da OLITEF.",
      "subtopics": [
        "carteira de investimentos",
        "diversificação",
        "horizonte de tempo",
        "risco e retorno",
        "adequação ao objetivo",
        "resultado total e custos"
      ],
      "learningObjectives": [
        "Compreender carteira, diversificação e objetivos.",
        "Aplicar os conceitos em situações, tabelas ou cálculos.",
        "Comparar alternativas e justificar uma decisão."
      ],
      "prerequisites": [
        "Operações básicas",
        "Leitura e interpretação de situações"
      ],
      "theoryOutline": [
        "carteira de investimentos",
        "diversificação",
        "horizonte de tempo",
        "risco e retorno",
        "adequação ao objetivo",
        "resultado total e custos"
      ],
      "formulas": [],
      "commonErrors": [
        "Ignorar a unidade de tempo, a base de cálculo ou as condições do problema.",
        "Escolher uma alternativa apenas pelo valor aparente, sem considerar custos e riscos.",
        "Confundir conceitos próximos ou siglas de produtos."
      ],
      "keywords": [
        "Carteira, diversificação e objetivos",
        "carteira de investimentos",
        "diversificação",
        "horizonte de tempo",
        "risco e retorno",
        "adequação ao objetivo"
      ],
      "requiresUpdate": true,
      "reviewFrequencyMonths": 6,
      "status": "revisado",
      "sourceTopicIds": [
        "OLITEF-MA03-CARTEIRA-DIVERSIFICACAO"
      ],
      "adaptations": [
        {
          "levelId": "olitef_n1",
          "originProgram": "oficial_nucleo_comum",
          "treatment": "novo",
          "importance": "essencial",
          "difficulty": 4,
          "order": 22,
          "theoryMinutes": 75,
          "exerciseMinutes": 105,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 12,
          "exerciseTypes": [
            "objetiva",
            "cálculo",
            "interpretação de texto",
            "interpretação de tabela"
          ],
          "languageAdaptation": "Linguagem concreta, tabelas, exemplos cotidianos e cálculo passo a passo.",
          "masteryCriteria": "Atingir ao menos 75% de acertos e justificar a decisão financeira ou o cálculo utilizado.",
          "note": "Tempo estimado pela Via Olímpica; não é carga horária oficial."
        },
        {
          "levelId": "olitef_n2",
          "originProgram": "oficial_nucleo_comum",
          "treatment": "aprofundamento",
          "importance": "essencial",
          "difficulty": 4,
          "order": 22,
          "theoryMinutes": 60,
          "exerciseMinutes": 120,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 13,
          "exerciseTypes": [
            "objetiva",
            "cálculo",
            "interpretação de texto",
            "interpretação de tabela"
          ],
          "languageAdaptation": "Situações com várias etapas, comparação de propostas e mais autonomia.",
          "masteryCriteria": "Atingir ao menos 75% de acertos e justificar a decisão financeira ou o cálculo utilizado.",
          "note": "Tempo estimado pela Via Olímpica; não é carga horária oficial."
        },
        {
          "levelId": "olitef_n3",
          "originProgram": "oficial_nucleo_comum",
          "treatment": "aprofundamento",
          "importance": "essencial",
          "difficulty": 5,
          "order": 22,
          "theoryMinutes": 45,
          "exerciseMinutes": 135,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 15,
          "exerciseTypes": [
            "objetiva",
            "cálculo",
            "interpretação de texto",
            "interpretação de tabela"
          ],
          "languageAdaptation": "Representação algébrica, hipóteses explícitas e análise crítica de custos e riscos.",
          "masteryCriteria": "Atingir ao menos 75% de acertos e justificar a decisão financeira ou o cálculo utilizado.",
          "note": "Tempo estimado pela Via Olímpica; não é carga horária oficial."
        }
      ],
      "sources": [
        {
          "id": "olitef-cadernos-2026",
          "type": "caderno_estudante",
          "title": "Cadernos do Estudante OLITEF 2026",
          "institution": "OLITEF / Tesouro Direto",
          "editionYear": 2026,
          "pageSection": "Parte 2 — conteúdo teórico comum",
          "url": "https://www.olitef.com.br/baixar-provas-anteriores",
          "consultedAt": "2026-10-21",
          "official": true,
          "evidence": "regra_atualizavel"
        }
      ]
    },
    {
      "id": "olitef-formacao-trabalho-renda",
      "olympiadId": "olitef",
      "areaId": "olitef-formacao",
      "macrotheme": "Vida financeira",
      "moduleId": "olitef-formacao-escolhas",
      "moduleTitle": "Formacao Escolhas",
      "title": "Trabalho, renda e projetos de vida",
      "description": "Estudo de trabalho, renda e projetos de vida em situações financeiras e econômicas compatíveis com os três níveis da OLITEF.",
      "subtopics": [
        "formas de obtenção de renda",
        "conhecimentos e oportunidades",
        "objetivos pessoais",
        "uso dos recursos",
        "consequências futuras"
      ],
      "learningObjectives": [
        "Compreender trabalho, renda e projetos de vida.",
        "Aplicar os conceitos em situações, tabelas ou cálculos.",
        "Comparar alternativas e justificar uma decisão."
      ],
      "prerequisites": [
        "Operações básicas",
        "Leitura e interpretação de situações"
      ],
      "theoryOutline": [
        "formas de obtenção de renda",
        "conhecimentos e oportunidades",
        "objetivos pessoais",
        "uso dos recursos",
        "consequências futuras"
      ],
      "formulas": [],
      "commonErrors": [
        "Ignorar a unidade de tempo, a base de cálculo ou as condições do problema.",
        "Escolher uma alternativa apenas pelo valor aparente, sem considerar custos e riscos.",
        "Confundir conceitos próximos ou siglas de produtos."
      ],
      "keywords": [
        "Trabalho, renda e projetos de vida",
        "formas de obtenção de renda",
        "conhecimentos e oportunidades",
        "objetivos pessoais",
        "uso dos recursos",
        "consequências futuras"
      ],
      "requiresUpdate": false,
      "reviewFrequencyMonths": null,
      "status": "revisado",
      "sourceTopicIds": [
        "OLITEF-FORMACAO-TRABALHO-RENDA"
      ],
      "adaptations": [
        {
          "levelId": "olitef_n1",
          "originProgram": "oficial_nivel_atual",
          "treatment": "novo",
          "importance": "essencial",
          "difficulty": 2,
          "order": 23,
          "theoryMinutes": 45,
          "exerciseMinutes": 60,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 8,
          "exerciseTypes": [
            "objetiva",
            "cálculo",
            "interpretação de texto",
            "interpretação de tabela"
          ],
          "languageAdaptation": "Linguagem concreta, tabelas, exemplos cotidianos e cálculo passo a passo.",
          "masteryCriteria": "Atingir ao menos 75% de acertos e justificar a decisão financeira ou o cálculo utilizado.",
          "note": "Tempo estimado pela Via Olímpica; não é carga horária oficial."
        },
        {
          "levelId": "olitef_n2",
          "originProgram": "oficial_nivel_atual",
          "treatment": "aprofundamento",
          "importance": "essencial",
          "difficulty": 3,
          "order": 23,
          "theoryMinutes": 30,
          "exerciseMinutes": 75,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 8,
          "exerciseTypes": [
            "objetiva",
            "cálculo",
            "interpretação de texto",
            "interpretação de tabela"
          ],
          "languageAdaptation": "Situações com várias etapas, comparação de propostas e mais autonomia.",
          "masteryCriteria": "Atingir ao menos 75% de acertos e justificar a decisão financeira ou o cálculo utilizado.",
          "note": "Tempo estimado pela Via Olímpica; não é carga horária oficial."
        },
        {
          "levelId": "olitef_n3",
          "originProgram": "oficial_nivel_atual",
          "treatment": "aprofundamento",
          "importance": "essencial",
          "difficulty": 3,
          "order": 23,
          "theoryMinutes": 30,
          "exerciseMinutes": 90,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 10,
          "exerciseTypes": [
            "objetiva",
            "cálculo",
            "interpretação de texto",
            "interpretação de tabela"
          ],
          "languageAdaptation": "Representação algébrica, hipóteses explícitas e análise crítica de custos e riscos.",
          "masteryCriteria": "Atingir ao menos 75% de acertos e justificar a decisão financeira ou o cálculo utilizado.",
          "note": "Tempo estimado pela Via Olímpica; não é carga horária oficial."
        }
      ],
      "sources": [
        {
          "id": "olitef-cadernos-2026",
          "type": "caderno_estudante",
          "title": "Cadernos do Estudante OLITEF 2026",
          "institution": "OLITEF / Tesouro Direto",
          "editionYear": 2026,
          "pageSection": "Parte 1 — formação financeira",
          "url": "https://www.olitef.com.br/baixar-provas-anteriores",
          "consultedAt": "2026-10-21",
          "official": true,
          "evidence": "mencao_direta"
        }
      ]
    },
    {
      "id": "olitef-formacao-consumo-publicidade",
      "olympiadId": "olitef",
      "areaId": "olitef-formacao",
      "macrotheme": "Consumo consciente",
      "moduleId": "olitef-formacao-consumo",
      "moduleTitle": "Formacao Consumo",
      "title": "Necessidades, desejos, consumo e publicidade",
      "description": "Estudo de necessidades, desejos, consumo e publicidade em situações financeiras e econômicas compatíveis com os três níveis da OLITEF.",
      "subtopics": [
        "necessidades e desejos",
        "prioridades",
        "compras planejadas e impulsivas",
        "publicidade",
        "influenciadores",
        "leitura crítica de mensagens comerciais"
      ],
      "learningObjectives": [
        "Compreender necessidades, desejos, consumo e publicidade.",
        "Aplicar os conceitos em situações, tabelas ou cálculos.",
        "Comparar alternativas e justificar uma decisão."
      ],
      "prerequisites": [
        "Operações básicas",
        "Leitura e interpretação de situações"
      ],
      "theoryOutline": [
        "necessidades e desejos",
        "prioridades",
        "compras planejadas e impulsivas",
        "publicidade",
        "influenciadores",
        "leitura crítica de mensagens comerciais"
      ],
      "formulas": [],
      "commonErrors": [
        "Ignorar a unidade de tempo, a base de cálculo ou as condições do problema.",
        "Escolher uma alternativa apenas pelo valor aparente, sem considerar custos e riscos.",
        "Confundir conceitos próximos ou siglas de produtos."
      ],
      "keywords": [
        "Necessidades, desejos, consumo e publicidade",
        "necessidades e desejos",
        "prioridades",
        "compras planejadas e impulsivas",
        "publicidade",
        "influenciadores"
      ],
      "requiresUpdate": false,
      "reviewFrequencyMonths": null,
      "status": "revisado",
      "sourceTopicIds": [
        "OLITEF-FORMACAO-CONSUMO-PUBLICIDADE"
      ],
      "adaptations": [
        {
          "levelId": "olitef_n1",
          "originProgram": "oficial_nivel_atual",
          "treatment": "novo",
          "importance": "essencial",
          "difficulty": 2,
          "order": 24,
          "theoryMinutes": 45,
          "exerciseMinutes": 75,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 8,
          "exerciseTypes": [
            "objetiva",
            "cálculo",
            "interpretação de texto",
            "interpretação de tabela"
          ],
          "languageAdaptation": "Linguagem concreta, tabelas, exemplos cotidianos e cálculo passo a passo.",
          "masteryCriteria": "Atingir ao menos 75% de acertos e justificar a decisão financeira ou o cálculo utilizado.",
          "note": "Tempo estimado pela Via Olímpica; não é carga horária oficial."
        },
        {
          "levelId": "olitef_n2",
          "originProgram": "oficial_nivel_atual",
          "treatment": "aprofundamento",
          "importance": "essencial",
          "difficulty": 3,
          "order": 24,
          "theoryMinutes": 30,
          "exerciseMinutes": 90,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 10,
          "exerciseTypes": [
            "objetiva",
            "cálculo",
            "interpretação de texto",
            "interpretação de tabela"
          ],
          "languageAdaptation": "Situações com várias etapas, comparação de propostas e mais autonomia.",
          "masteryCriteria": "Atingir ao menos 75% de acertos e justificar a decisão financeira ou o cálculo utilizado.",
          "note": "Tempo estimado pela Via Olímpica; não é carga horária oficial."
        },
        {
          "levelId": "olitef_n3",
          "originProgram": "oficial_nivel_atual",
          "treatment": "aprofundamento",
          "importance": "essencial",
          "difficulty": 3,
          "order": 24,
          "theoryMinutes": 30,
          "exerciseMinutes": 105,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 12,
          "exerciseTypes": [
            "objetiva",
            "cálculo",
            "interpretação de texto",
            "interpretação de tabela"
          ],
          "languageAdaptation": "Representação algébrica, hipóteses explícitas e análise crítica de custos e riscos.",
          "masteryCriteria": "Atingir ao menos 75% de acertos e justificar a decisão financeira ou o cálculo utilizado.",
          "note": "Tempo estimado pela Via Olímpica; não é carga horária oficial."
        }
      ],
      "sources": [
        {
          "id": "olitef-cadernos-2026",
          "type": "caderno_estudante",
          "title": "Cadernos do Estudante OLITEF 2026",
          "institution": "OLITEF / Tesouro Direto",
          "editionYear": 2026,
          "pageSection": "Parte 1 — formação financeira",
          "url": "https://www.olitef.com.br/baixar-provas-anteriores",
          "consultedAt": "2026-10-21",
          "official": true,
          "evidence": "mencao_direta"
        }
      ]
    },
    {
      "id": "olitef-formacao-promessas-apostas",
      "olympiadId": "olitef",
      "areaId": "olitef-formacao",
      "macrotheme": "Decisão e proteção",
      "moduleId": "olitef-formacao-protecao",
      "moduleTitle": "Formacao Protecao",
      "title": "Promessas financeiras, apostas e análise crítica",
      "description": "Estudo de promessas financeiras, apostas e análise crítica em situações financeiras e econômicas compatíveis com os três níveis da OLITEF.",
      "subtopics": [
        "promessas de rendimento",
        "informação insuficiente",
        "risco",
        "investimento x apostas, loterias e bets",
        "verificação de plausibilidade"
      ],
      "learningObjectives": [
        "Compreender promessas financeiras, apostas e análise crítica.",
        "Aplicar os conceitos em situações, tabelas ou cálculos.",
        "Comparar alternativas e justificar uma decisão."
      ],
      "prerequisites": [
        "Operações básicas",
        "Leitura e interpretação de situações"
      ],
      "theoryOutline": [
        "promessas de rendimento",
        "informação insuficiente",
        "risco",
        "investimento x apostas, loterias e bets",
        "verificação de plausibilidade"
      ],
      "formulas": [],
      "commonErrors": [
        "Ignorar a unidade de tempo, a base de cálculo ou as condições do problema.",
        "Escolher uma alternativa apenas pelo valor aparente, sem considerar custos e riscos.",
        "Confundir conceitos próximos ou siglas de produtos."
      ],
      "keywords": [
        "Promessas financeiras, apostas e análise crítica",
        "promessas de rendimento",
        "informação insuficiente",
        "risco",
        "investimento x apostas, loterias e bets",
        "verificação de plausibilidade"
      ],
      "requiresUpdate": false,
      "reviewFrequencyMonths": null,
      "status": "revisado",
      "sourceTopicIds": [
        "OLITEF-FORMACAO-PROMESSAS-APOSTAS"
      ],
      "adaptations": [
        {
          "levelId": "olitef_n1",
          "originProgram": "oficial_nivel_atual",
          "treatment": "novo",
          "importance": "essencial",
          "difficulty": 3,
          "order": 25,
          "theoryMinutes": 45,
          "exerciseMinutes": 75,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 8,
          "exerciseTypes": [
            "objetiva",
            "cálculo",
            "interpretação de texto",
            "interpretação de tabela"
          ],
          "languageAdaptation": "Linguagem concreta, tabelas, exemplos cotidianos e cálculo passo a passo.",
          "masteryCriteria": "Atingir ao menos 75% de acertos e justificar a decisão financeira ou o cálculo utilizado.",
          "note": "Tempo estimado pela Via Olímpica; não é carga horária oficial."
        },
        {
          "levelId": "olitef_n2",
          "originProgram": "oficial_nivel_atual",
          "treatment": "aprofundamento",
          "importance": "essencial",
          "difficulty": 4,
          "order": 25,
          "theoryMinutes": 30,
          "exerciseMinutes": 90,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 10,
          "exerciseTypes": [
            "objetiva",
            "cálculo",
            "interpretação de texto",
            "interpretação de tabela"
          ],
          "languageAdaptation": "Situações com várias etapas, comparação de propostas e mais autonomia.",
          "masteryCriteria": "Atingir ao menos 75% de acertos e justificar a decisão financeira ou o cálculo utilizado.",
          "note": "Tempo estimado pela Via Olímpica; não é carga horária oficial."
        },
        {
          "levelId": "olitef_n3",
          "originProgram": "oficial_nivel_atual",
          "treatment": "aprofundamento",
          "importance": "essencial",
          "difficulty": 4,
          "order": 25,
          "theoryMinutes": 30,
          "exerciseMinutes": 105,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 12,
          "exerciseTypes": [
            "objetiva",
            "cálculo",
            "interpretação de texto",
            "interpretação de tabela"
          ],
          "languageAdaptation": "Representação algébrica, hipóteses explícitas e análise crítica de custos e riscos.",
          "masteryCriteria": "Atingir ao menos 75% de acertos e justificar a decisão financeira ou o cálculo utilizado.",
          "note": "Tempo estimado pela Via Olímpica; não é carga horária oficial."
        }
      ],
      "sources": [
        {
          "id": "olitef-cadernos-2026",
          "type": "caderno_estudante",
          "title": "Cadernos do Estudante OLITEF 2026",
          "institution": "OLITEF / Tesouro Direto",
          "editionYear": 2026,
          "pageSection": "Parte 1 — formação financeira",
          "url": "https://www.olitef.com.br/baixar-provas-anteriores",
          "consultedAt": "2026-10-21",
          "official": true,
          "evidence": "mencao_direta"
        }
      ]
    },
    {
      "id": "olitef-formacao-empreendedorismo",
      "olympiadId": "olitef",
      "areaId": "olitef-formacao",
      "macrotheme": "Empreendedorismo",
      "moduleId": "olitef-formacao-empreendedorismo",
      "moduleTitle": "Formacao Empreendedorismo",
      "title": "Empreendedorismo e projetos",
      "description": "Estudo de empreendedorismo e projetos em situações financeiras e econômicas compatíveis com os três níveis da OLITEF.",
      "subtopics": [
        "problemas e oportunidades",
        "criatividade e iniciativa",
        "cooperação",
        "planejamento",
        "impacto social",
        "público e clientes",
        "recursos, custos e preços",
        "comunicação",
        "validação de ideias"
      ],
      "learningObjectives": [
        "Compreender empreendedorismo e projetos.",
        "Aplicar os conceitos em situações, tabelas ou cálculos.",
        "Comparar alternativas e justificar uma decisão."
      ],
      "prerequisites": [
        "Operações básicas",
        "Leitura e interpretação de situações"
      ],
      "theoryOutline": [
        "problemas e oportunidades",
        "criatividade e iniciativa",
        "cooperação",
        "planejamento",
        "impacto social",
        "público e clientes"
      ],
      "formulas": [],
      "commonErrors": [
        "Ignorar a unidade de tempo, a base de cálculo ou as condições do problema.",
        "Escolher uma alternativa apenas pelo valor aparente, sem considerar custos e riscos.",
        "Confundir conceitos próximos ou siglas de produtos."
      ],
      "keywords": [
        "Empreendedorismo e projetos",
        "problemas e oportunidades",
        "criatividade e iniciativa",
        "cooperação",
        "planejamento",
        "impacto social"
      ],
      "requiresUpdate": false,
      "reviewFrequencyMonths": null,
      "status": "revisado",
      "sourceTopicIds": [
        "OLITEF-FORMACAO-EMPREENDEDORISMO"
      ],
      "adaptations": [
        {
          "levelId": "olitef_n1",
          "originProgram": "oficial_nivel_atual",
          "treatment": "novo",
          "importance": "essencial",
          "difficulty": 3,
          "order": 26,
          "theoryMinutes": 75,
          "exerciseMinutes": 105,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 12,
          "exerciseTypes": [
            "objetiva",
            "cálculo",
            "interpretação de texto",
            "interpretação de tabela"
          ],
          "languageAdaptation": "Linguagem concreta, tabelas, exemplos cotidianos e cálculo passo a passo.",
          "masteryCriteria": "Atingir ao menos 75% de acertos e justificar a decisão financeira ou o cálculo utilizado.",
          "note": "Tempo estimado pela Via Olímpica; não é carga horária oficial."
        },
        {
          "levelId": "olitef_n2",
          "originProgram": "oficial_nivel_atual",
          "treatment": "aprofundamento",
          "importance": "essencial",
          "difficulty": 4,
          "order": 26,
          "theoryMinutes": 60,
          "exerciseMinutes": 120,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 13,
          "exerciseTypes": [
            "objetiva",
            "cálculo",
            "interpretação de texto",
            "interpretação de tabela"
          ],
          "languageAdaptation": "Situações com várias etapas, comparação de propostas e mais autonomia.",
          "masteryCriteria": "Atingir ao menos 75% de acertos e justificar a decisão financeira ou o cálculo utilizado.",
          "note": "Tempo estimado pela Via Olímpica; não é carga horária oficial."
        },
        {
          "levelId": "olitef_n3",
          "originProgram": "oficial_nivel_atual",
          "treatment": "aprofundamento",
          "importance": "essencial",
          "difficulty": 4,
          "order": 26,
          "theoryMinutes": 45,
          "exerciseMinutes": 135,
          "optionalPracticeMinutes": 0,
          "exerciseCount": 15,
          "exerciseTypes": [
            "objetiva",
            "cálculo",
            "interpretação de texto",
            "interpretação de tabela"
          ],
          "languageAdaptation": "Representação algébrica, hipóteses explícitas e análise crítica de custos e riscos.",
          "masteryCriteria": "Atingir ao menos 75% de acertos e justificar a decisão financeira ou o cálculo utilizado.",
          "note": "Tempo estimado pela Via Olímpica; não é carga horária oficial."
        }
      ],
      "sources": [
        {
          "id": "olitef-cadernos-2026",
          "type": "caderno_estudante",
          "title": "Cadernos do Estudante OLITEF 2026",
          "institution": "OLITEF / Tesouro Direto",
          "editionYear": 2026,
          "pageSection": "Parte 1 — formação financeira",
          "url": "https://www.olitef.com.br/baixar-provas-anteriores",
          "consultedAt": "2026-10-21",
          "official": true,
          "evidence": "mencao_direta"
        }
      ]
    }
  ],
  "officialTopicIds": [
    "OLITEF-MA01-DINHEIRO-MEIOS-PAGAMENTO",
    "OLITEF-MA01-SISTEMA-FINANCEIRO",
    "OLITEF-MA01-PORCENTAGENS",
    "OLITEF-MA01-AUMENTOS-DESCONTOS",
    "OLITEF-MA01-JUROS-SIMPLES",
    "OLITEF-MA01-JUROS-COMPOSTOS",
    "OLITEF-MA01-ECONOMIA",
    "OLITEF-MA01-ORCAMENTO",
    "OLITEF-MA01-POUPANCA-RESERVA",
    "OLITEF-MA01-CREDITO-ENDIVIDAMENTO",
    "OLITEF-MA02-INTRODUCAO-RENDA-FIXA",
    "OLITEF-MA02-REMUNERACAO-INDEXADORES",
    "OLITEF-MA02-RISCOS-LIQUIDEZ",
    "OLITEF-MA02-GARANTIAS",
    "OLITEF-MA02-POUPANCA",
    "OLITEF-MA02-TESOURO-DIRETO",
    "OLITEF-MA02-PRODUTOS-BANCARIOS",
    "OLITEF-MA02-DEBENTURES",
    "OLITEF-MA03-ACOES",
    "OLITEF-MA03-BOLSA-INDICES",
    "OLITEF-MA03-FUNDOS-INSTRUMENTOS",
    "OLITEF-MA03-CARTEIRA-DIVERSIFICACAO",
    "OLITEF-FORMACAO-TRABALHO-RENDA",
    "OLITEF-FORMACAO-CONSUMO-PUBLICIDADE",
    "OLITEF-FORMACAO-PROMESSAS-APOSTAS",
    "OLITEF-FORMACAO-EMPREENDEDORISMO"
  ],
  "details": {
    "shortDescription": "Olimpíada nacional de educação financeira que trabalha matemática, finanças pessoais, investimentos, economia e decisões responsáveis.",
    "audience": "6º ano do Ensino Fundamental ao 3º ano do Ensino Médio, nos níveis 1, 2 e 3.",
    "examType": "20 questões objetivas, cinco alternativas, aplicação individual na escola e duração máxima de 1h40.",
    "about": "A edição de referência organiza a prova em Educação Financeira Básica, Renda Fixa e Renda Variável, com materiais de apoio para os três níveis.",
    "formatTitle": "Estrutura da prova",
    "stages": [
      "MA01 — Educação Financeira Básica: 10 questões.",
      "MA02 — Renda Fixa: 8 questões.",
      "MA03 — Renda Variável: 2 questões.",
      "Inscrição gratuita e realizada pela escola."
    ],
    "preparationNote": "Os três níveis estudam o mesmo núcleo teórico com linguagem, profundidade e aplicações adaptadas. Regras financeiras sujeitas a mudança possuem marcação de atualização.",
    "officialUrl": "https://www.olitef.com.br/baixar-provas-anteriores",
    "officialLabel": "Materiais oficiais da OLITEF"
  }
} as const satisfies OlympiadCurriculum;
