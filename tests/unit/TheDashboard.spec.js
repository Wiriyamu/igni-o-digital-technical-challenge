import BreadcrumbsDashboard from '@/components/TheDashboard/BreadcrumbsDashboard.vue'
import FiltersDashboard from '@/components/TheDashboard/FiltersDashboard.vue'
import ListDashboard from '@/components/TheDashboard/ListDashboard.vue'
import ListItemDashboard from '@/components/TheDashboard/ListItemDashboard.vue'
import NavbarDashboard from '@/components/TheDashboard/NavbarDashboard.vue'
import PaginationDashboard from '@/components/TheDashboard/PaginationDashboard.vue'
import TheDashboard from '@/components/TheDashboard/TheDashboard.vue'
import { mount } from '@vue/test-utils'

describe('TheDashboard.vue', () => {
  it('should render child components correctly', () => {
    const wrapper = mount(TheDashboard)
    expect(wrapper.findComponent(NavbarDashboard).exists()).toBe(true)
    expect(wrapper.findComponent(FiltersDashboard).exists()).toBe(true)
    expect(wrapper.findComponent(ListDashboard).exists()).toBe(true)
    expect(wrapper.findComponent(ListItemDashboard).exists()).toBe(true)
    expect(wrapper.findComponent(PaginationDashboard).exists()).toBe(true)
    expect(wrapper.findComponent(BreadcrumbsDashboard).exists()).toBe(true)
  })
})
