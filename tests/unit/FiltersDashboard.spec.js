import FiltersDashboard from '@/components/TheDashboard/FiltersDashboard'
import { mount } from '@vue/test-utils'

describe('FiltersDashboard.vue', () => {
  it('Snapshot component', () => {
    const wrapper = mount(FiltersDashboard)

    expect(wrapper.html()).toMatchSnapshot()
  })
})
