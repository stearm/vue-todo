<template>
  <div>
    <new-item :add="add" />
    <ul>
      <li v-for="item in items" v-bind:key="item.id">
        <item :text="item.text" :complete="item.complete" v-on:click.native="toggle(item.id)" />
      </li>
    </ul>
    <counter :total="items.length" :completed="items.filter(item => item.complete).length" />
  </div>
</template>

<script>
import { v4 } from 'uuid';
import Item from './Item';
import NewItem from './NewItem';
import Counter from './Counter';

export default {
  name: 'ListItem',
  data: () => ({
    items: [
      { id: v4(), text: 'Item 1', complete: true },
      { id: v4(), text: 'Item 2', complete: false },
      { id: v4(), text: 'Item 3', complete: false },
    ],
  }),
  methods: {
    add(text) {
      this.items = [].concat(this.items, { id: v4(), text, complete: false });
    },
    remove(id) {
      this.items = this.items.filter(item => item.id !== id);
    },
    toggle(id) {
      this.items = this.items.map((item) => {
        if (item.id === id) {
          return Object.assign({}, item, { complete: !item.complete });
        }
        return item;
      });
    },
  },
  components: {
    item: Item,
    'new-item': NewItem,
    counter: Counter,
  },
};
</script>

<style scoped>
  ul {
    list-style-type: none;
  }
  li {
    cursor: pointer;
  }
</style>
