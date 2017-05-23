import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[caretUpsideDown]'
})
export class CaretUpsideDown {
    @HostBinding('class.caret-up') isCaretDown = false;

    @HostListener('click') isCaretUp() {
        this.isCaretDown = !this.isCaretDown;
    }
}