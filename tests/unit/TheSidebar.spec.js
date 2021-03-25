import AppsSidebar from '@/components/TheSidebar/AppsSidebar.vue'
import BrendSidebar from '@/components/TheSidebar/BrendSidebar.vue'
import SelectSidebar from '@/components/TheSidebar/SelectSidebar.vue'
import TheSidebar from '@/components/TheSidebar/TheSidebar.vue'
import { mount } from '@vue/test-utils'

describe('TheSidebar.vue', () => {
  it('should render child components correctly', () => {
    const wrapper = mount(TheSidebar)
    expect(wrapper.findComponent(BrendSidebar).exists()).toBe(true)
    expect(wrapper.findComponent(SelectSidebar).exists()).toBe(true)
    expect(wrapper.findComponent(AppsSidebar).exists()).toBe(true)
  })
})
