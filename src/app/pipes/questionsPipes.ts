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
        switch (firstQuestionValue.selectedOptions[0].value) {
            case '1':
                console.log('SecondQuestionPipe case 1');
                return ele.filter(item => {
                    return (item.value === 0 || item.value === 1 || item.value === 2 || item.value === 4 || item.value === 5 || item.value === 6 || item.value === 7 || item.value === 8);
                });
            case '2':
                console.log('SecondQuestionPipe case 2');
                return ele.filter(item => item.value === 3 || item.value === 0);
            default:
                console.log('SecondQuestionPipe default');
                return ele.filter(item => item.value === 0);

        }
    }
}

@Pipe({
    name: 'thirdQuestionFilter',
    pure: false
})

@Injectable()
export class ThirdQuestionPipe implements PipeTransform {
    transform(ele: any[], secondQuestionValue: any, firstQuestionValue: any): any {
        // console.log('third q pipe');
        if (typeof ele === 'undefined') {
            console.log('ele: ' + ele);
            return ele;
        }
        if (firstQuestionValue.selectedOptions[0].value === '1') {
            console.log('if tqf');
            switch (secondQuestionValue.selectedOptions[0].value) {
                case '1':
                    console.log('ThirdQuestionPipe case 1');
                    return ele.filter(item => {
                        return (item.value === 1 || item.value === 2 || item.value === 0);
                    });
                case '2':
                    console.log('ThirdQuestionPipe case 2');
                    return ele.filter(item => item.value === 2 || item.value === 0);
                case '3':
                    console.log('ThirdQuestionPipe case 3');
                    return ele.filter(item => item.value === 3 || item.value === 0);
                case '4': case '5': case '6': case '7': case '8':
                    return ele.filter(item => item.value === 1 || item.value === 0);
                default:
                    console.log('ThirdQuestionPipe default');
                    return ele.filter(item => item.value === 0);
            }
        } else {
            console.log('else tqf');
            return ele.filter(item => item.value === 3 || item.value === 0);
        }
    }
}