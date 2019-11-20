//resposta para a página index

exports.show = function(req, res) {
	res.render('index', {
		title: 'Trabalho de Web2 Parte I'
	});
};
