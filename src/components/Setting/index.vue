<template>
  <div class="side-setting">
    <SettingItem title="主题色">
      <ColorCheckboxGroup :multiple="false">
        <ColorCheckbox v-for="(color, index) in palettes"
                       :key="index"
                       :color="color"
                       :default-values="[palettes.indexOf(theme.color)]"
                       :value="index"
                       @change="(values, colors) => setTheme({...theme, color: ''})" />
      </ColorCheckboxGroup>
    </SettingItem>
  </div>
</template>
<script>
import SettingItem from "./SettingItem";
import { ColorCheckbox } from "@/components/CheckBox";
const ColorCheckboxGroup = ColorCheckbox.Group;

//引入vuex
import { mapState, mapMutations } from "vuex";
export default {
  name: "Setting",
  components: {
    SettingItem,
    ColorCheckboxGroup,
    ColorCheckbox,
  },
  data() {
    return {
      theme: {
        color: "#13c2c2",
        mode: "dark",
        success: "#52c41a",
        warning: "#faad14",
        error: "#f5222d",
      },
    };
  },
  computed: {
    ...mapState("setting", ["palettes"]),
  },
  methods: {
    ...mapMutations("setting", ["setTheme"]),
  },
};
</script>

