import { Component, h, Prop, State } from '@stencil/core';
import { IIconConfig } from '../../models/awlds.interfaces';
import classNames from 'classnames';

/**
 * @author Sona Solanki
 * @description
 * @see
 *
 * @export
 * @class FLozenge
 */
@Component({
  tag: 'f-lozenge',
  styleUrl: 'f-lozenge.scss',
  shadow: false
})

export class FLozenge {
/**
   * the content for the lozenge
   * 
   * @type {string}
   * @memberof FLozenge
   */
 @Prop() content: string;

 /**
  * config for icon
  *
  * @type {IIconConfig}
  * @memberof FLozenge
  */
 @Prop() iconConfig: IIconConfig;

 @State() hasIcon = false;

 componentWillLoad() {
    this.applyIconAttributes();
  }

  componentWillUpdate() {
    this.applyIconAttributes();
  }

 applyIconAttributes() {
    if (this.iconConfig !== undefined && this.iconConfig.iconName !== undefined) {
      this.hasIcon = true;
    }
  }
  
  render() {
    return (
      <div class={classNames('f-lozenge', {'long' : this.content.length >= 3}, {'icon-left' : (this.iconConfig !== undefined && this.iconConfig.iconPlacement === 'left')})}>
        {this.content}
        {this.hasIcon ? <f-icon iconConfig={this.iconConfig}></f-icon> : ''}
      </div>
    );
  }
}
