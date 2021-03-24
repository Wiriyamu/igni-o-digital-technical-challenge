import ListItemDashboard from '@/components/TheDashboard/ListItemDashboard'
import { mount } from '@vue/test-utils'

describe('ListItemDashboard.vue', () => {
  it('Snapshot component', () => {
    const wrapper = mount(ListItemDashboard)

    expect(wrapper.html()).toMatchSnapshot()
  })
})
