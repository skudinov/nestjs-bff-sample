import { ExceptionFilter, Catch } from '@nestjs/common';

@Catch()
export class AnyExceptionFilter implements ExceptionFilter {
  catch(e, res) {
    res.req.log.error(e);
    let status = 500;
    // here goes unified error response
    res.status(status).json({
      error: {
        code: status,
        guid: '37829058-5454-47fc-b267-340b6b34c172',
        message: {
          technical: 'Internal server error',
          friendly: 'We are sorry, something wrong happened on the server side, please try to refresh the page and repeat the last operation.',
        },
      }
    });
  }
}
