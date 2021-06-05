import {
    AbstractControl,
    ValidationErrors,
    ValidatorFn,
} from '@angular/forms';

export class CustomValidators {
    public static equalTo(comparedField: string): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            const comparedControl = control.root.get(comparedField);
            const comparedValue = comparedControl ? comparedControl.value : null;

            if (control.value === comparedValue) {
                return null;
            }

            return { equalTo: true };
        };
    }
}
