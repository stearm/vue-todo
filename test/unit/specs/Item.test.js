import Vue from 'vue';
import Item from '@/components/Item';

// Passing props when mounting component using constructor: https://vuejs.org/v2/api/#propsData
describe('Item.vue', () => {
  it('should render correct complete item', () => {
    const Constructor = Vue.extend(Item);
    const vm = new Constructor({
      propsData: {
        text: 'item1',
        complete: true,
      },
    }).$mount();

    expect(vm.$el.textContent).toEqual('item1');
    expect(vm.$el.className).toEqual('completed');
  });

  it('should render correct uncomplete item', () => {
    const Constructor = Vue.extend(Item);
    const vm = new Constructor({
      propsData: {
        text: 'item1',
        complete: false,
      },
    }).$mount();

    expect(vm.$el.className).toEqual('');
  });
});
