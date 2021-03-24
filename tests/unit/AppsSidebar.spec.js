import AppsSidebar from '@/components/TheSidebar/AppsSidebar'
import { mount } from '@vue/test-utils'

describe('AppsSidebar.vue', () => {
  it('Snapshot component', () => {
    const wrapper = mount(AppsSidebar)

    expect(wrapper.html()).toMatchSnapshot()
  })
})
