# Notas HTML

### Elementos HTML

O elemento HTML precisa de tag de abertura e fechamento, a definição de seus atributos e conteúdo desses atributos. São exemplos de elementos de HTML: head, body, h1...h6, footer, etc. A vejamos um exemplo de estrutura básica em HTML.

	<!DOCTYPE html>
	<html>
		<head>
			<meta>
			<title></title>
		</head>
		<body>
		</body>
	</html>

Agora, vejamos mais alguns exemplos de elementos HTML, relacionados a semântica, e para que servem esses elementos:

	<section>
Serve para a definição genérica de seção de conteúdo, como por exemplo uma lista de artigos;

	<header>
Assume o papel do cabeçalho da página ou de parte da página (como uma seção, por exemplo);
	<article>
Representando um conteúdo relevante na página, abrigando um texto em que se deseja publicar (artigos de blog, por exemplo);

	<aside>
Pode representar um conteúdo relacionado ao conteúdo principal de uma página, tal como a biografia de um altor ou links relacionados. Este elemento é representado por uma barra lateral;

	<footer>
Está relacionado ao rodapé da página ou de parte dela (section, ou article);

	<h1>...<h6>

Servem para o propósito de representação de títulos na página, sendo o h1 o mais importante, podendo conter apenas 1 por página.

Tendo em vista a definição desses elementos do HTML, será apresentada uma nova estrutura, trazendo mais alguns desses elementos, e então a sua representação compilada, já no navegador.

	<!DOCTYPE html>
	<html>
	    <head>
	        <meta charset="utf-8">
	        <title>Matheus Barros</title>
	    </head>
	    <body>
	        <header>
	            <h1>Matheus Barros</h1>
	        </header>
	        <section>
	            <header>
	                <h2>Posts</h2>
	            </header>
	            <article>
	                <header>
	                    <h3>Post #1</h3>
	                </header>
	            </article>
	        </section>
	        <footer></footer>
	    </body>
	</html>

O resultado gerado com é observado abaixo:
##

<html>
    <head>
        <meta charset="utf-8">
        <title>Matheus Barros</title>
    </head>
    <body>
        <header>
            <h1>Matheus Barros</h1>
        </header>
        <section>
            <header>
                <h2>Posts</h2>
            </header>
            <article>
                <header>
                    <h3>Post #1</h3>
                </header>
            </article>
        </section>
        <footer></footer>
    </body>
</html>

##
Trazendo agora a listagem de novos elementos HTML. o elemento para a representação de um parágrafo no texto:

	<p>Conteúdo.</p>
Para a ancoragem de conteúdos através de hiperlinks, para páginas dentro do próprio site ou sites externos, para e-mails e telefones.

	Exemplo:
	<a>link</a>
	<a href="https://www.linkedin.com/in/matheus-barros-7a1048204/">Meu LinkedIn</a>
	<a href="matheus_prais@outlook.com">E-mail</a>

<a href="https://www.linkedin.com/in/matheus-barros-7a1048204/">Meu LinkedIn</a>

<a href="matheus_prais@outlook.com">E-mail</a>
##
Utilizando o exemplo de página usado anteriormente, serão acrescentados os elementos de parágrafo e ancoragem, e o texto do parágrafo que será utilizado foi retirado de meu trabalho de conclusão de curso, feito durante meu período de graduação, na Universidade Federal de Uberlândia.
##
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Matheus Barros</title>
    </head>
    <body>
        <header>
            <h1>Matheus Barros</h1>
        </header>
        <section>
            <header>
                <h2>Posts</h2>
            </header>
            <article>
                <header>
                    <h3>Abstract</h3>
                </header>
                <p>
                    With regard to the precarious and critical voltage limits for the consumption voltages provided by energy authorities, it can be said that they are extremely important definitions for the supply of the community in general. This is due to the fact that such limits guarantee the delivery of energy under ideal consumption conditions for consumer equipment, since these were dimensioned based on voltage and power definitions in their projects. All this makes energy quality indicators extremely important concepts for consumers who use it. The definition of these quality indicators in the Brazilian energy system, are defined by the distribution procedures. It turns out that with the increase in distributed photovoltaic generations in recent years, an overvoltage phenomenon affects the distribution network due to the non-establishment of power limits of the plants installed in the consumer units, which in fact contribute a lot to the generation of these units, but which, at uncontrolled levels, cause the network voltage to violate the quality limits in the access of low voltage consumers. The main point of this work is the analysis of a circuit supplied by a real feeder, from a national utility, in which, through computer simulation, by the power flow simulation software OpenDSS (Open Distribution System Simulator), together with the Python programming language, it is possible to explore the insertion of distributed generators in the system, verifying the moments in which the voltage reaches the problematic values of the voltage limits. <a href="https://repositorio.ufu.br/handle/123456789/34549" target="_blank">READ MORE HERE</a>.
                </p> 
            </article>
        </section>
        <footer></footer>
    </body>
</html>
##
O código utilizado para a criação:

	<!DOCTYPE html>
	<html>
	    <head>
	        <meta charset="utf-8">
	        <title>Matheus Barros</title>
	    </head>
	    <body>
	        <header>
	            <h1>Matheus Barros</h1>
	        </header>
	        <section>
	            <header>
	                <h2>Posts</h2>
	            </header>
	            <article>
	                <header>
	                    <h3>Post #1</h3>
	                </header>
	                <p>
	                    "TEXTO"
	                </p> 
	            </article>
	        </section>
	        <footer></footer>
	    </body>
	</html>
##
Para a inserção de imagens na página, podemos utilizar o elemento "img".
	
	<img>
	atributos:
	<img src="Caminho_da_imagem"> OBRIGATÓRIO
	<img alt="Descrição">
##
Para adição de listas no site, o HTML traz os elementos "ul" e "ol" e o que difere entre os dois é a importância da ordenação os componentes da lista. O "ol" ressalta a importância da ordenação de cada item da lista, diferentemente do "ul". o "li" é um item dessa lista.

	<ul>
	item 1
	item 2

	<ol>
	1. item 1
	2. item 3

	<li>

Adicionando uma lista de contatos no rodapé do site do exemplo explorado nesse artigo, seria:

<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Matheus Barros</title>
    </head>
    <body>
        <header>
            <h1>Matheus Barros</h1>
        </header>
        <section>
            <header>
                <h2>Posts</h2>
            </header>
            <article>
                <header>
                    <h3>Post #1</h3>
                </header>
                <p>
                    "TEXTO"
                </p> 
            </article>
        </section>
        <footer>
            <ul>
                <li>
                    <a href="mailto:matheus_prais@outlook.com">matheus_prais@outlook.com</a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/matheus-barros-7a1048204/" target="_blank">LinkedIn</a>
                </li>
            </ul>
        </footer>
    </body>
</html>

O código HTML que descreve é:

	<!DOCTYPE html>
	<html>
	    <head>
	        <meta charset="utf-8">
	        <title>Matheus Barros</title>
	    </head>
	    <body>
	        <header>
	            <h1>Matheus Barros</h1>
	        </header>
	        <section>
	            <header>
	                <h2>Posts</h2>
	            </header>
	            <article>
	                <header>
	                    <h3>Post #1</h3>
	                </header>
	                <p>
	                    "TEXTO"
	                </p> 
	            </article>
	        </section>
	        <footer>
	            <ul>
	                <li>
	                    <a href="mailto:matheus_prais@outlook.com">matheus_prais@outlook.com</a>
	                </li>
	                <li>
	                    <a href="https://www.linkedin.com/in/matheus-barros-7a1048204/" target="_blank">LinkedIn</a>
	                </li>
	            </ul>
	        </footer>
	    </body>
	</html>
##



	






 


