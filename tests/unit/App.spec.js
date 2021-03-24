import App from '@/App.vue'
import TheDashboard from '@/components/TheDashboard/TheDashboard.vue'
import TheSidebar from '@/components/TheSidebar/TheSidebar.vue'
import { mount } from '@vue/test-utils'

describe('App.vue', () => {
  it('should render child components correctly', () => {
    const wrapper = mount(App)
    expect(wrapper.findComponent(TheSidebar).exists()).toBe(true)
    expect(wrapper.findComponent(TheDashboard).exists()).toBe(true)
  })
})
