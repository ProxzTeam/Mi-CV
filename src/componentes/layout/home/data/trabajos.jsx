// Fuente de datos local para la seccion de trabajos/portafolio.
// Cada proyecto define su propia galeria y su propio texto para evitar contenido compartido.

const crearContenidoTexto = (...parrafos) =>
	crearContenido(parrafos.map((parrafo) => ({
		tipo: 'texto',
		valor: parrafo,
	})));

const crearGaleria = (...imagenes) =>
	imagenes.map((imagen, index) => ({
		url: imagen,
		alt: `Vista ${index + 1}`,
	}));

// Construye el contenido del modal a partir de bloques simples.
// Asi cada proyecto solo define que parrafos e imagenes necesita.
const crearContenido = (bloques) => (
	<>
		{bloques.map((bloque, index) => {
			if (bloque.tipo === 'texto') {
				return <p key={`texto-${index}`}>{bloque.valor}</p>;
			}

			if (bloque.tipo === 'imagen') {
				return <img key={`imagen-${index}`} loading="lazy" src={bloque.src} alt={bloque.alt || ''} />;
			}

			return null;
		})}
	</>
);

const trabajoAsset = (fileName) => `/assets/trabajos/${fileName}`;

const contenidoStartup = crearContenidoTexto(
	'Startup Page es una landing page conceptual desarrollada para demostrar habilidades en diseño UI/UX y desarrollo frontend.',
	'El proyecto se enfoca en una estructura clara y jerárquica que guía al usuario a través de una experiencia intuitiva, destacando la propuesta de valor, las características principales y los llamados a la acción.',
	'Incluye diseño responsive, soporte para modo claro y oscuro, soporte para cambiar entre los idiomas de ingles/español y una interfaz moderna orientada a rendimiento y facilidad de uso.'
);

const contenidoFitPlanner = crearContenidoTexto(
	'Startup Page es una landing page conceptual desarrollada para demostrar habilidades en diseño UI/UX y desarrollo frontend.',
	'El proyecto se enfoca en una estructura clara y jerárquica que guía al usuario a través de una experiencia intuitiva, destacando la propuesta de valor, las características principales y los llamados a la acción.',
	'Incluye diseño responsive, soporte para modo claro y oscuro, soporte para cambiar entre los idiomas de ingles/español y una interfaz moderna orientada a rendimiento y facilidad de uso.'
);

// Cada objeto representa una tarjeta del grid y su contenido detallado en el modal.
const trabajos = [
	{
		id: 1,
		categoria: 'desarrollo-web',
		thumb: {
			url: trabajoAsset('startup-website/1.png'),
			alt: 'Trabajo 1',
		},
		galeria: crearGaleria(
			trabajoAsset('startup-website/1.png'),
			trabajoAsset('startup-website/2.png'),
			trabajoAsset('startup-website/3.png'),
			trabajoAsset('startup-website/4.png'),
		),
		info: {
			nombre: 'Startup Page',
			categoria: 'Desarrollo Web',
			contenido: contenidoStartup,
		},
	},
	{
		id: 2,
		categoria: 'aplicaciones-moviles',
		thumb: {
			url: trabajoAsset('fitplanner-app/1.png'),
			alt: 'Trabajo 2',
		},
		galeria: crearGaleria(
			trabajoAsset('fitplanner-app/1.png'),
			trabajoAsset('fitplanner-app/2.png'),
			trabajoAsset('fitplanner-app/3.png'),
			trabajoAsset('fitplanner-app/4.png'),
			trabajoAsset('fitplanner-app/5.png'),
			trabajoAsset('fitplanner-app/7.png'),

		),
		formatoGaleria: 'vertical',
		info: {
			nombre: 'FitPlanner App',
			categoria: 'Aplicaciones Móviles',
			contenido: contenidoFitPlanner,
		},
	},
];

export default trabajos;
