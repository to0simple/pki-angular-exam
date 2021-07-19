import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponseBase } from "@angular/common/http";
import { Observable, of, throwError } from 'rxjs';
import { catchError, mergeMap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

export class DefaultInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let url = req.url;
        if (!url.startsWith('http://') && !url.startsWith('https://')) {
            url = environment.SERVERURL + url;
        }
        const newReq = req.clone({
            url
        });
        return next.handle(newReq).pipe(
            mergeMap((v: any) => {
                if (v instanceof HttpResponseBase) {
                    return this.handleData(v);
                }
                return of(v);
            }),
            catchError((error: any) => {
                return this.handleData(error);
            })
        );
    }

    handleData(ev: HttpResponseBase): Observable<any> {
        switch (ev.status) {
            case 200:
                return of(ev);
            case 401:
                // 401 error handle
                break;
            case 404:
                // 404 error handle
                break;
            case 500:
                // 500 error handle
                break;
            default:
                if (ev instanceof HttpErrorResponse) {
                    console.warn('位置错误请检查配置！！！！');
                }
                break;
        }
        if (ev instanceof HttpErrorResponse) {
            return throwError(ev);
        }else {
            return of(ev);
        }
    }
}
