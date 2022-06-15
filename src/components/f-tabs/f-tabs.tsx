import { Component, h, Prop } from '@stencil/core';
import { IItemModel } from '../../models/awlds.interfaces';
import classNames from 'classnames';

@Component({
  tag: 'f-tabs',
  styleUrl: 'f-tabs.scss',
  shadow: false
})
export class FTabs {
  /**
   * array of itemModels
   *
   * @type {Array<IItemModel>}
   * @memberof FTabs
   */
  @Prop() items: Array<IItemModel>;

  /**
   * orientation of tabs
   *
   * @type {('horizontal' | 'vertical')}
   * @memberof FTabs
   */
  @Prop() orientation: 'horizontal' | 'vertical' = 'horizontal';

  componentWillLoad() {
    this.applyTabItemUpdates();
  }

  componentWillUpdate() {
    this.applyTabItemUpdates();
  }

  private applyTabItemUpdates() {
  //This forces justification of item based on orientation
    this.items = this.items.map(item => {
      return {
        ...item,
        justification: this.orientation === 'vertical' ? 'left' : 'center'
      };
    });
  }
  
  render() {
    return (
      <div class={classNames('f-tabs', this.orientation)}>
        {this.items.map(item => (
          <f-item item={item}></f-item>
        ))}
      </div>
    );
  }
}
