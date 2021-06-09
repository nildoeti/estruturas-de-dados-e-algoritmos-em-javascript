/*Exemplos de como criar um objeto*/
var meuObjeto = new Objeto(); // exemplo 1
var meuObjeto = {}; // exemplo 2

// exemplo 3
meuObjeto = { // objeto
    cliente: { // caracteristicas do meuObjeto
        nome: 'Godoy',
        sobreNome: 'de Paula'
    },
};

// exemplo 4
function Livro(titulo, pagina, autor) {
    this.titulo = titulo;
    this.pagina = pagina;
    this.autor = autor;
}

// instanciando a classe Livro
var livro = new Livro('titulo', 'pagina', 'autor');

// acessando as propriedades
console.log(livro.titulo); // exibe o titulo do livro
livro.titulo = 'novo titulo'; // atualiza para um novo título
console.log(livro.titulo); // exibe o valor atualizado

// exemplo 5, função método
Livro.prototype.printTitle() =function() {
    console.log(this.titulo);
};
Livro.printTitle();

// exemplo 6
function Livro(autor, titulo, pagina) {
    this.autor = autor;
    this.titulo = titulo;
    this.pagina = pagina;
    this.printPagina = function() {
            console.log(this.pagina);
    };
}
