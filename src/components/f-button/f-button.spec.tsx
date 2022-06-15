import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { FButton } from './f-button';

describe('f-button', () => {
    //Define any configs, props here
    it('renders', async () =>{
        const { root } = await newSpecPage({
            components: [FButton],
            template: () => <f-button></f-button>
        });
        expect(root).toEqualHtml(`
            <f-button>
                <mock:shadow-root>
                    <div class="f-button">
                        f-button
                    </div>
                </mock:shadow-root>
            </f-button>
        `)
    })
})