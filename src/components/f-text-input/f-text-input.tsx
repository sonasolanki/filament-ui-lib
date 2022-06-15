import { Component, h, Prop, State } from '@stencil/core';
import { getUUId } from '../../utils/utils';
import { IIconConfig } from '../../models/awlds.interfaces';
import classNames from 'classnames';

@Component({
  tag: 'f-text-input',
  styleUrl: 'f-text-input.scss',
  shadow: false
})
  export class FTextInput {
  /**
   * is text input disabled (optional)
   *
   * @type {boolean}
   * @memberof FTextInput
   */
  @Prop() disabled? = false;

  /**
   * error message for text input (optional)
   *
   * @type {string}
   * @memberof FTextInput
   */
  @Prop() errorMessage?: string;

  /**
   * helper text for text input (optional)
   *
   * @type {string}
   * @memberof FTextInput
   */
  @Prop() helperText?: string;

  /**
   * label/placeholder text for text input
   *
   * @type {string}
   * @memberof FTextInput
   */
  @Prop() labelText: string;

  /**
   * required state of text input
   *
   * @type {boolean}
   * @memberof FTextInput
   */
  @Prop() required? = false;

  /**
   * type of text input
   *
   * @type {('text' | 'password' | 'number' | 'search' | 'tel' | 'email' | 'date' | 'month' | 'week' | 'datetime' | 'time' | 'datetime-local' | 'url')}
   * @memberof FTextInput
   */
  @Prop() type: 'text' | 'password' | 'number' | 'search' | 'tel' | 'email' | 'date' | 'month' | 'week' | 'datetime' | 'time' | 'datetime-local' | 'url' = 'text';

  /**
   * uuid for text input
   *
   * @type {string}
   * @memberof FTextInput
   */
  @Prop({mutable: true}) uuid: string;

  /**
   * initial value of text input (optional)
   *
   * @type {string}
   * @memberof FTextInput
   */
  @Prop() initialValue?: string;

  @State() hasError? = false;

  @State() errorIcon: IIconConfig = {iconName: 'times-circle', iconType: 'fas'};

  componentWillLoad() {
    if (this.uuid === undefined) {
      this.uuid = getUUId();
    }

    this.applyError();
  }

  componentWillUpdate() {
    this.applyError();
  }
  
  applyError() {
    if (this.errorMessage !== undefined) {
      this.hasError = this.errorMessage.length > 0 ? true : false;
    }
  }

  render() {
    return (
      <div class="f-text-input">
        <input 
          type={this.type} 
          class={classNames({'has-error' : this.hasError})} 
          id={this.uuid} 
          disabled={this.disabled} 
          required={this.required}
          placeholder={this.labelText} 
          value={this.initialValue} 
          aria-required={this.required}
          aria-disabled={this.disabled}
          aria-labeledby={this.uuid}
          aria-label={this.labelText}
          title={this.helperText}
        />
        <label htmlFor={this.uuid}>{this.labelText}</label> 
        {!this.hasError ? 
          <div class="helper-text">{this.helperText}</div> 
          : <div class="error-container"><f-icon iconConfig={this.errorIcon}></f-icon><span>{this.errorMessage}</span></div>}
      </div>
    );
  }
}
