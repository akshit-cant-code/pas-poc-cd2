import {
  requestErrorHandler,
  requestInterceptor
} from './requestInterceptor/requestInterceptor';
import {
  responseErrorHandler,
  responseInterceptor
} from './responseInterceptor/responseInterceptor';

const registerInterceptors = (interceptors) => {
  const { request, response } = interceptors;

  request.use(requestInterceptor, requestErrorHandler);
  response.use(responseInterceptor, responseErrorHandler);
};

export default registerInterceptors;
