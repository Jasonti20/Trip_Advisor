<template>
    <a-form
      :model="formState"
      name="time_related_controls"
      v-bind="formItemLayout"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
    >
      <a-form-item name="rangeTimePicker" label="RangePicker[showTime]" v-bind="rangeConfig">
        <a-range-picker
          v-model:value="formState['rangeTimePicker']"
          show-time
          format="YYYY-MM-DD HH:mm:ss"
          value-format="YYYY-MM-DD HH:mm:ss"
        />
      </a-form-item>
      <a-form-item name="destination" label="destination" v-bind="config" >
      <a-input v-model:value="formState['destination']" />
      </a-form-item>
      
      <a-form-item
        :wrapper-col="{
          xs: { span: 24, offset: 0 },
          sm: { span: 16, offset: 8 },
        }"
      >
        <a-button type="primary" html-type="submit">Submit</a-button>
      </a-form-item>
    </a-form>
  </template>
  <script>

import { defineComponent, reactive } from 'vue';
  export default defineComponent({
    setup() {
      const formItemLayout = {
        labelCol: {
          xs: {
            span: 24,
          },
          sm: {
            span: 8,
          },
        },
        wrapperCol: {
          xs: {
            span: 24,
          },
          sm: {
            span: 16,
          },
        },
      };
      const config = {
        rules: [{
          type: 'string',
          required: true,
          message: 'Please input a city!',
        }],
      };
      const rangeConfig = {
        rules: [{
          type: 'array',
          required: true,
          message: 'Please select time!',
        }],
      };
      const formState = reactive({
      });
      const onFinish = values => {
        console.log('Success:', values, formState);
      };
      const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
      };
      return {
        formState,
        onFinish,
        onFinishFailed,
        formItemLayout,
        config,
        rangeConfig,
      };
    },
  });
  </script>