import { Pipe, PipeTransform, Injectable } from '@angular/core';


@Pipe({
    name: 'secondQuestionFilter',
    pure: false
})

@Injectable()
export class SecondQuestionPipe implements PipeTransform {
    transform(ele: any[], firstQuestionValue: any = '1'): any {
        if (typeof ele === 'undefined') {
            // console.log('ele: ' + ele);
            return ele;
        }
        switch (firstQuestionValue) {
            case '1': 
            // console.log('SecondQuestionPipe case 1');
                return ele.filter(item => {
                    return (item.value === 1 || item.value === 4 || item.value === 2 || item.value === 0);
                });
            case '2': 
            // console.log('SecondQuestionPipe case 2');
                return ele.filter(item => item.value === 3 || item.value === 0);
            default:
                // console.log('default');
                return ele;

        }
    }
}

@Pipe({
    name: 'thirdQuestionFilter',
    pure: false
})

@Injectable()
export class ThirdQuestionPipe implements PipeTransform {
    transform(ele: any[], secondQuestionValue: any = '1'): any {
        if (typeof ele === 'undefined') {
            console.log('ele: ' + ele);
            return ele;
        }
        switch (secondQuestionValue) {
            case '1': case '4': 
            // console.log('ThirdQuestionPipe case 1 OR 4');
                return ele.filter(item => {
                    return (item.value === 1 || item.value === 2 || item.value === 0);
                }); 
            case '2': 
            // console.log('ThirdQuestionPipe case 2');
                return ele.filter(item => item.value === 2 || item.value === 0);
            case '3': 
            // console.log('ThirdQuestionPipe case 3');
                return ele.filter(item => item.value === 3 || item.value === 0);
            default:
                // console.log('default');
                return ele;
        }
    }
}