import { OAuthStorage } from '../types';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { OAuthResourceServerErrorHandler } from "./resource-server-error-handler";
import { OAuthModuleConfig } from "../oauth-module.config";
import 'rxjs/add/operator/catch';
export declare class DefaultOAuthInterceptor implements HttpInterceptor {
    private authStorage;
    private errorHandler;
    private moduleConfig;
    constructor(authStorage: OAuthStorage, errorHandler: OAuthResourceServerErrorHandler, moduleConfig: OAuthModuleConfig);
    private checkUrl(url);
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
}
