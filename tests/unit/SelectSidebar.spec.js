import SelectSidebar from '@/components/TheSidebar/SelectSidebar'
import { mount } from '@vue/test-utils'

describe('SelectSidebar.vue', () => {
  it('Snapshot component', () => {
    const wrapper = mount(SelectSidebar)

    expect(wrapper.html()).toMatchSnapshot()
  })
})
