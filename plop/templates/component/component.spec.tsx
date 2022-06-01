import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { TemplateComponent } from './template-component';

describe('template-component', () => {
    //Define any configs, props here
    it('renders', async () =>{
        const { root } = await newSpecPage({
            components: [TemplateComponent],
            template: () => <template-component></template-component>
        });
        expect(root).toEqualHtml(`
            <template-component>
                <mock:shadow-root>
                    <div class="template-component">
                        template-component
                    </div>
                </mock:shadow-root>
            </template-component>
        `)
    })
})