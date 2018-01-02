/**
 * Created by zhangxu on 16/11/16.
 */
export default class Log {

    info(className,methodName,message) {
        console.info('~~ClassName : ' + className + '\n' + '~~methodName : ' + methodName + '\n' + 'Message : '+ message);
    }

    warn(className,methodName,message) {
        console.warn('~~ClassName : ' + className + '\n' + '~~methodName : ' + methodName + '\n' + 'Message : '+ message);
    }

    error(className,methodName,message) {
        console.error('~~ClassName : ' + className + '\n' + '~~methodName : ' + methodName + '\n' + 'Message : '+ message);
    }

    log(className,methodName,message) {
        console.log('~~ClassName : ' + className + '\n' + '~~methodName : ' + methodName + '\n' + 'Message : '+ message);
    }

}