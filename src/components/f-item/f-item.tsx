import { Component, Event, EventEmitter, h, Prop, State } from '@stencil/core';
import classNames from 'classnames';
import { IItemModel } from '../../models/awlds.interfaces';
import { getUUId } from '../../utils/utils';

//TODO: add tag size to be passed in.

@Component({
  tag: 'f-item',
  styleUrl: 'f-item.scss',
  shadow: false
})
export class FItem {
  /**
   * model for item
   *
   * @type {IItemModel}
   * @memberof FItem
   */
  @Prop({mutable: true}) item: IItemModel;

  @State() hasIcon = false;
  /**
   * emits item being selected
   *
   * @type {EventEmitter}
   * @memberof FItem
   */
  @Event() itemSelected: EventEmitter;

  componentWillLoad() {
    if (this.item.uuid === undefined) {
      this.item.uuid = getUUId();
    }
    this.applyIconAttributes();
  }

  componentWillUpdate() {
    this.applyIconAttributes();
  }

  applyIconAttributes() {
    if (this.item.icon !== undefined) {
      this.hasIcon = true;
    }
  }

  itemSelectHandler(e: MouseEvent) {
    this.itemSelected.emit(e);
  }

  render() {
    return (
      <button type="button" 
        class={classNames('f-item', {'selected' : this.item.selected}, {[`${this.item.justification}`] : this.item.justification !== undefined}, {'icon-left' : (this.item.icon !== undefined && this.item.icon.iconPlacement === 'left')}, {'flex-column' : (this.item.subText !== undefined && this.item.subText.length > 0)})} 
        disabled={this.item.disabled}
        id={this.item.uuid}
        aria-disabled={this.item.disabled}
        aria-label={this.item.name}
        title={this.item.name}
        onClick={(e) => this.itemSelectHandler(e)}
      >
        <span class="flex">
          <span>{this.item.name}</span>
          {this.hasIcon ? <f-icon iconConfig={this.item.icon}></f-icon> : ''}
        </span>
        {this.item.subText !== undefined ? <span class="sub-text">{this.item.subText}</span> : ''}
      </button>
    );
  }
}
