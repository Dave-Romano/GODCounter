import { MIN, HOURS } from "./variables";

const minutes = [1, 2, 5, 10, 15, 30].map((item) => `${item} ${MIN}`);
const hours = [1, 2, 3, 6, 12, 24].map((item) => `${item} ${HOURS}`);

export const timeValues = [...minutes, ...hours];
