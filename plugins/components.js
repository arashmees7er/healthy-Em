import Vue from 'vue'
import Element from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import VueLodash from 'vue-lodash'
import VueMeta from 'vue-meta'
// import FullCalendar from "vue-full-calendar";
// import "fullcalendar-scheduler";
const COMPONENTS = [{
  name: Element,
  plugin: { size: 'medium', locale }
}, {
  name: VueLodash,
  plugin: {}
}, {
  name: VueMeta,
  plugin: {
    keyName: 'head',
    attribute: 'data-vue-meta',
    ssrAttribute: 'data-vue-meta-server-rendered',
    // tagIDKeyName: 'gggfgfhktxjtyj',
    refreshOnceOnNavigation: true
  }
}] 

export default () => {
  COMPONENTS.forEach(component => {
    Vue.use(component.name, component.plugin)
  })
}
