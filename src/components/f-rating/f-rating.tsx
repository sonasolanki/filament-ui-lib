import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'f-rating',
  styleUrl: 'f-rating.scss',
  shadow: true
})
export class FRating {

  /**
   * Config for FRating props
   *
   * @type {string}
   * @memberof FRating
   */
  @Prop() FRatingProp: string;
  
  render() {
    return (
      <div class="f-rating">
        f-rating
      </div>
    );
  }
}
