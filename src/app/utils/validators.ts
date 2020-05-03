import { AbstractControl } from '@angular/forms'

export class MyValidators {

  static isPriceValid(control: AbstractControl) {
    const value = control.value;
    if (value > 10000) {
      // solo se retorna si es invalida la respuesta
      return {price_invalid: true};
    }
    return null;
  }

}
