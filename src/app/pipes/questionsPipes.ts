import { Pipe, PipeTransform, Injectable } from '@angular/core';


@Pipe({
    name: 'secondQuestionFilter',
    pure: false
})

@Injectable()
export class SecondQuestionPipe implements PipeTransform {
    transform(ele: any[], firstQuestionValue: any = '1'): any {
        if (typeof ele === 'undefined') {
            console.log('ele: ' + ele);
            return ele;
        }
        switch (firstQuestionValue) {
            case '1': console.log('case 1');
                return ele.filter(item => {
                    return (item.value === 1 || item.value === 4 || item.value === 2);
                });
            case '2': console.log('case 2');
                return ele.filter(item => item.value === 3);
            default:
                console.log('default');
                return ele;

        }
    }
}

