import Vue from 'vue'
import Element from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import VueLodash from 'vue-lodash'
// import FullCalendar from "vue-full-calendar";
// import "fullcalendar-scheduler";

export default () => {
  Vue.use(Element, { size: 'medium', locale })
  Vue.use(VueLodash)
}
