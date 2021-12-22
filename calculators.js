import { LightningElement } from 'lwc';

export default class CalCulator extends LightningElement {
    data={
        number1 : 0,
        number2 : 0,
        sum : 0,
        sub : 0,
        mul : 0,
        div : 0,
        mod :0
    };

    sumevent() {
       // this.number1=parseInt(this.template.querySelector(".input1").value);
       // this.number2=parseInt(this.template.querySelector(".input2").value);
       // this.sum=this.number1 + this.number2;

       var number1=parseInt(this.template.querySelector(".input1").value);
       var number2=parseInt(this.template.querySelector(".input2").value);
       var sum=number1+number2;
       this.data={
           number1 : number1,
           number2 : number2,
           sum : sum
       };
    }

    subevent() {
        var number1=parseInt(this.template.querySelector(".input1").value);
        var number2=parseInt(this.template.querySelector(".input2").value);
        var sub=number1-number2;
        this.data={
            number1 : number1,
            number2 : number2,
            sub : sub
       };
    }

    mulevent() {
        var number1=parseInt(this.template.querySelector(".input1").value);
        var number2=parseInt(this.template.querySelector(".input2").value);
        var mul=number1*number2;
        this.data={
            number1 : number1,
            number2 : number2,
            mul : mul
       };
    }

    divevent() {
        var number1=parseInt(this.template.querySelector(".input1").value);
        var number2=parseInt(this.template.querySelector(".input2").value);
        var div=number1/number2;
        this.data={
            number1 : number1,
            number2 : number2,
            div : div
        };
    }

    modevent() {
        var number1=parseInt(this.template.querySelector(".input1").value);
        var number2=parseInt(this.template.querySelector(".input2").value);
        var mod=number1%number2;
        this.data={
            number1 : number1,
            number2 : number2,
            mod : mod
        };
    }
}