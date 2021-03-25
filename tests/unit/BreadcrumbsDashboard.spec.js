import BreadcrumbsDashboard from '@/components/TheDashboard/BreadcrumbsDashboard'
import { mount } from '@vue/test-utils'

describe('BreadcrumbsDashboard.vue', () => {
  it('Snapshot component', () => {
    const wrapper = mount(BreadcrumbsDashboard)

    expect(wrapper.html()).toMatchSnapshot()
  })
})
