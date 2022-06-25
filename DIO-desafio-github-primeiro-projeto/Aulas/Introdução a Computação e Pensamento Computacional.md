# Introdução à Programação e Pensamento Computacional

### Decomposição > Rec. de Padrões > Abstração > Design de Algoritmos

#### O pensamento computacional pode se basear em quatro pilares fundamentais, os quais são citados acima:
#### - Na decomposição, o desenvolvimento é fracionado em problemas/rotinas menores, de menor complexidade, facilitando sua resolução a princípio;
#### - No reconhecimento de padrões, é a etapa onde a amostra de dados do problema é colocada sob análise de alguns testes, tais como a análise binária (unidirecional);
#### - A Abstração é a análise que sugere a generalização dos modelos, fazendo a sua dissociação de seu real contexto;
#### - O Design de Algoritmo, por si só, é o desenvolvimento do artifício que irá solucionar o problema. Em termos mais práticos, é a construção de uma ferramenta que irá receber o seu problema como entrada e fazer a transformação, de acordo com todos os outros pilares citados anteriormente.

## Refinamento

#### Após a construção do algoritmo aplicado a aquela solução, é possível que se faça o seu refinamento, reavaliando as condições de entrada e saída e estudando se aquela é realmente a forma mais eficiente de se executar tal tarefa.

## Raciocínio Lógico

#### No que se diz respeito ao raciocínio lógico, podemos dizer que está relacionado ao raciocínio estruturado. Este está alinhado com os seguintes conceitos:

#### - Indução > Trata-se da conclusão sobre algum conceito, partindo do campo da experiência e de dados particulares. A partir de determinado experimento, induz-se determinada conclusão;

#### - Dedução > Determina-se uma conclusão sobre um conceito, utilizando premissas básicas sobre o assunto e fazendo sua evolução;

#### - Abdução > Determina-se a premissa de um conceito dada a sua conclusão.

#### Tomando esses três modelos de raciocínio, podemos aferir que a indução e abdução precisam ser sintetizadas, a partir do momento em que, é necessário a construção do cenário de análise para que se obtenha a premissa. Por outro lado, a Dedução pode ser feita por um processo analítico, pelo qual são dadas as premissas da aplicação e então o seu desenvolvimento a partir dessas.

#### A decomposição parte da ideia da fração de um problema em menores proporções menores e mais simples. A ordem de execução das tarefas para a solução total do problema pode ser tradada de maneira sequencial, formando um sequenciamento de instruções, ou ainda, ser feita utilizando mais de uma frente de execução atuando paralelamente. Podemos citar exemplos do dia a dia, servindo de problemas que podem ser resolvidos usando pensamento computacional, tal como a tarefa de preparar um prato.

#### Primeiro, identifica-se padrões de repetição, por meio da síntese do problema. Dessa forma é possível tornar o problema, algo mais generalista e aplicável para mais situações. Ao final desse processo, obtém-se Classes e Categorias de objetos com certos níveis de similaridades entre si.

#### Para a máquina, o reconhecimento desses padrões é feito por: Representação de atributos, Armazenagem de dados, Regras de decisão, etc. Na classificação de dados, são observadas as informações mais valiosas baseadas no conceito em que se precisa aplicá-los, em detrimento dos detalhes.

#### Os Algoritmos são o conjunto de instruções que se utiliza para o processamento dessas informações e a criação de uma saída, conforme a solução que se deseja criar. A construção dos algoritmos envolve a compreensão do problema que se deseja solucionar, a definição dos dados de entrada, a definição do processamento desses dados, a definição dos dados de saída e ainda a testagem e diagnóstico do processamento para avaliar a eficácia do processo.

#### Ainda sobre a construção de algoritmos podemos utilizar diferentes abordagens, que variam o grau de complexidade e consolidação das informações compartilhadas. Isto é, as ferramentas utilizadas para a criação, podem ser: a Narrativa - que utiliza-se de uma linguagem natural, mas que pode ser ambígua gerando margem para diferentes interpretações e com ausência de conceitos - os Fluxogramas - que trazem a o uso de simbologias pré definidas na construção de um diagrama de instruções onde observa-se o fluxo das informações e quais modificações ela sofre ao longo da trajetória - e também o pseudocódigo - que trás uma abordagem genérica para a escrita de um código, sem o conhecimento de uma linguagem mas que também possui algumas regras definidas para a sua criação.

# Introdução à Lógica de Programação

### Lógica Aplicada a Programação

#### A lógica em si, trata da filosofia das formas do pensamento em geral (dedução, indução, hipótese, inferência, etc) e das operações intelectuais que visam a determinação do que é verdadeiro ou não.

#### Falando sobre as técnicas atrelada a lógica de programação, temos a Linear - Voltada para a execução sequenciada, que tem dimensão única e é limitada - a Estruturada - com a definição de hierarquias - e a Modular - que define módulos independentes um dos outros, cada um com seus conjuntos de regras específicas (Simplificação, Decomposição e Verificação).

### Fundamentos de Algoritmos

#### Os dados podem ser classificados em alguns tipos, alguns sendo os primitivos, tais como números (int, long, float) e lógicos (boolean).

#### As variáveis são estruturas mutáveis, que podem abrigar valores e necessitam de identificação para o tipo de dado abrigado. É preciso se atentar para o não uso de palavras reservadas, na criação de uma variável. As variáveis podem assumir dois papéis, assumindo papel de ação (onde há modificação de estado) ou de vigia (para monitoramento ou controle de um estado).

#### Falando sobre as instruções mais primitivas, temos as operações matemáticas básicas. Estas que possuem ordem de prioridade na execução. Operações como Adição, Multiplicação, subtração e divisão, fazem parte desse conjunto de instruções básicas.

#### As Estruturas Condicionais operam para a organização da execução de um determinado trecho de código, dada a satisfação de uma certa condição. Essas estruturas são normalmente definidas no código com a função "If" e podem ser simples, compostas (contendo uma exceção) ou ainda, encadeadas, fazendo uma operação para uma determinada condição, exceção da condição inicial.

#### Os Operadores Lógicos atuam na mudança de estado de uma variável, que pode abrigar um valor booleano (verdadeiro ou falso). Os tipos mais simples desses operadores são And, Or, e Not.

#### As Estruturas de Repetição são trechos de código que podem ser executados mais de uma vez, dependendo da satisfação de uma determinada condição, verificada ao início ou ao final de cada iteração e, podendo ou não ter um número de iterações pré estabelecido.
#### Conforme o avanço da complexidade do código, é possível a combinação de estruturas de repetição e estruturas condicionais, para a solução de um determinado problema.

#### Os Vetores e Matrizes trazem a sequência de um determinado tipo de dado e tem tamanhos pré fixados. O endereçamento de cada elemento do(a) vetor ou matriz possui índices para a sua indicação.

#### As funções, são trechos organizados em módulos de tal forma em que possam ser reutilizadas em vários momentos do código, e que consistem em blocos de instruções para a execução de tarefas específicas. Às funções, são fornecidas as entradas e então, retornadas as saídas, tal qual uma função matemática. Os dados de entrada podem ser inseridos por diversos tipos de interface, como teclado, mouse, arquivos, etc.

### Linguagens de Programação

#### Linguagens de programação estão ligadas a como o computador processa o código em si. Existem três perspectivas básicas relacionadas a interpretação/processamento da máquina.

#### a tradução - utiliza-se da transformação de um código de uma linguagem de alto nível, para outra linguagem de mais fácil processamento de mais baixa complexidade.
#### a Interpretação - é quando o processamento é executado diretamente, ocasionando num processamento mais lento, pois o programa é feito em uma linguagem de mais alta complexidade.

#### São características de um programa a Legibilidade, a Redigibilidade, a Confiabilidade e o seu Baixo Custo, esse último em termos de processamento. Características que agregam valor para o programa, também estão relacionadas a suas atualizações, utilização para I.A., Disponibilidade de ferramentas, a comunidade ativa suportando, e também a adoção do sistema pelo mercado.

### Análise e Compilação

#### A forma de compilação dos códigos se passa por alguns "filtros", analisando diferentes problemas cada um com sua natureza. Na etapa de leitura Léxica, o código é conferido em cada palavra, averiguando o "vocabulário" das palavras escritas para verificar possíveis erros. Os erros de Sintaxe estão mais relacionados à estruturação de um programa, e se alinham com um conjunto de regras que valida a sequencia escrita usada no programa. Por fim, os erros de Semântica, estão relacionados ao significado das coisas e, pode ser que um erro dessa característica possa passar despercebido em determinadas condições pois, mesmo que ele satisfaça as condições mínimas para o funcionamento do programa, o erro direciona o algorítimo para uma solução diferente da desejada.

#### Levando em conta tais tipos de análise, observamos os paradigmas das linguagens de programação. Os paradigmas mais comuns são, a programação orientada a objeto, e a programação estruturada. Diferentemente da programação orientada a objeto, a estruturada, tem uma sequencia de código bem definida, em que as instruções são processadas em cascata, tomando decisões e fazendo iterações.
#### Na programação orientada a objeto, temos a modulação do código (encapsulamento), a definição de hierarquias de classes, o polimorfismo, a abstração e a herança de atributos entre classes.