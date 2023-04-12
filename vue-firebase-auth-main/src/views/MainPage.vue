<template>
  <a-form
    :model="formState"
    name="time_related_controls"
    :form-item-layout="formItemLayout"
    @finish="onFinish"
    @finish-failed="onFinishFailed"
  >
    <a-form-item
      name="rangeTimePicker"
      label="RangePicker[showTime]"
      :rules="rangeConfig.rules"
    >
      <a-range-picker
        v-model:value="formState.rangeTimePicker"
        show-time
        format="YYYY-MM-DD HH"
        value-format="YYYY-MM-DD HH"
      />
    </a-form-item>
    <a-form-item name="destination" label="destination" :rules="config.rules">
      <a-input v-model:value="formState.destination" />
    </a-form-item>

    <a-form-item
      :wrapper-col="{
        xs: { span: 24, offset: 0 },
        sm: { span: 16, offset: 8 },
      }"
    >
      <a-button type="primary" html-type="submit" @click.prevent="plan">
        Submit
      </a-button>
    </a-form-item>
  </a-form>
</template>

<script>
import { defineComponent, reactive } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

export default defineComponent({
  setup() {
    const formItemLayout = {
      // layout options
    };
    const config = {
      // form validation rules
    };
    const rangeConfig = {
      // form validation rules for range picker
    };
    const formState = reactive({});
    const router = useRouter();

    const onFinish = async (values) => {
      console.log("Success:", values, formState);

      // create a JSON object from the form data
      const formData = {
        destination: formState.destination,
        rangeTimePicker: formState.rangeTimePicker,
      };

      try {
        // send a POST request to the server with the form data
        const response = await axios.post(
          "http://localhost:8080/submit-form",
          formData
        );

        console.log(response.data); // response from the server

        // navigate to the /plan route and pass the response data as a query parameter
        router.push({
          name: "plan",
          query: { response: JSON.stringify(response.data), result: formData },
        });
      } catch (error) {
        console.error(error);
      }
    };

    const onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo);
    };

    const plan = async () => {
      try {
        // Trigger the onFinish function to submit the form data
        await onFinish();
        // navigate to the /plan page
        router.push("/plan");
      } catch (error) {
        console.error(error);
      }
    };

    return {
      formState,
      onFinish,
      onFinishFailed,
      formItemLayout,
      config,
      rangeConfig,
      plan,
    };
  },
});
</script>
