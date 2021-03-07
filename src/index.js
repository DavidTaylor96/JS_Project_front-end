import CircleProgress from "@/components/emissionsChart.vue";

CircleProgress.install = function(Vue) {
  Vue.component(CircleProgress.name, CircleProgress);
};

export default CircleProgress;