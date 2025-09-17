import mitt from "mitt";

// 改名？
export const eventBus = mitt<{
  "page-ready": string;
}>();