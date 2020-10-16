import { mount } from '@vue/test-utils'
import Hello from '@/HelloWorld.vue'

test('displays name', () => {
    const wrapper = mount(Hello, {
        data () {
            return {
                name: "Moon"
            }
        }
    })

    expect(wrapper.text()).toContain('Hello Moon!')
})

test('displays default name', () => {
    const wrapper = mount(Hello)

    expect(wrapper.text()).toContain('Hello World!')
})
