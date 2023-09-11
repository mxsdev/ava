import {Chalk} from 'chalk'; // eslint-disable-line unicorn/import-style

let chalk = new Chalk(); // eslint-disable-line import/no-mutable-exports

export {chalk};

let configured = false;
export function set(options) {
	if (configured) {
		console.warn('Chalk has already been configured');
		return
	}
	configured = true;
	chalk = new Chalk(options);
}
