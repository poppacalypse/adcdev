/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-envelope': '&#xe900;',
		'icon-mail': '&#xe900;',
		'icon-email': '&#xe900;',
		'icon-letter': '&#xe900;',
		'icon-message': '&#xe900;',
		'icon-envelope-open-o': '&#xe901;',
		'icon-paper-plane-o': '&#xe902;',
		'icon-send-o': '&#xe902;',
		'icon-envelope-o': '&#xe903;',
		'icon-paper-plane': '&#xe904;',
		'icon-send': '&#xe904;',
		'icon-envelope1': '&#xe905;',
		'icon-github-alt': '&#xe906;',
		'icon-github-square': '&#xe907;',
		'icon-github1': '&#xe908;',
		'icon-twitter-square': '&#xe909;',
		'icon-twitter': '&#xe90a;',
		'icon-linkedin-square': '&#xe90b;',
		'icon-linkedin': '&#xe90c;',
		'icon-github': '&#xe90d;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
