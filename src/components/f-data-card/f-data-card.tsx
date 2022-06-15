import { Component, h } from '@stencil/core';

/**
 * @author Sona Solanki
 * @description
 * @see
 *
 * @export
 * @class FDataCard
 */
@Component({
  tag: 'f-data-card',
  styleUrl: 'f-data-card.scss',
  shadow: false
})

export class FDataCard {
  render() {
    return (
      <div class="f-data-card">
        <slot />
      </div>
    );
  }
}
