/*
 MIT License

 Copyright (c) 2017 Temainfo Sistemas

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:
 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
 */
import { AfterContentInit, Component, ElementRef, Input, ViewChild, OnChanges, SimpleChanges } from '@angular/core';

import { ModalService } from '../modal/modal.service';
import { ModalResult } from '../core/enums/modal-result';

@Component( {
    selector : 'tl-button',
    templateUrl : './button.html',
    styleUrls : [ './button.scss' ]
} )
export class TlButton implements AfterContentInit, OnChanges {

    @Input() type = 'button';

    @Input() text = '';

    @Input() iconAddonBefore = '';

    @Input() buttonAddonBeforeClass;

    @Input() iconAddonAfter = '';

    @Input() buttonAddonAfterClass;

    @Input() size;

    @Input() iconLeftTextButton = '';

    @Input() iconRightTextButton = '';

    @Input() disabled: boolean = null;

    @Input() toggle: boolean;

    @Input() toggleClass: string;

    @Input() toggleClassName: string;

    @Input() buttonClass = '';

    @Input() mdResult: ModalResult;

    @ViewChild('buttonBox') buttonBox: ElementRef;

    private _buttonSelected = false;

    @Input() set buttonSelected( value: boolean ) {
        this._buttonSelected = value;
        this.executeToggle();
    }

    constructor(public modalService: ModalService) {
        this.toggleClassName = '';
        this.toggle = false;
        this._buttonSelected = this.toggle;
    }

    ngAfterContentInit() {
        if (!ModalResult.propertyIsEnumerable(this.mdResult) && this.mdResult !== undefined) {
            throw new EvalError(this.mdResult + ' is not valid ModalResult value');
        }
    }

    ngOnChanges(changes: SimpleChanges) {

    }

    clickToggle() {
        this.executeToggle();
        this.isButtonOnModal();
    }

    executeToggle() {
        if (this.toggle) {
            if ( this._buttonSelected === false ) {
                this.toggleClassName = this.toggleClass ? this.toggleClass : '-toggle';
                this._buttonSelected = true;
            } else {
                this.toggleClassName = '';
                this._buttonSelected = false;
            }
        }
    }

    isButtonOnModal() {
        if (this.buttonBox.nativeElement.offsetParent.parentElement.localName === 'tl-modal') {
            this.modalService.execCallBack(ModalResult[ this.mdResult ]);
        }
    }

}
