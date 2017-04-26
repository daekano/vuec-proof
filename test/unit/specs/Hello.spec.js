import Vue from 'vue';
import Hello from '@/components/Hello';
import Service from '@/services/service';

describe('Hello.vue', () => {
  it('should render correct contents', () => {
    Vue.$ioc.register('Service', Service);
    const Constructor = Vue.extend(Hello);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('.greeting').textContent)
      .to.equal('true');
  });
});
