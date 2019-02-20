import { Directive, Inject, ElementRef, OnInit } from "@angular/core";
import { JQ_TOKEN } from "./jQuery.service";
import { $ } from "protractor";

@Directive({
    selector: '[trigger-modal]'
})
export class ModalTriggerDirective{
    private el : HTMLElement;
    constructor(@Inject(JQ_TOKEN) private $: any, ref: ElementRef ){
            this.el =  ref.nativeElement;
    }   
    
    ngOnInit(){
        this.el.addEventListener('click', (event)=>{
            this.$('#simple-modal').modal();
        })
    }
}