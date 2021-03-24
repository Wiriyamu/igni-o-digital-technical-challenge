import NavbarDashboard from '@/components/TheDashboard/NavbarDashboard'
import { mount } from '@vue/test-utils'

describe('NavbarDashboard.vue', () => {
  it('Snapshot component', () => {
    const wrapper = mount(NavbarDashboard)

    expect(wrapper.html()).toMatchSnapshot()
  })
})
