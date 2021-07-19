import { Equipment } from '../equipment/model/equipment';
import { format } from 'date-fns'
export function handleFormValue(data: Equipment): Equipment {
    const value = {} as Equipment;
    // tslint:disable-next-line: forin
    for (const key in data) {
        const item  = data[key];
        if (item) {
            value[key] = item;
        }
        if ((item as any) instanceof Date) {
            value[key] = format((item as any), 'yyyy-MM-dd');
        }
    }
    return value;
}
