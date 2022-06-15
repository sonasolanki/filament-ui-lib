import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { FIcon } from './f-icon';

describe('f-icon', () => {
    //Define any configs, props here
    it('renders', async () =>{
        const { root } = await newSpecPage({
            components: [FIcon],
            template: () => <f-icon></f-icon>
        });
        expect(root).toEqualHtml(`
            <f-icon>
                <mock:shadow-root>
                    <div class="f-icon">
                        f-icon
                    </div>
                </mock:shadow-root>
            </f-icon>
        `)
    })
})