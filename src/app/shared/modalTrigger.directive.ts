import { Directive, Inject, ElementRef, OnInit, Input } from "@angular/core";
import { JQ_TOKEN } from "./jQuery.service";
import { $ } from "protractor";

@Directive({
    selector: '[trigger-modal]'
})
export class ModalTriggerDirective{
    private el : HTMLElement;
    @Input('trigger-modal') modalRef : string;
    constructor(@Inject(JQ_TOKEN) private $: any, ref: ElementRef ){
            this.el =  ref.nativeElement;
    }   
    
    ngOnInit(){
        this.el.addEventListener('click', (event)=>{
            this.$(`#${this.modalRef}`).modal();
        })
    }
}