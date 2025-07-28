import { HttpInterceptorFn } from '@angular/common/http';

export const ApiInterceptor: HttpInterceptorFn = (req, next) => {
  const cloned = req.clone({
    setHeaders: {
      Authorization: `Bearer your-token`,
    },
  });
  return next(cloned);
};
