export interface Sprite {
	p: Record<string, string>;
	r: string[];
}

/** 12x12 icons. a = outline, b = body, c/d = the light bit */
export const sprites: Record<string, Sprite> = {
	boot: {
		p: { a: '#241a2e', b: '#8f6bff', c: '#4d2199' },
		r: [
			'............',
			'...aaaa.....',
			'..abbbba....',
			'..abbbba....',
			'..abbbba....',
			'..abbbba....',
			'..abbbbaa...',
			'..abbbbbba..',
			'..abbbbbbba.',
			'.acccccccca.',
			'.acccccccca.',
			'..aaaaaaaa..'
		]
	},
	wing: {
		p: { a: '#1a1f3a', b: '#cabaff', c: '#7c4dff' },
		r: [
			'............',
			'..........aa',
			'........aabb',
			'......aabbbb',
			'....aabbbbbb',
			'..aabbbbbbcc',
			'.abbbbbbccc.',
			'.abbbbcccc..',
			'.abbcccc....',
			'.acccc......',
			'..aa........',
			'............'
		]
	},
	glove: {
		p: { a: '#3a1420', b: '#e35d5d', c: '#8f1a2e' },
		r: [
			'............',
			'..aaaa......',
			'.abbbba.....',
			'abbbbbba....',
			'abbbbbbba...',
			'abbbbbbbba..',
			'abbbbbbbba..',
			'abbbbbbbba..',
			'.abbbbbbba..',
			'..abbbbba...',
			'...aaaaa....',
			'............'
		]
	},
	quiver: {
		p: { a: '#2a1c05', b: '#6a7299', c: '#34c98f' },
		r: [
			'..a..a..a...',
			'..a..a..a...',
			'.aaa.aa.aa..',
			'..bbbbbbb...',
			'..bcccccb...',
			'..bcccccb...',
			'..bccbccb...',
			'..bcccccb...',
			'..bcccccb...',
			'..bcccccb...',
			'..bbbbbbb...',
			'............'
		]
	},
	star: {
		p: { a: '#2f1461', b: '#f5d67a', c: '#e6b23c' },
		r: [
			'.....aa.....',
			'....abba....',
			'....abba....',
			'aaaabbbbaaa.',
			'abbbbbbbbbba',
			'.abbbbbbbba.',
			'...abbbba...',
			'..abbbbbba..',
			'..ab.aa.ba..',
			'..a..aa..a..',
			'.....aa.....',
			'............'
		]
	},
	scarab: {
		p: { a: '#12294d', b: '#2fc4e0', c: '#0a0c1a' },
		r: [
			'....aaaa....',
			'...abbbba...',
			'..abbbbbba..',
			'.abbccbbbba.',
			'abbbccbbbbba',
			'abbbccbbbbba',
			'abbbccbbbbba',
			'.abbccbbbba.',
			'..abbccbba..',
			'...abbbba...',
			'....aaaa....',
			'............'
		]
	},
	shield: {
		p: { a: '#1a1f3a', b: '#4d94f0', c: '#12294d' },
		r: [
			'aaaaaaaaaaaa',
			'abbbbbbbbbba',
			'abbccccccbba',
			'abbcccccccba',
			'abbcccccccba',
			'abbcccccccba',
			'.abbccccccba',
			'.abbcccccba.',
			'..abbcccba..',
			'...abbcba...',
			'....abba....',
			'.....aa.....'
		]
	},
	ankh: {
		p: { a: '#2a1c05', b: '#e6b23c', c: '#f5d67a' },
		r: [
			'....aaaa....',
			'...abbbba...',
			'...abaaba...',
			'...abaaba...',
			'...abbbba...',
			'.aaabbbbaaa.',
			'.abbbbbbbba.',
			'.aaabbbbaaa.',
			'....abba....',
			'....abba....',
			'....abba....',
			'.....aa.....'
		]
	},
	heart: {
		p: { a: '#3a0e18', b: '#e0435c', c: '#f8798c' },
		r: [
			'..aa....aa..',
			'.abba..abba.',
			'abbbbaabbbba',
			'abbbbbbbbbba',
			'abbbbbbbbbba',
			'.abbbbbbbba.',
			'..abbbbbba..',
			'...abbbba...',
			'....abba....',
			'.....aa.....',
			'............',
			'............'
		]
	},
	flask: {
		p: { a: '#1c0d3c', b: '#232a4a', c: '#7ab7ff' },
		r: [
			'....aaaa....',
			'....abba....',
			'....abba....',
			'...abbbba...',
			'..abbbbbba..',
			'.abbbbbbbba.',
			'.abbbbbbbba.',
			'.abccccccba.',
			'.abccccccba.',
			'.abccccccba.',
			'..aaaaaaaa..',
			'............'
		]
	},
	compass: {
		p: { a: '#1a1f3a', b: '#9aa3c8', c: '#e0435c' },
		r: [
			'...aaaaaa...',
			'..abbbbbba..',
			'.abbbbcbbba.',
			'abbbbcccbbba',
			'abbbbcccbbba',
			'abbbcccccbba',
			'abbcccccbbba',
			'abbbbcccbbba',
			'.abbbcccbba.',
			'..abbbbbba..',
			'...aaaaaa...',
			'............'
		]
	},
	hammer: {
		p: { a: '#241a12', b: '#9aa3c8', c: '#e9ecff' },
		r: [
			'.....aaaaa..',
			'....abbbbba.',
			'....abcccba.',
			'....abbbbba.',
			'...aaaaaaa..',
			'...abba.....',
			'..abba......',
			'.abba.......',
			'.abba.......',
			'.abba.......',
			'..aa........',
			'............'
		]
	},
	fish: {
		p: { a: '#12294d', b: '#4d94f0', c: '#e9ecff' },
		r: [
			'............',
			'.......aa...',
			'..aaa.abba..',
			'.abbbaabbba.',
			'abbcbbbbbbba',
			'abbbbbbbbbba',
			'abbbbbbbbbba',
			'.abbbaabbba.',
			'..aaa.abba..',
			'.......aa...',
			'............',
			'............'
		]
	},
	yoyo: {
		p: { a: '#1a1030', b: '#a77bff', c: '#f2eeff' },
		r: [
			'.....a......',
			'.....a......',
			'.....a......',
			'.....a......',
			'...aaaaa....',
			'..abbbbba...',
			'.abbcccbba..',
			'.abccccbba..',
			'.abbcccbba..',
			'..abbbbba...',
			'...aaaaa....',
			'............'
		]
	},
	ring: {
		p: { a: '#2a1c05', b: '#e6b23c', c: '#f5d67a' },
		r: [
			'............',
			'....aaaa....',
			'...abbbba...',
			'..abb..bba..',
			'.abb....bba.',
			'.ab......ba.',
			'.ab......ba.',
			'.abb....bba.',
			'..abb..bba..',
			'...abbbba...',
			'....aaaa....',
			'............'
		]
	},
	anvil: {
		p: { a: '#0a0c1a', b: '#454c73', c: '#6a7299' },
		r: [
			'............',
			'..aaaaaaaa..',
			'.abbbbbbbba.',
			'.abbbbbbbba.',
			'..aabbbbaa..',
			'....abba....',
			'....abba....',
			'...abbbba...',
			'..abbbbbba..',
			'.abbbbbbbba.',
			'.aaaaaaaaaa.',
			'............'
		]
	},
	shimmer: {
		p: { a: '#2f1461', b: '#cabaff', c: '#f2eeff' },
		r: [
			'.....a......',
			'.....a......',
			'....aba.....',
			'...abbba....',
			'..abbbbba...',
			'.abbcccbba..',
			'.abcccccba..',
			'.abbcccbba..',
			'..abbbbba...',
			'...aaaaa....',
			'............',
			'............'
		]
	},
	skull: {
		p: { a: '#2a0a12', b: '#ddd6c8', c: '#3a1420' },
		r: [
			'...aaaaaa...',
			'..abbbbbba..',
			'.abbbbbbbba.',
			'.abccbbccba.',
			'.abccbbccba.',
			'.abbbbbbbba.',
			'.abbbccbbba.',
			'..abbbbbba..',
			'...abbbba...',
			'...ababa....',
			'...aaaaa....',
			'............'
		]
	},
	eye: {
		p: { a: '#3a1420', b: '#ddd6c8', c: '#8f1a2e', d: '#e0435c' },
		r: [
			'....aaaa....',
			'..aabbbbaa..',
			'.abbbbbbbba.',
			'abbbbccbbbba',
			'abbbccccbbba',
			'abbccddccbba',
			'abbccddccbba',
			'abbbccccbbba',
			'abbbbccbbbba',
			'.abbbbbbbba.',
			'..aabbbbaa..',
			'....aaaa....'
		]
	},
	bag: {
		p: { a: '#2a1c05', b: '#bf8a1e', c: '#f5d67a' },
		r: [
			'...a....a...',
			'...aa..aa...',
			'....aaaa....',
			'..aabbbbaa..',
			'.abbbbbbbba.',
			'abbbcccbbbba',
			'abbcccccbbba',
			'abbbcccbbbba',
			'abbbbbbbbbba',
			'.abbbbbbbba.',
			'..aaaaaaaa..',
			'............'
		]
	},
	chest: {
		p: { a: '#241a12', b: '#bf8a1e', c: '#e9ecff' },
		r: [
			'............',
			'.aaaaaaaaaa.',
			'.abbbbbbbba.',
			'.abbbbbbbba.',
			'.aaaaccaaaa.',
			'.abbbccbbba.',
			'.abbbccbbba.',
			'.abbbbbbbba.',
			'.abbbbbbbba.',
			'.aaaaaaaaaa.',
			'............',
			'............'
		]
	},
	crate: {
		p: { a: '#241a12', b: '#8a5a3c', c: '#3a2a1e' },
		r: [
			'............',
			'.aaaaaaaaaa.',
			'.abbbbbbbba.',
			'.abcbbbbcba.',
			'.abbcbbcbba.',
			'.abbbccbbba.',
			'.abbbccbbba.',
			'.abbcbbcbba.',
			'.abcbbbbcba.',
			'.abbbbbbbba.',
			'.aaaaaaaaaa.',
			'............'
		]
	},
	coin: {
		p: { a: '#2a1c05', b: '#e6b23c', c: '#f5d67a' },
		r: [
			'............',
			'...aaaaaa...',
			'..abbbbbba..',
			'.abbbbbbbba.',
			'.abbcccbbba.',
			'.abbbccbbba.',
			'.abbbccbbba.',
			'.abbcccbbba.',
			'.abbbbbbbba.',
			'..abbbbbba..',
			'...aaaaaa...',
			'............'
		]
	},
	leaf: {
		p: { a: '#0d3b26', b: '#34d17f', c: '#6ee7a8' },
		r: [
			'..........aa',
			'........aabb',
			'......aabbbb',
			'.....abbbbbb',
			'....abbbcbb.',
			'...abbbcbb..',
			'..abbcbb....',
			'.abbcbb.....',
			'.abcbb......',
			'.acbb.......',
			'.aa.........',
			'............'
		]
	}
};

export function getSprite(name?: string): Sprite | undefined {
	if (!name) return undefined;
	return sprites[name];
}

export interface SpriteLayer {
	fill: string;
	d: string;
}

/**
 * squash a sprite into one path per color. 12x12 is up to 144 rects, as paths
 * its like 4. done once and put in one <symbol> sheet so a icon cost one <use>
 */
function toLayers(sprite: Sprite): SpriteLayer[] {
	const runs = new Map<string, string[]>();

	sprite.r.forEach((row, y) => {
		let x = 0;
		while (x < row.length) {
			const ch = row[x];
			if (ch === '.' || !sprite.p[ch]) {
				x += 1;
				continue;
			}
			// eat the whole run of same color so flat bits are one rect
			let end = x;
			while (end + 1 < row.length && row[end + 1] === ch) end += 1;
			const width = end - x + 1;
			const list = runs.get(ch) ?? [];
			list.push(`M${x} ${y}h${width}v1h-${width}z`);
			runs.set(ch, list);
			x = end + 1;
		}
	});

	return [...runs].map(([ch, parts]) => ({ fill: sprite.p[ch], d: parts.join('') }));
}

export const spriteLayers: Record<string, SpriteLayer[]> = Object.fromEntries(
	Object.entries(sprites).map(([name, sprite]) => [name, toLayers(sprite)])
);

export const spriteNames = Object.keys(sprites);

/** the symbol id in the sheet */
export function symbolId(name: string): string {
	return `af-sprite-${name}`;
}
