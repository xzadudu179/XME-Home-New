import mitt from "mitt";

export const eventBus = mitt<{
  "page-ready": string;
}>();