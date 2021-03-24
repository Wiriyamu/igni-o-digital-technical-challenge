import BrendSidebar from '@/components/TheSidebar/BrendSidebar'
import { mount } from '@vue/test-utils'

describe('BrendSidebar.vue', () => {
  it('Snapshot component', () => {
    const wrapper = mount(BrendSidebar)

    expect(wrapper.html()).toMatchSnapshot()
  })
})
