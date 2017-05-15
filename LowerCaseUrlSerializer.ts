import { DefaultUrlSerializer, UrlTree } from '@angular/router';

//http://stackoverflow.com/questions/36154672/angular2-make-route-paths-case-insensitive
export class LowerCaseUrlSerializer extends DefaultUrlSerializer {
	parse(url: string): UrlTree {
		return super.parse(url.toLowerCase());
	}
}
