import ListDashboard from '@/components/TheDashboard/ListDashboard'
import { mount } from '@vue/test-utils'

describe('ListDashboard.vue', () => {
  it('Snapshot component', () => {
    const wrapper = mount(ListDashboard)

    expect(wrapper.html()).toMatchSnapshot()
  })
})
