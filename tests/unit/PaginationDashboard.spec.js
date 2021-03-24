import PaginationDashboard from '@/components/TheDashboard/PaginationDashboard'
import { mount } from '@vue/test-utils'

describe('PaginationDashboard.vue', () => {
  it('Snapshot component', () => {
    const wrapper = mount(PaginationDashboard)

    expect(wrapper.html()).toMatchSnapshot()
  })
})
