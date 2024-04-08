"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/auth/[...nextauth]/route";
exports.ids = ["app/api/auth/[...nextauth]/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=C%3A%5CUsers%5Cbombo%5CDesktop%5ChealthSync%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cbombo%5CDesktop%5ChealthSync&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=C%3A%5CUsers%5Cbombo%5CDesktop%5ChealthSync%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cbombo%5CDesktop%5ChealthSync&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_bombo_Desktop_healthSync_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/auth/[...nextauth]/route.ts */ \"(rsc)/./app/api/auth/[...nextauth]/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/[...nextauth]/route\",\n        pathname: \"/api/auth/[...nextauth]\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/[...nextauth]/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\bombo\\\\Desktop\\\\healthSync\\\\app\\\\api\\\\auth\\\\[...nextauth]\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_bombo_Desktop_healthSync_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/auth/[...nextauth]/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNib21ibyU1Q0Rlc2t0b3AlNUNoZWFsdGhTeW5jJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDVXNlcnMlNUNib21ibyU1Q0Rlc2t0b3AlNUNoZWFsdGhTeW5jJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQzhCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdUdBQXVHO0FBQy9HO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDNko7O0FBRTdKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGVhbHRoc3luYy8/MThlYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxib21ib1xcXFxEZXNrdG9wXFxcXGhlYWx0aFN5bmNcXFxcYXBwXFxcXGFwaVxcXFxhdXRoXFxcXFsuLi5uZXh0YXV0aF1cXFxccm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXVwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxcYm9tYm9cXFxcRGVza3RvcFxcXFxoZWFsdGhTeW5jXFxcXGFwcFxcXFxhcGlcXFxcYXV0aFxcXFxbLi4ubmV4dGF1dGhdXFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=C%3A%5CUsers%5Cbombo%5CDesktop%5ChealthSync%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cbombo%5CDesktop%5ChealthSync&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/auth/[...nextauth]/route.ts":
/*!*********************************************!*\
  !*** ./app/api/auth/[...nextauth]/route.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"(rsc)/./node_modules/next-auth/providers/google.js\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var _libs_mongodb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/libs/mongodb */ \"(rsc)/./libs/mongodb.js\");\n/* harmony import */ var _models_usuarios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/models/usuarios */ \"(rsc)/./models/usuarios.js\");\n\n\n\n\n\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    providers: [\n        (0,next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            /*profile(profile: GoogleProfile){\r\n            //console.log(profile) -> Ver perfil en consola \r\n            return{\r\n                ...profile,\r\n                rol: \"usuario\", //profile.rol ??\r\n                id: profile.sub,\r\n            }\r\n        },*/ clientId: process.env.GOOGLE_CLIENT_ID,\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET\n        }),\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n            id: \"credentials\",\n            name: \"Credentials\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"text\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"text\"\n                }\n            },\n            async authorize (credentials) {\n                //Ejemplo para conocer si funciona \n                //NO BORRAR POR FAVOR\n                /*const user = {id: \"1\", name: \"isabel\", email: \"isa@mail.com\", password: \"12345\", rol: \"terapeuta\"}\r\n                if(credentials?.email === user.email && credentials?.password === user.password){\r\n                    return user;\r\n              }else{\r\n                return null;\r\n              }*/ {\n                    await (0,_libs_mongodb__WEBPACK_IMPORTED_MODULE_3__.connectDB)();\n                    try {\n                        const user = await _models_usuarios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].findOne({\n                            correo: credentials.email\n                        });\n                        if (user && user.contrasena === credentials.password) {\n                            // La contraseña coincide, puedes devolver el usuario\n                            return user;\n                        } else {\n                            // La contraseña no coincide\n                            return null;\n                        }\n                    } catch (err) {\n                        throw new Error(err);\n                    }\n                }\n            }\n        })\n    ],\n    callbacks: {\n        //NO BORRAR ESTA EN PRUEBA\n        /* async jwt({ token, user }){\r\n            if(user) token.rol = user.rol\r\n            return token\r\n        },\r\n        //usar el rol en componentes de cliente\r\n        async session({ session, token}){\r\n            if(session?.user) session.user.rol = token.rol\r\n            return session\r\n        }*/ async signIn ({ user, account }) {\n            if (account?.provider === \"credentials\") {\n                return true;\n            }\n            if (account && account.provider === \"google\") {\n                const { name, email } = user;\n                try {\n                    const res = await fetch(\"http://localhost:3000/api/usuarios\", {\n                        method: \"POST\",\n                        headers: {\n                            \"Content-Type\": \"application/json\"\n                        },\n                        body: JSON.stringify({\n                            nombre: name,\n                            correo: email\n                        })\n                    });\n                    if (res.ok) {\n                        return true;\n                    }\n                } catch (error) {\n                    console.error(error);\n                    return false;\n                }\n            }\n            return true;\n        }\n    }\n});\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFnQztBQUN1QjtBQUNXO0FBQ3ZCO0FBQ047QUFHckMsTUFBTUssVUFBVUwsZ0RBQVFBLENBQUM7SUFDckJNLFdBQVc7UUFBRUwsc0VBQWNBLENBQUU7WUFDekI7Ozs7Ozs7VUFPRSxHQUNGTSxVQUFVQyxRQUFRQyxHQUFHLENBQUNDLGdCQUFnQjtZQUN0Q0MsY0FBY0gsUUFBUUMsR0FBRyxDQUFDRyxvQkFBb0I7UUFFOUM7UUFDQVYsMkVBQW1CQSxDQUFDO1lBQ2hCVyxJQUFJO1lBQ0pDLE1BQU07WUFDTkMsYUFBYTtnQkFDWEMsT0FBTztvQkFBRUMsT0FBTztvQkFBU0MsTUFBTTtnQkFBTztnQkFDdENDLFVBQVU7b0JBQUVGLE9BQU87b0JBQVlDLE1BQU07Z0JBQU87WUFDOUM7WUFDQSxNQUFNRSxXQUFVTCxXQUFnQjtnQkFDNUIsbUNBQW1DO2dCQUNuQyxxQkFBcUI7Z0JBQ3ZCOzs7OztlQUtDLEdBRUQ7b0JBQUMsTUFBTVosd0RBQVNBO29CQUNoQixJQUFJO3dCQUNGLE1BQU1rQixPQUFPLE1BQU1qQix3REFBSUEsQ0FBQ2tCLE9BQU8sQ0FBQzs0QkFBRUMsUUFBUVIsWUFBWUMsS0FBSzt3QkFBQzt3QkFDNUQsSUFBSUssUUFBUUEsS0FBS0csVUFBVSxLQUFLVCxZQUFZSSxRQUFRLEVBQUU7NEJBQ2xELHFEQUFxRDs0QkFDckQsT0FBT0U7d0JBQ1gsT0FBTzs0QkFDSCw0QkFBNEI7NEJBQzVCLE9BQU87d0JBQ1g7b0JBQ0YsRUFBRSxPQUFPSSxLQUFVO3dCQUNqQixNQUFNLElBQUlDLE1BQU1EO29CQUNsQjtnQkFBQztZQUNIO1FBQ0Y7S0FDTDtJQUNERSxXQUFXO1FBQ1AsMEJBQTBCO1FBQzNCOzs7Ozs7OztTQVFFLEdBQ0QsTUFBTUMsUUFBTyxFQUFDUCxJQUFJLEVBQUVRLE9BQU8sRUFBQztZQUN4QixJQUFJQSxTQUFTQyxhQUFhLGVBQWU7Z0JBQ3JDLE9BQU87WUFDWDtZQUNBLElBQUlELFdBQVdBLFFBQVFDLFFBQVEsS0FBSyxVQUFVO2dCQUMxQyxNQUFNLEVBQUNoQixJQUFJLEVBQUVFLEtBQUssRUFBQyxHQUFHSztnQkFDdEIsSUFBSTtvQkFDQSxNQUFNVSxNQUFNLE1BQU1DLE1BQU0sc0NBQXNDO3dCQUMxREMsUUFBUTt3QkFDUkMsU0FBUzs0QkFDTCxnQkFBZ0I7d0JBQ3BCO3dCQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7NEJBQ2pCQyxRQUFReEI7NEJBQ1JTLFFBQVFQO3dCQUNaO29CQUNKO29CQUNBLElBQUllLElBQUlRLEVBQUUsRUFBRTt3QkFDUixPQUFPO29CQUNYO2dCQUNKLEVBQUUsT0FBT0MsT0FBTztvQkFDWkMsUUFBUUQsS0FBSyxDQUFDQTtvQkFDZCxPQUFPO2dCQUNYO1lBQ0o7WUFDQSxPQUFPO1FBQ1g7SUFDSjtBQUNKO0FBQ3lDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGVhbHRoc3luYy8uL2FwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlLnRzP2M4YTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoIGZyb20gJ25leHQtYXV0aCdcclxuaW1wb3J0IEdvb2dsZVByb3ZpZGVyIGZyb20gJ25leHQtYXV0aC9wcm92aWRlcnMvZ29vZ2xlJ1xyXG5pbXBvcnQgQ3JlZGVudGlhbHNQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFsc1wiO1xyXG5pbXBvcnQgeyBjb25uZWN0REIgfSBmcm9tIFwiQC9saWJzL21vbmdvZGJcIjtcclxuaW1wb3J0IFVzZXIgZnJvbSBcIkAvbW9kZWxzL3VzdWFyaW9zXCI7XHJcbmltcG9ydCB7IEdvb2dsZVByb2ZpbGUgfSBmcm9tICduZXh0LWF1dGgvcHJvdmlkZXJzL2dvb2dsZSc7XHJcblxyXG5jb25zdCBoYW5kbGVyID0gTmV4dEF1dGgoe1xyXG4gICAgcHJvdmlkZXJzOiBbIEdvb2dsZVByb3ZpZGVyICh7XHJcbiAgICAgICAgLypwcm9maWxlKHByb2ZpbGU6IEdvb2dsZVByb2ZpbGUpe1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHByb2ZpbGUpIC0+IFZlciBwZXJmaWwgZW4gY29uc29sYSBcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4ucHJvZmlsZSxcclxuICAgICAgICAgICAgICAgIHJvbDogXCJ1c3VhcmlvXCIsIC8vcHJvZmlsZS5yb2wgPz9cclxuICAgICAgICAgICAgICAgIGlkOiBwcm9maWxlLnN1YixcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sKi9cclxuICAgICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9JRCBhcyBzdHJpbmcsXHJcbiAgICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX1NFQ1JFVCBhcyBzdHJpbmcsXHJcblxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIENyZWRlbnRpYWxzUHJvdmlkZXIoe1xyXG4gICAgICAgICAgICBpZDogJ2NyZWRlbnRpYWxzJyxcclxuICAgICAgICAgICAgbmFtZTogXCJDcmVkZW50aWFsc1wiLFxyXG4gICAgICAgICAgICBjcmVkZW50aWFsczoge1xyXG4gICAgICAgICAgICAgIGVtYWlsOiB7IGxhYmVsOiBcIkVtYWlsXCIsIHR5cGU6IFwidGV4dFwiIH0sXHJcbiAgICAgICAgICAgICAgcGFzc3dvcmQ6IHsgbGFiZWw6IFwiUGFzc3dvcmRcIiwgdHlwZTogXCJ0ZXh0XCIgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzOiBhbnkpIHsgLy9jcmVkZW50aWFsczogYW55XHJcbiAgICAgICAgICAgICAgICAvL0VqZW1wbG8gcGFyYSBjb25vY2VyIHNpIGZ1bmNpb25hIFxyXG4gICAgICAgICAgICAgICAgLy9OTyBCT1JSQVIgUE9SIEZBVk9SXHJcbiAgICAgICAgICAgICAgLypjb25zdCB1c2VyID0ge2lkOiBcIjFcIiwgbmFtZTogXCJpc2FiZWxcIiwgZW1haWw6IFwiaXNhQG1haWwuY29tXCIsIHBhc3N3b3JkOiBcIjEyMzQ1XCIsIHJvbDogXCJ0ZXJhcGV1dGFcIn1cclxuICAgICAgICAgICAgICAgIGlmKGNyZWRlbnRpYWxzPy5lbWFpbCA9PT0gdXNlci5lbWFpbCAmJiBjcmVkZW50aWFscz8ucGFzc3dvcmQgPT09IHVzZXIucGFzc3dvcmQpe1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB1c2VyO1xyXG4gICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgfSovXHJcblxyXG4gICAgICAgICAgICAgIHthd2FpdCBjb25uZWN0REIoKTtcclxuICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7IGNvcnJlbzogY3JlZGVudGlhbHMuZW1haWwgfSk7XHJcbiAgICAgICAgICAgICAgICBpZiAodXNlciAmJiB1c2VyLmNvbnRyYXNlbmEgPT09IGNyZWRlbnRpYWxzLnBhc3N3b3JkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gTGEgY29udHJhc2XDsWEgY29pbmNpZGUsIHB1ZWRlcyBkZXZvbHZlciBlbCB1c3VhcmlvXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVzZXI7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIExhIGNvbnRyYXNlw7FhIG5vIGNvaW5jaWRlXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyOiBhbnkpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnIpO1xyXG4gICAgICAgICAgICAgIH19ICBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0pXHJcbiAgICBdLFxyXG4gICAgY2FsbGJhY2tzOiB7XHJcbiAgICAgICAgLy9OTyBCT1JSQVIgRVNUQSBFTiBQUlVFQkFcclxuICAgICAgIC8qIGFzeW5jIGp3dCh7IHRva2VuLCB1c2VyIH0pe1xyXG4gICAgICAgICAgICBpZih1c2VyKSB0b2tlbi5yb2wgPSB1c2VyLnJvbFxyXG4gICAgICAgICAgICByZXR1cm4gdG9rZW5cclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vdXNhciBlbCByb2wgZW4gY29tcG9uZW50ZXMgZGUgY2xpZW50ZVxyXG4gICAgICAgIGFzeW5jIHNlc3Npb24oeyBzZXNzaW9uLCB0b2tlbn0pe1xyXG4gICAgICAgICAgICBpZihzZXNzaW9uPy51c2VyKSBzZXNzaW9uLnVzZXIucm9sID0gdG9rZW4ucm9sXHJcbiAgICAgICAgICAgIHJldHVybiBzZXNzaW9uXHJcbiAgICAgICAgfSovXHJcbiAgICAgICAgYXN5bmMgc2lnbkluKHt1c2VyLCBhY2NvdW50fSkge1xyXG4gICAgICAgICAgICBpZiAoYWNjb3VudD8ucHJvdmlkZXIgPT09ICdjcmVkZW50aWFscycpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChhY2NvdW50ICYmIGFjY291bnQucHJvdmlkZXIgPT09ICdnb29nbGUnKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7bmFtZSwgZW1haWx9ID0gdXNlcjtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdXN1YXJpb3MnLCB7IC8vaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS91c3Vhcmlvc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9tYnJlOiBuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29ycmVvOiBlbWFpbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5vaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG5leHBvcnQge2hhbmRsZXIgYXMgR0VULCBoYW5kbGVyIGFzIFBPU1R9OyJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsIkdvb2dsZVByb3ZpZGVyIiwiQ3JlZGVudGlhbHNQcm92aWRlciIsImNvbm5lY3REQiIsIlVzZXIiLCJoYW5kbGVyIiwicHJvdmlkZXJzIiwiY2xpZW50SWQiLCJwcm9jZXNzIiwiZW52IiwiR09PR0xFX0NMSUVOVF9JRCIsImNsaWVudFNlY3JldCIsIkdPT0dMRV9DTElFTlRfU0VDUkVUIiwiaWQiLCJuYW1lIiwiY3JlZGVudGlhbHMiLCJlbWFpbCIsImxhYmVsIiwidHlwZSIsInBhc3N3b3JkIiwiYXV0aG9yaXplIiwidXNlciIsImZpbmRPbmUiLCJjb3JyZW8iLCJjb250cmFzZW5hIiwiZXJyIiwiRXJyb3IiLCJjYWxsYmFja3MiLCJzaWduSW4iLCJhY2NvdW50IiwicHJvdmlkZXIiLCJyZXMiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm5vbWJyZSIsIm9rIiwiZXJyb3IiLCJjb25zb2xlIiwiR0VUIiwiUE9TVCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/[...nextauth]/route.ts\n");

/***/ }),

/***/ "(rsc)/./libs/mongodb.js":
/*!*************************!*\
  !*** ./libs/mongodb.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connectDB: () => (/* binding */ connectDB)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function connectDB() {\n    await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URL);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWJzL21vbmdvZGIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRXpCLGVBQWVDO0lBQ2xCLE1BQU1ELHVEQUFnQixDQUFDRyxRQUFRQyxHQUFHLENBQUNDLFdBQVc7QUFDbEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWFsdGhzeW5jLy4vbGlicy9tb25nb2RiLmpzPzU5MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNvbm5lY3REQigpICAgIHtcclxuICAgIGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuTU9OR09EQl9VUkwpO1xyXG59Il0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiY29ubmVjdERCIiwiY29ubmVjdCIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCX1VSTCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./libs/mongodb.js\n");

/***/ }),

/***/ "(rsc)/./models/usuarios.js":
/*!****************************!*\
  !*** ./models/usuarios.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst usuarioSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    nombre: {\n        type: String,\n        required: true\n    },\n    apellido: {\n        type: String,\n        required: false\n    },\n    correo: {\n        type: String,\n        required: true,\n        unique: true\n    },\n    contrasena: {\n        type: String,\n        required: false\n    },\n    rol: {\n        type: String,\n        required: true\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Usuarios || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Usuarios\", usuarioSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9tb2RlbHMvdXN1YXJpb3MuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBR2hDLE1BQU1DLGdCQUFlLElBQUlELHdEQUFlLENBQ3BDO0lBQ0lHLFFBQVE7UUFDSkMsTUFBTUM7UUFDTkMsVUFBVTtJQUNkO0lBQ0FDLFVBQVU7UUFDTkgsTUFBTUM7UUFDTkMsVUFBVTtJQUNkO0lBQ0FFLFFBQVE7UUFDSkosTUFBTUM7UUFDTkMsVUFBVTtRQUNWRyxRQUFRO0lBQ1o7SUFDQUMsWUFBWTtRQUNSTixNQUFNQztRQUNOQyxVQUFVO0lBQ2Q7SUFDQUssS0FBSztRQUNEUCxNQUFNQztRQUNOQyxVQUFVO0lBQ2Q7QUFDSjtBQUdKLGlFQUFlTix3REFBZSxDQUFDYSxRQUFRLElBQUliLHFEQUFjLENBQUMsWUFBWUMsY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2hlYWx0aHN5bmMvLi9tb2RlbHMvdXN1YXJpb3MuanM/M2IxMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xyXG5cclxuXHJcbmNvbnN0IHVzdWFyaW9TY2hlbWEgPW5ldyBtb25nb29zZS5TY2hlbWEoXHJcbiAgICB7XHJcbiAgICAgICAgbm9tYnJlOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZywgXHJcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhcGVsbGlkbzoge1xyXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsIFxyXG4gICAgICAgICAgICByZXF1aXJlZDogZmFsc2VcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvcnJlbzoge1xyXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsIFxyXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgdW5pcXVlOiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb250cmFzZW5hOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZywgXHJcbiAgICAgICAgICAgIHJlcXVpcmVkOiBmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcm9sOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWVcclxuICAgICAgICB9XHJcbiAgICB9XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1vbmdvb3NlLm1vZGVscy5Vc3VhcmlvcyB8fCBtb25nb29zZS5tb2RlbCgnVXN1YXJpb3MnLCB1c3VhcmlvU2NoZW1hKTtcclxuXHJcblxyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsInVzdWFyaW9TY2hlbWEiLCJTY2hlbWEiLCJub21icmUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJhcGVsbGlkbyIsImNvcnJlbyIsInVuaXF1ZSIsImNvbnRyYXNlbmEiLCJyb2wiLCJtb2RlbHMiLCJVc3VhcmlvcyIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./models/usuarios.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/uuid","vendor-chunks/oauth","vendor-chunks/@panva","vendor-chunks/preact-render-to-string","vendor-chunks/oidc-token-hash","vendor-chunks/preact","vendor-chunks/object-hash","vendor-chunks/cookie"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=C%3A%5CUsers%5Cbombo%5CDesktop%5ChealthSync%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cbombo%5CDesktop%5ChealthSync&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();