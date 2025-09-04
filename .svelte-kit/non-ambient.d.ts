
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/semana-1";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/semana-1": Record<string, never>
		};
		Pathname(): "/" | "/semana-1" | "/semana-1/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/images/HTTP.gif" | "/images/eia.webp" | "/images/internet.webp" | "/images/mono.jpg" | "/images/no-es-que-no-te-quiera-pero.webp" | "/images/rogelio.jpg" | "/robots.txt" | string & {};
	}
}