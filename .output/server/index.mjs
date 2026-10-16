globalThis.__nitro_main__ = import.meta.url;
import { i as HTTPError, n as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
import { r as FastResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/_redirects": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"18-+oL+Es1XZdIOibUzsrl9W9r73L0\"",
		"mtime": "2026-10-16T06:24:27.391Z",
		"size": 24,
		"path": "../public/_redirects"
	},
	"/assets/Box_Mockups_OK_3-removebg-preview-DWioCHjd.png": {
		"type": "image/png",
		"etag": "\"2fc16-0zw/uzmYlVaSq8B3FpNg39SXTMw\"",
		"mtime": "2026-10-16T06:31:04.141Z",
		"size": 195606,
		"path": "../public/assets/Box_Mockups_OK_3-removebg-preview-DWioCHjd.png"
	},
	"/favicon.svg": {
		"type": "image/svg+xml",
		"etag": "\"2a9-legISWJE+9U8d4h9F1R+rQXRhU8\"",
		"mtime": "2026-10-16T06:24:27.397Z",
		"size": 681,
		"path": "../public/favicon.svg"
	},
	"/assets/finish-gold-BDYeDQwr.jpg": {
		"type": "image/jpeg",
		"etag": "\"d2d3-sn7GozZo91+wkENA2m8R9YE+lRU\"",
		"mtime": "2026-10-16T06:31:04.146Z",
		"size": 53971,
		"path": "../public/assets/finish-gold-BDYeDQwr.jpg"
	},
	"/assets/FinishesShowcase-B-i_ipun.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1f543-lORTrGOUw1tM0nTWyYTuFZkB+hc\"",
		"mtime": "2026-10-16T06:31:04.138Z",
		"size": 128323,
		"path": "../public/assets/FinishesShowcase-B-i_ipun.js"
	},
	"/assets/finish-holo-CMwo9dg1.jpg": {
		"type": "image/jpeg",
		"etag": "\"17070-UR8NQmdMLeS8gHb3AGSd62RJfCg\"",
		"mtime": "2026-10-16T06:31:04.146Z",
		"size": 94320,
		"path": "../public/assets/finish-holo-CMwo9dg1.jpg"
	},
	"/assets/finish-kraft-Dye-_BY9.jpg": {
		"type": "image/jpeg",
		"etag": "\"7ea9-jBIpeqztZs+O8bJbRt2SbyDq+m0\"",
		"mtime": "2026-10-16T06:31:04.147Z",
		"size": 32425,
		"path": "../public/assets/finish-kraft-Dye-_BY9.jpg"
	},
	"/assets/index-emavNn4D.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"53dad-kFxdOUa1HRZRVH8KtbjORVAA0jE\"",
		"mtime": "2026-10-16T06:31:04.138Z",
		"size": 343469,
		"path": "../public/assets/index-emavNn4D.js"
	},
	"/assets/finish-spotuv-B5MViUjh.jpg": {
		"type": "image/jpeg",
		"etag": "\"e200-YP70xBWIvDOiLA+43r/Q/APAH3Q\"",
		"mtime": "2026-10-16T06:31:04.147Z",
		"size": 57856,
		"path": "../public/assets/finish-spotuv-B5MViUjh.jpg"
	},
	"/assets/logo-white-CzLtJ25F.png": {
		"type": "image/png",
		"etag": "\"5da9-mdoXJN0PxXN9F7W5727sO2Bb+tI\"",
		"mtime": "2026-10-16T06:31:04.148Z",
		"size": 23977,
		"path": "../public/assets/logo-white-CzLtJ25F.png"
	},
	"/assets/p-bags-CJfWYYuC.jpg": {
		"type": "image/jpeg",
		"etag": "\"76e5-OERqqi9hWmluVnX3r88WCAhTv58\"",
		"mtime": "2026-10-16T06:31:04.148Z",
		"size": 30437,
		"path": "../public/assets/p-bags-CJfWYYuC.jpg"
	},
	"/assets/p-brochure-5gp_6mKh.jpg": {
		"type": "image/jpeg",
		"etag": "\"ab9c-6NH2qRUdqwlMP389DlINNwdnvT0\"",
		"mtime": "2026-10-16T06:31:04.148Z",
		"size": 43932,
		"path": "../public/assets/p-brochure-5gp_6mKh.jpg"
	},
	"/assets/hero-press-ZEPjkrT8.jpg": {
		"type": "image/jpeg",
		"etag": "\"200a5-CjUUq5G9nMNn9tkyE7W85n2O9fA\"",
		"mtime": "2026-10-16T06:31:04.147Z",
		"size": 131237,
		"path": "../public/assets/hero-press-ZEPjkrT8.jpg"
	},
	"/assets/p-flyers-DnCDViDi.jpg": {
		"type": "image/jpeg",
		"etag": "\"14be7-EW4jLfoGOXxHMEai7ncdfEikSD4\"",
		"mtime": "2026-10-16T06:31:04.149Z",
		"size": 84967,
		"path": "../public/assets/p-flyers-DnCDViDi.jpg"
	},
	"/assets/p-magazines-DrJIeFCg.jpg": {
		"type": "image/jpeg",
		"etag": "\"16283-cdq3SE2lT/tupgeJwq3/wMEVO1I\"",
		"mtime": "2026-10-16T06:31:04.149Z",
		"size": 90755,
		"path": "../public/assets/p-magazines-DrJIeFCg.jpg"
	},
	"/assets/p-posters-C7E4PMvK.jpg": {
		"type": "image/jpeg",
		"etag": "\"11b2a-e2jofHPLk/mdfNAFbxcE1/571kY\"",
		"mtime": "2026-10-16T06:31:04.150Z",
		"size": 72490,
		"path": "../public/assets/p-posters-C7E4PMvK.jpg"
	},
	"/assets/p-files-Dam8a6Xa.jpeg": {
		"type": "image/jpeg",
		"etag": "\"33a6b-TdRRuRlcAEY2JA9PqfmxkXB3BRI\"",
		"mtime": "2026-10-16T06:31:04.149Z",
		"size": 211563,
		"path": "../public/assets/p-files-Dam8a6Xa.jpeg"
	},
	"/assets/p-stationery-B3S4kKLj.jpg": {
		"type": "image/jpeg",
		"etag": "\"b458-Cf6XYLIoElzMGz9/CQJw3P7o9kE\"",
		"mtime": "2026-10-16T06:31:04.150Z",
		"size": 46168,
		"path": "../public/assets/p-stationery-B3S4kKLj.jpg"
	},
	"/assets/pharma-box-side-CyfHx60a.png": {
		"type": "image/png",
		"etag": "\"5aa6-nbRzPuVswlCpQGyxJPmNRrwOQFA\"",
		"mtime": "2026-10-16T06:31:04.151Z",
		"size": 23206,
		"path": "../public/assets/pharma-box-side-CyfHx60a.png"
	},
	"/assets/p-standees-CaXZrsJD.jpg": {
		"type": "image/jpeg",
		"etag": "\"14824-rsCnPkYSeDbxoUmREqx01Q/c6Ps\"",
		"mtime": "2026-10-16T06:31:04.150Z",
		"size": 84004,
		"path": "../public/assets/p-standees-CaXZrsJD.jpg"
	},
	"/assets/pharma-sheet-print-Cd63nGim.png": {
		"type": "image/png",
		"etag": "\"c5f6-0p3VuQtF3IIXaWea/g+SJVc719E\"",
		"mtime": "2026-10-16T06:31:04.151Z",
		"size": 50678,
		"path": "../public/assets/pharma-sheet-print-Cd63nGim.png"
	},
	"/assets/pharma-box-front-Cpjh7SdK.png": {
		"type": "image/png",
		"etag": "\"4d1f-DmwxNWv7WPIZlsDossaSdYNEYu8\"",
		"mtime": "2026-10-16T06:31:04.151Z",
		"size": 19743,
		"path": "../public/assets/pharma-box-front-Cpjh7SdK.png"
	},
	"/assets/ChatGPT Image Jul 30_ 2026_ 11_14_52 AM-DpmGVnSN.png": {
		"type": "image/png",
		"etag": "\"1a880f-7XImx1ZshtsG8bfiNLJ6LN/hyBE\"",
		"mtime": "2026-10-16T06:31:04.144Z",
		"size": 1738767,
		"path": "../public/assets/ChatGPT Image Jul 30_ 2026_ 11_14_52 AM-DpmGVnSN.png"
	},
	"/assets/PharmaManufacturing3D-Dj41NS8O.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"380b-h2VgiguMRN2S+a109+GxaT/lXYY\"",
		"mtime": "2026-10-16T06:31:04.138Z",
		"size": 14347,
		"path": "../public/assets/PharmaManufacturing3D-Dj41NS8O.js"
	},
	"/assets/sparkles-BuGdIY_y.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8ca-jzoCy3c7RYiAQG/7N0814RE3fkE\"",
		"mtime": "2026-10-16T06:31:04.139Z",
		"size": 2250,
		"path": "../public/assets/sparkles-BuGdIY_y.js"
	},
	"/assets/routes-B0wneOPQ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d9f9-srCFMT4MvV8cXivyRdB76MnwBE0\"",
		"mtime": "2026-10-16T06:31:04.139Z",
		"size": 55801,
		"path": "../public/assets/routes-B0wneOPQ.js"
	},
	"/assets/print it brochure-DDZy2Xvp.jpg": {
		"type": "image/jpeg",
		"etag": "\"10bcf-LL1DWPI1KmRsmPDCaH6ggmN5Oxw\"",
		"mtime": "2026-10-16T06:31:04.151Z",
		"size": 68559,
		"path": "../public/assets/print it brochure-DDZy2Xvp.jpg"
	},
	"/assets/PORTFOLIO FINAL-tAoXrowR.jpg": {
		"type": "image/jpeg",
		"etag": "\"34d88-i/Vxetv82e37wLEanAkBpeLPlCI\"",
		"mtime": "2026-10-16T06:31:04.145Z",
		"size": 216456,
		"path": "../public/assets/PORTFOLIO FINAL-tAoXrowR.jpg"
	},
	"/assets/styles-rYWApvUN.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"1e04c-4jJQjgTUF6/PUV+y0V6fGVc6SvA\"",
		"mtime": "2026-10-16T06:31:04.153Z",
		"size": 122956,
		"path": "../public/assets/styles-rYWApvUN.css"
	},
	"/assets/Box_Mockups_OK_3-7rlFofMP.png": {
		"type": "image/png",
		"etag": "\"212542-1Gnj+hpZl61op47at43a82K9/rE\"",
		"mtime": "2026-10-16T06:31:04.141Z",
		"size": 2172226,
		"path": "../public/assets/Box_Mockups_OK_3-7rlFofMP.png"
	},
	"/assets/Sparkles-BYnzGfXe.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e5780-qlM1LLDwmjA/xZ1yyizNQ39e9uQ\"",
		"mtime": "2026-10-16T06:31:04.139Z",
		"size": 939904,
		"path": "../public/assets/Sparkles-BYnzGfXe.js"
	},
	"/assets/sticker-D5-cyE9V.png": {
		"type": "image/png",
		"etag": "\"1e4acb-q8hZkOu1wMT1i8uiYCeCt7OISkM\"",
		"mtime": "2026-10-16T06:31:04.153Z",
		"size": 1985227,
		"path": "../public/assets/sticker-D5-cyE9V.png"
	},
	"/assets/tw-YI1ZL7Zs.png": {
		"type": "image/png",
		"etag": "\"27e64a-Qr6Pn2bacp8vNSDZJpRvhODRm3o\"",
		"mtime": "2026-10-16T06:31:04.155Z",
		"size": 2614858,
		"path": "../public/assets/tw-YI1ZL7Zs.png"
	},
	"/assets/Brochure_Mockup_2-DUuQFZ5X.png": {
		"type": "image/png",
		"etag": "\"6c4f98-3PPuqHcgU1gXG2DvNAQXGOP/U6g\"",
		"mtime": "2026-10-16T06:31:04.143Z",
		"size": 7098264,
		"path": "../public/assets/Brochure_Mockup_2-DUuQFZ5X.png"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_8n155V = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_8n155V
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
