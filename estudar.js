class Question{
    options = [];
    constructor(text){
        this.text = text;
    }

    addOption(correct,text){
        if(!text){
            text = correct;
            correct = false;
        }
        const ops = ['A','B','C','D','E'];
        while(this.options.length<5 && ops.length>0){
            const pos = Math.floor(Math.random()*ops.length);
            const op = ops[pos];
            ops.splice(pos,1);
            if(!this.options[op]){
                this.options[op] = {correct,text};
                break;
            }
        }
    }

    addCorrectOption(text){
        this.addOption(true,text);
    }

    setExp(exp){
        this.exp = exp;
    }

}

const prompt = require("prompt-sync")({ sigint: true });

const questions = [];

let mod;

/*mod = new Question(``);
mod.addOption(``);
mod.addOption(``);
mod.addOption(``);
mod.addOption(``);
mod.addCorrectOption(``);
mod.setExp(``);
questions.push(mod);*/

mod = new Question(`A respeito do HDFS, selecione a opção correta cujo componente lógico mantém os dados do usuário na forma de blocos de dados.`);
mod.addOption(`NameNode`);
mod.addOption(`YARN`);
mod.addOption(`Replicação`);
mod.addOption(`Bloco de dados`);
mod.addCorrectOption(`DataNode`);
mod.setExp(`O DataNode é componente da arquitetura do HDFS responsável pelo armazenamento dos dados na forma de blocos de dados.`);
questions.push(mod);

mod = new Question(`Em relação ao Data Lake, selecione a opção correta que contenha o(s) formato(s) de dados que pode(m) ser armazenado(s) nele.`);
mod.addOption(`estruturado e semiestruturado`);
mod.addOption(`apenas estruturado`);
mod.addOption(`apenas tabelas relacionais`);
mod.addOption(`apenas não estruturado`);
mod.addCorrectOption(`estruturado, não estruturado e semiestruturado`);
mod.setExp(`O Data Lake pode armazenar dados estruturados, semiestruturados e não estruturados que correspondem a característica de variedade dos dados que é bem típica de aplicações de Big Data.`);
questions.push(mod);

mod = new Question(`A função de agrupamento do Pandas é o groupby, responsável por influenciar a indexação das colunas. O que acontece ao aplicarmos o método reset_index() no resultado de uma agregação?`);
mod.addOption(`As colunas de agrupamento somem, e o DataFrame passa a ser indexado pelo número da linha.`);
mod.addOption(`Nada, o DataFrame fica imutável.`);
mod.addOption(`O DataFrame é indexado pelas suas colunas.`);
mod.addOption(`O DataFrame é embaralhado.`);
mod.addCorrectOption(`Os indexes não são deletados, evitando a perda de colunas no DataFrame da agregação.`);
mod.setExp(`Ao agruparmos com groupby, o DataFrame passa a ser reindexado pelos grupos de colunas escolhidas. A partir de então, o index das agregações passa a ser o agrupamento.  Com o reset_index() após a agregação, os índices originais das colunas são preservados.`);
questions.push(mod);

mod = new Question(`Qual o objetivo da inteligência artificial ao simular comportamentos humanos na máquina?`);
mod.addOption(`Fazer com que computadores acessem a internet mais rápido.`);
mod.addOption(`Melhorar a capacidade de processamento de dados do sistema.`);
mod.addOption(`Incrementar o uso da memória de longa duração do sistema.`);
mod.addOption(`Viabilizar a computação paralela.`);
mod.addCorrectOption(`Otimizar algoritmos para que eles se adaptem a contextos não previamente codificados.`);
mod.setExp(`A razão por trás da existência da inteligência artificial é criar algoritmos e soluções capazes de se adaptar a novas situações que não necessariamente foram pré-programadas, mas se adapte pela experiência passada com casos similares.`);
questions.push(mod);

mod = new Question(`Em relação aos V's que caracterizam os projetos de Big Data, selecione a opção que trata do processamento dos dados.`);
mod.addOption(`volume`);
mod.addOption(`veracidade`);
mod.addOption(`variedade`);
mod.addOption(`valor`);
mod.addCorrectOption(`velocidade`);
mod.setExp(`A característica velocidade trata da rapidez de geração e processamento dos dados. Variedade diz respeito ao formato dos dados, valor está relacionado ao resultado útil da análise dos dados, volume significa a quantidade de dados disponíveis para tratamento e a veracidade diz respeito à confiabilidade da origem dos dados.`);
questions.push(mod);

mod = new Question(`Em relação aos arquivos de configuração do Hadoop, selecione a opção correta que contém o arquivo que trata das configurações do HDFS.`);
mod.addOption(`core-site.xml`);
mod.addOption(`hadoop-env.cmd`);
mod.addOption(`yarn-site.xml`);
mod.addOption(`mapred-site.xml`);
mod.addCorrectOption(`hdfs-site.xml`);
mod.setExp(`O arquivo de configuração hdfs-site.xml é o responsável pela definição de configuração para processos do HDFS. Ele também é responsável por fazer a especificação da replicação de bloco padrão e verificação de permissão no HDFS.`);
questions.push(mod);

mod = new Question(`Em relação as fases do Hadoop, selecione a opção correta que apresenta o componente responsável pela geração de pares intermediários de valor e chave.`);
mod.addOption(`Agrupamento`);
mod.addOption(`Combinação`);
mod.addOption(`Redução`);
mod.addOption(`Gravação da saída`);
mod.addCorrectOption(`Embaralhamento`);
mod.setExp(`Através do processo de embaralhamento, também conhecido pelo termo em inglês "shuffling", o mecanismo MapReduce faz a geração de pares intermediários de valor e chave que são transferidos para a fase de redução, o que é realizado em paralelo com outras tarefas da fase de mapeamento.`);
questions.push(mod);

mod = new Question(`Para a regularização dos dados obtidos, qual técnica podemos utilizar objetivando fazer com que os dados fiquem na mesma escala?`);
mod.addOption(`Map & Reduce`);
mod.addOption(`Divide`);
mod.addOption(`Splice`);
mod.addOption(`Shuffle`);
mod.addCorrectOption(`MinMax`);
mod.setExp(`Extraímos do dado observado sua proporção em relação ao valor mínimo possível até o valor máximo e enquadramos o mesmo nesta régua, assim realizando a regularização, que consiste em colocar os dados na mesma escala.`);
questions.push(mod);

mod = new Question(`No mundo de Big Data, temos dados os mais variados possíveis, e sua classificação é fundamental para um cientista de dados. As notas que compõem o histórico escolar de um aluno são classificadas como  que tipo de dados?`);
mod.addOption(`Semi-Estruturados`);
mod.addOption(`Atemporais`);
mod.addOption(`Temporais`);
mod.addOption(`Numéricos`);
mod.addCorrectOption(`Categóricos`);
mod.setExp(`O correto é classificar como dados categóricos, pois a nota de um aluno mesmo que possa ser operada por funções de soma, média etc., representa um conceito ou extrato/proporção de aprendizado de um aluno, um 8 muitas das vezes significa que o aluno aprendeu 80% da matéria por exemplo, ou implica na condição de apto, ou reprovado. O tipo numérico seria correto se não tivesse o contexto implícito de categoria, por isso devemos ter cuidado ao modelarmos nossos dados.`);
questions.push(mod);

mod = new Question(`No modelo de aprendizado profundo, as camadas internas ocultas representam:
I - Abstrações de aspectos de dados complexos

II - Informação relevante dos dados de entrada

III - Pesos e Viéses `);
mod.addOption(`Apenas III`);
mod.addOption(`Apenas I e III`);
mod.addOption(`As alternativas I, II e III`);
mod.addOption(`Apenas II e III`);
mod.addCorrectOption(`Apenas I`);
mod.setExp(`Os modelos de aprendizado profundo são modelos conexionistas que usam suas camadas internas para abstrair automaticamente abstrações de aspectos complexos dos dados, como uma linha reta ou uma curva, e até mesmo combinações de aspectos descobertos em camadas anteriores.

alternativa I - Abstrações de aspectos de dados complexos ¿ está correta pois os modelos de aprendizado profundo são modelos conexionistas que usam suas camadas internas para abstrair automaticamente abstrações de aspectos complexos dos dados, como uma linha reta ou uma curva, e até mesmo combinações de aspectos descobertos em camadas anteriores.

A alternativa II - Informação relevante dos dados de entrada - está incorreta por estar relacionada com o conceito de sistema de informação, que é uma coleção de partes que recebe dados como insumo, processa-os por meio de dinâmicas internas das partes e devolve informação relevante ao usuário final.

A alternativa III ¿ Pesos e Vieses ¿ está incorreta, pois o aprendizado profundo tenta modelar abstrações de alto nível de dados, sendo os grafos empregados nessa área as redes neurais artificiais, onde as camadas ocultas mapeiam de forma equivariante os pesos e os filtros para as camadas subsequentes.`);
questions.push(mod);

mod = new Question("Em relação ao formato dos dados, selecione a opção correta que corresponde ao formato dos dados de transações bancárias.");
mod.addOption(false,"dados não estruturados");
mod.addOption(false,"dados de Big Data");
mod.addOption(false,"dados de Internet das Coisas");
mod.addOption(false,"dados semiestruturados");
mod.addOption(true,"dados estruturados");
mod.setExp("Os dados de transações bancárias são salvos em tabelas e, portanto, correspondem a dados estruturados, que são típicos de sistemas de transações on line armazenados em banco de dados. As demais alternativas tratam de dados não convencionais que não são armazenados em bancos de dados tradicionais.");
questions.push(mod);

mod = new Question("Em relação às plataformas para Internet das Coisas, selecione a opção correta sobre o Arduino.");
mod.addOption(false,"É o outro nome para Raspberry PI");
mod.addOption(false,"É um programa");
mod.addOption(true,"É um ecossistema que envolve software e hardware");
mod.addOption(false,"É um protocolo de internet das coisas");
mod.addOption(false,"É uma placa de hardware");
mod.setExp("O arduino é uma tecnologia que combina hardware e software e é utilizada para internet das coisas. Portanto, não é um programa, nem uma placa de hardware e tão pouco um protocolo de comunicação. Já o Raspberry PI não é o mesmo que Arduino, pois se trata de uma outra tecnologia para internet das coisas.");
questions.push(mod);

mod = new Question("A respeito do Hadoop, selecione a opção correta com o componente que faz o rastreamento de tarefas.");
mod.addOption(false,"HDFS");
mod.addOption(false,"Camada de ingestão");
mod.addOption(false,"Mrjob");
mod.addOption(true,"MapReduce");
mod.addOption(false,"Task manager");
mod.setExp("O mecanismo MapReduce é responsável pela distribuição de tarefas em um cluster, através de rastreamento de tarefas (Task Trackers) e de trabalhos (Job Trackers). As demais alternativas, embora tenham relação com o Hadoop, não possuem a funcionalidade de rastreamento de tarefas.");
questions.push(mod);

mod = new Question("Compreender a tecnologia Hadoop e os aspectos fundamentais do seu ecossistema é fundamental para o profissional de Tecnologia da Informação. Sendo assim, selecione a opção correta sobre o Hadoop.");
mod.addOption(true,"O Hadoop utiliza o HDFS para armazenar dados.");
mod.addOption(false,"O Hadoop não funciona com pequenos volumes de dados.");
mod.addOption(false,"O Hadoop tem apenas uma única distribuição.");
mod.addOption(false,"A estrutura de desenvolvimento no Hadoop é sequencial.");
mod.addOption(false,"Hadoop é um ambiente ideal para extrair e transformar pequenos volumes de dados.");
mod.setExp("O HDFS é um acrônimo para sistema de arquivos distribuídos do Hadoop (do inglês Hadoop Distributed File System). Ele é o componente responsável pelo armazenamento e gerenciamento de dados, de forma similar aos sistemas gerenciadores de bancos de dados relacionais (RDBMS).");
questions.push(mod);

mod = new Question(`Observe o trecho de código abaixo

import numpy as np
from pyspark import SparkContext
spark_contexto = SparkContext()
a = np.array([1, 5, 1, 6, 4, 7, 7])
teste = spark_contexto.parallelize(a)
Selecione a opção correta a respeito dele.`);
mod.addOption(false,"A utilização do SparkContext é opcional.");
mod.addOption(false,"A execução do trecho de código vai gerar um erro.");
mod.addOption(false,"A linha \"spark_contexto.parallelize(a)\" aplica a técnica MapReduce para processar o vetor \"a\".");
mod.addOption(false,"O objetivo do trecho de código é contar a quantidade de ocorrências dos valores do vetor \"a\".");
mod.addOption(true,"A variável \"teste\" corresponde a um RDD.");
mod.setExp(`Gabarito: A variável "teste" corresponde a um RDD.

Justificativa: O trecho de código está sintaticamente correto. O objetivo é criar um RDD que, no caso, é representado pela variável "teste" para isso é obrigatório utilizar o "SparkContext". O pacote "numpy" foi utilizado por causa da variável vetor "a".

`);
questions.push(mod);

mod = new Question(`Os componentes do Spark têm como objetivo facilitar o desenvolvimento de projetos com finalidades específicas. Selecione a opção que contém o componente do ecossistema do Spark especializado em aplicações de aprendizado de máquina.`);
mod.addOption(`RDDs`);
mod.addOption(`GraphX Learning`);
mod.addOption(`MLSpark`);
mod.addOption(`Spark Learning`);
mod.addCorrectOption(`MLlib`);
mod.setExp(" O componente MLlib é o componente do ecossistema do Spark usado para implementar algoritmos estatísticos e de aprendizado de máquina para simplificar pipelines de aprendizado de máquina em projetos de big data. As opções Spark Learning, GraphX Learning e MLSpark não são componentes válidos do Spark. Os RDDs são componentes para conjunto de dados resilientes.");
questions.push(mod);

mod = new Question(`A visualização dos dados é fundamental no processo de análise, interpretação e obtenção de conhecimento. Dentre as visualizações mais adequadas para dados numéricos estão:

I - Histograma

II - Gráfico de Dispersão

III - Gráfico de Pizza

Analise as alternativas listadas e assinale a correta.`);
mod.addOption(`Apenas III`);
mod.addOption(`As alternativas I, II e III`);
mod.addOption(`Apenas I e III`);
mod.addOption(`Apenas II e III`);
mod.addCorrectOption(`Apenas I e II`);
mod.setExp(`Os gráficos de histograma e de dispersão respectivamente expressam a distribuição das variáveis e a sua correlação. A alternativa III está incorreta, pois o gráfico de pizza é para dados categóricos, quando queremos mostrar proporção e valores distintos de categorias possíveis.`);
questions.push(mod);

mod = new Question(`Dados categóricos são aqueles normalmente expressos por texto, que representam rótulos, nomes e símbolos. Qual tipo de visualização de dados abaixo é recomendado para dados categóricos?`);
mod.addOption(`Gráfico de Faces de Chernoff.`);
mod.addOption(`Gráficos de Linha.`);
mod.addOption(`Gráfico de Matriz de Dispersão.`);
mod.addOption(`Gráfico de Estrela.`);
mod.addCorrectOption(`Gráficos de Barra.`);
mod.setExp(`O gráfico de barras mostra as proporções dos dados categóricos assim evidenciando os extratos da amostra. Lembrando que os dados categóricos não se encaixam nos gráficos de dados numéricos, como o de dispersão causando confusão na função de visualização ou quebrando a mesma dependendo da biblioteca escolhida.`);
questions.push(mod);

mod = new Question(`Leonardo começou seu trabalho de conclusão de curso. Nesse trabalho, Leonardo quer elaborar um classificador de imagem, mas, não sabe se decidir com relação à configuração das camadas de sua rede neural. É muito comum utilizarmos o conjunto ________ para fazermos o benchmark de modelos de ______________:`);
mod.addOption(`IRIS; Processamento da Linguagem Natural`);
mod.addOption(`IRIS; Processamento de Imagens`);
mod.addOption(`MNIST; Processamento de Linguagem Natural`);
mod.addOption(`Pizzas; Categorias`);
mod.addCorrectOption(`MNIST; Processamento de Imagens`);
mod.setExp(`O conjunto MNIST de dígitos escritos a mão é um dos conjuntos mais conhecidos na literatura de aprendizado de máquina. Mas, essa fama não é à toa, pois esse é o conjunto de comparação entre modelos de processamento de imagens, uma vez que uma boa configuração de rede neural deve ser capaz de reconhecer os dígitos escritos a mão do MNIST.`);
questions.push(mod);

mod = new Question(`Qual o processo irmão do KDD que é utilizado comumente no âmbito industrial?`);
mod.addOption(`SIGKDD.`);
mod.addOption(`KDD-DM.`);
mod.addOption(`SIGM.`);
mod.addOption(`KDM.`);
mod.addCorrectOption(`CRISP-DM.`);
mod.setExp(`O processo de tamanho similar ao KDD cujo âmbito industrial se beneficia mais devido à suas etapas de entendimento do negócio é o CRISP-DM, processo esse que, diferentemente do KDD, contempla a entrega do artefato de aprendizado de máquina.`);
questions.push(mod);

mod = new Question(`Em relação aos desafios do processamento de fluxo de dados:`);
mod.addOption(`Dimensionar o projeto logo no inicio para evitar a necessidade de expansão posteriormente.`);
mod.addOption(`Usar algoritmos de criptografia nos dados para evitar o acesso indevido`);
mod.addOption(`Garantir a qualidade dos dados através de ferramentas de controle que não aceitem qualquer inconsistência`);
mod.addOption(`Aplicar recursos de redundância no projeto para reduzir a volatilidade dos dados`);
mod.addCorrectOption(`Garantir a consistência da informação através de ordenação dos dados.`);
mod.setExp(`Nas aplicações de streaming de dados, dificilmente não vai ocorrer alguma inconsistência, pois, normalmente, elas estão contextualizadas em ambientes dinâmicos`);
questions.push(mod);

mod = new Question(`Em relação ao protocolo de transporte para transmissão de aplicações de streaming`);
mod.addOption(`MQTT`);
mod.addOption(`HTTP`);
mod.addOption(`CoAP`);
mod.addOption(`TCP`);
mod.addCorrectOption(`UDP`);
mod.setExp(`O protocolo UDP - protocolo de datagrama do usuário é utilizado para aplicações de streaming por ser mais rápido.
O protocolo TCP é orientado a confiabilidade e, no caso de aplicações de streaming, ele é muito lento inviabilizando a aplicação.
Os protocolos HTTP,MQTT e CoAP não se enquadram no transporte de dados.`);
questions.push(mod);

mod = new Question(`Selecione a opção correta que contenha a operação responsável por retornar um subconjunto aleatório dos dados de entrada.`);
mod.addOption(`filter`);
mod.addOption(`distinct`);
mod.addOption(`mapRandom`);
mod.addOption(`random`);
mod.addCorrectOption(`sample`);
mod.setExp(`A operação responsável por retornar um subconjunto aleatório dos dados é a sample.
É uma operação da categoria de transformação, sendo que se encaixa em transformações amplas, pois pode ser necessário realizar movimentações entre as partições.
Filter é uma função que retorna um subconjunto de dados em relação a alguma condição imposta, portanto não há aleatoriedade. Random e mapRandom não são funções válidas para o Spark.
Distinct retorna um RDD com elementos diferentes de um RDD de entrada.`);
questions.push(mod);

mod = new Question(`Atualmente, o Apache Spark, é o mais bem-sucedido framework para Big Data.
Selecione a opção correta que contenha apenas funções que podem ser categorizadas como transformações no Spark.`);
mod.addOption(`map, sample e collect.`);
mod.addOption(`map, take e reduce.`);
mod.addOption(`count, collect e take.`);
mod.addOption(`reduce, first e map.`);
mod.addCorrectOption(`map, filter e union.`);
mod.setExp(`Algumas das funções de transformação no Spark são: map, filter, union, flatMap, mapPartitions e sample.
As citadas transformações, denominadas de transformações estreitas, resulta da aplicação de funções de mapeamento e de filtragem, sendo que os dados se originam de uma única partição.`);
questions.push(mod);

mod = new Question(`Eduardo que mostrar aos gestores da empresa como as ações da carteira de investimentos recomendada que ele e o time dele propuseram estão valorizando e gerando muitos dividendos aos clientes.
Para isso, Eduardo construiu um gráfico de _________, pois está lidando com dados _______ e quer mostrar o quão bem as recomendaçõoes geradas por seu time estão evoluindo.`);
mod.addOption(`Linha; Categóricos`);
mod.addOption(`Pizza; Categóricos`);
mod.addOption(`Pizza; Numéricos`);
mod.addOption(`Linha; Numéricos`);
mod.addCorrectOption(`Linha; Temporais`);
mod.setExp(`O gráfico correto é o de linhas, pois os dados são temporais, uma vez que Eduardo quer mostrar cronologia para os acionistas e o gráfico de linha representa muito bem isto, e os dados em questão variam ao longo de meses ou anos.
Gráficos de pizza, não se aplicam a dados temporais. Os Dados não são simplesmente numéricos pois, em essência, estamos lidando com cronologia, logo são dados temporais.
O tipo de dados em que números variam no tempo não pode ser classificado como tipo categórico.`);
questions.push(mod);

mod = new Question(`Quais destas opções representam as diferenças entre o KDD e o CRISP-DM?
I - Etapas de Entendimento do Negócio, e Implantação do Artefato de ML
II - A etapa de Preparação de Dados substituindo as etapas de Seleção de Dados, Pré-Processamento e Transformação de Dados
III - A obrigatoriedade da entrega de um artefato de ML`);
mod.addOption(`Apenas a opção II`);
mod.addOption(`Apenas as opções I e III`);
mod.addOption(`Apenas a opção I`);
mod.addOption(`Apenas as opções II e III`);
mod.addCorrectOption(`As opções I,II, e III estão corretas`);
mod.setExp(`O processo do CRISP-DM se diferencia do processo de KDD tradicional pela inclusão das etapas de entedimento do negócio e endtendimento dos dados, bem como as simplificação de três etapas de preparação de dados para uma, e, finalmente, o comprometimento do processo CRISP-DM de entregar um artefato de ML.`);
questions.push(mod);

mod = new Question(`As técnica de aprendizado de máquina para aprendizado supervisionado são:
I - Classificação
II - Agrupamento
III - Regressão`);
mod.addOption(`Apenas II e III`);
mod.addOption(`Apenas i e II`);
mod.addOption(`Apenas I`);
mod.addOption(`APenas II`);
mod.addCorrectOption(`Apenas I e III`);
mod.setExp(`O aprendizado supervisionado contempla duas técnicas que são a de classificação, em que o modelo tenta aprender a categorizar observações, e a regressão, que tenta aferir um valor numérico para novos registros, baseado no registro histórico e suas características.`);
questions.push(mod);

mod = new Question(`Selecione a opção em que a computação se refere à execução de aplicações e serviços em uma rede distribuída usando recursos virtualizados.`);
mod.addOption(`Computação de Big Data`);
mod.addOption(`Computação centralizada`);
mod.addOption(`Computação de banco de dados`);
mod.addOption(`Computação Paralela`);
mod.addCorrectOption(`Computação em Nuvem`);
mod.setExp(`As aplicações de computação em nuvem são acessadas por protocolos de Internet e padrões de rede. As demais opções estão erradas, pois nenhuma delas trabalha obrigatoriamente com protocolos de internet.`);
questions.push(mod);

mod = new Question(`Selecione a opção em que a camada fornece comunicação ponta a ponta nas aplicações de internet das coisas.`);
mod.addOption(`Camada de enlace de dados`);
mod.addOption(`Camada de sessão`);
mod.addOption(`Camada de aplicação`);
mod.addOption(`Camada lógica`);
mod.addCorrectOption(`Camada de transporte`);
mod.setExp(`A camada de transporte é encarregada pela comunicação ponta a ponta entre as aplicações e oferece confiabilidade, além de garantir que os pacotes serão entregues da mesma forma que o usuário os enviou. Em relação às outras opções, a camada lógica simplesmente não existe. Já a camada de enlace de dados detecta erros e, quando necessário, os corrige. A camada de sessão trata dos processos responsáveis pela transferência de dados. Por fim, a camada de aplicação é responsável pela comunicação fim-a-fim entre processos.`);
questions.push(mod);

mod = new Question(`O Hadoop é uma tecnologia especializada em atender as demandas de Big Data. Selecione a opção correta que contenha a linguagem de programação utilizada para o desenvolvimento e implementação do Hadoop.`);
mod.addOption(`Python`);
mod.addOption(`Perl`);
mod.addOption(`Java Script`);
mod.addOption(`Lua`);
mod.addCorrectOption(`Java`);
mod.setExp(`O Hadoop foi desenvolvido usando, originalmente, a linguagem de programação Java na distribuição livre da Apache Foundation. Atualmente, diferentes distribuições do framework estão implementadas em diversas linguagens, entre as quais o Python.`);
questions.push(mod);

mod = new Question(`O Hadoop é um framework de código aberto voltado para aplicações de Big Data. Neste sentido, selecione a alternativa correta que apresenta um grande desafio no processo de configuração e gerenciamento do Hadoop.`);
mod.addOption(`Processos de extração, transformação e carregamento dos dados.`);
mod.addOption(`Mecanismo para melhorar o processamento dos dados.`);
mod.addOption(`Gerenciamento do armazenamento de dados.`);
mod.addOption(`Tratar dados não-estruturados.`);
mod.addCorrectOption(`Aplicar políticas de segurança.`);
mod.setExp(`O tratamento da segurança da informação é um grande desafio para o Hadoop, pois o profissional responsável por essa etapa terá que configurar o sistema que, pela natureza dos problemas de Big Data, é uma tarefa complexa`);
questions.push(mod);

mod = new Question(`O PySpark caracteriza-se como uma biblioteca Spark responsável por executar programas usando recursos do Apache Spark. Selecione a opção correta que contenha itens 
que são pré-requisitos de instalação para utilização do PySpark.`);
mod.addOption(`Hadoop e Spark`);
mod.addOption(`Python e Escala`);
mod.addOption(`Java e R`);
mod.addOption(`Casandra e Spark`);
mod.addCorrectOption(`Java e Python`);
mod.setExp(`A utilização do PySpark depende principalmente de três pré-requisitos: instalação e configuração do Java, Python e do Spark. Além disso, é necessário tratar detalhesda plataforma sobre a qual o Spark vai rodar. No caso do Google Colab, é necessário instalar oFindSpark e o próprio PySpark também.`);
questions.push(mod);

mod = new Question(`O MapReduce é uma técnica clássica de programação e é bastante utilizada por diversos frameworks como o Spark, por exemplo. Em relação à técnica MapReduce, selecione a opção correta.`);
mod.addOption(`Foi substituída no Spark por acesso direto à memória`);
mod.addOption(`Consiste em uma técnica de programação sequencial`);
mod.addOption(`Só pode ser aplicada para grandes volumes de dados`);
mod.addOption(`É uma técnica lenta para processamento de grandes volumes de dados`);
mod.addCorrectOption(`É uma técnica de computação distribuída`);
mod.setExp(`O MapReduce é uma técnica de computação distribuída que apesar de clássica ainda é considerada muito eficiente para processamento de grandes volumes de dados. Apesarde ser adequada para projetos de big data, ela também pode ser utilizada para menores volumes, mas não é apropriada para esses casos.`);
questions.push(mod);

mod = new Question(`A linguagem Python se destaca como intuitiva e de fácil aprendizagem. Analise o código abaixo que apresenta laços condicionais e instruções de repetição.for i in range(10):    if (i%2==0):        print(i) Qual a saída esperada após a execução do programa?`);
mod.addOption(`Serão impressos no console os números pares entre 1 e 10.`);
mod.addOption(`Serão impressos no console os números racionais entre 0 e 9.`);
mod.addOption(`Serão impressos no console os números ímpares entre 0 e 9.`);
mod.addOption(`Serão impressos no console os números ímpares entre 0 e 10.`);
mod.addCorrectOption(`Serão impressos no console os números pares entre 0 e 9.`);
mod.setExp(`O constructo de laço que itera sobre uma sequência dos números reais de 0 a 9, e cujo condicional dentro do laço escolhe apenas os números cujo resto de sua divisão por 2 seja 0, condição lógica que define se um número é par ou não.`);
questions.push(mod);

mod = new Question(`Compreender a análise de dados em Python é fundamental para o cientista de dados. Qual o papel do sistema pip da linguagem Python?`);
mod.addOption(`Biblioteca de Processamento de Linguagem Natural.`);
mod.addOption(`Gerenciador de memória do Python.`);
mod.addOption(`Motor de Busca da IDE do Python.`);
mod.addOption(`Gerenciador de espaços virtuais do Python`);
mod.addCorrectOption(`Gerenciador de Pacotes do Python.`);
mod.setExp(`O papel do comando pip é gerenciar os pacotes a serem importados no Python, bem como instalá-los via comando pip install. Gerenciar memória é papel do sistema operacional, não do pip. A função de gerenciar espaços virtuais é atribuída ao venv, o virtualenv. Motor de busca éuma atribuição de IDE, não de linguagem de programação. O processamento de linguagem natural é função de biblioteca, diferente de gerenciamento de pacotes.`);
questions.push(mod);

mod = new Question(`Qual destes modelos é adequado para um problema de classificação? I - SVM II - Árvore de Decisão III - K-Médias`);
mod.addOption(`Apenas as opções II e III`);
mod.addOption(`Apenas as opções I e III`);
mod.addOption(`Todas as opções I, II e III`);
mod.addOption(`Apenas a opção III`);
mod.addCorrectOption(`Apenas as opções I e II`);
mod.setExp(`O aprendizado supervisionado contempla duas técnicas de aprendizado de máquina, a regressão e a classificação. Da classificação nossas opções são a árvore de decisão, a SVM, o KNN, as redes neurais entre outras. Mas, o modelo k-médias é uma técnica de aprendizado não supervisionado.`);
questions.push(mod);

mod = new Question(`As redes neurais são modelos poderosos cujo principal componente onde estão armazenados seus conhecimentos é(são) `);
mod.addOption(`Camada de Saída`);
mod.addOption(`Pesos`);
mod.addOption(`Vieses`);
mod.addOption(`Função de Ativação`);
mod.addCorrectOption(`Camadas Escondidas`);
mod.setExp(`O conhecimento dos modelos conexionistas é localizado em suas camadas internas ocultas ou escondidas (hidden), pois é lá que se encontram as matrizes de pesos, vieses e funções de ativação que, ao trabalharem juntas, produzem o conhecimento necessário para discriminar novas observações com base em registros passados.`);
questions.push(mod);

mod = new Question(`A respeito das aplicações de fluxos de dados, selecione a opção correta. `);
mod.addOption(`Serviço de correio eletrônico`);
mod.addOption(`Reapresentação de programas de televisão.`);
mod.addOption(`Transações bancárias, como o serviço de PIX.`);
mod.addOption(`Serviços de compras online`);
mod.addCorrectOption(`Serviços sob demanda, como serviços de filme online.`);
mod.setExp(`Os serviços de fluxo de dado de aplicações de mídia de streaming são arquivos enviados em partes por serviço e reproduzidos por um client e conforme a entrega continua. As demais opções estão erradas, pois são exemplos de serviços em que os dados já foram gerados, ou que são usados apenas esporadicamente.`);
questions.push(mod);

mod = new Question(`Selecione a opção correta que contém a principal plataforma de tecnologia de nuvem que é usada como referência para as outras plataformas.`);
mod.addOption(`Microsft Azure`);
mod.addOption(`IBM Cloud`);
mod.addOption(`Google Cloud`);
mod.addOption(`Oracle Cloud`);
mod.addCorrectOption(`Amazon AWS`);
mod.setExp(`A plataforma Amazon AWS foi a primeira plataforma Cloud e até hoje é considerada como principal referência do mercado. As outras plataformas também são muito importantes e, junto com a Amazon, detém boa fatia do mercado.`);
questions.push(mod);

mod = new Question(`Reconhecer os conceitos de Data Lake é fundamental para o profissional de Tecnologia da Informação. Selecione a opção correta a respeito do Data Lake.`);
mod.addOption(`São exclusivos da distribuição Hadoop Apache.`);
mod.addOption(`Possui alta latência para acesso dos dados.`);
mod.addOption(`Aplicam processos de tratamento nos dados.`);
mod.addOption(`Demandam por equipamentos especiais.`);
mod.addCorrectOption(`Armazenam os dados de modo eficiente.`);
mod.setExp(`O Data Lake utiliza um método muito eficiente para fazer o armazenamento dos dados. Dessa  forma ele possui baixa latência para acessar os dados. Além disso, o Data Lake não demanda por equipamentos especiais e não é de uso exclusivo da distribuição Hadoop Apache.`);
questions.push(mod);

mod = new Question(`Reconhecer os conceitos de Data Lake é fundamental para o profissional de Tecnologia da Informação. Selecione a opção correta que define resumidamente o que é o Data Lake.`);
mod.addOption(`É uma tecnologia de armazenamento e processamento de dados.`);
mod.addOption(`Trata-se de um componente do HDFS responsável pela implementação do mecanismo MapReduce para fazer o gerenciamento dos dados.`);
mod.addOption(`É um repositório para tratamento dos dados.`);
mod.addOption(`É um ambiente para tratamento e armazenamento apenas de dados relacionais.`);
mod.addCorrectOption(`É um repositório centralizado para armazenamento de dados.`);
mod.setExp(`O Data Lake é um repositório ce ntralizado capaz de armazenar dados nos diversos formatos: estruturados, não estruturados  e semiestruturados sem a necessidade de ap licar nenhum tratamento.`);
questions.push(mod);

mod = new Question(`O paradigma MapReduce é uma estratégia de computação com capacidade de processar grandes conjuntos de dados de maneira distribuída em várias máquinas. Em relação à técnica MapReduce, selecione a opção que é responsável por  consolidar  os resultados produzidos ao longo do processamento.`);
mod.addOption(`Separação`);
mod.addOption(`Processamento`);
mod.addOption(`Agregação`);
mod.addOption(`Mapeamento`);
mod.addCorrectOption(`Redução`);
mod.setExp(`A função de redução agrupa os pares após a fase de embaralhamento concluindo o processamento dos dados. O MapReduce é uma técnica clássica de programação distribuída e é bastante utilizada por diversos frameworks como o Spark, por exemplo.`);
questions.push(mod);

mod = new Question(`Sobre o Pandas DataFrame o que podemos afirmar? I - É o coletivo de séries temporais pandas series. II - É a estrutura de dados que representa os dados em painel III - É uma matriz conjunto de vetores IV - É o bloco fundamental da análise de dados moderna, principalmente para aprendizado de máquina. Analise as frases listadas e assinale a a lternativa correta.`);
mod.addOption(`Todas as opções I, II , III, IV.`);
mod.addOption(`Apenas a opção III.`);
mod.addOption(`Apenas as opções II, III.`);
mod.addOption(`Apenas as opções I, II, III.`);
mod.addCorrectOption(`Apenas as opções I, II, IV.`);
mod.setExp(`A proposição I é correta, pois, assim como o conceito estatístico, o DataFrame no Python é um  coletivo de objetos Pandas Series, que são séries temporais. A proposição II está correta pela definição estatística de dados em painel, que são conjuntos de séries temporais heterogêneas armazenadas e dispostas de forma tabular. A proposição III não é verdade, pois o DataFrame é um conjunto de Series, que por sua vez é muito diferente do objeto List do Python. A proposição IV está correta, pois atualmente em grande maioria esmagadora, os projetos modernos de análise de dados dependem muito dos DataFrames, uma vez que são muito cômodos e robustos para análise, principalmente em projetos de aprendizado de máquina.`);
questions.push(mod);

mod = new Question(`Bibliotecas poderosas de análise e manipulação de dados podem ser utilizadas com a linguagem Python. Qual o método utilizado para fazer a junção entre DataFrames no pandas?`);
mod.addOption(`values`);
mod.addOption(`reset_index`);
mod.addOption(`set_index`);
mod.addOption(`sum`);
mod.addCorrectOption(`merge`);
mod.setExp(`O método merge é equivalente ao join da SQL que junta dois DataFram es a partir de indexes do mesmo nome, ou de indexes pré-definidos pelo cientista de dados. As demais alternativas não dizem respeito à operação de junção entre DataFrames.`);
questions.push(mod);

mod = [...questions];
let correctCount = 0;
while(mod.length>0){
    const pos = Math.floor(Math.random()*mod.length);
    const question = mod[pos];
    mod.splice(pos,1);
    console.log("\n"+question.text);
    console.log("\nResposta:");
    const arr = ['A','B','C','D','E'];
    for(let key in arr){
        const lettre = arr[key];
        console.log(`${lettre} - ${question.options[lettre].text}`);
    }
    const r = prompt();
    const tst = r.toUpperCase().match(/[ABCDE]/g);
    if(r && tst && tst.length==1 && question.options[r.toUpperCase()].correct){
        correctCount++;
        console.log("NICE!");
    }else{
        console.log("ERROU!");
        const lts = ['A','B','C','D','E'];
        lts.map((letter)=>{
            if(question.options[letter].correct){
                console.log(`Correto: ${letter}`);
            }
        })
    }
    if(question.exp){
        console.log(`Explicação: ${question.exp}`);
    }
    prompt("\nTecle enter para continuar...");
    console.clear();
}
console.log(`Você acertou ${correctCount}/${questions.length}, média de acerto de ${Math.floor(correctCount/questions.length*100)}%`);